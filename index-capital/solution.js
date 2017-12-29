<<<<<<< HEAD
function capitalize(s, arr) {
    var s = s.split('');
    for (var i = 0; i < arr.length; i++) {
        if (s[arr[i]]) {
            s[arr[i]] = s[arr[i]].toUpperCase();
        }
    }
    s = s.join('')
    return s;
=======
function capitalize(s, arr) {
    var s = s.split('');
    for (var i = 0; i < arr.length; i++) {
        if (s[arr[i]]) {
            s[arr[i]] = s[arr[i]].toUpperCase();
        }
    }
    s = s.join('')
    return s;
>>>>>>> f7258569f9a4fa9a5b07c2cef984617e7b6a46be
};