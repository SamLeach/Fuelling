$(document).ready(function() {
	$('#fullpage').fullpage({
		sectionsColor: ['#f2f2f2', '#4BBFC3', '#7BAABE', 'whitesmoke', '#ccddff']
	});

	$(".dropdown-menu li a").click(function(){
	    $(".caret:first-child").text($(this).text());
	     $(".caret:first-child").val($(this).text());
  	});

	var fixSection0Position = function(){
		$('#section0')
		.children('div')
		.first()
		.css('vertical-align','baseline');	

		$('#section7')
		.children('div')
		.first()
		.css('vertical-align','baseline');
	}

	fixSection0Position();
});