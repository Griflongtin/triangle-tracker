$(function() {

  $("form").submit(function(event) {
    event.preventDefault();
  var side1 = parseInt($("#input1").val());
  var side2 = parseInt($("#input2").val());
  var side3 = parseInt($("#input3").val());

  // if (side1 + side2 <= side3 || side1 + side3 <= side2 || side2 + side3 <= side1) {
  //   $("#not").show();
  if (side1 === side2 && side2 === side3 && side3 === side1) {
    $("#equil-output").show();
  } else if (side1 === side2 && side1 !== side3 || side2 === side3 && side2 !== side1 || side3 === side1 && side3 !== side2) {
      $("#iso-output").show();
  } else if ((side1 + side3) <= side2 || (side2 + side3) <= side1 || (side1 + side2) <= side3) {
          $("#not").show();
  } else if (side1 !== side2 && side2 !== side3 && side3 !== side1) {
      $("#scal-output").show();
  }

  });


});
