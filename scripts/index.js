//store the products array in localstorage as "products"
function Products(t, d, p, i){
    this.type = t;
    this.desc = d;
    this.price = p;
    this.image = i;

}

document.querySelector("#products").addEventListener("submit",addProduct);

let data = JSON.parse(localStorage.getItem("products")) || [];



function addProduct(){
    event.preventDefault();
    // let form = document.getElementById("products");
    let type = document.querySelector("#type").value;
    let desc = document.querySelector("#desc").value;
    let price = document.querySelector("#price").value;
    let image = document.querySelector("#image").value;


 let p = new Products(type, desc, price, image);



data.push(p)

localStorage.setItem("products",JSON.stringify(data))
console.log(p)

}









