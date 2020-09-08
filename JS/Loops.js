$_$wp(1);
var ourArray = ($_$w(1, 0), []);
var i = ($_$w(1, 1), 0);
while ($_$w(1, 2), i < 10) {
    $_$w(1, 3), ourArray.push(i);
    $_$w(1, 4), i++;
}
$_$w(1, 5), $_$wv(1, 5, '1,5', 'i', i, '$_$ne', 1, 0, '');
for (var i = 0; $_$w(1, 6), i < 10; i++) {
    $_$w(1, 7), i++;
}
$_$w(1, 8), $_$wv(1, 8, '1,8', 'i', i, '$_$ne', 1, 0, '');
function multiplyAll(arr) {
    $_$wf(1);
    var product = ($_$w(1, 9), 1);
    for (var i = 0; $_$w(1, 10), i < arr.length; i++) {
        for (var j = 0; $_$w(1, 11), j < arr[i].length; j++) {
            $_$w(1, 12), product *= arr[i][j];
        }
    }
    return $_$w(1, 13), product;
}
$_$w(1, 14), multiplyAll([
    [
        1,
        2
    ],
    [
        3,
        4
    ],
    [
        5,
        6,
        7
    ]
]);
var myArray = ($_$w(1, 15), []);
var i = ($_$w(1, 16), 10);
do {
    $_$w(1, 18), myArray.push(i);
    $_$w(1, 19), i++;
} while ($_$w(1, 17), i < 5);
$_$wpe(1);