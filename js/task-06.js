const inputEl = document.querySelector('#validation-input');

inputEl.addEventListener('blur', onSymbolsCheck);

function onSymbolsCheck(event) {
    const inputText = event.currentTarget;
    const maxInputLength = Number(inputText.dataset.length);

    if (inputText.value.length === maxInputLength) {
        inputEl.classList.add('valid');
        inputEl.classList.remove('invalid');
    }
    else {
        inputEl.classList.add('invalid');
        inputEl.classList.remove('valid');
    }
}