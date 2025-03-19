function plusMinus(arr) {
    // Write your code here
    let counter = [0,0,0];
    
    for (let i = 0; i < arr.length; i++){
        if (arr[i] > 0)
            counter [0]++;
        if (arr[i] < 0)
            counter [1]++;
        if (arr[i] == 0)
            counter [2]++;
    }
    
    let ratio = [counter[0]/arr.length, counter[1]/arr.length, counter[2]/arr.length];
    
    console.log(ratio[0].toPrecision(6));
    console.log(ratio[1].toPrecision(6));
    console.log(ratio[2].toPrecision(6));

}