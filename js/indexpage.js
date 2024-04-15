

function openAboutMe() {
  var iframe = document.getElementById("aboutme-iframe");
  var closer = document.getElementById("popupCloser");

  // Affiche l'iframe
  iframe.style.display = "block";
  closer.style.display = "block";

  // Déclenche la transition en mettant l'opacité à 1 et en réinitialisant la transformation
  setTimeout(function() {
    iframe.style.opacity = "1";
    iframe.style.transform = "translateY(0)"; // Réinitialiser la transformation
  }, 100); // Un délai court pour permettre au navigateur de calculer la transition
}

function closePopup() {
  var iframe = document.getElementById("aboutme-iframe");
  var closer = document.getElementById("popupCloser");

  // Déclenche la transition en mettant l'opacité à 0 et en déplaçant l'iframe vers le bas
  iframe.style.opacity = "0";
  iframe.style.transform = "translateY(100%)"; // Déplacer l'iframe en bas
  closer.style.display = "none";

  // Retarde la fermeture de l'iframe pour permettre à la transition de se produire
  setTimeout(function() {
    iframe.style.display = "none";
  }, 500); // Utilisez une valeur légèrement plus grande que la durée de la transition (500ms dans cet exemple)
}
