"use client";

import React, { useMemo } from "react";
import { CATEGORIES, PRODUCTS, BAKERY_CONFIG } from "@/data/bakery-data";
import { useCart } from "@/context/CartContext";
import { SparkIcon, SearchIcon, WhatsAppIcon, CartIcon, CloseIcon } from "./Icons";

export default function Menu({
  activeCategory,
  setActiveCategory,
  searchQuery,
  setSearchQuery,
  onSelectProduct
}) {
  const { formatPrice, addToCart, getDirectProductOrderUrl } = useCart();

  const filteredProducts = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    return PRODUCTS.filter((p) => {
      const inCategory = activeCategory === "all" || p.category === activeCategory;
      const matchesSearch =
        !q ||
        p.name.toLowerCase().includes(q) ||
        (p.description && p.description.toLowerCase().includes(q)) ||
        (p.note && p.note.toLowerCase().includes(q)) ||
        p.category.toLowerCase().includes(q);
      return inCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  const categoriesWithCounts = useMemo(() => {
    const all = [{ id: "all", label: "All", count: PRODUCTS.length }];
    CATEGORIES.forEach((cat) => {
      const count = PRODUCTS.filter((p) => p.category === cat.id).length;
      all.push({ id: cat.id, label: cat.label, icon: cat.icon, count });
    });
    return all;
  }, []);

  const renderProductCard = (p) => (
    <li key={p.id} className="p-card">
      <article>
        <div className="p-media" onClick={() => onSelectProduct(p)}>
          <img
            src={p.image}
            alt={p.name}
            width={360}
            height={450}
            loading="lazy"
          />
          <span className="price">{formatPrice(p.price)}</span>
        </div>

        <div className="p-body">
          <h3 className="p-name" onClick={() => onSelectProduct(p)}>
            {p.name}
          </h3>
          {p.note && <p className="p-note">{p.note}</p>}

          <div className="p-card-btns">
            <button
              type="button"
              className="btn-card-cart"
              onClick={() => addToCart(p)}
            >
              <CartIcon style={{ width: "16px", height: "16px" }} />
              <span>Add</span>
            </button>

            <a
              className="btn-card-wa"
              href={getDirectProductOrderUrl(p)}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Order ${p.name} on WhatsApp`}
              title="Quick WhatsApp Order"
            >
              <WhatsAppIcon style={{ width: "18px", height: "18px" }} />
            </a>
          </div>
        </div>
      </article>
    </li>
  );

  return (
    <section className="section charcoal menu" id="menu" aria-labelledby="menuTitle">
      <div className="container">
        <div className="section-head">
          <h2 className="section-title" id="menuTitle">
            Our Bakery Menu
          </h2>
          <div className="divider" aria-hidden="true">
            <span></span>
            <SparkIcon className="i" />
            <span></span>
          </div>
          <p className="section-intro">
            Prices are in Sri Lankan Rupees. Tap on any item to view recipe details, customize, or order via WhatsApp.
          </p>
        </div>

        {/* Search input */}
        <div className="menu-search">
          <SearchIcon className="i" />
          <input
            id="menuSearch"
            type="search"
            placeholder="Search cakes, falooda, mojitos, short eats..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            aria-label="Search the menu"
          />
          {searchQuery && (
            <button
              type="button"
              className="menu-search-clear"
              onClick={() => setSearchQuery("")}
              aria-label="Clear search"
            >
              <CloseIcon style={{ width: "16px", height: "16px" }} />
            </button>
          )}
        </div>

        {/* Category tabs */}
        <div className="menu-filter" role="group" aria-label="Filter menu by category">
          {categoriesWithCounts.map((cat) => (
            <button
              key={cat.id}
              type="button"
              className={`chip ${activeCategory === cat.id ? "is-active" : ""}`}
              onClick={() => {
                setActiveCategory(cat.id);
                setSearchQuery("");
              }}
              aria-pressed={activeCategory === cat.id}
            >
              <span>{cat.icon ? `${cat.icon} ` : ""}{cat.label}</span>
              <small>{cat.count}</small>
            </button>
          ))}
        </div>

        {/* Results */}
        {filteredProducts.length === 0 ? (
          <div className="menu-empty">
            <p>Nothing on our menu matches &ldquo;{searchQuery}&rdquo;.</p>
            <button
              type="button"
              className="btn btn-ghost"
              onClick={() => {
                setSearchQuery("");
                setActiveCategory("all");
              }}
            >
              Reset Filters
            </button>
          </div>
        ) : activeCategory === "all" && !searchQuery.trim() ? (
          // Grouped by Category
          CATEGORIES.map((cat) => {
            const groupItems = filteredProducts.filter((p) => p.category === cat.id);
            if (groupItems.length === 0) return null;
            return (
              <div key={cat.id} className="menu-group">
                <h3 className="menu-group-title">
                  {cat.icon} {cat.label}
                </h3>
                <ul className="product-grid">
                  {groupItems.map(renderProductCard)}
                </ul>
              </div>
            );
          })
        ) : (
          // Single Grid view
          <ul className="product-grid">
            {filteredProducts.map(renderProductCard)}
          </ul>
        )}

        <p className="menu-note">
          Custom cake inquiries or no answer on WhatsApp? Call our hotline:{" "}
          <a href={`tel:${BAKERY_CONFIG.phoneFormatted}`}>{BAKERY_CONFIG.phone}</a> or{" "}
          <a href="tel:+94761776093">0761776093</a>.
        </p>
      </div>
    </section>
  );
}
