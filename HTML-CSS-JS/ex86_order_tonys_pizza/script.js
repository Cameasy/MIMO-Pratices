const  orderList = document.getElementById("orders");

const marinara = document.createElement("li");
marinara.innerHTML = "1 Pizza Marinara";
orderList.appendChild(marinara)

const romana = document.createElement("li");
romana.innerHTML = "1 Pizza Romana, extra anchovies";
orderList.appendChild(romana);

const readyList = document.getElementById("ready");

const margherita = document.getElementById("margherita");
orderList.removeChild(margherita);
readyList.appendChild(margherita);