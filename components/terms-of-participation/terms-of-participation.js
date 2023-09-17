import Title from "@/components/title";
import classes from "@/components/terms-of-participation/terms-of-participation.module.css";
export default function TermsOfParticipation() {
  const terms = [
    "Будь студентом будь-якого київського ВНЗ",
    "Обери: Innovative Design або Case study",
    "Зареєструйся до 00/00/2023",
    "Потрап в команду або сформуй свою (max - 4)",
    "Пройди відбірні завдання",
  ];

  const divStyle = {
    display: "inline-block",
    border: "2px solid #FFB800",
    height: "5px",
  };
  const style = {
    fontFamily: "Black Ops One",
    fontSize: "78px",
    fill: "white",
  };

  const textStyle = {
    fontFamily: "Kreadon Bold",
    fontSize: "46px",
    fill: "white",
  };

  const lastStyle = {
    ...style,
    fontSize: "60px",
  };

  const imgStyle = {
    width: "100px",
    height: "100px",
  };

  return (
    <div
      className={classes["terms-of-participation"]}
      id={"terms-of-participation"}
    >
      <Title title={"Terms of participation"} />

      <svg
        width="80vw"
        height="599"
        viewBox="0 0 1391 599"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M546.219 2.00017L509.031 33.0002L449.969 33.0003L484.969 2.00018L546.219 2.00017Z"
          fill="#FFB904"
          fill-opacity="0.5"
          stroke="#FFB904"
          stroke-opacity="0.5"
          stroke-width="3"
        />
        <path
          d="M642.219 2.00017L605.031 33.0002L545.969 33.0003L580.969 2.00018L642.219 2.00017Z"
          fill="#FFB904"
          fill-opacity="0.5"
          stroke="#FFB904"
          stroke-opacity="0.5"
          stroke-width="3"
        />
        <path
          d="M449.469 2.00017L412.281 33.0002L353.219 33.0003L388.219 2.00018L449.469 2.00017Z"
          fill="#FFB904"
          fill-opacity="0.5"
        />
        <path
          d="M353.219 2.00018L316.031 33.0003L304 33.0003L304 2.00018L353.219 2.00018Z"
          fill="#FFB904"
          fill-opacity="0.5"
        />
        <path
          d="M449.469 2.00017L412.281 33.0002L353.219 33.0003L388.219 2.00018L449.469 2.00017Z"
          stroke="#FFB904"
          stroke-opacity="0.5"
          stroke-width="3"
        />
        <path
          d="M353.219 2.00018L316.031 33.0003L304 33.0003L304 2.00018L353.219 2.00018Z"
          stroke="#FFB904"
          stroke-opacity="0.5"
          stroke-width="3"
        />
        <path
          d="M731.25 2.99993L694.062 34L635 34L670 2.99993L731.25 2.99993Z"
          fill="#FFB904"
          fill-opacity="0.5"
          stroke="#FFB904"
          stroke-opacity="0.5"
          stroke-width="3"
        />
        <path
          d="M785.062 2.99993L785.062 34L726 34L761 2.99993L785.062 2.99993Z"
          fill="#FFB904"
          fill-opacity="0.5"
          stroke="#FFB904"
          stroke-opacity="0.5"
          stroke-width="3"
        />
        <path
          d="M976 565L938.812 596L879.75 596L914.75 565L976 565Z"
          fill="#FFB904"
          fill-opacity="0.5"
        />
        <path
          d="M886.219 565L849.031 596L837 596L837 565L886.219 565Z"
          fill="#FFB904"
          fill-opacity="0.5"
        />
        <path
          d="M976 565L938.812 596L879.75 596L914.75 565L976 565Z"
          stroke="#FFB904"
          stroke-opacity="0.5"
          stroke-width="3"
        />
        <path
          d="M886.219 565L849.031 596L837 596L837 565L886.219 565Z"
          stroke="#FFB904"
          stroke-opacity="0.5"
          stroke-width="3"
        />
        <path
          d="M1068.25 566L1031.06 597L972 597L1007 566L1068.25 566Z"
          fill="#FFB904"
          fill-opacity="0.5"
          stroke="#FFB904"
          stroke-opacity="0.5"
          stroke-width="3"
        />
        <path
          d="M1117.56 566L1117.56 597L1058.5 597L1093.5 566L1117.56 566Z"
          fill="#FFB904"
          fill-opacity="0.5"
          stroke="#FFB904"
          stroke-opacity="0.5"
          stroke-width="3"
        />
        <path
          d="M1388 490.041V104.479C1388 98.433 1388 77.2682 1388 69.1263H1375.97C1374.93 69.1263 1373.92 69.1289 1372.91 69.1337C1350.04 69.2449 1334.53 69.1263 1329.03 69.1263L1320.57 57.3422H1203.44C1200.27 61.2702 1193.81 57.3422 1193.31 57.3422H1065.1H1054.97H990.069L975.507 74.2818H866.607V86.8024H820.704V69.1263L615.283 66.0218H542.31H486.83H268.906L201.711 3H150.11L139.663 20.3079H30.1078V31.3555V47.927L32.4412 122.891H22.6274H3V494.092L13.1304 508.454L25.7932 525.025L45.104 547.489L72.0127 578.79L73.9121 581H199.908L208.772 570.689H341.414L349.962 580.632H415.175L428.471 565.165H451.265H539.905H581.376H767.203L849.97 524.503L857.884 515.297H875.296L884.793 526.345H907.902H931.673H950.323H1007.43H1070.3L1078.53 516.77H1101.96L1177.8 558.536L1189.19 571.794H1254.72L1268.34 555.959H1375.97L1388 551.171V540.86V490.041Z"
          fill="#42019B"
          fill-opacity="0.5"
          stroke="#FFB904"
          stroke-width="5"
        />
        <text x="100" y="150">
          {terms.map((term, index) => (
            <tspan
              key={index}
              x="160"
              y={`${160 + index * 80}`}
              style={textStyle}
            >
              {term}
            </tspan>
          ))}
        </text>
      </svg>

      {/*<svg*/}
      {/*  width="80vw"*/}
      {/*  height="584"*/}
      {/*  viewBox="0 0 1391 584"*/}
      {/*  fill="none"*/}
      {/*  xmlns="http://www.w3.org/2000/svg"*/}
      {/*>*/}
      {/*  <path*/}
      {/*    d="M1388 490.041V104.479C1388 98.433 1388 77.2682 1388 69.1263H1375.97C1374.93 69.1263 1373.92 69.1289 1372.91 69.1337C1350.04 69.2449 1334.53 69.1263 1329.03 69.1263L1320.57 57.3422H1203.44C1200.27 61.2702 1193.81 57.3422 1193.31 57.3422H1065.1H1054.97H990.069L975.507 74.2818H866.607V86.8024H820.704V69.1263L615.283 66.0218H542.31H486.83H268.906L201.711 3H150.11L139.663 20.3079H30.1078V31.3555V47.927L32.4412 122.891H22.6274H3V494.092L13.1304 508.454L25.7932 525.025L45.104 547.489L72.0127 578.79L73.9121 581H199.908L208.772 570.689H341.414L349.962 580.632H415.175L428.471 565.165H451.265H539.905H581.376H767.203L849.97 524.503L857.884 515.297H875.296L884.793 526.345H907.902H931.673H950.323H1007.43H1070.3L1078.53 516.77H1101.96L1177.8 558.536L1189.19 571.794H1254.72L1268.34 555.959H1375.97L1388 551.171V540.86V490.041Z"*/}
      {/*    fill="#42019B"*/}
      {/*    fill-opacity="0.5"*/}
      {/*    stroke="#FFB904"*/}
      {/*    stroke-width="5"*/}
      {/*  />*/}
      {/*  <text x="100" y="150">*/}
      {/*    {terms.map((term, index) => (*/}
      {/*      <tspan*/}
      {/*        key={index}*/}
      {/*        x="160"*/}
      {/*        y={`${160 + index * 80}`}*/}
      {/*        style={textStyle}*/}
      {/*      >*/}
      {/*        {term}*/}
      {/*      </tspan>*/}
      {/*    ))}*/}
      {/*  </text>*/}
      {/*</svg>*/}

      {/*<svg width="80vw" height="auto" viewBox="0 0 1728 742" fill="none" xmlns="http://www.w3.org/2000/svg">*/}
      {/*  <path d="M1725 453.63V704.684L1685.77 739H676.914L636.806 703.33V580.511H41.222L3 545.846V39.5507L43.2336 3H272.38V53.5717L1488.12 62.1129L1523.23 91.895V188.696H1685.27L1721.98 222.756L1725 453.63Z" fill="#42019B" fill-opacity="0.5" stroke="#FFB800" stroke-width="5" stroke-miterlimit="16"/>*/}
      {/*  <text x="100" y="150" >*/}
      {/*    <tspan x="100" y="160" style={style}>Assemble, Research, Compete</tspan>*/}
      {/*    <tspan x="100" y="250" style={textStyle}>ARC — <tspan className={classes.span}>офлайн</tspan> інженерні змагання для студентів.</tspan>*/}
      {/*    <tspan x="100" y="345" style={textStyle}>Збирай власну команду, або знайди нову на проєкті.</tspan>*/}
      {/*    <tspan x="100" y="445" style={textStyle}>Обирай категорію та пропонуй своє вирішення проблеми.</tspan>*/}
      {/*    <tspan x="100" y="545" style={textStyle}>Покажи компаніям України свої навички.</tspan>*/}
      {/*    <tspan x="675" y="670" style={lastStyle}>FIND YOUR ENGINEERING SP<tspan className={classes.span}>ARC</tspan></tspan>*/}
      {/*  </text>*/}
      {/*</svg>*/}
    </div>
  );
}
