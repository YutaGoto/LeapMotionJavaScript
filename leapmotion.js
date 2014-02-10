	// Pulling the Canvas DOM element into Javascript
var canvas = document.getElementById('canvas');

// Setting up the context we want to use
// var c =  canvas.getContext('2d');

// Prepping our unicorn
var img = document.createElement('img');
img.src = "http://i.imgur.com/f68W5EC.png";

// Creating our leap controller
var controller = new Leap.Controller();

// Proving that the websocket is open
controller.on( 'connect' , function(){

  console.log( 'Successfully connected.' );

});

// Proving that a device can be connected
controller.on( 'deviceConnected' , function() {

  console.log('A Leap device has been connected.');

});

// And that it can be disconnected
controller.on( 'deviceDisconnected' , function() {

  console.log( 'A Leap device has been disconnected.' );

});

// When the controller is ready, spawn the unicorn!
controller.on( 'ready' , function(){

  // c.drawImage( img , 0 , 0 );
 
});
  
controller.connect();

