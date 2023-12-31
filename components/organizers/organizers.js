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
    <a key={organizer.email} className={classes.organizer} href={`mailto:${organizer.email}`}>
      <img
        src={`${organizer.image}`}
        alt={organizer.image}
        className={classes.img}
      />
      <div className={classes.text}>
        <p>{organizer.position}</p>
        <p>{organizer.name}</p>
        <p className={classes.link}>
          <img src={"email-icon.svg"} alt={"Email icon"} className={classes.icon}/>
        </p>
      </div>
    </a>
  );
}

function EmailIcon(){
    return <svg width="100" height="186" viewBox="0 0 266 186" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M2.77244 170.71C8.77939 181.744 17.8668 186 29.5727 186C74.0857 186 118.445 186 162.958 186C187.602 186 212.246 186 236.889 186C249.365 186 258.145 180.798 262.92 170.395C253.216 162.829 243.358 155.263 233.655 147.697C206.239 126.417 178.668 105.137 151.252 84.0153C139.084 74.5576 126.762 74.5576 114.748 84.0153C78.8605 111.442 43.1268 139.185 7.39317 166.769C5.85292 168.031 4.46671 169.292 2.77244 170.71Z" fill="white"/>
        <path d="M179.13 87.4831C206.855 62.2627 234.117 37.5152 261.687 12.4525C255.526 3.46779 247.209 1.19209e-06 237.197 1.19209e-06C193.301 1.19209e-06 149.558 1.19209e-06 105.661 1.19209e-06C80.0927 1.19209e-06 54.5246 1.19209e-06 28.9566 1.19209e-06C18.945 1.19209e-06 10.6277 3.62542 4.46671 12.4525C31.883 37.5152 59.1453 62.4203 86.8697 87.4831C93.4928 82.439 99.8078 77.3949 106.277 72.5085C123.836 59.1102 142.318 59.1102 160.031 72.5085C166.038 77.3949 172.353 82.2814 179.13 87.4831Z" fill="white"/>
        <path d="M0 154.632C25.414 134.929 50.0579 115.856 75.3179 96.3102C50.2119 73.4542 25.568 50.9136 0 27.5847C0 70.3017 0 111.915 0 154.632Z" fill="white"/>
        <path d="M266 27.7424C240.586 50.9136 215.942 73.4542 190.682 96.4678C215.788 115.856 240.586 135.086 266 154.79C266 112.073 266 70.4593 266 27.7424Z" fill="white"/>
    </svg>

}
