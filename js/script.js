const SKY = document.querySelector('[data-sky]');
const QUANTITY = SKY.dataset.sky ? +SKY.dataset.sky : 100;

if (SKY) {
  setStars();
  window.addEventListener('resize', setStars);

  function setStars() {
    const skySize = {
      width: SKY.offsetWidth,
      height: SKY.offsetHeight
    };

    const TOTAL_STARS = getStarsQuantity(skySize);
    let starTemplate = '';

    for (let star = 0; star < TOTAL_STARS; star++) {
      const starPos = getStarPos(skySize);
      const starStyle = `position: absolute; top: ${starPos.top}px; left: ${starPos.left}px;`;
      const starClass = `star star--type-${Math.floor(Math.random() * 3)}`;
      starTemplate += `<div style="${starStyle}" class="${starClass}"></div>`;
    }

    SKY.innerHTML = starTemplate;
  }

  function getStarsQuantity(skySize) {
    const qH = skySize.width / 100 * (QUANTITY / 2);
    const qV = skySize.height / 100 * (QUANTITY / 2);
    return qH + qV;
  }

  function getStarPos(skySize) {
    return {
      top: Math.floor(Math.random() * skySize.height),
      left: Math.floor(Math.random() * skySize.width)
    };

    
  }  
// ========== Floating Emojis in Random Directions ==========
const emojis = ["🚀", "🌌", "🪐", "🌠", "🌟"];
const emojiCount = 12; // keep it light to avoid lag

for (let i = 0; i < emojiCount; i++) {
  const emoji = document.createElement('div');
  emoji.classList.add('emoji');
  emoji.textContent = emojis[Math.floor(Math.random() * emojis.length)];

  // Random starting position on screen
  emoji.style.left = `${Math.random() * 100}vw`;
  emoji.style.top = `${Math.random() * 100}vh`;

  // Random animation direction class
  const directions = ['float-up', 'float-down', 'float-left', 'float-right'];
  const dir = directions[Math.floor(Math.random() * directions.length)];
  emoji.classList.add(dir);

  // Random duration and size
  emoji.style.animationDuration = `${10 + Math.random() * 10}s`;
  emoji.style.fontSize = `${1 + Math.random() * 2}rem`;

  document.body.appendChild(emoji);
}
  
}
