let bufferedNumber = ''
let savedOperator = ''
let savedNumber = ''
let resultExisting = false

//resets all variables
function reset() {
    savedOperator = ''
    savedNumber = ''
    bufferedNumber = ''
    consoleLogging()
}
//comes from Buttons, decides which functions to run depending on inputbutton
// eslint-disable-next-line no-unused-vars
function input(buttonPushed) {
    switch (buttonPushed) {
        case '*':
        case '/':
        case '+':
        case '-':
            saveOperator(buttonPushed)
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
            typeNumbers(buttonPushed)
            break
    }
}

//only exists to replace bufferedNumber with result, sets calcBoolean true
function calculate() {
    if (savedNumber != '' && savedOperator != '') {
        resultExisting = true
        const var2 = parseInt(bufferedNumber)
        const var1 = parseInt(savedNumber)
        let var3
        let Operator = savedOperator
        savedOperator = ''
        savedNumber = ''

        switch (Operator) {
            case '*':
                var3 = var1 * var2
                bufferedNumber = var3.toString()
                debugger
                consoleLogging()

                break
            case '/':
                bufferedNumber = toString(var1 / var2)
                consoleLogging()
                break
            case '+':
                bufferedNumber = toString(var1 + var2)
                consoleLogging()
                break
            case '-':
                bufferedNumber = toString(var1 - var2)
                consoleLogging()
                break
        }
    }
}

// changes bufferedNumber (adds to it), if calculated before it resets all variables
function typeNumbers(numberPressed) {
    if (resultExisting && savedOperator == '') {
        bufferedNumber = ''
        resultExisting = false
    }
    bufferedNumber = bufferedNumber + numberPressed
    consoleLogging()
}

//removes last character of bufferedNumber
function deleteCharacter() {
    if (bufferedNumber != '') {
        bufferedNumber = bufferedNumber.substring(0, bufferedNumber.length - 1)
        consoleLogging()
    }
}

//when you type an operator it triggers this function. it triggers calculate if savednumber and savedoperator are already existing, then overrides savedoperator
function saveOperator(x) {
    calculate()
    savedOperator = x
    savedNumber = bufferedNumber
    bufferedNumber = ''
    consoleLogging()
}

//gets triggered after pressing equals, calculates and resets savedOperator and saved Number
// eslint-disable-next-line no-unused-vars
function equals() {
    calculate()
    consoleLogging()
}

function consoleLogging() {
    console.log(bufferedNumber)
    console.log(savedNumber)
    console.log(savedOperator)
    console.log(resultExisting)
}
