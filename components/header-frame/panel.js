import Link from "next/link";

export default function Panel() {
  return (
    <div id="header2">
      <div className={"blurb"}>
        <span
          style={{ fontSize: "30px", lineHeight: "14px", marginTop: "10px" }}
        >
          ARC <br /> <span style={{ fontSize: "8px" }}>Kyiv</span>
        </span>
      </div>
      <div className={"icon"}>
        <img src={"logo.svg"} alt={"Logo"} className={"logo"} />
      </div>
      <div className={"links"}>
        <Link href="#about">Про проєкт</Link>
        <Link href="#categories">Категорії</Link>
        <Link href="#terms-of-participation">Умови участі</Link>
        {/*<Link href="#partners">Партнери</Link>*/}
        <Link href="#about-us">Про нас</Link>
      </div>
    </div>
  );
}
