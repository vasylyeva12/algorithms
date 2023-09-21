const bubblSort = (items)=> {
    const length = items.length;

    for (let k = 0; k < length; k++) {
                
   
    for (let i = 0; i < length - 1; i++) {
        if (items[i] > items[i + 1]) {
            const t = items[i];
            items[i] = items[i + 1];
            items[i + 1] = t;
            console.log(`$        ${k} >> ` + items);
        }
        
    }
}
}

const numbers = [1, 4, 3, 6, 5, 2, 0 ];

console.log("befor > " + numbers);
console.log("after > " + numbers);
bubblSort(numbers);