"use client";

import React from "react";
import { PRODUCTS } from "@/data/bakery-data";
import { useCart } from "@/context/CartContext";
import { SparkIcon, WhatsAppIcon, CartIcon } from "./Icons";

export default function Featured({ onSelectProduct }) {
  const { formatPrice, addToCart, getDirectProductOrderUrl } = useCart();
  const featuredProducts = PRODUCTS.filter((p) => p.featured);

  return (
    <section className="section dark featured" id="featured" aria-labelledby="featuredTitle">
      <div className="container">
        <div className="section-head">
          <h2 className="section-title" id="featuredTitle">
            Featured Treats
          </h2>
          <div className="divider" aria-hidden="true">
            <span></span>
            <SparkIcon className="i" />
            <span></span>
          </div>
          <p className="section-intro">
            Handpicked specialties crafted with love. Tap any treat to view details, add to cart, or order directly via WhatsApp.
          </p>
        </div>

        <ul className="featured-list" id="featuredList">
          {featuredProducts.map((p) => (
            <li key={p.id} className="f-card">
              <img
                src={p.image}
                alt={p.name}
                width={360}
                height={450}
                loading="lazy"
                onClick={() => onSelectProduct(p)}
              />
              <div className="f-body">
                <div onClick={() => onSelectProduct(p)} style={{ cursor: "pointer", flex: 1 }}>
                  <h3 className="f-name">{p.name}</h3>
                  <span className="f-price">{formatPrice(p.price)}</span>
                </div>

                <div className="f-actions">
                  <button
                    type="button"
                    className="f-cart-add"
                    onClick={(e) => {
                      e.stopPropagation();
                      addToCart(p);
                    }}
                    aria-label={`Add ${p.name} to order`}
                    title="Add to order"
                  >
                    <CartIcon style={{ width: "18px", height: "18px" }} />
                  </button>

                  <a
                    className="f-order"
                    href={getDirectProductOrderUrl(p)}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Order ${p.name} on WhatsApp`}
                    title="Order on WhatsApp"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <WhatsAppIcon className="i" />
                  </a>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
