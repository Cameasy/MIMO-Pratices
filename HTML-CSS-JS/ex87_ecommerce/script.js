const carItems = [];
let isTotalHidden = true;
const backpack = {
    name: "Backpack",
    price: 400
};
const camera = {
    name: "Camera",
    price: 300
};

function addToCart(item){
    carItems.push(item);
    document.getElementById("itemCounter").innerHTML = carItems.length;
    showTotal();
}


function showTotal(){
    const orerTotal = document.getElementById("orderTotal");
    orderTotal.innerHTML = "";
    
    if (isTotalHidden === false){
        let total = 0;
        for (let i = 0; i < carItems.length; i++){
            total += cartItems[i].price;
        }
        orderTotal.innerHTML += "Total: $" + total;
    }
    function calculateTotal(total){
        let shipping;
        if (total >= 700){
            shipping = 30;
        } else {
            shipping = 50;
        }
    }
}




