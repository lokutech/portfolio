$_$wp(1);
var collection = ($_$w(1, 0), {
    '2548': {
        album: 'Slippery When Wet',
        artist: 'Bon Jovi',
        ss: [
            'Let It Rock',
            'You Give Love a Bad Name'
        ]
    },
    '2468': {
        album: '1999',
        artist: 'Prince',
        tracks: [
            '1999',
            'Little Red Corvette'
        ]
    },
    '1245': {
        artist: 'Robert Palmer',
        tracks: []
    },
    '5439': { album: 'ABBA Gold' }
});
var collectionCopy = ($_$w(1, 1), JSON.parse(JSON.stringify(collection)));
function updateRecords(id, prop, value) {
    $_$wf(1);
    if ($_$w(1, 2), value == '') {
        $_$w(1, 3), delete collection[id][prop];
    } else if ($_$w(1, 4), ($_$w(1, 5), prop == 'tracks') && ($_$w(1, 6), value != '')) {
        if ($_$w(1, 7), collection[id].hasOwnProperty(prop) == false) {
            $_$w(1, 8), collection[id][prop] = [];
            $_$w(1, 9), collection[id][prop].push(value);
        } else {
            $_$w(1, 10), collection[id][prop].push(value);
        }
    } else {
        $_$w(1, 11), collection[id][prop] = value;
    }
    return $_$w(1, 12), collection;
}
$_$w(1, 13), updateRecords(5439, 'tracks', 'Take a Chance on Me');
$_$wpe(1);