document.addEventListener('DOMContentLoaded', () => {
  console.log('Hello world!');

  const handleResize = () => {
    const currentPositionElements = document.querySelectorAll('.current-position');
    const locationElements = document.querySelectorAll('.location');
    const navElement = document.querySelector('.nav');

    if (window.innerWidth <= 600) {
      currentPositionElements.forEach(element => {
        element.style.display = 'none';
      });
      locationElements.forEach(element => {
        element.style.visibility = 'hidden';
        element.style.display = 'block';
      });
      navElement.innerHTML = '<p class="nav-item"><bold>Menu</bold></p>';
    } else {
      currentPositionElements.forEach(element => {
        element.style.display = 'block';
      });
      locationElements.forEach(element => {
        element.style.visibility = 'visible';
        element.style.display = 'block';
      });
      navElement.innerHTML = `
        <p class="nav-item"><bold>Work</bold></p>
        <p class="nav-item"><bold>About</bold></p>
        <p class="nav-item"><bold>Contact</bold></p>
      `;
    }
  }

  // Run on load
  handleResize();

  // Run on resize
  window.addEventListener('resize', handleResize);

  const navItem = document.querySelector('.nav .nav-item');
  const fullscreenMenu = document.querySelector('.fullscreen-menu');
  const closeMenu = document.querySelector('.fullscreen-menu .close-menu');

  navItem.addEventListener('click', () => {
    fullscreenMenu.classList.remove('hidden');
    fullscreenMenu.classList.add('visible');
  });

  closeMenu.addEventListener('click', () => {
    fullscreenMenu.classList.remove('visible');
    fullscreenMenu.classList.add('hidden');
  });
});
