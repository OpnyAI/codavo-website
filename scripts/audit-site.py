"""Read-only local release audit: HTML, metadata, internal links, anchors and assets."""
import concurrent.futures, html, json, sys, urllib.request, urllib.parse, xml.etree.ElementTree as ET
from html.parser import HTMLParser
from pathlib import Path
BASE = sys.argv[1] if len(sys.argv)>1 else 'http://127.0.0.1:3100'
DOMAIN = 'https://www.codavo-webstudio.de'
class Page(HTMLParser):
 def __init__(self):
  super().__init__(); self.h1=0; self.title=''; self.in_title=False; self.description=''; self.canonical=''; self.ids=set(); self.duplicate_ids=[]; self.robots=""; self.links=[]; self.assets=set(); self.schema=[]; self.in_schema=False; self.schema_text=''
 def handle_starttag(self, tag, attrs):
  a=dict(attrs)
  if tag=='h1': self.h1+=1
  if tag=='title': self.in_title=True
  if a.get('id'):
   if a['id'] in self.ids: self.duplicate_ids.append(a['id'])
   self.ids.add(a['id'])
  if tag=='meta' and a.get('name')=='robots': self.robots=a.get('content','')
  if tag=='meta' and a.get('name')=='description': self.description=a.get('content','')
  if tag=='link' and a.get('rel')=='canonical': self.canonical=a.get('href','')
  if tag=='a' and a.get('href'): self.links.append(a['href'])
  if tag in ('img','video','source','script') and a.get('src'): self.assets.add(a['src'])
  if tag=='video' and a.get('poster'): self.assets.add(a['poster'])
  if tag=='script' and a.get('type')=='application/ld+json': self.in_schema=True; self.schema_text=''
 def handle_endtag(self,tag):
  if tag=='title': self.in_title=False
  if tag=='script' and self.in_schema:
   self.schema.append(json.loads(self.schema_text)); self.in_schema=False
 def handle_data(self,data):
  if self.in_title:self.title+=data
  if self.in_schema:self.schema_text+=data

def fetch(path, head=False):
 try:
  with urllib.request.urlopen(urllib.request.Request(BASE+path, method="HEAD" if head and not path.startswith("/_next/image?") else "GET"),timeout=20) as r:return r.status,b"" if head else r.read(),r.headers.get('Content-Type','')
 except Exception as e:return getattr(e,'code',0),str(e).encode(),''
def internal(href,source='/'):
 url=urllib.parse.urlsplit(urllib.parse.urljoin(DOMAIN+source,html.unescape(href)))
 if url.netloc not in ('www.codavo-webstudio.de','codavo-webstudio.de','127.0.0.1:3100'):return None
 return url.path or '/',urllib.parse.unquote(url.fragment)
status,xml,_=fetch('/sitemap.xml'); assert status==200, 'Sitemap unavailable'
paths={urllib.parse.urlsplit(e.text).path for e in ET.fromstring(xml).iter() if e.tag.endswith('loc')}
indexable_paths=paths.copy()
paths.update(['/impressum','/datenschutz','/agb','/danke','/website-praesentation'])
pages={}; errors=[]; pending=paths.copy()
while pending:
 batch=sorted(pending);pending=set()
 with concurrent.futures.ThreadPoolExecutor(max_workers=6) as pool:
  results=list(pool.map(lambda p:(p,fetch(p)),batch))
 for path,(code,body,ct) in results:
  if code!=200: errors.append(f'{path}: HTTP {code}');continue
  if 'text/html' not in ct:continue
  page=Page()
  try:page.feed(body.decode())
  except Exception as e:errors.append(f'{path}: invalid HTML/JSON-LD: {e}')
  pages[path]=page
  if page.duplicate_ids:errors.append(f'{path}: duplicate IDs {page.duplicate_ids}')
  if path in indexable_paths and 'noindex' in page.robots:errors.append(f'{path}: indexable route has noindex')
  if page.h1!=1:errors.append(f'{path}: {page.h1} H1 headings')
  if not page.title or not page.description:errors.append(f'{path}: missing title/description')
  if page.canonical.rstrip("/")!=(DOMAIN+path).rstrip("/"):errors.append(f'{path}: canonical {page.canonical}')
  for href in page.links:
   target=internal(href,path)
   if target and not Path(target[0]).suffix and target[0] not in pages and target[0] not in batch:pending.add(target[0])
for field in ['title','description']:
 seen={}
 for path,page in pages.items():
  value=getattr(page,field)
  if value in seen:errors.append(f'{path}: duplicate {field} with {seen[value]}')
  seen[value]=path
assets=set()
for path,page in pages.items():
 for href in page.links:
  target=internal(href,path)
  if target and target[1] and target[0] in pages and target[1] not in pages[target[0]].ids:errors.append(f'{path}: missing anchor {href}')
 for asset in page.assets:
  target=internal(asset,path)
  if target:assets.add(target[0]+('?' + urllib.parse.urlsplit(asset).query if urllib.parse.urlsplit(asset).query else ''))
with concurrent.futures.ThreadPoolExecutor(max_workers=6) as pool:
 for path,(code,_,_) in pool.map(lambda p:(p,fetch(p,True)),sorted(assets)):
  if code!=200:errors.append(f'Asset {path}: HTTP {code}')
report={'pages_checked':len(pages),'assets_checked':len(assets),'errors':errors,'pages':[{'path':p,'title':v.title,'h1_count':v.h1,'canonical':v.canonical,'schemas':len(v.schema)} for p,v in sorted(pages.items())]}
Path('release/site-audit.json').write_text(json.dumps(report,ensure_ascii=False,indent=2))
print(json.dumps({'pages_checked':len(pages),'assets_checked':len(assets),'errors':errors},ensure_ascii=False,indent=2))
sys.exit(bool(errors))
