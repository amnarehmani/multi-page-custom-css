import React from "react";
import Link from "next/link";
import "@/app/styles/action.css";

function Action() {
  return (
    <section className="cta">
      <h1>
        Experience Unmatched Comfort and Service <br /> Reserve Your Stay Now!
      </h1>
      <Link href="/contact">Place you stay!</Link>
    </section>
  );
}

export default Action;
