const inputEl = document.querySelector('#name-input');
const outputEl = document.querySelector('#name-output');

inputEl.addEventListener('input', onNameOutput);


function onNameOutput(event) {

    outputEl.textContent = event.currentTarget.value;

    if (event.currentTarget.value.value = "") {
        return outputEl.textContent = "Anonymous";
    }
}



