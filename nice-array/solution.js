function isNice(arr){
    (arr.length === 0) ? arrIsNice = false: arrIsNice = true;
        for (i=0; i < arr.length; i++) {
            if (!arr.includes(arr[i] + 1) && !arr.includes(arr[i] - 1)) {
            return false;
            }
        }
    return arrIsNice;
    }