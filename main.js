let box1 = document.getElementById('_Apple');
let box2 = document.getElementById('_Orange');
let box3 = document.getElementById('_Banana');
let box4 = document.getElementById('_Pumpkin');
let box5 = document.getElementById('_Cherries');
let box6 = document.getElementById('_Blueberries');
let box7 = document.getElementById('_Lemon');
let box8 = document.getElementById('_Pineapple');
let box9 = document.getElementById('_Grapes');
let box10 = document.getElementById('_Avacados');
let box11 = document.getElementById('_Tomato');
let box12 = document.getElementById('_Watermelon');
let box13 = document.getElementById('_Peanuts');
let box14 = document.getElementById('_Aubergine');
let box15 = document.getElementById('_Pepper');
let box16 = document.getElementById('_Sweetcorn');


let fruitImage1 = document.getElementById('Apple');
let fruitImage2 = document.getElementById('Orange');
let fruitImage3 = document.getElementById('Banana');
let fruitImage4 = document.getElementById('Pumpkin');
let fruitImage5 = document.getElementById('Cherries'); 
let fruitImage6 = document.getElementById('Blueberries');
let fruitImage7 = document.getElementById('Lemon'); 
let fruitImage8 = document.getElementById('Pineapple');
let fruitImage9 = document.getElementById('Grapes');
let fruitImage10 = document.getElementById('Avacados');
let fruitImage11 = document.getElementById('Tomato');
let fruitImage12 = document.getElementById('Watermelon');
let fruitImage13 = document.getElementById('Peanuts');
let fruitImage14 = document.getElementById('Aubergine');
let fruitImage15 = document.getElementById('Pepper');
let fruitImage16 = document.getElementById('Sweetcorn');


let kids = document.getElementById('kids');
let homeButton = document.getElementById('home');
let guessButton = document.getElementById('guess');
let nextButton = document.getElementById('next');
let question = document.getElementById('question');
let option = document.getElementsByTagName('button');
let groceries = document.getElementById('groceries');
let container = document.getElementById('container');
let navContainer = document.getElementById('nav-container');
let nodeList_mainSection = document.querySelectorAll('.flexBox');

let currentlyPlaying = true;


let isClicked = (button) => {
  if (button) {
    return true;
  } else {
    return false;
  }
}

guessButton.onclick = function() {
  guessFruit();
}

//switch function for Fruits  
function guessFruit() { 

const count = 16;
    
let randFruit = Math.floor(Math.random() * count);    

  switch (randFruit) {
             
    case 0:
      groceries.src = fruitImage1.src;
      groceries.style.width = "800px";
      groceries.style.height = "750px";
      question.innerHTML = "..name ?";
            
   if (currentlyPlaying && isClicked(guessButton)) {
      guessButton.onclick = false;
      document.getElementById('option_a');
      guessButton.innerHTML = option_a.innerHTML;
       
      if (box1.src === fruitImage1.src) {
      guessFruit();
      } else {
      option[2].onclick = function() {
      groceries.style.marginTop = '0px';
      groceries.src = 'banana_man.gif';
      guessButton.style.display = 'none';
      nextButton.style.display = 'inline';
      question.innerHTML = '<h3>RIGHT!!</h3>';
      container.style.border = '180px ridge lime';
      nodeList_mainSection[0].style.border = '25px solid lime';
      document.getElementById('_Apple').src = fruitImage1.src; 
      gameOver()
      }
      option[1].onclick = function() {
      groceries.src = 'pineapple_man.gif';
      groceries.style.marginTop = "0px";
      guessButton.style.display = 'none';
      nextButton.style.display = 'inline';
      question.innerHTML = '<h4>WRONG!!<h4>';
      container.style.border = '180px groove #ff0000';
      }
      option[3].onclick = function() {
      groceries.src = 'pineapple_man.gif';
      groceries.style.marginTop = "0px";
      guessButton.style.display = 'none';
      nextButton.style.display = 'inline';
      question.innerHTML = '<h4>WRONG!!</h4>';
      container.style.border = '180px groove #ff0000';
      }
     }
    }
    break;
            
    case 1:
      groceries.src = fruitImage2.src;
      groceries.style.width = "800px";
      groceries.style.height = "750px";
      question.innerHTML = "..name ?";
         
   if (currentlyPlaying && isClicked(guessButton)) {
      guessButton.onclick = false;
      document.getElementById('option_b');
      guessButton.innerHTML = option_b.innerHTML;
      
      if (box2.src === fruitImage2.src) {
        guessFruit();
      } else {
      option[2].onclick = function() {
      groceries.src = 'banana_man.gif';
      groceries.style.marginTop = '0px';
      guessButton.style.display = 'none';
      nextButton.style.display = 'inline';
      question.innerHTML = '<h3>RIGHT!!</h3>';
      container.style.border = '180px ridge lime';
      nodeList_mainSection[1].style.border = '25px solid lime';
      document.getElementById('_Orange').src = fruitImage2.src;
      gameOver();
      }
      option[1].onclick = function() {
      groceries.src = 'pineapple_man.gif';
      groceries.style.marginTop = '0px';
      guessButton.style.display = 'none';
      nextButton.style.display = 'inline';
      question.innerHTML = '<h4>WRONG!!<h4>';
      container.style.border = '180px groove #ff0000';
      }
      option[3].onclick = function() {
      groceries.src = 'pineapple_man.gif';
      groceries.style.marginTop = '0px';
      guessButton.style.display = 'none';
      nextButton.style.display = 'inline';
      question.innerHTML = '<h4>WRONG!!<h4>';
      container.style.border = '180px groove #ff0000';
      }
     }
    }
    break;
       
    case 2:
    groceries.src = fruitImage3.src;
    groceries.style.width = "800px";
    groceries.style.height = "750px";
    question.innerHTML = "..name ?";
            
    if (currentlyPlaying && isClicked(guessButton)) {
      guessButton.onclick = false;
      document.getElementById('option_c');
      guessButton.innerHTML = option_c.innerHTML;
        
      if (box3.src === fruitImage3.src) {
        guessFruit();
      } else {
      option[3].onclick = function() {
      groceries.src = 'banana_man.gif';
      groceries.style.marginTop = '0px';
      guessButton.style.display = 'none';
      nextButton.style.display = 'inline';
      question.innerHTML = '<h3>RIGHT!!</h3>';
      container.style.border = '180px ridge lime';
      nodeList_mainSection[2].style.border = '25px solid lime';
      document.getElementById('_Banana').src = fruitImage3.src;
      gameOver();
      }
      option[1].onclick = function() {
      groceries.src = 'pineapple_man.gif';
      groceries.style.marginTop = '0px';
      guessButton.style.display = 'none';
      nextButton.style.display = 'inline';
      question.innerHTML = '<h4>WRONG!!<h4>';
      container.style.border = '180px groove #ff0000';
      }
      option[2].onclick = function() {
      groceries.src = 'pineapple_man.gif';
      groceries.style.marginTop = '0px';
      guessButton.style.display = 'none';
      nextButton.style.display = 'inline';
      question.innerHTML = '<h4>WRONG!!<h4>';
      container.style.border = '180px groove #ff0000';
      }
     }
    }
    break;
        
    case 3:
    groceries.src= fruitImage4.src;
    groceries.style.width = "800px";
    groceries.style.height = "750px";
    question.innerHTML = "..name ?";
            
    if (currentlyPlaying && isClicked(guessButton)) {
      guessButton.onclick = false;
      document.getElementById('option_d');
      guessButton.innerHTML = option_d.innerHTML;  
        
      if (box4.src === fruitImage4.src) { 
        guessFruit();
      } else {
      option[3].onclick = function() {
      groceries.src = 'banana_man.gif';
      groceries.style.marginTop = '0px';
      guessButton.style.display = 'none';
      nextButton.style.display = 'inline';
      question.innerHTML = '<h3>RIGHT!!</h3>';
      container.style.border = '180px groove lime';
      nodeList_mainSection[3].style.border = '25px solid lime';
      document.getElementById('_Pumpkin').src = fruitImage4.src;     
      gameOver();
      }
      option[1].onclick = function() {
      groceries.src = 'pineapple_man.gif';
      groceries.style.marginTop = '0px';
      guessButton.style.display = 'none';
      nextButton.style.display = 'inline';
      question.innerHTML = '<h4>WRONG!!<h4>';
      container.style.border = '180px groove #ff0000';
      }
      option[2].onclick = function() {
      groceries.src = 'pineapple_man.gif';
      groceries.style.marginTop = '0px';
      guessButton.style.display = 'none';
      nextButton.style.display = 'inline';
      question.innerHTML = '<h4>WRONG!!<h4>';
      container.style.border = '180px groove #ff0000';
      } 
    }
  }
    break;
            
    case 4:
    groceries.src = fruitImage5.src;
    groceries.style.width = "800px";
    groceries.style.height = "750px";
    question.innerHTML = "..name ?";
            
    if (currentlyPlaying && isClicked(guessButton)) {
      guessButton.onclick = false;
      document.getElementById('option_e');
      guessButton.innerHTML = option_e.innerHTML;
        
      if (box5.src === fruitImage5.src) {
        guessFruit();
      } else {
      option[3].onclick = function() {
      groceries.src = 'banana_man.gif';
      groceries.style.marginTop = '0px';
      guessButton.style.display = 'none';
      nextButton.style.display = 'inline';
      question.innerHTML = '<h3>RIGHT!!</h3>';
      container.style.border = '180px groove lime';
      nodeList_mainSection[4].style.border = '25px solid lime';
      document.getElementById('_Cherries').src = fruitImage5.src;
      gameOver();
      }
      option[1].onclick = function() {
      groceries.src = 'pineapple_man.gif';
      groceries.style.marginTop = '0px';
      guessButton.style.display = 'none';
      nextButton.style.display = 'inline';
      question.innerHTML = '<h4>WRONG!!<h4>';
      container.style.border = '180px groove #ff0000';
      }
      option[2].onclick = function() {
      groceries.src = 'pineapple_man.gif';
      groceries.style.marginTop = '0px';
      guessButton.style.display = 'none';
      nextButton.style.display = 'inline';
      question.innerHTML = '<h4>WRONG!!<h4>';
      container.style.border = '180px groove #ff0000';
      }
     }
    }
    break;
            
    case 5:
    groceries.src = fruitImage6.src;
    groceries.style.width = "800px";
    groceries.style.height = "750px";
    question.innerHTML = "..name ?"; 
            
    if (currentlyPlaying && isClicked(guessButton)) {
      guessButton.onclick = false;
      document.getElementById('option_f');
      guessButton.innerHTML = option_f.innerHTML;
        
      if (box6.src === fruitImage6.src) {
        guessFruit();  
      } else {
      option[2].onclick = function() {
      groceries.src = 'banana_man.gif';
      groceries.style.marginTop = '0px';
      guessButton.style.display = 'none';
      nextButton.style.display = 'inline';
      question.innerHTML = '<h3>RIGHT!!</h3>';
      container.style.border = '180px ridge lime';
      nodeList_mainSection[5].style.border = '25px solid lime';
      document.getElementById('_Blueberries').src = fruitImage6.src;
      gameOver();
      }
      option[1].onclick = function() {
      groceries.src = 'pineapple_man.gif';
      groceries.style.marginTop = '0px';
      guessButton.style.display = 'none';
      nextButton.style.display = 'inline';
      question.innerHTML = '<h4>WRONG!!<h4>';
      container.style.border = '180px groove #ff0000';
      }
      option[3].onclick = function() {
      groceries.src = 'pineapple_man.gif';
      groceries.style.marginTop = '0px';
      guessButton.style.display = 'none';
      nextButton.style.display = 'inline';
      question.innerHTML = '<h4>WRONG!!<h4>';
      container.style.border = '180px groove #ff0000';
      } 
    }
  }
    break;
            
    case 6:
    groceries.src = fruitImage7.src;
    groceries.style.width = "800px";
    groceries.style.height = "750px";
    question.innerHTML = "..name ?";
            
    if (currentlyPlaying && isClicked(guessButton)) {
      guessButton.onclick = false;
      document.getElementById('option_g');
      guessButton.innerHTML = option_g.innerHTML;  
        
      if (box7.src === fruitImage7.src) {
        guessFruit();
      } else {
      option[1].onclick = function() {
      groceries.src = 'banana_man.gif';
      groceries.style.marginTop = '0px';
      guessButton.style.display = 'none';
      nextButton.style.display = 'inline';
      question.innerHTML = '<h3>RIGHT!!</h3>';
      container.style.border = '180px ridge lime';
      nodeList_mainSection[6].style.border = '25px solid lime';
      document.getElementById('_Lemon').src = fruitImage7.src;
      gameOver();
      }
      option[2].onclick = function() {
      groceries.src = 'pineapple_man.gif';
      groceries.style.marginTop = '0px';
      guessButton.style.display = 'none';
      nextButton.style.display = 'inline';
      question.innerHTML = '<h4>WRONG!!<h4>';
      container.style.border = '180px groove #ff0000';
      } 
      option[3].onclick = function() {
      groceries.src = 'pineapple_man.gif';
      groceries.style.marginTop = '0px';
      guessButton.style.display = 'none';
      nextButton.style.display = 'inline';
      question.innerHTML = '<h4>WRONG!!<h4>';
      container.style.border = '180px groove #ff0000';
      } 
     }
    }
    break;
      
    case 7:
    groceries.src = fruitImage8.src;
    groceries.style.width = "800px";
    groceries.style.height = "750px";
    question.innerHTML = "..name ?";  
        
    if (currentlyPlaying && isClicked(guessButton)) {
      guessButton.onclick = false;
      document.getElementById('option_h');
      guessButton.innerHTML = option_h.innerHTML;  
          
      if (box8.src === fruitImage8.src) {
        guessFruit();
      } else {
      option[3].onclick = function() {
      groceries.src = 'banana_man.gif';
      groceries.style.marginTop = '0px';
      guessButton.style.display = 'none';
      nextButton.style.display = 'inline';
      question.innerHTML = '<h3>RIGHT!!</h3>';
      container.style.border = '180px ridge lime';
      nodeList_mainSection[7].style.border = '25px solid lime';
      document.getElementById('_Pineapple').src = fruitImage8.src;
      gameOver();
      } 
      option[1].onclick = function() {
      groceries.src = 'pineapple_man.gif';
      groceries.style.marginTop = '0px';
      guessButton.style.display = 'none';
      nextButton.style.display = 'inline';
      question.innerHTML = '<h4>WRONG!!<h4>';
      container.style.border = '180px groove #ff0000';
      }
      option[2].onclick = function() {
      groceries.src = 'pineapple_man.gif';
      groceries.style.marginTop = '0px';
      guessButton.style.display = 'none';
      nextButton.style.display = 'inline';
      question.innerHTML = '<h4>WRONG!!<h4>';
      container.style.border = '180px groove #ff0000';
      }
     }
    }
    break;
         
    case 8:
    groceries.src= fruitImage9.src;
    groceries.style.width = "800px";
    groceries.style.height = "750px";
    question.innerHTML = "..name ?";      
          
    if (currentlyPlaying && isClicked(guessButton)) {
      guessButton.onclick = false;
      document.getElementById('option_i');
      guessButton.innerHTML = option_i.innerHTML; 
      
      if (box9.src === fruitImage9.src) {
        guessFruit();
      } else {
      option[2].onclick = function() {
      groceries.src = 'banana_man.gif';
      groceries.style.marginTop = '0px';
      guessButton.style.display = 'none';
      nextButton.style.display = 'inline';
      question.innerHTML = '<h3>RIGHT!!</h3>';
      container.style.border = '180px ridge lime';
      nodeList_mainSection[8].style.border = '25px solid lime';
      document.getElementById('_Grapes').src = fruitImage9.src;
      gameOver();
      }  
      option[1].onclick = function() {
      groceries.src = 'pineapple_man.gif';
      groceries.style.marginTop = '0px';
      guessButton.style.display = 'none';
      nextButton.style.display = 'inline';
      question.innerHTML = '<h4>WRONG!!<h4>';
      container.style.border = '180px groove #ff0000';
      }
      option[3].onclick = function() {
      groceries.src = 'pineapple_man.gif';
      groceries.style.marginTop = '0px';
      guessButton.style.display = 'none';
      nextButton.style.display = 'inline';
      question.innerHTML = '<h4>WRONG!!<h4>';
      container.style.border = '180px groove #ff0000';
      } 
     }
    }
    break;
        
    case 9:
    groceries.src= fruitImage10.src;
    groceries.style.width = "800px";
    groceries.style.height = "750px";
    question.innerHTML = "..name ?";
            
    if (currentlyPlaying && isClicked(guessButton)) {
      guessButton.onclick = false;
      document.getElementById('option_j');
      guessButton.innerHTML = option_j.innerHTML; 
          
      if (box10.src === fruitImage10.src) {
        guessFruit();
      } else {
      option[2].onclick = function() {
      groceries.src = 'banana_man.gif';
      groceries.style.marginTop = '0px';
      guessButton.style.display = 'none';
      nextButton.style.display = 'inline';
      question.innerHTML = '<h3>RIGHT!!</h3>';
      container.style.border = '180px ridge lime';
      nodeList_mainSection[9].style.border = '25px solid lime';
      document.getElementById('_Avacados').src = fruitImage10.src;
      gameOver();
      }  
      option[1].onclick = function() {
      groceries.src = 'pineapple_man.gif';
      groceries.style.marginTop = '0px';
      guessButton.style.display = 'none';
      nextButton.style.display = 'inline';
      question.innerHTML = '<h4>WRONG!!<h4>';
      container.style.border = '180px groove #ff0000';
      }
      option[3].onclick = function() {
      groceries.src = 'pineapple_man.gif';
      groceries.style.marginTop = '0px';
      guessButton.style.display = 'none';
      nextButton.style.display = 'inline';
      question.innerHTML = '<h4>WRONG!!<h4>';
      container.style.border = '180px groove #ff0000';
      }
     }
    }
    break;
         
    case 10:
    groceries.src= fruitImage11.src;
    groceries.style.width = "800px";
    groceries.style.height = "750px";
    question.innerHTML = "..name ?";
            
    if (currentlyPlaying && isClicked(guessButton)) {
      guessButton.onclick = false;
      document.getElementById('option_k');
      guessButton.innerHTML = option_k.innerHTML;     
     
      if (box11.src === fruitImage11.src) {
        guessFruit();
      } else {
      option[3].onclick = function() {
      groceries.src = 'banana_man.gif';
      groceries.style.marginTop = '0px';
      guessButton.style.display = 'none';
      nextButton.style.display = 'inline';
      question.innerHTML = '<h3>RIGHT!!</h3>';
      container.style.border = '180px ridge lime';
      nodeList_mainSection[10].style.border = '25px solid lime';
      document.getElementById('_Tomato').src = fruitImage11.src;
      gameOver();
      }  
      option[1].onclick = function() {
      groceries.src = 'pineapple_man.gif';
      groceries.style.marginTop = '0px';
      guessButton.style.display = 'none';
      nextButton.style.display = 'inline';
      question.innerHTML = '<h4>WRONG!!<h4>';
      container.style.border = '180px groove #ff0000';
      }
      option[2].onclick = function() {
      groceries.src = 'pineapple_man.gif';
      groceries.style.marginTop = '0px';
      guessButton.style.display = 'none';
      nextButton.style.display = 'inline';
      question.innerHTML = '<h4>WRONG!!<h4>';
      container.style.border = '180px groove #ff0000';
      } 
     }
    }
    break;
        
    case 11:
    groceries.src= fruitImage12.src;
    groceries.style.width = "800px";
    groceries.style.height = "750px";
    question.innerHTML = "..name ?";
           
    if (currentlyPlaying && isClicked(guessButton)) {
      guessButton.onclick = false;
      document.getElementById('option_l');
      guessButton.innerHTML = option_l.innerHTML;         
      
      if (box12.src === fruitImage12.src) {
        guessFruit();
      } else {
      option[2].onclick = function() {
      groceries.src = 'banana_man.gif';
      groceries.style.marginTop = '0px';
      guessButton.style.display = 'none';
      nextButton.style.display = 'inline';
      question.innerHTML = '<h3>RIGHT!!</h3>';
      container.style.border = '180px ridge lime';
      nodeList_mainSection[11].style.border = '25px solid lime';
      document.getElementById('_Watermelon').src = fruitImage12.src;
      gameOver();
      }  
      option[1].onclick = function() {
      groceries.src = 'pineapple_man.gif';
      groceries.style.marginTop = '0px';
      guessButton.style.display = 'none';
      nextButton.style.display = 'inline';
      question.innerHTML = '<h4>WRONG!!<h4>';
      container.style.border = '180px groove #ff0000';
      }
      option[3].onclick = function() {
      groceries.src = 'pineapple_man.gif';
      groceries.style.marginTop = '0px';
      guessButton.style.display = 'none';
      nextButton.style.display = 'inline';
      question.innerHTML = '<h4>WRONG!!<h4>';
      container.style.border = '180px groove #ff0000';
      } 
     }
    }
    break;
            
    case 12:
    groceries.src = fruitImage13.src;
    groceries.style.width = "800px";
    groceries.style.height = "750px";
    question.innerHTML = "..name ?";  
            
    if (currentlyPlaying && isClicked(guessButton)) {
      guessButton.onclick = false;
      document.getElementById('option_m');
      guessButton.innerHTML = option_m.innerHTML;     
    
      if (box13.src === fruitImage13.src) {
        guessFruit();
      } else {
      option[1].onclick = function() {
      groceries.src = 'banana_man.gif';
      groceries.style.marginTop = '0px';
      guessButton.style.display = 'none';
      nextButton.style.display = 'inline';
      question.innerHTML = '<h3>RIGHT!!</h3>';
      container.style.border = '180px ridge lime';
      nodeList_mainSection[12].style.border = '25px solid lime';
      document.getElementById('_Peanuts').src = fruitImage13.src;
      gameOver();
      }
      option[2].onclick = function() {
      groceries.src = 'pineapple_man.gif';
      groceries.style.marginTop = '0px';
      guessButton.style.display = 'none';
      nextButton.style.display = 'inline';
      question.innerHTML = '<h4>WRONG!!<h4>';
      container.style.border = '180px groove #ff0000';
      }
      option[3].onclick = function() {
      groceries.src = 'pineapple_man.gif';
      groceries.style.marginTop = '0px';
      guessButton.style.display = 'none';
      nextButton.style.display = 'inline';
      question.innerHTML = '<h4>WRONG!!<h4>';
      container.style.border = '180px groove #ff0000';
      }
     }
    }
    break;
        
    case 13:
    groceries.src = fruitImage14.src;
    groceries.style.width = "800px";
    groceries.style.height = "750px";
    question.innerHTML = "..name ?"; 
        
    if (currentlyPlaying && isClicked(guessButton)) {
      guessButton.onclick = false;
      document.getElementById('option_n');
      guessButton.innerHTML = option_n.innerHTML;     
       
      if (box14.src === fruitImage14.src) {
        guessFruit();
      } else {
      option[2].onclick = function() {
      groceries.src = 'banana_man.gif';
      groceries.style.marginTop = '0px';
      guessButton.style.display = 'none';
      nextButton.style.display = 'inline';
      question.innerHTML = '<h3>RIGHT!!</h3>';
      container.style.border = '180px ridge lime';
      nodeList_mainSection[13].style.border = '25px solid lime';
      document.getElementById('_Aubergine').src = fruitImage14.src;
      gameOver();
      }  
      option[1].onclick = function() {
      groceries.src = 'pineapple_man.gif';
      groceries.style.marginTop = '0px';
      guessButton.style.display = 'none';
      nextButton.style.display = 'inline';
      question.innerHTML = '<h4>WRONG!!<h4>';
      container.style.border = '180px groove #ff0000';
      }
      option[3].onclick = function() {
      groceries.src = 'pineapple_man.gif';
      groceries.style.marginTop = '0px';
      guessButton.style.display = 'none';
      nextButton.style.display = 'inline';
      question.innerHTML = '<h4>WRONG!!<h4>';
      container.style.border = '180px groove #ff0000';
      } 
     }
    }       
    break;
          
      case 14:
      groceries.src = fruitImage15.src;
      groceries.style.width = "800px";
      groceries.style.height = "750px";
      question.innerHTML = "..name ?"; 
          
      if (currentlyPlaying && isClicked(guessButton)) {
        guessButton.onclick = false;
        document.getElementById('option_o');
        guessButton.innerHTML = option_o.innerHTML;     
          
        if (box15.src === fruitImage15.src) {
          guessFruit();
        } else {
        option[3].onclick = function() {
        groceries.src = 'banana_man.gif';
        groceries.style.marginTop = '0px';
        guessButton.style.display = 'none';
        nextButton.style.display = 'inline';
        question.innerHTML = '<h3>RIGHT!!</h3>';
        container.style.border = '180px ridge lime';
        nodeList_mainSection[14].style.border = '25px solid lime';
        document.getElementById('_Pepper').src = fruitImage15.src;
        gameOver();
        }
        option[1].onclick = function() {
        groceries.src = 'pineapple_man.gif';
        groceries.style.marginTop = '0px';
        guessButton.style.display = 'none';
        nextButton.style.display = 'inline';
        question.innerHTML = '<h4>WRONG!!<h4>';
        container.style.border = '180px groove #ff0000';
        }
        option[2].onclick = function() {
        groceries.src = 'pineapple_man.gif';
        groceries.style.marginTop = '0px';
        guessButton.style.display = 'none';
        nextButton.style.display = 'inline';
        question.innerHTML = '<h4>WRONG!!<h4>';
        container.style.border = '180px groove #ff0000';
        } 
       }
      }
      break;
     
      case 15:
      groceries.src = fruitImage16.src;
      groceries.style.width = "800px";
      groceries.style.height = "750px";
      question.innerHTML = "..name ?"; 
          
      if (currentlyPlaying && isClicked(guessButton)) {
        guessButton.onclick = false;
        document.getElementById('option_p');
        guessButton.innerHTML = option_p.innerHTML;       
          
        if (box16.src === fruitImage16.src) {
          guessFruit();
        } else {
        option[1].onclick = function() {
        groceries.src = 'banana_man.gif';
        groceries.style.marginTop = '0px';
        guessButton.style.display = 'none';
        nextButton.style.display = 'inline';
        question.innerHTML = '<h3>RIGHT!!</h3>';
        container.style.border = '180px ridge lime';
        nodeList_mainSection[15].style.border = '25px solid lime';
        document.getElementById('_Sweetcorn').src = fruitImage16.src;
        gameOver();
        }
        option[2].onclick = function() {
        groceries.src = 'pineapple_man.gif';
        groceries.style.marginTop = '0px';
        guessButton.style.display = 'none';
        nextButton.style.display = 'inline';
        question.innerHTML = '<h4>WRONG!!<h4>';
        container.style.border = '180px groove #ff0000';
        } 
        option[3].onclick = function() {
        groceries.src = 'pineapple_man.gif';
        groceries.style.marginTop = '0px';
        guessButton.style.display = 'none';
        nextButton.style.display = 'inline';
        question.innerHTML = '<h4>WRONG!!<h4>';
        container.style.border = '180px groove #ff0000';
        }  
       }
      }
  }
        guessButton.style.border = 'none';
        groceries.style.marginTop = '100px';
        guessButton.style.boxShadow = 'none';
        guessButton.style.background = 'none';
  }


  nextButton.onclick = function() {
    question.innerHTML = "Below are a mix of vegetables and fruits..<br> Can you name all of the fruits ?";
    groceries.src = 'groceries.png';
    groceries.style.width = '1100px';
    groceries.style.height = '900px';
    groceries.style.marginTop = '-90px';
    groceries.style.marginBottom = '0px';
    container.style.border = "180px ridge yellow";  
    nextButton.style.display = 'none';
    guessButton.style.color = 'white';
    guessButton.style.background = 'black';
    guessButton.style.display = 'inline';
    guessButton.innerHTML = 'guess';
    guessButton.style.border = 'solid white 10px';
      
    nodeList_mainSection.forEach(function(nodeList) {
      nodeList.style.border = '25px ridge white';  
    })
  
  guessButton.onclick = function() { 
    guessFruit();
  }
}

  
function gameOver() {
  if (box1.src === fruitImage1.src && box2.src === fruitImage2.src && box3.src === fruitImage3.src && box4.src === fruitImage4.src && box5.src === fruitImage5.src && box6.src === fruitImage6.src && box7.src === fruitImage7.src && box8.src === fruitImage8.src && box9.src === fruitImage9.src && box10.src === fruitImage10.src && box11.src === fruitImage11.src && box12.src === fruitImage12.src && box13.src === fruitImage13.src && box14.src === fruitImage14.src && box15.src === fruitImage15.src && box16.src === fruitImage16.src) {
      
  container.style.border = "180px ridge lime";  
  guessButton.style.display = 'none';
  nextButton.innerHTML = 'To play more games you\'ll need to create an account.<br> Go to "my account" in the navigation menu. Once logged in, click on the "games" tab';
  nextButton.style.fontSize = "60px";
  nextButton.style.backgroundColor = 'khaki';
  nextButton.style.border = '20px ridge whitesmoke';
  nextButton.style.color = 'black';
  question.style.display = 'none';
  groceries.style.marginTop = "10px";
  groceries.src = 'aubergine_man.gif';
//groceries.style.visibility = 'hidden';
//navContainer.style.backgroundImage = 'url(.gif)';
  document.querySelector('body').style.backgroundImage = 'url(test.gif)';
  document.querySelector('#site-name').innerHTML = 'AWESOME !!!'; 
  }
}







    
    
    
    
    
    
    
    
    
    
    
    
    