let fruitImage1 = document.getElementById('Squash');
let fruitImage2 = document.getElementById('Cucumber');
let fruitImage3 = document.getElementById('Banana');
let fruitImage4 = document.getElementById('Pumpkin');
let fruitImage5 = document.getElementById('Cherries'); 
let fruitImage6 = document.getElementById('Blueberries');
let fruitImage7 = document.getElementById('Olives'); 
let fruitImage8 = document.getElementById('Peapod');
let fruitImage9 = document.getElementById('Chilli');

let fruitImage10 = document.getElementById('Avacados');
let fruitImage11 = document.getElementById('Tomato');
let fruitImage12 = document.getElementById('Watermelon');
let fruitImage13 = document.getElementById('Peanuts');
let fruitImage14 = document.getElementById('Aubergine');
let fruitImage15 = document.getElementById('Pepper');
let fruitImage16 = document.getElementById('Sweetcorn');
let fruitImage17 = document.getElementById('Potato');
let fruitImage18 = document.getElementById('Onion');
let fruitImage19 = document.getElementById('Mushrooms');
let fruitImage20 = document.getElementById('Artichoke');
let fruitImage21 = document.getElementById('Rhubarb');
let fruitImage22 = document.getElementById('Ginger');
let fruitImage23 = document.getElementById('Celery');
let fruitImage24 = document.getElementById('Garlic');
let fruitImage25 = document.getElementById('Carrot');
let fruitImage26 = document.getElementById('Radish');
let fruitImage27 = document.getElementById('Zucchini');
let fruitImage28 = document.getElementById('Turnip');

let fruitBoxes = document.querySelector('.fruit-boxes');
let fruitbox = document.getElementsByClassName('fruit-box');
let vegBox = document.getElementsByClassName('vegetable-box');

let life_a = document.getElementById('life_a');
let life_b = document.getElementById('life_b');
let life_c = document.getElementById('life_c');

let body = document.querySelector('body');
let myAccount = document.getElementById('myAccount');
let guessButton = document.getElementById('guess');
let nextButton = document.getElementById('next');
let question = document.getElementById('question');
let option = document.getElementsByTagName('button');
let groceries = document.getElementById('groceries');
let container = document.getElementById('container');
let navItems = document.getElementsByClassName('nav-items');
let navContainer = document.getElementById('nav-container');
let fruitItem = document.querySelectorAll('.fruit-box');
let butterflies = document.getElementById('butterflies');

let right = document.getElementById('right');
let wrong = document.getElementById('wrong');
let sound = document.getElementById('music');
let click = document.getElementById('click');
let win = document.getElementById('win');
let cheer = document.getElementById('crowd');
let looser = document.getElementById('you_loose');
let bumblebee = document.getElementById('bumblebee');
let correct = document.getElementById('correct');
let flawless = document.getElementById('flawless');
let game_over_music = document.getElementById('game_over');
let options =  document.getElementById('options');
let deadText = document.getElementById('dead-text');
let life_icons = document.getElementById('life_icons');
let number = document.getElementById('num');
let score = document.getElementById('score');
let bonus = document.querySelector('.bonus');
let scoreAlert = document.getElementById('score_alert');

let lives = 2;
let points = 0;



function checkPoints() {
isPlaying();
currentlyPlaying = true;

  if (currentlyPlaying) {
    number.innerHTML = points +=150;
  }        
};

let currentlyPlaying = true;

function isPlaying(currentlyPlaying){
  if (currentlyPlaying){
    return true;
  } else {
    return false;
  }
};

let isClicked = (button) => {
  if (isPlaying(currentlyPlaying) && button) {
    return true;
  } else {
    return false;
  }
};


function checkLives(src){
  isPlaying();
    
  if (currentlyPlaying && lives === 2){
    life_c.src = 'death_icon_c.png';
    number.innerHTML = points -=250;
    currentlyPlaying = false;
  } 
  else if (currentlyPlaying && lives === 1){
    life_b.src = 'death_icon_b.png';
    number.innerHTML = points -=250;
    currentlyPlaying = false;
  }
  else if (currentlyPlaying && lives === 0){
    life_a.src = 'death_icon_a.png';
    number.innerHTML = points -=250;
    yourDead();
  }
};


function yourDead(){
 isPlaying();
  currentlyPlaying = false;    
    
  if (isPlaying(!currentlyPlaying)){
    sound.pause();
  }
  let query = window.matchMedia("(max-width: 600px)");
    
  if (query.matches) {
    game_over_music.play();
    question.style.display = 'none';
    nextButton.innerText = 'click "home" to try again';
    nextButton.style.border = 'none';
    nextButton.style.boxShadow = 'none';
    nextButton.style.cursor = 'auto';
    nextButton.onclick = false;
    kids.style.color = 'snow';
    nextButton.style.background = 'transparent';
    body.style.backgroundImage = "url(https://i.pinimg.com/originals/91/95/f4/9195f4dd1b69f90038f627c8af422429.gif)";
    deadText.innerText = 'GAME OVER !!!';
    looser.play();  
  } else {
    game_over_music.play();
    body.style.backgroundImage = "url(https://i.pinimg.com/originals/91/95/f4/9195f4dd1b69f90038f627c8af422429.gif)";
    question.style.display = 'none';
    nextButton.style.fontSize = "1rem";
    nextButton.style.background = 'transparent';
    nextButton.innerText = 'click "home" to try again';
    nextButton.style.border = 'none';
    nextButton.style.boxShadow = 'none';
    nextButton.style.cursor = 'auto';
    nextButton.onclick = false;
    kids.style.color = 'snow';
    deadText.innerText = 'GAME OVER !!!';
    looser.play();
  }
};


function youWin() {
isPlaying();
   
currentlyPlaying = false;
    
if (!currentlyPlaying && lives === 2) {
    
let query = window.matchMedia("(max-width: 600px)");
    
if (query.matches) {
  deadText.style.color = 'lightpink';
  deadText.style.marginBottom = "10px";
  deadText.style.fontFamily = 'Freckle Face', 'cursive';
  deadText.innerText = 'flawless';
  flawless.play();
  sound.pause();
  cheer.play();
} else {
  deadText.style.color = 'lightpink';
  deadText.style.marginBottom = "10px";
  deadText.style.fontFamily = 'Freckle Face', 'cursive';
  deadText.style.letterSpacing = "5px";
  deadText.innerText = 'flawless';
  flawless.play();
  sound.pause();
  cheer.play();
}
    
  setTimeout(function(){ 
    win.play(); 
  }, 3000);

  setInterval(function(){
    if (deadText.style.color === 'lightpink'){
      deadText.style.color = 'yellow';
    } else if (deadText.style.color === 'yellow'){
      deadText.style.color = 'aqua';
    } else if (deadText.style.color === 'aqua'){
      deadText.style.color = 'snow';
    } else {
      deadText.style.color = 'lightpink';
    }
  }, 500);
    
} else if (!currentlyPlaying) {
    sound.pause();
    cheer.play();
    win.play();
  } 
};
          

guessButton.onclick = function(){ 
  sound.play();
  click.play();
  bumblebee.play();
  guessFruit();
    
};

// switch function for Fruits
function guessFruit() {
isPlaying();       

const count = 28;
let randFruit = Math.floor(Math.random() * count);    

 switch (randFruit) {
         
      case 0:
      groceries.src = fruitImage1.src;
      question.innerText = "..fruit or veg ?";
         
            
   if (currentlyPlaying && isClicked(guessButton)) {
      guessButton.onclick = false;
      document.getElementById('option_a');
      guessButton.innerHTML = option_a.innerHTML;
       
      if (fruitbox[0].childNodes[0].src === fruitImage1.src) {
        guessFruit();
      } else {
        option[1].onclick = function() {
        click.play();
        correct.play();
    
        let query = window.matchMedia("(max-width: 600px)");
          
      if (query.matches) {
        groceries.src = 'bee.gif';
        guessButton.style.display = 'none';
        nextButton.style.display = 'inline';
        question.innerText = 'RIGHT !!';
        question.style.color = 'lime';
        fruitbox[0].childNodes[0].src = fruitImage1.src;
        bumblebee.play();
        gameOver();
      } else { 
        groceries.src = 'bee.gif';
        guessButton.style.display = 'none';
        nextButton.style.display = 'inline';
        question.innerText = 'RIGHT !!';
        question.style.color = 'lime';
//      butterflies.style.display = 'inline';
//      container.style.border = '180px ridge lime';
        fruitItem[0].style.backgroundColor = 'lime';
        scoreAlert.style.display = 'block';
        fruitbox[0].childNodes[0].style.visibility = 'visible';
        fruitbox[0].childNodes[0].src = fruitImage1.src;
        fruitBoxes.style.marginTop ="4px";
        checkPoints();
        bumblebee.play();
        right.play();
        gameOver();
        }
      };
        option[2].onclick = function() {
        click.play();
        wrong.play();
        checkLives();
        lives--;
            
        let query = window.matchMedia("(max-width: 600px)");
            
      if (query.matches) {
        groceries.src = 'angry_bee.gif';
        guessButton.style.display = 'none';
        nextButton.style.display = 'inline';
        question.innerText = 'WRONG !!';   
        question.style.color = '#ff0000';
      } else {
        groceries.src = 'angry_bee.gif';
        guessButton.style.display = 'none';
        nextButton.style.display = 'inline';
        fruitBoxes.style.marginTop ="4px";
        question.innerText = 'WRONG !!';
        question.style.color = "#ff0000";
        }
       };
      }
     }
      break;
 
      case 1:
      groceries.src = fruitImage2.src;
      question.innerHTML = "..fruit or veg ?";
       
   if (currentlyPlaying && isClicked(guessButton)) {
      guessButton.onclick = false;
      document.getElementById('option_a');
      guessButton.innerHTML = option_a.innerHTML;
      
      if (fruitbox[1].childNodes[0].src === fruitImage2.src) {
        guessFruit();
      } else {
        option[1].onclick = function() {
        click.play();
        correct.play();
            
        let query = window.matchMedia("(max-width: 600px)");
            
      if (query.matches) {
        groceries.src = 'bee.gif';
        guessButton.style.display = 'none';
        nextButton.style.display = 'inline';
        question.innerText = 'RIGHT !!';
        fruitbox[1].childNodes[0].src = fruitImage2.src;
        bumblebee.play();
        gameOver();  
      } else {
        groceries.src = 'bee.gif';
        guessButton.style.display = 'none';
        nextButton.style.display = 'inline';
        fruitBoxes.style.marginTop ="4px";
        question.innerText = 'RIGHT !!';
        question.style.color = 'lime';
//      butterflies.style.display = 'inline';
//      container.style.border = '180px ridge lime';
        fruitItem[1].style.backgroundColor = 'lime';
        scoreAlert.style.display = 'block';
        fruitbox[1].childNodes[0].style.visibility = 'visible';
        fruitbox[1].childNodes[0].src = fruitImage2.src;
        checkPoints();
        bumblebee.play();
        right.play();
        gameOver();
        }
      };
        option[2].onclick = function() {
        click.play();
        wrong.play();
        checkLives();
        lives--;
            
        let query = window.matchMedia("(max-width: 600px)");
            
      if (query.matches) {
        groceries.src = 'angry_bee.gif';
        guessButton.style.display = 'none';
        nextButton.style.display = 'inline';
        question.innerText = 'WRONG !!';   
        question.style.color = '#ff0000';
      } else {
        groceries.src = 'angry_bee.gif';
        guessButton.style.display = 'none';
        nextButton.style.display = 'inline';
        fruitBoxes.style.marginTop ="4px";
        question.innerText = 'WRONG !!';
        question.style.color = "#ff0000";
        }
      };
     }
    }
    break;
       
      case 2:
      groceries.src = fruitImage3.src;
      question.innerHTML = "..fruit or veg ?";
            
   if (currentlyPlaying && isClicked(guessButton)) {
      guessButton.onclick = false;
      document.getElementById('option_a');
      guessButton.innerHTML = option_a.innerHTML;
        
      if (fruitbox[2].childNodes[0].src === fruitImage3.src) {
        guessFruit();
      } else {
        option[1].onclick = function() {
        click.play();
        correct.play();
            
        let query = window.matchMedia("(max-width: 600px)");
            
     if (query.matches) {
        groceries.src = 'bee.gif';
        guessButton.style.display = 'none';
        nextButton.style.display = 'inline';
        question.innerText = 'RIGHT !!';
        question.style.color = 'lime';
        fruitbox[2].childNodes[0].src = fruitImage3.src;
        bumblebee.play();
        gameOver();
      } else {
        groceries.src = 'bee.gif';
        guessButton.style.display = 'none';
        nextButton.style.display = 'inline';
        fruitBoxes.style.marginTop ="4px";
        question.innerText = 'RIGHT !!';
        question.style.color = 'lime';
//      butterflies.style.display = 'inline';
//      container.style.border = '180px ridge lime';
        fruitItem[2].style.backgroundColor = 'lime';
        scoreAlert.style.display = 'block';
        fruitbox[2].childNodes[0].style.visibility = 'visible';
        fruitbox[2].childNodes[0].src = fruitImage3.src;
        checkPoints();
        bumblebee.play();
        right.play();
        gameOver();
        }
      };
        option[2].onclick = function() {
        wrong.play();
        click.play();
        checkLives();
        lives--;
            
        let query = window.matchMedia("(max-width: 600px)");
            
      if (query.matches) {
        groceries.src = 'angry_bee.gif';
        guessButton.style.display = 'none';
        nextButton.style.display = 'inline';
        question.innerText = 'WRONG !!';   
        question.style.color = '#ff0000';
      } else {
        groceries.src = 'angry_bee.gif';
        guessButton.style.display = 'none';
        nextButton.style.display = 'inline';
        fruitBoxes.style.marginTop ="4px";
        question.innerText = 'WRONG !!';
        question.style.color = '#ff0000';
        }
      };
     }
    }
    break;
        
    case 3:
    groceries.src= fruitImage4.src;
    question.innerHTML = "..fruit or veg ?";

    if (currentlyPlaying && isClicked(guessButton)) {
      guessButton.onclick = false;
      document.getElementById('option_a');
      guessButton.innerHTML = option_a.innerHTML;  
        
      if (fruitbox[3].childNodes[0].src === fruitImage4.src) { 
        guessFruit();
      } else {
        option[1].onclick = function() {
        click.play();
        correct.play();
            
        let query = window.matchMedia("(max-width: 600px)");
            
      if (query.matches) {
        groceries.src = 'bee.gif';
        guessButton.style.display = 'none';
        nextButton.style.display = 'inline';
        question.innerText = 'RIGHT !!';
        question.style.color = 'lime';
        fruitbox[3].childNodes[0].src = fruitImage4.src;
        bumblebee.play();
        gameOver();
      } else {
        groceries.src = 'bee.gif';
        guessButton.style.display = 'none';
        nextButton.style.display = 'inline';
        fruitBoxes.style.marginTop ="4px";
        question.innerText = 'RIGHT !!';
        question.style.color = 'lime';
//      butterflies.style.display = 'inline';
//      container.style.border = '180px groove lime';
        fruitItem[3].style.backgroundColor = 'lime';
        scoreAlert.style.display = 'block';
        fruitbox[3].childNodes[0].style.visibility = 'visible';
        fruitbox[3].childNodes[0].src = fruitImage4.src; 
        checkPoints();
        bumblebee.play();
        right.play();
        gameOver();
        }
      };
        option[2].onclick = function() {
        click.play();
        wrong.play();
        checkLives();
        lives--;
            
        let query = window.matchMedia("(max-width: 600px)");
            
      if (query.matches) {
        groceries.src = 'angry_bee.gif';
        guessButton.style.display = 'none';
        nextButton.style.display = 'inline';
        question.innerText = 'WRONG !!';   
        question.style.color = '#ff0000';
      } else {
        groceries.src = 'angry_bee.gif';
        guessButton.style.display = 'none';
        nextButton.style.display = 'inline';
        fruitBoxes.style.marginTop ="4px";
        question.innerText = 'WRONG !!';
        question.style.color = '#ff0000';
        }
       };
      }
     }
    break;
            
    case 4:
    groceries.src = fruitImage5.src;
    question.innerHTML = "..fruit or veg ?";
            
    if (currentlyPlaying && isClicked(guessButton)) {
      guessButton.onclick = false;
      document.getElementById('option_a');
      guessButton.innerHTML = option_a.innerHTML;
        
      if (fruitbox[4].childNodes[0].src === fruitImage5.src) {
        guessFruit();
      } else {
        option[1].onclick = function() {
        click.play();
        correct.play();
          
      let query = window.matchMedia("(max-width: 600px)");
          
      if (query.matches) {
        groceries.src = 'bee.gif';
        guessButton.style.display = 'none';
        nextButton.style.display = 'inline';
        question.innerText = 'RIGHT !!';
        question.style.color = 'lime';
        fruitbox[4].childNodes[0].src = fruitImage5.src;
        bumblebee.play();
        gameOver();
      } else {
        groceries.src = 'bee.gif';
        guessButton.style.display = 'none';
        nextButton.style.display = 'inline';
        fruitBoxes.style.marginTop ="4px";
        question.innerText = 'RIGHT !!';
        question.style.color = 'lime';
//      butterflies.style.display = 'inline';
//      container.style.border = '180px groove lime';
        fruitItem[4].style.backgroundColor = 'lime';
        scoreAlert.style.display = 'block';
        fruitbox[4].childNodes[0].style.visibility = 'visible';
        fruitbox[4].childNodes[0].src = fruitImage5.src;
        checkPoints();
        bumblebee.play();
        right.play();
        gameOver();
        }
      };
        option[2].onclick = function() {
        click.play();
        wrong.play();
        checkLives();
        lives--;
            
        let query = window.matchMedia("(max-width: 600px)");
            
      if (query.matches) {
        groceries.src = 'angry_bee.gif';
        guessButton.style.display = 'none';
        nextButton.style.display = 'inline';
        question.innerText = 'WRONG !!';   
        question.style.color = '#ff0000';
      } else {
        groceries.src = 'angry_bee.gif';
        guessButton.style.display = 'none';
        nextButton.style.display = 'inline';
        fruitBoxes.style.marginTop ="4px";
        question.innerText = 'WRONG !!';
        question.style.color = '#ff0000';
        }
       };
      }
     }
    break;
            
    case 5:
    groceries.src = fruitImage6.src;
    question.innerHTML = "..fruit or veg ?";
            
    if (currentlyPlaying && isClicked(guessButton)) {
      guessButton.onclick = false;
      document.getElementById('option_a');
      guessButton.innerHTML = option_a.innerHTML;
        
      if (fruitbox[5].childNodes[0].src === fruitImage6.src) {
        guessFruit();  
      } else {
        option[1].onclick = function() {
        click.play();
        correct.play();
          
      let query = window.matchMedia("(max-width: 600px)");
          
      if (query.matches) {
        groceries.src = 'bee.gif';
        guessButton.style.display = 'none';
        nextButton.style.display = 'inline';
        question.innerText = 'RIGHT !!';
        question.style.color = 'lime';
        fruitbox[5].childNodes[0].src = fruitImage6.src;
        bumblebee.play();
        gameOver();     
      } else {
        groceries.src = 'bee.gif';
        guessButton.style.display = 'none';
        nextButton.style.display = 'inline';
        fruitBoxes.style.marginTop ="4px";
        question.innerHTML = 'RIGHT !!';
        question.style.color = 'lime';
//      butterflies.style.display = 'inline';
//      container.style.border = '180px ridge lime';
        fruitItem[5].style.backgroundColor = 'lime';
        scoreAlert.style.display = 'block';
        fruitbox[5].childNodes[0].style.visibility = 'visible';
        fruitbox[5].childNodes[0].src = fruitImage6.src;
        checkPoints();
        bumblebee.play();
        right.play();
        gameOver();
        }
      };
        option[2].onclick = function() {
        click.play();
        wrong.play();
        checkLives();
        lives--;
        let query = window.matchMedia("(max-width: 600px)");
      if (query.matches) {
        groceries.src = 'angry_bee.gif';
        guessButton.style.display = 'none';
        nextButton.style.display = 'inline';
        question.innerText = 'WRONG !!';   
        question.style.color = '#ff0000';
      } else {
        groceries.src = 'angry_bee.gif';
        guessButton.style.display = 'none';
        nextButton.style.display = 'inline';
        fruitBoxes.style.marginTop ="4px";
        question.innerHTML = 'WRONG !!';
        question.style.color = '#ff0000';
        }
      };
    }
  }
    break;
            
    case 6:
    groceries.src = fruitImage7.src;
    question.innerHTML = "..fruit or veg ?";
            
    if (currentlyPlaying && isClicked(guessButton)) {
      guessButton.onclick = false;
      document.getElementById('option_a');
      guessButton.innerHTML = option_a.innerHTML; 
        
      if (fruitbox[6].childNodes[0].src === fruitImage7.src) {
        guessFruit();
      } else {
        option[1].onclick = function() {
        click.play();
        correct.play();
            
      let query = window.matchMedia("(max-width: 600px)");
            
      if (query.matches) {
        groceries.src = 'bee.gif';
        guessButton.style.display = 'none';
        nextButton.style.display = 'inline';
        question.innerText = 'RIGHT !!';
        question.style.color = 'lime';
        fruitbox[6].childNodes[0].src = fruitImage7.src;
        bumblebee.play();
        gameOver();
      } else {
        groceries.src = 'bee.gif';
        guessButton.style.display = 'none';
        nextButton.style.display = 'inline';
        fruitBoxes.style.marginTop ="4px";
        question.innerText = 'RIGHT !!';
        question.style.color = 'lime';
//      butterflies.style.display = 'inline';
//      container.style.border = '180px ridge lime';
        fruitItem[6].style.backgroundColor = 'lime';
        scoreAlert.style.display = 'block';
        fruitbox[6].childNodes[0].style.visibility = 'visible';
        fruitbox[6].childNodes[0].src = fruitImage7.src;
        checkPoints();
        bumblebee.play();
        right.play();
        gameOver();
        }
      };
        option[2].onclick = function() {
        click.play();
        wrong.play();
        checkLives();
        lives--;
            
        let query = window.matchMedia("(max-width: 600px)");
            
     if (query.matches) {
        groceries.src = 'angry_bee.gif';
        guessButton.style.display = 'none';
        nextButton.style.display = 'inline';
        question.innerText = 'WRONG !!';   
        question.style.color = '#ff0000';
      } else {
        groceries.src = 'angry_bee.gif';
        guessButton.style.display = 'none';
        nextButton.style.display = 'inline';
        fruitBoxes.style.marginTop ="4px";
        question.innerText = 'WRONG !!';
        question.style.color = '#ff0000';
      }
     };
    }
   }
    break;
      
    case 7:
      groceries.src = fruitImage8.src;
      question.innerHTML = "..fruit or veg ?";  
        
    if (currentlyPlaying && isClicked(guessButton)) {
      guessButton.onclick = false;
      document.getElementById('option_a');
      guessButton.innerHTML = option_a.innerHTML;  
          
      if (fruitbox[7].childNodes[0].src === fruitImage8.src) {
        guessFruit();
      } else {
        option[1].onclick = function() {
        click.play();
        correct.play();
          
      let query = window.matchMedia("(max-width: 600px)");
          
      if (query.matches) {
        groceries.src = 'bee.gif';
        guessButton.style.display = 'none';
        nextButton.style.display = 'inline';
        question.innerText = 'RIGHT !!';
        question.style.color = 'lime';
        fruitbox[7].childNodes[0].src = fruitImage8.src; 
        bumblebee.play();
        gameOver();
      } else {
        groceries.src = 'bee.gif';
        guessButton.style.display = 'none';
        nextButton.style.display = 'inline';
        fruitBoxes.style.marginTop ="4px";
        question.innerText = 'RIGHT !!';
        question.style.color = 'lime';
//      butterflies.style.display = 'inline';
//      container.style.border = '180px ridge lime';
        fruitItem[7].style.backgroundColor = 'lime';
        scoreAlert.style.display = 'block';
        fruitbox[7].childNodes[0].style.visibility = 'visible';
        fruitbox[7].childNodes[0].src = fruitImage8.src;
        checkPoints();
        bumblebee.play();
        right.play();
        gameOver();
        }
      };
        option[2].onclick = function() {
        click.play();
        wrong.play();
        checkLives();
        lives--;
        let query = window.matchMedia("(max-width: 600px)");
        
      if (query.matches) {
        groceries.src = 'angry_bee.gif';
        guessButton.style.display = 'none';
        nextButton.style.display = 'inline';
        question.innerText = 'WRONG !!';   
        question.style.color = '#ff0000';
      } else {
        groceries.src = 'angry_bee.gif';
        guessButton.style.display = 'none';
        nextButton.style.display = 'inline';
        fruitBoxes.style.marginTop ="4px";
        question.innerText = 'WRONG !!';
        question.style.color = '#ff0000';
       }
      };
     }
    }
    break;
         
    case 8:
      groceries.src= fruitImage9.src;
      question.innerHTML = "..fruit or veg ?";      
          
    if (currentlyPlaying && isClicked(guessButton)) {
      guessButton.onclick = false;
      document.getElementById('option_a');
      guessButton.innerHTML = option_a.innerHTML;
      
      if (fruitbox[8].childNodes[0].src === fruitImage9.src) {
        guessFruit();
      } else {
        option[1].onclick = function() {
        click.play();
        correct.play();
          
        let query = window.matchMedia("(max-width: 600px)");
           
      if (query.matches) {
        groceries.src = 'bee.gif';
        guessButton.style.display = 'none';
        nextButton.style.display = 'inline';
        question.innerText = 'RIGHT !!';
        question.style.color = 'lime';
        fruitbox[8].childNodes[0].src = fruitImage9.src;
        bumblebee.play();
        gameOver();
      } else {
        groceries.src = 'bee.gif';
        guessButton.style.display = 'none';
        nextButton.style.display = 'inline';
        fruitBoxes.style.marginTop ="4px";
        question.innerText = 'RIGHT !!';
        question.style.color = 'lime';
//      butterflies.style.display = 'inline';
//      container.style.border = '180px ridge lime';
        fruitItem[8].style.backgroundColor = 'lime';
        scoreAlert.style.display = 'block';
        fruitbox[8].childNodes[0].style.visibility = 'visible';
        fruitbox[8].childNodes[0].src = fruitImage9.src;
        checkPoints();
        bumblebee.play();
        right.play();
        gameOver();
        }
      };
        option[2].onclick = function() {
        click.play();
        wrong.play();
        checkLives();
        lives--;
        let query = window.matchMedia("(max-width: 600px)");
      
      if (query.matches) {
        groceries.src = 'angry_bee.gif';
        guessButton.style.display = 'none';
        nextButton.style.display = 'inline';
        question.innerText = 'WRONG !!';   
        question.style.color = '#ff0000';
      } else {
        groceries.src = 'angry_bee.gif';
        guessButton.style.display = 'none';
        nextButton.style.display = 'inline';
        fruitBoxes.style.marginTop ="4px";
        question.innerText = 'WRONG !!';
        question.style.color = '#ff0000';
       }
      };
     }
    }
    break;
        
    case 9:
      groceries.src= fruitImage10.src;
      question.innerHTML = "..fruit or veg ?";
            
    if (currentlyPlaying && isClicked(guessButton)) {
      guessButton.onclick = false;
      document.getElementById('option_a');
      guessButton.innerHTML = option_a.innerHTML;
          
      if (fruitbox[9].childNodes[0].src === fruitImage10.src) {
        guessFruit();
      } else {
        option[1].onclick = function() {
        click.play();
        correct.play();
          
      let query = window.matchMedia("(max-width: 600px)");
          
      if (query.matches) {
        groceries.src = 'bee.gif';
        guessButton.style.display = 'none';
        nextButton.style.display = 'inline';
        question.innerText = 'RIGHT !!';
        question.style.color = 'lime';
        fruitbox[9].childNodes[0].src = fruitImage10.src;  
        bumblebee.play();
        gameOver();
      } else {
        groceries.src = 'bee.gif';
        guessButton.style.display = 'none';
        nextButton.style.display = 'inline';
        fruitBoxes.style.marginTop ="4px";
        question.innerText = 'RIGHT !!';
        question.style.color = 'lime';
//      butterflies.style.display = 'inline';
//      container.style.border = '180px ridge lime';
        fruitItem[9].style.backgroundColor = 'lime';
        scoreAlert.style.display = 'block';
        fruitbox[9].childNodes[0].style.visibility = 'visible';
        fruitbox[9].childNodes[0].src = fruitImage10.src;
        checkPoints();
        bumblebee.play();
        right.play();
        gameOver();
        }
      };
        option[2].onclick = function() {
        click.play();
        wrong.play();
        checkLives();
        lives--;
            
        let query = window.matchMedia("(max-width: 600px)");
            
      if (query.matches) {
        groceries.src = 'angry_bee.gif';
        guessButton.style.display = 'none';
        nextButton.style.display = 'inline';
        question.innerText = 'WRONG !!';   
        question.style.color = '#ff0000';
      } else {
        groceries.src = 'angry_bee.gif';
        guessButton.style.display = 'none';
        nextButton.style.display = 'inline';
        fruitBoxes.style.marginTop ="4px";
        question.innerText = 'WRONG !!';
        question.style.color = '#ff0000';
        }
       };
      }
     }
    break;
         
    case 10:
    groceries.src= fruitImage11.src;
    question.innerHTML = "..fruit or veg ?";
            
    if (currentlyPlaying && isClicked(guessButton)) {
      guessButton.onclick = false;
      document.getElementById('option_a');
      guessButton.innerHTML = option_a.innerHTML;
        
      if (fruitbox[10].childNodes[0].src === fruitImage11.src) {
        guessFruit();
      } else {
        option[1].onclick = function() {
        click.play();
        correct.play();
      
        let query = window.matchMedia("(max-width: 600px)");
            
      if (query.matches) {
        groceries.src = 'bee.gif';
        guessButton.style.display = 'none';
        nextButton.style.display = 'inline';
        question.innerText = 'RIGHT !!';
        question.style.color = 'lime';
        fruitbox[10].childNodes[0].src = fruitImage11.src;
        bumblebee.play();
        gameOver();
      } else {
        groceries.src = 'bee.gif';
        guessButton.style.display = 'none';
        nextButton.style.display = 'inline';
        fruitBoxes.style.marginTop ="4px";
        question.innerText = 'RIGHT !!';
        question.style.color = 'lime';
//      butterflies.style.display = 'inline';
//      container.style.border = '180px ridge lime';
        fruitItem[10].style.backgroundColor = 'lime';
        scoreAlert.style.display = 'block';
        fruitbox[10].childNodes[0].style.visibility = 'visible';
        fruitbox[10].childNodes[0].src = fruitImage11.src;
        checkPoints();
        bumblebee.play();
        right.play();
        gameOver();
       }
      }; 
        option[2].onclick = function() {
        click.play();
        wrong.play();
        checkLives();
        lives--;    
            
        let query = window.matchMedia("(max-width: 600px)");
        
      if (query.matches) {
        groceries.src = 'angry_bee.gif';
        guessButton.style.display = 'none';
        nextButton.style.display = 'inline';
        question.innerText = 'WRONG !!';   
        question.style.color = '#ff0000';
      } else {
        groceries.src = 'angry_bee.gif';
        guessButton.style.display = 'none';
        nextButton.style.display = 'inline';
        fruitBoxes.style.marginTop ="4px";
        question.innerText = 'WRONG !!';
        question.style.color = '#ff0000';
        }
       };
      }
     }
    break;
          
    case 11:
      groceries.src= fruitImage12.src;
      question.innerHTML = "..fruit or veg ?";
           
    if (currentlyPlaying && isClicked(guessButton)) {
      guessButton.onclick = false;
      document.getElementById('option_a');
      guessButton.innerHTML = option_a.innerHTML;        
      
      if (fruitbox[11].childNodes[0].src === fruitImage12.src) {
        guessFruit();
      } else {
        option[1].onclick = function() {
        click.play();
        correct.play();
          
      let query = window.matchMedia("(max-width: 600px)");
          
      if (query.matches) {
        groceries.src = 'bee.gif';
        guessButton.style.display = 'none';
        nextButton.style.display = 'inline';
        question.innerText = 'RIGHT !!';
        question.style.color = 'lime';
        fruitbox[11].childNodes[0].src = fruitImage12.src;  
        bumblebee.play();
        gameOver();
      } else {
        groceries.src = 'bee.gif';
        guessButton.style.display = 'none';
        nextButton.style.display = 'inline';
        fruitBoxes.style.marginTop ="4px";
        question.innerText = 'RIGHT !!';
        question.style.color = 'lime';
//      butterflies.style.display = 'inline';
//      container.style.border = '180px ridge lime';
        fruitItem[11].style.backgroundColor = 'lime';
        scoreAlert.style.display = 'block';
        fruitbox[11].childNodes[0].style.visibility = 'visible';
        fruitbox[11].childNodes[0].src = fruitImage12.src;
        checkPoints();
        bumblebee.play();
        right.play();
        gameOver();
        }
      }; 
        option[2].onclick = function() {
        click.play();
        wrong.play();
        checkLives();
        lives--;
        let query = window.matchMedia("(max-width: 600px)");
      
      if (query.matches) {
        groceries.src = 'angry_bee.gif';
        guessButton.style.display = 'none';
        nextButton.style.display = 'inline';
        question.innerText = 'WRONG !!';   
        question.style.color = '#ff0000';
      } else {
        groceries.src = 'angry_bee.gif';
        guessButton.style.display = 'none';
        nextButton.style.display = 'inline';
        fruitBoxes.style.marginTop ="4px";
        question.innerText = 'WRONG !!';
        question.style.color = '#ff0000';
       }
      };
     }
    }
    break;
            
    case 12:
    groceries.src = fruitImage13.src;
    question.innerHTML = "..fruit or veg ?";  
            
    if (currentlyPlaying && isClicked(guessButton)) {
      guessButton.onclick = false;
      document.getElementById('option_a');
      guessButton.innerHTML = option_a.innerHTML;     
    
      if (fruitbox[12].childNodes[0].src === fruitImage13.src) {
        guessFruit();
      } else {
        option[1].onclick = function() {
        click.play();
        correct.play();
          
      let query = window.matchMedia("(max-width: 600px)");
          
      if (query.matches) {
        groceries.src = 'bee.gif';
        guessButton.style.display = 'none';
        nextButton.style.display = 'inline';
        question.innerText = 'RIGHT !!';
        question.style.color = 'lime';
        fruitbox[12].childNodes[0].src = fruitImage13.src;  
        bumblebee.play();
        gameOver();
      } else {
        groceries.src = 'bee.gif';
        guessButton.style.display = 'none';
        nextButton.style.display = 'inline';
        fruitBoxes.style.marginTop ="4px";
        question.innerText = 'RIGHT !!';
        question.style.color = 'lime';
//      butterflies.style.display = 'inline';
//      container.style.border = '180px ridge lime';
        fruitItem[12].style.backgroundColor = 'lime';
        scoreAlert.style.display = 'block';
        fruitbox[12].childNodes[0].style.visibility = 'visible';
        fruitbox[12].childNodes[0].src = fruitImage13.src;
        checkPoints();
        bumblebee.play();
        right.play();
        gameOver();
       }
      };
        option[2].onclick = function() {
        click.play();
        wrong.play();
        checkLives();
        lives--;
        checkLives();     
        let query = window.matchMedia("(max-width: 600px)");
      if (query.matches) {
        groceries.src = 'angry_bee.gif';
        guessButton.style.display = 'none';
        nextButton.style.display = 'inline';
        question.innerText = 'WRONG !!';   
        question.style.color = '#ff0000';
      } else {
        groceries.src = 'angry_bee.gif';
        guessButton.style.display = 'none';
        nextButton.style.display = 'inline';
        fruitBoxes.style.marginTop ="4px";
        question.innerText = 'WRONG !!';
        question.style.color = '#ff0000';
       }
      };
     }
    }
    break;
        
    case 13:
      groceries.src = fruitImage14.src;
      question.innerHTML = "..fruit or veg ?"; 
        
    if (currentlyPlaying && isClicked(guessButton)) {
      guessButton.onclick = false;
      document.getElementById('option_a');
      guessButton.innerHTML = option_a.innerHTML;    
       
      if (fruitbox[13].childNodes[0].src === fruitImage14.src) {
        guessFruit();
      } else {
        option[1].onclick = function() {
        click.play();
        correct.play();
          
      let query = window.matchMedia("(max-width: 600px)");
          
      if (query.matches) {
        groceries.src = 'bee.gif';
        guessButton.style.display = 'none';
        nextButton.style.display = 'inline';
        question.innerText = 'RIGHT !!';
        question.style.color = 'lime';
        fruitbox[13].childNodes[0].src = fruitImage14.src;
        bumblebee.play();
        gameOver();
      } else {
        groceries.src = 'bee.gif';
        guessButton.style.display = 'none';
        nextButton.style.display = 'inline';
        fruitBoxes.style.marginTop ="4px";
        question.innerText = 'RIGHT !!';
        question.style.color = 'lime';
//      butterflies.style.display = 'inline';
//      container.style.border = '180px ridge lime';
        fruitItem[13].style.backgroundColor = 'lime';
        scoreAlert.style.display = 'block';
        fruitbox[13].childNodes[0].style.visibility = 'visible';
        fruitbox[13].childNodes[0].src = fruitImage14.src;
        checkPoints();
        bumblebee.play();
        right.play();
        gameOver();
       }
      };
        option[2].onclick = function() {
        click.play();
        wrong.play();
        checkLives();
        lives--;
            
        let query = window.matchMedia("(max-width: 600px)");
            
      if (query.matches) {
        groceries.src = 'angry_bee.gif';
        guessButton.style.display = 'none';
        nextButton.style.display = 'inline';
        question.innerText = 'WRONG !!';   
        question.style.color = '#ff0000';
      } else {
        groceries.src = 'angry_bee.gif';
        guessButton.style.display = 'none';
        nextButton.style.display = 'inline';
        fruitBoxes.style.marginTop ="4px";
        question.innerText = 'WRONG !!';
        question.style.color = '#ff0000';
       }
      };
     }
    }       
    break;  
          
    case 14:
      groceries.src = fruitImage15.src;
      question.innerHTML = "..fruit or veg ?";
          
    if (currentlyPlaying && isClicked(guessButton)) {
      guessButton.onclick = false;
      document.getElementById('option_a');
      guessButton.innerHTML = option_a.innerHTML;    
          
      if (fruitbox[14].childNodes[0].src === fruitImage15.src) {
        guessFruit();
      } else {
        option[1].onclick = function() {
        click.play();
        correct.play();
          
      let query = window.matchMedia("(max-width: 600px)");
          
      if (query.matches) {
        groceries.src = 'bee.gif';
        guessButton.style.display = 'none';
        nextButton.style.display = 'inline';
        question.innerText = 'RIGHT !!';
        question.style.color = 'lime';
        fruitbox[14].childNodes[0].src = fruitImage15.src;
        bumblebee.play();
        gameOver();
      } else {
        groceries.src = 'bee.gif';
        guessButton.style.display = 'none';
        nextButton.style.display = 'inline';
        fruitBoxes.style.marginTop ="4px";
        question.innerText = 'RIGHT !!';
        question.style.color = 'lime';
//      butterflies.style.display = 'inline';
//      container.style.border = '180px ridge lime';
        fruitItem[14].style.backgroundColor = 'lime';
        scoreAlert.style.display = 'block';
        fruitbox[14].childNodes[0].style.visibility = 'visible';
        fruitbox[14].childNodes[0].src = fruitImage15.src;
        checkPoints();
        bumblebee.play();
        right.play();
        gameOver();
        }
      };
        option[2].onclick = function() {
        click.play();
        wrong.play();
        checkLives();
        lives--;
            
        let query = window.matchMedia("(max-width: 600px)");
              
      if (query.matches) {
        groceries.src = 'angry_bee.gif';
        guessButton.style.display = 'none';
        nextButton.style.display = 'inline';
        question.innerText = 'WRONG !!';   
        question.style.color = '#ff0000';
      } else {
        groceries.src = 'angry_bee.gif';
        guessButton.style.display = 'none';
        nextButton.style.display = 'inline';
        fruitBoxes.style.marginTop ="4px";
        question.innerText = 'WRONG !!';
        question.style.color = '#ff0000';
       }
      };
     }
    }
    break;
     
    case 15:
      groceries.src = fruitImage16.src;
      question.innerHTML = "..fruit or veg ?"; 
          
    if (currentlyPlaying && isClicked(guessButton)) {
      guessButton.onclick = false;
      document.getElementById('option_a');
      guessButton.innerHTML = option_a.innerHTML;
          
      if (fruitbox[15].childNodes[0].src === fruitImage16.src) {
        guessFruit();
      } else {
        option[1].onclick = function() {
        click.play();
        correct.play();
            
        let query = window.matchMedia("(max-width: 600px)");
            
      if (query.matches) {
        groceries.src = 'bee.gif';
        guessButton.style.display = 'none';
        nextButton.style.display = 'inline';
        question.innerText = 'RIGHT !!';
        question.style.color = 'lime';
        fruitbox[15].childNodes[0].src = fruitImage16.src;
        bumblebee.play();
        gameOver();
      } else {
        groceries.src = 'bee.gif';
        guessButton.style.display = 'none';
        nextButton.style.display = 'inline';
        fruitBoxes.style.marginTop ="4px";
        question.innerText = 'RIGHT !!';
        question.style.color = 'lime';
//      butterflies.style.display = 'inline';
//      container.style.border = '180px ridge lime';
        fruitItem[15].style.backgroundColor = 'lime';
        scoreAlert.style.display = 'block';
        fruitbox[15].childNodes[0].style.visibility = 'visible';
        fruitbox[15].childNodes[0].src = fruitImage16.src;
        checkPoints();
        bumblebee.play();
        right.play();
        gameOver();
        }
      };
        option[2].onclick = function() {
        click.play();
        wrong.play();
        checkLives();
        lives--;
            
        let query = window.matchMedia("(max-width: 600px)");
            
      if (query.matches) {
        groceries.src = 'angry_bee.gif';
        guessButton.style.display = 'none';
        nextButton.style.display = 'inline';
        question.innerText = 'WRONG !!';   
        question.style.color = '#ff0000';
      } else {
        groceries.src = 'angry_bee.gif';
        guessButton.style.display = 'none';
        nextButton.style.display = 'inline';
        fruitBoxes.style.marginTop ="4px";
        question.innerText = 'WRONG !!';
        question.style.color = '#ff0000';
       }
      };
     }
    }
    break;
//                               vegetables start here...
    case 16: 
      groceries.src = fruitImage17.src;
      question.innerHTML = "..fruit or veg ?"; 
          
    if (currentlyPlaying && isClicked(guessButton)) {
      guessButton.onclick = false;
      document.getElementById('option_a');
      guessButton.innerHTML = option_a.innerHTML;   
        
    if (vegBox[0].childNodes[0].src === fruitImage17.src) {
      guessFruit();
    } else {
      option[2].onclick = function() {
      click.play();
      correct.play();
          
      let query = window.matchMedia("(max-width: 600px)");
            
    if (query.matches) {
      groceries.src = 'bee.gif';
      guessButton.style.display = 'none';
      nextButton.style.display = 'inline';
      question.innerText = 'RIGHT !!';
      question.style.color = 'lime';
      vegBox[0].childNodes[0].src = fruitImage17.src; 
      bumblebee.play();
    } else {
      groceries.src = 'bee.gif';
      guessButton.style.display = 'none';
      nextButton.style.display = 'inline';
      fruitBoxes.style.marginTop ="4px";
      question.innerText = 'RIGHT !!';
      question.style.color = 'lime';
//    butterflies.style.display = 'inline';
//    container.style.border = '180px ridge lime';
      vegBox[0].childNodes[0].src = fruitImage17.src;
      bumblebee.play();
     }
    }; 
      option[1].onclick = function() {
      click.play();
      wrong.play();
      checkLives();
      lives--;
          
      let query = window.matchMedia("(max-width: 600px)");
          
    if (query.matches) {
      groceries.src = 'angry_bee.gif';
      guessButton.style.display = 'none';
      nextButton.style.display = 'inline';
      question.innerText = 'WRONG !!';   
      question.style.color = '#ff0000';
    } else {
      groceries.src = 'angry_bee.gif';
      guessButton.style.display = 'none';
      nextButton.style.display = 'inline';
      fruitBoxes.style.marginTop ="4px";
      question.innerText = 'WRONG !!';
      question.style.color = '#ff0000';
     }
    };
   }
  }
     break;
      
     case 17: 
      groceries.src = fruitImage18.src;
      question.innerHTML = "..fruit or veg ?"; 
          
     if (currentlyPlaying && isClicked(guessButton)) {
       guessButton.onclick = false;
       document.getElementById('option_a');
       guessButton.innerHTML = option_a.innerHTML;   
        
     if (vegBox[1].childNodes[0].src === fruitImage18.src) {
       guessFruit();
     } else {  
       option[2].onclick = function() {
       click.play();
       correct.play();
           
       let query = window.matchMedia("(max-width: 600px)");
           
     if (query.matches) {
       groceries.src = 'bee.gif';
       guessButton.style.display = 'none';
       nextButton.style.display = 'inline';
       question.innerText = 'RIGHT !!';
       question.style.color = 'lime';
       vegBox[1].childNodes[0].src = fruitImage18.src;  
       bumblebee.play();
     } else {
       groceries.src = 'bee.gif';
       guessButton.style.display = 'none';
       nextButton.style.display = 'inline';
       fruitBoxes.style.marginTop ="4px";
       question.innerText = 'RIGHT !!';
       question.style.color = 'lime';
//     butterflies.style.display = 'inline';
//     container.style.border = '180px ridge lime';
       vegBox[1].childNodes[0].src = fruitImage18.src;
       bumblebee.play();
      }
     }; 
       option[1].onclick = function() {
       click.play();
       wrong.play();
       checkLives();
       lives--;
           
       let query = window.matchMedia("(max-width: 600px)");
           
     if (query.matches) {
       groceries.src = 'angry_bee.gif';
       guessButton.style.display = 'none';
       nextButton.style.display = 'inline';
       question.innerText = 'WRONG !!';   
       question.style.color = '#ff0000';
     } else {
       groceries.src = 'angry_bee.gif';
       guessButton.style.display = 'none';
       nextButton.style.display = 'inline';
       fruitBoxes.style.marginTop ="4px";
       question.innerText = 'WRONG !!';
       question.style.color = '#ff0000';
      }
     };
    }
   } 
     break;
          
     case 18: 
     groceries.src = fruitImage19.src;
     question.innerHTML = "..fruit or veg ?"; 
          
     if (currentlyPlaying && isClicked(guessButton)) {
       guessButton.onclick = false;
       document.getElementById('option_a');
       guessButton.innerHTML = option_a.innerHTML;   
        
     if (vegBox[2].childNodes[0].src === fruitImage19.src) {
         guessFruit();
        } else {  
        option[2].onclick = function() {
        click.play();
        correct.play();
            
        let query = window.matchMedia("(max-width: 600px)");
            
     if (query.matches) {
        groceries.src = 'bee.gif';
        guessButton.style.display = 'none';
        nextButton.style.display = 'inline';
        question.innerText = 'RIGHT !!';
        question.style.color = 'lime';
        vegBox[2].childNodes[0].src = fruitImage19.src;  
        bumblebee.play();
      } else {
        groceries.src = 'bee.gif';
        guessButton.style.display = 'none';
        nextButton.style.display = 'inline';
        fruitBoxes.style.marginTop ="4px";
        question.innerText = 'RIGHT !!';
        question.style.color = 'lime';
//      butterflies.style.display = 'inline';
//      container.style.border = '180px ridge lime';
        vegBox[2].childNodes[0].src = fruitImage19.src;
        bumblebee.play();
        }
      };
        option[1].onclick = function() {
        wrong.play();
        click.play();
        checkLives();
        lives--;
            
        let query = window.matchMedia("(max-width: 600px)");
            
      if (query.matches) {
        groceries.src = 'angry_bee.gif';
        guessButton.style.display = 'none';
        nextButton.style.display = 'inline';
        question.innerText = 'WRONG !!';   
        question.style.color = '#ff0000';
      } else {
        groceries.src = 'angry_bee.gif';
        guessButton.style.display = 'none';
        nextButton.style.display = 'inline';
        fruitBoxes.style.marginTop ="4px";
        question.innerText = 'WRONG !!';
        question.style.color = '#ff0000';
       }
      };
     }
    } 
     break;
          
     case 19: 
     groceries.src = fruitImage20.src;
     question.innerHTML = "..fruit or veg ?"; 
          
     if (currentlyPlaying && isClicked(guessButton)) {
       guessButton.onclick = false;
       document.getElementById('option_a');
       guessButton.innerHTML = option_a.innerHTML;   
        
      if (vegBox[3].childNodes[0].src === fruitImage20.src) {
         guessFruit();
        } else {  
        option[2].onclick = function() {
        click.play();
        correct.play();
            
        let query = window.matchMedia("(max-width: 600px)");
            
      if (query.matches) {
        groceries.src = 'bee.gif';
        guessButton.style.display = 'none';
        nextButton.style.display = 'inline';
        question.innerText = 'RIGHT !!';
        question.style.color = 'lime';
        vegBox[3].childNodes[0].src = fruitImage20.src; 
        bumblebee.play();
      } else {
        groceries.src = 'bee.gif';
        guessButton.style.display = 'none';
        nextButton.style.display = 'inline';
        fruitBoxes.style.marginTop ="4px";
        question.innerText = 'RIGHT !!';
        question.style.color = 'lime';
//      butterflies.style.display = 'inline';
//      container.style.border = '180px ridge lime';
        vegBox[3].childNodes[0].src = fruitImage20.src;
        bumblebee.play();
        }
      };
        option[1].onclick = function() {
        click.play();
        wrong.play();
        checkLives();
        lives--;
            
        let query = window.matchMedia("(max-width: 600px)");
            
     if (query.matches) {
        groceries.src = 'angry_bee.gif';
        guessButton.style.display = 'none';
        nextButton.style.display = 'inline';
        question.innerText = 'WRONG !!';   
        question.style.color = '#ff0000';
      } else {
        groceries.src = 'angry_bee.gif';
        guessButton.style.display = 'none';
        nextButton.style.display = 'inline';
        fruitBoxes.style.marginTop ="4px";
        question.innerText = 'WRONG !!';
        question.style.color = '#ff0000';
        }
       };
      }
     }
     break;
          
     case 20: 
     groceries.src = fruitImage21.src;
     question.innerHTML = "..fruit or veg ?"; 
          
     if (currentlyPlaying && isClicked(guessButton)) {
       guessButton.onclick = false;
       document.getElementById('option_a');
       guessButton.innerHTML = option_a.innerHTML;   
        
       if (vegBox[4].childNodes[0].src === fruitImage21.src) {
          guessFruit();
        } else {  
          option[2].onclick = function() {
          click.play();
          correct.play();
              
          let query = window.matchMedia("(max-width: 600px)");
              
      if (query.matches) {
         groceries.src = 'bee.gif';
         guessButton.style.display = 'none';
         nextButton.style.display = 'inline';
         question.innerText = 'RIGHT !!';
         question.style.color = 'lime';
         vegBox[4].childNodes[0].src = fruitImage21.src; 
         bumblebee.play();
       } else {
         groceries.src = 'bee.gif';
         guessButton.style.display = 'none';
         nextButton.style.display = 'inline';
         fruitBoxes.style.marginTop ="4px";
         question.innerText = 'RIGHT !!';
         question.style.color = 'lime';
 //      butterflies.style.display = 'inline';
 //      container.style.border = '180px ridge lime';
         vegBox[4].childNodes[0].src = fruitImage21.src;
         bumblebee.play();
        }
      };
        option[1].onclick = function() {
        click.play();
        wrong.play();
        checkLives();
        lives--;     
            
        let query = window.matchMedia("(max-width: 600px)");
            
      if (query.matches) {
        groceries.src = 'angry_bee.gif';
        guessButton.style.display = 'none';
        nextButton.style.display = 'inline';
        question.innerText = 'WRONG !!';   
        question.style.color = '#ff0000';
      } else {
        groceries.src = 'angry_bee.gif';
        guessButton.style.display = 'none';
        nextButton.style.display = 'inline';
        fruitBoxes.style.marginTop ="4px";
        question.innerText = 'WRONG !!';
        question.style.color = '#ff0000';
        }
       }; 
      }
     }
     break;
          
     case 21: 
     groceries.src = fruitImage22.src;
     question.innerHTML = "..fruit or veg ?"; 
          
     if (currentlyPlaying && isClicked(guessButton)) {
       guessButton.onclick = false;
       document.getElementById('option_a');
       guessButton.innerHTML = option_a.innerHTML;   
        
     if (vegBox[5].childNodes[0].src === fruitImage22.src) {
        guessFruit();
      } else {  
        option[2].onclick = function() {
        click.play();
        correct.play();
            
        let query = window.matchMedia("(max-width: 600px)");
        
      if (query.matches) {
        groceries.src = 'bee.gif';
        guessButton.style.display = 'none';
        nextButton.style.display = 'inline';
        question.innerText = 'RIGHT !!';
        question.style.color = 'lime';
        vegBox[5].childNodes[0].src = fruitImage22.src;
        bumblebee.play();
      } else {
        groceries.src = 'bee.gif';
        guessButton.style.display = 'none';
        nextButton.style.display = 'inline';
        fruitBoxes.style.marginTop ="4px";
        question.innerText = 'RIGHT !!';
        question.style.color = 'lime';
//      butterflies.style.display = 'inline';
//      container.style.border = '180px ridge lime';
        vegBox[5].childNodes[0].src = fruitImage22.src;
        bumblebee.play();
        }
      }; 
        option[1].onclick = function() {
        click.play();
        wrong.play();
        checkLives();
        lives--;
            
        let query = window.matchMedia("(max-width: 600px)");
            
      if (query.matches) {
        groceries.src = 'angry_bee.gif';
        guessButton.style.display = 'none';
        nextButton.style.display = 'inline';
        question.innerText = 'WRONG !!';   
        question.style.color = '#ff0000';
      } else {
        groceries.src = 'angry_bee.gif';
        guessButton.style.display = 'none';
        nextButton.style.display = 'inline';
        fruitBoxes.style.marginTop ="4px";
        question.innerText = 'WRONG !!';
        question.style.color = '#ff0000';
       }
      };
     }
    }
     break;
          
     case 22: 
     groceries.src = fruitImage23.src;
     question.innerHTML = "..fruit or veg ?"; 
          
     if (currentlyPlaying && isClicked(guessButton)) {
       guessButton.onclick = false;
       document.getElementById('option_a');
       guessButton.innerHTML = option_a.innerHTML;   
        
      if (vegBox[6].childNodes[0].src === fruitImage23.src) {
        guessFruit();
      } else {  
        option[2].onclick = function() {
        click.play();
        correct.play();
            
      let query = window.matchMedia("(max-width: 600px)");
            
      if (query.matches) {
        groceries.src = 'bee.gif';
        guessButton.style.display = 'none';
        nextButton.style.display = 'inline';
        question.innerText = 'RIGHT !!';
        question.style.color = 'lime';
        vegBox[6].childNodes[0].src = fruitImage23.src;
        bumblebee.play();
      } else {
        groceries.src = 'bee.gif';
        guessButton.style.display = 'none';
        nextButton.style.display = 'inline';
        fruitBoxes.style.marginTop ="4px";
        question.style.color = 'lime';
        question.innerText = 'RIGHT !!';
//      butterflies.style.display = 'inline';
//      container.style.border = '180px ridge lime';
        vegBox[6].childNodes[0].src = fruitImage23.src;
        bumblebee.play();
        }
      }; 
        option[1].onclick = function() {
        click.play();
        wrong.play();
        checkLives();
        lives--;
            
        let query = window.matchMedia("(max-width: 600px)");
            
      if (query.matches) {
        groceries.src = 'angry_bee.gif';
        guessButton.style.display = 'none';
        nextButton.style.display = 'inline';
        question.innerText = 'WRONG !!';   
        question.style.color = '#ff0000';
      } else {
        groceries.src = 'angry_bee.gif';
        guessButton.style.display = 'none';
        nextButton.style.display = 'inline';
        fruitBoxes.style.marginTop ="4px";
        question.innerText = 'WRONG !!';
        question.style.color = '#ff0000';
        }
       };
      }
     }
     break;
          
     case 23: 
     groceries.src = fruitImage24.src;
     question.innerHTML = "..fruit or veg ?"; 
          
     if (currentlyPlaying && isClicked(guessButton)) {
       guessButton.onclick = false;
       document.getElementById('option_a');
       guessButton.innerHTML = option_a.innerHTML;   
        
      if (vegBox[7].childNodes[0].src === fruitImage24.src) {
        guessFruit();
      } else {  
        option[2].onclick = function() {
        click.play();
        correct.play();
            
        let query = window.matchMedia("(max-width: 600px)");
            
      if (query.matches) {
        groceries.src = 'bee.gif';
        guessButton.style.display = 'none';
        nextButton.style.display = 'inline';
        question.innerText = 'RIGHT !!';
        question.style.color = 'lime';
        vegBox[7].childNodes[0].src = fruitImage24.src; 
        bumblebee.play();
      } else {
        groceries.src = 'bee.gif';
        guessButton.style.display = 'none';
        nextButton.style.display = 'inline';
        fruitBoxes.style.marginTop ="4px";
        question.innerText = 'RIGHT !!';
        question.style.color = 'lime';
//      butterflies.style.display = 'inline';
//      container.style.border = '180px ridge lime';
        vegBox[7].childNodes[0].src = fruitImage24.src;
        bumblebee.play();
        }
      }; 
        option[1].onclick = function() {
        click.play();
        wrong.play();
        checkLives();
        lives--;
            
        let query = window.matchMedia("(max-width: 600px)");
            
      if (query.matches) {
        groceries.src = 'angry_bee.gif';
        guessButton.style.display = 'none';
        nextButton.style.display = 'inline';
        question.innerText = 'WRONG !!';   
        question.style.color = '#ff0000';
       } else {
        groceries.src = 'angry_bee.gif';
        guessButton.style.display = 'none';
        nextButton.style.display = 'inline';
        fruitBoxes.style.marginTop ="4px";
        question.innerText = 'WRONG !!';
        question.style.color = '#ff0000';
        }
       }; 
      }
     }
     break;
          
     case 24: 
     groceries.src = fruitImage25.src;
     question.innerHTML = "..fruit or veg ?"; 
          
     if (currentlyPlaying && isClicked(guessButton)) {
       guessButton.onclick = false;
       document.getElementById('option_a');
       guessButton.innerHTML = option_a.innerHTML;   
        
       if (vegBox[8].childNodes[0].src === fruitImage25.src) {
         guessFruit();
        } else {  
          option[2].onclick = function() {
          click.play();
          correct.play();
            
        let query = window.matchMedia("(max-width: 600px)");
            
      if (query.matches) {
        groceries.src = 'bee.gif';
        guessButton.style.display = 'none';
        nextButton.style.display = 'inline';
        question.innerText = 'RIGHT !!';
        question.style.color = 'lime';
        vegBox[8].childNodes[0].src = fruitImage25.src;
        bumblebee.play();
      } else {
        groceries.src = 'bee.gif';
        guessButton.style.display = 'none';
        nextButton.style.display = 'inline';
        fruitBoxes.style.marginTop ="4px";
        question.innerText = 'RIGHT !!';
        question.style.color = 'lime';
//      butterflies.style.display = 'inline';
//      container.style.border = '180px ridge lime';
        vegBox[8].childNodes[0].src = fruitImage25.src;
        bumblebee.play();
        }
      };
        option[1].onclick = function() {
        click.play();
        wrong.play();
        checkLives();
        lives--;
            
        let query = window.matchMedia("(max-width: 600px)");
            
      if (query.matches) {
        groceries.src = 'angry_bee.gif';
        guessButton.style.display = 'none';
        nextButton.style.display = 'inline';
        question.innerText = 'WRONG !!';   
        question.style.color = '#ff0000';
      } else {
        groceries.src = 'angry_bee.gif';
        guessButton.style.display = 'none';
        nextButton.style.display = 'inline';  
        fruitBoxes.style.marginTop ="4px";
        question.innerText = 'WRONG !!';
        question.style.color = '#ff0000';
        }
       }; 
      }
     }
     break;
          
     case 25: 
     groceries.src = fruitImage26.src;
     question.innerHTML = "..fruit or veg ?"; 
          
     if (currentlyPlaying && isClicked(guessButton)) {
       guessButton.onclick = false;
       document.getElementById('option_a');
       guessButton.innerHTML = option_a.innerHTML;   
        
       if (vegBox[9].childNodes[0].src === fruitImage26.src) {
         guessFruit();
        } else {  
        option[2].onclick = function() {
        click.play();
        correct.play();
            
        let query = window.matchMedia("(max-width: 600px)");
            
      if (query.matches) {
        groceries.src = 'bee.gif';
        guessButton.style.display = 'none';
        nextButton.style.display = 'inline';
        question.innerText = 'RIGHT !!';
        question.style.color = 'lime';
        vegBox[9].childNodes[0].src = fruitImage26.src; 
        bumblebee.play();
      } else {
        groceries.src = 'bee.gif';
        guessButton.style.display = 'none';
        nextButton.style.display = 'inline';
        fruitBoxes.style.marginTop ="4px";
        question.innerText = 'RIGHT !!';
        question.style.color = 'lime';
//      butterflies.style.display = 'inline';
//      container.style.border = '180px ridge lime';
        vegBox[9].childNodes[0].src = fruitImage26.src;
        bumblebee.play();
        }
      }; 
        option[1].onclick = function() {
        click.play();
        wrong.play();
        checkLives();
        lives--;
            
        let query = window.matchMedia("(max-width: 600px)");
            
      if (query.matches) {
        groceries.src = 'angry_bee.gif';
        guessButton.style.display = 'none';
        nextButton.style.display = 'inline';
        question.innerText = 'WRONG !!';   
        question.style.color = '#ff0000';
      } else {
        groceries.src = 'angry_bee.gif';
        guessButton.style.display = 'none';
        nextButton.style.display = 'inline';
        fruitBoxes.style.marginTop ="4px";
        question.innerText = 'WRONG !!';
        question.style.color = '#ff0000';
        }
       }; 
      }
     }
     break;
          
     case 26: 
     groceries.src = fruitImage27.src;
     question.innerHTML = "..fruit or veg ?"; 
          
     if (currentlyPlaying && isClicked(guessButton)) {
       guessButton.onclick = false;
       document.getElementById('option_a');
       guessButton.innerHTML = option_a.innerHTML;   
        
       if (vegBox[10].childNodes[0].src === fruitImage27.src) {
         guessFruit();
       } else {  
         option[2].onclick = function() {
         click.play();
         correct.play();
            
        let query = window.matchMedia("(max-width: 600px)");
            
      if (query.matches) {
        groceries.src = 'bee.gif';
        guessButton.style.display = 'none';
        nextButton.style.display = 'inline';
        question.innerText = 'RIGHT !!';
        question.style.color = 'lime';
        vegBox[10].childNodes[0].src = fruitImage27.src; 
        bumblebee.play();
      } else {
        groceries.src = 'bee.gif';
        guessButton.style.display = 'none';
        nextButton.style.display = 'inline';
        fruitBoxes.style.marginTop ="4px";
        question.innerText = 'RIGHT !!';
        question.style.color = 'lime';
//      butterflies.style.display = 'inline';
//      container.style.border = '180px ridge lime';
        vegBox[10].childNodes[0].src = fruitImage27.src;
        bumblebee.play();
        }
      }; 
        option[1].onclick = function() {
        click.play();
        wrong.play();
        checkLives();
        lives--;  
            
        let query = window.matchMedia("(max-width: 600px)");
            
      if (query.matches) {
        groceries.src = 'angry_bee.gif';
        guessButton.style.display = 'none';
        nextButton.style.display = 'inline';
        question.innerText = 'WRONG !!';   
        question.style.color = '#ff0000';
      } else {
        groceries.src = 'angry_bee.gif';
        guessButton.style.display = 'none';
        nextButton.style.display = 'inline';
        fruitBoxes.style.marginTop ="4px";
        question.innerText = 'WRONG !!';
        question.style.color = '#ff0000';
        }
      }; 
    }
  }
     break;
          
     case 27: 
     groceries.src = fruitImage28.src;
     question.innerHTML = "..fruit or veg ?"; 
          
     if (currentlyPlaying && isClicked(guessButton)) {
       guessButton.onclick = false;
       document.getElementById('option_a');
       guessButton.innerHTML = option_a.innerHTML;   
        
       if (vegBox[11].childNodes[0].src === fruitImage28.src) {
         guessFruit();
       } else {  
         option[2].onclick = function() {
         click.play();
         correct.play();
            
        let query = window.matchMedia("(max-width: 600px)");
            
      if (query.matches) {
        groceries.src = 'bee.gif';
        guessButton.style.display = 'none';
        nextButton.style.display = 'inline';
        question.innerText = 'RIGHT !!';
        question.style.color = 'lime';
        vegBox[11].childNodes[0].src = fruitImage28.src; 
        bumblebee.play();
      } else {
        groceries.src = 'bee.gif';
        guessButton.style.display = 'none';
        nextButton.style.display = 'inline';
        fruitBoxes.style.marginTop ="4px";
        question.innerText = 'RIGHT !!';
        question.style.color = 'lime';
//      butterflies.style.display = 'inline';
//      container.style.border = '180px ridge lime';
        vegBox[11].childNodes[0].src = fruitImage28.src;
        bumblebee.play();
        }
      }; 
        option[1].onclick = function() {
        click.play();
        wrong.play();
        checkLives();
        lives--;
            
        let query = window.matchMedia("(max-width: 600px)");
            
      if (query.matches) {
        groceries.src = 'angry_bee.gif';
        guessButton.style.display = 'none';
        nextButton.style.display = 'inline';
        question.innerText = 'WRONG !!';   
        question.style.color = '#ff0000';
      } else {
        groceries.src = 'angry_bee.gif';
        guessButton.style.display = 'none';
        nextButton.style.display = 'inline';
        fruitBoxes.style.marginTop ="4px";
        question.innerText = 'WRONG !!';
        question.style.color = '#ff0000';
        }
       }; 
      }
     }
      
     }
        let query = window.matchMedia("(max-width: 600px)");
     
        if (query.matches) {
          groceries.style.marginTop = '40px';
          groceries.style.marginBottom ="-40px";
          guessButton.style.border = 'none';
          guessButton.style.boxShadow = 'none';
          guessButton.style.background = 'none'; 
        } else {
          question.style.color ='snow';
          question.style.letterSpacing ="4px";
          guessButton.style.border = 'none';
          groceries.style.marginTop = '0.5em';
          groceries.style.marginBottom ="-3.3em";
          guessButton.style.boxShadow = 'none';
          guessButton.style.background = 'none';
          score.style.visibility = 'visible';
          fruitBoxes.style.marginTop = "-13px";
        }
        
        currentlyPlaying = true;
  };



  nextButton.onclick = function() {
      
    let query = window.matchMedia("(max-width: 600px)");
    
    if (query.matches) {
      click.play();
      currentlyPlaying = true;
      question.style.color = 'snow';
      question.style.fontFamily = 'Modak', 'cursive';
      question.innerText = "..ready ?";
      groceries.src = 'bee.gif';
      groceries.style.marginBottom ="-40px";
      nextButton.style.display = 'none';
      guessButton.style.background = 'snow';
      guessButton.style.display = 'inline';
      guessButton.innerHTML = 'guess';
      guessButton.style.marginBottom = "0px";
      guessButton.style.border = '2px solid black';
      kids.style.color = 'snow'; 
    } else {
      click.play();
      currentlyPlaying = true;
      question.innerText = "..ready ?";
      question.style.color = 'snow';
      question.style.letterSpacing ="4px";
      groceries.src = 'bee.gif';
      nextButton.style.display = 'none';
      guessButton.style.background = 'white';
      guessButton.style.display = 'inline';
      guessButton.innerText = 'guess';
      guessButton.style.border = '2px solid black';
      guessButton.style.boxShadow = "0px 2px 2px black";
      fruitBoxes.style.marginTop = "3px";
      scoreAlert.style.display = 'none';
    }      
  
      fruitItem.forEach(function(fruit) {
        fruit.style.backgroundImage = 'linear-gradient(yellow, ghostwhite, ghostwhite)';
      })
      
      guessButton.onclick = function() {
        click.play();
        guessFruit();
      };
   }
  
  
function gameOver() {
   isPlaying();

    if (fruitbox[0].childNodes[0].src === fruitImage1.src && fruitbox[1].childNodes[0].src === fruitImage2.src && fruitbox[2].childNodes[0].src === fruitImage3.src && fruitbox[3].childNodes[0].src === fruitImage4.src && fruitbox[4].childNodes[0].src === fruitImage5.src && fruitbox[5].childNodes[0].src === fruitImage6.src && fruitbox[6].childNodes[0].src === fruitImage7.src && fruitbox[7].childNodes[0].src === fruitImage8.src && fruitbox[8].childNodes[0].src === fruitImage9.src && fruitbox[9].childNodes[0].src === fruitImage10.src && fruitbox[10].childNodes[0].src === fruitImage11.src && fruitbox[11].childNodes[0].src === fruitImage12.src && fruitbox[12].childNodes[0].src === fruitImage13.src && fruitbox[13].childNodes[0].src === fruitImage14.src && fruitbox[14].childNodes[0].src === fruitImage15.src && fruitbox[15].childNodes[0].src === fruitImage16.src) {
        
    currentlyPlaying = false;
        
    let query = window.matchMedia("(max-width: 600px)");

    if (query.matches) {      
      youWin();
      currentlyPlaying = false;
      body.style.backgroundImage = 'url(stars.gif)';    
      guessButton.style.display = 'none';
      nextButton.innerText = 'To play more games you\'ll need to create an account.<br> Go to "my account" in the navigation menu. Once logged in, click on the "games" tab';
      nextButton.style.fontSize = "0.8rem";
      nextButton.style.lineHeight = "2.1";
      nextButton.style.backgroundColor = 'transparent';
      nextButton.style.border = 'none';
      nextButton.style.color = 'black';
      nextButton.style.margin = "20px";
      nextButton.style.cursor = 'auto';
      nextButton.style.boxShadow = 'none';
      nextButton.onclick = false;
      groceries.style.marginTop = "40px";
      groceries.src = 'you_win.gif';
      groceries.style.width = "50%";
      question.innerText = 'AWESOME !!!';   
      question.style.fontFamily = 'Freckle Face', 'cursive';
      question.style.fontSize = "2em";
      question.style.color = 'lime';
      container.style.height = "auto";
    } else {
      youWin();
      currentlyPlaying = false;
      kids.style.color = 'snow';
      guessButton.style.display = 'none';
      nextButton.style.letterSpacing = "3px";
      nextButton.style.width = "50em";
      nextButton.style.lineHeight = "1.5";
      nextButton.style.fontSize = "1rem";
      nextButton.style.backgroundColor = 'transparent';
      nextButton.style.boxShadow = 'none';
      nextButton.style.border = 'none';
      nextButton.style.color = 'black';
      nextButton.style.cursor = 'auto';
      nextButton.onclick = false;
      nextButton.innerText = 'To play more games you\'ll need to create an account. Go to "my account" in the navigation menu. Once logged in, click on the "games" tab';
      groceries.style.marginTop = "15px";
      groceries.style.marginBottom = "-50px";
      groceries.src = 'banana_man_pc.gif';
      body.style.backgroundImage = 'url(stars.gif)';
      question.style.fontFamily = 'Freckle Face', 'cursive';
      question.style.fontSize = "2.5rem";
      question.style.letterSpacing = "5px";
      question.innerText = 'AWESOME !!!';
      scoreAlert.style.display = 'none';
//    butterflies.style.display = 'none';
     }
    }
  };




























