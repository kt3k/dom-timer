

(function ($, gameloop) {
    'use strict';

    var CLASS = 'dom-timer';
    var CLASS_INIT = 'dom-timer-initialized';

    var SELECTOR = '.' + CLASS + ':not(.' + CLASS_INIT + ')';

    var INIT_EVENT = 'init.dom-timer';
    var TICK_EVENT = 'tick.dom-timer';
    var STOP_EVENT = 'stop.dom-timer';

    if (!$) {

        throw new Error('jQuery is required');

    }


    if (!gameloop) {

        throw new Error('gameloop is required: see https://github.com/kt3k/gameloop');

    }

    /**
     * Initialize all elements.
     */
    var init = function () {

        $(SELECTOR).each(function () {

            initOne(this);

        });

    };

    /**
     * Initializes an element.
     */
    var initOne = function (element) {

        var $el = $(element);

        $el.addClass(CLASS_INIT);

        var endAt = +$el.attr('data-end-at');

        if (!endAt) {

            var time = +$el.attr('data-time') || 180 * 1000;

            endAt = time + (+new Date());

        }

        var loop = gameloop(function () {

            var now = +new Date();

            if (now > endAt) {

                now = endAt;

            }

            $el.trigger(TICK_EVENT, [endAt - now]);

            if (now === endAt) {

                loop.stop();

                $el.trigger(STOP_EVENT);

            }

        });

        loop.setFPS(+$el.attr('data-fps') || 30);

        loop.start();

    };

    $(document).on(INIT_EVENT, init);

    $(function () {

        $(document).trigger(INIT_EVENT);

    });

}(window.jQuery, window.gameloop));
