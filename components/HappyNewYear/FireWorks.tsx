import React, { useState, useEffect } from 'react';

const FIREWORK_CONFIG = [
  {
    TYPE: 0,
    TIME: 5,
    MAX: 20,
    COLOR_ROLL: 360,
  },
  {
    TYPE: 0,
    TIME: 4,
    MAX: 10,
    COLOR_ROLL: 180,
  },
  {
    TYPE: 1,
    TIME: 6,
    MAX: 10,
    COLOR_ROLL: 180,
  },
];

const random = (num: number) => {
  return Math.random() * num;
};

const Particles = ({ count, type }: { count: number; type: string }) => {
  const particles = [];
  for (let i = 0; i < count; i++) {
    particles.push(
      <div
        key={`particle${i}`}
        className={`particle ${type ? 'line' : ''}`}
        style={{
          transform: `scale(${random(0.5) + 0.5}) rotate(${random(180)}deg)`,
          filter: `hue-rotate(${random(30)}deg) contrast(2)`,
        }}
      />
    );
  }
  return <>{particles}</>;
};

const Firework = ({ item }: any) => {
  const { TYPE, TIME, MAX, COLOR_ROLL } = item;
  const [amount, setAmount] = useState(0);
  const [isPlay, setIsPlay] = useState(false);

  useEffect(() => {
    if (isPlay) {
      setTimeout(() => {
        setAmount(0);
        setIsPlay(false);
      }, TIME * 1000);
    } else {
      setTimeout(() => {
        setIsPlay(true);
        setAmount(() => Math.round((Math.random() * MAX) / 2) + MAX / 2);
      }, 1000);
    }
  }, [isPlay]);

  return amount ? (
    <div
      className="particleBox"
      style={{
        filter: `hue-rotate(${random(COLOR_ROLL)}deg) contrast(2)`,
        left: 30 * random(1) + '%',
      }}
    >
      <Particles count={amount} type={TYPE} />
    </div>
  ) : (
    <></>
  );
};

const FireWorks = () => {
  return (
    <div className="wrapper">
      {FIREWORK_CONFIG.map((item, index) => (
        <Firework item={item} key={`firework${index}`} />
      ))}
    </div>
  );
};

export default FireWorks;
