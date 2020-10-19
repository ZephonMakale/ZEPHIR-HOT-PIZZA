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
    const size = document.getElementById("sizes").value;
    alert(size);
    const toppings = document.getElementById("toppings").value;
    const crust = getElementById("crust").value;
  }

