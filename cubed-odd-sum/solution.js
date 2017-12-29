function cubeOdd(arr) {
    for (var i = 0; i < arr.length; i++) {
        if (typeof arr[i] !== 'number') {
            return undefined;
        }
    }
    let cube = arr.map(function (number) {
        return number * number * number;
    });

    let odd = cube.filter(function (number) {
        return number % 2 !== 0;
    });

    var total = odd.reduce(
        (sum, number) => sum + number,
        0
    );
    return total;
}