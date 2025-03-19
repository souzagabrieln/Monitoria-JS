function miniMaxSum(arr) {
    // Write your code here
    
    let smallest = arr[0];
    let largest = arr[0];
    let sum = arr[0];
    
    for (let i = 1; i < arr.length; i++){
        sum += arr[i];
        if(arr[i] < smallest)
            smallest = arr[i];
        if(arr[i] > largest)
            largest = arr[i];
    }
    
    console.log(sum - largest, sum - smallest)

}