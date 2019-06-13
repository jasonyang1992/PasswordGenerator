function PassGenFunction() {

  var LetCounter = document.getElementById("NumLet").value; //Letter
  var NumCounter = document.getElementById("NumNum").value; // Numbers
  var SymCounter = document.getElementById("NumSym").value; // Symbols

  var possibleCont = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"; // Letter
  var possibleVowel = "AEIOUaeiou"  //Vowels
  var possibleSym = "!@#$%^&*()" // Symbols
  var FinalResult = ""; //String result

// Generate random Letters
  for (var i = 0; i < LetCounter; i++) {
      if ((i - 1) % 3 == 0) {
        FinalResult += possibleVowel.charAt(Math.floor(Math.random() * possibleVowel.length));
      }
      else{
        FinalResult += possibleCont.charAt(Math.floor(Math.random() * possibleCont.length));
      }
  }

// Generate random Symbols
  for (var i = 0; i < SymCounter; i++ ) {
    FinalResult += possibleSym.charAt(Math.floor(Math.random() * possibleSym.length));
  }

//Generate random Numbers
  for (var i = 0; i < NumCounter; i++ ) {
    FinalResult += Math.floor(Math.random() * 10);
  }

  document.getElementById("Password").innerHTML = FinalResult; // Final result
}
