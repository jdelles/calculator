function dropDown() {
    var navigation = document.getElementById("navigation");
    console.log(navigation); 
    if (navigation.className === "fullDisplay") {
      navigation.className += " responsive";
    } else {
      navigation.className = "fullDisplay";
    }
  }