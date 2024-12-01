function rotateArray(arr, n){
    let lastElement;
    for(let i = 0; i<n; i++){
       lastElement = arr.pop()
       arr.unshift(lastElement)

        
        
    }
    console.log(arr.join(" "));
}

rotateArray(['1', 
'2', 
'3', 
'4'], 
2)