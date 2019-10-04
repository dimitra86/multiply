module.exports = function multiply(first, second) {
    // your solution
    let a = first;
    let b = second;

    return (BigInt(a) * BigInt(b)).toString();
}