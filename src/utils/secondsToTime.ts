export const secondsToTime = (seconds: number) => {
  const hrs = Math.floor(seconds / 3600)
    .toString()
    .padStart(2, "0");

  const min = Math.floor((seconds % 3600) / 60)
    .toString()
    .padStart(2, "0");

  const sec = Math.floor(seconds % 60)
    .toString()
    .padStart(2, "0");

  return { hrs, min, sec };
};
