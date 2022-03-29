
console.log(document.getElementById('text'))

console.log(document.getElementsByTagName("h1"))

console.log(document.getElementsByClassName('box'))

console.log(document.getElementsByTagName("h1").innerText="HELLO WORLD")

function change(){
    document.getElementById("main").style.flexDirection="column";
}


function heading(){
    document.getElementById("colorchange").style.color="red";
}

function replace(){
    let result=document.getElementById("AA").innerText="Welcome to Elevation academy";

 }


function clock() {
  var hours = document.getElementById("hour");
  var minutes = document.getElementById("min");
  var seconds = document.getElementById("sec");
  var am = document.getElementById("ampm");
  var time = new Date();

  var hrs = time.getHours();
  var mins = time.getMinutes();
  var secs = time.getSeconds();
  var am_pm = "AM";

  if (hrs == 0) {
    hrs = 12;
  }

  if (hrs > 12) {
    hrs = hrs - 12;
    am_pm = "PM";
  }
  if (hrs < 10) {
    hrs = "0" + hrs;
  }
  if (mins < 10) {
    mins = "0" + mins;
  }
  if (secs < 10) {
    secs = "0" + secs;
  }
  hours.innerText = hrs;
  minutes.innerText = mins;
  seconds.innerText = secs;
  am.innerText = am_pm;
}
setInterval(clock, 1000);


 function getOption(){
    var result=document.getElementById("text1");
    var result2=result.value
    document.getElementById("output").innerText=result2
}