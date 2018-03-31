import { app } from "peer";
var runBefore = 0 
function applicationRunning () { 
if(app.readyState == "started"){
  runBefore +=1
}
if(app.readyState == "stopped" && runBefore == 1){
  
}

}
if(app.readyState==)
app.
se
console.log(app.readyState);
