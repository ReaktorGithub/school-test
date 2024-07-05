const formatTime = (seconds: number): string => {
  const minutesNumber = Math.floor(seconds / 60);
  const secondsRestNumber = seconds - minutesNumber * 60;
  let minutes = String(minutesNumber);
  let secondsRest = String(secondsRestNumber);

  if (minutes.length === 1) {
    minutes = `0${minutes}`;
  }

  if (secondsRest.length === 1) {
    secondsRest = `0${secondsRest}`;
  }

  return `${minutes} : ${secondsRest}`;
};

export default formatTime;
