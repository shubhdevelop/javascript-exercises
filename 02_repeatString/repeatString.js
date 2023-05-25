const repeatString = function(string, times) {
    let ans = '';
    if(times == 0){
            return '';
    }else if(times < 0 ) {
            return "ERROR"
    }
    while (times) { 
        ans = ans + string
        times--;
    }
    return ans;
};

// Do not edit below this line
module.exports = repeatString;
