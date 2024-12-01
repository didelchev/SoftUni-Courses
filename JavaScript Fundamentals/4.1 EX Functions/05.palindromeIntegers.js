function isPalindrome(array){
    for (let num of array){
        let palindrome = checkIsPalindrome(num)
        console.log(palindrome);
    }
    
    function checkIsPalindrome(num){
        let numStr = String(num);
        let reversedNumStr = '';
        
        for(let i = numStr.length - 1; i>= 0; i--){
            let curChar = numStr[i];
            reversedNumStr += curChar
        }
        let palindrome = numStr == reversedNumStr
        return palindrome

    }  
}

isPalindrome([123,323,421,121]);