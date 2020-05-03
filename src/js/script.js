const refs = {
  body: document.querySelector('body'),
  start: document.querySelector('button[data-action="start"]'),
  stop: document.querySelector('button[data-action="stop"]'),
};

const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const colorSwitch = {
  intervalId: null,
  onStart() {
    if (this.intervalId) return;
    refs.start.setAttribute('disabled', 'disabled');
    refs.stop.removeAttribute('disabled');
    this.intervalId = setInterval(this.change, 1000);
  },
  onStop() {
    refs.start.removeAttribute('disabled');
    refs.stop.setAttribute('disabled', 'disabled');
    clearInterval(this.intervalId);
    this.intervalId = null;
  },
  change() {
    refs.body.style.backgroundColor = colors[randomIntegerFromInterval()];
  },
};

refs.start.addEventListener('click', colorSwitch.onStart.bind(colorSwitch));
refs.stop.addEventListener('click', colorSwitch.onStop.bind(colorSwitch));

const randomIntegerFromInterval = () => {
  return Math.floor(Math.random() * colors.length);
};
