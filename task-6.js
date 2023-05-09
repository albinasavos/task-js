let total = 0;
let input;
do {
    total += parseInt(input);
    input = prompt("Введiть число", "");
} while (input);

console.log(total);