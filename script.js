let bufferedNumber = ''
let savedOperator = ''
let savedNumber = ''
let calcBoolean = false

//resets all variables
function reset() {
    savedOperator = ''
    savedNumber = ''
    bufferedNumber = ''
    calcBoolean = false
}
//comes from Buttons, decides which functions to run depending on inputbutton
function input(x) {
    switch (x) {
        case '*':
        case '/':
        case '+':
        case '-':
            saveOperator(x)
            break
        case 'equals':
            calculate()
            break
        case 'c':
            reset()
            break
        case 'back':
            deleteCharacter()
            break
        default:
            typeNumbers(x)
            break
    }
}

//only exists to replace bufferedNumber with result, sets calcBoolean true
function calculate() {
    debugger
    if (savedNumber != '' && savedOperator != '') {
        calcBoolean = true
        var1 = parseInt(bufferedNumber)
        var2 = parseInt(savedNumber)
        debugger
        switch (savedOperator) {
            case '*':
                bufferedNumber = toString(var1 * var2)
                break
            case '/':
                bufferedNumber = toString(var1 / var2)
                break
            case '+':
                bufferedNumber = toString(var1 + var2)
                break
            case '-':
                bufferedNumber = toString(var1 - var2)
                break
        }
    }
}

// changes bufferedNumber (adds to it), if calculated before it resets all variables
function typeNumbers(x) {
    if (calcBoolean) {
        reset()
    }
    bufferedNumber = bufferedNumber + x
    console.log(bufferedNumber)
}

//removes last character of bufferedNumber
function deleteCharacter() {
    if (bufferedNumber != '') {
        bufferedNumber = bufferedNumber.substring(0, bufferedNumber.length - 1)
    }
    console.log(bufferedNumber)
}

//when you type an operator it triggers this function. it triggers calculate if savednumber and savedoperator are already existing, then overrides savedoperator
function saveOperator(x) {
    calculate()
    savedOperator = x
    savedNumber = bufferedNumber
    bufferedNumber = ''
    console.log(savedOperator)
}

//gets triggered after pressing equals, calculates and resets savedOperator and saved Number
function equals() {
    calculate()
    savedOperator = ''
    savedNumber = ''
    console.log(bufferedNumber)
}
