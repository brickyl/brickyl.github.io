function validate(){
    var entered = new Date($("#txtDate").val());
    var y = $("#phone").val();
    var today = new Date();
    if (entered >= today) {
        alert("Date of birth is not valid. Date has to be before today.");
        return false;
    }
    if (isNaN(y) || y.length != 10) {
        alert("Phone number is not valid or not in a valid format");
        return false;
    }
    return true;
    
}

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

var buncount = 0;

function updateafteradd() {
    var thisQty = $("#numberbuns").val();
    var carttxt = document.getElementById('carttext');

    var cartnum = carttxt.innerHTML.replace( /^\D+/g, '');
    var total = parseInt(cartnum) + parseInt(thisQty);
    buncount = total;

    var newcartstr = "Cart - " + total;
    document.getElementById('carttext').textContent = newcartstr;
    setcartstr(newcartstr);
    return false;

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