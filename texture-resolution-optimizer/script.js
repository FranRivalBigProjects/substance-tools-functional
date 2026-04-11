const res=document.getElementById("res");

function run(){
 let r=+res.value;
 if(!r){res.innerText="Enter value";return;}
 let newR=Math.round(r*0.5);
 res.innerText=`Recommended resolution: ${newR}px`;
}

