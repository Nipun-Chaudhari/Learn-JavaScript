const item = document.getElementById("item");

document.querySelector("button").addEventListener("click", function (e) {
    e.preventDefault();
    let newItem = item.value.trim();
    if (newItem) {
        createItem(newItem);
    } else {
        alert('CANNOT ADD EMPTY ITEM');
    }
    item.value = "";
});

function createItem(item) {
    const display_area = document.getElementById("display-area");

    try {
        const span = document.createElement('span');
        const p = document.createElement('p');

        span.setAttribute('class', 'item-span');
        p.textContent = item;

        span.appendChild(p);

        display_area.appendChild(span);

        // Add click event to span to delete itself
        span.addEventListener('click', function () {
            span.remove();
        });

    } catch (error) {
        console.log(error);
    }
}
