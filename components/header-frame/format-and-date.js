import classes from "./format-and-date.module.css";
export default function FormatAndDate() {
  return (
    <div className={classes.div}>
      <YouTubeVideo />
    </div>
  );
}
function YouTubeVideo() {
  return (
    <iframe
      width="100%"
      height="100%"
      src="https://www.youtube.com/embed/ky48SfLnSdc?si=UZDpaeFpZfqKdHeb"
      title="YouTube video player"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowFullScreen
    ></iframe>
  );
}
