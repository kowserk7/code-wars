function insertDash(num) {
    var string = '';
        var num = '' + num;
        for ( var i = 0; i < num.length; i++) {
            string += num[i];
            if (i+1 < num.length) {
                if (num[i] % 2 !== 0 && num[i+1] % 2 !==0) {
                    string += '-'
                }
            }
        }
        return string;
    }