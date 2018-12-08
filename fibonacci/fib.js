print=console.log;
// above in place for code-golf.io

(f=(a,b)=>print(a)+(a<6e5&&f(b,a+b)))(0,1)
