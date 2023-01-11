let guestList = {
    randy: "Germany",
    karla: "France",
    wendy: "Japan",
    norman: "England",
    sam: "Argentina",
  };
  
  let studentName = prompt("Svp entrez votre Nom");
  
  if (studentName in guestList) {
      console.log("salut ! je suis  " + studentName + " est dans " + guestList[studentName]);
  }else {
      console.log("Salut ! je suis un invité.")
  }