// On clicking remove button the item should be removed from DOM as well as localstorage.
console.log(54)
var g= JSON.parse(localStorage.getItem("coffee")) ||[]
// let t=[];
//   console.log(g,6)

// let total=document.createElement("h3");
let total=document.getElementById("total_amount")
let c=0;
let menu=document.getElementById("bucket")
// console.log(t);


    g.forEach(function(el,i){
      c+=el.price;
        let div=document.createElement("div");
        let coffee=document.createElement("h3")
        let image=document.createElement("img")
        let price=document.createElement("p")
        let btn=document.createElement("button")

        coffee.innerText=el.title;
        image.src=el.image;
        price.innerText=el.price;
        btn.innerText="remove";
        btn.setAttribute("id","remove_coffee")
            // let p=el
        div.append(image,coffee,price,btn);
          menu.append(div)


          btn.addEventListener("click",function(){
              this.parentNode.remove();
              g.splice(i,1);
              localStorage.setItem("coffee",JSON.stringify(g))
            //   localStorage.removeItem()
          })
})
total.innerText=c;


