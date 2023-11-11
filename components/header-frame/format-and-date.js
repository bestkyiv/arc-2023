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
      src="https://www.youtube.com/embed/1oq64MAGr2g?si=8lHi9nkW5cA1_tS4"
      title="YouTube video player"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowFullScreen
    ></iframe>
  );
}
