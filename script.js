
window.onload = function() {

    var input = document.getElementById("inputBox");
    var container = document.getElementById("container");
    container.addEventListener("click", function(a) {
      buttonClick(a.target.id);
    });
    var calc = document.getElementById("button=");
    calc.addEventListener("click", calculate);
  
    var c = document.getElementById("buttonc");
    c.addEventListener("click", erase);
  
    function buttonClick(buttonId) {
      if (buttonId != "buttonc" && buttonId != "button=") {
        var button = document.getElementById(buttonId);
        var tmp = buttonId;
        tmp = tmp.replace("button", "");
        entries(tmp);
      }
    }
    function entries(tmp) {
      input.value += tmp;
    }
    function calculate() {
      if (input.value == ".") {
        alert("Please enter mathmatical expression");
        return;
      }
      input.value = eval(input.value);
    }
    function erase() {
      input.value = "";
    }
  };