// read data from a txt file
const fs = require('fs') 
fs.readFile('demo.txt', (err, data) => { 
    if (err) throw err; 
  
    console.log(data.toString()); 
}) 