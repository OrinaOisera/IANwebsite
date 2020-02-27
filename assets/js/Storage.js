function SaveItem() {
	var form = document.forms["ShoppingList"];		
	var name = form.teetype.value;
    var size = form.size.value;
    var amount = form.amount.value;
    localStorage.setItem(name, size, amount);
    console.log(name, size, amount);
	doShowAll();
	
}
function SaveItem2() {
	var form = document.forms["ShoppingList2"];		
	var name = form.teetype.value;
    var size = form.size.value;
    var amount = form.amount.value;
    localStorage.setItem(name, size, amount);
    console.log(name, size, amount);
	doShowAll();
	
}
function SaveItem3() {
	var form = document.forms["ShoppingList3"];		
	var name = form.teetype.value;
    var size = form.size.value;
    var amount = form.amount.value;
    localStorage.setItem(name, size, amount);
    console.log(name, size, amount);
	doShowAll();
	
}
function SaveItem4() {
	var form = document.forms["ShoppingList4"];		
	var name = form.teetype.value;
    var size = form.size.value;
    var amount = form.amount.value;
    localStorage.setItem(name, size, amount);
    console.log(name, size, amount);
	doShowAll();
	
}

function doShowAll() {
	if (CheckBrowser()) {
		var key = "";
		var list = "<tr><th>Name</th><th>Size</th></tr>\n";
		var i = 0;
		//for more advance feature, you can set cap on max items in the cart
		for (i = 0; i <= localStorage.length-1; i++) {
			key = localStorage.key(i);
			list += "<tr><td>" + key + "</td>\n<td>"
					+ localStorage.getItem(key) + "</td></tr>\n";
		}
		//if no item exists in the cart
		if (list == "<tr><th>Item</th><th>Value</th></tr>\n") {
			list += "<tr><td><i>empty</i></td>\n<td><i>empty</i></td></tr>\n";
		}
		//bind the data to html table
		//you can use jQuery too....
		document.getElementById('list').innerHTML = list;
		addbadge(localStorage.length)
	} else {
		alert('Cannot save shopping list as your browser does not support HTML 5');
	}
}

function CheckBrowser() {
	if ('localStorage' in window && window['localStorage'] !== null) {
		// we can use localStorage object to store data
		return true;
	} else {
			return false;
	}
}
function ClearAll() {
	localStorage.clear();
	doShowAll();
}

function addbadge(x){
	if(x>0){
		document.getElementById('carditems').innerHTML = x;
	}
	else if(x<=0){
		document.getElementById('carditems').innerHTML = "";
	}
	
}
