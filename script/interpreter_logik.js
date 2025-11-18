// variables and constants

document.getElementById('run-code').addEventListener('click', function(event) {
    event.preventDefault();
    let code = document.getElementById('code-input').value;
    let userInput = document.getElementById('user-input').value;
    let codeTokenArray = createTokenArray(code);
    let userInputArray = createInputArray(userInput);
    let output = becomeBrainfucked(codeTokenArray, userInputArray);
    document.getElementById('output').textContent = output;
});    

function createInputArray(userInput) { 
    return userInput.split(" ");
}

function createTokenArray(code) {
    return code.split("");
}

// logic for the brainfuck translation or interpretation
function becomeBrainfucked(codeTokenArray, userInputArray) {
    let array = new Array(30000).fill(0);
    let pos = 0;
    let output = "";
    let inputPos = 0;                

    for (let i = 0; i < codeTokenArray.length; i++) {
        switch (codeTokenArray[i]) {
            case ">":
                if (pos === array.length - 1) {
                    array.push(0);
                    pos++;
                } else {
                    pos++;
                }
                break;

            case "<":
                if (pos === 0) {
                    array.unshift(0);
                } else {
                    pos--;
                }
                break;

            case "+":
                array[pos]++;
                break;
            
            case "-":
                array[pos]--;
                break;

            case ".":
                output += String.fromCharCode(array[pos])
                break;
        
            case ",":
                array[pos] = userInputArray[inputPos] ? userInputArray[inputPos].charCodeAt(0):0;
                inputPos++;
                break;

            case "[":
                if (array[pos] === 0) {
                    let open = 1;
                    while (open > 0) {
                        i++;
                        if (codeTokenArray[i] === '[') open++;
                        if (codeTokenArray[i] === ']') open--;
                    }
                }
                break;

            case "]":
                if (array[pos] !== 0) {
                    let close = 1;
                    while (close > 0) {
                        i--;
                        if (codeTokenArray[i] === ']') close++;
                        if (codeTokenArray[i] === '[') close--;
                    }
                }
            break;
        }
    }
    return output;
}
