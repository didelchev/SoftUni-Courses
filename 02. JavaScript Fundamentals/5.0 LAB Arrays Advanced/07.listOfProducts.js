function listOfProducts(array){
    let sortedProducts = array.sort()
    for(let i = 1; i<=array.length; i++){
        let product = array[i - 1]
        console.log(`${i}.${product}`);
    }
    
    
}

listOfProducts(['Potatoes', 'Tomatoes', 'Onions','Apples'] )
listOfProducts(['Watermelon', 'Banana', 'Apples'])