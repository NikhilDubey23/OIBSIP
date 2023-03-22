
let result = document.getElementById("result");

function getResult(num) {
    result.value += num;
}

function clearResult() {
    result.value = "";
}

function calculate() {
    try {
        result.value = eval(result.value);
    } catch (error) {
        result.value = "Error";
    }
}
