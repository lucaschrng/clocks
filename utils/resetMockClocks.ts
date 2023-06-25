import { gsap } from 'gsap';

export const resetMockClocks = (duration: number, delay: number) => {
  for (let i = 0; i < 15; i++) {
    for (let j = 0; j < 2; j++) {
      gsap.to(`.clock-${i}-pointer-${j}`, {
        duration,
        delay,
        ease: 'power1.inOut',
        rotation: 225,
      });
    }
  }

  for (let i = 0; i < 15; i++) {
    for (let j = 0; j < 2; j++) {
      gsap.to(`.clock-${i + 7 * 15}-pointer-${j}`, {
        duration,
        delay,
        ease: 'power1.inOut',
        rotation: 225,
      });
    }
  }

  for (let i = 1; i <= 6; i++) {
    [0, 7, 14].forEach((j) => {
      for (let k = 0; k < 2; k++) {
        gsap.to(`.clock-${i * 15 + j}-pointer-${k}`, {
          duration,
          delay,
          ease: 'power1.inOut',
          rotation: 225,
        });
      }
    });
  }
};
