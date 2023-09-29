import classes from "./accordion.module.css";
import { useState } from "react";
export default function Accordion({ items, width }) {
  return (
    <div className={classes.accordion}>
      {items.map(({ question, answer }, index) => (
        <AccordionItem
          question={question}
          answer={answer}
          key={index}
          index={index}
        />
      ))}
    </div>
  );
}

function AccordionItem({ question, answer, index }) {
  const [active, setActive] = useState(false);

  const isPurple = index % 2 === 0;

  return (
    <div
      className={
        classes["accordion-item"] +
        (active
          ? ` ${classes[`active-${isPurple ? "purple" : "yellow"}`]}`
          : ` ${classes[`active-${isPurple ? "purple" : "yellow"}`]}-exit`)
      }
      onClick={() => setActive((active) => !active)}
    >
      <div
        className={classes.questionBlock + (active ? "" : ` ${classes.active}`)}
      >
        <p className={classes.text + " " + classes.question}>{question}</p>
      </div>
      <div
        className={classes.answerBlock + (active ? ` ${classes.active}` : "")}
      >
        <p className={classes.text + " " + classes.answer}>{answer}</p>
      </div>
    </div>
  );
}

function Content({ text }) {
  return (
    <div key={text} className={classes[`accordion-item-content`]}>
      <p className={classes.text}>{text}</p>
    </div>
  );
}
