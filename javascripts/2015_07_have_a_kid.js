$(function(){var t=function(t,e){var r,n=[],e=e||t;for(loopMax=Math.min(Math.floor(Math.sqrt(t)),e),r=1;r<=loopMax;r+=1)t%r===0&&(n.push(r),t/r!==r&&e>=t/r&&n.push(t/r));return n.sort(function(t,e){return t-e}),n},e=$("#divisorCalculate"),r=$("#divisorAnswers"),n=$("#numberErrorText"),o=$("#numberCheck"),i=$("#maxErrorText"),l=$("#maxCheck"),a=$("#reset"),s="<span class='glyphicon glyphicon-ok-circle'></span>",h="<span class='glyphicon glyphicon-remove-circle'></span>",c=function(t){return t%1===0},u=function(){""===$("#numberInput").val().trim()||n.html().length>0||i.html().length>0?e.addClass("disabled"):e.removeClass("disabled")};u();var m=function(t,e,r,n){""===t.trim()?(e.html(""),r.html("")):!c(t)||1>t?(e.html(h),r.html("Oops! The "+n+" you choose must be a whole number: 1, 2, 3, etc.")):t>1e12?(e.html(h),r.html("Uh oh. To keep your computer from exploding, keep your "+n+" smaller than 1 trillion, please.")):(e.html(s),r.html(""))};$("#numberInput").on("keyup blur change",function(){var t=$(this).val().replace(/,/g,"");m(t,o,n,"number"),u()}),$("#maxInput").on("keyup blur change",function(){var t=$(this).val().replace(/,/g,"");$("#optionsDivisors2").trigger("click"),m(t,l,i,"divisor bound"),u()}),$("#optionsDivisors1").click(function(){$("#maxInput").val("")}),e.click(function(){if(0===i.html().length&&0===n.html().length){var t,e=$("#numberInput").val().replace(/,/g,"");t=$("#optionsDivisors2").is(":checked")?$("#maxInput").val():e,p(e,t)}}),a.click(function(){$("#optionsDivisors1").trigger("click"),$("#numberInput").val(""),i.html(""),l.html(""),n.html(""),o.html(""),u(),r.text("")});var p=function(e,n){var o=t(e,n),i=o.length;1===e?r.text("1 only has one divisor: 1."):parseFloat(n)>=parseFloat(e)||""==n.trim()?r.text("There are "+i+" divisors of "+e+". They are: "+o.toString().split(",").join(", ")+"."):1===i?r.text("There is 1 divisor of "+e+" that is less than "+n+": "+o[0]+"."):r.text("There are "+i+" divisors of "+e+" that are less than "+n+". They are: "+o.toString().split(",").join(", ")+".")}});