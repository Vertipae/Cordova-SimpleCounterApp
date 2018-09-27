function modify_qty(val) {

    /* variables */
    var qty = document.getElementById('qty').value;
    /* (qty, 10) second parameter is the base of the number, default 10 so you don't really need that */
    var new_qty = parseInt(qty, 10) + val;
    /* variable new_qty can't be smaller than zero*/
    if (new_qty < 0) {
        new_qty = 0;
    }

    /* get's the qty and put it's value to new_qty and returns it*/
    document.getElementById('qty').value = new_qty;
    return new_qty;
}

function modify_reset() {
    /* "" = String, '' = Varchar */
    document.getElementById("qty").value = 0;
}