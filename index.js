var timer = 60;


function makebubble()
{
var clutter = "";

for(var i = 1; i<=70 ; i++)
 {
  var vn =   Math.floor(Math.random()*10)
    clutter += `<div class="bubble">${vn}</div>`;
 }
document.querySelector("#pbtm").innerHTML = clutter;
}


function runtimer() {

  var timer1 =  setInterval(function() {
  if(timer > 0 ) {
      timer--
      document.querySelector("#timerval").textContent = timer;
   }
   else {

      clearInterval(timer1);
   }
  
   },1000)
}

function getnewhit(){
   var rn = Math.floor(Math.random()*10)
   document.querySelector('#hitval').textContent = rn;
}

runtimer(); 
makebubble();
getnewhit();   