import { app } from "peer";
import * as messaging from "messaging";

const socket = new WebSocket('172.29.87.255:22');
messaging.peerSocket.onmessage = function(evt) {
  if (evt.data) {
    // The device requested weather data
    console.log("lol");
  }
}
socket.addEventListener('open', function(event){
    socket.send('Hello Server!');
    })
