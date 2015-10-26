$(document).ready(function(){

	/*identify the variables*/
	$('.readmore').click(showReadMoreContent);
	$('.readless').click(hideReadMoreContent);
	$('.learnmore').click(hideLearnMoreContent);


	/*provide the actions*/

	//Read More action
	function showReadMoreContent(){
		$('#show-this-on-click').slideDown(2000);
		$('.readless').show();
		$('.readmore').hide();
	}

	function hideReadMoreContent() {
		$('.readless, p#show-this-on-click').slideUp(2000);
		$('.readless').hide();
		$('.readmore').show();
	}

	//Learn More action
	function hideLearnMoreContent(){
		$('#learnmoretext').slideDown(2000);
		$('.learnmore').hide();
	}
 
	//event.preventDafault(): prevent from following the URL. action
	//Sign Up Button, Read More and Learn more
	    $('.button, .blue, .readmore, .readless, .learnmore').click(function(event){
        event.preventDefault();
    });

});
