# dom-timer v0.1.2

> Dom as timer

This library depends on jQuery and [gameloop](https://github.com/kt3k/gameloop).

# Usage

```html
<script src="path/to/jquery.js"></script>
<script src="path/to/gameloop.js"></script>
<script src="path/to/dom-timer.js"></script>

<script>

$(function () {
    'use strict';

    $('p').on('tick.dom-timer', function (event, time) {

        $(this).text(time);

    });

    $('p').on('stop.dom-timer', function () {

        alert('stopped!');

    });

});

</script>

<p class="dom-timer" data-time="3000"></p>

```

The above `p` tag emits `tick.dom-timer` event 30 times per second with remaing time (in milliseconds) as the 2nd parameter and `stop.dom-timer` event after 3 seconds (3000 milliseconds).


## Specify FPS

```html
<p class="dom-timer" data-time="3000" data-fps="60"></p>
```

The above emits `tick.dom-timer` 60 times per seconds.


## Specify the time of the end

```html
<p class="dom-timer" data-time="15000000000" data-fps="60"></p>
```

The above emits `tick.dom-timer` 60 times per seconds with the remaining milliseconds towards the unixtime `1500000000000` (milliseconds) and stops at `1500000000000` (Fri, 14 Jul 2017 02:40:00 GMT). If you specify both `data-time` and `data-end-at`, then `data-end-at` is used and `data-time` is ignored.
