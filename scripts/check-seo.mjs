// Checks the delivered HTML and discovery endpoints, not just source configuration.
import assert from 'node:assert/strict';
const base = process.argv[2] || 'http://127.0.0.1:3100';
const domain = 'https://www.codavo-webstudio.de';
const routes = ['/automatisierung','/prozessautomatisierung','/crm-automatisierung','/ki-beratung','/individuelle-ki-loesungen'];
const html = async path => {
  const response = await fetch(base+path, {headers:{'User-Agent':'Googlebot'}});
  assert.equal(response.status,200,path);
  assert.ok(!response.headers.get('x-robots-tag')?.includes('noindex'),path);
  return response.text();
};
for (const path of routes) {
  const page = await html(path);
  assert.equal((page.match(/<h1[ >]/g)||[]).length,1,path);
  assert.ok(page.includes(`rel="canonical" href="${domain+path}"`),path);
  assert.ok(!page.match(/name="robots" content="[^"]*noindex/),path);
  assert.ok(page.includes('max-snippet:-1'),path);
  const blocks = [...page.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)].map(m=>JSON.parse(m[1]));
  const nodes = blocks.flatMap(block=>block['@graph']||[block]);
  assert.ok(nodes.some(node=>node['@type']==='Service' && node['@id']===domain+path+'#service'),path);
  assert.ok(nodes.some(node=>node['@type']==='WebPage' && node.mainEntity?.['@id']===domain+path+'#service'),path);
  assert.ok(nodes.some(node=>node['@type']==='BreadcrumbList'),path);
  if(path==='/automatisierung') {
    assert.ok(page.includes('Was ist KI-Automatisierung im Unternehmen?'));
    assert.equal(nodes.find(node=>node['@type']==='Service').hasOfferCatalog.itemListElement.length,4);
  }
}
const sitemap = await (await fetch(base+'/sitemap.xml')).text();
for(const path of routes) assert.ok(sitemap.includes(`<loc>${domain+path}</loc>`),path);
assert.ok(!sitemap.includes('<loc>'+domain+'/digitale-systeme</loc>'));
const robots = await (await fetch(base+'/robots.txt')).text();
assert.ok(robots.includes('Allow: /') && robots.includes('Sitemap: '+domain+'/sitemap.xml'));
const home = await html('/');assert.ok(home.includes('Professionelle Websites, die Vertrauen schaffen und neue Kunden gewinnen.'));
const contact = await html('/kontakt');assert.ok(contact.includes('Schritt 1 von 7'));
const thanks = await html('/danke');assert.match(thanks,/name="robots" content="[^"]*noindex/);
console.log('SEO: five AI service pages, connected structured data, canonical URLs, snippet access, sitemap, robots, webdesign homepage and seven-step funnel passed.');
