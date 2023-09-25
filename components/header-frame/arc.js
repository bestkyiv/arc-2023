import ArcSingleWord from "./arc-single-word";
import classes from "./arc.module.css";
export default function Arc({ fontSize }) {
  const words = ["Assemble", "Research", "Compete"];

  return (
    <div className={classes.arc}>
      {words.map((word) => (
        <ArcSingleWord key={word} text={word} fontSize={fontSize} />
      ))}
    </div>
  );
}
