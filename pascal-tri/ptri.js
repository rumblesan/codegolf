const arguments=[]
for (i=2; j=process.argv[i]; i++) {
  arguments[i-2]=''+j;
}
print=console.log
// above in place for code-golf.io

for(i=0;i++<20;print(o))for(o='',s=j=1;j<=i;s=s*(i-j)/j++)o+=s+' '
