var romanNumGen = function(number) {
  var romanConversions = {
    M:1000,
    CM:900,
    D:500,
    CD:400,
    C:100,
    XC:90,
    L:50,
    XL:40,
    X:10,
    IX:9,
    V:5,
    IV:4,
    I:1
  }
  var romanized = "";

    for(var prop in romanConversions) {
      while(number >= romanConversions[prop]) {
        romanized += prop;
        number -= romanConversions[prop];
      }

   }
   return romanized;
}

$(document).ready(function() {
  $("form#roman").submit(function(event) {
    var number = parseInt($("input#number").val());
    var result = romanNumGen(number);

    $(".roman-num").text(result);

    $("#result").show();
    event.preventDefault();
  });

});
