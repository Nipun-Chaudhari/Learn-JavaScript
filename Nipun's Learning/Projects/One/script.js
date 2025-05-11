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
        const input = document.createElement('input');
        const label = document.createElement('label');
        const removeButton = document.createElement('button');

        input.setAttribute('type', 'checkbox');
        span.setAttribute('class', 'item-span');
        label.setAttribute('for', item);

        const text = document.createTextNode(item);

        label.appendChild(text);
        span.appendChild(input);
        span.appendChild(label);
        display_area.appendChild(span);

    } catch (error) {
        console.log(error);
    }
}
