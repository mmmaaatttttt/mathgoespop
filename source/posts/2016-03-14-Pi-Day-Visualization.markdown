---
title: Why is &pi; Irrational?
date: '2016-03-14'
custom_js: 
  - desmos
  - scrubber
  - 2016_03_pi_day
custom_css: 
  - scrubber
  - 2016_03_pi_day
---
I've written about my (not super positive) feelings towards _&pi;_ day in the past. I don't want to rehash those arguments; if you're curious, you can read some of my thoughts <a href="/2009/03/pi-day.html" target="_blank">here</a>, <a href="/2011/03/pi-day-post-mortem.html" target="_blank">here</a>, and <a href="/2012/03/pi-day-vs-half-tau-day.html" target="_blank">here</a>.

At the same time, I feel less curmudgeonly these days, and if your idea of a good time is memorizing a sequence of numbers and reciting them or putting them to music, more power to you. 

But if we're going to let _&pi;_ steal the limelight from other deserving <a href="https://en.wikipedia.org/wiki/E_(mathematical_constant)" target="_blank">irrational</a> <a href="https://en.wikipedia.org/wiki/Euler%E2%80%93Mascheroni_constant" target="_blank">numbers</a>, let's at least explore something more interesting than its decimal expansion. Here, I'd like to provide a little visual aid for exploring a proof of the irrationality of _&pi;_.

_&pi;_'s irrationality undoubtedly contributes to some of its popularity: after all, every rational number's decimal expansion eventually terminates or repeats. This is why nobody is impressed if you can recite the decimal expansion for 1/3 = 0.33333333... from memory. The decimal expansion of _&pi;_, on the other hand, lacks this sort of simple pattern.

Just because you don't find a repeating pattern in the first 100, 1000, or even million digits, however, doesn't mean that such a pattern can't exist. So looking at the decimal expansion of _&pi;_ out to an arbitrary number of digits won't suffice to prove its irrationality. For a valid proof, we need a more systematic approach.

There are <a href="https://en.wikipedia.org/wiki/Proof_that_%CF%80_is_irrational" target="_blank">many proofs</a> that _&pi;_ is irrational, though none of them is elementary. At the very least, you need to know a bit of calculus. But even without the machinery that calculus provides, we can sketch a proof that hits on the main ideas.

Let's follow the argument accredited to mathematician Ivan Niven. Niven's proof proceeds by contradiction: let's assume that _&pi;_ IS rational, and follow that train of logic until it crashes head-first into an impossible conclusion.

Arguably the most confusing part of this proof is its starting point. If _&pi;_ is rational, then it can be written as a fraction _a_/_b_ with _a_ and _b_ integers. The confusing part is the following leap: for any positive integer _n_, let's consider the (polynomial) function

<div class="formula text-center"></div>

As if that didn't seem like enough of a non-sequiter, Niven next asks us to consider the area under the curve from 0 to _&pi;_ of _f_(_x_) &times; sin(_x_). 

Now we're at a point where a little technology can help. Here's a graph with the area Niven is referring to. You can adjust _n_ and _b_; when you change _b_, the value of _a_ will automatically update to give you the best approximation to _&pi;_.

<div class="graph-wrapper">
  <div id="graph"></div>
</div>

<div class="row">
  <div class="col-xs-6">
    <div class="input-group">
      <span class="input-group-addon"><em>b</em></span>
      <input type="number" class="form-control" id="b-val" min="1" step="1" placeholder="enter a value for b here.">
    </div>
  </div>
  <div class="col-xs-3 text-center">
    <em>a</em> = <span id="a-val"></span>
  </div>
  <div class="col-xs-3 text-center">
    <em>&pi;</em> &approx; <span id="p-val"></span>
  </div>
</div>
<div class="row flexrow">
  <div class="col-xs-6">
    <div id="n-slider" class="text-center">
      <span id="n-val"></span>
    </div>
  </div>
  <div class="col-xs-3">
    <span class="rect">Rectangle</span>
    <div class="switch">
      <input id="upper-bound-toggle" class="toggle upper-bound-toggle" type="checkbox">
      <label for="upper-bound-toggle"></label>
    </div>
  </div>
  <div class="col-xs-3">
    <button id="normalize" class="btn btn-default">Normalize View</button>
  </div>
</div>

So, why do we care about this area? Well, as you may have noticed, as you increase _n_, the area increases up to a point, but then begins to decrease, and will ultimately approach 0 as _n_ tends towards infinity. This is because the factorial in the denominator of _f_ grows more quickly than the numerator. 

Put another way, since _f_(_x_) attains its maximum at the midpoint between 0 and _a_/_b_, we can compare the area under the curve to the area of the green rectangle on the graph, whose height is equal to _f_'s maximum. From this picture, you can see that the are under the curve must be less than 

<div class="formula text-center"></div>,

and this (eventually) goes to 0 as _n_ goes to infinity. This is the first key ingredient in the proof.

Okay. The area goes to zero. So what? Well, if you calculate these areas by hand for small values of _n_, you may notice something nice: the areas are always integers. To prove this fact for general _n_ requires some calculus, but this is the second key ingredient. I'll spare you the details (here's where you'll need some calculus), but if you get stuck trying to verify it for yourself, Wikipedia has <a href="https://en.wikipedia.org/wiki/Proof_that_%CF%80_is_irrational#Niven.27s_proof" target="_blank">all the details</a>. So does this nice article from <a href="http://mindyourdecisions.com/blog/2013/11/08/proving-pi-is-irrational-a-step-by-step-guide-to-a-simple-proof/" target="_blank">Mind Your Decisions</a>.

In any event, combine these two ingredients, and we're basically done! On the one hand, the area under the curve is always a _positive_ integer, because _f_(_x_) and sin(_x_) are both positive from 0 to _&pi;_. In other words, the area is always at least 1. But on the other hand, the area tends to 0, so for _n_ sufficiently large, the area must be less than 1. No number can be both greater than and less than 1. Contradition: obtained!

I'm not saying this is a particularly intuitive proof. The jumping-off point isn't at all obvious. But sometimes this is how mathematics proceeds: one obtains a true result before understanding the intuition behind the truth. If you can follow along with this proof, I'd encourage you to start poking at it to try to develop your intuition. For example, why look at the area under _f_(_x_) &times; sin(_x_), rather than just the area under _f_(_x_)? What's the special property that binds &pi; and sin(_x_) together? 

Of course, &pi; is more than just irrational: it turns out to be _transcendental_, an even stronger condition than irrationality. But that discussion will have to wait for another (pi) day.

<!-- INTEGER ADDENDUM -->