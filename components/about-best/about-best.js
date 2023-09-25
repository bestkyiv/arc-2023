import Title from "@/components/title";
import classes from "./about-best.module.css";
import CONSTANTS from "../../constants";
import React from "react";

export default function AboutBest() {
  return (
    <div className={"section"}>
      <Title title={"We are BEST Kyiv"} />
      <div className={classes.photos}>
        {Array.from({ length: 3 }, (_, i) => (
          // eslint-disable-next-line react/jsx-key
          <img src={`about-best-${i + 1}.png`} className={classes.img} />
        ))}
      </div>
      <div>
        <p className={classes.text}>{CONSTANTS.ABOUT_BEST_ABBREVIATION}</p>
        <p className={classes.text}>{CONSTANTS.ABOUT_BEST_0}</p>
        <p className={classes.text}>{CONSTANTS.ABOUT_BEST_1}</p>
      </div>
    </div>
  );
}
