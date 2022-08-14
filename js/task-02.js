const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listEl = document.querySelector('#ingredients')

const items = ingredients.map(ingredient => {
  const ingredientItem = document.createElement("li");
  ingredientItem.textContent = `${ingredient}`;
  ingredientItem.classList.add("item");
  return ingredientItem;
}
);

listEl.append(...items);