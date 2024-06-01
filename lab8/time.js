function showTime() {
    let today = new Date();
    let currentTime = today.toLocaleTimeString('ru-RU');
    document.getElementById('time').innerHTML = currentTime;

    let seconds = today.getSeconds();
    let secondHand = document.getElementById('second-hand');
    let secondAngle = seconds * 6; // 6 degrees per second
    secondHand.style.transform = `translateX(-50%) rotate(${secondAngle}deg)`;
}

setInterval(showTime, 1000);