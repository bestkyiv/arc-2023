import Title from "@/components/title";
import classes from "./organizers.module.css";
import CONSTANTS from "../../constants";
export default function Organizers() {
  const organizers = CONSTANTS.ORGANIZERS;
  return (
    <div className={"section"}>
      <Title title={"Organizers"} />
      <div className={classes.container}>
        <div className={classes.grid}>
          {organizers.map((organizer) => (
            <div key={organizer.email} className={classes.organizer}></div>
          ))}
        </div>
      </div>
    </div>
  );
}
