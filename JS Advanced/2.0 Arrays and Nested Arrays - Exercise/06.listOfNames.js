function listOfNames(array){

   let sortedArr= array.sort((a,b)=>a.localeCompare(b));
    
        for(let i = 0; i<array.length; i++){
            console.log(`${i + 1}.${sortedArr[i]}`);
        }
        
    
    
}

listOfNames(["John", "Bob", "Christina", "Ema"])