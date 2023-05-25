const reverseString = function(string) {
    let reverseString = '';
    if (! string == ''){
        for (let i = 0 ; i < string.length; i++){
            reverseString = reverseString + string[string.length-i -1];
        } 
        return reverseString
    }else{
        return '';
    }
};
    reverseString("hello there!")



// Do not edit below this line
module.exports = reverseString;
