import classes from "./header-frame.module.css";
import RegistrationButton from "@/components/header-frame/registration-button";
import Countdown from "@/components/header-frame/countdown";
import FormatAndDate from "@/components/header-frame/format-and-date";
import Arc from "@/components/header-frame/arc";
import CONSTANTS from "../../constants";
import Panel from "@/components/header-frame/panel";
import { useCountdown } from "@/hooks/useCountdown";

export default function HeaderFrame() {
  const [days, hours, minutes, seconds] = useCountdown();
  return (
    <div className={classes["header-frame"]}>
      <div className={classes.grid}>
        {new Date(Date.now()) <
        new Date(CONSTANTS.PROJECT_REGISTRATION_DEADLINE_PROLONGED) ? (
          <RegistrationButton />
        ) : null}
        <Countdown
          days={days}
          hours={hours}
          minutes={minutes}
          seconds={seconds}
        />
        <FormatAndDate />
        <Arc />
      </div>
    </div>
  );
}
