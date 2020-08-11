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

let box1 = document.getElementById('_Squash');
let box2 = document.getElementById('_Cucumber');
let box3 = document.getElementById('_Banana');
let box4 = document.getElementById('_Pumpkin');
let box5 = document.getElementById('_Cherries');
let box6 = document.getElementById('_Blueberries');
let box7 = document.getElementById('_Olives');
let box8 = document.getElementById('_Peapod');
let box9 = document.getElementById('_Chilli');
let box10 = document.getElementById('_Avacados');
let box11 = document.getElementById('_Tomato');
let box12 = document.getElementById('_Watermelon');
let box13 = document.getElementById('_Peanuts');
let box14 = document.getElementById('_Aubergine');
let box15 = document.getElementById('_Pepper');
let box16 = document.getElementById('_Sweetcorn');
let item1 = document.getElementById('_Potato');
let item2 = document.getElementById('_Onion');
let item3 = document.getElementById('_Mushrooms');
let item4 = document.getElementById('_Artichoke');
let item5 = document.getElementById('_Rhubarb');
let item6 = document.getElementById('_Ginger');
let item7 = document.getElementById('_Celery');
let item8 = document.getElementById('_Garlic');
let item9 = document.getElementById('_Carrot');
let item10 = document.getElementById('_Radish');
let item11 = document.getElementById('_Zucchini');
let item12 = document.getElementById('_Turnip');

let life_a = document.getElementById('life_a');
let life_b = document.getElementById('life_b');
let life_c = document.getElementById('life_c');

let home = document.getElementById('home');
let games = document.getElementById('games');
let help = document.getElementById('help');
let myAccount = document.getElementById('myAccount');
let guessButton = document.getElementById('guess');
let nextButton = document.getElementById('next');
let question = document.getElementById('question');
let option = document.getElementsByTagName('button');
let groceries = document.getElementById('groceries');
let container = document.getElementById('container');
let navItems = document.getElementsByClassName('.nav-items');
let navContainer = document.getElementById('nav-container');
let fruitList = document.querySelectorAll('.fruit-box');
let vegetableList = document.querySelectorAll('.vegetable-box');
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
let lives = 2;

let currentlyPlaying = true;


function isPlaying(currentlyPlaying){
  if (currentlyPlaying){
    return true;
  } else {
    return false;
  }
}

let isClicked = (button) => {
  if (isPlaying(currentlyPlaying) && button) {
    return true;
  } else {
    return false;
  }
}


function checkLives(src){
  isPlaying();
    
  if (currentlyPlaying && lives === 2){
    life_c.src = 'death_icon_c.png';
    currentlyPlaying = false;
  } 
  else if (currentlyPlaying && lives === 1){
    life_b.src = 'death_icon_b.png';
    currentlyPlaying = false;
  }
  else if (currentlyPlaying && lives === 0) {
    life_a.src = 'death_icon_a.png';
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
    nextButton.innerHTML = 'click "home" to try again';
    nextButton.style.border = 'none';
    nextButton.style.boxShadow = 'none';
    nextButton.style.cursor = 'auto';
    nextButton.onclick = false;
    kids.style.color = 'white';
    nextButton.style.background = 'transparent';
    container.style.backgroundImage = "url(https://i.pinimg.com/originals/91/95/f4/9195f4dd1b69f90038f627c8af422429.gif)";
    deadText.innerHTML = 'GAME OVER !!!';
    looser.play();  
  } else {
    game_over_music.play();
    container.style.backgroundImage = "url(https://i.pinimg.com/originals/91/95/f4/9195f4dd1b69f90038f627c8af422429.gif)";
    question.style.display = 'none';
    nextButton.innerHTML = 'click "home" to try again';
    nextButton.style.border = 'none';
    nextButton.style.boxShadow = 'none';
    nextButton.style.cursor = 'auto';
    nextButton.onclick = false;
    home.style.color = 'black'; 
    games.style.color = 'black';
    help.style.color = 'black';
    myAccount.style.color = 'black';
    deadText.style.letterSpacing = "8px";
    deadText.innerHTML = 'GAME OVER !!!';
    looser.play();
  }
}


function youWin() {
isPlaying();
   
currentlyPlaying = false;
    
if (!currentlyPlaying && lives === 2) {
    
let query = window.matchMedia("(max-width: 600px)");
    
if (query.matches) {
  deadText.style.color = 'lightpink';
  deadText.style.marginBottom = "20px";
  deadText.style.fontFamily = 'Freckle Face', 'cursive';
  deadText.innerHTML = '..flawless !!';
  flawless.play();
  sound.pause();
  cheer.play();
} else {
  deadText.style.color = 'lightpink';
  deadText.style.marginBottom = "20px";
  deadText.style.fontFamily = 'Freckle Face', 'cursive';
  deadText.innerHTML = '..flawless !!';
  flawless.play();
  sound.pause();
  cheer.play();
}
    
  setTimeout(function(){ 
    win.play(); 
  }, 3000);

  setInterval(function(){
    if (deadText.style.color === 'lightpink') {
      deadText.style.color = 'yellow';
    } else if (deadText.style.color === 'yellow') {
      deadText.style.color = 'aqua';
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
  guessFruit()
}


//switch function for Fruits
function guessFruit() {
isPlaying();

const count = 28;

let randFruit = Math.floor(Math.random() * count);    
    
  switch (randFruit) {
               
    case 0:
      groceries.src = fruitImage1.src;
      question.innerHTML = "..fruit or veg ?";
            
   if (currentlyPlaying && isClicked(guessButton)) {
      guessButton.onclick = false;
      document.getElementById('option_a');
      guessButton.innerHTML = option_a.innerHTML;
       
      if (box1.src === fruitImage1.src) {
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
        question.innerHTML = 'RIGHT !!';
        question.style.fontFamily =  'Luckiest Guy', 'cursive';
        question.style.color = 'lime';
        fruitList[0].style.border = '0.3em ridge lime';
        box1.style.visibility = 'visible';
        box1.src = fruitImage1.src;
        bumblebee.play();
        gameOver();
      } else { 
        groceries.src = 'bee.gif';
        kids.style.color = 'lime';
        guessButton.style.display = 'none';
        nextButton.style.display = 'inline';
        groceries.style.marginTop = '50px';
        groceries.style.marginBottom ="-33px";
        question.innerHTML = 'RIGHT !!';
        question.style.color = 'lime';
        butterflies.style.display = 'inline';
        container.style.border = '180px ridge lime';
        fruitList[0].style.border = '25px solid lime';
        box1.style.visibility = 'visible';
        box1.src = fruitImage1.src; 
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
        question.innerHTML = 'WRONG !!';   
        question.style.color = '#ff0000';
        question.style.fontFamily =  'Luckiest Guy', 'cursive';
      } else {
        groceries.src = 'angry_bee.gif';
        guessButton.style.display = 'none';
        nextButton.style.display = 'inline';
        groceries.style.marginTop = '50px';
        groceries.style.marginBottom ="-33px";
        question.innerHTML = 'WRONG !!';
        question.style.color = "#ff0000";
        kids.style.color = "#ff0000";
        container.style.border = '180px groove #ff0000';
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
      
      if (box2.src === fruitImage2.src) {
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
        question.innerHTML = 'RIGHT !!';
        question.style.color = 'lime';
        question.style.fontFamily =  'Luckiest Guy', 'cursive';
        fruitList[1].style.border = '0.3em ridge lime';
        box2.style.visibility = 'visible';
        box2.src = fruitImage2.src;
        bumblebee.play();
        gameOver();  
      } else {
        groceries.src = 'bee.gif';
        kids.style.color = 'lime';
        guessButton.style.display = 'none';
        nextButton.style.display = 'inline';
        groceries.style.marginTop = '50px';
        groceries.style.marginBottom ="-33px";
        question.innerHTML = 'RIGHT !!';
        question.style.color = 'lime';
        butterflies.style.display = 'inline';
        container.style.border = '180px ridge lime';
        fruitList[1].style.border = '25px solid lime';
        box2.style.visibility = 'visible';
        box2.src = fruitImage2.src;
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
        question.innerHTML = 'WRONG !!';   
        question.style.color = '#ff0000';
        question.style.fontFamily =  'Luckiest Guy', 'cursive';
      } else {
        groceries.src = 'angry_bee.gif';
        guessButton.style.display = 'none';
        nextButton.style.display = 'inline';
        groceries.style.marginTop = '50px';
        groceries.style.marginBottom ="-33px";
        question.innerHTML = 'WRONG !!';
        question.style.color = "#ff0000";
        kids.style.color = "#ff0000";
        container.style.border = '180px groove #ff0000';   
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
        
      if (box3.src === fruitImage3.src) {
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
        question.innerHTML = 'RIGHT !!';
        question.style.color = 'lime';
        question.style.fontFamily =  'Luckiest Guy', 'cursive';
        fruitList[2].style.border = '0.3em ridge lime';
        box3.style.visibility = 'visible';
        box3.src = fruitImage3.src;
        bumblebee.play();
        gameOver();
      } else {
        groceries.src = 'bee.gif';
        kids.style.color = 'lime';
        guessButton.style.display = 'none';
        nextButton.style.display = 'inline';
        groceries.style.marginTop = '50px';
        groceries.style.marginBottom ="-33px";
        question.innerHTML = 'RIGHT !!';
        question.style.color = 'lime';
        butterflies.style.display = 'inline';
        container.style.border = '180px ridge lime';
        fruitList[2].style.border = '25px solid lime';
        box3.style.visibility = 'visible';
        box3.src = fruitImage3.src;
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
        question.innerHTML = 'WRONG !!';   
        question.style.color = '#ff0000';
        question.style.fontFamily =  'Luckiest Guy', 'cursive';
      } else {
        groceries.src = 'angry_bee.gif';
        guessButton.style.display = 'none';
        nextButton.style.display = 'inline';
        groceries.style.marginTop = '50px';
        groceries.style.marginBottom ="-33px";
        question.innerHTML = 'WRONG !!';
        question.style.color = '#ff0000';
        kids.style.color = "#ff0000";
        container.style.border = '180px groove #ff0000';
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
        
      if (box4.src === fruitImage4.src) { 
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
        question.innerHTML = 'RIGHT !!';
        question.style.color = 'lime';
        question.style.fontFamily =  'Luckiest Guy', 'cursive';
        fruitList[3].style.border = '0.3em ridge lime';
        box4.style.visibility = 'visible';
        box4.src = fruitImage4.src;
        bumblebee.play();
        gameOver();
      } else {
        groceries.src = 'bee.gif';
        kids.style.color = 'lime';
        guessButton.style.display = 'none';
        nextButton.style.display = 'inline';
        groceries.style.marginTop = '50px';
        groceries.style.marginBottom ="-33px";
        question.innerHTML = 'RIGHT !!';
        question.style.color = 'lime';
        butterflies.style.display = 'inline';
        container.style.border = '180px groove lime';
        fruitList[3].style.border = '25px solid lime';
        box4.style.visibility = 'visible';
        box4.src = fruitImage4.src; 
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
        question.innerHTML = 'WRONG !!';   
        question.style.color = '#ff0000';
        question.style.fontFamily =  'Luckiest Guy', 'cursive';
      } else {
        groceries.src = 'angry_bee.gif';
        guessButton.style.display = 'none';
        nextButton.style.display = 'inline';
        groceries.style.marginTop = '50px';
        groceries.style.marginBottom ="-33px";
        question.innerHTML = 'WRONG !!';
        question.style.color = '#ff0000';
        kids.style.color = "#ff0000";
        container.style.border = '180px groove #ff0000';
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
        
      if (box5.src === fruitImage5.src) {
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
        question.innerHTML = 'RIGHT !!';
        question.style.color = 'lime';
        question.style.fontFamily =  'Luckiest Guy', 'cursive';
        fruitList[4].style.border = '0.3em ridge lime';
        box5.style.visibility = 'visible';
        box5.src = fruitImage5.src;
        bumblebee.play();
        gameOver();
      } else {
        groceries.src = 'bee.gif';
        kids.style.color = 'lime';
        guessButton.style.display = 'none';
        nextButton.style.display = 'inline';
        groceries.style.marginTop = '50px';
        groceries.style.marginBottom ="-33px";
        question.innerHTML = 'RIGHT !!';
        question.style.color = 'lime';
        butterflies.style.display = 'inline';
        container.style.border = '180px groove lime';
        fruitList[4].style.border = '25px solid lime';
        box5.style.visibility = 'visible';
        box5.src = fruitImage5.src;
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
        question.innerHTML = 'WRONG !!';   
        question.style.color = '#ff0000';
        question.style.fontFamily =  'Luckiest Guy', 'cursive';
      } else {
        groceries.src = 'angry_bee.gif';
        guessButton.style.display = 'none';
        nextButton.style.display = 'inline';
        groceries.style.marginTop = '50px';
        groceries.style.marginBottom ="-33px";
        question.innerHTML = 'WRONG !!';
        question.style.color = '#ff0000';
        kids.style.color = "#ff0000";
        container.style.border = '180px groove #ff0000';
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
        
      if (box6.src === fruitImage6.src) {
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
        question.innerHTML = 'RIGHT !!';
        question.style.color = 'lime';
        question.style.fontFamily =  'Luckiest Guy', 'cursive';
        fruitList[5].style.border = '0.3em ridge lime';
        box6.style.visibility = 'visible';
        box6.src = fruitImage6.src;
        bumblebee.play();
        gameOver();     
      } else {
        groceries.src = 'bee.gif';
        kids.style.color = 'lime';
        guessButton.style.display = 'none';
        nextButton.style.display = 'inline';
        groceries.style.marginTop = '50px';
        groceries.style.marginBottom ="-33px";
        question.innerHTML = 'RIGHT !!';
        question.style.color = 'lime';
        butterflies.style.display = 'inline';
        container.style.border = '180px ridge lime';
        fruitList[5].style.border = '25px solid lime';
        box6.style.visibility = 'visible';
        box6.src = fruitImage6.src;
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
        question.innerHTML = 'WRONG !!';   
        question.style.color = '#ff0000';
        question.style.fontFamily =  'Luckiest Guy', 'cursive';
      } else {
        groceries.src = 'angry_bee.gif';
        guessButton.style.display = 'none';
        nextButton.style.display = 'inline';
        groceries.style.marginTop = '50px';
        groceries.style.marginBottom ="-33px";
        question.innerHTML = 'WRONG !!';
        question.style.color = '#ff0000';
        kids.style.color = "#ff0000";
        container.style.border = '180px groove #ff0000';
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
        
      if (box7.src === fruitImage7.src) {
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
        question.innerHTML = 'RIGHT !!';
        question.style.color = 'lime';
        question.style.fontFamily =  'Luckiest Guy', 'cursive';
        fruitList[6].style.border = '0.3em ridge lime';
        box7.style.visibility = 'visible';
        box7.src = fruitImage7.src;
        bumblebee.play();
        gameOver();
      } else {
        groceries.src = 'bee.gif';
        kids.style.color = 'lime';
        guessButton.style.display = 'none';
        nextButton.style.display = 'inline';
        groceries.style.marginTop = '50px';
        groceries.style.marginBottom ="-33px";
        question.innerHTML = 'RIGHT !!';
        question.style.color = 'lime';
        butterflies.style.display = 'inline';
        fruitList[6].style.border = '25px solid lime';
        box7.style.visibility = 'visible';
        box7.src = fruitImage7.src;
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
          question.innerHTML = 'WRONG !!';   
          question.style.color = '#ff0000';
          question.style.fontFamily =  'Luckiest Guy', 'cursive';
        } else {
          groceries.src = 'angry_bee.gif';
          guessButton.style.display = 'none';
          nextButton.style.display = 'inline';
          groceries.style.marginTop = '50px';
          groceries.style.marginBottom ="-33px";
          question.innerHTML = 'WRONG !!';
          question.style.color = '#ff0000';
          kids.style.color = "#ff0000";
          container.style.border = '180px groove #ff0000';
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
          
      if (box8.src === fruitImage8.src) {
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
        question.innerHTML = 'RIGHT !!';
        question.style.color = 'lime';
        question.style.fontFamily =  'Luckiest Guy', 'cursive';
        fruitList[7].style.border = '0.3em ridge lime';
        box8.style.visibility = 'visible';
        box8.src = fruitImage8.src; 
        bumblebee.play();
        gameOver();
      } else {
        groceries.src = 'bee.gif';
        kids.style.color = 'lime';
        guessButton.style.display = 'none';
        nextButton.style.display = 'inline';
        groceries.style.marginTop = '50px';
        groceries.style.marginBottom ="-33px";
        question.innerHTML = 'RIGHT !!';
        question.style.color = 'lime';
        butterflies.style.display = 'inline';
        container.style.border = '180px ridge lime';
        fruitList[7].style.border = '25px solid lime';
        box8.style.visibility = 'visible';
        box8.src = fruitImage8.src;
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
        question.innerHTML = 'WRONG !!';   
        question.style.color = '#ff0000';
        question.style.fontFamily =  'Luckiest Guy', 'cursive';
      } else {
        groceries.src = 'angry_bee.gif';
        guessButton.style.display = 'none';
        nextButton.style.display = 'inline';
        groceries.style.marginTop = '50px';
        groceries.style.marginBottom ="-33px";
        question.innerHTML = 'WRONG !!';
        question.style.color = '#ff0000';
        kids.style.color = "#ff0000";
        container.style.border = '180px groove #ff0000';
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
      
      if (box9.src === fruitImage9.src) {
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
        question.innerHTML = 'RIGHT !!';
        question.style.color = 'lime';
        question.style.fontFamily =  'Luckiest Guy', 'cursive';
        fruitList[8].style.border = '0.3em ridge lime';
        box9.style.visibility = 'visible';
        box9.src = fruitImage9.src;
        bumblebee.play();
        gameOver();
      } else {
        groceries.src = 'bee.gif';
        kids.style.color = 'lime';
        guessButton.style.display = 'none';
        nextButton.style.display = 'inline';
        groceries.style.marginTop = '50px';
        groceries.style.marginBottom ="-33px";
        question.innerHTML = 'RIGHT !!';
        question.style.color = 'lime';
        butterflies.style.display = 'inline';
        container.style.border = '180px ridge lime';
        fruitList[8].style.border = '25px solid lime';
        box9.style.visibility = 'visible';
        box9.src = fruitImage9.src;
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
        question.innerHTML = 'WRONG !!';   
        question.style.color = '#ff0000';
        question.style.fontFamily =  'Luckiest Guy', 'cursive';
      } else {
        groceries.src = 'angry_bee.gif';
        guessButton.style.display = 'none';
        nextButton.style.display = 'inline';
        groceries.style.marginTop = '50px';
        groceries.style.marginBottom ="-33px";
        question.innerHTML = 'WRONG !!';
        question.style.color = '#ff0000';
        kids.style.color = "#ff0000";
        container.style.border = '180px groove #ff0000';
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
          
      if (box10.src === fruitImage10.src) {
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
        question.innerHTML = 'RIGHT !!';
        question.style.color = 'lime';
        question.style.fontFamily =  'Luckiest Guy', 'cursive';
        fruitList[9].style.border = '0.3em ridge lime';
        box10.style.visibility = 'visible';
        box10.src = fruitImage10.src;  
        bumblebee.play();
        gameOver();
      } else {
        groceries.src = 'bee.gif';
        kids.style.color = 'lime';
        guessButton.style.display = 'none';
        nextButton.style.display = 'inline';
        groceries.style.marginTop = '50px';
        groceries.style.marginBottom ="-33px";
        question.innerHTML = 'RIGHT !!';
        question.style.color = 'lime';
        butterflies.style.display = 'inline';
        container.style.border = '180px ridge lime';
        fruitList[9].style.border = '25px solid lime';
        box10.style.visibility = 'visible';
        box10.src = fruitImage10.src;
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
        question.innerHTML = 'WRONG !!';   
        question.style.color = '#ff0000';
        question.style.fontFamily =  'Luckiest Guy', 'cursive';
      } else {
        groceries.src = 'angry_bee.gif';
        guessButton.style.display = 'none';
        nextButton.style.display = 'inline';
        groceries.style.marginTop = '50px';
        groceries.style.marginBottom ="-33px";
        question.innerHTML = 'WRONG !!';
        question.style.color = '#ff0000';
        kids.style.color = "#ff0000";
        container.style.border = '180px groove #ff0000';
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
        
      if (box11.src === fruitImage11.src) {
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
        question.innerHTML = 'RIGHT !!';
        question.style.color = 'lime';
        question.style.fontFamily =  'Luckiest Guy', 'cursive';
        fruitList[10].style.border = '0.3em ridge lime';
        box11.style.visibility = 'visible';
        box11.src = fruitImage11.src;
        bumblebee.play();
        gameOver();
      } else {
        groceries.src = 'bee.gif';
        kids.style.color = 'lime';
        guessButton.style.display = 'none';
        nextButton.style.display = 'inline';
        groceries.style.marginTop = '50px';
        groceries.style.marginBottom ="-33px";
        question.innerHTML = 'RIGHT !!';
        question.style.color = 'lime';
        butterflies.style.display = 'inline';
        container.style.border = '180px ridge lime';
        fruitList[10].style.border = '25px solid lime';
        box11.style.visibility = 'visible';
        box11.src = fruitImage11.src;
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
        question.innerHTML = 'WRONG !!';   
        question.style.color = '#ff0000';
        question.style.fontFamily =  'Luckiest Guy', 'cursive';
      } else {
        groceries.src = 'angry_bee.gif';
        guessButton.style.display = 'none';
        nextButton.style.display = 'inline';
        groceries.style.marginTop = '50px';
        groceries.style.marginBottom ="-33px";
        question.innerHTML = 'WRONG !!';
        question.style.color = '#ff0000';
        kids.style.color = "#ff0000";
        container.style.border = '180px groove #ff0000';
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
      
      if (box12.src === fruitImage12.src) {
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
        question.innerHTML = 'RIGHT !!';
        question.style.color = 'lime';
        question.style.fontFamily =  'Luckiest Guy', 'cursive';
        fruitList[11].style.border = '0.3em ridge lime';
        box12.style.visibility = 'visible';
        box12.src = fruitImage12.src;  
        bumblebee.play();
        gameOver();
      } else {
        groceries.src = 'bee.gif';
        kids.style.color = 'lime';
        guessButton.style.display = 'none';
        nextButton.style.display = 'inline';
        groceries.style.marginTop = '50px';
        groceries.style.marginBottom ="-33px";
        question.innerHTML = 'RIGHT !!';
        question.style.color = 'lime';
        butterflies.style.display = 'inline';
        container.style.border = '180px ridge lime';
        fruitList[11].style.border = '25px solid lime';
        box12.style.visibility = 'visible';
        box12.src = fruitImage12.src;
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
        question.innerHTML = 'WRONG !!';   
        question.style.color = '#ff0000';
        question.style.fontFamily =  'Luckiest Guy', 'cursive';
      } else {
        groceries.src = 'angry_bee.gif';
        guessButton.style.display = 'none';
        nextButton.style.display = 'inline';
        groceries.style.marginTop = '50px';
        groceries.style.marginBottom ="-33px";
        question.innerHTML = 'WRONG !!';
        question.style.color = '#ff0000';
        kids.style.color = "#ff0000";
        container.style.border = '180px groove #ff0000';
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
    
      if (box13.src === fruitImage13.src) {
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
        question.innerHTML = 'RIGHT !!';
        question.style.color = 'lime';
        question.style.fontFamily =  'Luckiest Guy', 'cursive';
        fruitList[12].style.border = '0.3em ridge lime';
        box13.style.visibility = 'visible';
        box13.src = fruitImage13.src;  
        bumblebee.play();
        gameOver();
      } else {
        groceries.src = 'bee.gif';
        kids.style.color = 'lime';
        guessButton.style.display = 'none';
        nextButton.style.display = 'inline';
        groceries.style.marginTop = '50px';
        groceries.style.marginBottom ="-33px";
        question.innerHTML = 'RIGHT !!';
        question.style.color = 'lime';
        butterflies.style.display = 'inline';
        container.style.border = '180px ridge lime';
        fruitList[12].style.border = '25px solid lime';
        box13.style.visibility = 'visible';
        box13.src = fruitImage13.src;
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
        question.innerHTML = 'WRONG !!';   
        question.style.color = '#ff0000';
        question.style.fontFamily =  'Luckiest Guy', 'cursive';
      } else {
        groceries.src = 'angry_bee.gif';
        guessButton.style.display = 'none';
        nextButton.style.display = 'inline';
        groceries.style.marginTop = '50px';
        groceries.style.marginBottom ="-33px";
        question.innerHTML = 'WRONG !!';
        question.style.color = '#ff0000';
        kids.style.color = "#ff0000";
        container.style.border = '180px groove #ff0000';
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
       
      if (box14.src === fruitImage14.src) {
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
        question.innerHTML = 'RIGHT !!';
        question.style.color = 'lime';
        question.style.fontFamily =  'Luckiest Guy', 'cursive';
        fruitList[13].style.border = '0.3em ridge lime'; 
        box14.style.visibility = 'visible';
        box14.src = fruitImage14.src;
        bumblebee.play();
        gameOver();
      } else {
        groceries.src = 'bee.gif';
        kids.style.color = 'lime';
        guessButton.style.display = 'none';
        nextButton.style.display = 'inline';
        groceries.style.marginTop = '50px';
        groceries.style.marginBottom ="-33px";
        question.innerHTML = 'RIGHT !!';
        question.style.color = 'lime';
        butterflies.style.display = 'inline';
        container.style.border = '180px ridge lime';
        fruitList[13].style.border = '25px solid lime';
        box14.style.visibility = 'visible';
        box14.src = fruitImage14.src;
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
        question.innerHTML = 'WRONG !!';   
        question.style.color = '#ff0000';
        question.style.fontFamily =  'Luckiest Guy', 'cursive';
      } else {
        groceries.src = 'angry_bee.gif';
        guessButton.style.display = 'none';
        nextButton.style.display = 'inline';
        groceries.style.marginTop = '50px';
        groceries.style.marginBottom ="-33px";
        question.innerHTML = 'WRONG !!';
        question.style.color = '#ff0000';
        kids.style.color = "#ff0000";
        container.style.border = '180px groove #ff0000';
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
          
      if (box15.src === fruitImage15.src) {
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
        question.innerHTML = 'RIGHT !!';
        question.style.color = 'lime';
        question.style.fontFamily =  'Luckiest Guy', 'cursive';
        fruitList[14].style.border = '0.3em ridge lime';
        box15.style.visibility = 'visible';
        box15.src = fruitImage15.src;
        bumblebee.play();
        gameOver();
      } else {
        groceries.src = 'bee.gif';
        kids.style.color = 'lime';
        guessButton.style.display = 'none';
        nextButton.style.display = 'inline';
        groceries.style.marginTop = '50px';
        groceries.style.marginBottom ="-33px";
        question.innerHTML = 'RIGHT !!';
        question.style.color = 'lime';
        butterflies.style.display = 'inline';
        container.style.border = '180px ridge lime';
        fruitList[14].style.border = '25px solid lime';
        box15.style.visibility = 'visible';
        box15.src = fruitImage15.src;
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
        question.innerHTML = 'WRONG !!';   
        question.style.color = '#ff0000';
        question.style.fontFamily =  'Luckiest Guy', 'cursive';
      } else {
        groceries.src = 'angry_bee.gif';
        guessButton.style.display = 'none';
        groceries.style.marginTop = '50px';
        groceries.style.marginBottom ="-33px";
        nextButton.style.display = 'inline';
        question.innerHTML = 'WRONG !!';
        question.style.color = '#ff0000';
        kids.style.color = "#ff0000";
        container.style.border = '180px groove #ff0000';
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
          
      if (box16.src === fruitImage16.src) {
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
        question.innerHTML = 'RIGHT !!';
        question.style.color = 'lime';
        question.style.fontFamily =  'Luckiest Guy', 'cursive';
        fruitList[15].style.border = '0.3em ridge lime';
        box16.style.visibility = 'visible';
        box16.src = fruitImage16.src;
        bumblebee.play();
        gameOver();
      } else {
        groceries.src = 'bee.gif';
        kids.style.color = 'lime';
        guessButton.style.display = 'none';
        nextButton.style.display = 'inline';
        groceries.style.marginTop = '50px';
        groceries.style.marginBottom ="-33px";
        question.innerHTML = 'RIGHT !!';
        question.style.color = 'lime';
        butterflies.style.display = 'inline';
        container.style.border = '180px ridge lime';
        fruitList[15].style.border = '25px solid lime';
        box16.style.visibility = 'visible';
        box16.src = fruitImage16.src;
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
        question.innerHTML = 'WRONG !!';   
        question.style.color = '#ff0000';
        question.style.fontFamily =  'Luckiest Guy', 'cursive';
      } else {
        groceries.src = 'angry_bee.gif';
        guessButton.style.display = 'none';
        nextButton.style.display = 'inline';
        groceries.style.marginTop = '50px';
        groceries.style.marginBottom ="-33px";
        question.innerHTML = 'WRONG !!';
        question.style.color = '#ff0000';
        kids.style.color = "#ff0000";
        container.style.border = '180px groove #ff0000';
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
        
    if (item1.src === fruitImage17.src) {
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
      question.innerHTML = 'RIGHT !!';
      question.style.color = 'lime';
      question.style.fontFamily =  'Luckiest Guy', 'cursive';
      vegetableList[0].style.border = '0.3em ridge lime';
      item1.src = fruitImage17.src; 
      bumblebee.play();
    } else {
      groceries.src = 'bee.gif';
      kids.style.color = 'lime';
      guessButton.style.display = 'none';
      nextButton.style.display = 'inline';
      groceries.style.marginTop = '50px';
      groceries.style.marginBottom ="-33px";
      question.innerHTML = 'RIGHT !!';
      question.style.color = 'lime';
      butterflies.style.display = 'inline';
      vegetableList[0].style.border = '25px solid lime';
      container.style.border = '180px ridge lime';
      item1.src = fruitImage17.src;
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
      question.innerHTML = 'WRONG !!';   
      question.style.color = '#ff0000';
      question.style.fontFamily =  'Luckiest Guy', 'cursive';
    } else {
      groceries.src = 'angry_bee.gif';
      guessButton.style.display = 'none';
      nextButton.style.display = 'inline';
      groceries.style.marginTop = '50px';
      groceries.style.marginBottom ="-33px";
      question.innerHTML = 'WRONG !!';
      question.style.color = '#ff0000';
      kids.style.color = "#ff0000";
      container.style.border = '180px groove #ff0000';
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
        
     if (item2.src === fruitImage18.src) {
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
       question.innerHTML = 'RIGHT !!';
       question.style.color = 'lime';
       question.style.fontFamily =  'Luckiest Guy', 'cursive';
       vegetableList[1].style.border = '0.3em ridge lime';
       item2.src = fruitImage18.src;  
       bumblebee.play();
     } else {
       groceries.src = 'bee.gif';
       kids.style.color = 'lime';
       guessButton.style.display = 'none';
       nextButton.style.display = 'inline';
       groceries.style.marginTop = '50px';
       groceries.style.marginBottom ="-33px";
       question.innerHTML = 'RIGHT !!';
       question.style.color = 'lime';
       butterflies.style.display = 'inline';
       container.style.border = '180px ridge lime';
       vegetableList[1].style.border = '25px ridge lime';
       item2.src = fruitImage18.src;
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
       question.innerHTML = 'WRONG !!';   
       question.style.color = '#ff0000';
       question.style.fontFamily =  'Luckiest Guy', 'cursive';
     } else {
       groceries.src = 'angry_bee.gif';
       guessButton.style.display = 'none';
       nextButton.style.display = 'inline';
       groceries.style.marginTop = '50px';
       groceries.style.marginBottom ="-33px";
       question.innerHTML = 'WRONG !!';
       question.style.color = '#ff0000';
       kids.style.color = "#ff0000";
       container.style.border = '180px groove #ff0000';
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
        
     if (item3.src === fruitImage19.src) {
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
       question.innerHTML = 'RIGHT !!';
       question.style.color = 'lime';
       question.style.fontFamily =  'Luckiest Guy', 'cursive';
       vegetableList[2].style.border = '0.3em ridge lime';
       item3.src = fruitImage19.src;  
       bumblebee.play();
      } else {
        groceries.src = 'bee.gif';
        kids.style.color = 'lime';
        guessButton.style.display = 'none';
        nextButton.style.display = 'inline';
        groceries.style.marginTop = '50px';
        groceries.style.marginBottom ="-33px";
        question.innerHTML = 'RIGHT !!';
        question.style.color = 'lime';
        butterflies.style.display = 'inline';
        container.style.border = '180px ridge lime';
        vegetableList[2].style.border = '25px ridge lime';
        item3.src = fruitImage19.src;
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
        question.innerHTML = 'WRONG !!';   
        question.style.color = '#ff0000';
        question.style.fontFamily =  'Luckiest Guy', 'cursive';
      } else {
        groceries.src = 'angry_bee.gif';
        guessButton.style.display = 'none';
        nextButton.style.display = 'inline';
        groceries.style.marginTop = '50px';
        groceries.style.marginBottom ="-33px";
        question.innerHTML = 'WRONG !!';
        question.style.color = '#ff0000';
        kids.style.color = "#ff0000";
        container.style.border = '180px groove #ff0000';
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
        
      if (item4.src === fruitImage20.src) {
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
        question.innerHTML = 'RIGHT !!';
        question.style.color = 'lime';
        question.style.fontFamily =  'Luckiest Guy', 'cursive';
        vegetableList[3].style.border = '0.3em ridge lime';
        item4.src = fruitImage20.src; 
        bumblebee.play();
        } else {
        groceries.src = 'bee.gif';
        kids.style.color = 'lime';
        guessButton.style.display = 'none';
        nextButton.style.display = 'inline';
        groceries.style.marginTop = '50px';
        groceries.style.marginBottom ="-33px";
        question.innerHTML = 'RIGHT !!';
        question.style.color = 'lime';
        butterflies.style.display = 'inline';
        container.style.border = '180px ridge lime';
        item4.src = fruitImage20.src;
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
        question.innerHTML = 'WRONG !!';   
        question.style.color = '#ff0000';
        question.style.fontFamily =  'Luckiest Guy', 'cursive';
      } else {
        groceries.src = 'angry_bee.gif';
        guessButton.style.display = 'none';
        nextButton.style.display = 'inline';
        groceries.style.marginTop = '50px';
        groceries.style.marginBottom ="-33px";
        question.innerHTML = 'WRONG !!';
        question.style.color = '#ff0000';
        kids.style.color = "#ff0000";
        container.style.border = '180px groove #ff0000';
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
        
       if (item5.src === fruitImage21.src) {
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
        question.innerHTML = 'RIGHT !!';
        question.style.color = 'lime';
        question.style.fontFamily =  'Luckiest Guy', 'cursive';
        vegetableList[4].style.border = '0.3em ridge lime';
        item5.src = fruitImage21.src; 
        bumblebee.play();
      } else {
        groceries.src = 'bee.gif';
        kids.style.color = 'lime';
        guessButton.style.display = 'none';
        nextButton.style.display = 'inline';
        groceries.style.marginTop = '50px';
        groceries.style.marginBottom ="-33px";
        question.innerHTML = 'RIGHT !!';
        question.style.color = 'lime';
        butterflies.style.display = 'inline';
        container.style.border = '180px ridge lime';
        item5.src = fruitImage21.src;
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
        question.innerHTML = 'WRONG !!';   
        question.style.color = '#ff0000';
        question.style.fontFamily =  'Luckiest Guy', 'cursive';
      } else {
        groceries.src = 'angry_bee.gif';
        guessButton.style.display = 'none';
        nextButton.style.display = 'inline';
        groceries.style.marginTop = '50px';
        groceries.style.marginBottom ="-33px";
        question.innerHTML = 'WRONG !!';
        question.style.color = '#ff0000';
        kids.style.color = "#ff0000";
        container.style.border = '180px groove #ff0000';
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
        
       if (item6.src === fruitImage22.src) {
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
        question.innerHTML = 'RIGHT !!';
        question.style.color = 'lime';
        question.style.fontFamily =  'Luckiest Guy', 'cursive';
        vegetableList[5].style.border = '0.3em ridge lime';
        item6.src = fruitImage22.src;
        bumblebee.play();
      } else {
        groceries.src = 'bee.gif';
        kids.style.color = 'lime';
        guessButton.style.display = 'none';
        nextButton.style.display = 'inline';
        groceries.style.marginTop = '50px';
        groceries.style.marginBottom ="-33px";
        question.innerHTML = 'RIGHT !!';
        question.style.color = 'lime';
        butterflies.style.display = 'inline';
        container.style.border = '180px ridge lime';
        item6.src = fruitImage22.src;
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
        question.innerHTML = 'WRONG !!';   
        question.style.color = '#ff0000';
        question.style.fontFamily =  'Luckiest Guy', 'cursive';
      } else {
        groceries.src = 'angry_bee.gif';
        guessButton.style.display = 'none';
        nextButton.style.display = 'inline';
        groceries.style.marginTop = '50px';
        groceries.style.marginBottom ="-33px";
        question.innerHTML = 'WRONG !!';
        question.style.color = '#ff0000';
        kids.style.color = "#ff0000";
        container.style.border = '180px groove #ff0000';
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
        
       if (item7.src === fruitImage23.src) {
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
        question.innerHTML = 'RIGHT !!';
        question.style.color = 'lime';
        question.style.fontFamily =  'Luckiest Guy', 'cursive';
        vegetableList[6].style.border = '0.3em ridge lime';
        item7.src = fruitImage23.src;
        bumblebee.play();
      } else {
        groceries.src = 'bee.gif';
        kids.style.color = 'lime';
        guessButton.style.display = 'none';
        nextButton.style.display = 'inline';
        groceries.style.marginTop = '50px';
        groceries.style.marginBottom ="-33px";
        question.style.color = 'lime';
        butterflies.style.display = 'inline';
        question.innerHTML = 'RIGHT !!';
        container.style.border = '180px ridge lime';
        item7.src = fruitImage23.src;
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
        question.innerHTML = 'WRONG !!';   
        question.style.color = '#ff0000';
        question.style.fontFamily =  'Luckiest Guy', 'cursive';
      } else {
        groceries.src = 'angry_bee.gif';
        guessButton.style.display = 'none';
        nextButton.style.display = 'inline';
        groceries.style.marginTop = '50px';
        groceries.style.marginBottom ="-33px";
        question.innerHTML = 'WRONG !!';
        question.style.color = '#ff0000';
        kids.style.color = "#ff0000";
        container.style.border = '180px groove #ff0000';
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
        
       if (item8.src === fruitImage24.src) {
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
        question.innerHTML = 'RIGHT !!';
        question.style.color = 'lime';
        question.style.fontFamily =  'Luckiest Guy', 'cursive';
        vegetableList[7].style.border = '0.3em ridge lime';
        item8.src = fruitImage24.src; 
        bumblebee.play();
      } else {
        groceries.src = 'bee.gif';
        kids.style.color = 'lime';
        guessButton.style.display = 'none';
        nextButton.style.display = 'inline';
        groceries.style.marginTop = '50px';
        groceries.style.marginBottom ="-33px";
        question.innerHTML = 'RIGHT !!';
        question.style.color = 'lime';
        butterflies.style.display = 'inline';
        container.style.border = '180px ridge lime';
        item8.src = fruitImage24.src;
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
        question.innerHTML = 'WRONG !!';   
        question.style.color = '#ff0000';
        question.style.fontFamily =  'Luckiest Guy', 'cursive';
       } else {
        groceries.src = 'angry_bee.gif';
        guessButton.style.display = 'none';
        nextButton.style.display = 'inline';
        groceries.style.marginTop = '50px';
        groceries.style.marginBottom ="-33px";
        question.innerHTML = 'WRONG !!';
        question.style.color = '#ff0000';
        kids.style.color = "#ff0000";
        container.style.border = '180px groove #ff0000';
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
        
       if (item9.src === fruitImage25.src) {
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
        question.innerHTML = 'RIGHT !!';
        question.style.color = 'lime';
        question.style.fontFamily =  'Luckiest Guy', 'cursive';
        vegetableList[8].style.border = '0.3em ridge lime';
        item9.src = fruitImage25.src;
        bumblebee.play();
      } else {
        groceries.src = 'bee.gif';
        kids.style.color = 'lime';
        guessButton.style.display = 'none';
        nextButton.style.display = 'inline';
        groceries.style.marginTop = '50px';
        groceries.style.marginBottom ="-33px";
        question.innerHTML = 'RIGHT !!';
        question.style.color = 'lime';
        butterflies.style.display = 'inline';
        container.style.border = '180px ridge lime';
        item9.src = fruitImage25.src;
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
        question.innerHTML = 'WRONG !!';   
        question.style.color = '#ff0000';
        question.style.fontFamily =  'Luckiest Guy', 'cursive';
      } else {
        groceries.src = 'angry_bee.gif';
        guessButton.style.display = 'none';
        nextButton.style.display = 'inline';
        groceries.style.marginTop = '50px';
        groceries.style.marginBottom ="-33px";
        question.innerHTML = 'WRONG !!';
        question.style.color = '#ff0000';
        kids.style.color = "#ff0000";
        container.style.border = '180px groove #ff0000';
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
        
       if (item10.src === fruitImage26.src) {
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
        question.innerHTML = 'RIGHT !!';
        question.style.color = 'lime';
        question.style.fontFamily =  'Luckiest Guy', 'cursive';
        vegetableList[9].style.border = '0.3em ridge lime';
        item10.src = fruitImage26.src; 
        bumblebee.play();
      } else {
        groceries.src = 'bee.gif';
        kids.style.color = 'lime';
        guessButton.style.display = 'none';
        nextButton.style.display = 'inline';
        groceries.style.marginTop = '50px';
        groceries.style.marginBottom ="-33px";
        question.innerHTML = 'RIGHT !!';
        question.style.color = 'lime';
        butterflies.style.display = 'inline';
        container.style.border = '180px ridge lime';
        item10.src = fruitImage26.src;
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
        question.innerHTML = 'WRONG !!';   
        question.style.color = '#ff0000';
        question.style.fontFamily =  'Luckiest Guy', 'cursive';
      } else {
        groceries.src = 'angry_bee.gif';
        guessButton.style.display = 'none';
        nextButton.style.display = 'inline';
        groceries.style.marginTop = '50px';
        groceries.style.marginBottom ="-33px";
        question.innerHTML = 'WRONG !!';
        question.style.color = '#ff0000';
        kids.style.color = "#ff0000";
        container.style.border = '180px groove #ff0000';
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
        
       if (item11.src === fruitImage27.src) {
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
        question.innerHTML = 'RIGHT !!';
        question.style.color = 'lime';
        question.style.fontFamily =  'Luckiest Guy', 'cursive';
        vegetableList[10].style.border = '0.3em ridge lime';
        item11.src = fruitImage27.src; 
        bumblebee.play();
        } else {
        groceries.src = 'bee.gif';
        kids.style.color = 'lime';
        guessButton.style.display = 'none';
        nextButton.style.display = 'inline';
        groceries.style.marginTop = '50px';
        groceries.style.marginBottom ="-33px";
        question.innerHTML = 'RIGHT !!';
        question.style.color = 'lime';
        butterflies.style.display = 'inline';
        container.style.border = '180px ridge lime';
        item11.src = fruitImage27.src;
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
        question.innerHTML = 'WRONG !!';   
        question.style.color = '#ff0000';
        question.style.fontFamily =  'Luckiest Guy', 'cursive';
      } else {
        groceries.src = 'angry_bee.gif';
        guessButton.style.display = 'none';
        nextButton.style.display = 'inline';
        groceries.style.marginTop = '50px';
        groceries.style.marginBottom ="-33px";
        question.innerHTML = 'WRONG !!';
        question.style.color = '#ff0000';
        kids.style.color = "#ff0000";
        container.style.border = '180px groove #ff0000';
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
        
       if (item12.src === fruitImage28.src) {
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
        question.innerHTML = 'RIGHT !!';
        question.style.color = 'lime';
        question.style.fontFamily =  'Luckiest Guy', 'cursive';
        vegetableList[11].style.border = '0.3em ridge lime';
        item12.src = fruitImage28.src; 
        bumblebee.play();
      } else {
        groceries.src = 'bee.gif';
        kids.style.color = 'lime';
        guessButton.style.display = 'none';
        nextButton.style.display = 'inline';
        groceries.style.marginTop = '50px';
        groceries.style.marginBottom ="-33px";
        question.innerHTML = 'RIGHT !!';
        question.style.color = 'lime';
        butterflies.style.display = 'inline';
        container.style.border = '180px ridge lime';
        item12.src = fruitImage28.src;
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
        question.innerHTML = 'WRONG !!';   
        question.style.color = '#ff0000';
        question.style.fontFamily =  'Luckiest Guy', 'cursive';
      } else {
        groceries.src = 'angry_bee.gif';
        guessButton.style.display = 'none';
        nextButton.style.display = 'inline';
        groceries.style.marginTop = '50px';
        groceries.style.marginBottom ="-33px";
        question.innerHTML = 'WRONG !!';
        question.style.color = '#ff0000';
        kids.style.color = "#ff0000";
        container.style.border = '180px groove #ff0000';
        }
      }; 
    }
  }
      
  }
        let query = window.matchMedia("(max-width: 600px)");
     
        if (query.matches) {
          container.style.height = "840px";
          groceries.style.marginTop = '40px';
          groceries.style.marginBottom ="-40px";
          guessButton.style.border = 'none';
          guessButton.style.boxShadow = 'none';
          guessButton.style.background = 'none'; 
        } else {
          question.style.color ='lightpink'
          container.style.height = "5200px";
          guessButton.style.border = 'none';
          groceries.style.marginTop = '50px';
          groceries.style.marginBottom ="-43px";
          guessButton.style.boxShadow = 'none';
          guessButton.style.background = 'none';
          nextButton.style.marginBottom = "10px";
          butterflies.style.display = 'none';
          //guessButton.style.marginBottom = "10px";
        }
 
        currentlyPlaying = true;
  }



  nextButton.onclick = function() {
      
    let query = window.matchMedia("(max-width: 600px)");
    
    if (query.matches) {
      click.play();
      currentlyPlaying = true;
      question.style.color = 'white';
      question.style.fontFamily = 'Modak', 'cursive';
      question.innerHTML = "..ready ?";
      groceries.src = 'bee.gif';
      groceries.style.marginBottom ="-40px";
      nextButton.style.display = 'none';
      guessButton.style.background = 'white';
      guessButton.style.display = 'inline';
      guessButton.innerHTML = 'guess';
      guessButton.style.marginBottom = "0px";
      guessButton.style.border = '2px solid black';
      kids.style.color = "white"; 
    } else {
      click.play();
      currentlyPlaying = true;
      question.innerHTML = "..ready ?";
      question.style.color = 'lightpink';
      groceries.src = 'bee.gif';
      groceries.style.marginTop = '50px';
      groceries.style.marginBottom ="-33px";
      container.style.border = "180px ridge whitesmoke";  
      nextButton.style.display = 'none';
      guessButton.style.background = 'white';
      guessButton.style.display = 'inline';
      guessButton.innerHTML = 'guess';
      guessButton.style.marginBottom = "10px";
      guessButton.style.border = '10px solid black';
      guessButton.style.boxShadow = "12px 12px 7px black";
      kids.style.color = 'lightpink';
    }
      
      
      
      
      if (query.matches) {
        fruitList.forEach(function(fruit) {
          fruit.style.border = '0.3em ridge whitesmoke';  
        });
      } else {
        fruitList.forEach(function(fruit) {
          fruit.style.border = '25px ridge whitesmoke';  
        });
      }
//      vegetableList.forEach(function(vegetable) {
//        vegetable.style.border = '0.3em ridge white';
//      });
  
      guessButton.onclick = function() {
        click.play();
        guessFruit();
      };
   }

  
function gameOver() {
 isPlaying();

    if (box1.src === fruitImage1.src && box2.src === fruitImage2.src && box3.src === fruitImage3.src && box4.src === fruitImage4.src && box5.src === fruitImage5.src && box6.src === fruitImage6.src && box7.src === fruitImage7.src && box8.src === fruitImage8.src && box9.src === fruitImage9.src && box10.src === fruitImage10.src && box11.src === fruitImage11.src && box12.src === fruitImage12.src && box13.src === fruitImage13.src && box14.src === fruitImage14.src && box15.src === fruitImage15.src && box16.src === fruitImage16.src) {
        
    currentlyPlaying = false;
        
    let query = window.matchMedia("(max-width: 600px)");

    if (query.matches) {      
      youWin();
      currentlyPlaying = false;
      container.style.backgroundImage = 'url(test.gif)';    
      guessButton.style.display = 'none';
      nextButton.innerHTML = 'To play more games you\'ll need to create an account.<br> Go to "my account" in the navigation menu. Once logged in, click on the "games" tab';
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
      question.style.letterSpacing = "4px";
      question.innerHTML = 'AWESOME !!!';   
      question.style.fontFamily = 'Freckle Face', 'cursive';
      question.style.fontSize = "2em";
      question.style.color = 'lime';
        
    } else {
      youWin();
      currentlyPlaying = false;
      kids.style.color = 'lightpink';
      container.style.border = "180px ridge whitesmoke";  
      guessButton.style.display = 'none';
      nextButton.style.letterSpacing = "8px";
      nextButton.style.lineHeight = "1.5";
      nextButton.style.fontSize = "60px";
      nextButton.style.backgroundColor = 'transparent';
      nextButton.style.boxShadow = 'none';
      nextButton.style.border = 'none';
      nextButton.style.color = 'black';
      nextButton.style.cursor = 'auto';
      nextButton.onclick = false;
      nextButton.innerHTML = 'To play more games you\'ll need to create an account.<br> Go to "my account" in the navigation menu. Once logged in, click on the "games" tab';
      groceries.style.marginTop = "15px";
      groceries.src = 'banana_man_pc.gif';
      container.style.backgroundImage = 'url(test.gif)';
      question.style.fontFamily = 'Freckle Face', 'cursive';
      question.style.fontSize = "10rem";
      question.style.letterSpacing = "10px";
      question.innerHTML = 'AWESOME !!!';
      home.style.color = 'black'; 
      games.style.color = 'black';
      help.style.color = 'black';
      myAccount.style.color = 'black';
      butterflies.style.display = 'none';
     }
    }
  };
