// From cfx-keks (https://github.com/citizenfx/cfx-server-data/tree/master/resources/%5Btest%5D/keks)
var count = 0;
var thisCount = 0;


const handlers = {
    startInitFunctionOrder(data) {
        count = data.count;
    },

    initFunctionInvoking(data) {
        document.querySelector('.progressBar').style.left = '0%';
        document.querySelector('.progressBar').style.width = ((data.idx / count) * 100) + '%';
    },

    startDataFileEntries(data) {
        count = data.count;
    },

    performMapLoadFunction(data) {
        ++thisCount;
        document.querySelector('.progressBar').style.left = '0%';
        document.querySelector('.progressBar').style.width = ((thisCount / count) * 100) + '%';
    },
};

window.addEventListener('message', function (e) {
    (handlers[e.data.eventName] || function () { })(e.data);
});

// Particles
var options = {"particles":{"number":{"value":99,"density":{"enable"
:true,"value_area":552.4033491425909}},"color":{"value":"#ffffff"},"shape":
{"type":"circle","stroke":{"width":0,"color":"#000000"},"polygon":{"nb_sides":3}
,"image":{"src":"imggithub.svg","width":70,"height":100}},"opacity":{"value":1,
"random":true,"anim":{"enable":false,"speed":1,"opacity_min":0.1,"sync":false}},
"size":{"value":2,"random":true,"anim":{"enable":false,"speed":40,"size_min":0.1,
"sync":false}},"line_linked":{"enable":false,"distance":150,"color":"#ffffff",
"opacity":0.4,"width":1},"move":{"enable":true,"speed":1.5782952832645452,"direction":
"none","random":true,"straight":false,"out_mode":"out","bounce":false,"attract":{"enable"
:false,"rotateX":600,"rotateY":1200}}},"interactivity":{"detect_on":"canvas","events":
{"onhover":{"enable":false,"mode":"repulse"},"onclick":{"enable":true,"mode":"repulse"},
"resize":true},"modes":{"grab":{"distance":400,"line_linked":{"opacity":1}},"bubble":
{"distance":400,"size":40,"duration":2,"opacity":8,"speed":3},"repulse":{"distance":200,
"duration":0.4},"push":{"particles_nb":4},"remove":{"particles_nb":2}}},"retina_detect":false};
particlesJS("particle", options);

// Realtime

function startTime() {
    var monthNames = ["01","02","03","04","05","06","07","08","09","10","11","12"];
  
    var today = new Date();
    var h = today.getHours();
    if (h < 10) { h = '0'+h; } 
    var m = today.getMinutes(); 
    var s = today.getSeconds();
    var year = today.getFullYear();
    var monthIndex = today.getMonth();
    var month = monthNames[monthIndex];
    var day = today.getDate();  
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById("showTime").innerHTML = `${h}:${m}:${s} | ${day}.${month}.${year}`
    setTimeout(startTime, 500);
  }
  
  function checkTime(i) {
    if (i < 10) {i = "0" + i};
    return i;
  }
