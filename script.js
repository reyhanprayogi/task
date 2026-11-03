const clock = document.getElementById('clock');

function updateClock() {
  const now = new Date();
  const time = now.toLocaleTimeString('id-ID', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false,
  });
  clock.textContent = time;
}

updateClock();
setInterval(updateClock, 1000);

const cards = document.querySelectorAll('.stat-card, .info-item');

cards.forEach((card) => {
  card.addEventListener('mouseenter', () => {
    card.style.transform = 'translateY(-2px)';
    card.style.boxShadow = '0 0 18px rgba(126, 249, 255, 0.15)';
  });

  card.addEventListener('mouseleave', () => {
    card.style.transform = 'translateY(0)';
    card.style.boxShadow = 'none';
  });
});
