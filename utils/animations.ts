import { gsap } from 'gsap';

export function wave() {
  gsap.to('.pointer-0', {
    duration: 10,
    rotation: 225,
  });

  gsap.to('.pointer-1', {
    duration: 10,
    rotation: 45,
  });

  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 15; j++) {
      gsap.to(`.clock-${i * 15 + j}-pointer-0`, {
        duration: 15.2,
        delay: 10 + 0.2 * j,
        rotation: 585,
        ease: 'power1.inOut',
      });

      gsap.to(`.clock-${i * 15 + j}-pointer-1`, {
        duration: 15.2,
        delay: 10 + 0.2 * j,
        rotation: 405,
        ease: 'power1.inOut',
      });
    }
  }
}
