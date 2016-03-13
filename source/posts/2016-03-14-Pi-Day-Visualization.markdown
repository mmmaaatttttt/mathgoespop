---
title: Pi Day Visualization
date: '2016-03-14'
custom_js: 
  - desmos
  - scrubber
  - 2016_03_pi_day
custom_css: 
  - scrubber
  - 2016_03_pi_day
---
I've written about my (not super positive) feelings towards &pi; day in the past. I don't want to rehash those arguments; if you're curious, you can read some of my thoughts <a href="/2009/03/pi-day.html" target="_blank">here</a>, <a href="/2011/03/pi-day-post-mortem.html" target="_blank">here</a>, and <a href="/2012/03/pi-day-vs-half-tau-day.html" target="_blank">here</a>.

At the same time, I feel less curmudgeonly these days, and if your idea of a good time is memorizing a sequence of numbers and reciting them or putting them to music, more power to you. And hey, I can totally get behind the idea of eating pie. 

But if we're going to let &pi; steal the limelight from other deserving <a href="https://en.wikipedia.org/wiki/E_(mathematical_constant)" target="_blank">irrational</a> <a href="https://en.wikipedia.org/wiki/Euler%E2%80%93Mascheroni_constant" target="_blank">numbers</a>, let's at least explore something more interesting than its decimal expansion. Here, I'd like to provide a little visual aid for exploring a proof of the irrationality of &pi;.

&pi;'s irrationality undoubtedly contributes to some of its popularity: after all, every rational number's decimal expansion eventually terminates or repeats. This is why nobody is impressed if you can recite the decimal expansion for 1/3 = 0.33333333... from memory. The decimal expansion of &pi;, on the other hand, lacks this sort of simple pattern.

Just because you don't find a repeating pattern in the first 100, 1000, or even million digits, however, doesn't mean that such a pattern can't exist. So looking at the decimal expansion of &pi; out to an arbitrary number of digits won't suffice to prove its irrationality. For a valid proof, we need a more systematic approach.

There are <a href="https://en.wikipedia.org/wiki/Proof_that_%CF%80_is_irrational" target="_blank">many proofs</a> that &pi; is irrational, though none of them is elementary. At the very least, you need to know a bit of calculus. But even without the machinery that calculus provides, we can at least sketch a proof that hits on the main ideas.

Let's follow the argument accredited to mathematician Ivan Niven. Niven's proof proceeds by contradiction: let's assume that &pi; IS rational, and follow that train of logic until it crashes head-first into an impossible conclusion.

Arguably the most confusing part of this proof is its starting point. If &pi; is rational, then it can be written as a fraction _a_/_b_ with _a_ and _b_ integers. Next, we need to make a leap. For any positive integer _n_, let's consider the (polynomial) function

