// Prebuilt exaple objects

const dtObject  = {
    type: "Fiat", 
    model: "500", 
    color: "white",
};
    
const dtArray = [
    "Saab",
    "Volvo",
    "BMW",
]; 
    
const dtMap = new Map([
    ["Apples", 500],
    ["Bananas", 300],
    ["Oranges", 200],
]);

const dtSet = new Set([
    1, 2, 3
]);    
    

    
function dtIterator (input) {
    
    
    // If Array
    if (Array.isArray(input)) {
        for (let value of input) {
            console.log('Array value: ', value);
        }; 
        }
    
    // If Object
    if (typeof input === "object" && !Array.isArray(input) && input !== null && !(input instanceof Map)) { 
        const keys = Object.values(input)
        for (const values of keys) {
            console.log('Object value: ',values)
        };
    }

    // If Map object. Size will return false if it is an object. 
    // Todo, perhaps is more legant to check if objects prototype has the size prpoerty
    if (input instanceof Map && input.size) {  
        input.forEach((value, key) => {
            console.log(`Map key:  ${key}, Map value: ${value}.`);
        });
    }

    if (input instanceof Set && input.size) {  
        input.forEach(value => {
            console.log(`Set value: ${value}.`);
            });
    }

    if(input === undefined || null) {
        console.log(`The indata ${input} could not be iterated, dtIterator can handle Array, Object and Json`); 
    }

    
};








    
  