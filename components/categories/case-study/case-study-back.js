import CONSTANTS from "../../../constants";
import classes from "../flipping-card.module.css";
export default function CaseStudyBack() {
  const header = CONSTANTS.CATEGORIES.CASE_STUDY.header;
  const linesOfText = CONSTANTS.CATEGORIES.CASE_STUDY.text;

  const style = {
    fill: "white",
    fontFamily: "Kreadon Bold",
    fontSize: "36px",
    textShadow: "0 0 100px white",
  };

  const headerStyle = {
    fill: "white",
    fontFamily: "Black Ops One",
    fontSize: "60px",
  };
  return (
    <svg
      className={classes.img}
      width="666"
      height="619"
      viewBox="0 0 666 619"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8.25617 52.0125L15.595 43.3438L318.321 41.4174L333.916 23.1167H399.048L409.139 10.5951H423.817L414.643 23.1167H432.073L441.246 10.5951H453.172L444.916 23.1167H467.85L476.106 10.5951H488.949L482.527 23.1167H500.874L507.296 10.5951H521.973L516.469 23.1167H535.734L541.238 10.5951H554.998L550.411 23.1167H572.428H591.831L649.485 82.8348L650.403 582.399L624.717 610.331H214.661L206.405 599.736H94.4878L20.1823 522.68V461.999L8.25667 446.588L8.25617 52.0125Z"
        fill="#07001B"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M0 52.0125L15.595 34.675H301.809L333.916 0H581.601L665.998 87.6508L665.998 578.546L627.47 619H88.9837L0.000503397 527.497L0 52.0125ZM15.595 43.3438L8.25617 52.0125L8.25667 446.588L20.1823 461.999V522.68L94.4878 599.736H206.405L214.661 610.331H624.717L650.403 582.399L649.485 82.8348L591.831 23.1167H572.428H550.411L554.998 10.5951H541.238L535.734 23.1167H516.469L521.973 10.5951H507.296L500.874 23.1167H482.527L488.949 10.5951H476.106L467.85 23.1167H444.916L453.172 10.5951H441.246L432.073 23.1167H414.643L423.817 10.5951H409.139L399.048 23.1167H333.916L318.321 41.4174L15.595 43.3438Z"
        fill="#41009C"
      />
      <text>
        <tspan x="150" y={`${160}px`} style={headerStyle}>
          {header}
        </tspan>
        {linesOfText.map((line, i) => (
          <tspan x="50" y={`${300 + i * 60}px`} style={style} key={i}>
            {line}
          </tspan>
        ))}
      </text>
    </svg>
  );
}
