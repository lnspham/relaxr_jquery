$(document).ready(function(){

	/*identify the variables*/
	$('.readmore').click(showReadMoreContent);
	$('.readless').click(hideReadMoreContent);
	$('.learnmore').click(hideLearnMoreContent);


	/*provide the actions*/

	//Read More action
	function showReadMoreContent(event){
		event.preventDefault();
		$('#show-this-on-click').slideDown(2000);
		$('.readless').show();
		$('.readmore').hide();
	}

	function hideReadMoreContent(event) {
		event.preventDefault();
		$('.readless, p#show-this-on-click').slideUp(2000);
		$('.readless').hide();
		$('.readmore').show();
	}

	//Learn More action
	function hideLearnMoreContent(event){
		event.preventDefault();
		$('#learnmoretext').slideDown(2000);
		$('.learnmore').hide();
	}

});
