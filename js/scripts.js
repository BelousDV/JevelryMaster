const inputValue = document.getElementById('metall999');
const inputValuePripoy = document.getElementById('metall999-pripoy');
const calculateBtn = document.getElementById('calculate');
const calculatePripoyBtn = document.getElementById('calculate-pripoy');
// const formCalculate = document.getElementsByClassName('form-calculate');
const calculateBtnClick = calculateBtn.addEventListener("click", calculateProba);
const calculatePripoyBtnClick = calculatePripoyBtn.addEventListener("click", calculatePripoy);


const resultSection = document.querySelector('.result');
const resultSectionPripoy = document.querySelector('.result-pripoy');

let resultUI = document.getElementById('result');
let resultUICuprum = document.getElementById('result-cuprum');
let resultUICadmiy = document.getElementById('result-cadmiy');


function showButton() {
    backBtn.className = 'back show';
}

function calculateProba() {
    event.preventDefault();
    let input = inputValue.value;
    let res = (input * 1.07).toFixed(2) - input;
    res = res.toFixed(2);
    showResult(res);
    inputValue.value = '';
}
function calculatePripoy() {
    event.preventDefault();
    let input = inputValuePripoy.value;
    let resCu = (input / 70) * 19;
    let resCa = (input / 70) * 5;
    resCu = resCu.toFixed(2);
    resCa = resCa.toFixed(2);
    showResultPripoy(resCu, resCa);
    inputValuePripoy.value = '';
}

function showResult(data) {
    resultUI.innerHTML = data;
    resultSection.className = 'result show';
}
function showResultPripoy(cu, ca) {
    resultUICuprum.innerHTML = cu;
    resultUICadmiy.innerHTML = ca;
    resultSectionPripoy.className = 'result-pripoy show';
}