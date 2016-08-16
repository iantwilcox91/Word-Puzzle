$(function() {
  $("button.GO").click(function(event){
    var inputstring = $("input#BOX").val();
    var newinputstring = inputstring.split("");
    for( var i=0; i < inputstring.length; i++){
      if(inputstring.charAt(i) === 'a' || inputstring.charAt(i) === 'e' || inputstring.charAt(i) === 'i' || inputstring.charAt(i) === 'o' || inputstring.charAt(i) === 'u' || inputstring.charAt(i) === 'y') {
        newinputstring[i] = "-";
        // alert(newinputstring);
      }
    event.preventDefault()
    };
    var finalinputstring = newinputstring.join('');
    alert(finalinputstring);
  });
});


// var a = ['Wind', 'Rain', 'Fire'];
// var myVar1 = a.join();      // assigns 'Wind,Rain,Fire' to myVar1
// var myVar2 = a.join(', ');  // assigns 'Wind, Rain, Fire' to myVar2
// var myVar3 = a.join(' + '); // assigns 'Wind + Rain + Fire' to myVar3
// var myVar4 = a.join('');    // assigns 'WindRainFire' to myVar4
