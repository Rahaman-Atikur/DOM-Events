const items = document.getElementsByClassName('item');
// for (let item of items) {
//     item.addEventListener('click', function (event) {
//         event.target.parentNode.removeChild(event.target);
//     })
// }
document.getElementById('item-list')
    .addEventListener('click', function (event) {
        // console.log(event.target);
        event.target.parentNode.removeChild(event.target);
    })
// Add new Item
document.getElementById('new-item-btn')
    .addEventListener('click', function () {
        // Parent Add
        const ol = document.getElementById('item-list');
        // new Item
        const li = document.createElement('li');
        li.innerText = 'Brand New Item Added';

        //Add the item
        ol.appendChild(li);

    })