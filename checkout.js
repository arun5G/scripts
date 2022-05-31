
document.getElementById("form").addEventListener("submit",function(){
  event.preventDefault()
    alert ("Your order is accepted")
 
let t= setTimeout(function(){
    alert ("Your order is being Prepared")
},3000)

let d=setTimeout(() => {
  alert ("Your order is being packed")  
}, 8000);

 let id3=  setTimeout(function(){
        alert("Your order is out for delivery")
    },10000)


 let id2=  setTimeout(function(){
        alert("Order delivered")
    },12000)

    
id2()

id3()


// console.log(id)

t()


d()




})