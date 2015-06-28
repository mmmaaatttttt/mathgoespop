$ ->

	# $("#left-sidebar").height $("#main-row").height() 
	# $("#gradient").height $("#main-row").height() 

	mathAreaToggles = $ '.math-area .glyphicon-plus-sign'

	mathAreaToggles.click ->
		$(this).toggleClass('glyphicon-plus-sign').toggleClass('glyphicon-minus-sign')
		$(this).parent().siblings().slideToggle {duration: 200}

	return