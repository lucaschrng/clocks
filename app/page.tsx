'use client';

import { gsap } from 'gsap';
import { useEffect, useState } from 'react';
import dayjs from 'dayjs';
import { digitPatterns } from '@/const/digitPatterns';
import { wave } from '@/utils/animations';

export default function Home() {
  const [time, setTime] = useState(dayjs().format('HHmm'));
  const [seconds, setSeconds] = useState(0);

  const updateTime = () => {
    if (time !== dayjs().format('HHmm')) setTime(dayjs().format('HHmm'));
    setSeconds(dayjs().second());
    setTimeout(updateTime, 1000);
  };

  useEffect(() => {
    gsap.to('.pointer', {
      duration: 2,
      rotation: 225,
    });

    for (let i = 0; i < 4; i++) {
      const offsets = [16, 19, 23, 26];

      digitPatterns[time[i]].forEach((row, j) => {
        row.forEach((angles, k) => {
          gsap.to(`.clock-${j * 15 + k + offsets[i]}-pointer-${0}`, {
            duration: 10,
            rotation: angles[0],
          });
          gsap.to(`.clock-${j * 15 + k + offsets[i]}-pointer-${1}`, {
            duration: 10,
            rotation: angles[1],
          });
        });
      });
    }

    updateTime();
  }, [time]);

  useEffect(() => {
    if (seconds === 20) {
      wave();
      gsap.to('.pointer', {
        duration: 12,
        delay: 28,
        rotation: 225,
      });
    }
  }, [seconds]);

  return (
    <main
      className="m-auto grid w-min gap-1"
      style={{
        gridTemplateColumns: 'repeat(15, min-content)',
        gridTemplateRows: 'repeat(8, min-content)',
      }}
    >
      {Array.from({ length: 120 }, (_, i) => (
        <div
          key={i}
          className="relative h-24 w-24 rounded-full bg-neutral-900"
          style={{
            boxShadow:
              'inset 5px 5px 14px #101010, inset -5px -5px 14px #1e1e1e',
          }}
        >
          {Array.from({ length: 2 }, (_, j) => (
            <div
              key={j}
              className={`pointer pointer-${j} clock-${i}-pointer-${j} inset absolute flex h-full w-full justify-center`}
            >
              <div className="h-1/2 w-1 translate-y-0.5 rounded-b-full bg-white"></div>
            </div>
          ))}
        </div>
      ))}
    </main>
  );
}
