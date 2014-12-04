
$(document).ready(function(){
	console.log('Hello');

	var guessing = 0;
	var randNum = getRandom();
	guessBtn();
	


	console.log(randNum);
	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

  /* --- reset the game --- */
  	$(".new").click(function(){
 			window.location.href = "http://milansatan.github.io/hot-cold-game/";
  	});
	  

  /*--- Determine the number to the random number --- */
  function guessBtn(){
  	$('#guessButton').click(function(event){
  		event.preventDefault();
  		var guessNum = +$('#userGuess').val();

  	/* --- listing the guessed numbers --- */	
			function listGuess(){
				$('#guessList').append('<li>'+ guessNum + '</li>');
			}

  		if(guessNum != randNum){
  				guessing++;
  		
		  			if( (randNum-guessNum) > 50 ){
		  				$('#feedback').text('Chilly');
		  				$('#userGuess').val('');
		  				listGuess()
		  			} else if( (randNum-guessNum)>30 && (randNum-guessNum)<50){
										$('#feedback').text('Cold');
										$('#userGuess').val('');
										listGuess()
							}else if( (randNum-guessNum)>20 && (randNum-guessNum)<30){
											$('#feedback').text('Getting Warmer');
											$('#userGuess').val('');
											listGuess()
								}else if( (randNum-guessNum)>5 && (randNum-guessNum)<20){
												$('#feedback').text('Real Hot');
												$('#userGuess').val('');
												listGuess()
								}else{
												$('#feedback').text('Very Hot');
												$('#userGuess').val('');
												listGuess()
								}
  					}else{
  						guessing++;
  						$('#feedback').text('Great Guess, You got it right.');
  						$('#userGuess').val('');
  					}
  			$('#count').text(guessing);
  	});
  }	

  /* --- randomize number --- */	
  	function getRandom(){
  		var max = 101;
  		return Math.floor(Math.random() * max);
  	}

		function incrementCount(){
			guessing += 1;
		}

});


