// inspired by https://blog.greenroots.info/how-to-create-a-countdown-timer-using-react-hooks

import { useEffect, useState } from "react";
import CONSTANTS from "../constants";

const useCountdown = () => {
  const targetDate = getTargetDate(new Date(Date.now()));

  let countDownDate = new Date(targetDate).getTime();

  const [countDown, setCountDown] = useState();

  useEffect(() => setCountDown(countDownDate - new Date().getTime()), []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCountDown(countDownDate - new Date().getTime());
    }, 1000);

    return () => clearInterval(interval);
  }, [countDownDate]);

  return getReturnValues(countDown);
};

const getTargetDate = (currentTs) => {
  if (currentTs <= new Date(CONSTANTS.PROJECT_REGISTRATION_DEADLINE))
    return CONSTANTS.PROJECT_REGISTRATION_DEADLINE;
  else if (
    isBetweenDates(
      currentTs,
      new Date(CONSTANTS.PROJECT_REGISTRATION_DEADLINE),
      new Date(CONSTANTS.PROJECT_REGISTRATION_DEADLINE_PROLONGED),
    )
  )
    return CONSTANTS.PROJECT_REGISTRATION_DEADLINE_PROLONGED;
  else if (
    isBetweenDates(
      currentTs,
      new Date(CONSTANTS.PROJECT_REGISTRATION_DEADLINE_PROLONGED),
      new Date(CONSTANTS.PROJECT_DATE_FROM),
    ) ||
    currentTs > new Date(CONSTANTS.PROJECT_DATE_FROM)
  )
    return CONSTANTS.PROJECT_DATE_FROM;
};

const isBetweenDates = (date, dateFrom, dateTo) =>
  date >= dateFrom && date <= dateTo;

const getReturnValues = (countDown) => {
  // calculate time left
  const days = Math.floor(countDown / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (countDown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
  );
  const minutes = Math.floor((countDown % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((countDown % (1000 * 60)) / 1000);

  return [days, hours, minutes, seconds];
};

export { useCountdown };
