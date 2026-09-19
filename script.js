const partyPage = document.getElementById('party-page');
const blowButton = document.getElementById('blow-button');
const readyStatus = document.getElementById('ready-status');
const celebrationStatus = document.getElementById('celebration-status');
const confettiLayer = document.getElementById('confetti-layer');

const colors = ['#ef5b62', '#ffd447', '#16a9a2', '#4969d8', '#ff9cac', '#ffffff'];

function launchConfetti() {
  confettiLayer.replaceChildren();

  for (let index = 0; index < 92; index++) {
    const piece = document.createElement('span');
    const isStreamer = index % 9 === 0;
    piece.className = isStreamer ? 'streamer' : 'confetti-piece';
    piece.style.left = `${Math.random() * 100}%`;
    piece.style.background = colors[index % colors.length];
    piece.style.setProperty('--drift', `${(Math.random() - 0.5) * 260}px`);
    piece.style.setProperty('--spin', `${360 + Math.random() * 900}deg`);
    piece.style.setProperty('--tilt', `${-35 + Math.random() * 70}deg`);
    piece.style.setProperty('--fall-duration', `${1.6 + Math.random() * 1.65}s`);
    piece.style.setProperty('--fall-delay', `${Math.random() * 0.38}s`);
    confettiLayer.appendChild(piece);
  }
}

function celebrate() {
  if (partyPage.classList.contains('is-celebrating')) return;

  partyPage.classList.add('is-celebrating');
  blowButton.disabled = true;
  blowButton.classList.add('opacity-60', 'cursor-not-allowed');
  readyStatus.classList.add('is-hidden');
  celebrationStatus.classList.remove('is-hidden');

  window.setTimeout(launchConfetti, 260);
}

blowButton.addEventListener('click', celebrate);