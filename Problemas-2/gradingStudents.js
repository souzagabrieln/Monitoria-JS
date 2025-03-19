function gradingStudents(grades) {
    // Write your code here
    
    let final = [];
    
    for(let i = 0;i < grades.length; i++){
        const toNextMultiple = 5 - (grades[i]%5);
        if(grades[i] < 38)
            final.push(grades[i])
        else if(toNextMultiple < 3)
            final.push(grades[i]+ toNextMultiple)
        else
            final.push(grades[i])
    }
    
    return final;

}