// anims.ts

declare const gsap: typeof import('gsap').gsap

export function animateBalls({ amplitude = 50, speed = 2 } = {}) {
  const balls = document.querySelectorAll('.ball')
  if (!balls.length) return

  gsap.ticker.add(() => {
    const time = (gsap.ticker.frame / 60) * speed
    balls.forEach((ball, i) => {
      const phase = i * 0.6
      const y = Math.sin(time + phase) * amplitude
      gsap.set(ball, { y })
    })
  })
}
