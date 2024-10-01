function divideAndConquerSum(a) {
    return getSums(a,0,a.length());
}
function getSums(a,low, high) {
    const third = Math.floor((high-low)/3);
    const secondthird = low + third;
    const thirdthird = secondthird + third;

    const sumfirstThird = getSums(a, low, third);
    const sumsecondThird = getSums(a,third, secondthird);
    const sumthirdThird = getSums(a,secondthird,thirdthird);

    return (sumfirstThird + sumsecondThird + sumthirdThird);
}
