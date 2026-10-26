"use client";

import React, { useState, useEffect } from "react";
import { useCart } from "@/context/CartContext";
import { CloseIcon, PlusIcon, MinusIcon, CartIcon, WhatsAppIcon } from "./Icons";

export default function ProductModal({ product, onClose }) {
  const { addToCart, formatPrice, getDirectProductOrderUrl } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [note, setNote] = useState("");

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.body.classList.add("modal-open");
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.classList.remove("modal-open");
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  if (!product) return null;

  const handleAdd = () => {
    addToCart(product, quantity, note);
    onClose();
  };

  return (
    <div
      className="modal-overlay"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={product.name}
    >
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button
          type="button"
          className="modal-close"
          onClick={onClose}
          aria-label="Close"
        >
          <CloseIcon className="i" />
        </button>

        <div className="modal-img-wrap">
          <img src={product.image} alt={product.name} />
        </div>

        <div className="modal-body">
          <div>
            <div style={{ textTransform: "uppercase", fontSize: "0.75rem", letterSpacing: "0.1em", color: "var(--gold)" }}>
              {product.category}
            </div>
            <h3 className="modal-title">{product.name}</h3>
            {product.note && (
              <p style={{ fontSize: "0.88rem", color: "var(--muted-dark)" }}>{product.note}</p>
            )}
            <div className="modal-price">{formatPrice(product.price)}</div>
          </div>

          <p className="modal-desc">
            {product.description || "Prepared fresh daily using premium bakery ingredients. Treat yourself or order for your special occasion."}
          </p>

          <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginTop: "0.5rem" }}>
            <span style={{ fontSize: "0.9rem", color: "var(--muted-dark)", fontWeight: 500 }}>Quantity:</span>
            <div className="cart-qty-group">
              <button
                type="button"
                className="cart-qty-btn"
                onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                aria-label="Decrease quantity"
              >
                <MinusIcon style={{ width: "14px", height: "14px" }} />
              </button>
              <span className="cart-qty-num">{quantity}</span>
              <button
                type="button"
                className="cart-qty-btn"
                onClick={() => setQuantity((q) => q + 1)}
                aria-label="Increase quantity"
              >
                <PlusIcon style={{ width: "14px", height: "14px" }} />
              </button>
            </div>
            <span style={{ marginLeft: "auto", fontWeight: 700, color: "var(--gold-light)" }}>
              Total: {formatPrice(product.price * quantity)}
            </span>
          </div>

          <input
            type="text"
            className="cart-notes"
            style={{ minHeight: "38px", height: "38px", padding: "0 0.8rem", marginTop: "0.4rem" }}
            placeholder="Special request (e.g. icing note, custom flavor)..."
            value={note}
            onChange={(e) => setNote(e.target.value)}
          />

          <div className="modal-actions">
            <button
              type="button"
              className="btn btn-gold"
              style={{ flex: 1 }}
              onClick={handleAdd}
            >
              <CartIcon className="i" />
              <span>Add to Order</span>
            </button>

            <a
              href={getDirectProductOrderUrl(product, quantity)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-ghost"
              style={{ flex: 1 }}
              onClick={onClose}
            >
              <WhatsAppIcon className="i" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
