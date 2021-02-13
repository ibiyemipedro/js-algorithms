// function (array, sum)
// find the tw indices that add up to the sum

function twoSum (arr, sum) {
    // create an empty object
    const numObj = {};
    for (let eachNum in arr) {
        const otherNum = sum - arr[eachNum]

        // check if num exists in numObj
        if (otherNum in numObj) {
            console.log(`${otherNum} + ${arr[eachNum]} = ${sum}`) 
            return
        }

        // save in the object numObj
        numObj[arr[eachNum]] = eachNum
    }
    console.log('sum not found')
}

function palindrome (str) {
    // get length of string
    let len = str.length

    // get floor of the division
    let mid = Math.floor(len/2)

    for (let i = 0; i < mid; i++) {
        // check each edge letter if equal
        if (str[i] !== str[len -1 -i]) {
            return false
        }
    }
    return true
}

// function takes string and returns longest palindrome substring

let longestPalindrome = (str) => {
    // get length of string
    let length = str.length

    // Helper function to Get the center of the palindrome
    let centeredPalindrome = (left, right) => { 
        while (left >= 0 && right < length && str[left] === str[right]) {
            // expand outward
            left --;
            right ++;
        }
        return str.slice(left + 1, right)
    }

    for (let i = 0; i < length; i++) {
        // odd Palindrome
        let oddPal = centeredPalindrome(i, i+1);
        // even Palindrome
        let evenPal = centeredPalindrome(i, i);

        if (oddPal.length > 1) {
            console.log(oddPal)
        }
        if (evenPal.length > 1) {
            console.log(evenPal)
        }

    }
}



// two arrays of numbers 
// find the intersection (get all common numbers in two arrays)

let arrayIntersection = (arr1, arr2 ) => {
    // create an empty object

    let tempObj = {};

    let result = []

    // use for loop to traverse element of one array and find it in the other
    for ( let i = 0; i < arr1.length; i++ ) {
        tempObj[arr1[i]] = true;
    }
    for (let j = 0; j < arr2.length; j++ ) {
        if (tempObj[arr2[j]]) {
            result.push(arr2[j])
        }
    }
    return result;
}