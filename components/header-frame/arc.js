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

function ArcSingleWord({ text, fontSize = 128 }) {
  const firstLetter = text.at(0);
  const restLetters = text.slice(1);

  return (
    <p>
      <span className={classes["first-letter"]}>{firstLetter}</span>
      <span className={classes.word}>{restLetters}</span>
    </p>
  );
}
