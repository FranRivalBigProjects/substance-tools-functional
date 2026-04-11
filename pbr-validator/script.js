const res=document.getElementById("res");

function run(){
 let a=+albedo.value,r=+rough.value;
 if(isNaN(a)||isNaN(r)){res.innerText="Enter values";return;}
 let valid = (a>=30 && a<=240 && r>=0 && r<=1);
 res.innerText=valid?"PBR valid":"Check values";
}

