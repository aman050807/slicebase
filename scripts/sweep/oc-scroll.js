const sleep=ms=>new Promise(r=>setTimeout(r,ms));
const count=()=>(document.body.innerText.match(/BSPT-OCN-\d+/g)||[]).length;
let prev=-1,same=0,hist=[];
for(let i=0;i<40;i++){
  const sc=[...document.querySelectorAll('*')].filter(e=>e.scrollHeight>e.clientHeight+50&&/(auto|scroll)/.test(getComputedStyle(e).overflowY));
  window.scrollTo(0,document.body.scrollHeight); sc.forEach(e=>e.scrollTop=e.scrollHeight);
  await sleep(2000);
  const c=count(); hist.push(c);
  if(c===prev){same++; if(same>=3)break;} else same=0;
  prev=c;
}
return {count:count(),hist};
