50Lines
=======

Slideshow/slide-deck in *less than* 50 SLOC.

Sick and tired of slideshow frameworks with thousands of API methods and layers
of abstraction trickery? Try this **miniscule** <1KB (unminified, ~500B minified)
slideshow/slide-deck framework and move on with actually writing your slides.

![50Lines Source](http://cgiffard.com/github/50lines/screenshot.png)

Requires ES5. Yep, that image above is the entire sourcecode.

## Usage

Include the script in your page.

```html
<script type="text/javascript" src="slideshow.js"></script>
```

Mark up your slides.

```html
<slide>
<h1>Whatever I want goes here! Wow</h1>
</slide>
```

Add some classes to tell the browser what your slide should look like before,
during, and after it is the current slide.

```css
/* You'll do something more interesting than this, right? */
slide.past		{ display: none;	}
slide.present	{ display: block;	}
slide.future	{ display: none;	}
```

If you want, you can also style the rest of the page. The HTML element is given
a class of `slide<currentSlideNumber>` (eg. slide0, slide1) so you can style
anything based on what slide you're up to!

Use the arrow keys to control the presentation. Click to go full-screen.

**That's it. Have fun.**

## Example

For more inspiration, see a slide deck I used this on:
http://github.com/cgiffard/GAAD-Talk-2013.

## Licence

Copyright (c) 2013, Christopher Giffard.

All rights reserved.

Redistribution and use in source and binary forms, with or without modification, 
are permitted provided that the following conditions are met:

* Redistributions of source code must retain the above copyright notice, this
  list of conditions and the following disclaimer.
* Redistributions in binary form must reproduce the above copyright notice, this
  list of conditions and the following disclaimer in the documentation and/or
  other materials provided with the distribution.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR 
ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
(INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON
ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
(INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.