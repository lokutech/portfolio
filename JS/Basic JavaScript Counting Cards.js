$_$wp(1);
var count = ($_$w(1, 0), 0);
function cc(card) {
    $_$wf(1);
    if ($_$w(1, 1), card < 7) {
        $_$w(1, 2), count += 1;
    } else if ($_$w(1, 3), ($_$w(1, 4), ($_$w(1, 6), ($_$w(1, 8), ($_$w(1, 10), card == 10) || ($_$w(1, 11), card == 'J')) || ($_$w(1, 9), card == 'Q')) || ($_$w(1, 7), card == 'K')) || ($_$w(1, 5), card == 'A')) {
        $_$w(1, 12), count -= 1;
    }
    if ($_$w(1, 13), count < 1) {
        return $_$w(1, 14), count + ' Hold';
    } else if ($_$w(1, 15), count > 0) {
        return $_$w(1, 16), count + ' Bet';
    }
}
$_$w(1, 17), cc(2);
$_$w(1, 18), cc(3);
$_$w(1, 19), cc(7);
$_$w(1, 20), cc('K');
$_$w(1, 21), cc('A');
function cc(card) {
    $_$wf(1);
    switch ($_$w(1, 22), card) {
    case 2:
    case 3:
    case 4:
    case 5:
    case 6: {
            $_$w(1, 23), count++;
            {
                $_$w(1, 24);
                break;
            }
        }
    case 10:
    case 'J':
    case 'Q':
    case 'K':
    case 'A': {
            $_$w(1, 25), count--;
            {
                $_$w(1, 26);
                break;
            }
        }
    }
    if ($_$w(1, 27), count > 0) {
        return $_$w(1, 28), count + ' Bet';
    } else {
        return $_$w(1, 29), count + ' Hold';
    }
}
$_$wpe(1);