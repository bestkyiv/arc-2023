import ArcSingleWord from "./arc-single-word";
export default function Arc({ fontSize, gridArea }) {
  const words = ["Assemble", "Research", "Compete"];

  const style = {
    display: "flex",
    flexDirection: "column",
    gridArea: gridArea,
    justifySelf: "center",
    alignSelf: "center",
    marginRight: "30px",
    // width: "300px"
  };
  return (
    <div style={style}>
      {words.map((word) => (
        <ArcSingleWord key={word} text={word} fontSize={fontSize} />
      ))}
    </div>
  );
}
