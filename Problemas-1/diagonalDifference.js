function diagonalDifference(arr) {
    // Write your code here
    let lDiagonal = 0;
    let rDiagonal = 0;
    
    for (let i = 0; i < arr.length;i++){
        lDiagonal = lDiagonal + arr[i][i];
        rDiagonal = rDiagonal + arr[i][arr.length-1-i];
    }
    
    let absoluteDifference = lDiagonal-rDiagonal;
    
    if (absoluteDifference < 0)
        absoluteDifference = -absoluteDifference;
        
    return absoluteDifference;

}