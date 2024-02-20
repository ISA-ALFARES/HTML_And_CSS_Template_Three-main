const nums = document.querySelectorAll(".stats .number");
const statsSection = document.querySelector(".stats");
let started = false;

window.addEventListener("scroll", function () {
  if (window.scrollY >= statsSection.offsetTop) {
    if (!started) {
      nums.forEach((num) => startCount(num));
      started = true;
    }
  }
});

function startCount(el) {
  const goal = parseInt(el.dataset.goal);

  if (isNaN(goal)) {
    console.error(`Error: Invalid goal value for element ${el}`);
    return;
  }

  let count = setInterval(() => {
    el.textContent++;
    if (el.textContent == goal) {
      clearInterval(count);
    }
  }, 2000 / goal);
}










let countDownDate = new Date("Dec 31 , 2024 23:59:59").getTime();

let counter = setInterval(() => {

  let dateNow = new Date().getTime();
  let  dateDiff = countDownDate - dateNow ;




  let days = Math.floor(dateDiff  / (1000 * 60 * 60 * 24) );
  let hours = Math.floor(dateDiff  % (1000 * 60 * 60 * 24) / (1000 * 60 * 60 ) );
  let minutes = Math.floor(dateDiff  % (1000 * 60 * 60 ) /( 1000 * 60 )  );
  let seconds = Math.floor(dateDiff  % (1000 * 60 ) / (1000 )  );


  document.querySelector(".days").innerHTML = days ;
  document.querySelector(".hours").innerHTML = hours ;
  document.querySelector(".minutes").innerHTML = minutes < 10 ? `0${minutes}`  :  minutes;
  document.querySelector(".seconds").innerHTML = seconds  < 10 ? `0${seconds}`  :  seconds;

  if(dateDiff < 0){
    clearInterval(counter) ;
  }

} , 1000)

let section = document.querySelector(".our-skills");
let spans = document.querySelectorAll(".the-progress span");

window.onscroll = function () {
  if (window.scrollY >= section.offsetTop - 300){
    spans.forEach((span) => {
      span.style.width = span.dataset.width ;
    });
  }
};

