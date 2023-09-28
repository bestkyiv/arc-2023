import Title from "@/components/title";
import classes from "./organizers.module.css";
import CONSTANTS from "../../constants";
export default function Organizers() {
  const organizers = CONSTANTS.ORGANIZERS;
  return (
    <div className={"section" + ` ${classes.organizers}`} id="about-us">
      <Title title={"Organizers"} />
      <div className={classes.container}>
        <Desktop organizers={organizers} />
        <Mobile organizers={organizers} />
      </div>
    </div>
  );
}

function Mobile({ organizers }) {
  return (
    <div className={classes.slider}>
      {organizers.map((organizer) => (
        <Organizer key={organizer.email} organizer={organizer} />
      ))}
    </div>
  );
}

function Desktop({ organizers }) {
  return (
    <div className={classes.grid}>
      {organizers.map((organizer) => (
        <Organizer key={organizer.email} organizer={organizer} />
      ))}
    </div>
  );
}
function Organizer({ organizer }) {
  return (
    <div key={organizer.email} className={classes.organizer}>
      <img
        src={`${organizer.image}`}
        alt={organizer.image}
        className={classes.img}
      />
      <div className={classes.text}>
        <p>{organizer.position}</p>
        <p>{organizer.name}</p>
        <a href={`mailto:${organizer.email}`} className={classes.link}>
          {organizer.email}
        </a>
      </div>
    </div>
  );
}
