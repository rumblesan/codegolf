l=(n)=>n<=0?[1]:s(l(n-1))
s=(q)=>{var v,o=[],c=0
q.forEach((n)=>n==v?c++:(v&&o.push(c,v),v=n,c=1))
return o.concat([c,v])}
console.log(l(process.argv[2]).join(""))
