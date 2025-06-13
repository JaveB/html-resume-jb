const hearts = ['🛸', '👽', '🛸', '🐙', '🚀'];
  const activeHearts = [];
  const maxHearts = 50; // 🧠 Limit total hearts on screen

  function createHeart() {
    if (activeHearts.length >= maxHearts) return;

    const heart = document.createElement('div');
    heart.className = 'floating-heart';
    heart.innerText = hearts[Math.floor(Math.random() * hearts.length)];

    // Initial position
    let x = Math.random() * (window.innerWidth - 30);
    let y = Math.random() * (window.innerHeight - 30);

    // Velocity
    let dx = (Math.random() - 0.5) * 2;
    let dy = (Math.random() - 0.5) * 2;

    document.body.appendChild(heart);

    activeHearts.push({ el: heart, x, y, dx, dy, life: 10000 });
  }

  function animateHearts(timestamp) {
    for (let i = activeHearts.length - 1; i >= 0; i--) {
      const h = activeHearts[i];
      h.x += h.dx;
      h.y += h.dy;

      // Bounce off edges
      if (h.x <= 0 || h.x >= window.innerWidth - 30) h.dx *= -1;
      if (h.y <= 0 || h.y >= window.innerHeight - 30) h.dy *= -1;

      // Apply transform for better performance
      h.el.style.transform = `translate(${h.x}px, ${h.y}px)`;

      // Reduce life
      h.life -= 16;
      if (h.life <= 0) {
        h.el.remove();
        activeHearts.splice(i, 1);
      }
    }

    requestAnimationFrame(animateHearts);
  }

  // Start animation loop
  requestAnimationFrame(animateHearts);

  // Add a new heart every 200ms
  setInterval(createHeart, 200);