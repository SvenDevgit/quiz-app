$( document ).ready(function() {
    console.log( "ready!" );  

/*globals*/
var gQuestionNumber = 0;

var questionObject = {
	questionNumber : 0,
	question : 'What is the name of the current number one in the ATP ranking?',
	options : ['Andy Murray','Novak Djokovic','Roger Federer'],
	correctOption : 1,
	fact: 'Novak Djokovic holds the number one spot for a lot of weeks'
};
console.log(questionObject.options[1]);
/*create an array of objects to store the questions*/
var questionArray = [
{ questionNumber : 0,
	question : 'What is the name of the current number one in the ATP ranking?',
	options : ['Andy Murray','Novak Djokovic','Roger Federer'],
	correctOption : 1,
	info: 'Novak Djokovic holds the number one spot for a lot of weeks'},
{ questionNumber : 1,
	question : 'What is the name of the oldest Grand Slam tournament?',
	options : ['Wimbledon','US Open','French Open'],
	correctOption : 1,
	info: 'The first edition of Wimbledon was played in 1878'},
{ questionNumber : 2,
  question : 'Which player won most Grand Slam tournaments?',
  options : ['Steffy Graf','Serena Williams','Madelaine Court'],
  correctOption : 3,
  info: 'Madeline Court won a whopping 25 Grand Slam titles'},  
];
console.log(questionArray[1].options[1]);

/*add event to the button click*/

  $('#btn1').on('click',function(){
     var inVal = $("input[type='radio'][name='question']:checked").val();
   	 console.log(inVal); 
     var backGroundInfo = null;
     if (evalAnswer(inVal)){
       console.log('correct answer was given');
       backGroundInfo = 'Your answer is correct!';
     } 
     else {
       backGroundInfo = 'Your answer is incorrect.'
     }
     backGroundInfo = backGroundInfo + questionArray[gQuestionNumber].info;
     alert(backGroundInfo);
     drawQuestion();
    
   });

  function evalAnswer(userOption){
     /*if (parseInt(userOption,10) === questionObject.correctOption){
       console.log('the correct answer was given');	
     }   
     else {
     	console.log('te wrong answer was given');
     }
     */
     return parseInt(userOption,10) === questionObject.correctOption;
  }
  
  function drawQuestion(){
    gQuestionNumber =+ 1;
    console.log('gQuestionNumber' + gQuestionNumber);
    questionArray[gQuestionNumber].question
    /* what do i want to redraw?*/
    $('.question p').text(questionArray[gQuestionNumber].question);

  	/*console.log($("input[type='radio'][name='question'][value='0']").parent().text());*/
  	console.log($("label[id='1']").text());
  	/*$("label[id='0']").text('Jimmy Connors');
  	$("label[id='1']").text(questionObject.options[1]);
    $("label[id='2']").text(questionArray[gQuestionNumber].options[2]);
    */
    console.log('length ' + questionArray[gQuestionNumber].options.length);
    for ( var i=0; i < questionArray[gQuestionNumber].options.length; i++ ){
      console.log('in the for loop');
      $("label[id='" + i + "']").text(questionArray[gQuestionNumber].options[i]);
    }

  }
  
/*end of document ready*/
});    









