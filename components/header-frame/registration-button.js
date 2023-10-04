import classes from "./registration-button.module.css";
import CONSTANTS from "../../constants";

export default function RegistrationButton({ gridArea }) {
  const handleClick = () =>
    window.open(CONSTANTS.REGISTRATION_LINK, "_blank").focus();

  return (
    <div className={classes.registration} onClick={handleClick}>
      <p className={classes.text}>Registration</p>
    </div>
  );
}
