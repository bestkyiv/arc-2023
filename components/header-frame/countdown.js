import { useCountdown } from "../../hooks/useCountdown";
import classes from "./countdown.module.css";

function Countdown({ date, gridArea }) {
  const [days, hours, minutes, seconds] = useCountdown(date);

  if (days + hours + minutes + seconds <= 0) {
    return (
      <p
        style={{
          fontFamily: "Black Ops One",
          fontSize: "3vw",
          color: "#FFFFFF",
          display: "inline-block",
          borderTop: "2px solid #FFB904",
          borderBottom: "2px solid #FFB904",
          width: "220px",
        }}
      >
        Already in progress
      </p>
    );
  } else {
    const timeRemaining = `${days} days ${hours
      .toString()
      .padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${seconds
      .toString()
      .padStart(2, "0")}`;
    return (
      <div className={classes.div}>
        <p className={classes.p}>{timeRemaining}</p>
      </div>
    );
  }
}

function Wrapper({ children }) {
  return (
    <div
      style={{
        padding: "4px",
        display: "inline-block",
        width: "",
        borderTop: "2px solid #FFB904",
        borderBottom: "2px solid #FFB904",
      }}
    >
      {children}
    </div>
  );
}
export default Countdown;
