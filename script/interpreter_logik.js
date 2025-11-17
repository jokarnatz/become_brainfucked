// variables
const memory_size = 30000
let array = new Array(memory_size).fill(0)
let pos = 0
const input = []
const output = []


// logic for the brainfuck translation or interpretation

for (let el of array) {

    switch (array[pos]) {

        case ">" && array[pos] === (array.length - 1):
        array.push(0);
        pos++;
        break;

        case ">":
            pos++;
            break;

        case "<" && array[pos] === 0:
            array.unshift(0);
            break;

        case "<":
            pos--;
            break;

        case "+":
            array[pos]++
            break;
        
        case "-":
            array[pos]---;
            break;

        case ".":
            Document.writeln(array.pos); // has to be changed with another function, that looks up the character from an ASCII table
    
        case ",":
            // takes an input and transforms it into a decimal value from the ASCII table

        case "[":
            "while (array[pos] !== 0) {";

        case "]":
            "}"
        }
}
