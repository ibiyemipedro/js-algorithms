// Giving a string of letters, return true if there are no repeated character.

// Quadratic time: Take the first letter, if it appears after running indexOf, then we move on to the next letter. Repeat until you find one that returns -1 with indexOf, and return.

// Linear time: 

// build an object from eah letter in the string. Ask question as the object is being built, is this key already here? if so, set the value to false. If not, set the value as a tuple, in the tuple = [index, true]. Then run a for loop comparing to letters on the alphabet

function noRepeat(str) {
    let arr = str.split('');
    let obj = {};
    let answer = false;
    let minIdex = arr.length;

    arr.forEach((letter, index) => {
        if(!obj[letter]) {
            obj[letter] = [index, true]
        } 
        else if(obj[letter]) {
            obj[letter] = false
        }
    });

    // loop through each item and
    
    for (let key in obj) {
        if(obj[key]){
            if(obj[key][0] < minIdex){
                answer = key;
                minIdex = obj[key][0]
            }
        }
    }

    console.log(answer)
}


noRepeat('uduxxxxb')