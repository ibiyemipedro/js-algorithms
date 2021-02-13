// find the sum of the highest consecutive K integers and L integers in an array A where the content of K does not intersect with L

function solution(A, K, L) {
    if (A.length < K){
        return console.error('Cant perform operation');
    } else {
        const [D, maxvalue] = consecAny(A, K);
        if (D.length < L){ 
            return '-1';
        } else {
            const [C, maxvalue1] = consecAny(D, L);
            var max_consecutive_pair = maxvalue + maxvalue1;
            return max_consecutive_pair;
        }

    }
}

// find the sum of the highest consecutive K integers in an array A 
function consecAny(A, K) {
    var maxvalue = 0;
    for (i = 0; i < A.length; ++i) {
        var calMax = 0;
        for (var j = i; j < i + K; j++) {
            calMax += A[j];
        }
        if (calMax > maxvalue) {
            var targetArray = [];
            var maxvalue = calMax;
            var firstIndex = i;

            for (let m = i; m < i + K; m++) {
                targetArray.push(A[m]);
            }
        }

    }
    A.splice(firstIndex, K);
    return [A, maxvalue]
}

solution([6, 3, 9, 5, 6, 5], 3, 2)

