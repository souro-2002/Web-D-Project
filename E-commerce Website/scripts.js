let collections=document.getElementById('collections')
let images=collections.querySelectorAll('img')
images.forEach(ele =>{
    ele.addEventListener('click',()=>{
        document.getElementById('large-preview').innerHTML=`<img src="${ele.src}">`
    })
})
let cartimage=document.querySelector('#cart img')
document.addEventListener('click',(e)=>{
    if(e.target==cartimage || e.target==document.getElementById('dropdown')){
        document.getElementById('dropdown').style.opacity="1"
    }
    else{
        document.getElementById('dropdown').style.opacity="0"
    }
})
let count =parseInt(document.getElementById('cart-count').innerText)
document.getElementById('minus').addEventListener('click',(e)=>{
    if(e.target==e.currentTarget && count!=0){
        --count
        document.getElementById('cart-count').innerHTML=`${count}`
    }
})
document.getElementById('plus').addEventListener('click',(e)=>{
    if(e.target==e.currentTarget){
        ++count
        document.getElementById('cart-count').innerText=`${count}`
    }
})
let addcart=document.querySelector('#cart-use .btn')
let dropdown=document.getElementById('dropdown')
let dropdownarea=document.getElementById('area')
addcart.addEventListener('click',(e)=>{
    if(count>0){
        alert("Item has been added to cart")
        dropdown.style.width="50vw"
        dropdown.style.height="40vh"
        dropdownarea.innerHTML=
        `<img width="60rem" height="60rem" src="./ecommerce-product-page-main/images/image-product-1-thumbnail.jpg" alt="Image Not Found">
        <span>Fall Limited Edition Sneakers</span>
        <span>$125 X ${count} = $${count*125}</span>
        <img src="./ecommerce-product-page-main/images/icon-delete.svg" alt="Image Not Found">
        <button id="checkout" style="display: block;" class="btn">Checkout</button>`
        dropdownarea.style.display="inline-block"
        document.getElementById('checkout').addEventListener('click',(e)=>{
            alert("Thanks for shopping with us")
        })
    }
    else alert("There are no items in your cart")
})