const sumAll = function(start, end) {
    let sumAll = 0
    if ((start >= 0 && end >= 0) && (typeof start == "number" && typeof end =="number")){

        if(start <= end){
            for(let i = start; i <= end; i++ ){
                sumAll += i;
            }
        } else if (end <= start){
            for(let i = start; i >= end; i-- ){
                sumAll += i;
            }
        }
        return sumAll
    } else {
        return "ERROR"
    }
        
};

// Do not edit below this line
module.exports = sumAll;
