

document.addEventListener("DOMContentLoaded", function() {
  const box = document.querySelector('.box');

  document.addEventListener('mousemove', function(e) {
    const mouseX = e.clientX;
    const mouseY = e.clientY;

    box.style.left = mouseX/40 + 'px';
    box.style.top = mouseY/40 + 'px';
  });
});


