const adressbtn = document.querySelector('#adress-from' )
const adressclose = document.querySelector('#adress-close' )
const rightbtn = document.querySelector('.fa-angle-right' )
const leftbtn = document.querySelector('.fa-angle-left' )
const Nuber = document.querySelectorAll(".slider-content-left-top img")
let index = 0
// console.log (adressbtn)
adressbtn.addEventListener("click", function(){
    document.querySelector('.adress-from').style.display="flex"
}) 
adressclose.addEventListener("click", function(){
    document.querySelector('.adress-from').style.display="none"
}) 

rightbtn.addEventListener("click", function(){
    index = index+1
    if(index>Nuber.length-1){
        index=0 
    }
    document.querySelector('.slider-content-left-top').style.right = index * 100+"%"
})

leftbtn.addEventListener("click", function(){
    index = index-1
    if(index<=0){
        index=Nuber.length-1
    }
    document.querySelector('.slider-content-left-top').style.right * 100+"%"
})
const NuberLi = document.querySelectorAll(".slider-content-left-botton li")
    NuberLi.forEach(function(image, index){
        image.addEventListener("click", function(){
            removeactive ()
            document.querySelector(".slider-content-left-top").style.right = index *100+"%" 
            image.classList.add("active")   
        })
})
function removeactive (){
    let imgactive = document.querySelector('.active')
    imgactive.classList.remove("active")
}
function imgAuto () {
    index = index +1 
    if(index>Nuber.length-1){
        index = 0
    }
    document.querySelector(".slider-content-left-top").style.right = index *100+"%" 
}
setInterval(imgAuto,2500)

const btn = document.querySelectorAll(".slider-product-one-content-item button")
btn.forEach(function(button,index){
button.addEventListener("click", function(event){{
    var btnItem = event.target
    var product = btnItem.parentElement 
    var productImg = product.querySelector("img").src
    var productName = product.querySelector("h1").innerText
    var productPrice = product.querySelector("span").innerText
    //console.log(productImg,productName,productPrice)
    addcart(productImg,productName,productPrice)
}}) 

})
function addcart(productImg,productName,productPrice){  
    var addtr = document.createElement("tr")
    var cartItem = document.querySelectorAll("tbody tr")
    for (var i=0;i<cartItem.length;i++){
        var productT = document.querySelectorAll(".title")
        if(productT[i].innerHTML == productName){
            alert("Sản phẩm của bạn đã có trong giỏ hàng")
            return
        }
    }
    var trcontent = '<tr><td style="display: flex; align-items: center;"><img style="width: 70px;" src="'+productImg+'" alt=""><span class="title">'+productName+'</span></td><td><p><span class=prices>'+productPrice+'</span><sup>đ</sup></p></td><td><input style="width: 30px; outline: none;" type="number" value="1" min="1"></td><td style="cursor: pointer;"><span class="cart-delete">Xóa</span></td></tr>'
    addtr.innerHTML = trcontent
    var cartTable = document.querySelector("tbody")
    cartTable.append(addtr)

    carttotal()
    deleteCart()
    
}

function carttotal (){
    var cartItem = document.querySelectorAll("tbody tr")
    var totalC = 0
    for (var i=0;i<cartItem.length;i++){
        var inputValue = cartItem[i].querySelector("input").value
        console.log(inputValue)
        var productPrice = cartItem[i].querySelector(".prices").innerHTML
        console.log(productPrice)
        totalA = inputValue*productPrice
        totalB = totalA.toLocaleString('de-DE')
        console.log(totalB)
        totalC = totalC + totalA
        console.log(totalC)
    }
    var cartTotalA = document.querySelector(".price-total span")
    cartTotalA.innerHTML = totalC.toLocaleString('de-DE')
    inputchange ()
    console.log( cartTotalA)
    
}
function deleteCart(){
    var cartItem = document.querySelectorAll("tbody tr")
    for (var i=0;i<cartItem.length;i++){
        var productT = document.querySelectorAll(".cart-delete")
        productT[i].addEventListener("click",function(event){
            var cartDelete = event.target
            var cartitemR = cartDelete.parentElement.parentElement
            cartitemR.remove()
            carttotal()
        })       
        }
}
function inputchange (){
    var cartItem = document.querySelectorAll("tbody tr")
    for (var i=0;i<cartItem.length;i++){
        var inputValue = cartItem[i].querySelector("input")
        inputValue.addEventListener("change",function(){
         carttotal()
        })       
        }
}
const cartbtn = document.querySelector(".fa-circle-xmark")
const cartshow = document.querySelector(".fa-cart-shopping")
cartshow.addEventListener("click",function(){
    
    document.querySelector(".cart").style.right = "0"
})
cartbtn.addEventListener("click",function(){
    console.log(cartshow)
    document.querySelector(".cart").style.right = "-100%"
})

const rightbtntwo = document.querySelector('.fa-angle-right-two' )
const leftbtntwo = document.querySelector('.fa-angle-left-two' )
const Nubertwo = document.querySelectorAll(".slider-product-one-content-items ")
rightbtntwo.addEventListener("click", function(){
    index = index+1
    if(index>Nubertwo.length-1){
        index=0 
    }
    document.querySelector('.slider-product-one-content-items-content').style.right = index * 100+"%"
})

leftbtntwo.addEventListener("click", function(){
    index = index-1
    if(index<=0){
        index=Nubertwo.length-1
    }
    document.querySelector('.slider-product-one-content-items-content').style.right * 100+"%"
    
})

