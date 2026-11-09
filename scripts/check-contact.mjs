// Exercise the actual TypeScript route with an isolated provider mock; no mail is sent.
import fs from 'node:fs';
import vm from 'node:vm';
import assert from 'node:assert/strict';
import ts from 'typescript';
const code = ts.transpileModule(fs.readFileSync('src/app/api/contact-application/route.ts', 'utf8'), {compilerOptions:{module:ts.ModuleKind.CommonJS}}).outputText;
const calls=[];
const context={exports:{},process:{env:{RESEND_API_KEY:'local-test',CONTACT_APPLICATION_FROM_EMAIL:'test@example.invalid',CONTACT_APPLICATION_TO_EMAIL:'owner@example.invalid'}},console,Request,Response,Map,Date,Intl,URL,
 require(name){if(name==='next/server')return {NextResponse:{json:(data,options)=>Response.json(data,options)}}; if(name.includes('meta-conversions'))return {sendMetaLeadEvent:async()=>{throw Error('Unexpected marketing event')}}; throw Error('Unexpected import '+name)},
 fetch:async(url,options)=>{assert.equal(url,'https://api.resend.com/emails');calls.push(JSON.parse(options.body));return Response.json({id:'mock-email'});}};
vm.runInNewContext(code,context);
const post=(body,ip='test')=>context.exports.POST(new Request('http://localhost/api/contact-application',{method:'POST',headers:{'content-type':'application/json','x-forwarded-for':ip},body:typeof body==='string'?body:JSON.stringify(body)}));
(async()=>{
 assert.equal((await post('{','json')).status,400);
 assert.equal((await post(null,'null')).status,400);
 assert.equal((await post({},'missing')).status,400);
 const valid={firstName:'Test',lastName:'Person',companyName:'Testbetrieb',email:'test@example.invalid',phone:'000000',projectType:'KI-Automatisierung',currentSituation:'Wir möchten einen Prozess digitalisieren',primaryGoal:'Interne oder externe Prozesse digitalisieren',biggestProblem:'Uns fehlen Zeit und Know-how für die Umsetzung',marketingChannel:'Empfehlungen und persönliches Netzwerk',paidAdsStatus:'Nein, aktuell noch nicht',monthlyRevenue:'Unter 25.000 Euro Monatsumsatz',employeeCount:'1–3',budgetRange:'Unter 5.000 €',desiredStart:'So bald wie möglich',qualification:'Wir möchten wiederkehrende Abläufe im Einkauf automatisieren.',privacyAccepted:true};
 assert.equal((await post({...valid,privacyAccepted:false},'privacy')).status,400);
 assert.equal((await post({...valid,email:'invalid'},'email')).status,400);
 assert.equal((await post({...valid,fax:'bot'},'bot')).status,400);
 assert.equal(calls.length,0);
 for(const field of ['phone','currentSituation','primaryGoal','biggestProblem','marketingChannel','paidAdsStatus','monthlyRevenue','employeeCount','budgetRange','desiredStart']) assert.equal((await post({...valid,[field]:''},'missing-'+field)).status,400);
 const success=await post(valid,'success');assert.equal(success.status,200);assert.equal(calls.length,2);assert.equal(calls[0].reply_to,valid.email);assert.ok(calls[0].text.includes(valid.qualification));assert.equal(calls[1].to[0],valid.email);
 const websiteContext={...context,exports:{},process:{env:{RESEND_API_KEY:'local-test',WEBSITE_CHECK_FROM_EMAIL:'test@example.invalid',WEBSITE_CHECK_TO_EMAIL:'owner@example.invalid'}}};
 vm.runInNewContext(ts.transpileModule(fs.readFileSync('src/app/api/website-check/route.ts','utf8'),{compilerOptions:{module:ts.ModuleKind.CommonJS}}).outputText,websiteContext);
 const check=(body,ip)=>websiteContext.exports.POST(new Request('http://localhost/api/website-check',{method:'POST',headers:{'content-type':'application/json','x-forwarded-for':ip},body:JSON.stringify(body)}));
 assert.equal((await check(null,'check-null')).status,400);
 assert.equal((await check({},'check-missing')).status,400);
 const before=calls.length;
 assert.equal((await check({...valid,websiteUrl:'https://example.invalid',phone:'000000',biggestProblem:'Unsere Website erklärt unser Angebot nicht klar.'},'check-success')).status,200);
 assert.equal(calls.length,before+1);
 console.log('Contact and website-check routes: validation, request mail and contact confirmation passed with isolated provider mocks. No external requests.');
})().catch(e=>{console.error(e);process.exit(1)});
