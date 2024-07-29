$(document).ready(function()
{
	$("#a1").mouseenter(function()
	{
		$("#a1").css("color","#6927ff")
	})
	$("#a1").mouseleave(function()
	{
		$("#a1").css("color","black")
	})

	$("#a2").mouseenter(function()
	{
		$("#a2").css("color","#6927ff")
	})
	$("#a2").mouseleave(function()
	{
		$("#a2").css("color","black")
	})

	$("#a3").mouseenter(function()
	{
		$("#a3").css("color","#6927ff")
	})
	$("#a3").mouseleave(function()
	{
		$("#a3").css("color","black")
	})

	
	$("#a4").mouseenter(function()
	{
		$("#a4").css("color","#6927ff")
	})
	$("#a4").mouseleave(function()
	{
		$("#a4").css("color","black")
	})

	
	$("#a5").mouseenter(function()
	{
		$("#a5").css("color","#6927ff")
	})
	$("#a5").mouseleave(function()
	{
		$("#a5").css("color","black")
	})

	$("#bt1").mouseenter(function()
	{
		$("#bt1").css("background-color","white")
	})
	$("#bt1").mouseenter(function()
	{
		$("#bt1").css("color","#6927ff")
	})
	
	$("#bt1").mouseenter(function()
	{
		$("#bt1").css("border","1px solid #6927ff")
	})
	$("#bt1").mouseleave(function()
	{
		$("#bt1").css("background-color","#6927ff")
	})
	$("#bt1").mouseleave(function()
	{
		$("#bt1").css("color","white")
	})


	$("#bt2").mouseenter(function()
	{
		$("#bt2").css("background-color","white")
	})
	$("#bt2").mouseenter(function()
	{
		$("#bt2").css("color","#6927ff")
	})
	
	$("#bt2").mouseenter(function()
	{
		$("#bt2").css("border","1px solid #6927ff")
	})
	$("#bt2").mouseleave(function()
	{
		$("#bt2").css("background-color","#6927ff")
	})
	$("#bt2").mouseleave(function()
	{
		$("#bt2").css("color","white")
	})

	
	$("#bt3").mouseenter(function()
	{
		$("#bt3").css("background-color","white")
	})
	$("#bt3").mouseenter(function()
	{
		$("#bt3").css("color","#6927ff")
	})
	
	$("#bt3").mouseenter(function()
	{
		$("#bt3").css("border","1px solid #6927ff")
	})
	$("#bt3").mouseleave(function()
	{
		$("#bt3").css("background-color","#6927ff")
	})
	$("#bt3").mouseleave(function()
	{
		$("#bt3").css("color","white")
	})

	
	$("#bt4").mouseenter(function()
	{
		$("#bt4").css("background-color","white")
	})
	$("#bt4").mouseenter(function()
	{
		$("#bt4").css("color","#6927ff")
	})
	
	$("#bt4").mouseenter(function()
	{
		$("#bt4").css("border","1px solid #6927ff")
	})
	$("#bt4").mouseleave(function()
	{
		$("#bt4").css("background-color","#6927ff")
	})
	$("#bt4").mouseleave(function()
	{
		$("#bt4").css("color","white")
	})

	
	$("#bt5").mouseenter(function()
	{
		$("#bt5").css("background-color","white")
	})
	$("#bt5").mouseenter(function()
	{
		$("#bt5").css("color","#6927ff")
	})
	
	$("#bt5").mouseenter(function()
	{
		$("#bt5").css("border","1px solid #6927ff")
	})
	$("#bt5").mouseleave(function()
	{
		$("#bt5").css("background-color","#6927ff")
	})
	$("#bt5").mouseleave(function()
	{
		$("#bt5").css("color","white")
	})
	
	$("#bt6").mouseenter(function()
	{
		$("#bt6").css("background-color","white")
	})
	$("#bt6").mouseenter(function()
	{
		$("#bt6").css("color","#6927ff")
	})
	
	$("#bt6").mouseenter(function()
	{
		$("#bt6").css("border","1px solid #6927ff")
	})
	$("#bt6").mouseleave(function()
	{
		$("#bt6").css("background-color","#6927ff")
	})
	$("#bt6").mouseleave(function()
	{
		$("#bt6").css("color","white")
	})
	$("#bt8").mouseenter(function()
	{
		$("#bt8").css("background-color","#38d39f")
	})
	
	$("#bt8").mouseleave(function()
	{
		$("#bt8").css("background-color","white")
	})
	$("#bt8").mouseenter(function()
	{
		$("#bt8").css("color","white")
	})
	
	$("#bt8").mouseleave(function()
	{
		$("#bt8").css("color","#6927ff")
	})
	
	$("#bt9").mouseenter(function()
	{
		$("#bt9").css("background-color","#38d39f")
	})
	$("#bt9").mouseleave(function()
	{
		$("#bt9").css("background-color","white")
	})
	$("#bt9").mouseenter(function()
	{
		$("#bt9").css("color","white")
	})
	
	$("#bt9").mouseleave(function()
	{
		$("#bt9").css("color","#6927ff")
	})
	
	$("#bt10").mouseenter(function()
	{
		$("#bt10").css("background-color","white")
	})
	$("#bt10").mouseenter(function()
	{
		$("#bt10").css("color","#6927ff")
	})
	
	$("#bt10").mouseenter(function()
	{
		$("#bt10").css("border","1px solid #6927ff")
	})
	$("#bt10").mouseleave(function()
	{
		$("#bt10").css("background-color","#6927ff")
	})
	$("#bt10").mouseleave(function()
	{
		$("#bt10").css("color","white")
	})
	
	$("#bt11").mouseenter(function()
	{
		$("#bt11").css("background-color","#421b9b")
	})
	
	$("#bt11").mouseleave(function()
	{
		$("#bt11").css("background-color","#6927ff")
	})
	$("#bt11").mouseenter(function()
	{
		$("#bt11").css("color","#6927ff")
	})
	$("#bt11").mouseleave(function()
	{
		$("#bt11").css("color","white")
	})
	
	$("#bt11").mouseenter(function()
	{
		$("#bt11").css("border","1px solid #6927ff")
	})
	$("#bt11").mouseleave(function()
	{
		$("#bt11").css("color","white")
	})
})

$(document).ready(function() {

	var counters = $(".count");
	var countersQuantity = counters.length;
	var counter = [];
  
	for (i = 0; i < countersQuantity; i++) {
	  counter[i] = parseInt(counters[i].innerHTML);
	}
  
	var count = function(start, value, id) {
	  var localStart = start;
	  setInterval(function() {
		if (localStart < value) {
		  localStart++;
		  counters[id].innerHTML = localStart;
		}
	  }, 0);
	}
  
	for (j = 0; j < countersQuantity; j++) {
	  count(0, counter[j], j);
	}
  })


jQuery(document).ready(function($){
	//set animation timing
	var animationDelay = 2500,
		//loading bar effect
		barAnimationDelay = 3800,
		barWaiting = barAnimationDelay - 3000, //3000 is the duration of the transition on the loading bar - set in the scss/css file
		//letters effect
		lettersDelay = 50,
		//type effect
		typeLettersDelay = 150,
		selectionDuration = 500,
		typeAnimationDelay = selectionDuration + 800,
		//clip effect 
		revealDuration = 600,
		revealAnimationDelay = 1500;
	
	initHeadline();
	

	function initHeadline() {
		//insert <i> element for each letter of a changing word
		singleLetters($('.cd-headline.letters').find('b'));
		//initialise headline animation
		animateHeadline($('.cd-headline'));
	}

	function singleLetters($words) {
		$words.each(function(){
			var word = $(this),
				letters = word.text().split(''),
				selected = word.hasClass('is-visible');
			for (i in letters) {
				if(word.parents('.rotate-2').length > 0) letters[i] = '<em>' + letters[i] + '</em>';
				letters[i] = (selected) ? '<i class="in">' + letters[i] + '</i>': '<i>' + letters[i] + '</i>';
			}
		    var newLetters = letters.join('');
		    word.html(newLetters).css('opacity', 1);
		});
	}

	function animateHeadline($headlines) {
		var duration = animationDelay;
		$headlines.each(function(){
			var headline = $(this);
			
			if(headline.hasClass('loading-bar')) {
				duration = barAnimationDelay;
				setTimeout(function(){ headline.find('.cd-words-wrapper').addClass('is-loading') }, barWaiting);
			} else if (headline.hasClass('clip')){
				var spanWrapper = headline.find('.cd-words-wrapper'),
					newWidth = spanWrapper.width() + 10
				spanWrapper.css('width', newWidth);
			} else if (!headline.hasClass('type') ) {
				//assign to .cd-words-wrapper the width of its longest word
				var words = headline.find('.cd-words-wrapper b'),
					width = 0;
				words.each(function(){
					var wordWidth = $(this).width();
				    if (wordWidth > width) width = wordWidth;
				});
				headline.find('.cd-words-wrapper').css('width', width);
			};

			//trigger animation
			setTimeout(function(){ hideWord( headline.find('.is-visible').eq(0) ) }, duration);
		});
	}

	function hideWord($word) {
		var nextWord = takeNext($word);
		
		if($word.parents('.cd-headline').hasClass('type')) {
			var parentSpan = $word.parent('.cd-words-wrapper');
			parentSpan.addClass('selected').removeClass('waiting');	
			setTimeout(function(){ 
				parentSpan.removeClass('selected'); 
				$word.removeClass('is-visible').addClass('is-hidden').children('i').removeClass('in').addClass('out');
			}, selectionDuration);
			setTimeout(function(){ showWord(nextWord, typeLettersDelay) }, typeAnimationDelay);
		
		} else if($word.parents('.cd-headline').hasClass('letters')) {
			var bool = ($word.children('i').length >= nextWord.children('i').length) ? true : false;
			hideLetter($word.find('i').eq(0), $word, bool, lettersDelay);
			showLetter(nextWord.find('i').eq(0), nextWord, bool, lettersDelay);

		}  else if($word.parents('.cd-headline').hasClass('clip')) {
			$word.parents('.cd-words-wrapper').animate({ width : '2px' }, revealDuration, function(){
				switchWord($word, nextWord);
				showWord(nextWord);
			});

		} else if ($word.parents('.cd-headline').hasClass('loading-bar')){
			$word.parents('.cd-words-wrapper').removeClass('is-loading');
			switchWord($word, nextWord);
			setTimeout(function(){ hideWord(nextWord) }, barAnimationDelay);
			setTimeout(function(){ $word.parents('.cd-words-wrapper').addClass('is-loading') }, barWaiting);

		} else {
			switchWord($word, nextWord);
			setTimeout(function(){ hideWord(nextWord) }, animationDelay);
		}
	}

	function showWord($word, $duration) {
		if($word.parents('.cd-headline').hasClass('type')) {
			showLetter($word.find('i').eq(0), $word, false, $duration);
			$word.addClass('is-visible').removeClass('is-hidden');

		}  else if($word.parents('.cd-headline').hasClass('clip')) {
			$word.parents('.cd-words-wrapper').animate({ 'width' : $word.width() + 10 }, revealDuration, function(){ 
				setTimeout(function(){ hideWord($word) }, revealAnimationDelay); 
			});
		}
	}

	function hideLetter($letter, $word, $bool, $duration) {
		$letter.removeClass('in').addClass('out');
		
		if(!$letter.is(':last-child')) {
		 	setTimeout(function(){ hideLetter($letter.next(), $word, $bool, $duration); }, $duration);  
		} else if($bool) { 
		 	setTimeout(function(){ hideWord(takeNext($word)) }, animationDelay);
		}

		if($letter.is(':last-child') && $('html').hasClass('no-csstransitions')) {
			var nextWord = takeNext($word);
			switchWord($word, nextWord);
		} 
	}

	function showLetter($letter, $word, $bool, $duration) {
		$letter.addClass('in').removeClass('out');
		
		if(!$letter.is(':last-child')) { 
			setTimeout(function(){ showLetter($letter.next(), $word, $bool, $duration); }, $duration); 
		} else { 
			if($word.parents('.cd-headline').hasClass('type')) { setTimeout(function(){ $word.parents('.cd-words-wrapper').addClass('waiting'); }, 200);}
			if(!$bool) { setTimeout(function(){ hideWord($word) }, animationDelay) }
		}
	}

	function takeNext($word) {
		return (!$word.is(':last-child')) ? $word.next() : $word.parent().children().eq(0);
	}

	function takePrev($word) {
		return (!$word.is(':first-child')) ? $word.prev() : $word.parent().children().last();
	}

	function switchWord($oldWord, $newWord) {
		$oldWord.removeClass('is-visible').addClass('is-hidden');
		$newWord.removeClass('is-hidden').addClass('is-visible');
	}
})



