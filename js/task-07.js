const inputEl = document.querySelector('#font-size-control');
const textEl = document.querySelector('#text');

inputEl.addEventListener('change', onFontSizeControl);

function onFontSizeControl(event) {
    const fontSize = this.value;
    textEl.style.fontSize = `${fontSize}px`;
}