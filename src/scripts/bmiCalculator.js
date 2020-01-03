//ADDING THE FUNCTION calculateBMI() on the calculate button
var calculateButton = document.getElementById("calculate-btn");
calculateButton.addEventListener("click", calculateBMI);

//FUNCTION TO CALCULATE THE BMI
function calculateBMI() {
  //LOOP VARIABLES
  var i;
  //HEIGHT AND WEIGHT
  var weight = document.getElementById("weight").value;
  var height = document.getElementById("height").value;
  //RESULTS
  var result = [
    "You are Underweight",
    "You are Normal",
    "You are Overweight",
    "You are Obese"
  ];
  var colorResult = ["red", "greenyellow"];
  var textConclusions = [
    (underweightConclusion = document.getElementById("underweight")),
    (normalConclusion = document.getElementById("normal")),
    (overweightConclusion = document.getElementById("overweight")),
    (obeseConclusion = document.getElementById("obese"))
  ];
  var conclusion = document.getElementById("result-conclusion");
  //COMPUTATIONS
  var bmi = document.getElementById("bmi");
  var heightPow = Math.pow(height, 2);
  bmi.value = (weight / heightPow).toFixed(1);
  //OTHER VARIABLES
  var div3 = document.getElementById("sec-div3");
  var tips = document.getElementById("result-conclusion-tips");
  var bodyTypes = document.getElementById("body-types");
  var tipsForYou = document.getElementById("tips-for-you").innerHTML = "We have offers for you";
  //CHECKING IF THE INPUT FIELDS ARE EMPTY
  if (height == "" && weight == "") {
    bmi.value = '"Please put your Statistics"';
    alert('"Please put your Statistics"');
  } else if (weight == "") {
    bmi.value = '"Please put your weight"';
    alert('"Please put your weight"');
  } else if (height == "") {
    bmi.value = '"Please put your height"';
    alert('"Please put your height"');
  }
  //COMPUTING THE RESULT IF UNDERWEIGHT,OVERWEIGHT,NORMAL, OR OBESE
  if (bmi.value <= 18.5) {
    conclusion.style.color = colorResult[0];
    div3.style.border = "2px solid red";
    conclusion.innerHTML = result[0];
    for (i = 0; i < textConclusions.length; i++) {
      if (i == 0) {
        textConclusions[i].style.display = "block";
        continue;
      }
      textConclusions[i].style.display = "none";

    }
  } else if (bmi.value <= 24.9) {
    conclusion.style.color = colorResult[1];
    div3.style.border = "2px solid greenyellow";
    conclusion.innerHTML = result[1];

    for (i = 0; i < textConclusions.length; i++) {
      if (i == 1) {
        textConclusions[i].style.display = "block";
        continue;
      }
      textConclusions[i].style.display = "none";

    }
  } else if (bmi.value <= 29.9) {
    conclusion.style.color = colorResult[0];
    div3.style.border = "2px solid red";
    conclusion.innerHTML = result[2];

    for (i = 0; textConclusions.length; i++) {
      if (i == 2) {
        textConclusions[i].style.display = "block";
        continue;
      }
      textConclusions[i].style.display = "none";

    }
  } else if (bmi.value >= 30) {
    conclusion.style.color = colorResult[0];
    div3.style.border = "2px solid red";
    conclusion.innerHTML = result[3];

    for (i = 0; textConclusions.length; i++) {
      if (i == 3) {
        textConclusions[i].style.display = "block";
        continue;
      }
      textConclusions[i].style.display = "none";

    }
  }
}

