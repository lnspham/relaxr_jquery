$(document).ready(function(){

	/*identify the variables*/
	$('.readmore').click(showReadMoreContent);
	$('.readless').click(hideReadMoreContent);
	$('.learnmore').click(hideLearnMoreContent);


	/*provide the actions*/

	//Read More action
	function showReadMoreContent(){
		$('#show-this-on-click').slideDown(2000);
		$('.readless, .hide').show();
		$('.readmore').hide();
	}

	function hideReadMoreContent() {
		$('#show-this-on-click').slideUp(2000);
		$('#show-this-on-click, .readless').hide();
		$('.readmore').show();
	}

	//Learn More action
	function hideLearnMoreContent(){
		$('#learnmoretext').slideDown(2000);
		$('.learnmore').hide();
	}

	//Form action. 
	//event.preventDafault(): prevent from following the URL.
	    $("a").click(function(event){
        event.preventDefault();
    });

});
