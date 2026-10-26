import React from "react";
import { SparkIcon } from "./Icons";

export default function Marquee() {
  const items = [
    "Cakes",
    "Desserts",
    "Mojitos",
    "Juices",
    "Shakes",
    "Coffee & Tea",
    "Short Eats",
  ];

  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee-track">
        {items.concat(items).map((item, idx) => (
          <React.Fragment key={idx}>
            <span>{item}</span>
            <SparkIcon className="i" />
          </React.Fragment>
        ))}
        {items.concat(items).map((item, idx) => (
          <React.Fragment key={`repeat-${idx}`}>
            <span>{item}</span>
            <SparkIcon className="i" />
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}
