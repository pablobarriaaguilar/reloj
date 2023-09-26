function getSecondsSinceStartOfDay() {
    return new Date().getSeconds() + 
      new Date().getMinutes() * 60 + 
      new Date().getHours() * 3600;
  }
      
  setInterval( function() {
      var time = getSecondsSinceStartOfDay();
      console.log(time);
    var secondsAngle = (time % 60) * 6; 
    var minutesAngle = ((time / 60) % 60) * 6; 
    var hoursAngle = ((time / 3600) % 12) * 30; 

    document.querySelector("#seconds").style.transform = "rotate(" + secondsAngle + "deg)";
    document.querySelector("#minutes").style.transform = "rotate(" + minutesAngle + "deg)";
    document.querySelector("#hour").style.transform = "rotate(" + hoursAngle + "deg)";
  }, 1000);

  

  setInterval();