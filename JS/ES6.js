$_$wp(1);
const $_$wvd1 = $_$w(1, 0), myFunc = function () {
        $_$wf(1);
        const myVar = ($_$w(1, 1), 'value');
        return $_$w(1, 2), myVar;
    };
$_$w(1, 3), myFunc();
$_$w(1, 4), $_$tracer.log(myFunc(), 'myFunc()', 1, 4);
const $_$wvd6 = $_$w(1, 5), myFunc2 = () => {
        $_$wf(1);
        const myVar = ($_$w(1, 6), 'value');
        return $_$w(1, 7), myVar;
    };
$_$w(1, 8), myFunc2();
$_$w(1, 9), $_$tracer.log(myFunc(), 'myFunc()', 1, 9);
const $_$wvd11 = $_$w(1, 10), myFunc3 = () => {
        $_$wf(1);
        return $_$w(1, 11), 'value';
    };
$_$w(1, 12), myFunc3();
$_$w(1, 13), $_$tracer.log(myFunc2(), 'myFunc2()', 1, 13);
var $_$wvd15 = $_$w(1, 14), myConcat = function (arr1, arr2) {
        'use strict';
        $_$wf(1);
        return $_$w(1, 15), arr1.concat(arr2);
    };
$_$w(1, 16), myConcat([
    1,
    2
], [
    3,
    4,
    5
]);
const $_$wvd18 = $_$w(1, 17), myConcat1 = (arr1, arr2) => {
        $_$wf(1);
        return $_$w(1, 18), arr1.concat(arr2);
    };
$_$w(1, 19), myConcat1([
    1,
    2
], [
    3,
    4,
    5
]);
$_$w(1, 20), $_$tracer.log(myConcat1([
    1,
    2
], [
    3,
    4,
    5
]), 'myConcat1([\n    1,\n    2\n], [\n    3,\n   ...', 1, 20);
const AVG_TEMPERATURES = ($_$w(1, 21), {
    today: 77.5,
    tomorrow: 79
});
function getTempOfTmrw(avgTemperatures) {
    'use strict';
    $_$wf(1);
    $_$w(1, 22), $_$tracer.log(avgTemperatures.tomorrow, 'avgTemperatures.tomorrow', 1, 22);
    const {tomorrow: tempOfTomorrow} = ($_$w(1, 23), avgTemperatures);
    return $_$w(1, 24), tempOfTomorrow;
}
$_$w(1, 25), $_$tracer.log(getTempOfTmrw(AVG_TEMPERATURES), 'getTempOfTmrw(AVG_TEMPERATURES)', 1, 25);
const LOCAL_FORECAST = ($_$w(1, 26), {
    today: {
        min: 72,
        max: 83
    },
    tomorrow: {
        min: 73.3,
        max: 84.6
    }
});
function getMaxOfTmrw(forecast) {
    'use strict';
    $_$wf(1);
    const {
        tomorrow: {max: maxOfTomorrow}
    } = ($_$w(1, 27), forecast);
    return $_$w(1, 28), maxOfTomorrow;
}
$_$w(1, 29), $_$tracer.log(getMaxOfTmrw(LOCAL_FORECAST), 'getMaxOfTmrw(LOCAL_FORECAST)', 1, 29);
let a = ($_$w(1, 30), 8), b = 6;
$_$w(1, 31), function () {
    $_$wf(1);
    $_$w(1, 32), [b, a] = [
        a,
        b
    ];
}();
$_$w(1, 33), (() => {
    $_$wf(1);
    $_$w(1, 34), [b, a] = [
        a,
        b
    ];
})();
$_$w(1, 35), $_$tracer.log(a, 'a', 1, 35);
const result = ($_$w(1, 36), {
    success: [
        'max-length',
        'no-amd',
        'prefer-arrow-functions'
    ],
    failure: [
        'no-var',
        'var-on-top',
        'linebreak'
    ],
    skipped: [
        'id-blacklist',
        'no-dup-keys'
    ]
});
function makeList(arr) {
    'use strict';
    $_$wf(1);
    const resultDisplayArray = ($_$w(1, 37), [`  makeList(result.failure) should return:
    <li class="text-warning">${ result.failure[0] }</li>,
    <li class="text-warning">${ result.failure[1] }</li>, 
    <li class="text-warning">${ result.failure[2] }</li>`]);
    return $_$w(1, 38), resultDisplayArray;
}
const resultDisplayArray = ($_$w(1, 39), makeList(result.failure));
$_$w(1, 40), $_$tracer.log('.: resultDisplayArray', resultDisplayArray, '', 1, 40);
$_$wpe(1);