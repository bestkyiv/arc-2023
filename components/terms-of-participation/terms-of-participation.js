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
      <Desktop terms={terms} textStyle={textStyle} />
      <Mobile terms={terms} />
    </div>
  );
}

function Desktop({ terms, textStyle }) {
  return (
    <svg
      className={classes.desktop}
      width="80vw"
      height="584"
      viewBox="0 0 1391 584"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_i_845_198)">
        <path
          d="M1388 490.041V104.479C1388 98.433 1388 77.2682 1388 69.1263H1375.97C1374.93 69.1263 1373.92 69.1289 1372.91 69.1337C1350.04 69.2449 1334.53 69.1263 1329.03 69.1263L1320.57 57.3422H1203.44H1193.31H1065.1H1054.97H990.069L975.507 74.2818H866.607V86.8024H820.704V69.1263L615.283 66.0218H542.31H486.83H268.906L201.711 3H150.11L139.663 20.3079H32.4412V122.891H22.6276H3V494.092L89.9082 581H199.908L208.772 570.689H341.414L349.962 580.632H415.175L428.471 565.165H767.203L849.97 524.503L857.884 515.297H875.296L884.793 526.345H907.902H931.673H950.323H1007.43H1070.3L1078.53 516.77H1101.96L1173.36 555.959L1189.19 571.794H1254.72L1268.34 555.959H1375.97L1388 543.929V540.86V490.041Z"
          fill="#42019B"
          fill-opacity="0.5"
        />
      </g>
      <path
        d="M3 494.092V122.891H22.6276H32.4412V20.3079H139.663L150.11 3H201.711L268.906 66.0218H486.83H542.31H615.283L820.704 69.1263V86.8024H866.607V74.2818H975.507L990.069 57.3422H1054.97H1065.1C1107.62 57.3422 1192.8 57.3422 1193.31 57.3422H1203.44H1320.57L1329.03 69.1263C1334.53 69.1263 1350.04 69.2449 1372.91 69.1337C1373.92 69.1289 1374.93 69.1263 1375.97 69.1263H1388C1388 77.2682 1388 98.433 1388 104.479V490.041V540.86V543.929L1375.97 555.959H1268.34L1254.72 571.794H1189.19L1173.36 555.959L1101.96 516.77H1078.53L1070.3 526.345H1007.43H950.323H931.673H907.902H884.793L875.296 515.297H857.884L849.97 524.503L767.203 565.165H428.471L415.175 580.632H349.962L341.414 570.689H208.772L199.908 581H89.9082L3 494.092ZM3 494.092L13.1304 508.454"
        stroke="#FFB904"
        stroke-width="5"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M116 145H131V160H116V145Z"
        stroke="#FFB800"
        stroke-opacity="0.92"
        stroke-width="4"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M116 226H131V241H116V226Z"
        stroke="#FFB800"
        stroke-opacity="0.92"
        stroke-width="4"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M116 303H131V318H116V303Z"
        stroke="#FFB800"
        stroke-opacity="0.92"
        stroke-width="4"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M116 382H131V397H116V382Z"
        stroke="#FFB800"
        stroke-opacity="0.92"
        stroke-width="4"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M116 461H131V476H116V461Z"
        stroke="#FFB800"
        stroke-opacity="0.92"
        stroke-width="4"
      />
      <defs>
        <filter
          id="filter0_i_845_198"
          x="0.5"
          y="0.5"
          width="1390"
          height="587"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="shape"
            result="effect1_innerShadow_845_198"
          />
        </filter>
      </defs>
      <text x="100" y="150">
        {terms.map((term, index) => (
          <>
            <tspan
              key={index}
              x="160"
              y={`${170 + index * 80}`}
              style={textStyle}
            >
              {term}
            </tspan>
          </>
        ))}
      </text>
    </svg>
  );
}

function Mobile({ terms }) {
  return (
    <>
      <ul className={classes["text-mobile"]}>
        {terms.map((term, index) => (
          <li key={index}>{term}</li>
        ))}
      </ul>
    </>
  );
}
