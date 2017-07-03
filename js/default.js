var separate_time = function(time){
   var sec  = time.getSeconds();
   var min  = time.getMinutes();
   var hours = time.getHours();
   var days = time.getDate();
   var month = time.getMonth();
   var year  = time.getFullYear();
  return [sec,min,hours,days,month,year];
}

var now = new Date();
var counter = separate_time(now);
document.getElementById('contdown')textContent = 
  counter[5] + '年' +
  conuter[4] + '月' +
  conuter[3] + '日' +
  conuter[2] + '時' +
  conuter[1] + '分' +
  conuter[0] + '秒' ;

document.getElemenById('form').select.onchange = function(){
   location.href = document.getElementById('form').select.value;
}
