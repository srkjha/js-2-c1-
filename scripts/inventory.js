append();

function append(){
    let data = JSON.parse(localStorage.getItem("products")) || [];

    let all_products = document.getElementById("all_products");
    all_products.innerHTML=null;


    data.forEach(function(el,index){
        let div = document.createElement("div");

        let img = document.createElement("img");
        img.src = el.image;

        let type = document.createElement("p");
        type.innerText = el.type;

         let desc = document.createElement("p");
        desc.innerText = el.desc;


         let price = document.createElement("p");
        price.innerText = el.price;

      let btn  = document.createElement("button");
      btn.innerText="Remove Product";
      btn.addEventListener("click",function(){
        remove(index);
      });


      div.append(img, type, desc, price, btn);
      all_products.append(div);

 });

    
}


function remove(index){
    let data = JSON.parse(localStorage.getItem("products")) || [];


    let newData = data.filter(function(el, i){
        if(i === index){
        let trash = JSON.parse(localStorage.getItem("trash"))  || [];
        trash.push(el);
        localStorage.setItem("trash",JSON.stringify(trash));
    }else{
        return i !==index;
    }
    });
    localStorage.setItem("products",JSON.stringify(newData));
    append();
}