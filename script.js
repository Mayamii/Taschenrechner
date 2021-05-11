let bufferedNumber = ''
let savedOperator = ''
let savedNumber = ''
let resultExisting = false

//resets all variables
function reset() {
    savedOperator = ''
    savedNumber = ''
    bufferedNumber = ''
    displayResult()
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
            equals()
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
        const var2 = parseInt(bufferedNumber)
        const var1 = parseInt(savedNumber)
        let operator = savedOperator
        reset()
        switch (operator) {
            case '*':
                bufferedNumber = (var1 * var2).toString()
                break
            case '/':
                bufferedNumber = (var1 / var2).toString()
                break
            case '+':
                bufferedNumber = (var1 + var2).toString()
                break
            case '-':
                bufferedNumber = (var1 - var2).toString()
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
    displayResult()
}

//removes last character of bufferedNumber
function deleteCharacter() {
    if (bufferedNumber != '') {
        bufferedNumber = bufferedNumber.substring(0, bufferedNumber.length - 1)
        displayResult()
    }
}

//when you type an operator it triggers this function. it triggers calculate if
//savedNumber and savedOperator are already existing, then overrides savedOperator
function saveOperator(x) {
    calculate()
    displayResult()
    savedOperator = x
    savedNumber = bufferedNumber
    bufferedNumber = ''
}

//gets triggered after pressing equals, calculates and resets savedOperator and saved Number
// eslint-disable-next-line no-unused-vars
function equals() {
    resultExisting = true
    calculate()
    displayResult()
}

//this function puts bufferedNumber in the paragraph with the id "output-field"
function displayResult() {
    if (bufferedNumber == '') {
        // eslint-disable-next-line no-undef
        document.getElementById('output-field').innerHTML = '0'
    } else {
        // eslint-disable-next-line no-undef
        document.getElementById('output-field').innerHTML = bufferedNumber
    }
}
