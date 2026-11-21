import { useEffect, useState } from 'react';

function formatTime(timeZone: string): string {
  try {
    return new Date().toLocaleTimeString('en-GB', { timeZone, hour: '2-digit', minute: '2-digit' });
  } catch {
    return '--:--';
  }
}

/** Returns the current HH:MM time in the given IANA time zone, updated every 15 seconds. */
export function useClock(timeZone: string): string {
  const [time, setTime] = useState(() => formatTime(timeZone));

  useEffect(() => {
    const id = window.setInterval(() => setTime(formatTime(timeZone)), 15_000);
    return () => window.clearInterval(id);
  }, [timeZone]);

  return time;
}
