var newarray = calcpayments();
display_results(newarray);

function calcpayments()
{
    

    var HOTDOG_COST = 4.25;
    var FRIES_COST = 2.60;
    var DRINKS_COST = 1.5;
    // Items Ordered and Quantities

    var num_hotdogs = prompt("How many hotdogs?");
    var num_fries = prompt("How many fries?");
    var num_drinks = prompt("How many drinks?");
    var total_hotdogs = parseFloat((num_hotdogs * HOTDOG_COST).toFixed(2));
    var total_fries = parseFloat((num_fries * FRIES_COST).toFixed(2));
    var total_drinks = parseFloat((num_drinks * DRINKS_COST).toFixed(2));

    // Subtotal
    var subtotal = (total_hotdogs + total_fries + total_drinks);

    // Joe's Special: 10% off for orders of $20 or more
    var discount = 0;
    if (subtotal >= 20) {
        discount =  (0.1 * subtotal).toFixed(2);
    
    }
    else {

    }
    subtotal = parseFloat(subtotal - discount).toFixed(2);
    

    // Massachusett's Tax
    var tax = parseFloat((.0625 * subtotal)).toFixed(2);

    // Total
    var total = (parseFloat(subtotal) + parseFloat(tax)).toFixed(2);

    return [num_hotdogs, total_hotdogs, num_fries, total_fries, num_drinks, total_drinks, subtotal, discount, tax, total]
    
}

function display_results(array) {
    document.getElementById("num_hotdogs").innerHTML = array[0];
    document.getElementById("price_hotdogs").innerHTML = array[1];
    document.getElementById("num_fries").innerHTML = array[2];
    document.getElementById("price_fries").innerHTML = array[3];
    document.getElementById("num_drinks").innerHTML = array[4];
    document.getElementById("price_drinks").innerHTML = array[5];
    document.getElementById("subtotal").innerHTML = array[6];
    document.getElementById("discount").innerHTML = array[7];
    document.getElementById("tax_cost").innerHTML = array[8];
    document.getElementById("total").innerHTML = array[9];
}
