let startBtn = document.getElementById('start');
let resetBtn = document.getElementById('reset');
let stopBtn = document.getElementById('stop')


// JavaScript for Changing modes : Dark - Light
let modeContainer = document.querySelector('.js-dn-mode');

DayNightMode();
function DayNightMode() {
    document.body.classList.toggle('dark')
    if (document.body.classList.contains('dark')) {
        //  creates HTML for modeContainer button --> img -> svg- SUN
        modeContainer.innerHTML = `<img src="./svg/sun.svg" alt="" class="modeSun">`;
    }
    else if (!document.body.classList.contains('dark')) {
        //  creates HTML for modeContainer button --> img -> svg- MOON
        modeContainer.innerHTML = `<img src="./svg/moon.svg" alt="" class="modeMoon">`
    }
}
document.body.addEventListener('keydown', (event) => {
    if (event.key === 'm' || event.key === 'M') {
        DayNightMode();
    }
})


let hour = 0;
let minute = 0;
let second = 0;
let count = 0;


let clickCount = 0;
// to start the Watch :
startBtn.addEventListener('click', () => {
    timer = true;
    stopWatch();
    clickCount++;

    if (clickCount > 2) {
        timer = false
        clickCount = 0;
    }
});

document.body.addEventListener('keydown', (event) => {
    if (event.key === 'S' || event.key === 's') {
        timer = true;
        stopWatch();

        clickCount++;

        if (clickCount >= 2) {
            timer = false
            clickCount = 0;
        }
    }
});


//  to stop the Watch :
stopBtn.addEventListener('click', () => {
    timer = false;
})

document.body.addEventListener('keydown', (event) => {
    if (event.key === 'P' || event.key === 'p') {
        timer = false;
    }
})


//  to reset the Watch :
resetBtn.addEventListener('click', () => {
    timer = false;

    hour = 0;
    minute = 0;
    second = 0;
    count = 0;

    document.getElementById('hr').innerHTML = '00';
    document.getElementById('min').innerHTML = '00';
    document.getElementById('sec').innerHTML = '00';
    document.getElementById('count').innerHTML = '00';
});

document.body.addEventListener('keydown', (event) => {
    if (event.key === 'R' || event.key === 'r') {
        timer = false;

        hour = 0;
        minute = 0;
        second = 0;
        count = 0;

        document.getElementById('hr').innerHTML = '00';
        document.getElementById('min').innerHTML = '00';
        document.getElementById('sec').innerHTML = '00';
        document.getElementById('count').innerHTML = '00';
    }
})



function stopWatch() {
    if (timer) {
        count++;

        if (count == 100) {
            second++;
            count = 0;
        }

        if (second == 60) {
            minute++;
            second = 0;
        }

        if (minute == 60) {
            hour++;
            minute = 0;
        }

        let hrString = hour;
        let minString = minute;
        let secString = second;
        let countString = count;

        if (hour < 10) {
            hrString = '0' + hrString;
        }

        if (minute < 10) {
            minString = '0' + minString;
        }

        if (second < 10) {
            secString = '0' + secString;
        }

        if (count < 10) {
            countString = '0' + countString;
        }

        document.getElementById('hr').innerHTML = hrString;
        document.getElementById('min').innerHTML = minString;
        document.getElementById('sec').innerHTML = secString;
        document.getElementById('count').innerHTML = countString;

        setTimeout(stopWatch, 10);
    }
}