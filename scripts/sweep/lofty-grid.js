const sleep=ms=>new Promise(r=>setTimeout(r,ms));
let clicks=0,last=-1,stable=0;
for(let i=0;i<30;i++){
  const n=document.querySelectorAll('a[href^="/property_deal/"]').length;
  const b=[...document.querySelectorAll('button')].find(x=>/Show more properties/i.test(x.textContent));
  if(!b){ if(n===last) break; }
  if(b){ b.click(); clicks++; }
  await sleep(2500);
  const m=document.querySelectorAll('a[href^="/property_deal/"]').length;
  if(!b && m===n) break;
  last=n;
}
const hrefs=[...new Set([...document.querySelectorAll('a[href^="/property_deal/"]')].map(a=>a.getAttribute('href')))];
const stillMore=!![...document.querySelectorAll('button')].find(x=>/Show more properties/i.test(x.textContent));
const cards=[...document.querySelectorAll('a.block.pt-3[href^="/property_deal/"]')].map(a=>{
  const c=a.parentElement; return {href:a.getAttribute('href'), text:c.innerText.replace(/\s+/g,' ').slice(0,300)};});
return {clicks,stillMore,nHref:hrefs.length,nCards:cards.length,cards,hrefs};
