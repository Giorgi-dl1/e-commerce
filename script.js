const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu-container');
const closeIcon = document.querySelector('.icon-close');
const cartBtn = document.querySelector('.cart-icon');
const cart = document.querySelector('.cart-container');

const previousBtn=document.querySelector('.previous');
const nextBtn=document.querySelector('.next');
const productImg = document.querySelector('.product-image');
const productImgInc = document.querySelector('.product-image-inc');
const closeIconInc = document.querySelector('.close-icon-inc');
const lightboxInc = document.querySelector('.inc-lightbox');
const images = ['/images/image-product-1.jpg','/images/image-product-2.jpg','/images/image-product-3.jpg','/images/image-product-4.jpg'];

const minusBtn = document.querySelector('.minus');
const plusBtn = document.querySelector('.plus');
const itemCount = document.querySelector('.item-count');
const addToCartBtn = document.querySelector('.add-to');
const cartItemCount = document.querySelector('.cart-item-count');
const cartContent = document.querySelector('.cart-content');
const quantityCart = document.querySelectorAll('.quantity');
const fullPrice = document.querySelector('.full-price');
const deleteBtn = document.querySelector('.delete-icon');
const thumbnailItems = document.querySelectorAll('.thumbnail-item');
const thumbnailItemsInc = document.querySelectorAll('.thumbnail-item-inc');
const activeThumbnailItem =  document.querySelectorAll('.thumbnail-item.active');

var currentItemCount = 0;
var itemsInCart = 0;
var currentImage = 0;
//menu
hamburger.addEventListener('click',()=> menu.classList.add('active'));
closeIcon.addEventListener('click',()=>menu.classList.remove('active'));
//cart
cartBtn.addEventListener('click',()=>cart.classList.toggle('passive'));
plusBtn.addEventListener('click',()=>{
    currentItemCount++;
    itemCount.innerHTML = currentItemCount
})
minusBtn.addEventListener('click',()=>{
    if(currentItemCount>0){
        currentItemCount--;
    }
    itemCount.innerHTML = currentItemCount
})
addToCartBtn.addEventListener('click',()=>{
    itemsInCart+=currentItemCount;
    if(itemsInCart>0){
        if(cartItemCount.classList.contains('passive')){
            cartItemCount.classList.remove('passive');
            cartContent.classList.remove('passive');
            cartContent.nextElementSibling.classList.add('passive');
        }
        quantityCart.forEach(x=>x.innerHTML=itemsInCart);
        fullPrice.innerHTML = '$'+ 125 * itemsInCart+'.00';
        currentItemCount=0;
        itemCount.innerHTML = currentItemCount;

    }
})
deleteBtn.addEventListener('click',()=>{
    if(itemsInCart>0){
        itemsInCart--;
        if(itemsInCart==0){
            cartItemCount.classList.add('passive');
            cartContent.classList.add('passive');
            cartContent.nextElementSibling.classList.remove('passive');
        }
        quantityCart.forEach(x=>x.innerHTML=itemsInCart);
        fullPrice.innerHTML = '$'+ 125 * itemsInCart+'.00';
    }
})
//lightbox
previousBtn.addEventListener('click',()=>{
    if(currentImage > 0){
        currentImage--;
    }else{
        currentImage=3;
    }
    productImg.src=images[currentImage];
})
nextBtn.addEventListener('click',()=>{
    if(currentImage <3){
        currentImage++;
    }else{
        currentImage=0;
    }
    productImg.src=images[currentImage];
})
thumbnailItems.forEach(thumbnailItem =>{
    thumbnailItem.addEventListener('click',()=>{
        thumbnailItems.forEach(item => {
            item.classList.remove('active');
        })
        thumbnailItem.classList.add('active');
        productImg.src = thumbnailItem.src.replace('-thumbnail','');
        productImgInc.src = thumbnailItem.src.replace('-thumbnail','');
    })
})
thumbnailItemsInc.forEach(thumbnailItem =>{
    thumbnailItem.addEventListener('click',()=>{
        thumbnailItemsInc.forEach(item => {
            item.classList.remove('active');
        })
        thumbnailItem.classList.add('active');
        productImgInc.src = thumbnailItem.src.replace('-thumbnail','');
    })
})
productImg.addEventListener('click',()=>{
    lightboxInc.classList.remove('passive');
})
closeIconInc.addEventListener('click',()=>{
    lightboxInc.classList.add('passive');
})