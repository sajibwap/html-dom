
/* Variable Options */
let optionRam = document.getElementsByName('ram');
let optionRom = document.getElementsByName('rom');
let optionShipping = document.getElementsByName('shipping');


/* Price Options */

let bestPrice = document.getElementById('best-price');
let memoryPrice = document.getElementById('memory-price');
let storagePrice = document.getElementById('storage-price');
let deliveryPrice = document.getElementById('delivery-price');
let totalPrice = document.getElementById('total-price');
let mainPrice = document.getElementById('main-price');

/* Option Selection Event */

extraOption(optionRam,memoryPrice);
extraOption(optionRom,storagePrice);
extraOption(optionShipping,deliveryPrice);

function extraOption(eventHandler,_price){
	eventHandler.forEach(item=>{
		item.addEventListener('click',function(e){
			let price = e.target.value;
			_price.innerText = price;
			updateCart();
            updateClass(e);
        })
	})
}


updateCart()

function updateCart() {
    let iMacPriceTotal;
    let iMacPrice = parseInt(bestPrice.innerText);
    let ramPrice = parseInt(memoryPrice.innerText);
    let romPrice = parseInt(storagePrice.innerText);
    let delPrice = parseInt(deliveryPrice.innerText);

    iMacPriceTotal = iMacPrice + ramPrice + romPrice + delPrice;

    totalPrice.innerText = parseFloat(iMacPriceTotal);
    mainPrice.innerText = parseFloat(iMacPriceTotal);

    totalAfterDiscount();

}

function totalAfterDiscount(){
    let discountButton = document.getElementById('discount-btn');
    let discountInput = document.getElementById('discount-input');

    discountButton.addEventListener('click', function(e){
        if (discountInput.value == "stevekaku"){
            document.getElementById('main-price').innerText = parseInt(totalPrice.innerText) * 0.8;
            discountInput.value = "";
        }
        else {
            document.getElementById('main-price').innerText = iMacPriceTotal;
        }

    })
}

function updateClass(src){
  let el = src.target.parentElement.parentElement.children
  for(item of el){
    item.classList.remove('btn-danger','text-white')
}
src.target.parentElement.classList.add('btn-danger','text-white');
}