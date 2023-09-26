import classes from "./about.module.css";
import Title from "@/components/title";

export default function About() {
  const style = {
    fontFamily: "Black Ops One",
    fontSize: "78px",
    fill: "white",
  };

  const textStyle = {
    fontFamily: "Kreadon Bold",
    fontSize: "54px",
    fill: "white",
  };

  const lastStyle = {
    ...style,
    fontSize: "60px",
  };
  return (
    <div className={classes.about + " section"} id={"about"}>
      <svg
        width="80vw"
        height="80vh"
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

      {/*<svg*/}
      {/*  width="80vw"*/}
      {/*  height="auto"*/}
      {/*  viewBox="0 0 1728 742"*/}
      {/*  fill="none"*/}
      {/*  xmlns="http://www.w3.org/2000/svg"*/}
      {/*>*/}
      {/*  <path*/}
      {/*    d="M1725 453.63V704.684L1685.77 739H676.914L636.806 703.33V580.511H41.222L3 545.846V39.5507L43.2336 3H272.38V53.5717L1488.12 62.1129L1523.23 91.895V188.696H1685.27L1721.98 222.756L1725 453.63Z"*/}
      {/*    fill="#42019B"*/}
      {/*    fill-opacity="0.5"*/}
      {/*    stroke="#FFB800"*/}
      {/*    stroke-width="5"*/}
      {/*    stroke-miterlimit="16"*/}
      {/*  />*/}
      {/*  <text x="100" y="150">*/}
      {/*    <tspan x="100" y="160" style={style}>*/}
      {/*      Assemble, Research, Compete*/}
      {/*    </tspan>*/}
      {/*    <tspan x="100" y="250" style={textStyle}>*/}
      {/*      ARC — <tspan className={classes.span}>офлайн</tspan> інженерні*/}
      {/*      змагання для студентів.*/}
      {/*    </tspan>*/}
      {/*    <tspan x="100" y="345" style={textStyle}>*/}
      {/*      Збирай власну команду, або знайди нову на проєкті.*/}
      {/*    </tspan>*/}
      {/*    <tspan x="100" y="445" style={textStyle}>*/}
      {/*      Обирай категорію та пропонуй своє вирішення проблеми.*/}
      {/*    </tspan>*/}
      {/*    <tspan x="100" y="545" style={textStyle}>*/}
      {/*      Покажи компаніям України свої навички.*/}
      {/*    </tspan>*/}
      {/*    <tspan x="675" y="670" style={lastStyle}>*/}
      {/*      FIND YOUR ENGINEERING SP<tspan className={classes.span}>ARC</tspan>*/}
      {/*    </tspan>*/}
      {/*  </text>*/}
      {/*</svg>*/}
    </div>
  );
}
