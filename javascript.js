"use strict";
// selects all slides, no matter how many
const slides = document.querySelectorAll(".slide");

// loops through slides to set each slide translateX prop to index * 100%
slides.forEach((slide, indx) => {
  slide.style.transform = `translateX(${indx * 100}%)`;
});

let currentSlide = 1;
let lastSlide = slides.length - 1;
const nextSlide = document.querySelector(".btn-next");
const previousSlide = document.querySelector(".btn-previous");

function startup() {
  nextSlide.addEventListener("click", () => {
    colorSwitch(currentSlide);
    console.log(currentSlide);

    // moves each slide -100%
    slides.forEach((slide, indx) => {
      slide.style.transform = `translateX(${100 * (indx - currentSlide)}%)`;
    });

    if (currentSlide === lastSlide) {
      currentSlide = 0;
    } else {
      currentSlide++;
    }
  });

  previousSlide.addEventListener("click", () => {
    colorSwitch(currentSlide);
    console.log(currentSlide);

    // moves each slide 100%
    slides.forEach((slide, indx) => {
      slide.style.transform = `translateX(${100 * (indx - currentSlide)}%)`;
    });

    if (currentSlide === 0) {
      currentSlide = lastSlide;
    } else {
      currentSlide--;
    }
  });

  circleCreate();
}

function colorSwitch(currentSlide) {
  const allDots = document.querySelectorAll(".dot");
  allDots.forEach((dot) => {
    dot.classList.remove("background-white");
    dot.classList.remove("background-black");
  });
  const index = currentSlide;
  const indexLocation = document.getElementById(index);
  console.log(indexLocation);

  indexLocation.classList.add("background-black");
}

function addWhite() {
  const addWhite = document.querySelectorAll(".dot");
  addWhite.classList.add("background-white");
}

function circleCreate() {
  const dotContainer = document.querySelector(".dot-container");
  dotContainer.innerHTML = "";

  let dotCount = 0;
  while (dotCount <= lastSlide) {
    const circle = document.createElement("div");
    circle.classList.add("dot");
    circle.setAttribute("id", dotCount);
    dotContainer.appendChild(circle);
    dotCount++;
  }
  const firstDot = document.querySelector(".dot");
  firstDot.classList.add("background-black");
}

window.addEventListener("DOMContentLoaded", () => {
  startup();
});
