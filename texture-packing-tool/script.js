const res=document.getElementById("res");

function run(){
 let m=+maps.value;
 if(!m){res.innerText="Enter value";return;}
 let packed=Math.ceil(m/3);
 res.innerText=`Packed textures needed: ${packed}`;
}

