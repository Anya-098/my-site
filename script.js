let x;
function timer() {
    const New_Year_date = new Date("1/1/2022");
    let date = new Date();
    let hour = date.getHours();
    let minute = date.getMinutes();
    let second = date.getSeconds();
    if (hour < 10) hour = "0" + hour;
    if (minute < 10) minute = "0" + minute;
    if (second < 10) second = "0" + second;
    document.getElementById("clock").innerHTML = hour + ":" + minute + ":" + second;

    let ms = New_Year_date - date;
    let days = Math.floor(ms / (1000 * 60 * 60 * 24));
    let hoursT = Math.floor((ms % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutesT = Math.floor((ms % (1000 * 60 * 60)) / (1000 * 60));
    let secondsT = Math.floor((ms % (1000 * 60)) / 1000);
    document.getElementById("timer").innerHTML = "До Нового года осталось: "+ "<br>" + days + "дней " + hoursT + "часов " + minutesT + "минут " + secondsT + "секунд ";
    if (ms < 0) {
    document.getElementById("clock").innerHTML = "C Новым Годом!";
  }
}

function start() {
    x = setInterval(timer.bind(this), 1000);
    timer();
}

start();