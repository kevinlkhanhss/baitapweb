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
    cartTotalA.innerHTML = totalC
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
        })       
        }
}