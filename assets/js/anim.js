/* Simple atmospheric title pulse + subtle glitch flicker */
document.addEventListener('DOMContentLoaded', () => {
  const title = document.querySelector('.titles h1');
  const tag = document.querySelector('.tag');

  function pulse() {
    title.animate([
      { opacity: 0.9, filter: 'blur(0px)' },
      { opacity: 1, filter: 'blur(1px)' },
      { opacity: 0.85, filter: 'blur(0px)' }
    ], {
      duration: 3200,
      iterations: Infinity,
      easing: 'ease-in-out'
    });
  }

  function glitch() {
    setInterval(() => {
      if (Math.random() < 0.08) {
        tag.style.transform = 'translateX(' + (Math.random()*6 - 3) + 'px)';
        tag.style.opacity = 0.6;
        setTimeout(() => {
          tag.style.transform = 'translateX(0px)';
          tag.style.opacity = 1;
        }, 90);
      }
    }, 500);
  }

  pulse();
  glitch();
});
