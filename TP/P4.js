function countFrequency(arr) {
    return arr.reduce((acc, val) => {
        acc[val] = (acc[val] || 0) + 1;
        return acc;
    }, {});
}
input = ['a', 'b', 'c', 'a', 'b', 'a', 'c', 'd'];
result = countFrequency(input);
console.log(result);
