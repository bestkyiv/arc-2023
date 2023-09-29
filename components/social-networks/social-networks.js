import classes from "./social-networks.module.css";
import CONSTANTS from "../../constants";
export default function SocialNetworks() {
  const socialNetworks = CONSTANTS.SOCIAL_NETWORKS;
  return (
    <div className={classes["social-networks"]}>
      {socialNetworks.map((network) => (
        <a
          key={network.name}
          href={network.link}
          className={classes.icon}
          target={"_blank"}
        >
          <img src={network.icon} alr={network.name} />
        </a>
      ))}
    </div>
  );
}
