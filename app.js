// Quiz JS
let skip = document.getElementById('skip');
let score = document.getElementById('score');
let totalScore = document.getElementById('totalScore');
let countdown = document.getElementById('countdown');
let count = 0;
let scoreCount = 0;
let duration = 0;
let qaSet = document.querySelectorAll('.qa_set');
let qaAnsRow = document.querySelectorAll('.qa_set .qa_ans_row input');

skip.addEventListener('click',function() {
  step();
  duration = 30
})

qaAnsRow.forEach( function(qaAnsRowSingle) {
  qaAnsRowSingle.addEventListener('click',function() {
    setTimeout(function() {
      step();
      duration = 30
    },500)

    let valid = this.getAttribute("valid");
    if(valid == "valid") {
      scoreCount += 10;
      score.innerHTML = scoreCount;
      totalScore.innerHTML = scoreCount;
    } else {
      scoreCount -= 0;
      score.innerHTML = scoreCount;
      totalScore.innerHTML = scoreCount;
    }

  })
});


function step() {
  count += 1;
  for(var i = 0; i < qaSet.length; i++) {
    qaSet[i].className = 'qa_set';
  }
  qaSet[count].className = 'qa_set active';
  if(count == 10) {
    skip.style.display = 'none';
    clearInterval(durationTime);
    countdown.innerHTML = 0;
  }

}

let durationTime = setInterval(function() {
  if(duration == 30) {
    duration = 0;
  }
  duration +=1;
  countdown.innerHTML = duration;
  if(countdown.innerHTML == "30") {
    step()
  }
},1000);
