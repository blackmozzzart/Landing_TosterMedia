// timer
const timerEl = document.querySelector('.timer__counter')

const createTimerAnimator = () => {
  let timer = 0;

  return (seconds) => {
    clearInterval(timer);
    let lastSeconds = seconds;

    timer = setInterval(() => {
      if (!lastSeconds) {
        clearInterval(timer)
        return;
      }

      const date = new Date(1970, 0, 1);
      lastSeconds -= 1;
      date.setSeconds(lastSeconds);
      timerEl.textContent = date.toLocaleTimeString();
    }, 1000);
  };
};

const animateTimer = createTimerAnimator();

animateTimer(18000);
