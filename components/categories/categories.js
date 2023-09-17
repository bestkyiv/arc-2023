import classes from "./categories.module.css";
import Title from "@/components/title";
import FlippingCard from "@/components/categories/flipping-card";
import CONSTANTS from "../../constants";

export default function Categories() {
  return (
    <div className={classes.categories + " section"} id={"categories"}>
      <Title title={"Categories"} />
      <div className={classes.cards}>
        <FlippingCard category={CONSTANTS.CATEGORIES.CASE_STUDY} />
        <FlippingCard category={CONSTANTS.CATEGORIES.INNOVATIVE_DESIGN} />
      </div>
    </div>
  );
}
