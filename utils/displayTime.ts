import { digitPatterns } from '@/const/digitPatterns';
import { gsap } from 'gsap';

export const displayTime = (
  time: string,
  duration: number,
  delay: number = 0
) => {
  for (let i = 0; i < 4; i++) {
    const offsets = [16, 19, 23, 26];

    digitPatterns[time[i]].forEach((row, j) => {
      row.forEach((angles, k) => {
        gsap.to(`.clock-${j * 15 + k + offsets[i]}-pointer-${0}`, {
          duration,
          delay,
          ease: 'power1.inOut',
          rotation: angles[0],
        });
        gsap.to(`.clock-${j * 15 + k + offsets[i]}-pointer-${1}`, {
          duration,
          delay,
          ease: 'power1.inOut',
          rotation: angles[1],
        });
      });
    });
  }
};
