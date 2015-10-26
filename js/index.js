$(document).ready(function(){

	//identify the variables
	$('.readmore').click(showReadMoreContent);
	$('.readless').click(hideReadMoreContent);
	$('.learnmore').click(hideLearnMoreContent);


	//provide the action
	function showReadMoreContent(){
		$('#show-this-on-click').slideDown(2000);
		$('.readless, .hide').show();
		$('.readmore').hide();
	}

	function hideReadMoreContent() {
		$('#show-this-on-click, .readless').hide();
		$('.readmore').show();
	}

	function hideLearnMoreContent(){
		$('#learnmoretext').slideDown(2000);
	}
});
