import classes from "./header-frame.module.css";
import RegistrationButton from "@/components/header-frame/registration-button";
import Countdown from "@/components/header-frame/countdown";
import FormatAndDate from "@/components/header-frame/format-and-date";
import Arc from "@/components/header-frame/arc";
import CONSTANTS from "../../constants";
import Panel from "@/components/header-frame/panel";

export default function HeaderFrame() {
  return (
    <div className={classes["header-frame"]}>
      <div className={classes.grid}>
        <RegistrationButton gridArea={"registration"} />
        <Countdown date={CONSTANTS.PROJECT_DATE_FROM} gridArea={"countdown"} />
        <FormatAndDate gridArea={"formatAndDate"} />
        <Arc gridArea={"arc"} />
      </div>
      <Panel />
    </div>
  );
}
