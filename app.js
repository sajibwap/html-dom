document.getElementById('phone-plus').addEventListener('click',function(){
	updateCart('phone',1219,true);
});

document.getElementById('phone-minus').addEventListener('click',function(){
	updateCart('phone',1219,false);
});

document.getElementById('case-plus').addEventListener('click',function(){
	updateCart('case',59,true);
});

document.getElementById('case-minus').addEventListener('click',function(){
	updateCart('case',59,false);
});



function updateCart(product,price,isIncreasing){

	let productInput = document.getElementById(product+'-number');

	let productInputValue = productInput.value;

	if (isIncreasing) {
		productInputValue = parseInt(productInputValue)+1;
	}else if(productInputValue > 0 ) {
		productInputValue = parseInt(productInputValue)-1;
	}

	productInput.value = productInputValue;


	let productTotal = document.getElementById(product+'-total');
	productTotal.innerText = productInputValue * price;


	calculateTotal_v2()


};

// calculate total price 


// function calculateTotal(){
// 	let phoneTotal = document.getElementById('phone-total').innerText;
// 	let caseTotal = document.getElementById('case-total').innerText;
// 	let subTotal = parseInt(phoneTotal) + parseInt(caseTotal);
// 	let tax = Math.ceil(subTotal / 10);
// 	let afterTax = subTotal + tax;


// 	document.getElementById('sub-total').innerText = subTotal;
// 	document.getElementById('tax-amount').innerText = tax;
// 	document.getElementById('total-price').innerText = afterTax;
// }





document.querySelectorAll('.remove-item').forEach(item =>{
	item.addEventListener('click',function(e){
		//e.path[3].remove();
		this.parentNode.parentNode.parentNode.remove();
		calculateTotal_v2();
	})
})




calculateTotal_v2();

function calculateTotal_v2(){

	let productTotal_NodeList = document.querySelectorAll('.product-total');

	let productTotal_Array = Array.prototype.slice.call(productTotal_NodeList);

    var totalArr = [0];

	productTotal_Array.map((item) =>totalArr.push(parseInt(item['innerText'])));

    let total = totalArr.reduce((a,b)=>a+b);
	let tax = Math.ceil(total / 10);
	let afterTax = total + tax;
	

	document.getElementById('sub-total').innerText = total;
	document.getElementById('tax-amount').innerText = tax;
	document.getElementById('total-price').innerText = afterTax;

	if (totalArr.length == 1) {
		document.getElementById('nocart').innerHTML = "<h1 style='text-align:center'>Your cart is empty</h1>";
	}
}