function array_max_consecutive_sum(A, K) {
  let result = 0;
  let temp_sum = 0;
  var targetArray = [];

  for (var i = 0; i < K - 1; i++) {
    // targetArray.push(A[i]);
    temp_sum += A[i];
  }
  for (var i = K - 1; i < A.length; i++) {
    temp_sum += A[i];
    if (temp_sum > result) {
      result = temp_sum;
    }
    temp_sum -= A[i - K + 1];
  }
  return result;
}

console.log(array_max_consecutive_sum([1, 2, 3, 14, 5], 2))
console.log(array_max_consecutive_sum([2, 3, 5, 1, 6], 3))
console.log(array_max_consecutive_sum([9, 3, 5, 1, 7], 2))
