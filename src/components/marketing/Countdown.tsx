"use client";

import { useEffect, useMemo, useState } from "react";
import { contactConfig } from "@/config/contact";

export function Countdown() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const target = new Date(contactConfig.countdownTarget).getTime();

    const tick = () => {
      const now = Date.now();
      const diff = Math.max(target - now, 0);

      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      });
    };

    tick();
    const interval = window.setInterval(tick, 1000);
    return () => window.clearInterval(interval);
  }, []);

  const pieces = useMemo(
    () => [
      { label: "JOURS", value: timeLeft.days },
      { label: "HEURES", value: timeLeft.hours },
      { label: "MINUTES", value: timeLeft.minutes },
      { label: "SECONDES", value: timeLeft.seconds },
    ],
    [timeLeft],
  );

  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
      {pieces.map((piece) => (
        <div key={piece.label} className="rounded-2xl border border-white/10 bg-white/5 p-4 text-center shadow-lg shadow-black/20 backdrop-blur-sm">
          <div className="text-3xl font-black text-white md:text-4xl">{String(piece.value).padStart(2, "0")}</div>
          <div className="mt-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-300">{piece.label}</div>
        </div>
      ))}
    </div>
  );
}
