// selecting queries
const form = document.querySelector('#shelterForm');
const input = document.querySelector('#catName');
const list = document.querySelector('#cats');


form.addEventListener('submit', function (e) {

    // prevent default action (form doesnt actually submit to new url)
    e.preventDefault();

    // save entered value of cat name into a var
    const catName = input.value;
    // create new li element
    const newLi = document.createElement('li');
    // store cat name into li
    newLi.innerText = catName;
    // append new list to the list
    list.append(newLi);

    // clear input
    input.value = '';
});

// remove cat name from the list on click
list.addEventListener('click', function (e) {
    // check if target is li, remove target if it is
    e.target.nodeName === 'LI' && e.target.remove();
})
