const colors = [
  "#FFFFFF",
  "#2196F3",
  "#4CAF50",
  "#FF9800",
  "#009688",
  "#795548",
];

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const refs = {
  body: document.querySelector("body"),
  btnStart: document.querySelector('[data-action="start"]'),
  btnStop: document.querySelector('[data-action="stop"]'),
};

const INTERVAL_DELAY = 1000;
let intervalId = null;

refs.btnStart.addEventListener("click", onBtnStartClick);
refs.btnStop.addEventListener("click", onBtnStopClick);

function onBtnStartClick() {
  refs.btnStart.setAttribute("disabled", true);

  intervalId = setInterval(() => {
    refs.body.style.background = colors[randomIntegerFromInterval(0, 5)];
  }, INTERVAL_DELAY);
}

function onBtnStopClick() {
  refs.btnStart.removeAttribute("disabled");
  clearInterval(intervalId);
}
