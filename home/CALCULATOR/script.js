let x = null;
let y = null;
let sign;

function getNumber (num){
    if (x === null){
        x = num;
    }else{
        y = num;
    }
}

function getSign(symb){
    sign = symb;
    }

function getResult() {
    switch(sign){
        case '+':
            document.getElementById("calc_result").innerHTML = (x + y);
            break;
        case '-':
            document.getElementById("calc_result").innerHTML = (x - y);
            break;
        case '/':
            document.getElementById("calc_result").innerHTML = (x / y);
        break;
        case '*':
            document.getElementById("calc_result").innerHTML = (x * y);
        break;
        }
}

