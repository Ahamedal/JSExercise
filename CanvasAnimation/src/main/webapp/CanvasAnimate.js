/**
 * 
 */
var canvas=document.getElementById("canvas");
//$(document).ready(function(){canvas =$("#canvas");});
 
 var context = canvas.getContext("2d");
 
 window.onload = animate;
 const arrayX = [107, 164, 251, 354,400,420];
 const arrayY = [361, 291, 246, 282,304,348];
 var i = 0;
 var j = 6;
 var r = 25;
 var left=2;
 var right=2;
 var leftContextX=60;
 var leftContextY=480;
 var leftContext=[480,433,385,335];
 var rightContextX=450;
 var flag=true;
 var flag2=true;
 
 
 var timers;
 //btn.addEventListener("click", ()=>{
    $(document).ready(function(){
        $("#button3").click(function(){
    if($("#button3").html() === "start"){
        $("#button1").prop("disabled",true);
        $("#button2").prop("disabled",true);
        flag2=false;
        $("#button3").html("stop");
            timers=setInterval(function(){
            if(left!=0&&flag){
                flag=true;
               leftToMove();
            }
            else{
                flag=false;
            }
            if(right!=0&&!flag){
               rightToMove();
            }
            else{
               flag=true;
            }
           

          },1000) ;
    }else{
        $("#button3").html("start") ;
        flag2=true;
        $("#button1").prop("disabled",false);
        $("#button2").prop("disabled",false);
        clearInterval(timers);
    }
});
});
 function animate(){
     drawBockets();
     draws();
     
 }

function drawBockets() {
     context.fillStyle = "gray";
     context.fillRect(0, 0, canvas.width, canvas.height);
     context.beginPath();
     context.moveTo(canvas.height - 20, 320);
     context.lineTo(canvas.height - 20, 500);
     context.stroke();
     context.beginPath();
     context.moveTo(canvas.height - 200, 320);
     context.lineTo(canvas.height - 200, 500);
     context.stroke();
     context.beginPath();
     context.moveTo(canvas.height - 300, 320);
     context.lineTo(canvas.height - 300, 500);
     context.stroke();
     context.beginPath();
     context.moveTo(canvas.height - 480, 320);
     context.lineTo(canvas.height - 480, 500);
     context.stroke();
 }
 function drawCircle(){
     context.beginPath();
     context.fillStyle = "red";
     context.arc(leftContextX,leftContextY, r, 0, 2 * Math.PI);
     context.fill();
     
 }
 function drawCircle1(){
    context.beginPath();
    context.fillStyle = "green";
    context.arc(rightContextX,leftContextY, r, 0, 2 * Math.PI);
    context.fill();
    
}
 
 function draws(){
  for(var i=0;i<left;i++){
    leftContextY=leftContext[i];
    drawCircle();
  }
  for(var j=0;j<right;j++){
    leftContextY=leftContext[j];
    drawCircle1();
  }
 }
 
      function leftToMove() {
         if(left!=0){
             left--;
            if(left==0){
                $("#button1").prop("disabled",true);
            }
         var timer = setInterval(function() {
             animate();
             context.beginPath();
             context.fillStyle = "red";
             context.arc(arrayX[i], arrayY[i], r, 0, 2 * Math.PI);
             context.fill();
           
             if (arrayY[i] == 348) {
                 i=0;
                 right++;
                 if(flag2){
                    $("#button2").prop("disabled",false);
                 }
                 animate();
                 clearInterval(timer);
             }
             i++;
 
         }, 120);
         }
         
         
     }
     function rightToMove() {
         if(right!=0){
            
            right--;
            if(right==0){
                $("#button2").prop("disabled",true);
            }
         var timer = setInterval(function() {
             animate();
             context.beginPath();
             context.fillStyle = "green";
             context.arc(arrayX[j], arrayY[j], r, 0, 2 * Math.PI);
             context.fill();
           
             if (arrayY[j] == 361) {
                 j=6;
                 left++;
                 if(flag2){
                    $("#button1").prop("disabled",false);
                 }
                 animate();
                 clearInterval(timer);
             }
             j--;
 
         }, 120);
         }
         
     }
     var p = document.getElementById("p");
 function getCursorPosition(canvas, event) {
     const rect = canvas.getBoundingClientRect()
     const x = event.clientX - rect.left
     const y = event.clientY - rect.top
     p.innerHTML = "x: " + x + " y: " + y;
 }
 
 canvas.addEventListener('mousedown', function(e) {
     getCursorPosition(canvas, e)
 })