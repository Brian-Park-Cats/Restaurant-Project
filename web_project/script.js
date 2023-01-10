let items_array = [
    {"name": "a", "id": 0, 'count': 0, "price": 1.00},
    {"name": "a", "id": 1, 'count': 0, "price": 1.00},
    {"name": "a", "id": 2, 'count': 0, "price": 1.00},
    {"name": "a", "id": 3, 'count': 0, "price": 1.00},
    {"name": "a", "id": 4, 'count': 0, "price": 1.00},
    {"name": "a", "id": 5, 'count': 0, "price": 1.00},
];





function purchase(button_id) {
    
    let x = parseInt(button_id, 10);

    let current = document.getElementById(button_id);

    let sibling = (current.nextElementSibling);

    new_count = sibling[0].value

    window.alert(new_count)

    items_array[x]['count'] = items_array[x]['count'] + parseInt(new_count)
    let j = localStorage.setItem("new_array", JSON.stringify(items_array))
    
    console.log(k)
    //document.location.href = "cart.html";

}

let k = JSON.parse(localStorage.getItem("new_array"))
items_aray = k

function shopping_create() {
    var table = document.getElementById('table');
    let x = k
    for (let i = 0; i < k.length; i++) {
        console.log(i)
        if (x[i]['count'] > 0) {
            for (let i = 0; i < document.getElementById('table').rows.length;)
                var row = table.insertRow(i+1)
                var cell1 = row.insertCell(0);
                var cell2 = row.insertCell(1);
                var cell3 = row.insertCell(2);
                cell1.innerHTML = x[i]["name"];
                cell2.innerHTML = x[i]["price"];
                cell3.innerHTML = x[i]["count"];
        }
        
    }
}




/*function appendNode(parent, element) {
    parent.appendChild(element);
};

function getDiv(container) {
    return document.getElementById(container);
};

function createNode(node) {
    let element = document.createElement(node);
    return element;
};



function displayItems(items, container) {
    let items_container = getDiv(container);
    items_container.innerHTML = '';

    for (let i = 0; i < items.length; i++) {
        let item = items[i];

        let item_node = createNode("li");
        item_node.setAttribute("id", item.id);

        if (item.count > 0) {
            item_node.innerHTML = `${item.name} 
            <span id="badge">${item.count}</span>`;
            appendNode(items_container, item_node);
        }
    }
}

displayItems(items_array, "items");
*/

/*function purchase(button_id) {
    
    let x = parseInt(button_id, 10);

    let current = document.getElementById(button_id);

    let sibling = (current.nextElementSibling);

    new_count = sibling[0].value

    window.alert(new_count)

    items_array[x]['count'] = parseInt(items_array[x]['count'] + new_count)

    cart.push(items_array[x]["name"] + " " + items_array[x]["count"] + " " + "$" + items_array[x]["price"])

    console.log(cart)

    console.log(items_array)

    localStorage.setItem("data", JSON.stringify(cart)) 

    let k = JSON.parse(localStorage.getItem("data"))

    console.log(k)

    console.log(document.getElementById("shopping"))

    
}

function buy_cart() {
    for (var i = 0; i < cart.length; ++i)
        document.getElementById("shopping_cart");
        var row = table.insert

}



let total = 0;


}
*/
