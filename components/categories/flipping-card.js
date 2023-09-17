// FlipCard.js
import React, { useState } from "react";
import classes from "./flipping-card.module.css";
import CaseStudyBack from "@/components/categories/case-study/case-study-back";
import InnovativeDesignBack from "@/components/categories/innovative-design/innovative-design-back";

function FlippingCard({ category }) {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleCardFlip = () => {
    setIsFlipped(!isFlipped);
  };

  const isCaseStudy = category.header === "Case study";

  return (
    <div
      className={`${classes["flip-card"]} ${
        isFlipped ? classes["flipped"] : ""
      }`}
      onClick={handleCardFlip}
    >
      <div className={classes["flip-card-inner"]}>
        <div className={classes["flip-card-front"]}>
          <img
            src={`${
              isCaseStudy ? "case-study" : "innovative-design"
            }-front.svg`}
            alt={isCaseStudy ? "Case Study" : "Innovative design"}
            className={classes.img}
          />
        </div>
        <div className={classes["flip-card-back"]}>
          {isCaseStudy ? <CaseStudyBack /> : <InnovativeDesignBack />}
        </div>
      </div>
    </div>
  );
}

export default FlippingCard;
