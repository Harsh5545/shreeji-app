import confetti from "canvas-confetti";

export const handleConfetti = () => {
    confetti({
        particleCount: 300,
        spread: 70,
        origin: { y: 0.6 },
        
    });
};

export const handleFirework = () => {
createRocketTrail();
  confetti({
    particleCount: 500,
    spread: 360,
    startVelocity: 30,
    decay: 0.95,
    gravity: 1,
    colors: ['#FFD700', '#FF4500', '#1E90FF', '#00FF00', '#FF69B4'], // Custom colors for the burst
    origin: { y: 0 },
  });
  
};

const createRocketTrail = () => {
  const trail = document.createElement('div');
  trail.className = 'firework-trail';
  document.body.appendChild(trail);

  setTimeout(() => {
    document.body.removeChild(trail);
  }, 1000);
};


export const firework = () => {
  const duration = 4 * 1000,
    animationEnd = Date.now() + duration,
    defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 100 };

  function randomInRange(min, max) {
    return Math.random() * (max - min) + min;
  }

  const interval = setInterval(function () {
    const timeLeft = animationEnd - Date.now();

    if (timeLeft <= 0) {
      return clearInterval(interval);
    }

    const particleCount = 50 * (timeLeft / duration);

    // Explosion at the top
    confetti(
      Object.assign({}, defaults, {
        particleCount,
        origin: { x: randomInRange(0.5, 0.5), y: 0 },
      })
    );

    // Rocket trails
    confetti(
      Object.assign({}, defaults, {
        particleCount,
        origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
      })
    );
    confetti(
      Object.assign({}, defaults, {
        particleCount,
        origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
      })
    );
  }, 250);
};