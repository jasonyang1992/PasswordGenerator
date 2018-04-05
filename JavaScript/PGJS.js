function PassGenFunction() {

  var x = document.getElementById("NumLet").value;
  var y = document.getElementById("NumNum").value;
  var z = document.getElementById("NumSym").value;
  var text = "";
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var xyz = x + y + z;

  var threeword = [
    "San",
    "Cow",
    "Tan",
    "Ran",
    "Gam",
    "Sad",
    "Top",
    "Kev",
    "Tra",
    "Fan",

    "Jan",
    "Wat",
    "Opp",
    "Lot",
    "Van",
    "Sat",
    "Nom",
    "Pot",
    "Vip",
    "Mix",

    "Wet",
    "Rat",
    "Pan",
    "Qan",
    "Iot",
    "Vet",
    "Xan",
    "Sat",
    "Kil",
    "Get",

    "Fat",
    "Jum",
    "Hap",
    "Sho",
    "Ret",
    "Rea",
    "Dog",
    "Cat",
    "Xan",
    "Jot"
  ]


  var Symbols1 = [
    "!",
    "@",
    "#",
    "$",
    "%",
    "^",
    "&",
    "*",
    "(",
    ")"
  ]
  if (x == 1){
    var Letresult = "";
    for (var i = 0; i < 1; i++)
    Letresult += possible.charAt(Math.floor(Math.random() * possible.length));

  }
  if (x == 2){
    var Letresult = "";
    for (var i = 0; i < 2; i++)
    Letresult += possible.charAt(Math.floor(Math.random() * possible.length));

  }
  if (x == 3){
  var Letresult = threeword[Math.floor(Math.random() * 40)]

  }
  if (x == 4){
    for (var i = 0; i < 1; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));
    var Letresult = text + threeword[Math.floor(Math.random() * 40)];

  }
  if (x == 5){
    for (var i = 0; i < 2; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));
    var Letresult = text + threeword[Math.floor(Math.random() * 40)];

  }
  if (x == 6){
    var Letresult = threeword[Math.floor(Math.random() * 40)] + threeword[Math.floor(Math.random() * 40)];

  }



  if (y == 1){
  var Numresult = Math.floor(Math.random() * 10);

  }
  if (y == 2){
  var Numresult = Math.floor(Math.random() * 90) + 10;

  }
  if (y == 3){
  var Numresult = Math.floor(Math.random() * 900) + 99;

  }
  if (y == 4){
  var Numresult = Math.floor(Math.random() * 9000) + 999;

  }



  if (z == 1){
    var Symresult = Symbols1[Math.floor(Math.random() * 10)]

  }
  if (z == 2){
    var Symresult = Symbols1[Math.floor(Math.random() * 10)] + Symbols1[Math.floor(Math.random() * 10)];

  }

  document.getElementById("Password").innerHTML = Letresult + Numresult + Symresult;
}
