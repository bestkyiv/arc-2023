import Link from "next/link";

export default function Panel() {
  return (
    <div id="header2">
      <div className={"blurb"}>
        <span
          style={{ fontSize: "20px", lineHeight: "18px", marginTop: "4px" }}
        >
          ARC <br /> <span style={{ fontSize: "10px" }}>Kyiv</span>
        </span>
      </div>
      <div className={"icon"}>
        <img src={"favicon.svg"} alt={"Logo"} className={"logo"} />
      </div>
      <div className={"links"}>
        <Link href="#about">Про проєкт</Link>
        <Link href="#categories">Категорії</Link>
        <Link href="/#terms-of-participation">Умови участі</Link>
        {/*<Link href="/#partners">Партнери</Link>*/}
        <Link href="/#about-us">Про нас</Link>
      </div>
    </div>
  );
}
