const fs=require('fs');
const out={};
for (const page of ['Mechanization','CowComfort','FeedAdditives']) {
  const src=fs.readFileSync(`./src/pages/${page}.jsx`,'utf8');
  const imports={};
  for (const m of src.matchAll(/import\s+(\w+)\s+from\s+["']\.\.\/assets\/([^"']+)["']/g)) imports[m[1]]=m[2];
  const res={imports};
  for (const name of ['products','stats','features']) {
    const i=src.indexOf(`const ${name} = [`); if(i<0) continue;
    let depth=0,j=src.indexOf('[',i);
    for(let k=j;k<src.length;k++){ if(src[k]=='[')depth++; else if(src[k]==']'){depth--; if(!depth){j=[j,k];break;}} }
    let body=src.slice(j[0],j[1]+1);
    const ctx={}; for(const id of Object.keys(imports)) ctx[id]='ASSET:'+imports[id];
    const proxy=new Proxy(ctx,{has:()=>true,get:(t,p)=>p in t?t[p]:(typeof p==='string'?(p in globalThis? globalThis[p]: 'IDENT:'+p):undefined)});
    res[name]=(new Function('scope',`with(scope){return ${body}}`))(proxy);
  }
  // JSX text after return (
  const r=src.indexOf('  return (');
  res.jsxText=[...src.slice(r).matchAll(/>([^<>{}]*[A-Za-z][^<>{}]*)</g)].map(m=>m[1].replace(/\s+/g,' ').trim()).filter(Boolean);
  out[page]=res;
}
fs.writeFileSync('products.json',JSON.stringify(out,null,1));
for(const p in out){console.log(p,out[p].products.length,'products; cats:',[...new Set(out[p].products.map(x=>x.category))].length, 'stats',JSON.stringify(out[p].stats),'\nfeatures',JSON.stringify(out[p].features),'\njsx',JSON.stringify(out[p].jsxText));}
