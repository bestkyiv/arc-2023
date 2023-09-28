import Accordion from "@/components/faq/accordion";
import classes from "./faq.module.css";
import CONSTANTS from "../../constants";
import Title from "@/components/title";
// import classes from "faq.module.css";
export default function Faq() {
  const items = CONSTANTS.FAQ;
  return (
    <div className={classes.faq}>
      <Title title={"FAQ"} />
      <div className={classes.row}>
        <Accordion className={`section`} items={items} width={"40%"} />
        <img
          src={"faq-warning.svg"}
          alt={"Warning! Registration started"}
          className={classes.img}
        />
      </div>
    </div>
  );
}
