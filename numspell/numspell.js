const arguments=[]
for (i=2; j=process.argv[i]; i++) {
  arguments[i-2]=''+j;
}
print=console.log
// above in place for code-golf.io

w='0one0two0three0four0five0six0seven0eight0nine0ten0eleven0twelve0thirteen0fourteen0fifteen0sixteen0seventeen0eighteen0nineteen0twenty0thirty0forty0fifty0sixty0seventy0eighty0ninety'.split(0)
for(x=10,s=i='';n=arguments[i++];)t=n/100|0,d=n%100,print(!+n?'zero':(t>9?w[t/x|0]+' thousand ':s)+(t%x?w[t%x]+' hundred ':s)+(t&&d?'and ':s)+(d<21?w[d]:w[18+d/x|0]+(n%x?'-'+w[n%x]:s)))
