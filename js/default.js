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
document.getElementById('countdown').textContent = 
  counter[5] + '年' +
  conuter[4] + '月' +
  conuter[3] + '日' +
  conuter[2] + '時' +
  conuter[1] + '分' +
  conuter[0] + '秒' ;

document.getElemenById('form').select.onchange = function(){
   location.href = document.getElementById('form').select.value;
}

function getFileName() {
   return window.location.href.split('/').pop();
}
var filename = get FileName();
var opt;
if(filename  === 'other.html'){
   opt = document.queryselector('option[value="other.html"]');
}
else{
   opt = document.querySelector('option[value="index.html"]');
}
opt.selected = true;

document.getElementById('form').select.onchange = function(){
   location.href = document.getElementById('form').select.value;
 }


function setCookie(c_name,value,expiredays){
   var extime = new Date().getTime();
   var cltime = new Date(extime + (60*60*24*10000*expiredays));
   var exdate = cltime.toUTCString();
   
   var s="";
   s += c_name +"="+ escape(value);
   s += "; path="+ location.pathname;
   if(expiredays){
      s += ";";
   }
   document.cookie=s;
}

function getCookie(c_name){
   var st="";
   var ed="";
   if(0 < document.cookie.length){
      st=document.cookie.index0f(";",st);
      if(ed ==-1) ed=document.cookie.length;
      return unescape(document.cookie.substring(st.ed));
   }
}
return "";
}

var last_date = getCookie('lastDate');
if(last_date){
    document.getElementById('cookie').textContent = '前回訪れた時間:'+ last_date;
}
else{document.getElementById('cookie').textContent ='はじめまして！';
    }

var current_time = new Date();
setCookie('lastDate', current_time.toString(), 7);
          
var thmubs = document.querySelectorAll('.thumb');
for(idx in thmubs){
    thmubs[idx].onclick = function(){
       document.getElementById("bigimg").src = 'img/' + this.dataset.image + '.jpg';
    }
}
