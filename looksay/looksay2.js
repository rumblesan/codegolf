l=(n)=>n<=0?'1':s(l(n-1))
s=(q)=>{for(v=o=c=i='';n=q[i++];){n==v?c++:(o+=c+v,v=n,c=1)}return o+c+v}
console.log(l(process.argv[2]))
