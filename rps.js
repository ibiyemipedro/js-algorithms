// Function to tell the different permutation for a rock paper scissors game in different order
// REURSSIVE ALGO

rps = (rounds) => {
    let results = [];
    let possibilities = ['r', 'p', 's'];

    let play = (playedSoFar, rounds) => {
        if (rounds === 0){
            results.push(playedSoFar);
            return
        }
        for (let i = 0; i < possibilities.length; i++) {
            play(playedSoFar + possibilities[i], rounds -1);
            
        }
    }

    play('', rounds);
    console.log(results)

}

var recur = rps(2);
recur;