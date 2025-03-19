function birthdayCakeCandles(candles) {
    // Write your code here
    
    let tallest = candles[0];
    let tallCounter = 1;
    
    for(let i = 1; i < candles.length; i++){
        if(candles[i] == tallest)
            tallCounter++;
        else if(candles[i] > tallest){
            tallest = candles[i];
            tallCounter = 1
        }
        
    }
    
    return tallCounter;

}