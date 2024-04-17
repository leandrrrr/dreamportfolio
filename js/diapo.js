

function initDiapo() {
  var diapo1 = document.getElementById("diapo1");
  var diapo2 = document.getElementById("diapo2");
  var diapo3 = document.getElementById("diapo3");

  diapo1.style.opacity = "0.4";
  diapo2.style.opacity = "1";
  diapo3.style.opacity = "0.4";
  diapo1.style.transform = "translateY(-30%)";
  diapo3.style.transform = "translateY(70%)";
}

var selectedDiapo = 2;

function moveDiapo(move) {
  if (move > 1 || move < -1 || move == 0) {
    console.log("error");
    return; // Utilisez return pour quitter la fonction
  }
  switch (selectedDiapo) {
    case 1:
      var diapoTop = document.getElementById("diapo3");
      var diapoMiddle = document.getElementById("diapo1");
      var diapoBottom = document.getElementById("diapo2");
      break;
    case 2:
      var diapoTop = document.getElementById("diapo1");
      var diapoMiddle = document.getElementById("diapo2");
      var diapoBottom = document.getElementById("diapo3");
      break;
    case 3:
      var diapoTop = document.getElementById("diapo2");
      var diapoMiddle = document.getElementById("diapo3");
      var diapoBottom = document.getElementById("diapo1");
      break;
  }

  diapoMiddle.style.opacity = "1"; // Met à jour l'opacité de la diapo du milieu
  diapoTop.style.opacity = "0.4";   // Met à jour l'opacité de la diapo du haut
  diapoBottom.style.opacity = "0.4"; // Met à jour l'opacité de la diapo du bas

  diapoMiddle.style.transform = "translateY(-30%)"; // Déplacement de la diapo du milieu
  diapoTop.style.transform = "translateY(-50%)";    // Déplacement de la diapo du haut
  diapoBottom.style.transform = "translateY(70%)";  // Déplacement de la diapo du bas

  // Met à jour la valeur de selectedDiapo en fonction du déplacement
  selectedDiapo += move;
  if (selectedDiapo > 3) {
    selectedDiapo = 1;
  } else if (selectedDiapo < 1) {
    selectedDiapo = 3;
  }
}




