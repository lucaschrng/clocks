import { gsap } from 'gsap';

function wave() {
  gsap.to('.pointer-0', {
    duration: 10,
    ease: 'power1.inOut',
    rotation: 225,
  });

  gsap.to('.pointer-1', {
    duration: 10,
    ease: 'power1.inOut',
    rotation: 45,
  });

  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 15; j++) {
      gsap.to(`.clock-${i * 15 + j}-pointer-0`, {
        duration: 7.2,
        delay: 10 + 0.2 * j,
        rotation: 585,
        ease: 'power1.inOut',
      });

      gsap.to(`.clock-${i * 15 + j}-pointer-1`, {
        duration: 7.2,
        delay: 10 + 0.2 * j,
        rotation: 405,
        ease: 'power1.inOut',
      });
    }
  }
}

function square() {
  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 15; j++) {
      gsap.to(`.clock-${i * 15 + j}-pointer-0`, {
        duration: 10,
        ease: 'power1.inOut',
        rotation: i % 2 ? 0 : 180,
      });

      gsap.to(`.clock-${i * 15 + j}-pointer-1`, {
        duration: 10,
        ease: 'power1.inOut',
        rotation: j % 2 ? 270 : 90,
      });

      if (i % 2) {
        gsap.to(`.clock-${i * 15 + j}-pointer-0`, {
          duration: 10,
          delay: 10,
          ease: 'power1.inOut',
          rotation: j % 2 ? 360 : -360,
        });

        gsap.to(`.clock-${i * 15 + j}-pointer-1`, {
          duration: 10,
          delay: 10,
          ease: 'power1.inOut',
          rotation: j % 2 ? -90 : 450,
        });
      } else {
        gsap.to(`.clock-${i * 15 + j}-pointer-0`, {
          duration: 10,
          delay: 10,
          ease: 'power1.inOut',
          rotation: j % 2 ? -180 : 540,
        });

        gsap.to(`.clock-${i * 15 + j}-pointer-1`, {
          duration: 10,
          delay: 10,
          ease: 'power1.inOut',
          rotation: j % 2 ? 630 : -270,
        });
      }
    }
  }
}

export const animations = [wave, square];
