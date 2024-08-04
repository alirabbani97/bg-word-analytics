import React from "react";

export default function Stats({ stats }) {
  return (
    <section className="stats">
      <Stat label="Words" numbers={stats.words} />
      <Stat label="Characters" numbers={stats.chars} />
      <Stat label="Instagram" numbers={stats.insta} />
      <Stat label="Facebook" numbers={stats.fb} />
    </section>
  );
}

function Stat({ label, numbers }) {
  return (
    <section className="stat">
      <span className={`stat__number ${numbers < 0 && "stat__number--limit"}`}>
        {numbers}
      </span>
      <h2 className="second-heading">{label}</h2>
    </section>
  );
}
