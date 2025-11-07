import React, { useEffect, useState } from 'react';

function getTimeLeft(targetDate) {
  const diff = +targetDate - +new Date();
  const clamp = (n) => (n < 0 ? 0 : n);
  return {
    days: clamp(Math.floor(diff / (1000 * 60 * 60 * 24))),
    hours: clamp(Math.floor((diff / (1000 * 60 * 60)) % 24)),
    minutes: clamp(Math.floor((diff / (1000 * 60)) % 60)),
    seconds: clamp(Math.floor((diff / 1000) % 60)),
  };
}

export default function Countdown({ target = new Date(Date.now() + 1000 * 60 * 60 * 24 * 14) }) {
  const [time, setTime] = useState(getTimeLeft(target));

  useEffect(() => {
    const id = setInterval(() => setTime(getTimeLeft(target)), 1000);
    return () => clearInterval(id);
  }, [target]);

  const Item = ({ label, value }) => (
    <div className="flex flex-col items-center px-4">
      <div className="text-white text-3xl md:text-4xl font-semibold tabular-nums">{String(value).padStart(2, '0')}</div>
      <div className="text-neutral-400 text-xs md:text-sm mt-1 tracking-widest uppercase">{label}</div>
    </div>
  );

  return (
    <div className="w-full flex items-center justify-center py-10 md:py-12 bg-black/80 border-y border-white/5">
      <div className="flex divide-x divide-white/10">
        <Item label="Days" value={time.days} />
        <Item label="Hours" value={time.hours} />
        <Item label="Minutes" value={time.minutes} />
        <Item label="Seconds" value={time.seconds} />
      </div>
    </div>
  );
}
