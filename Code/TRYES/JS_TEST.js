/**
 * Created by jhonnyjmr on 1/17/17.
 */


function checck(bb) {
    bb.length
}
/*
 parseInt(num); // default way
 parseInt(num, 10); // parseInt with radix (decimal)
 parseFloat(num) // floating point
 Number(num); // Number constructor
 */
function numberConvertion(aa) {
    var number = aa;
    document.writeln(aa + " converted to number with parseInt(num); is " + String(parseInt(number))+"<br>");
    document.writeln(aa + " converted to number with parseInt(num, 10); is " + String(parseInt(number, 10))+"<br>");
    document.writeln(aa+ " converted to number with parseFloat(num); is "+String(parseFloat(number))+"<br>");
    document.writeln(aa+ " converted to number with Number(num); is "+String(Number(number))+"<br>"+"<br>");

}



