const removeFromArray = function(array, ...args) {
    let newArr =[];
 array.forEach(item => {
    if (!args.includes(item)){
        newArr.push(item);
    }    
 });

 return newArr; 
};

// Do not edit below this line
module.exports = removeFromArray;
