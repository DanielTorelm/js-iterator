 const dtObject  = {
        type:"Fiat", 
        model:"500", 
        color:"white"
    };
    
    const dtCars = [
        "Saab",
        "Volvo",
        "BMW"
    ]; 
    
     const dtFruit = [
        "Banana",
        "Kiwi",
        "Orange"
    ]; 
    

    const dtJson = {"result":true, "count":42};
   

   // skicka in funktion till iteratorn som callback så den kan utföra operationer på det som ska itereras

// yeast, javascript test vertyg
    
    function dTIterator (input) {
         if (Array.isArray(input)) {
            for (let value of input) {
                console.log('value array: ', value);
            }; 
         }
        else if (JSON.stringify(input)){
            console.log('json'); 
                 }
         else if (typeof input === "object" && !Array.isArray(input) && input !== null) {
            
                const keys = Object.values(input)
                for (const values of keys) {
                    console.log('value object: ',values)
                };
        };    
        
    };
    
   // console.log(dTIterator(json));









    
  