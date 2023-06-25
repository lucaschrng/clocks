'use client';

import { gsap } from 'gsap';
import { useEffect, useState } from 'react';
import dayjs from 'dayjs';
import { digitPatterns } from '@/const/digitPatterns';
import { animations } from '@/utils/animations';
import { displayTime } from '@/utils/displayTime';
import { resetMockClocks } from '@/utils/resetMockClocks';

export default function Home() {
  const [time, setTime] = useState(dayjs().format('HHmm'));
  const [seconds, setSeconds] = useState(0);
  const [animationIndex, setAnimationIndex] = useState(0);

  const updateTime = () => {
    if (time !== dayjs().format('HHmm')) setTime(dayjs().format('HHmm'));
    setSeconds(dayjs().second());
    setTimeout(updateTime, 1000);
  };

  useEffect(() => {
    gsap.to('.pointer', {
      duration: 0,
      rotation: 225,
    });
  }, []);

  useEffect(() => {
    displayTime(time, 10, 0);

    updateTime();
  }, [time]);

  useEffect(() => {
    if (seconds === 20) {
      animations[animationIndex]();
      setAnimationIndex((animationIndex + 1) % animations.length);

      resetMockClocks(10, 20);
      displayTime(time, 10, 20);
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
              className={`pointer pointer-${j} clock-${i}-pointer-${j} inset absolute flex h-full w-full justify-center p-0.5`}
            >
              <div className="h-1/2 w-1 translate-y-0.5 rounded-b-full bg-white"></div>
            </div>
          ))}
        </div>
      ))}
    </main>
  );
}
