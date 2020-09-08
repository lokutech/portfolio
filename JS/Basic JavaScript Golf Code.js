$_$wp(1);
var names = ($_$w(1, 0), [
    'Hole-in-one!',
    'Eagle',
    'Birdie',
    'Par',
    'Bogey',
    'Double Bogey',
    'Go Home!'
]);
function golfScore(par, strokes) {
    $_$wf(1);
    if ($_$w(1, 1), strokes == 1) {
        return $_$w(1, 2), names[0];
    } else if ($_$w(1, 3), par - strokes >= 2) {
        return $_$w(1, 4), names[1];
    } else if ($_$w(1, 5), par - strokes == 1) {
        return $_$w(1, 6), names[2];
    } else if ($_$w(1, 7), par == strokes) {
        return $_$w(1, 8), names[3];
    } else if ($_$w(1, 9), par - strokes == -1) {
        return $_$w(1, 10), names[4];
    } else if ($_$w(1, 11), par - strokes == -2) {
        return $_$w(1, 12), names[5];
    } else if ($_$w(1, 13), par - strokes < -2) {
        return $_$w(1, 14), names[6];
    }
}
$_$w(1, 15), x = golfScore(4, 1);
$_$w(1, 16), $_$tracer.log(x, 'x', 1, 16);
$_$wpe(1);