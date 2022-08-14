const categoriesEl = document.querySelector('#categories');
const categoriesItems = categoriesEl.children;
console.log("Number of categories:", categoriesItems.length);


const categoryElements = document.querySelectorAll('.item');
for (let i = 0; i < categoryElements.length; i += 1) {
    const categoryEl = categoryElements[i].children;
    const categoryElTitle = categoryEl[0].textContent;
    const categoryElLength = categoryEl[1].querySelectorAll('li').length

    console.log("Category:", categoryElTitle);
    console.log("Elements:", categoryElLength);
}



