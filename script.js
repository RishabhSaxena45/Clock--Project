setInterval(() => {
   d = new Date();
   htime = d.getHours();
   mtime = d.getMinutes();
   stime = d.getSeconds();
   hrotate = 30*htime + mtime/2;
   mrotate = 6*mtime;
   srotate = 6*stime;
   document.getElementById('hour').style.transform = `rotate(${hrotate}deg)`;
   document.getElementById('minute').style.transform = `rotate(${mrotate}deg)`;
   document.getElementById('second').style.transform = `rotate(${srotate}deg)`;

   document.getElementById('showtime').innerHTML = `${htime}:${mtime}:${stime}`
}, 1000);
