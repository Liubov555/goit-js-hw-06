function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const refs = {
  controlsEl: document.querySelector('#controls'),
  inputEl: document.querySelector('input'),
  btnCreate: document.querySelector('[data-create]'),
  btnDestroy: document.querySelector('[data-destroy]'),
  boxesEl: document.querySelector('#boxes')
}



function createBoxes(amount) {
  const divs = [];
  amount = refs.inputEl.value;
  console.log(refs.inputEl.value);

  let baseSizes = 20;
  let addValue = 10;

  for (let i = 1; i <= amount; i += 1) {

    const divEl = document.createElement("div");

    divEl.style.backgroundColor = getRandomHexColor();
    divEl.style.width = baseSizes + addValue + `px`;
    divEl.style.height = baseSizes + addValue + `px`;
    addValue += 10;
    console.log("width", divEl.style.width);
    console.log("height", divEl.style.height);
    divs.push(divEl);
  }

  return refs.boxesEl.append(...divs);
}


function onDestroyBtnElClick(amount) {
  refs.boxesEl.innerHTML = "";
  amount = refs.inputEl.value;
}

refs.btnCreate.addEventListener('click', createBoxes);
refs.btnDestroy.addEventListener('click', onDestroyBtnElClick);

