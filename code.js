function divideAndConquerSum(a) {
    return getSums(a,0,a.length);
}
function getSums(a,low, high) {
    console.log("running");
    //gone through the whole array
    if(high - low <= 0) {
        return 0;
    }
    //just return, no more sums, reached array of length one.
    if(high == low) {
        return a[low];
    }

    //high - low makes sure we stay within the bounds, divide by three to make thirds.
    const third = Math.floor((high-low)/3);
    const secondthird = low + third;
    const thirdthird = secondthird + third;

    //recursively calls each third to get the thirds and sums of each of the others.
    const sumfirstThird = getSums(a, low, third + 1);
    const sumsecondThird = getSums(a,third, secondthird + 1);
    const sumthirdThird = getSums(a,secondthird,thirdthird);

    //returns the sum of each third.
    return (sumfirstThird + sumsecondThird + sumthirdThird);
}
