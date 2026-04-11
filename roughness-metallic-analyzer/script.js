const res=document.getElementById("res");

function run(){
 let r=+rough.value,m=+metal.value;
 if(isNaN(r)||isNaN(m)){res.innerText="Enter values";return;}
 let result=(m>0.5 && r<0.5)?"Likely metal":"Non-metal surface";
 res.innerText=result;
}

