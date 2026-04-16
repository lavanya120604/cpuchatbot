import { useState, useEffect } from "react";

export function CountdownTimer() {
  const targetDate = new Date("2026-05-08T09:00:00+05:30"); // BCA major exams

  const [timeLeft, setTimeLeft] = useState(getTimeLeft());

  function getTimeLeft() {
    const now = new Date();
    const diff = targetDate.getTime() - now.getTime();
    if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    return {
      days: Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((diff / (1000 * 60)) % 60),
      seconds: Math.floor((diff / 1000) % 60),
    };
  }

  useEffect(() => {
    const timer = setInterval(() => setTimeLeft(getTimeLeft()), 1000);
    return () => clearInterval(timer);
  }, []);

  const units = [
    { label: "Days", value: timeLeft.days },
    { label: "Hours", value: timeLeft.hours },
    { label: "Min", value: timeLeft.minutes },
    { label: "Sec", value: timeLeft.seconds },
  ];

  return (
    <div className="w-full max-w-md mx-auto">
      <h3 className="text-center text-sm font-semibold text-primary-foreground/90 mb-3 uppercase tracking-wider">
        🎓 Final Exams Countdown — May 8, 2026
      </h3>
      <div className="grid grid-cols-4 gap-2">
        {units.map(({ label, value }) => (
          <div
            key={label}
            className="flex flex-col items-center rounded-xl bg-background/15 backdrop-blur-sm px-2 py-3"
          >
            <span className="text-2xl font-bold text-primary-foreground tabular-nums">
              {String(value).padStart(2, "0")}
            </span>
            <span className="text-[10px] text-primary-foreground/70 uppercase tracking-wider">
              {label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
