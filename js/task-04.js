
let counterValue = 0;

const counter = document.querySelector('#counter');
const valueEl = document.querySelector('#value');
const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');


incrementBtn.addEventListener('click', onIncrementValue);
decrementBtn.addEventListener('click', onDecrementValue);

function onIncrementValue(event) {
    counterValue += 1;
    valueEl.textContent = counterValue;
}

function onDecrementValue(event) {
    counterValue -= 1;
    valueEl.textContent = counterValue;
}
