import CONSTANTS from "../../constants";
import classes from "./format-and-date.module.css";
export default function FormatAndDate({ fontSize, gridArea }) {
  const format = CONSTANTS.FORMAT.toUpperCase();

  const dateFromDay = new Date(CONSTANTS.PROJECT_DATE_FROM).getDate();
  const dateTo = new Date(CONSTANTS.PROJECT_DATE_TO);

  const style = {
    padding: "24px 46px",
    display: "inline-block",
    fontFamily: "Black Ops One",
    fontSize: `3vw`,
    color: "#FFFFFF",
    backgroundColor: "#42019B",
    border: "4px solid #FFB904",
    gridArea: gridArea,
    justifySelf: "center",
    // alignSelf: "center",
    textAlign: "center",
  };

  return (
    <div className={classes.div}>
      <p className={classes.p}>{format}</p>
      <p className={classes.p}>
        {dateFromDay.toString().padStart(2, "0")}-
        {`${dateTo.getDate()}/${dateTo.getMonth() + 1}/${dateTo.getFullYear()}`}
      </p>
    </div>
  );
}
