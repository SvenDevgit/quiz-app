$( document ).ready(function() {
    console.log( "ready!" );  

/*globals*/
var gQuestionNumber = 0;

/*create an array of objects to store the questions*/
var questionArray = [
{ questionNumber : 0,
	question : 'What is the name of the current number one in the ATP ranking?',
	options : ['Andy Murray','Novak Djokovic','Roger Federer'],
	correctOption : 1,
	info: 'Currently the world number 1 is Novak Djokocic.\nApart from him 24 other players held the number one position.'},
{ questionNumber : 1,
	question : 'What is the name of the oldest Grand Slam tournament?',
	options : ['Wimbledon','US Open','French Open'],
	correctOption : 0,
	info: 'Wimbledon is the oldest, founded in 1877, followed by the US in 1881, the French in 1891, and the Australian in 1905'},
{ questionNumber : 2,
  question : 'Which player won most Grand Slam tournaments?',
  options : ['Steffi Graf','Serena Williams','Margaret Court'],
  correctOption : 2,
  info: 'Margaret Court won a whopping 24 Grand Slam titles, Steffie Graf 22 and Serena Williams 21.'},  
{ questionNumber : 3,
  question : 'Which male player spend most weeks on the ATP number 1 spot?',
  options : ['Ivan Lendl','Jimmy Connors','Roger Federer'],
  correctOption : 2,
  info: 'Roger Federer held on to the number 1 spot for 302 weeks'}, 
{ questionNumber : 4,
  question : 'Which city hosts two ATP tournaments with 1000 or more points?',
  options : ['New York','Paris','London'],
  correctOption : 1,
  info: 'Paris Hosts the French Open and the Paris Masters'}, 
{ questionNumber : 5,
  question : 'In which country was Ivan Lendl born?',
  options : ['USA','Czechoslovakia','Switzerland'],
  correctOption : 1,
  info: 'He was born in Czechoslovakia. He became a U.S. citizen on July 7, 1992.'}, 
{ questionNumber : 6,
  question : 'In which year did John McEnroe win his last Wimbledon title?? ',
  options : ['1983','1984','1985'],
  correctOption : 1,
  info: 'He won his last and third Wimbledon in 1984 by beating Jimmy Connors.'},
{ questionNumber : 7,
  question : 'How many sets does a player have to win to win a match on a ATP Masters tournament? ',
  options : [ 2, 3, 5],
  correctOption : 0,
  info: 'The ATP Masters use the best of three system, so the player who wins two sets wins tha match.'}
];

console.log(questionArray[1].options[1]);

var gameState = {
  correct: 0,
  wrong: 0
}; 

/*add event to the button click*/

  $('#btn1').on('click',function(){
     var inVal = $("input[type='radio'][name='question']:checked").val();
     var pointToChange;
   	 console.log(inVal); 
     var backGroundInfo = null;
     if (evalAnswer(inVal)){
       console.log('correct answer was given');
       backGroundInfo = 'Your answer is correct!\n';
       pointToChange = gameState.correct;
       gameState.correct = keepGameScore(pointToChange);
       console.log(gameState.correct);
       drawScore(gameState.correct, 'correct');
     } 
     else {
       backGroundInfo = 'Your answer is incorrect.\n'
       pointToChange = gameState.wrong;
       gameState.wrong = keepGameScore(pointToChange);
       console.log(gameState.wrong);
       drawScore(gameState.wrong, 'wrong');
     }
     
     backGroundInfo = backGroundInfo + questionArray[gQuestionNumber].info;
     alert(backGroundInfo);
     if ( gameState.correct != 'Game' && gameState.wrong != 'Game' ){
       drawQuestion();
     }
     else if ( gameState.correct == 'Game' || gameState.wrong == 'Game' ){
      $("input[type='radio'][name='question']:checked").prop('checked', false);
     } 
    

   });

  $('.game-message').on('click', function(){
     newGame();
     /*this means a new game so set all to initial*/
  });

  function evalAnswer(userOption){
     return parseInt(userOption,10) === questionArray[gQuestionNumber].correctOption;
  }
  
  function drawQuestion(){
    gQuestionNumber += 1;
    questionArray[gQuestionNumber].question
    /* what do i want to redraw?*/
    $('.question .cnt').text(questionArray[gQuestionNumber].question);
    $("input[type='radio'][name='question']:checked").prop('checked', false);
    console.log('length ' + questionArray[gQuestionNumber].options.length);
    for ( var i=0; i < questionArray[gQuestionNumber].options.length; i++ ){
      console.log('in the for loop');
      $("label[id='" + i + "']").text(questionArray[gQuestionNumber].options[i]);
    }
  }

  function keepGameScore(point){
       switch (point){ case 0 : point = 15; break;
                              case 15 :  point = 30; break;
                              case 30 : point = 40; break;
                              case 40 : point =  'Game'; break;
                              default : point = 10;
                            }
       return point;
    }

    function drawScore(point, score){
       $('#' + score).text(point);   
       var gameMessage;
       if (score == 'correct'){
         gameMessage = '<p>Congratulations, You won the game!<br>';
       }
      else {
        gameMessage = '<p>Unfortunately You lost the game.<br>';
      }  
      gameMessage = gameMessage + 'Do you want to try again?<br>If so click this message</p>';
       if (point == 'Game'){
          $('.game-message').css('background-color','white')
                            .html(gameMessage)
                            .css('height','12rem')
                            .css('top','13rem')
                            .css('font-size','2rem')
                            .css('text-align','center');
          $('#0, #1, #2, #btn1').prop('disabled', true);
       }      
    }

    function newGame(){
      gQuestionNumber = -1;
      gameState.correct = 0;
      gameState.wrong = 0;
      drawQuestion();
      drawScore(0, 'correct');
      drawScore(0, 'wrong');
      $('.game-message').css('background-color','#008000')
                        .text('')
                        .css('height','4rem')
                        .css('top','12rem');
      $('#0, #1, #2, #btn1').prop('disabled', false);

    };
  
/*end of document ready*/
});    









