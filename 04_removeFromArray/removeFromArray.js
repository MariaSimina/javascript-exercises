const removeFromArray = function(arr, ...elements) {
    let newArray = [];
    arr.forEach((item) => {
        if (!elements.includes(item)) {
            newArray.push(item);
        }
    });
    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
