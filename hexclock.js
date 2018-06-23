(function() {
  'use strict';

 function hexClock() {
    var clock = new Date();
    var hours = clock.getHours(),
        mins = clock.getMinutes(),
        secs = clock.getSeconds();

    if(hours <= 9) hours = '0' + hours;
    if(mins <= 9) mins = '0' + mins;
    if(secs <= 9) secs = '0' + secs;

    var time = hours + ':' + mins + ':' + secs;
    var color = '#' + hours + mins + secs;

    /*var color = '#bada55';*/ //system for testing if the colour contrast system works

    document.getElementById('time').innerHTML = color;
    document.getElementById('hexColor').innerHTML = time;
    document.body.style.background = color; //changes the background colour


    document.getElementById("time").style.color = invertColor(color); //sets the text colour of "time" to the inverse hex of "color"
    document.getElementById("hexColor").style.color = invertColor(color);
    setTimeout(hexClock, 1000); //waits a sec
  }

  hexClock(); //calls the function
}());

function invertColor(hex) { //function for inversing the hex code I have no idea how this works as i was pretty high on pizza
    if (hex.indexOf('#') === 0) {
        hex = hex.slice(1);
    }
    // convert 3-digit hex to 6-digits.
    if (hex.length === 3) {
        hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
    }
    if (hex.length !== 6) {
        throw new Error('Invalid HEX color.');
    }
    // invert color components
    var r = (255 - parseInt(hex.slice(0, 2), 16)).toString(16),
        g = (255 - parseInt(hex.slice(2, 4), 16)).toString(16),
        b = (255 - parseInt(hex.slice(4, 6), 16)).toString(16);
    // pad each with zeros and return
    return '#' + padZero(r) + padZero(g) + padZero(b);
}

function padZero(str, len) {
    len = len || 2;
    var zeros = new Array(len).join('0');
    return (zeros + str).slice(-len);
}
