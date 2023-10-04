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
    fontSize: "56px",
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

function DesktopSvg({ style, textStyle, lastStyle }) {
  return (
        <svg className={classes.desktop} viewBox="0 0 1751 773" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1528.22 77.584L1536 89.7134V180.879H1571.89L1605.19 180.879L1748 180.879V199.497V232V254.438V391.122L1735.44 404.306L1704.62 436.65V718.224L1654.91 770.394H1571.89L1546.54 770.394H1229.87L1204.52 770.394H884.878H859.526H733.259L689 736L624.5 689.603H461.338L434.991 688.631H357.939L333 666L306.723 643.861H294.308H71.1048L49.5 599.5L33.3242 564.132L3 535.775V335.444L33.3239 303.621V77.584L33.3242 45L184.837 45.0001L287.078 45L331.592 77.584L1528.22 77.584Z" fill="#42019B" fill-opacity="0.5" stroke="#FFB800" stroke-width="5" stroke-miterlimit="16"/>
          <path d="M479.469 2.00005L442.281 33.0001L383.219 33.0001L418.219 2.00006L479.469 2.00005Z" fill="#FFB904" fill-opacity="0.5"/>
          <path d="M383.219 2.00006L346.031 33.0001L334 33.0001L334 2.00006L383.219 2.00006Z" fill="#FFB904" fill-opacity="0.5"/>
          <path d="M479.469 2.00005L442.281 33.0001L383.219 33.0001L418.219 2.00006L479.469 2.00005Z" stroke="#FFB904" stroke-opacity="0.5" stroke-width="3"/>
          <path d="M383.219 2.00006L346.031 33.0001L334 33.0001L334 2.00006L383.219 2.00006Z" stroke="#FFB904" stroke-opacity="0.5" stroke-width="3"/>
          <path d="M576.219 2.00005L539.031 33.0001L479.969 33.0001L514.969 2.00006L576.219 2.00005Z" fill="#FFB904" fill-opacity="0.5" stroke="#FFB904" stroke-opacity="0.5" stroke-width="3"/>
          <path d="M672.219 2.00005L635.031 33.0001L575.969 33.0001L610.969 2.00006L672.219 2.00005Z" fill="#FFB904" fill-opacity="0.5" stroke="#FFB904" stroke-opacity="0.5" stroke-width="3"/>
          <path d="M768.219 2.00005L731.031 33.0001L671.969 33.0001L706.969 2.00006L768.219 2.00005Z" fill="#FFB904" fill-opacity="0.5" stroke="#FFB904" stroke-opacity="0.5" stroke-width="3"/>
          <path d="M864.219 2.00005L827.031 33.0001L767.969 33.0001L802.969 2.00006L864.219 2.00005Z" fill="#FFB904" fill-opacity="0.5" stroke="#FFB904" stroke-opacity="0.5" stroke-width="3"/>
          <path d="M960.219 2.00005L923.031 33.0001L863.969 33.0001L898.969 2.00006L960.219 2.00005Z" fill="#FFB904" fill-opacity="0.5" stroke="#FFB904" stroke-opacity="0.5" stroke-width="3"/>
          <path d="M1056.22 2.00005L1019.03 33.0001L959.969 33.0001L994.969 2.00006L1056.22 2.00005Z" fill="#FFB904" fill-opacity="0.5" stroke="#FFB904" stroke-opacity="0.5" stroke-width="3"/>
          <path d="M1152.22 2.00005L1115.03 33.0001L1055.97 33.0001L1090.97 2.00006L1152.22 2.00005Z" fill="#FFB904" fill-opacity="0.5" stroke="#FFB904" stroke-opacity="0.5" stroke-width="3"/>
          <path d="M1248.22 2.00005L1211.03 33.0001L1151.97 33.0001L1186.97 2.00006L1248.22 2.00005Z" fill="#FFB904" fill-opacity="0.5" stroke="#FFB904" stroke-opacity="0.5" stroke-width="3"/>
          <path d="M1344.22 2.00005L1307.03 33.0001L1247.97 33.0001L1282.97 2.00006L1344.22 2.00005Z" fill="#FFB904" fill-opacity="0.5" stroke="#FFB904" stroke-opacity="0.5" stroke-width="3"/>
          <path d="M1403.03 2.00005L1403.03 33.0001L1343.97 33.0001L1378.97 2.00005L1403.03 2.00005Z" fill="#FFB904" fill-opacity="0.5" stroke="#FFB904" stroke-opacity="0.5" stroke-width="3"/>
          <text x="100" y="150">
            <tspan x="100" y="200" style={style}>
              Assemble, Research, Compete
            </tspan>
            <tspan x="100" y="300" style={textStyle}>
              ARC — <tspan className={classes.span}>офлайн</tspan> інженерні
              змагання для студентів.
            </tspan>
            <tspan x="100" y="380" style={textStyle}>
              Збирай власну команду, або знайди нову на проєкті.
            </tspan>
            <tspan x="100" y="460" style={textStyle}>
              Обирай категорію та пропонуй своє вирішення проблеми.
            </tspan>
            <tspan x="100" y="540" style={textStyle}>
              Покажи компаніям України свої навички.
            </tspan>
            <tspan x="700" y="700" style={lastStyle}>
              FIND YOUR ENGINEERING SP<tspan className={classes.span}>ARC</tspan>
            </tspan>
          </text>
        </svg>
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
