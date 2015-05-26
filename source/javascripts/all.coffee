$ ->

	mathAreaToggles = $ '.math-area .glyphicon-plus-sign'

	mathAreaToggles.click ->
		$(this).toggleClass('glyphicon-plus-sign').toggleClass('glyphicon-minus-sign')

	return