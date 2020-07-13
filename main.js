
let fruitImage1 = document.getElementById('Squash');
let fruitImage2 = document.getElementById('Orange');
let fruitImage3 = document.getElementById('Banana');
let fruitImage4 = document.getElementById('Pumpkin');
let fruitImage5 = document.getElementById('Cherries'); 
let fruitImage6 = document.getElementById('Blueberries');
let fruitImage7 = document.getElementById('Olives'); 
let fruitImage8 = document.getElementById('Pineapple');
let fruitImage9 = document.getElementById('Grapes');
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
let fruitImage20 = document.getElementById('Broccoli');
let fruitImage21 = document.getElementById('Spinach');
let fruitImage22 = document.getElementById('Ginger');
let fruitImage23 = document.getElementById('Celery');
let fruitImage24 = document.getElementById('Garlic');
let fruitImage25 = document.getElementById('Carrot');
let fruitImage26 = document.getElementById('Radish');
let fruitImage27 = document.getElementById('Zucchini');
let fruitImage28 = document.getElementById('Turnip');

let box1 = document.getElementById('_Squash');
let box2 = document.getElementById('_Orange');
let box3 = document.getElementById('_Banana');
let box4 = document.getElementById('_Pumpkin');
let box5 = document.getElementById('_Cherries');
let box6 = document.getElementById('_Blueberries');
let box7 = document.getElementById('_Olives');
let box8 = document.getElementById('_Pineapple');
let box9 = document.getElementById('_Grapes');
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
let item4 = document.getElementById('_Broccoli');
let item5 = document.getElementById('_Spinach');
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

let kids = document.getElementById('kids');
let homeButton = document.getElementById('home');
let guessButton = document.getElementById('guess');
let nextButton = document.getElementById('next');
let question = document.getElementById('question');
let option = document.getElementsByTagName('button');
let groceries = document.getElementById('groceries');
let container = document.getElementById('container');
let navContainer = document.getElementById('nav-container');
let fruitList = document.querySelectorAll('.fruit');
let vegetableList = document.querySelectorAll('.vegetable');

let right = document.getElementById('right');
let wrong = document.getElementById('wrong');
let sound = document.getElementById('music');
let click = document.getElementById('click');
let win = document.getElementById('win');
let cheer = document.getElementById('crowd');
let looser = document.getElementById('you_loose');

let correct = document.getElementById('correct');
let game_over_music = document.getElementById('game_over');
let deadText = document.getElementById('dead-text');
let life_icons = document.getElementById('life_icons');


let lives = 2;
let currentlyPlaying = true;


let isClicked = (button) => {
  if (button) {
    return true;
  } else {
    return false;
  }
}

function checkLives(src) {
    
  if (lives === 2) {
    life_c.src = 'death_icon.png';
  } 
  if (lives === 1) {
    life_b.src = 'death_icon.png';
  }
  if (lives === 0) {
    life_a.src = 'death_icon.png';
    yourDead();
    }
  }

function yourDead() {
  let query = window.matchMedia("(max-width: 600px)");

  if (query.matches) {
    currentlyPlaying = false;
    sound.pause();
    game_over_music.play();
    question.style.display = 'none';
//    life_icons.style.display = 'none';
    nextButton.innerHTML = 'click "home" to try again';
    nextButton.style.border = 'none';
    nextButton.style.boxShadow = 'none';
    nextButton.style.cursor = 'auto';
    nextButton.onclick = "";
    nextButton.style.background = 'transparent';
    deadText.innerHTML = 'GAME OVER !!!';
    looser.play();  
  } else {
    sound.pause();
    game_over_music.play();
    question.style.display = 'none';
    life_icons.style.display = 'none';
    nextButton.style.visibility = 'hidden';
    deadText.innerHTML = '<h1>GAME OVER !!!</h1>';
    looser.play();
  }
}


function youWin() {
  currentlyPlaying = false;
  if (!currentlyPlaying) {
    sound.pause();
    cheer.play();
    win.play();
  }
}

guessButton.onclick = function() {
  click.play();
//  sound.play();
  guessFruit();
}




//switch function for Fruits
function guessFruit() { 

const count = 28;
    
let randFruit = Math.floor(Math.random() * count);    
    
  switch (randFruit) {
               
    case 0:
      groceries.src = fruitImage1.src;
      let queryA = window.matchMedia("(max-width: 600px)");
        if (queryA.matches) {
          groceries.style.marginTop = "0px";
          groceries.style.marginBottom = "0px";
        } else {
          groceries.style.marginTop = "100px";
          groceries.style.marginBottom = "-20px";
        }
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
        right.play();
        let query = window.matchMedia("(max-width: 600px)");
          
      if (query.matches) {
        kids.style.color = "lime";
        container.style.border = '15px ridge lime';
        groceries.src = 'bee.gif';
        guessButton.style.display = 'none';
        nextButton.style.display = 'inline';
        groceries.style.marginTop = "145px";
        groceries.style.marginBottom = "-30px";
        question.innerHTML = 'RIGHT!!';
        fruitList[0].style.border = '0.3em ridge lime';
        box1.style.visibility = 'visible';
        box1.src = fruitImage1.src; 
        gameOver();
      
      } else { 
        groceries.src = 'bee.gif';
        kids.style.backgroundColor = "lime";
        guessButton.style.display = 'none';
        nextButton.style.display = 'inline';
        groceries.style.marginTop = "-30px";
        groceries.style.marginBottom = "-80px";            
        question.innerHTML = '<h3>RIGHT!!</h3>';
        container.style.border = '180px ridge lime';
        fruitList[0].style.border = '25px solid lime';
        box1.style.visibility = 'visible';
        box1.src = fruitImage1.src; 
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
        kids.style.color = "#ff0000";
        groceries.src = 'angry_bee.gif';
        groceries.style.marginTop = "145px";
        groceries.style.marginBottom = "-30px";
        guessButton.style.display = 'none';
        nextButton.style.display = 'inline';
        question.innerHTML = 'WRONG!!';
        container.style.border = '15px groove #ff0000';  
     
      } else {
        groceries.src = 'angry_bee.gif';
        groceries.style.marginTop = "-100px";
        groceries.style.marginBottom = "-60px";
        guessButton.style.display = 'none';
        nextButton.style.display = 'inline';
        question.innerHTML = '<h4>WRONG!!<h4>';
        kids.style.backgroundColor = "#ff0000";
        container.style.border = '180px groove #ff0000';
        }
       };
      }
     }
    break;
 
    case 1:
    groceries.src = fruitImage2.src;
    let queryB = window.matchMedia("(max-width: 600px)");
      if (queryB.matches) {
         groceries.style.marginTop = "0px";
         groceries.style.marginBottom = "0px";
      } else {
        groceries.style.marginTop = "100px";
        groceries.style.marginBottom = "-20px";     
      }
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
        right.play();
        let query = window.matchMedia("(max-width: 600px)");

      if (query.matches) {
        groceries.src = 'bee.gif';
        kids.style.color = "lime";
        guessButton.style.display = 'none';
        nextButton.style.display = 'inline';
        groceries.style.marginTop = "145px";
        groceries.style.marginBottom = "-30px";
        question.innerHTML = 'RIGHT!!';
        container.style.border = '15px ridge lime';
        fruitList[1].style.border = '0.3em ridge lime';
        box2.style.visibility = 'visible';
        box2.src = fruitImage2.src;
        gameOver();  
     
      } else {
        groceries.src = 'bee.gif';
        kids.style.backgroundColor = "lime";
        guessButton.style.display = 'none';
        nextButton.style.display = 'inline';
        groceries.style.marginTop = "-30px";
        groceries.style.marginBottom = "-80px";
        question.innerHTML = '<h3>RIGHT!!</h3>';
        container.style.border = '180px ridge lime';
        fruitList[1].style.border = '25px solid lime';
        box2.style.visibility = 'visible';
        box2.src = fruitImage2.src;
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
        kids.style.color = "#ff0000";
        groceries.src = 'angry_bee.gif';
        groceries.style.marginTop = "145px";
        groceries.style.marginBottom = "-30px";
        guessButton.style.display = 'none';
        nextButton.style.display = 'inline';
        question.innerHTML = 'WRONG!!';
        container.style.border = '15px groove #ff0000';
      } else {
        groceries.src = 'angry_bee.gif';
        groceries.style.marginTop = "-100px";
        groceries.style.marginBottom = "-80px";
        guessButton.style.display = 'none';
        nextButton.style.display = 'inline';
        question.innerHTML = '<h4>WRONG!!<h4>';
        kids.style.backgroundColor = "#ff0000";
        container.style.border = '180px groove #ff0000';   
        }
      };
     }
    }
    break;
       
    case 2:
    groceries.src = fruitImage3.src;
    let queryC = window.matchMedia("(max-width: 600px)");
          
    if (queryC.matches) {
       groceries.style.marginTop = "0px";
       groceries.style.marginBottom = "0px";
    } else {
      groceries.style.marginTop = "100px";
      groceries.style.marginBottom = "-20px";
    }
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
        right.play();
        let query = window.matchMedia("(max-width: 600px)");

      if (query.matches) {
        groceries.src = 'bee.gif';
        kids.style.color = "lime";
        guessButton.style.display = 'none';
        nextButton.style.display = 'inline';
        groceries.style.marginTop = "145px";
        groceries.style.marginBottom = "-30px";
        question.innerHTML = 'RIGHT!!';
        container.style.border = '15px ridge lime';
        fruitList[2].style.border = '0.3em ridge lime';
        box3.style.visibility = 'visible';
        box3.src = fruitImage3.src;
        gameOver();
     
      } else {
        groceries.src = 'bee.gif';
        kids.style.backgroundColor = "lime";
        guessButton.style.display = 'none';
        nextButton.style.display = 'inline';
        groceries.style.marginTop = "-30px";
        groceries.style.marginBottom = "-80px";
        question.innerHTML = '<h3>RIGHT!!</h3>';
        container.style.border = '180px ridge lime';
        fruitList[2].style.border = '25px solid lime';
        box3.style.visibility = 'visible';
        box3.src = fruitImage3.src;
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
        kids.style.color = "#ff0000";
        groceries.src = 'angry_bee.gif';
        groceries.style.marginTop = "145px";
        groceries.style.marginBottom = "-30px";
        guessButton.style.display = 'none';
        nextButton.style.display = 'inline';
        question.innerHTML = 'WRONG!!';
        container.style.border = '15px groove #ff0000';  
      } else {
        groceries.src = 'angry_bee.gif';
        groceries.style.marginTop = "-100px";
        groceries.style.marginBottom = "-80px";
        guessButton.style.display = 'none';
        nextButton.style.display = 'inline';
        question.innerHTML = '<h4>WRONG!!<h4>';
        kids.style.backgroundColor = "#ff0000";
        container.style.border = '180px groove #ff0000';
        }
      };
     }
    }
    break;
        
    case 3:
    groceries.src= fruitImage4.src;
    let queryD = window.matchMedia("(max-width: 600px)");
          
    if (queryD.matches) {
       groceries.style.marginTop = "0px";
       groceries.style.marginBottom = "0px";
    } else {
       groceries.style.marginTop = "100px";
       groceries.style.marginBottom = "-20px";
    }
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
        right.play();
        let query = window.matchMedia("(max-width: 600px)");

      if (query.matches) {
        groceries.src = 'bee.gif';
        kids.style.color = "lime";
        guessButton.style.display = 'none';
        nextButton.style.display = 'inline';
        groceries.style.marginTop = "145px";
        groceries.style.marginBottom = "-30px";
        question.innerHTML = 'RIGHT!!';
        container.style.border = '15px ridge lime';
        fruitList[3].style.border = '0.3em ridge lime';
        box4.style.visibility = 'visible';
        box4.src = fruitImage4.src;
        gameOver();
      
      } else {
        groceries.src = 'bee.gif';
        kids.style.backgroundColor = "lime";
        guessButton.style.display = 'none';
        nextButton.style.display = 'inline';
        groceries.style.marginTop = "-30px";
        groceries.style.marginBottom = "-80px";
        question.innerHTML = '<h3>RIGHT!!</h3>';
        container.style.border = '180px groove lime';
        fruitList[3].style.border = '25px solid lime';
        box4.style.visibility = 'visible';
        box4.src = fruitImage4.src;     
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
        kids.style.color = "#ff0000";
        groceries.src = 'angry_bee.gif';
        groceries.style.marginTop = "145px";
        groceries.style.marginBottom = "-30px";
        guessButton.style.display = 'none';
        nextButton.style.display = 'inline';
        question.innerHTML = 'WRONG!!';
        container.style.border = '15px groove #ff0000';    
      } else {
        groceries.src = 'angry_bee.gif';
        groceries.style.marginTop = "-100px";
        groceries.style.marginBottom = "-80px";
        guessButton.style.display = 'none';
        nextButton.style.display = 'inline';
        question.innerHTML = '<h4>WRONG!!<h4>';
        kids.style.backgroundColor = "#ff0000";
        container.style.border = '180px groove #ff0000';
        }
       };
      }
     }
    break;
            
    case 4:
    groceries.src = fruitImage5.src;
    let queryE = window.matchMedia("(max-width: 600px)");
          
    if (queryE.matches) {
       groceries.style.marginTop = "0px";
       groceries.style.marginBottom = "0px";
    } else {
      groceries.style.marginTop = "100px";
      groceries.style.marginBottom = "-20px";
    }
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
      right.play();
      let query = window.matchMedia("(max-width: 600px)");

      if (query.matches) {
        groceries.src = 'bee.gif';
        kids.style.color = "lime";
        guessButton.style.display = 'none';
        nextButton.style.display = 'inline';
        groceries.style.marginTop = "145px";
        groceries.style.marginBottom = "-30px";
        question.innerHTML = 'RIGHT!!';
        container.style.border = '15px ridge lime';
        fruitList[4].style.border = '0.3em ridge lime';
        box5.style.visibility = 'visible';
        box5.src = fruitImage5.src;
        gameOver();
     
      } else {
        groceries.src = 'bee.gif';
        kids.style.backgroundColor = "lime";
        guessButton.style.display = 'none';
        nextButton.style.display = 'inline';
        groceries.style.marginTop = "-30px";
        groceries.style.marginBottom = "-80px";
        question.innerHTML = '<h3>RIGHT!!</h3>';
        container.style.border = '180px groove lime';
        fruitList[4].style.border = '25px solid lime';
        box5.style.visibility = 'visible';
        box5.src = fruitImage5.src;
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
        kids.style.color = "#ff0000";
        groceries.src = 'angry_bee.gif';
        groceries.style.marginTop = "145px";
        groceries.style.marginBottom = "-30px";
        guessButton.style.display = 'none';
        nextButton.style.display = 'inline';
        question.innerHTML = 'WRONG!!';
        container.style.border = '15px groove #ff0000';  
      } else {
        groceries.src = 'angry_bee.gif';
        groceries.style.marginTop = "-100px";
        groceries.style.marginBottom = "-80px";
        guessButton.style.display = 'none';
        nextButton.style.display = 'inline';
        question.innerHTML = '<h4>WRONG!!<h4>';
        kids.style.backgroundColor = "#ff0000";
        container.style.border = '180px groove #ff0000';
        }
       };
      }
     }
    break;
            
    case 5:
    groceries.src = fruitImage6.src;
    let queryF = window.matchMedia("(max-width: 600px)");
          
    if (queryF.matches) {
       groceries.style.marginTop = "0px";
       groceries.style.marginBottom = "0px";
    } else {
      groceries.style.marginTop = "100px";
      groceries.style.marginBottom = "-20px";
    }
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
      right.play();
      let query = window.matchMedia("(max-width: 600px)");

      if (query.matches) {
        groceries.src = 'bee.gif';
        kids.style.color = "lime";
        guessButton.style.display = 'none';
        nextButton.style.display = 'inline';
        groceries.style.marginTop = "145px";
        groceries.style.marginBottom = "-30px";
        question.innerHTML = 'RIGHT!!';
        container.style.border = '15px ridge lime';
        fruitList[5].style.border = '0.3em ridge lime';
        box6.style.visibility = 'visible';
        box6.src = fruitImage6.src;
        gameOver();
     
      } else {
        groceries.src = 'bee.gif';
        kids.style.backgroundColor = "lime";
        guessButton.style.display = 'none';
        nextButton.style.display = 'inline';
        groceries.style.marginTop = "-30px";
        groceries.style.marginBottom = "-80px";
        question.innerHTML = '<h3>RIGHT!!</h3>';
        container.style.border = '180px ridge lime';
        fruitList[5].style.border = '25px solid lime';
        box6.style.visibility = 'visible';
        box6.src = fruitImage6.src;
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
        kids.style.color = "#ff0000";
        groceries.src = 'angry_bee.gif';
        groceries.style.marginTop = "145px";
        groceries.style.marginBottom = "-30px";
        guessButton.style.display = 'none';
        nextButton.style.display = 'inline';
        question.innerHTML = 'WRONG!!';
        container.style.border = '15px groove #ff0000';    
        
      } else {
        groceries.src = 'angry_bee.gif';
        groceries.style.marginTop = "-100px";
        groceries.style.marginBottom = "-80px";
        guessButton.style.display = 'none';
        nextButton.style.display = 'inline';
        question.innerHTML = '<h4>WRONG!!<h4>';
        kids.style.backgroundColor = "#ff0000";
        container.style.border = '180px groove #ff0000';
        }
      };
    }
  }
    break;
            
    case 6:
    groceries.src = fruitImage7.src;
    let queryG = window.matchMedia("(max-width: 600px)");
          
    if (queryG.matches) {
      groceries.style.marginTop = "0px";
      groceries.style.marginBottom = "0px";
    } else {
      groceries.style.marginTop = "100px";
      groceries.style.marginBottom = "-20px";
    }
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
      right.play();
      let query = window.matchMedia("(max-width: 600px)");

      if (query.matches) {
        groceries.src = 'bee.gif';
        kids.style.color = "lime";
        guessButton.style.display = 'none';
        nextButton.style.display = 'inline';
        groceries.style.marginTop = "145px";
        groceries.style.marginBottom = "-30px";
        question.innerHTML = 'RIGHT!!';
        container.style.border = '15px ridge lime';
        fruitList[6].style.border = '0.3em ridge lime';
        box7.style.visibility = 'visible';
        box7.src = fruitImage7.src;
        gameOver();
      
      } else {
        groceries.src = 'bee.gif';
        kids.style.backgroundColor = "lime";
        guessButton.style.display = 'none';
        nextButton.style.display = 'inline';
        groceries.style.marginTop = "-30px";
        groceries.style.marginBottom = "-80px";
        question.innerHTML = '<h3>RIGHT!!</h3>';
        container.style.border = '180px ridge lime';
        fruitList[6].style.border = '25px solid lime';
        box7.style.visibility = 'visible';
        box7.src = fruitImage7.src;
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
          kids.style.color = "#ff0000";
          groceries.src = 'angry_bee.gif';
          groceries.style.marginTop = "145px";
          groceries.style.marginBottom = "-30px";
          guessButton.style.display = 'none';
          nextButton.style.display = 'inline';
          question.innerHTML = 'WRONG!!';
          container.style.border = '15px groove #ff0000';  
        } else {
          groceries.src = 'angry_bee.gif';
          groceries.style.marginTop = "-100px";
          groceries.style.marginBottom = "-80px";
          guessButton.style.display = 'none';
          nextButton.style.display = 'inline';
          question.innerHTML = '<h4>WRONG!!<h4>';
          kids.style.backgroundColor = "#ff0000";
          container.style.border = '180px groove #ff0000';
        }
      };
     }
    }
    break;
      
    case 7:
    groceries.src = fruitImage8.src;
    let queryH = window.matchMedia("(max-width: 600px)");
          
    if (queryH.matches) {
      groceries.style.marginTop = "0px";
      groceries.style.marginBottom = "0px";
    } else {
      groceries.style.marginTop = "100px";
      groceries.style.marginBottom = "-20px";
    }
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
      right.play();
      let query = window.matchMedia("(max-width: 600px)");

      if (query.matches) {
        groceries.src = 'bee.gif';
        kids.style.color = "lime";
        guessButton.style.display = 'none';
        nextButton.style.display = 'inline';
        groceries.style.marginTop = "145px";
        groceries.style.marginBottom = "-30px";
        question.innerHTML = 'RIGHT!!';
        container.style.border = '15px ridge lime';
        fruitList[7].style.border = '0.3em ridge lime';
        box8.style.visibility = 'visible';
        box8.src = fruitImage8.src;  
        gameOver();
      
      } else {
        groceries.src = 'bee.gif';
        kids.style.backgroundColor = "lime";
        guessButton.style.display = 'none';
        nextButton.style.display = 'inline';
        groceries.style.marginTop = "-30px";
        groceries.style.marginBottom = "-80px";
        question.innerHTML = '<h3>RIGHT!!</h3>';
        container.style.border = '180px ridge lime';
        fruitList[7].style.border = '25px solid lime';
        box8.style.visibility = 'visible';
        box8.src = fruitImage8.src;
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
        kids.style.color = "#ff0000";
        groceries.src = 'angry_bee.gif';
        groceries.style.marginTop = "145px";
        groceries.style.marginBottom = "-30px";
        guessButton.style.display = 'none';
        nextButton.style.display = 'inline';
        question.innerHTML = 'WRONG!!';
        container.style.border = '15px groove #ff0000';
      } else {
        groceries.src = 'angry_bee.gif';
        groceries.style.marginTop = "-100px";
        groceries.style.marginBottom = "-80px";
        guessButton.style.display = 'none';
        nextButton.style.display = 'inline';
        question.innerHTML = '<h4>WRONG!!<h4>';
        kids.style.backgroundColor = "#ff0000";
        container.style.border = '180px groove #ff0000';
       }
      };
     }
    }
    break;
         
    case 8:
    groceries.src= fruitImage9.src;
    let queryI = window.matchMedia("(max-width: 600px)");
          
    if (queryI.matches) {
      groceries.style.marginTop = "0px";
      groceries.style.marginBottom = "0px";
    } else {
      groceries.style.marginTop = "100px";
      groceries.style.marginBottom = "-20px";
    }
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
      right.play();
      let query = window.matchMedia("(max-width: 600px)");

      if (query.matches) {
        groceries.src = 'bee.gif';
        kids.style.color = "lime";
        guessButton.style.display = 'none';
        nextButton.style.display = 'inline';
        groceries.style.marginTop = "145px";
        groceries.style.marginBottom = "-30px";
        question.innerHTML = 'RIGHT!!';
        container.style.border = '15px ridge lime';
        fruitList[8].style.border = '0.3em ridge lime';
        box9.style.visibility = 'visible';
        box9.src = fruitImage9.src;
        gameOver();

      } else {
        groceries.src = 'bee.gif';
        kids.style.backgroundColor = "lime";
        guessButton.style.display = 'none';
        nextButton.style.display = 'inline';
        groceries.style.marginTop = "-30px";
        groceries.style.marginBottom = "-80px";
        question.innerHTML = '<h3>RIGHT!!</h3>';
        container.style.border = '180px ridge lime';
        fruitList[8].style.border = '25px solid lime';
        box9.style.visibility = 'visible';
        box9.src = fruitImage9.src;
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
        kids.style.color = "#ff0000";
        groceries.src = 'angry_bee.gif';
        groceries.style.marginTop = "145px";
        groceries.style.marginBottom = "-30px";
        guessButton.style.display = 'none';
        nextButton.style.display = 'inline';
        question.innerHTML = 'WRONG!!';
        container.style.border = '15px groove #ff0000'; 
      } else {
        groceries.src = 'angry_bee.gif';
        groceries.style.marginTop = "-100px";
        groceries.style.marginBottom = "-80px";
        guessButton.style.display = 'none';
        nextButton.style.display = 'inline';
        question.innerHTML = '<h4>WRONG!!<h4>';
        kids.style.backgroundColor = "#ff0000";
        container.style.border = '180px groove #ff0000';
       }
      };
     }
    }
    break;
        
    case 9:
    groceries.src= fruitImage10.src;
    let queryJ = window.matchMedia("(max-width: 600px)");
          
    if (queryJ.matches) {
      groceries.style.marginTop = "0px";
      groceries.style.marginBottom = "0px";
    } else {
      groceries.style.marginTop = "100px";
      groceries.style.marginBottom = "-20px";
    }
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
      right.play();
      let query = window.matchMedia("(max-width: 600px)");

      if (query.matches) {
        groceries.src = 'bee.gif';
        kids.style.color = "lime";
        guessButton.style.display = 'none';
        nextButton.style.display = 'inline';
        groceries.style.marginTop = "145px";
        groceries.style.marginBottom = "-30px";
        question.innerHTML = 'RIGHT!!';
        container.style.border = '15px ridge lime';
        fruitList[9].style.border = '0.3em ridge lime';
        box10.style.visibility = 'visible';
        box10.src = fruitImage10.src;   
        gameOver();

      } else {
        groceries.src = 'bee.gif';
        kids.style.backgroundColor = "lime";
        guessButton.style.display = 'none';
        nextButton.style.display = 'inline';
        groceries.style.marginTop = "-30px";
        groceries.style.marginBottom = "-80px";
        question.innerHTML = '<h3>RIGHT!!</h3>';
        container.style.border = '180px ridge lime';
        fruitList[9].style.border = '25px solid lime';
        box10.style.visibility = 'visible';
        box10.src = fruitImage10.src;
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
        kids.style.color = "#ff0000";
        groceries.src = 'angry_bee.gif';
        groceries.style.marginTop = "145px";
        groceries.style.marginBottom = "-30px";
        guessButton.style.display = 'none';
        nextButton.style.display = 'inline';
        question.innerHTML = 'WRONG!!';
        container.style.border = '15px groove #ff0000';  
      } else {
        groceries.src = 'angry_bee.gif';
        groceries.style.marginTop = "-100px";
        groceries.style.marginBottom = "-80px";
        guessButton.style.display = 'none';
        nextButton.style.display = 'inline';
        question.innerHTML = '<h4>WRONG!!<h4>';
        kids.style.backgroundColor = "#ff0000";
        container.style.border = '180px groove #ff0000';
        }
       };
      }
     }
    break;
         
    case 10:
    groceries.src= fruitImage11.src;
    let queryK = window.matchMedia("(max-width: 600px)");
          
    if (queryK.matches) {
      groceries.style.marginTop = "0px";
      groceries.style.marginBottom = "0px";
    } else {
      groceries.style.marginTop = "100px";
      groceries.style.marginBottom = "-20px";
    }
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
      right.play();
      let query = window.matchMedia("(max-width: 600px)");

      if (query.matches) {
        groceries.src = 'bee.gif';
        kids.style.color = "lime";
        guessButton.style.display = 'none';
        nextButton.style.display = 'inline';
        groceries.style.marginTop = "145px";
        groceries.style.marginBottom = "-30px";
        question.innerHTML = 'RIGHT!!';
        container.style.border = '15px ridge lime';
        fruitList[10].style.border = '0.3em ridge lime';
        box11.style.visibility = 'visible';
        box11.src = fruitImage11.src;
        gameOver();

      } else {
        groceries.src = 'bee.gif';
        kids.style.backgroundColor = "lime";
        guessButton.style.display = 'none';
        nextButton.style.display = 'inline';
        groceries.style.marginTop = "-30px";
        groceries.style.marginBottom = "-80px";
        question.innerHTML = '<h3>RIGHT!!</h3>';
        container.style.border = '180px ridge lime';
        fruitList[10].style.border = '25px solid lime';
        box11.style.visibility = 'visible';
        box11.src = fruitImage11.src;
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
        kids.style.color = "#ff0000";
        groceries.src = 'angry_bee.gif';
        groceries.style.marginTop = "145px";
        groceries.style.marginBottom = "-30px";
        guessButton.style.display = 'none';
        nextButton.style.display = 'inline';
        question.innerHTML = 'WRONG!!';
        container.style.border = '15px groove #ff0000';  
      } else {
        groceries.src = 'angry_bee.gif';
        groceries.style.marginTop = "-100px";
        groceries.style.marginBottom = "-80px";
        guessButton.style.display = 'none';
        nextButton.style.display = 'inline';
        question.innerHTML = '<h4>WRONG!!<h4>';
        kids.style.backgroundColor = "#ff0000";
        container.style.border = '180px groove #ff0000';
        }
       };
      }
     }
    break;

    case 11:
    groceries.src= fruitImage12.src;
    let queryL = window.matchMedia("(max-width: 600px)");
          
    if (queryL.matches) {
      groceries.style.marginTop = "0px";
      groceries.style.marginBottom = "0px";
    } else {
      groceries.style.marginTop = "100px";
      groceries.style.marginBottom = "-20px";
    }
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
      right.play();
      let query = window.matchMedia("(max-width: 600px)");

      if (query.matches) {
        groceries.src = 'bee.gif';
        kids.style.color = "lime";
        guessButton.style.display = 'none';
        nextButton.style.display = 'inline';
        groceries.style.marginTop = "145px";
        groceries.style.marginBottom = "-30px";
        question.innerHTML = 'RIGHT!!';
        container.style.border = '15px ridge lime';
        fruitList[11].style.border = '0.3em ridge lime';
        box12.style.visibility = 'visible';
        box12.src = fruitImage12.src;  
        gameOver();

      } else {
        groceries.src = 'bee.gif';
        kids.style.backgroundColor = "lime";
        guessButton.style.display = 'none';
        nextButton.style.display = 'inline';
        groceries.style.marginTop = "-30px";
        groceries.style.marginBottom = "-80px";
        question.innerHTML = '<h3>RIGHT!!</h3>';
        container.style.border = '180px ridge lime';
        fruitList[11].style.border = '25px solid lime';
        box12.style.visibility = 'visible';
        box12.src = fruitImage12.src;
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
        kids.style.color = "#ff0000";
        groceries.src = 'angry_bee.gif';
        groceries.style.marginTop = "145px";
        groceries.style.marginBottom = "-30px";
        guessButton.style.display = 'none';
        nextButton.style.display = 'inline';
        question.innerHTML = 'WRONG!!';
        container.style.border = '15px groove #ff0000'; 
      } else {
        groceries.src = 'angry_bee.gif';
        groceries.style.marginTop = "-100px";
        groceries.style.marginBottom = "-80px";
        guessButton.style.display = 'none';
        nextButton.style.display = 'inline';
        question.innerHTML = '<h4>WRONG!!<h4>';
        kids.style.backgroundColor = "#ff0000";
        container.style.border = '180px groove #ff0000';
       }
      };
     }
    }
    break;
            
    case 12:
    groceries.src = fruitImage13.src;
    let queryM = window.matchMedia("(max-width: 600px)");
          
    if (queryM.matches) {
      groceries.style.marginTop = "0px";
      groceries.style.marginBottom = "0px";
    } else {
      groceries.style.marginTop = "100px";
      groceries.style.marginBottom = "-20px";
    }
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
      right.play();
      let query = window.matchMedia("(max-width: 600px)");

      if (query.matches) {
        groceries.src = 'bee.gif';
        kids.style.color = "lime";
        guessButton.style.display = 'none';
        nextButton.style.display = 'inline';
        groceries.style.marginTop = "145px";
        groceries.style.marginBottom = "-30px";
        question.innerHTML = 'RIGHT!!';
        container.style.border = '15px ridge lime';
        fruitList[12].style.border = '0.3em ridge lime';
        box13.style.visibility = 'visible';
        box13.src = fruitImage13.src;  
        gameOver();

      } else {
        groceries.src = 'bee.gif';
        kids.style.backgroundColor = "lime";
        guessButton.style.display = 'none';
        nextButton.style.display = 'inline';
        groceries.style.marginTop = "-30px";
        groceries.style.marginBottom = "-80px";
        question.innerHTML = '<h3>RIGHT!!</h3>';
        container.style.border = '180px ridge lime';
        fruitList[12].style.border = '25px solid lime';
        box13.style.visibility = 'visible';
        box13.src = fruitImage13.src;
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
        kids.style.color = "#ff0000";
        groceries.src = 'angry_bee.gif';
        groceries.style.marginTop = "145px";
        groceries.style.marginBottom = "-30px";
        guessButton.style.display = 'none';
        nextButton.style.display = 'inline';
        question.innerHTML = 'WRONG!!';
        container.style.border = '15px groove #ff0000'; 
      } else {
        groceries.src = 'angry_bee.gif';
        groceries.style.marginTop = "-100px";
        groceries.style.marginBottom = "-80px";
        guessButton.style.display = 'none';
        nextButton.style.display = 'inline';
        question.innerHTML = '<h4>WRONG!!<h4>';
        kids.style.backgroundColor = "#ff0000";
        container.style.border = '180px groove #ff0000';
       }
      };
     }
    }
    break;
        
    case 13:
    groceries.src = fruitImage14.src;
    let queryN = window.matchMedia("(max-width: 600px)");
          
    if (queryN.matches) {
      groceries.style.marginTop = "0px";
      groceries.style.marginBottom = "0px";
    } else {
      groceries.style.marginTop = "100px";
      groceries.style.marginBottom = "-20px";
    }
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
      right.play();
      let query = window.matchMedia("(max-width: 600px)");

      if (query.matches) {
        groceries.src = 'bee.gif';
        kids.style.color = "lime";
        guessButton.style.display = 'none';
        nextButton.style.display = 'inline';
        groceries.style.marginTop = "145px";
        groceries.style.marginBottom = "-30px";
        question.innerHTML = 'RIGHT!!';
        container.style.border = '15px ridge lime';
        fruitList[13].style.border = '0.3em ridge lime'; 
        box14.style.visibility = 'visible';
        box14.src = fruitImage14.src;
        gameOver();

      } else {
        groceries.src = 'bee.gif';
        kids.style.backgroundColor = "lime";
        guessButton.style.display = 'none';
        nextButton.style.display = 'inline';
        groceries.style.marginTop = "-30px";
        groceries.style.marginBottom = "-80px";
        question.innerHTML = '<h3>RIGHT!!</h3>';
        container.style.border = '180px ridge lime';
        fruitList[13].style.border = '25px solid lime';
        box14.style.visibility = 'visible';
        box14.src = fruitImage14.src;
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
        kids.style.color = "#ff0000";
        groceries.src = 'angry_bee.gif';
        groceries.style.marginTop = "145px";
        groceries.style.marginBottom = "-30px";
        guessButton.style.display = 'none';
        nextButton.style.display = 'inline';
        question.innerHTML = 'WRONG!!';
        container.style.border = '15px groove #ff0000';  
      } else {
        groceries.src = 'angry_bee.gif';
        groceries.style.marginTop = "-100px";
        groceries.style.marginBottom = "-80px";
        guessButton.style.display = 'none';
        nextButton.style.display = 'inline';
        question.innerHTML = '<h4>WRONG!!<h4>';
        kids.style.backgroundColor = "#ff0000";
        container.style.border = '180px groove #ff0000';
       }
      };
     }
    }       
    break;  
          
    case 14:
    groceries.src = fruitImage15.src;
    let queryO = window.matchMedia("(max-width: 600px)");
          
    if (queryO.matches) {
      groceries.style.marginTop = "0px";
      groceries.style.marginBottom = "0px";
    } else {
      groceries.style.marginTop = "100px";
      groceries.style.marginBottom = "-20px";
    }
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
      right.play();
      let query = window.matchMedia("(max-width: 600px)");

      if (query.matches) {
        groceries.src = 'bee.gif';
        kids.style.color = "lime";
        guessButton.style.display = 'none';
        nextButton.style.display = 'inline';
        groceries.style.marginTop = "145px";
        groceries.style.marginBottom = "-30px";
        question.innerHTML = 'RIGHT!!';
        container.style.border = '15px ridge lime';
        fruitList[14].style.border = '0.3em ridge lime';
        box15.style.visibility = 'visible';
        box15.src = fruitImage15.src;
        gameOver();

      } else {
        groceries.src = 'bee.gif';
        kids.style.backgroundColor = "lime";
        guessButton.style.display = 'none';
        nextButton.style.display = 'inline';
        groceries.style.marginTop = "-30px";
        groceries.style.marginBottom = "-80px";
        question.innerHTML = '<h3>RIGHT!!</h3>';
        container.style.border = '180px ridge lime';
        fruitList[14].style.border = '25px solid lime';
        box15.style.visibility = 'visible';
        box15.src = fruitImage15.src;
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
        kids.style.color = "#ff0000";
        groceries.src = 'angry_bee.gif';
        groceries.style.marginTop = "145px";
        groceries.style.marginBottom = "-30px";
        guessButton.style.display = 'none';
        nextButton.style.display = 'inline';
        question.innerHTML = 'WRONG!!';
        container.style.border = '15px groove #ff0000';
      } else {
        groceries.src = 'angry_bee.gif';
        groceries.style.marginTop = "-100px";
        groceries.style.marginBottom = "-80px";
        guessButton.style.display = 'none';
        nextButton.style.display = 'inline';
        question.innerHTML = '<h4>WRONG!!<h4>';
        kids.style.backgroundColor = "#ff0000";
        container.style.border = '180px groove #ff0000';
       }
      };
     }
    }
    break;
     
    case 15:
    groceries.src = fruitImage16.src;
    let queryP = window.matchMedia("(max-width: 600px)");
          
    if (queryP.matches) {
      groceries.style.marginTop = "0px";
      groceries.style.marginBottom = "0px";
    } else {
      groceries.style.marginTop = "100px";
      groceries.style.marginBottom = "-20px";
    }
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
      right.play();
      let query = window.matchMedia("(max-width: 600px)");

      if (query.matches) {
        groceries.src = 'bee.gif';
        kids.style.color = "lime";
        guessButton.style.display = 'none';
        nextButton.style.display = 'inline';
        groceries.style.marginTop = "145px";
        groceries.style.marginBottom = "-30px";
        question.innerHTML = 'RIGHT!!';
        container.style.border = '15px ridge lime';
        fruitList[15].style.border = '0.3em ridge lime';
        box16.style.visibility = 'visible';
        box16.src = fruitImage16.src;
        gameOver();

      } else {
        groceries.src = 'bee.gif';
        kids.style.backgroundColor = "lime";
        guessButton.style.display = 'none';
        nextButton.style.display = 'inline';
        groceries.style.marginTop = "-30px";
        groceries.style.marginBottom = "-80px";
        question.innerHTML = '<h3>RIGHT!!</h3>';
        container.style.border = '180px ridge lime';
        fruitList[15].style.border = '25px solid lime';
        box16.style.visibility = 'visible';
        box16.src = fruitImage16.src;
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
        kids.style.color = "#ff0000";
        groceries.src = 'angry_bee.gif';
        groceries.style.marginTop = "145px";
        groceries.style.marginBottom = "-30px";
        guessButton.style.display = 'none';
        nextButton.style.display = 'inline';
        question.innerHTML = 'WRONG!!';
        container.style.border = '15px groove #ff0000';  
      } else {
        groceries.src = 'angry_bee.gif';
        groceries.style.marginTop = "-100px";
        groceries.style.marginBottom = "-80px";
        guessButton.style.display = 'none';
        nextButton.style.display = 'inline';
        question.innerHTML = '<h4>WRONG!!<h4>';
        kids.style.backgroundColor = "#ff0000";
        container.style.border = '180px groove #ff0000';
       }
      };
     }
    }
    break;
//                               vegetables start here...
    case 16: 
    groceries.src = fruitImage17.src;
    let queryQ = window.matchMedia("(max-width: 600px)");
          
    if (queryQ.matches) {
      groceries.style.marginTop = "0px";
      groceries.style.marginBottom = "0px";
    } else {
      groceries.style.marginTop = "100px";
      groceries.style.marginBottom = "-20px";
    }
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
      kids.style.color = "lime";
      guessButton.style.display = 'none';
      nextButton.style.display = 'inline';
      groceries.style.marginTop = "145px";
      groceries.style.marginBottom = "-30px";
      question.innerHTML = 'RIGHT!!';
      container.style.border = '15px ridge lime';
      vegetableList[0].style.border = '0.3em ridge lime';
      item1.src = fruitImage17.src; 
      gameOver();

    } else {
      groceries.src = 'bee.gif';
      kids.style.backgroundColor = "lime";
      guessButton.style.display = 'none';
      nextButton.style.display = 'inline';
      groceries.style.marginTop = "-30px";
      groceries.style.marginBottom = "-80px";
      question.innerHTML = '<h3>RIGHT!!</h3>';
      vegetableList[0].style.border = '25px solid lime';
      container.style.border = '180px ridge lime';
      item1.src = fruitImage17.src;
      gameOver();
     }
    }; 
      option[1].onclick = function() {
      click.play();
      wrong.play();
      checkLives();
      lives--;
      let query = window.matchMedia("(max-width: 600px)");

    if (query.matches) {
      kids.style.color = "#ff0000";
      groceries.src = 'angry_bee.gif';
      groceries.style.marginTop = "145px";
      groceries.style.marginBottom = "-30px";
      guessButton.style.display = 'none';
      nextButton.style.display = 'inline';
      question.innerHTML = 'WRONG!!';
      container.style.border = '15px groove #ff0000';   
    } else {
      groceries.src = 'angry_bee.gif';
      groceries.style.marginTop = "-100px";
      groceries.style.marginBottom = "-80px";
      guessButton.style.display = 'none';
      nextButton.style.display = 'inline';
      question.innerHTML = '<h4>WRONG!!<h4>';
      kids.style.backgroundColor = "#ff0000";
      container.style.border = '180px groove #ff0000';
     }
    };
   }
  }
     break;
      
     case 17: 
     groceries.src = fruitImage18.src;
     let queryR = window.matchMedia("(max-width: 600px)");
          
     if (queryR.matches) {
       groceries.style.marginTop = "0px";
       groceries.style.marginBottom = "0px";
     } else {
       groceries.style.marginTop = "100px";
       groceries.style.marginBottom = "-20px";
     }
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
       kids.style.color = "lime";
       guessButton.style.display = 'none';
       nextButton.style.display = 'inline';
       groceries.style.marginTop = "145px";
       groceries.style.marginBottom = "-30px";
       question.innerHTML = 'RIGHT!!';
       container.style.border = '15px ridge lime';
       vegetableList[1].style.border = '0.3em ridge lime';
       item2.src = fruitImage18.src;  
       gameOver();

     } else {
       groceries.src = 'bee.gif';
       kids.style.backgroundColor = "lime";
       guessButton.style.display = 'none';
       nextButton.style.display = 'inline';
       groceries.style.marginTop = "-30px";
       groceries.style.marginBottom = "-80px";
       question.innerHTML = '<h3>RIGHT!!</h3>';
       container.style.border = '180px ridge lime';
       vegetableList[1].style.border = '25px ridge lime';
       item2.src = fruitImage18.src;
       gameOver();
      }
     }; 
       option[1].onclick = function() {
       click.play();
       wrong.play();
       checkLives();
       lives--;
       let query = window.matchMedia("(max-width: 600px)");

     if (query.matches) {
       kids.style.color = "#ff0000";
       groceries.src = 'angry_bee.gif';
       groceries.style.marginTop = "145px";
       groceries.style.marginBottom = "-30px";
       guessButton.style.display = 'none';
       nextButton.style.display = 'inline';
       question.innerHTML = 'WRONG!!';
       container.style.border = '15px groove #ff0000';  
     } else {
       groceries.src = 'angry_bee.gif';
       groceries.style.marginTop = "-100px";
       groceries.style.marginBottom = "-80px";
       guessButton.style.display = 'none';
       nextButton.style.display = 'inline';
       question.innerHTML = '<h4>WRONG!!<h4>';
       kids.style.backgroundColor = "#ff0000";
       container.style.border = '180px groove #ff0000';
      }
     };
    }
   } 
     break;
          
     case 18: 
     groceries.src = fruitImage19.src;
     let queryS = window.matchMedia("(max-width: 600px)");
          
     if (queryS.matches) {
       groceries.style.marginTop = "0px";
       groceries.style.marginBottom = "0px";
     } else {
       groceries.style.marginTop = "100px";
       groceries.style.marginBottom = "-20px";
     }
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
       kids.style.color = "lime";
       guessButton.style.display = 'none';
       nextButton.style.display = 'inline';
       groceries.style.marginTop = "145px";
       groceries.style.marginBottom = "-30px";
       question.innerHTML = 'RIGHT!!';
       container.style.border = '15px ridge lime';
       vegetableList[2].style.border = '0.3em ridge lime';
       item3.src = fruitImage19.src;  
       gameOver();

      } else {
        groceries.src = 'bee.gif';
        kids.style.backgroundColor = "lime";
        guessButton.style.display = 'none';
        nextButton.style.display = 'inline';
        groceries.style.marginTop = "-30px";
        groceries.style.marginBottom = "-80px";
        question.innerHTML = '<h3>RIGHT!!</h3>';
        container.style.border = '180px ridge lime';
        vegetableList[2].style.border = '25px ridge lime';
        item3.src = fruitImage19.src;
        gameOver();
        }
      };
        option[1].onclick = function() {
        wrong.play();
        click.play();
        checkLives();
        lives--;
        let query = window.matchMedia("(max-width: 600px)");

      if (query.matches) {
        kids.style.color = "#ff0000";
        groceries.src = 'angry_bee.gif';
        groceries.style.marginTop = "145px";
        groceries.style.marginBottom = "-30px";
        guessButton.style.display = 'none';
        nextButton.style.display = 'inline';
        question.innerHTML = 'WRONG!!';
        container.style.border = '15px groove #ff0000';  
      } else {
        groceries.src = 'angry_bee.gif';
        groceries.style.marginTop = "-100px";
        groceries.style.marginBottom = "-80px";
        guessButton.style.display = 'none';
        nextButton.style.display = 'inline';
        question.innerHTML = '<h4>WRONG!!<h4>';
        kids.style.backgroundColor = "#ff0000";
        container.style.border = '180px groove #ff0000';
       }
      };
     }
    } 
     break;
          
     case 19: 
     groceries.src = fruitImage20.src;
     let queryT = window.matchMedia("(max-width: 600px)");
          
     if (queryT.matches) {
       groceries.style.marginTop = "0px";
       groceries.style.marginBottom = "0px";
     } else {
       groceries.style.marginTop = "100px";
       groceries.style.marginBottom = "-20px";
     }
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
        kids.style.color = "lime";
        guessButton.style.display = 'none';
        nextButton.style.display = 'inline';
        groceries.style.marginTop = "145px";
        groceries.style.marginBottom = "-30px";
        question.innerHTML = 'RIGHT!!';
        container.style.border = '15px ridge lime';
        vegetableList[3].style.border = '0.3em ridge lime';
        item4.src = fruitImage20.src; 
        gameOver();

        } else {
        groceries.src = 'bee.gif';
        kids.style.backgroundColor = "lime";
        guessButton.style.display = 'none';
        nextButton.style.display = 'inline';
        groceries.style.marginTop = "-30px";
        groceries.style.marginBottom = "-80px";
        question.innerHTML = '<h3>RIGHT!!</h3>';
        container.style.border = '180px ridge lime';
        item4.src = fruitImage20.src;
        gameOver();
        }
        };
        option[1].onclick = function() {
        click.play();
        wrong.play();
        checkLives();
        lives--;
        let query = window.matchMedia("(max-width: 600px)");

      if (query.matches) {
        kids.style.color = "#ff0000";
        groceries.src = 'angry_bee.gif';
        groceries.style.marginTop = "145px";
        groceries.style.marginBottom = "-30px";
        guessButton.style.display = 'none';
        nextButton.style.display = 'inline';
        question.innerHTML = 'WRONG!!';
        container.style.border = '15px groove #ff0000';  
      } else {
        groceries.src = 'angry_bee.gif';
        groceries.style.marginTop = "-100px";
        groceries.style.marginBottom = "-80px";
        guessButton.style.display = 'none';
        nextButton.style.display = 'inline';
        question.innerHTML = '<h4>WRONG!!<h4>';
        kids.style.backgroundColor = "#ff0000";
        container.style.border = '180px groove #ff0000';
        }
       };
      }
     }
     break;
          
     case 20: 
     groceries.src = fruitImage21.src;
     let queryU = window.matchMedia("(max-width: 600px)");
          
     if (queryU.matches) {
       groceries.style.marginTop = "0px";
       groceries.style.marginBottom = "0px";
     } else {
       groceries.style.marginTop = "100px";
       groceries.style.marginBottom = "-20px";
     }
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
        kids.style.color = "lime";
        guessButton.style.display = 'none';
        nextButton.style.display = 'inline';
        groceries.style.marginTop = "145px";
        groceries.style.marginBottom = "-30px";
        question.innerHTML = 'RIGHT!!';
        container.style.border = '15px ridge lime';
        vegetableList[4].style.border = '0.3em ridge lime';
        item5.src = fruitImage21.src; 
        gameOver();
      } else {
        groceries.src = 'bee.gif';
        kids.style.backgroundColor = "lime";
        guessButton.style.display = 'none';
        nextButton.style.display = 'inline';
        groceries.style.marginTop = "-30px";
        groceries.style.marginBottom = "-80px";
        question.innerHTML = '<h3>RIGHT!!</h3>';
        container.style.border = '180px ridge lime';
        item5.src = fruitImage21.src;
        gameOver();
        }
      };
        option[1].onclick = function() {
        click.play();
        wrong.play();
        checkLives();
        lives--;     
        let query = window.matchMedia("(max-width: 600px)");

      if (query.matches) {
        kids.style.color = "#ff0000";
        groceries.src = 'angry_bee.gif';
        groceries.style.marginTop = "145px";
        groceries.style.marginBottom = "-30px";
        guessButton.style.display = 'none';
        nextButton.style.display = 'inline';
        question.innerHTML = 'WRONG!!';
        container.style.border = '15px groove #ff0000';    
        } else {
        groceries.src = 'angry_bee.gif';
        groceries.style.marginTop = "-100px";
        groceries.style.marginBottom = "-80px";
        guessButton.style.display = 'none';
        nextButton.style.display = 'inline';
        question.innerHTML = '<h4>WRONG!!<h4>';
        kids.style.backgroundColor = "#ff0000";
        container.style.border = '180px groove #ff0000';
        }
       }; 
      }
     }
     break;
          
     case 21: 
     groceries.src = fruitImage22.src;
     let queryV = window.matchMedia("(max-width: 600px)");
          
     if (queryV.matches) {
       groceries.style.marginTop = "0px";
       groceries.style.marginBottom = "0px";     
     } else {
       groceries.style.marginTop = "100px";
       groceries.style.marginBottom = "-20px";
     }
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
        kids.style.color = "lime";
        guessButton.style.display = 'none';
        nextButton.style.display = 'inline';
        groceries.style.marginTop = "145px";
        groceries.style.marginBottom = "-30px";
        question.innerHTML = 'RIGHT!!';
        container.style.border = '15px ridge lime';
        vegetableList[5].style.border = '0.3em ridge lime';
        item6.src = fruitImage22.src;
        gameOver();

      } else {
        groceries.src = 'bee.gif';
        kids.style.backgroundColor = "lime";
        guessButton.style.display = 'none';
        nextButton.style.display = 'inline';
        groceries.style.marginTop = "-30px";
        groceries.style.marginBottom = "-80px";
        question.innerHTML = '<h3>RIGHT!!</h3>';
        container.style.border = '180px ridge lime';
        item6.src = fruitImage22.src;
        gameOver();
        }
      }; 
        option[1].onclick = function() {
        click.play();
        wrong.play();
        checkLives();
        lives--;
        let query = window.matchMedia("(max-width: 600px)");

      if (query.matches) {
        kids.style.color = "#ff0000";
        groceries.src = 'angry_bee.gif';
        groceries.style.marginTop = "145px";
        groceries.style.marginBottom = "-30px";
        guessButton.style.display = 'none';
        nextButton.style.display = 'inline';
        question.innerHTML = 'WRONG!!';
        container.style.border = '15px groove #ff0000';    
      } else {
        groceries.src = 'angry_bee.gif';
        groceries.style.marginTop = "-100px";
        groceries.style.marginBottom = "-80px";
        guessButton.style.display = 'none';
        nextButton.style.display = 'inline';
        question.innerHTML = '<h4>WRONG!!<h4>';
        kids.style.backgroundColor = "#ff0000";
        container.style.border = '180px groove #ff0000';
       }
      };
     }
    }
     break;
          
     case 22: 
     groceries.src = fruitImage23.src;
     let queryW = window.matchMedia("(max-width: 600px)");
          
     if (queryW.matches) {
       groceries.style.marginTop = "0px";
       groceries.style.marginBottom = "0px";     
     } else {
       groceries.style.marginTop = "100px";
       groceries.style.marginBottom = "-20px";
     }
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
        kids.style.color = "lime";
        guessButton.style.display = 'none';
        nextButton.style.display = 'inline';
        groceries.style.marginTop = "145px";
        groceries.style.marginBottom = "-30px";
        question.innerHTML = 'RIGHT!!';
        container.style.border = '15px ridge lime';
        vegetableList[6].style.border = '0.3em ridge lime';
        item7.src = fruitImage23.src;
        gameOver();

      } else {
        groceries.src = 'bee.gif';
        kids.style.backgroundColor = "lime";
        guessButton.style.display = 'none';
        nextButton.style.display = 'inline';
        groceries.style.marginTop = "-30px";
        groceries.style.marginBottom = "-80px";
        question.innerHTML = '<h3>RIGHT!!</h3>';
        container.style.border = '180px ridge lime';
        item7.src = fruitImage23.src;
        gameOver();
        }
      }; 
        option[1].onclick = function() {
        click.play();
        wrong.play();
        checkLives();
        lives--;
        let query = window.matchMedia("(max-width: 600px)");

      if (query.matches) {
        kids.style.color = "#ff0000";
        groceries.src = 'angry_bee.gif';
        groceries.style.marginTop = "145px";
        groceries.style.marginBottom = "-30px";
        guessButton.style.display = 'none';
        nextButton.style.display = 'inline';
        question.innerHTML = 'WRONG!!';
        container.style.border = '15px groove #ff0000';   
      } else {
        groceries.src = 'angry_bee.gif';
        groceries.style.marginTop = "-100px";
        groceries.style.marginBottom = "-80px";
        guessButton.style.display = 'none';
        nextButton.style.display = 'inline';
        question.innerHTML = '<h4>WRONG!!<h4>';
        kids.style.backgroundColor = "#ff0000";
        container.style.border = '180px groove #ff0000';
        }
       };
      }
     }
     break;
          
     case 23: 
     groceries.src = fruitImage24.src;
     let queryX = window.matchMedia("(max-width: 600px)");
          
     if (queryX.matches) {
       groceries.style.marginTop = "0px";
       groceries.style.marginBottom = "0px";
     } else {
       groceries.style.marginTop = "100px";
       groceries.style.marginBottom = "-20px";
     }
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
        kids.style.color = "lime";
        guessButton.style.display = 'none';
        nextButton.style.display = 'inline';
        groceries.style.marginTop = "145px";
        groceries.style.marginBottom = "-30px";
        question.innerHTML = 'RIGHT!!';
        container.style.border = '15px ridge lime';
        vegetableList[7].style.border = '0.3em ridge lime';
        item8.src = fruitImage24.src; 
        gameOver();

      } else {
        groceries.src = 'bee.gif';
        kids.style.backgroundColor = "lime";
        guessButton.style.display = 'none';
        nextButton.style.display = 'inline';
        groceries.style.marginTop = "-30px";
        groceries.style.marginBottom = "-80px";
        question.innerHTML = '<h3>RIGHT!!</h3>';
        container.style.border = '180px ridge lime';
        item8.src = fruitImage24.src;
        gameOver();
        }
      }; 
        option[1].onclick = function() {
        click.play();
        wrong.play();
        checkLives();
        lives--;
        let query = window.matchMedia("(max-width: 600px)");

      if (query.matches) {
        kids.style.color = "#ff0000";
        groceries.src = 'angry_bee.gif';
         groceries.style.marginTop = "145px";
        groceries.style.marginBottom = "-30px";
        guessButton.style.display = 'none';
        nextButton.style.display = 'inline';
        question.innerHTML = 'WRONG!!';
        container.style.border = '15px groove #ff0000'; 
       } else {
        groceries.src = 'angry_bee.gif';
        groceries.style.marginTop = "-100px";
        groceries.style.marginBottom = "-80px";
        guessButton.style.display = 'none';
        nextButton.style.display = 'inline';
        question.innerHTML = '<h4>WRONG!!<h4>';
        kids.style.backgroundColor = "#ff0000";
        container.style.border = '180px groove #ff0000';
        }
       }; 
      }
     }
     break;
          
     case 24: 
     groceries.src = fruitImage25.src;
     let queryY = window.matchMedia("(max-width: 600px)");
          
     if (queryY.matches) {
       groceries.style.marginTop = "0px";
       groceries.style.marginBottom = "0px";
     } else {
       groceries.style.marginTop = "100px";
       groceries.style.marginBottom = "-20px";
     }
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
        kids.style.color = "lime";
        guessButton.style.display = 'none';
        nextButton.style.display = 'inline';
        groceries.style.marginTop = "145px";
        groceries.style.marginBottom = "-30px";
        question.innerHTML = 'RIGHT!!';
        container.style.border = '15px ridge lime';
        vegetableList[8].style.border = '0.3em ridge lime';
        item9.src = fruitImage25.src;
        gameOver();

      } else {
        groceries.src = 'bee.gif';
        kids.style.backgroundColor = "lime";
        guessButton.style.display = 'none';
        nextButton.style.display = 'inline';
        groceries.style.marginTop = "-30px";
        groceries.style.marginBottom = "-80px";
        question.innerHTML = '<h3>RIGHT!!</h3>';
        container.style.border = '180px ridge lime';
        item9.src = fruitImage25.src;
        gameOver();
        }
      };
        option[1].onclick = function() {
        click.play();
        wrong.play();
        checkLives();
        lives--;
        let query = window.matchMedia("(max-width: 600px)");

      if (query.matches) {
        kids.style.color = "#ff0000";
        groceries.src = 'angry_bee.gif';
         groceries.style.marginTop = "145px";
        groceries.style.marginBottom = "-30px";
        guessButton.style.display = 'none';
        nextButton.style.display = 'inline';
        question.innerHTML = 'WRONG!!';
        container.style.border = '15px groove #ff0000';    
      } else {
        groceries.src = 'angry_bee.gif';
        groceries.style.marginTop = "-100px";
        groceries.style.marginBottom = "-80px";
        guessButton.style.display = 'none';
        nextButton.style.display = 'inline';
        question.innerHTML = '<h4>WRONG!!<h4>';
        kids.style.backgroundColor = "#ff0000";
        container.style.border = '180px groove #ff0000';
        }
       }; 
      }
     }
     break;
          
     case 25: 
     groceries.src = fruitImage26.src;
     let queryZ = window.matchMedia("(max-width: 600px)");
          
     if (queryZ.matches) {
       groceries.style.marginTop = "0px";
       groceries.style.marginBottom = "0px";     
     } else {
       groceries.style.marginTop = "100px";
       groceries.style.marginBottom = "-20px";
     }
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
        kids.style.color = "lime";
        guessButton.style.display = 'none';
        nextButton.style.display = 'inline';
        groceries.style.marginTop = "145px";
        groceries.style.marginBottom = "-30px";
        question.innerHTML = 'RIGHT!!';
        container.style.border = '15px ridge lime';
        vegetableList[9].style.border = '0.3em ridge lime';
        item10.src = fruitImage26.src;  
        gameOver();

      } else {
        groceries.src = 'bee.gif';
        kids.style.backgroundColor = "lime";
        guessButton.style.display = 'none';
        nextButton.style.display = 'inline';
        groceries.style.marginTop = "-30px";
        groceries.style.marginBottom = "-80px";
        question.innerHTML = '<h3>RIGHT!!</h3>';
        container.style.border = '180px ridge lime';
        item10.src = fruitImage26.src;
        gameOver();
        }
      }; 
        option[1].onclick = function() {
        click.play();
        wrong.play();
        checkLives();
        lives--;
        let query = window.matchMedia("(max-width: 600px)");

      if (query.matches) {
        kids.style.color = "#ff0000";
        groceries.src = 'angry_bee.gif';
        groceries.style.marginTop = "145px";
        groceries.style.marginBottom = "-30px";
        guessButton.style.display = 'none';
        nextButton.style.display = 'inline';
        question.innerHTML = 'WRONG!!';
        container.style.border = '15px groove #ff0000';     
      } else {
        groceries.src = 'angry_bee.gif';
        groceries.style.marginTop = "-100px";
        groceries.style.marginBottom = "-80px";
        guessButton.style.display = 'none';
        nextButton.style.display = 'inline';
        question.innerHTML = '<h4>WRONG!!<h4>';
        kids.style.backgroundColor = "#ff0000";
        container.style.border = '180px groove #ff0000';
        }
       }; 
      }
     }
     break;
          
     case 26: 
     groceries.src = fruitImage27.src;
     let query1 = window.matchMedia("(max-width: 600px)");
          
     if (query1.matches) {
       groceries.style.marginTop = "0px";
       groceries.style.marginBottom = "0px";
     } else {
       groceries.style.marginTop = "100px";
       groceries.style.marginBottom = "-20px";
     }
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
        kids.style.color = "lime";
        guessButton.style.display = 'none';
        nextButton.style.display = 'inline';
        groceries.style.marginTop = "145px";
        groceries.style.marginBottom = "-30px";
        question.innerHTML = 'RIGHT!!';
        container.style.border = '15px ridge lime';
        vegetableList[10].style.border = '0.3em ridge lime';
        item11.src = fruitImage27.src; 
        gameOver();

        } else {
        groceries.src = 'bee.gif';
        kids.style.backgroundColor = "lime";
        guessButton.style.display = 'none';
        nextButton.style.display = 'inline';
        groceries.style.marginTop = "-30px";
        groceries.style.marginBottom = "-80px";
        question.innerHTML = '<h3>RIGHT!!</h3>';
        container.style.border = '180px ridge lime';
        item11.src = fruitImage27.src;
        gameOver();
        }
      }; 
        option[1].onclick = function() {
        click.play();
        wrong.play();
        checkLives();
        lives--;  
        let query = window.matchMedia("(max-width: 600px)");

      if (query.matches) {
        kids.style.color = "#ff0000";
        groceries.src = 'angry_bee.gif';
        groceries.style.marginTop = "145px";
        groceries.style.marginBottom = "-30px";
        guessButton.style.display = 'none';
        nextButton.style.display = 'inline';
        question.innerHTML = 'WRONG!!';
        container.style.border = '15px groove #ff0000';     
      } else {
        groceries.src = 'angry_bee.gif';
        groceries.style.marginTop = "-100px";
        groceries.style.marginBottom = "-80px";
        guessButton.style.display = 'none';
        nextButton.style.display = 'inline';
        question.innerHTML = '<h4>WRONG!!<h4>';
        kids.style.backgroundColor = "#ff0000";
        container.style.border = '180px groove #ff0000';
        }
      }; 
    }
  }
     break;
          
     case 27: 
     groceries.src = fruitImage28.src;
     let query2 = window.matchMedia("(max-width: 600px)");
          
     if (query2.matches) {
       groceries.style.marginTop = "0px";
       groceries.style.marginBottom = "0px";
     } else {
       groceries.style.marginTop = "100px";
       groceries.style.marginBottom = "-20px";
     }
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
        kids.style.color = "lime";
        guessButton.style.display = 'none';
        nextButton.style.display = 'inline';
        groceries.style.marginTop = "145px";
        groceries.style.marginBottom = "-30px";
        question.innerHTML = 'RIGHT!!';
        container.style.border = '15px ridge lime';
        vegetableList[11].style.border = '0.3em ridge lime';
        item12.src = fruitImage28.src; 
        gameOver();

      } else {
        groceries.src = 'bee.gif';
        kids.style.backgroundColor = "lime";
        guessButton.style.display = 'none';
        nextButton.style.display = 'inline';
        groceries.style.marginTop = "-30px";
        groceries.style.marginBottom = "-80px";
        question.innerHTML = '<h3>RIGHT!!</h3>';
        container.style.border = '180px ridge lime';
        item12.src = fruitImage28.src;
        gameOver();
        }
      }; 
        option[1].onclick = function() {
        click.play();
        wrong.play();
        checkLives();
        lives--;
        let query = window.matchMedia("(max-width: 600px)");

      if (query.matches) {
        kids.style.color = "#ff0000";
        groceries.src = 'angry_bee.gif';
        groceries.style.marginTop = "145px";
        groceries.style.marginBottom = "-30px";
        guessButton.style.display = 'none';
        nextButton.style.display = 'inline';
        question.innerHTML = 'WRONG!!';
        container.style.border = '15px groove #ff0000';
      } else {
        groceries.src = 'angry_bee.gif';
        groceries.style.marginTop = "-100px";
        groceries.style.marginBottom = "-80px";
        guessButton.style.display = 'none';
        nextButton.style.display = 'inline';
        question.innerHTML = '<h4>WRONG!!<h4>';
        kids.style.backgroundColor = "#ff0000";
        container.style.border = '180px groove #ff0000';
        }
      }; 
    }
  }
      
  }
        guessButton.style.border = 'none';
        groceries.style.marginTop = '100px';
        guessButton.style.boxShadow = 'none';
        guessButton.style.background = 'none';
        currentlyPlaying = true;
  }



  nextButton.onclick = function() {
      
    let query = window.matchMedia("(max-width: 600px)");
    
    if (query.matches) {
        
      click.play();
      currentlyPlaying = true;
      question.innerHTML = "..ready ?";
      groceries.src = 'bee.gif';
//      groceries.style.marginTop = "115px";
      groceries.style.marginBottom = "-30px";
      container.style.border = "15px ridge whitesmoke";  
      nextButton.style.display = 'none';
      guessButton.style.background = 'white';
      guessButton.style.display = 'inline';
      guessButton.innerHTML = 'guess';
      guessButton.style.border = '2px solid black';
      guessButton.style.boxShadow = "2px 2px 2px black";
      kids.style.color = "lightseagreen"; 
      
    } else {
      click.play();
      currentlyPlaying = true;
      question.innerHTML = "..ready ?";
      groceries.src = 'bee.gif';
      groceries.style.marginTop = "200px";
      groceries.style.marginBottom = "-80px";
      container.style.border = "180px ridge whitesmoke";  
      nextButton.style.display = 'none';
      guessButton.style.background = 'white';
      guessButton.style.display = 'inline';
      guessButton.innerHTML = 'guess';
      guessButton.style.border = '10px solid black';
      guessButton.style.boxShadow = "12px 12px 7px black";
      kids.style.backgroundColor = "yellow";
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
    
    if (box1.src === fruitImage1.src && box2.src === fruitImage2.src && box3.src === fruitImage3.src && box4.src === fruitImage4.src && box5.src === fruitImage5.src && box6.src === fruitImage6.src && box7.src === fruitImage7.src && box8.src === fruitImage8.src && box9.src ===           fruitImage9.src && box10.src === fruitImage10.src && box11.src === fruitImage11.src && box12.src === fruitImage12.src && box13.src ===               fruitImage13.src && box14.src === fruitImage14.src && box15.src === fruitImage15.src && box16.src === fruitImage16.src) {
        
    let query = window.matchMedia("(max-width: 600px)");
        
    if (query.matches) {
        
    youWin();
    currentlyPlaying = false;
    container.style.border = "25px ridge lime"; 
    container.style.backgroundImage = 'url(test.gif)';    
    guessButton.style.display = 'none';
    nextButton.innerHTML = 'To play more games you\'ll need to create an account.<br> Go to "my account" in the navigation menu. Once logged in, click on the "games" tab';
    nextButton.style.fontSize = "0.6rem";
    nextButton.style.backgroundColor = 'khaki';
    nextButton.style.border = '0.3em ridge whitesmoke';
    nextButton.style.color = 'black';
    nextButton.style.margin = "30px";
    //question.style.display = 'none';
    groceries.style.marginTop = "10px";
    groceries.src = 'aubergine_man.gif';
    //groceries.style.visibility = 'hidden';
    //navContainer.style.backgroundImage = 'url(.gif)';
    question.innerHTML = '<h3>AWESOME !!!</h3>';    
  
  } else {
      
    youWin();
    currentlyPlaying = false;
    container.style.border = "180px ridge lime";  
    guessButton.style.display = 'none';
    nextButton.innerHTML = 'To play more games you\'ll need to create an account.<br> Go to "my account" in the navigation menu. Once logged in, click on the "games" tab';
    nextButton.style.fontSize = "60px";
    nextButton.style.backgroundColor = 'khaki';
    nextButton.style.border = '20px ridge whitesmoke';
    nextButton.style.color = 'black';
    //question.style.display = 'none';
    groceries.style.marginTop = "10px";
    groceries.src = 'aubergine_man.gif';
    //groceries.style.visibility = 'hidden';
    //navContainer.style.backgroundImage = 'url(.gif)';
    kids.style.backgroundColor = 'lightseagreen';
    container.style.backgroundImage = 'url(test.gif)';
    //ocument.getElementById('text').innerHTML = '<h1>AWESOME !!!</h1>'; 
   }
  }
};







    
    
    
    
    
    
    
    
    
    
    
    
    