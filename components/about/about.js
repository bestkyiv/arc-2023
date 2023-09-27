import classes from "./about.module.css";
import Title from "@/components/title";

export default function About() {
  const style = {
    fontFamily: "Black Ops One",
    fontSize: "78px",
    fill: "white",
  };

  const mobileStyle = {
    ...style,
    fontSize: "21px",
  };
  const textStyle = {
    fontFamily: "Kreadon Bold",
    fontSize: "54px",
    fill: "white",
  };

  const mobileTextStyle = {
    ...textStyle,
    fontSize: "20px",
  };

  const lastStyle = {
    ...style,
    fontSize: "60px",
  };

  const mobileLastStyle = {
    ...lastStyle,
    color: "white",
    fontSize: "18px",
  };

  return (
    <div className={classes.about + " section"} id={"about"}>
      <DesktopSvg style={style} textStyle={textStyle} lastStyle={lastStyle} />
      <MobileSvg
        style={mobileStyle}
        textStyle={mobileTextStyle}
        lastStyle={mobileLastStyle}
      />
    </div>
  );
}
function MobileSvg({ style, textStyle, lastStyle }) {
  return (
    <>
      <svg
        className={classes.mobile}
        width="332"
        height="337"
        viewBox="0 0 332 337"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M2.04245 291.243L2.04245 313.469L51.1002 313.468L53.4351 313.469L73.3222 313.44L109.322 313.469L134.976 334.244L158.725 334.259L163.493 334.262L223.613 334.302L228.381 334.305L287.94 334.344L292.708 334.347L316.43 309.744L316.43 199.741L329.764 168.211L329.822 80.7436L309.322 54.7436L309.322 12.4932L299.024 2.19534L265.322 2.19531L58.3175 2.1953L30.7272 2.15838L15.164 2.15838L8.6912 8.63118L8.6912 36.9932L2.1912 43.4932L2.13663 126.409L2.13641 143.898L2.06393 254.018L2.04245 269.609L2.04245 291.243Z"
          fill="#42019B"
          fill-opacity="0.5"
          stroke="#FFB800"
          stroke-width="4"
          stroke-miterlimit="16"
        />
        <text x="100" y="150">
          <tspan x="100" y="40" style={style}>
            Assemble,
          </tspan>
          <tspan x="45" y="70" style={style}>
            Research, Compete
          </tspan>
          <tspan x="12" y="100" style={textStyle}>
            ARC — <tspan className={classes.span}>офлайн</tspan> інженерні
          </tspan>
          <tspan x="12" y="125" style={textStyle}>
            змагання для студентів.
          </tspan>
          <tspan x="12" y="155" style={textStyle}>
            Збирай власну команду
          </tspan>
          <tspan x="12" y="180" style={textStyle}>
            або знайди нову на проєкті.
          </tspan>
          <tspan x="12" y="210" style={textStyle}>
            Обирай категорію та пропонуй
          </tspan>
          <tspan x="12" y="235" style={textStyle}>
            своє вирішення проблеми.
          </tspan>
          <tspan x="12" y="270" style={textStyle}>
            Покажи компаніям України
          </tspan>
          <tspan x="12" y="295" style={textStyle}>
            свої навички.
          </tspan>
          <tspan x="10" y="370" style={lastStyle}>
            FIND YOUR ENGINEERING SP<tspan className={classes.span}>ARC</tspan>
          </tspan>
        </text>
      </svg>
    </>
  );
}
function DesktopSvg({ style, textStyle, lastStyle }) {
  return (
    <svg
      className={classes.desktop}
      height="200px"
      viewBox="0 0 1728 833"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M537.469 1.99993L500.281 33L441.219 33L476.219 1.99993L537.469 1.99993Z"
        fill="#FFB904"
        fill-opacity="0.5"
      />
      <path
        d="M441.219 1.99994L404.031 33L392 33L392 1.99994L441.219 1.99994Z"
        fill="#FFB904"
        fill-opacity="0.5"
      />
      <path
        d="M537.469 1.99993L500.281 33L441.219 33L476.219 1.99993L537.469 1.99993Z"
        stroke="#FFB904"
        stroke-opacity="0.5"
        stroke-width="3"
      />
      <path
        d="M441.219 1.99994L404.031 33L392 33L392 1.99994L441.219 1.99994Z"
        stroke="#FFB904"
        stroke-opacity="0.5"
        stroke-width="3"
      />
      <path
        d="M634.219 1.99993L597.031 33L537.969 33L572.969 1.99993L634.219 1.99993Z"
        fill="#FFB904"
        fill-opacity="0.5"
        stroke="#FFB904"
        stroke-opacity="0.5"
        stroke-width="3"
      />
      <path
        d="M730.219 1.99993L693.031 33L633.969 33L668.969 1.99993L730.219 1.99993Z"
        fill="#FFB904"
        fill-opacity="0.5"
        stroke="#FFB904"
        stroke-opacity="0.5"
        stroke-width="3"
      />
      <path
        d="M826.219 1.99993L789.031 33L729.969 33L764.969 1.99993L826.219 1.99993Z"
        fill="#FFB904"
        fill-opacity="0.5"
        stroke="#FFB904"
        stroke-opacity="0.5"
        stroke-width="3"
      />
      <path
        d="M922.219 1.99993L885.031 33L825.969 33L860.969 1.99993L922.219 1.99993Z"
        fill="#FFB904"
        fill-opacity="0.5"
        stroke="#FFB904"
        stroke-opacity="0.5"
        stroke-width="3"
      />
      <path
        d="M1018.22 1.99993L981.031 33L921.969 33L956.969 1.99993L1018.22 1.99993Z"
        fill="#FFB904"
        fill-opacity="0.5"
        stroke="#FFB904"
        stroke-opacity="0.5"
        stroke-width="3"
      />
      <path
        d="M1114.22 1.99993L1077.03 33L1017.97 33L1052.97 1.99993L1114.22 1.99993Z"
        fill="#FFB904"
        fill-opacity="0.5"
        stroke="#FFB904"
        stroke-opacity="0.5"
        stroke-width="3"
      />
      <path
        d="M1210.22 1.99993L1173.03 33L1113.97 33L1148.97 1.99993L1210.22 1.99993Z"
        fill="#FFB904"
        fill-opacity="0.5"
        stroke="#FFB904"
        stroke-opacity="0.5"
        stroke-width="3"
      />
      <path
        d="M1306.22 1.99993L1269.03 33L1209.97 33L1244.97 1.99993L1306.22 1.99993Z"
        fill="#FFB904"
        fill-opacity="0.5"
        stroke="#FFB904"
        stroke-opacity="0.5"
        stroke-width="3"
      />
      <path
        d="M1402.22 1.99993L1365.03 33L1305.97 33L1340.97 1.99993L1402.22 1.99993Z"
        fill="#FFB904"
        fill-opacity="0.5"
        stroke="#FFB904"
        stroke-opacity="0.5"
        stroke-width="3"
      />
      <path
        d="M1461.03 1.99993L1461.03 33L1401.97 33L1436.97 1.99993L1461.03 1.99993Z"
        fill="#FFB904"
        fill-opacity="0.5"
        stroke="#FFB904"
        stroke-opacity="0.5"
        stroke-width="3"
      />
      <path
        d="M1725 544.63V795.684L1685.77 830H676.914L636.806 794.33V671.511H41.222L3 636.846V130.551L43.2336 94H272.38V144.572L1488.12 153.113L1523.23 182.895V279.696H1685.27L1721.98 313.756L1725 544.63Z"
        fill="#42019B"
        fill-opacity="0.5"
        stroke="#FFB800"
        stroke-width="5"
        stroke-miterlimit="16"
      />
      <text x="100" y="150">
        <tspan x="100" y="250" style={style}>
          Assemble, Research, Compete
        </tspan>
        <tspan x="100" y="350" style={textStyle}>
          ARC — <tspan className={classes.span}>офлайн</tspan> інженерні
          змагання для студентів.
        </tspan>
        <tspan x="100" y="445" style={textStyle}>
          Збирай власну команду, або знайди нову на проєкті.
        </tspan>
        <tspan x="100" y="545" style={textStyle}>
          Обирай категорію та пропонуй своє вирішення проблеми.
        </tspan>
        <tspan x="100" y="640" style={textStyle}>
          Покажи компаніям України свої навички.
        </tspan>
        <tspan x="675" y="770" style={lastStyle}>
          FIND YOUR ENGINEERING SP<tspan className={classes.span}>ARC</tspan>
        </tspan>
      </text>
    </svg>
  );
}
