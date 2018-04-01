
import document from "document";
import { HeartRateSensor } from "heart-rate";
import {user} from "user-profile";
import { me } from "appbit";
import { display } from "display";
import { vibration } from "haptics";

import * as messaging from "messaging";

 messaging.peerSocket.onopen = function() {
  // Ready to send messages
            goo;
            }

display.on = false; //need to see on real fitbit if it actually turns off.

let hrmData = document.getElementById("hrm-data");

let hrm = new HeartRateSensor();
var cont = true;
var vibConfirm = 0
var timeInterval = 1800000;
hrm.start();
if(user.restingHeartingRate == undefined){
  let initRestingHeartRate = hrm;
}
else{
let initRestingHeartRate = user.restingHeartRate;
}
var percentchange = []; 
function refreshData() {
   
    if ((timeInterval == 600000) || (timeInterval == 240000)){
      hrm: {
      heartRate: hrm.heartRate ? hrm.heartRate : 0
      }
      percentchange.push((hrm - initRestingHeartRate)/(initRestingHeartRate));
      let confirm1 = percentchange[percentchange.length - 1];
      let confirm2 = percentchange[percentchange.length - 2];
      if( 0.34<=((confirm1+confirm2)/2)< 0.45 ){
         vibration.start("bump");
         setTimeout(vibration.stop, 100) // needs a response
         vibConfirm +=1;
         timeInterval = 240000
         if(vibConfirm == 2){
        //send a make the companion listen to whether the app is still on.
            cont = false;
            messaging.peerSocket.onopen = function() {
  // Ready to send messages
            sendMessage();
            }
           
         }
      }
      
    }
    hrm: {
      heartRate: hrm.heartRate ? hrm.heartRate : 0
    }
  if ( (0.34<=((hrm - initRestingHeartRate)/(initRestingHeartRate)) < 0.45) && (percentchange.length >= 2) ){
    timeInterval = 600000;
  }
  percentchange.push((hrm - initRestingHeartRate)/(initRestingHeartRate));
  
}
function sendMessage() {
  // Sample data
  var data = 5;
  }
  
refreshData();
console.log("hi");
if(cont == true){
setInterval(refreshData, timeInterval);  //remember to uncomment this.
}
console.log("done");
