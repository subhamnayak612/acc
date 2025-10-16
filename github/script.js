document.getElementById("calculate").addEventListener("click", function() {
  let weight = document.getElementById("weight").value;
  let height = document.getElementById("height").value;

  if (weight > 0 && height > 0) {
    let bmi = (weight / (height * height)).toFixed(2);
    document.getElementById("result").innerText = "Your BMI is: " + bmi;
  } else {
    document.getElementById("result").innerText = "Please enter valid numbers!";
  }
});
