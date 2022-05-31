let arr=[];
// Add the coffee to local storage with key "coffee"



console.log("index")
let url=`https://masai-mock-api.herokuapp.com/coffee/menu`
main()

async function main(){
    try{
        let res=await fetch(url);
        let data=await res.json();
        console.log(data.menu.data)
        apend(data.menu.data);
    }
    catch(err){
        console.log(err)
    }
}
let menu=document.getElementById("menu");
function apend(data){
console.log(data)
    data.forEach(function(el){
        let div=document.createElement("div");
        let coffee=document.createElement("h3")
        let image=document.createElement("img")
        let price=document.createElement("p")
        let btn=document.createElement("button")

        coffee.innerText=el.title;
        image.src=el.image;
        price.innerText=el.price;
        btn.innerText="add to bucket";
        btn.setAttribute("id","add_to_bucket")
            let p=el
        div.append(image,coffee,price,btn);
          menu.append(div)

          btn.addEventListener("click",function(){
            //   event.preventDefault()
              console.log(p,88)
            //   console.log(45465)
              arr.push(p)
// console.log(arr,67777777)
            localStorage.setItem("coffee",JSON.stringify(arr))

            console.log(arr.length)
            // count.innerText=null;
            count.innerText=arr.length;
            console.log(count)
            
            //    var g= JSON.parse(localStorage.getItem("coffee"))
            //    console.log(g)
        })
        
    
    
    
    })

}

let count=document.createElement("p");
document.getElementById("coffee_count").append(count)

