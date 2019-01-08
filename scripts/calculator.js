$(document).ready(function () {

    let preNum = '';
    let currentNum = '';
    let operation = '';

    $('.row span').mousedown(function () {
        $(this).css('opacity', '0.5');
    });

    $('.row span').click(function () {
        $(this).css('opacity', '1');

        let btnPressed = $(this).html();

        if (btnPressed === 'AC') {
            currentNum = '0';
            operation = '';
        }
        else if (btnPressed === '+/-') {
            currentNum *= -1;
        }
        else if (btnPressed === '%') {
            currentNum = currentNum / 100;
        }
        else if (btnPressed === '.') {
            currentNum += '.';
        }
        else if (isNumber(btnPressed)) {
            if (currentNum === '0') {
                currentNum = btnPressed;
            }
            else {
                currentNum += btnPressed;
            }
        }
        else if (isOperator(btnPressed)) {
            preNum = currentNum;
            currentNum = '';
            operation = btnPressed;
        }
        else if (btnPressed === '＝') {
            if (operation != null) {
                currentNum = operate(preNum, currentNum, operation)
                operation = null;
            }
        }

        updateResult(currentNum);

    });


    function isNumber(value) {
        return !isNaN(value);
    }


    function isOperator(value) {
        return value === '÷' || value === 'X' || value === '＋' || value === '－';
    }


    function operate(preNum, currentNum, operation) {
        let result = 0;
        preNum = parseFloat(preNum);
        currentNum = parseFloat(currentNum);

        switch (operation) {
            case '＋':
                result = preNum + currentNum;
                break;
            case '－':
                result = preNum - currentNum;
                break;
            case 'X':
                result = preNum * currentNum;
                break;
            case '÷':
                result = preNum / currentNum;
                break;
            default:
                break;
        }
        return result;
    }

    function updateResult(value) {
        let result = value.toString();
        result = result.substring(0, 10);
        $('#result').text(result);
    }


});