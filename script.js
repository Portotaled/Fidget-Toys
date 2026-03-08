<script>

const buttons = document.querySelectorAll(".add-btn");

const products = [];
const prices = [];

buttons.forEach(button => {
button.addEventListener("click", function(){

const productName = this.dataset.product;
const productPrice = this.dataset.price;

products.push(productName);
prices.push(Number(productPrice));

const list = document.getElementById("itemList");

const li = document.createElement("li");
li.textContent = productName + " - $" + productPrice;

list.appendChild(li);

console.log("Products:", products);
console.log("Prices:", prices);

});
});

</script>
