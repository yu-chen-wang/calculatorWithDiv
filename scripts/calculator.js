$(document).ready(function () {


    let result = 0;
    let counter = 0;
    let action = '';

    $('.row span').mousedown(function () {
        $(this).css('opacity', '0.5');
    });

    $('.row span').click(function () {
        $(this).css('opacity', '1');
    });


    $('#ACBtn').click(function () {
        counter = 0;
        result = 0;
        $("#result").text(result);
    });

    $('#plusOrMinusBtn').click(function () {
        let isPostive = counter == Math.abs(counter);

        if (isPostive) {
            counter = -counter;
        }
        else {
            counter = Math.abs(counter);
        }

        $('#result').text(counter);
    });


    $('#oneBtn').click(function () {
        counter = counter * 10 + 1;
        $('#result').text(counter);
    })

    $('#twoBtn').click(function () {
        counter = counter * 10 + 2;
        $('#result').text(counter);
    })

    $('#threeBtn').click(function () {
        counter = counter * 10 + 3;
        $('#result').text(counter);
    })

    $('#fourBtn').click(function () {
        counter = counter * 10 + 4;
        $('#result').text(counter);
    })

    $('#fiveBtn').click(function () {
        counter = counter * 10 + 5;
        $('#result').text(counter);
    })

    $('#sixBtn').click(function () {
        counter = counter * 10 + 6;
        $('#result').text(counter);
    })

    $('#sevenBtn').click(function () {
        counter = counter * 10 + 7;
        $('#result').text(counter);
    })

    $('#eightBtn').click(function () {
        counter = counter * 10 + 8;
        $('#result').text(counter);
    })

    $('#nineBtn').click(function () {
        counter = counter * 10 + 9;
        $('#result').text(counter);
    })

    $('#zeroBtn').click(function () {
        counter = counter * 10 + 0;
        $('#result').text(counter);
    })

    $('#plusBtn').click(function () {
        if (action) {
            cal(action);
            action
        }
        else {

        }

    })


    function cal(action) {
        switch (action) {
            case 'plus':

                break;
            case 'minus':

                break;
            case 'mutiply':

                break;
            case 'divide':

                break;
            default:
                break;
        }
        return result;
    }


});