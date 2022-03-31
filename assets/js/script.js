/* Author: 

*/

let prevBtn = document.querySelector(".prev")
let nextBtn = document.querySelector(".next")
let steps = document.querySelectorAll(".step")
let progressStatus = document.querySelector('.progress-status')

let active = 1;
prevBtn.addEventListener("click", handlePrev)
nextBtn.addEventListener("click", handleNext)


function handleNext() {
  active++;
  if(active > steps.length){
    active = steps.length
  }
  updateProgress();
}

function handlePrev(ev) {
  active--;
  if(active < 1){
    active = 1;
  }
  updateProgress();
}

function updateProgress() {
  steps.forEach((step, index) => {
    if(index < active) step.classList.add("filled");
    else step.classList.remove("filled")
  })

  let width = ((active - 1) / (steps.length-1)) * 100+ "%"
  progressStatus.style.width = width
  console.log(width, active, steps.length);

  if(active === 1) prevBtn.disabled = true;
  else if(active === steps.length) nextBtn.disabled = true; 
  else {
    prevBtn.disabled = false
    nextBtn.disabled = false
  }

}


console.log(steps);


















