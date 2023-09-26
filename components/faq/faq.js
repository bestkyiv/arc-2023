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
      <Accordion className={`section`} items={items} width={"40%"} />;
    </div>
  );
}
