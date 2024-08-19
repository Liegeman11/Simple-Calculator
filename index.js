function showNumber(num) {
    if (document.getElementById('displayNumber').innerText == 0){
        document.getElementById('displayNumber').innerText =num;
    }else{
        document.getElementById('displayNumber').innerText +=num
    }
}

function calculate() {
    let userCalculation = document.getElementById('displayNumber').innerText;
    let calculation =eval(userCalculation);
    document.getElementById('displayNumber').innerText = calculation
}
function clearButton() {
    document.getElementById('displayNumber').innerText = "0"
}
function backSpace() {
    var display = document.getElementById('displayNumber').innerText;
    if(display.length > 1) {
        display = display.slice(0, -1);
        document.getElementById('displayNumber').innerText = display;
    }else{
        display = display.slice(0, -1);
        document.getElementById('displayNumber').innerText = "0";
    }
}