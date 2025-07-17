export const secondsToTime = (seconds: number) => {
  const min = Math.floor((seconds / 60) % 60)
    .toString()
    .padStart(2, "0");
  const sec = Math.floor((seconds % 60) % 60)
    .toString()
    .padStart(2, "0");

  return { min, sec };
};
