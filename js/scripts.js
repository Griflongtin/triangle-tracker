$(function() {

  $("form").submit(function(event) {
    event.preventDefault();
  var side1 = parseInt($("#input1").val());
  var side2 = parseInt($("#input2").val());
  var side3 = parseInt($("#input3").val());

  if (side1 + side2 <= side3 || side1 + side3 <= side2 || side2 + side3 <= side1) {
    alert("green things");
  } else if (side1 === side2 && side2 === side3 && side3 === side1) {
    alert("bad things");
  } else if (side1 === side2 || side2 === side3 || side3 === side1) {
    alert("cool things");
  } else if (side1 !== side2 && side2 !== side3 && side3 !== side1){
    alert("whuuuuut things");
  }

  });


});
