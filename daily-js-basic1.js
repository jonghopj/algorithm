



var today = new Date () ;
var day = today.getDay() ;
var daylist = ["Sunday", "Monday","Tuesday", "Wednesday","thursday", "Friday", "Saturaday"] ;

console.log("Today is :" + daylist[day] + ".");

// The getDay() method is used to get the day of the week for the specified date according to 
// local time, where 0 represents Sunday. The value returned by getDay() is an integer corresponding to the day
//  of the week: 0 for Sunday, 1 for Monday, 2 for Tuesday, and so on.

var hour = today.getHours();
var minute = today.getMinutes();
var second = today.getSeconds();
var prepand = (hour >= 12)? " PM ":"  AM ";
hour = (hour ===0 && prepand === ' PM ') 
  if (hour === 0 && prepand === ' PM') {


  }
  if (minute === 0 && prepand === 'PM') {
    hour= 12;
    prepand= 'Noon';
  }
  else {
    hour = 12;
    preapand = 'PM';
  }
  if (hour===0 && prepand===' AM ') 
  { 
  if (minute===0 && second===0)
  { 
  hour=12;
  prepand=' Midnight';
  } 
  else
  { 
  hour=12;
  prepand=' AM';
  } 
  }; 
  

console.log("Current Time : "+hour + prepand + " : " + minute + " : " + second);