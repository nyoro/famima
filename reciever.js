var Bleacon = require('bleacon');
//var execSync = require('child_process').execSync;
var Sound = require('node-mpg123');

var fami = new Sound('famima.mp3');
var playing=false;
fami.on("complete",function(){
    playing = false;
 });


var min = 0, max = -100;
Bleacon.startScanning();

Bleacon.on('discover', function(bleacon) {
   //console.dir(bleacon);
  // console.log(bleacon.rssi)
  var rssi = bleacon.rssi;
  var old_min = min;
  var old_max = max;
  min = Math.min(rssi,min);
  max = Math.max(rssi,max);
 
 if(min < old_min){ 
  console.log("min: "+ min);
 }
 if(max > old_max) {
   console.log("max: "+ max);
 }
  if(bleacon.rssi > -65 && playing === false){
    //child = execSync('mpg123 famima.mp3');
    //console.log(child);
    //process.exit();
      playing = true;
      fami.play();
 } 

});
