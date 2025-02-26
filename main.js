window.addEventListener('load', function() {
    document.querySelector('.container').style.animation = 'fadeInUp 1s forwards';
});

let audioElement = document.getElementById('background-audio');
let muteIcon = document.getElementById('mute-icon');

function toggleAudio() {
    if (audioElement.muted) {
        audioElement.muted = false;
        muteIcon.classList.remove('bi-volume-mute-fill');
        muteIcon.classList.add('bi-volume-up-fill');
    } else {
        audioElement.muted = true;
        muteIcon.classList.remove('bi-volume-up-fill');
        muteIcon.classList.add('bi-volume-mute-fill');
    }
}

document.addEventListener('click', function() {
    document.querySelector('audio').play();
}, { once: true });


function updateCountdown(targetDate, elementId) {
    const eventDate = new Date(targetDate).getTime();
    const now = new Date().getTime();
    const difference = eventDate - now;

    if (difference < 0) {
        document.getElementById(elementId).innerHTML = "Acara telah dimulai!";
        return;
    }

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    document.getElementById(elementId).innerHTML = `${days} : ${hours} : ${minutes} : ${seconds}`;
}

function refreshCountdowns() {
    updateCountdown("March 15, 2025 15:30:00", "eliteTime");
    updateCountdown("March 16, 2025 01:00:00", "sotrTime");
}

refreshCountdowns();
setInterval(refreshCountdowns, 1000);