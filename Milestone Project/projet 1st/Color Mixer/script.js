
function mixColors() {
    var first = document.getElementById("first-color").value.toLowerCase();
    var second = document.getElementById("second-color").value.toLowerCase();
    var result;
    switch (first) {
      case "red":
        switch (second) {
          case "blue":
            result = "purple";
            document.body.style.backgroundColor = "purple";
            break;
          case "yellow":
            result = "orange";
            document.body.style.backgroundColor = "orange";
            break;
          default:
            result = "Invalid color combination";
        }
        break;
      case "blue":
        switch (second) {
          case "red":
            result = "purple";
            break;
          case "yellow":
            result = "green";
            document.body.style.backgroundColor = "green";
            break;
          default:
            result = "Invalid color combination";
        }
        break;
      case "yellow":
        switch (second) {
          case "red":
            result = "orange";
            document.body.style.backgroundColor = "orange"
            break;
          case "blue":
            result = "green";
            document.body.style.backgroundColor = "green"
            break;
          default:
            result = "Invalid color combination";
        }
        break;
      default:
        result = "Invalid color combination";
    }
    alert("The resulting color is: " + result);
  }