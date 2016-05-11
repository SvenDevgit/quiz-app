$( document ).ready(function() {
    console.log( "ready!" );  

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
{ 	questionNumber : 0,
	question : 'What is the name of the current number one in the ATP ranking?',
	options : ['Andy Murray','Novak Djokovic','Roger Federer'],
	correctOption : 1,
	fact: 'Novak Djokovic holds the number one spot for a lot of weeks'
},
{ 	questionNumber : 1,
	question : 'What is the name of the oldest Grand Slam tournament?',
	options : ['Wimbledon','US Open','French Open'],
	correctOption : 1,
	fact: 'The first edition of Wimbledon was played in 1878'
},
];
console.log(questionArray[1].options[1]);

/*add event to the button click*/

  $('#btn1').on('click',function(){
     var inVal = $("input[type='radio'][name='question']:checked").val();
   	 console.log(inVal); 
     evalAnswer(inVal);
     console.log('redrawQuestion' + redrawQuestion());
    
   });

  function evalAnswer(userOption){
     if (parseInt(userOption,10) === questionObject.correctOption){
       console.log('the correct answer was given');	
     }   
     else {
     	console.log('te wrong answer was given');
     }
  }
  
  function redrawQuestion(){

  	/*console.log($("input[type='radio'][name='question'][value='0']").parent().text());*/
  	console.log($("label[id='1']").text());
  	$("label[id='1']").text('Jimmy Connors');
  	$("label[id='2']").text(questionObject.options[1]);

  }
  
/*end of document ready*/
});    