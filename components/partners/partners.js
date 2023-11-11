import classes from "./partners.module.css";
import CONSTANTS from "../../constants";

export default function Partners() {
  const {
    TASK: taskPartners,
    CAREER: careerPartners,
    BARTER: barterPartners,
  } = CONSTANTS.PARTNERS;
  return (
    <div className={"section" + ` ${classes.partners}`} id={"partners"}>
      <TaskDesktop partners={taskPartners} />
      <TaskMobile partners={taskPartners} />
      <Career partners={careerPartners} />
      <BarterDesktop partners={barterPartners} />
    </div>
  );
}

function TaskDesktop({ partners }) {
  return (
    <>
      <div className={classes.container_desktop_task}>
        <h3 className={classes.header}>Task partners</h3>
        <div className={classes.row}>
          {partners.map((partner) => (
            <a href={partner.link} target={"_blank"} key={partner.img}>
              <img
                className={classes.img}
                src={partner.img}
                alt={partner.alt}
              />
            </a>
          ))}
        </div>
      </div>
    </>
  );
}

function TaskMobile() {
  return (
    <>
      <div className={classes.container_mobile}>
        <h3 className={classes.header_task}>Task partners</h3>
        <a
          href={"https://www.lifecell.ua/uk/"}
          target={"_blank"}
          className={classes.lifecell}
        >
          <img className={classes.img} src={"lifecell.svg"} alt={"Lifecell"} />
        </a>
        <a
          href={"https://www.sombrainc.com/"}
          target={"_blank"}
          className={classes.sombra}
        >
          <img className={classes.img} src={"sombra.svg"} alt={"Sombra"} />
        </a>
        <a
          href={"https://robotdreams.cc/uk"}
          target={"_blank"}
          className={classes.r_d}
        >
          <img className={classes.img} src={"r_d.svg"} alt={"r_d"} />
        </a>
      </div>
    </>
  );
}

function Career({ partners }) {
  return (
    <>
      <div className={classes.container_desktop}>
        <h3 className={classes.header}>Career partners</h3>
        <div className={classes.row_career}>
          {partners.map((partner) => (
            <a href={partner.link} target={"_blank"} key={partner.img}>
              <img
                className={classes.img_career_desktop}
                src={partner.img}
                alt={partner.alt}
              />
            </a>
          ))}
        </div>
      </div>
    </>
  );
}
function BarterDesktop({ partners }) {
  return (
    <>
      <div className={classes.barter}>
        <div className={classes.container_desktop}>
          <h3 className={classes.header}>Barter partners</h3>
          <div className={classes.row_barter}>
            {partners.map((partner) => (
              <a href={partner.link} target={"_blank"} key={partner.img}>
                <img
                  className={classes.img_career_desktop}
                  src={partner.img}
                  alt={partner.alt}
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
