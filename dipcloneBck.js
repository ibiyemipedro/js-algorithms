console.time("speed test");

// const cloneObject = object => {
//     // This is the object that will store the original object's properties
//     let duplicateObject = {};
//     for (let key in object) {
//         // This copies each property from the original object to the copy object. 
//         duplicateObject[key] = JSON.stringify(object[key]);
//     }
//     return duplicateObject;
//   };

// var result = cloneObject(testObject);

const testObject = {name: "Paddy", address: {town: "Lerum", country: "Sweden"}, datee: Date.now()}; 
let clonedObject =JSON.parse(JSON.stringify(testObject));

console.log(clonedObject);

console.timeEnd("speed test"); 

