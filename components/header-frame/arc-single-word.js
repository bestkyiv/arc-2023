export default function ArcSingleWord({ text, fontSize = 128 }) {
  const firstLetter = text.at(0);
  const restLetters = text.slice(1);
  const styles = {
    fontSize: `6vw`,
    color: "#FFFFFF",
    fontFamily: "Black Ops One",
  };

  const firstLetterStyles = {
    ...styles,
    color: "#6F27D4",
    textShadow: "#6F27D4 0px 0px 100px",
  };

  return (
    <p>
      <span style={firstLetterStyles}>{firstLetter}</span>
      <span style={styles}>{restLetters}</span>
    </p>
  );
}
