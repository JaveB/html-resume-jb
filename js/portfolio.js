const numStars = 100; // Reduced for performance

for (let i = 0; i < numStars; i++) {
  const star = document.createElement('div');
  star.classList.add('star');
  star.style.top = `${Math.random() * window.innerHeight}px`;
  star.style.left = `${Math.random() * window.innerWidth}px`;
  star.style.animationDuration = `${1 + Math.random() * 2}s`;
  star.style.opacity = Math.random();
  document.body.appendChild(star);
}

// ========== Floating Space Emojis ==========
const emojis = ["🚀", "🌌", "🪐", "🌠", "🌟"];
const emojiCount = 15;

for (let i = 0; i < emojiCount; i++) {
  const emoji = document.createElement('div');
  emoji.classList.add('emoji');
  emoji.textContent = emojis[Math.floor(Math.random() * emojis.length)];

  // Random start position and size
  emoji.style.left = `${Math.random() * 100}vw`;
  emoji.style.top = `${Math.random() * 100}vh`;
  emoji.style.animationDuration = `${8 + Math.random() * 10}s`;
  emoji.style.fontSize = `${1 + Math.random() * 2}rem`;

  document.body.appendChild(emoji);
}