import Title from "@/components/title";
import classes from "./about-best.module.css";
import CONSTANTS from "../../constants";
import React from "react";

export default function AboutBest() {
  return (
    <div className={"section" + ` ${classes["about-best"]}`}>
      <Title title={"We are BEST Kyiv"} />
      <Mobile />
      <Desktop />
      <div>
        <p className={classes.abbreviation}>
          {CONSTANTS.ABOUT_BEST_ABBREVIATION}
        </p>
        <p className={classes.text}>{CONSTANTS.ABOUT_BEST_0}</p>
        <p className={classes.text}>{CONSTANTS.ABOUT_BEST_1}</p>
      </div>
    </div>
  );
}
function Mobile() {
  return (
    <div className={classes["photos-mobile"]}>
      <img src={`about-best-mobile.png`} className={classes.img} />
    </div>
  );
}

function Desktop() {
  return (
    <div className={classes["photos-desktop"]}>
      {Array.from({ length: 3 }, (_, i) => (
        // eslint-disable-next-line react/jsx-key
        <img src={`about-best-${i + 1}.png`} className={classes.img} />
      ))}
    </div>
  );
}
