function compareTriplets(a, b) {
    let score = [0,0];
    
    for (let i=0; i < 3;i++){
        if (a[i] > b[i])
            score[0]++;
        if (a[i] < b[i])
            score[1]++;
    }
    
    return score;

}