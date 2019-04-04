

function cSquare(inp) {
  inp = inp.replace(/[^A-Za-z ]/gi, '');

  var size = Math.sqrt(inp.length);

  if (size > parseInt(size)){
    size = parseInt(size) + 1;
  }


   var  out = "";
   inp = inp.split("");
  for(var i = 0; i < size; i++){
    for(var j = i; j < inp.length; j+=size){
      out += inp[j];

    }
  }

  return out;
}

$(document).ready(function(){
  $("form").submit (function(event){
    event.preventDefault();
    var userInput = $("input").val();
    var phrase =cSquare(userInput);

    $("#result").text(phrase);

  });
});
