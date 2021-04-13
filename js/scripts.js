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

function onLoad() {
    pdOnLoad();
}

function cartOnLoad() {
    if (localStorage.getItem("cart") != undefined) {
        cartitems = JSON.parse(localStorage.getItem("cart"));
    }
    updateqty();
    updateSubtotal();
    populate();
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
    this.index = cartitems.length;
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
    var cartnode = document.getElementById("cart");
    for (let i = 0; i < cartitems.length; i++) {
        let currItem = cartitems[i];
        let image = document.createElement("img");
        let itemName = document.createElement("h3")
        if (currItem.flavor == "original") {
            image.src = "../brickyl.github.io/images/mog.png";
            itemName.innerHTML = "Original";
        }
        else if (currItem.flavor == "blackberry") {
            image.src = "../brickyl.github.io/images/mblack.png";
            itemName.innerHTML = "Blackberry";
        }
        else if (currItem.flavor == "original, gluten free") {
            image.src = "../brickyl.github.io/images/mogf.png";        
            itemName.innerHTML = "Original, Gluten-Free";
        }
        else if (currItem.flavor == "pumpkin spice") {
            image.src = "../brickyl.github.io/images/mps.png";        
            itemName.innerHTML = "Pumpkin Spice";
        }
        else if (currItem.flavor == "caramel pecan") {
            image.src = "../brickyl.github.io/images/mcp.png";
            itemName.innerHTML = "Caramel Pecan";        
        }
        else if (currItem.flavor == "walnut") {
            image.src = "../brickyl.github.io/images/mwal.png";
            itemName.innerHTML = "Walnut";
        }
        
        let itemGlaze = document.createElement("p");
        itemGlaze.id = "itemGlaze";
        itemGlaze.innerHTML = "Glazing: " + currItem.glazing;
        let itemCt = document.createElement("p");
        itemCt.id = "itemCt";
        itemCt.innerHTML = "Count: " + currItem.count;
        let itemPrice = document.createElement("p");
        itemPrice.id = "itemPrice";
        itemPrice.innerHTML = "Price: " + currItem.price;
        cartnode.appendChild(image);
        cartnode.appendChild(itemName);
        cartnode.appendChild(itemGlaze);
        cartnode.appendChild(itemCt);
        cartnode.appendChild(itemPrice);
        
        let deleteBt = document.createElement("button");
        deleteBt.onclick = deleteItem;
        /* indexToDel = currIndex.index; */
        deleteBt.innerHTML = "Delete";
        cartnode.appendChild(deleteBt);
        cartnode.appendChild(document.createElement("hr"));
    }
}

var indexToDel;

function resetCart() {
    document.getElementById("cart").innerHTML = "";
}

function deleteItem() {
    delete cartitems[indexToDel];
    localStorage.setItem("cart", JSON.stringify(cartitems));
    resetCart();
    populate();
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
    for (i = 0; i < cartitems.length; i++) {
        st += cartitems[i].price;
     
    }
    console.log(document.getElementById("subtotal").innerHTML);
    document.getElementById("subtotal").innerHTML = "Subtotal: $" + st;
    console.log(document.getElementById("subtotal").innerHTML);
}