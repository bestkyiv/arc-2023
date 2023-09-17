import classes from "./registration-button.module.css";
import CONSTANTS from "../../constants";

export default function RegistrationButton({ gridArea }) {
  const handleClick = () =>
    window.open(CONSTANTS.REGISTRATION_LINK, "_blank").focus();

  return (
    <img
      src={"/registration.svg"}
      alt={"Registration button"}
      className={classes.img}
      style={{
        gridArea: "registration",
        justifySelf: "center",
        alignSelf: "center",
        width: "40vw",
      }}
      onClick={handleClick}
    />

    // <svg
    //   width="50vw"
    //   height="100"
    //   viewBox="0 0 498 100"
    //   fill="none"
    //   xmlns="http://www.w3.org/2000/svg"
    //   onClick={handleClick}
    //   className={classes.img}
    // >
    //   <path
    //     d="M488.5 41.52V32.7L473.071 19.176V27.996L488.5 41.52Z"
    //     stroke="black"
    //   />
    //   <path d="M479.928 18H484.5H488.5V25.644L479.928 18Z" stroke="black" />
    //   <path
    //     d="M488.5 57.984V49.164L473.071 35.64V44.46L488.5 57.984Z"
    //     stroke="black"
    //   />
    //   <path
    //     d="M488.5 74.448V65.628L473.071 52.104V60.924L488.5 74.448Z"
    //     stroke="black"
    //   />
    //   <path
    //     d="M488.5 90.912V82.092L473.071 68.568V77.388L488.5 90.912Z"
    //     stroke="black"
    //   />
    //   <path d="M483.133 93.264L473.071 84.444V93.264H483.133Z" stroke="black" />
    //   <path
    //     d="M33.5 81L18.5 67.7064V76L33.5 84.5V81Z"
    //     stroke="black"
    //     stroke-miterlimit="5.75877"
    //   />
    //   <path
    //     d="M33.5 73.4862V64.8165L18.5 51.5229V60.1927L33.5 73.4862Z"
    //     stroke="black"
    //     stroke-miterlimit="5.75877"
    //   />
    //   <path
    //     d="M33.5 57.3028V48.633L18.5 35.3394V44.0092L33.5 57.3028Z"
    //     stroke="black"
    //     stroke-miterlimit="5.75877"
    //   />
    //   <path
    //     d="M33.5 41.1193V32.4495L18.5 19.156V27.8257L33.5 41.1193Z"
    //     stroke="black"
    //     stroke-miterlimit="5.75877"
    //   />
    //   <path
    //     d="M25.1667 18H29.6111H33.5V25.5138L25.1667 18Z"
    //     stroke="black"
    //     stroke-miterlimit="5.75877"
    //   />
    //   <path
    //     fill-rule="evenodd"
    //     clip-rule="evenodd"
    //     d="M0 48.8277V17L8.38201 11.6597L319.951 11.3445L339.997 0H474.018L497.5 12.2899V99.2647H42.7463L8.38201 82.8782V54.2017L0 48.8277ZM11.8184 82.2479V14.1807V12.9202H494.064V97.374H44.4645L11.8184 82.2479Z"
    //     fill="#FFB904"
    //   />
    //   <path d="M9.38201 91.0714V99.2647H28.5L9.38201 91.0714Z" fill="#FFB904" />
    //   <path
    //     fill-rule="evenodd"
    //     clip-rule="evenodd"
    //     d="M0 48.8277V17L8.38201 11.6597L319.951 11.3445L339.997 0H474.018L497.5 12.2899V99.2647H42.7463L8.38201 82.8782V54.2017L0 48.8277ZM11.8184 82.2479V14.1807V12.9202H494.064V97.374H44.4645L11.8184 82.2479Z"
    //     fill="#FFB904"
    //   />
    //   <path d="M9.38201 91.0714V99.2647H28.5L9.38201 91.0714Z" fill="#FFB904" />
    //   <path
    //     d="M488.5 41.52V32.7L473.071 19.176V27.996L488.5 41.52Z"
    //     fill="#FFB904"
    //   />
    //   <path d="M479.928 18H484.5H488.5V25.644L479.928 18Z" fill="#FFB904" />
    //   <path
    //     d="M488.5 57.984V49.164L473.071 35.64V44.46L488.5 57.984Z"
    //     fill="#FFB904"
    //   />
    //   <path
    //     d="M488.5 74.448V65.628L473.071 52.104V60.924L488.5 74.448Z"
    //     fill="#FFB904"
    //   />
    //   <path
    //     d="M488.5 90.912V82.092L473.071 68.568V77.388L488.5 90.912Z"
    //     fill="#FFB904"
    //   />
    //   <path d="M483.133 93.264L473.071 84.444V93.264H483.133Z" fill="#FFB904" />
    //   <path d="M33.5 81L18.5 67.7064V76L33.5 84.5V81Z" fill="#FFB904" />
    //   <path
    //     d="M33.5 73.4862V64.8165L18.5 51.5229V60.1927L33.5 73.4862Z"
    //     fill="#FFB904"
    //   />
    //   <path
    //     d="M33.5 57.3028V48.633L18.5 35.3394V44.0092L33.5 57.3028Z"
    //     fill="#FFB904"
    //   />
    //   <path
    //     d="M33.5 41.1193V32.4495L18.5 19.156V27.8257L33.5 41.1193Z"
    //     fill="#FFB904"
    //   />
    //   <path d="M25.1667 18H29.6111H33.5V25.5138L25.1667 18Z" fill="#FFB904" />
    //   <text x="60" y="70" fill={"white"} className={classes.text}>
    //     REGISTRATION
    //   </text>
    // </svg>
  );
}
