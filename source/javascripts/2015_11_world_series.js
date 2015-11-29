;$(function() {

var $n1 = $("#n1");
var $n2 = $("#n2");
var $s1 = $("#s1");
var $s2 = $("#s2");
var $pval = $("#pval");
var $sig = $("#sig");
var $minVals = $("#minVals");
var $ws = $("#ws");
var $lcs = $("#lcs");
var $wslcs = $("#wslcs");
var $reset = $("#ws-reset");

$ws.on('click', function() {
	$s1.val(18);
	$s2.val(18);
	$n1.val(60);
	$n2.val(44);
	update();
});

$lcs.on('click', function() {
	$s1.val(5);
	$s2.val(10);
	$n1.val(31);
	$n2.val(29);
	update();
});

$wslcs.on('click', function() {
	$s1.val(23);
	$s2.val(28);
	$n1.val(91);
	$n2.val(73);
	update();
});

$reset.on('click', function() {
	$s1.val(0);
	$s2.val(0);
	$n1.val(0);
	$n2.val(0);
	update();
})

$n1.on('keyup blur change', function() {
	if (parseFloat($s1.val()) > parseFloat($n1.val())) {
		$s1.val($n1.val());
	}
	update();
});

$s1.on('keyup blur change', function() {
	if (parseFloat($s1.val()) > parseFloat($n1.val())) {
		$n1.val($s1.val());
	}
	update();
});

$n2.on('keyup blur change', function() {
	if (parseFloat($s2.val()) > parseFloat($n2.val())) {
		$s2.val($n2.val());
	}
	update();
});

$s2.on('keyup blur change', function() {
	if (parseFloat($s2.val()) > parseFloat($n2.val())) {
		$n2.val($s2.val());
	}
	update();
});

function update() {
	$pval.text(calculatePValue($s1.val(), $n1.val(), $s2.val(), $n2.val()));
	checkWarning($s1.val(), $n1.val(), $s2.val(), $n2.val());
	$sig.text(checkSignificance($s1.val(), $n1.val(), $s2.val(), $n2.val()));
}

function calculatePValue(s1, n1, s2, n2) {
	var s1f = parseFloat(s1);
	var s2f = parseFloat(s2);
	var n1f = parseFloat(n1);
	var n2f = parseFloat(n2);
  var p = ( s1f + s2f ) / ( n1f + n2f );
  var prop1 = s1f / n1f;
  var prop2 = s2f / n2f;
  var standard_error = Math.sqrt(p * ( 1 - p ) * ( 1 / n1f + 1 / n2f ) );
  var z_score = -Math.abs( ( prop1 - prop2 ) / standard_error );
  var finalVal = ( 1 + erf( z_score / Math.sqrt(2) ) ) / 2;
  if (isNaN(finalVal) || checkSizes(s1, n1, s2, n2)) {
  	return "--"
  } else {
  	return finalVal.toFixed(4);
  }
}

function checkSizes(s1, n1, s2, n2) {
	var s1f = parseFloat(s1);
	var s2f = parseFloat(s2);
	var n1f = parseFloat(n1);
	var n2f = parseFloat(n2);
	return (s1f < 5 || n1f - s1f < 5 || s2f < 5 || n2f - s2f < 5);
}

function checkWarning(s1, n1, s2, n2) {
	if (checkSizes(s1, n1, s2, n2)) {
		$minVals.show();
	} else {
		$minVals.hide();
	}
}

function checkSignificance(s1, n1, s2, n2) {
	var pval = parseFloat(calculatePValue(s1, n1, s2, n2));
	if (isNaN(pval)) {
		return "--"
	} else if (pval < 0.05) {
		return "YES!"
	} else {
		return "Nope..."
	}
}

function erf(x) {
  // constants
  var a1 =  0.254829592;
  var a2 = -0.284496736;
  var a3 =  1.421413741;
  var a4 = -1.453152027;
  var a5 =  1.061405429;
  var p  =  0.3275911;
  var sign = 1;
  if (x < 0) sign = -1;
  x = Math.abs(x);
  var t = 1.0/(1.0 + p*x);
  var y = 1.0 - (((((a5*t + a4)*t) + a3)*t + a2)*t + a1)*t*Math.exp(-x*x);
  return sign*y;
}

});	