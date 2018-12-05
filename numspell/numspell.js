const arguments=[]
for (i=2; j=process.argv[i]; i++) {
  arguments[i-2]=''+j;
}
print=console.log

nums=['zero','one','two','three','four','five','six','seven','eight','nine']
pows=['', '','','hundred','thousand']
teen=['ten','eleven','twelve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen']
tens=['','','twenty','thirty','forty','fifty','sixty','seventy','eighty','ninety']

for (i=0; n=arguments[i];i++,print(o)) {
  for (v=0,o='',t=n.length;t;v++,t--) {
    d=+n[v]
    e=+n[v+1]
    switch (t) {
    case 1:
      o+=nums[d];
      break;
    case 2:
      o+=((d||e)&&v?'and ':'')+(d==1?teen[e]:(d?tens[d]+(e?'-':''):'')+(e?nums[e]:''))
      t--
      break;
    default:
      o+=d!=0?nums[d]+' '+pows[t]+' ':''
      break;
    }
  }
}
