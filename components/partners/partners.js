import Title from "@/components/title";
import classes from "./partners.module.css";
import CONSTANTS from "../../constants";

export default function Partners() {
  const partners = CONSTANTS.PARTNERS;
  return (
    <div className={"section" + ` ${classes.partners}`} id={"partners"}>
      <div className={classes.partners__grid}>
        {partners.map((partner) => (
          <div key={partner} className={classes.partners__grid_item}>
            <img src={"partner.jpeg"} alt={"Partner"} className={classes.img} />
          </div>
        ))}
        <div className={classes.translation}>
          <YouTubeVideo />
        </div>
      </div>
    </div>
  );
}

function YouTubeVideo() {
  return (
    <iframe
      width="100%"
      height="100%"
      src="https://www.youtube.com/embed/jfKfPfyJRdk?si=9HuXfDZJS34BqpO0"
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowFullScreen
    ></iframe>
  );
}
