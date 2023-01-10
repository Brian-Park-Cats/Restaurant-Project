let items_array = [
    {"name": "a", "id": 0, 'count': 0, "price": 1.00},
    {"name": "a", "id": 1, 'count': 0, "price": 1.00},
    {"name": "a", "id": 2, 'count': 0, "price": 1.00},
    {"name": "a", "id": 3, 'count': 0, "price": 1.00},
    {"name": "a", "id": 4, 'count': 0, "price": 1.00},
    {"name": "a", "id": 5, 'count': 0, "price": 1.00},
];

cart = []


    



function purchase(button_id) {
    
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


    
    
    for (var i = 0; i < items_array.length; ++i) {
        if ()
        

    }

}



let total = 0;

function finalize() {
    for (var i = 0; i < items_array.length; ++i) {
        let x = (1.04712 * ((items_array[i].count)*(items_array[i].price)) );
        console.log(total)
        console.log(x)
        total = total + x;
        console.log(total)
        items_array[i].count = 0
        
        
    }
}

