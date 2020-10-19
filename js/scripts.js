// $(document).ready(function() {
//     function updateTotal(){
//         var crust = 100;
//         var toppings = 150;
//         var tot = 0;
//         tot += f.sizes.value * 3 +
//                f.toppings.value * 3.5 +
//                f.crust.value * 12 +
//                f.delivery.value * 12;
//         document.getElementById("cost").value = tot.toFixed(2);
//       }

//       var f = document.forms['myForm'];
//       var sel = document.getElementsByTagName("select");

//       for(var i=0; i<sel.length; i++) {
//         sel[i].onchange = function(){updateTotal()};
//       }

//       f.onsubmit = function(){
//         alert("Your total cost will be: \\$" + f.cost.value);
//         return false;
//       }
// });

function myFunction() {
  var size = parseInt(document.getElementById("sizes").value);
  
  var toppings = parseInt(document.getElementById("toppings").value);
 
  var crust = parseInt(document.getElementById("crusts").value);
  
  var delivery = parseInt(document.getElementById("delivery").value);

  var quantities = parseInt(document.getElementById("quantity").value);
  
  var totalCost = (delivery + size + toppings + crust) * quantities ;
  alert(totalCost);
  
}
