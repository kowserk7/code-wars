function isNice(arr){
    if (arr.length === 0) return false;
    return arr.every(item => arr.includes(item + 1) || arr.includes(item - 1))
    }