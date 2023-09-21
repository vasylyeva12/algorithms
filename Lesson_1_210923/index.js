// Описать блок-схему и написать функцию с тестами к ней, которая вычисляет среднее арифметическое всех чисел /*преданных в качестве аргумента.*/

// average([1,2,3,4,5]) -> 3

// Блок-схему
// Написать функцию
// Протестировать её

const array = [1,2,34,2,13,4];
const average = (array) => {
const count = array.length;
let result = 0;
let index = 0;

while (index < count) {

    result = result + array[index];

    index = index + 1;
    
}
result = result / count;
console.log(result);
}

console.log(average([1,2,34,2,13,4]));
console.log(average([1,2,3,5,4]));

