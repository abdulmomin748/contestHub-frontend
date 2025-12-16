export function startDeadlineCountdown(deadline, callback) {
  const endTime = new Date(deadline).getTime();

  const timer = setInterval(() => {
    const now = Date.now();
    const diff = endTime - now;

    if (diff <= 0) {
      clearInterval(timer);
      callback({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
        isOver: true,
      });
      return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    callback({
      days,
      hours,
      minutes,
      seconds,
      isOver: false,
    });
  }, 1000);

  return () => clearInterval(timer);
}
