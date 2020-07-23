function gethistory(){
 return document.getElementById("history-value").innerHTML;
}
function printhistory(num){
  document.getElementById("history-value").innerHTML=num;
}

function getoutput(){
  return document.getElementById("output-value").innerHTML=num;
}
function printoutput(num){
  if(num==""){
document.getElementById("output-value").innerHTML=num;
  }
  else{
 document.getElementById("output-value").innerHTML=num;
 }
}
var operaters = document.getElementsByClassName("operater");
for(var i=0;i<operater.length;i++){
  operater[i].addEventListener('click',function())
alert('i Clicked at'+this.id);
}