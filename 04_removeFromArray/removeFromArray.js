const removeFromArray = function(arr, ...elements) {
    let newArray = [];
    let elementsArray = Array.from(elements);
    console.log(arr);
    console.log(elements);

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < elementsArray.length; j++) {
            console.log(`arr ${arr[i]}`);
            console.log(elementsArray[j]);
            if (arr[i] === elementsArray[j]) {
                arr.splice(i, 1);
                i--;
            }
        }
    }
    
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
