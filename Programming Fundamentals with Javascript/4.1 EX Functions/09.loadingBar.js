function loadingBar(num){
   if (num === 100){
    console.log("100% Complete!");
    console.log("[%%%%%%%%%%]");
   }else{
        let numDivided = num /10;
        let remainingBlocks = 10 - numDivided
        let loadBar = "%".repeat(numDivided) + ".".repeat(remainingBlocks)

   }
   console.log(`${num}% [${loadBar}]`);
    console.log('Still loading...');
 


}

loadingBar(30);