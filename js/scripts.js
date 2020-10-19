mdoi
function myFunction() {
  var size = parseInt(document.getElementById("sizes").value);
  
  var toppings = parseInt(document.getElementById("toppings").value);
 
  var crust = parseInt(document.getElementById("crusts").value);
  
  var delivery = parseInt(document.getElementById("delivery").value);

  var quantities = parseInt(document.getElementById("quantity").value);
  
  var totalCost = (delivery + size + toppings + crust) * quantities ;
alert("Your total amount charged for the order " + totalCost)
  
}
 