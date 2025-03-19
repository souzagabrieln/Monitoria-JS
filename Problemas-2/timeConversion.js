function timeConversion(s) {
    // Write your code here
    const period = s.slice(-2);
    let hour = parseInt(s.slice (0,2)   );
    
    if (hour == 12){
        if(period == "AM"){
            hour = 0;
            return String(hour).padStart(2,0) + s.slice(2,8);
        }
        if (period == "PM")
        return String(hour).padStart(2,0) + s.slice(2,8);
    }
    if (period == "AM")
    return String(hour).padStart(2,0) + s.slice(2,8);
    
    if (period == "PM"){
        hour += 12;
        return String(hour).padStart(2,0) + s.slice(2,8);
    }

}