const inputEl = document.querySelector('input');
const buttonEl = document.querySelector('button');
const timerEl = document.querySelector('span');

let timer;

// Напишите реализацию createTimerAnimator
// который будет анимировать timerEl
const createTimerAnimator = () => {
  return (seconds) => {
    let hours = Math.floor(seconds/3600);
    let minutes = Math.floor((seconds - (hours*3600))/60);
    let secs = seconds - (hours*3600) - (minutes * 60);
    if(hours < 10){
      hours = '0' + hours;
    }
    if(minutes < 10){
      minutes = '0' + minutes;
    }
    if(secs<10){
      secs = '0' + secs;
    }
    timerEl.innerHTML = `${hours}:${minutes}:${secs}`;
  };
};

const animateTimer = createTimerAnimator();

inputEl.addEventListener('input', (e) => {
  // Очистите input так, чтобы в значении
  // оставались только числа
  inputEl.value = inputEl.value.replace(/[^\d]/g,'');
});

buttonEl.addEventListener('click', () => {
  clearInterval(timer);
  let seconds = Number(inputEl.value);
  inputEl.value = '';
  animateTimer(seconds); // Отрисовка на страницу
  timer = setInterval(() => {
    if (seconds <= 0)
      return;

    seconds--;
    animateTimer(seconds); // Отрисовка на страницу
  }, 1000);
});
