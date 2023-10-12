function repeatString(str, count){
    let newString = "";
    for (let i = 0; i < count; i++){
        newString +=str
    }
    return newString


}

console.log(repeatString("abc", 3));