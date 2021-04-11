function updateimg() {
    var flavorchoice = $("#flavors").val();
    var image = document.getElementById('pdimage');
    if (flavorchoice == "original") {
        pdimage.src = "../brickyl.github.io/images/mog.png";
    }
    else if (flavorchoice == "blackberry") {
        pdimage.src = "../brickyl.github.io/images/mblack.png";
    }
    else if (flavorchoice == "original, gluten free") {
        pdimage.src = "../brickyl.github.io/images/mogf.png";        
    }
    else if (flavorchoice == "pumpkin spice") {
        pdimage.src = "../brickyl.github.io/images/mps.png";        
    }
    else if (flavorchoice == "caramel pecan") {
        pdimage.src = "../brickyl.github.io/images/mcp.png";        
    }
    else if (flavorchoice == "walnut") {
        pdimage.src = "../brickyl.github.io/images/mwal.png";
    }
}  

function pdOnLoad() {
    if (localStorage.getItem("cart") != undefined) {
        cartitems = JSON.parse(localStorage.getItem("cart"));
    }
    updateqty();
}

function cartOnLoad() {
    if (localStorage.getItem("cart") != undefined) {
        cartitems = JSON.parse(localStorage.getItem("cart"));
    }
    updateqty();
    updateSubtotal();
}

function selectGlaze(selectedG) {
    lastClickedGlaze = selectedG;
}

var cartitems = [];
var lastClickedGlaze = document.createElement("button");
lastClickedGlaze.innerHTML = "None";
var prices = {
    "original" : 4,
    "blackberry" : 5,
    "caramel pecan" : 6,
    "original, gluten free" : 4,
    "pumpkin spice" : 5,
    "walnut" : 5 
};

function Item (flavor, glazing, count) {
    this.flavor = flavor;
    this.glazing = glazing;
    this.count = count;
    this.price = prices[this.flavor] * this.count;
}

function addtocart() {
    var flav = $("#flavors").val();
    var glaz = lastClickedGlaze.innerHTML;
    var ct = $("#numberbuns").val();
    var newItem = new Item(flav, glaz, ct);
    cartitems.push(newItem);
    localStorage.setItem("cart", JSON.stringify(cartitems));
    updateafteradd();
    updateItemTotal(newItem.price);
}

function getCart() {
    JSON.parse(localStorage.getItem("myCat"));
}

function updateafteradd() {
    var newcartstr = "Cart - " + cartitems.length;
    document.getElementById('carttext').innerHTML = newcartstr;
    setcartstr(newcartstr);
    return true;
}

function getcartstr() {
    var cartstr = localStorage.getItem("cartstr");
    return cartstr || "Cart - 0";
}

function setcartstr(cartstr) {
    localStorage.setItem("cartstr", cartstr);
}

function updateqty() {
    var cartstr = getcartstr();
    document.getElementById('carttext').innerHTML = cartstr;
}

function populate() {

}

function updateCart() {

}

function makeDiv() {
    var a = document.createElement("div");

}

function updateItemTotal(price) {
	document.getElementById("orderTotal").innerHTML = "Total: $" + price;
}

function updatetotalandimage() {
    updateimg();
    var itemprice = prices[$("#flavors").val()];
    var itemcount = $("#numberbuns").val();
    updateItemTotal(itemprice * itemcount);
}

function updateSubtotal() {
    var st = 0;
    for (i = 0; i < cartitems; i++) {
        st += cartitems[i].price;
    }
    console.log(document.getElementById("subtotal").innerHTML);
    document.getElementById("subtotal").innerHTML = "Subtotal: $" + st;
    console.log(document.getElementById("subtotal").innerHTML);
}