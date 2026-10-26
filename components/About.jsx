"use client";

import React from "react";
import { SparkIcon } from "./Icons";
import { CATEGORIES } from "@/data/bakery-data";

export default function About({ onSelectCategory }) {
  const handleCategoryClick = (catId) => {
    if (onSelectCategory) {
      onSelectCategory(catId);
    }
    const menuEl = document.getElementById("menu");
    if (menuEl) {
      menuEl.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="section cream about" id="about" aria-labelledby="aboutTitle">
      <div className="container about-grid">
        <div className="about-media">
          <figure className="about-photo about-photo-main">
            <img
              src="/images/shop/shop-exterior-1280.webp"
              srcSet="/images/shop/shop-exterior-640.webp 640w, /images/shop/shop-exterior-1280.webp 1280w"
              sizes="(min-width: 900px) 40vw, 90vw"
              width={1280}
              height={948}
              alt="Leena's Cakes & Desserts storefront at night"
              loading="lazy"
            />
          </figure>
          <figure className="about-photo about-photo-inset">
            <img
              src="/images/shop/shop-interior-640.webp"
              width={640}
              height={480}
              alt="Inside seating area with glowing moon backdrop"
              loading="lazy"
            />
          </figure>
        </div>

        <div className="about-copy">
          <h2 className="section-title" id="aboutTitle">
            Sweet moments, beautifully created.
          </h2>
          <div className="divider" aria-hidden="true">
            <span></span>
            <SparkIcon className="i" />
            <span></span>
          </div>
          <p className="lead">
            Leena&apos;s Cakes &amp; Desserts is a local café and dessert destination in Eravur, crafted for dessert lovers, celebration creators, and late-night sweet cravings.
          </p>
          <p>
            Whether you want a show-stopping customized birthday cake, rich chocolate lava cake, refreshing fruit mojitos, or crispy short eats, we make every order fresh to order with love.
          </p>
          <p className="about-script">Your Imagination Is Our Creation</p>

          <ul className="about-links" aria-label="Browse the menu by category">
            {CATEGORIES.map((c) => (
              <li key={c.id}>
                <button type="button" onClick={() => handleCategoryClick(c.id)}>
                  {c.icon} {c.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
