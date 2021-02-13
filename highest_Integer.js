// function to find the highest single-digit integer in an array of N integers

var A = [ 11, 3, -2, 1, 17, -5, 23]

function solution(A) {    
    let targetArray = [];
    var i;
    for (i = 0; i < A.length; ++i) {
        if( A[i] > -10 && A[i]<10){
            targetArray.push(A[i])
        }
    }
    var m = targetArray[0];
    for ( i=0; i<=targetArray.length; i++ ) {
        if (targetArray[i] > m) {
            m = targetArray[i];
        }
    }
    
    return m;

}
