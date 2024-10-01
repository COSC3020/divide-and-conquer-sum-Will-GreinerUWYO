function divideAndConquerSum(a) {
    return getSums(a,0,a.length);
}
function getSums(a,low, high) {
    //gone through the whole array
    if(high - low <= 0) {
        return 0;
    }
    //just return, no more sums, reached array of length one.
    if(high - low == 1) {
        return a[low];
    }

    //high - low makes sure we stay within the bounds, divide by three to make thirds.
    const third = Math.floor((high-low)/3);
    const secondthird = low + third;
    const thirdthird = secondthird + third;

    //recursively calls each third to get the thirds and sums of each of the others.
    const sumfirstThird = getSums(a, low, secondthird);
    const sumsecondThird = getSums(a,secondthird, thirdthird);
    const sumthirdThird = getSums(a,thirdthird,high);

    //returns the sum of each third.
    return (sumfirstThird + sumsecondThird + sumthirdThird);
}
