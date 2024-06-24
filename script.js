function codigoQr() {
    var code = document.getElementById("qr-code");
    code.style.display = "block"
    if (code.style.display = "block"){
      
    }
    setTimeout(function () {
      var code = document.getElementById("qr-code");
      code.style.display = "none"
    }, 10000);
  }

  
  function startTime()
{
var today=new Date();
var h=today.getHours();
var m=today.getMinutes();
var s=today.getSeconds();
// adicione um zero na frente de números<10
m=checkTime(m);
s=checkTime(s);
if(h<=12){
f="AM";
}
if(h>=12){
f="PM";
}

document.getElementById('relogioo').innerHTML=f +" -  "+h+" | "+m+" | "+s ;
t=setTimeout('startTime()',500);
}

function checkTime(i)
{
if (i<10)
{
i="0" + i;
}
return i;
}
function day(){
var calendario=new Date();
var dia=calendario.toLocaleDateString()
document.getElementById("relogioo").innerHTML= dia ;
console.log(dia)
}





