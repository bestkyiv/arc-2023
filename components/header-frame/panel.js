import Link from "next/link";

export default function Panel() {
  return (
    <div id="header2">
      <div className={"blurb"}>
        <span>
          ARC <br /> Kyiv
        </span>
      </div>
      <div className={"icon"}>
        <img src={"/favicon.svg"} alt={"Logo"} />
      </div>
      <div className={"links"}>
        <Link href="#about">Про проєкт</Link>
        <Link href="#categories">Категорії</Link>
        <Link href="/#terms-of-participation">Умови участі</Link>
        <Link href="/">Партнери</Link>
        <Link href="/">Про нас</Link>
      </div>
    </div>
  );
}
