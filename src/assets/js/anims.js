document.addEventListener("DOMContentLoaded", () => {
    const balls = document.querySelectorAll('.ball');
    const amplitude = 50;
    const speed = 2;

    gsap.ticker.add(() => {
      const time = gsap.ticker.frame / 60 * speed;

      balls.forEach((ball, i) => {
        const phase = i * 0.6; // phase offset per ball
        const y = Math.sin(time + phase) * amplitude;
        gsap.set(ball, { y });
      });
    });
  });