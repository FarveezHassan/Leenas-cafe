"use client";

import React, { useEffect } from "react";
import { useCart } from "@/context/CartContext";
import { CloseIcon, PlusIcon, MinusIcon, TrashIcon, WhatsAppIcon, CartIcon } from "./Icons";

export default function CartDrawer() {
  const {
    items,
    isCartOpen,
    setIsCartOpen,
    removeFromCart,
    updateQuantity,
    clearCart,
    totalItems,
    totalAmount,
    formatPrice,
    orderType,
    setOrderType,
    customerNotes,
    setCustomerNotes,
    getWhatsAppCartUrl
  } = useCart();

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && isCartOpen) {
        setIsCartOpen(false);
      }
    };
    if (isCartOpen) {
      document.body.classList.add("modal-open");
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.classList.remove("modal-open");
    }
    return () => {
      document.body.classList.remove("modal-open");
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isCartOpen, setIsCartOpen]);

  if (!isCartOpen) return null;

  return (
    <>
      <div
        className="cart-overlay"
        onClick={() => setIsCartOpen(false)}
        aria-hidden="true"
      />
      <aside
        className="cart-drawer"
        role="dialog"
        aria-label="Your Order Cart"
        aria-modal="true"
      >
        <div className="cart-header">
          <h2 className="cart-title">
            <CartIcon className="i" />
            <span>Your Order ({totalItems})</span>
          </h2>
          <button
            type="button"
            className="cart-close-btn"
            onClick={() => setIsCartOpen(false)}
            aria-label="Close cart"
          >
            <CloseIcon className="i" />
          </button>
        </div>

        <div className="cart-body">
          {items.length === 0 ? (
            <div className="cart-empty">
              <div className="cart-empty-icon">🍰</div>
              <h3 style={{ fontFamily: "var(--f-display)", color: "var(--gold-light)", marginBottom: "0.5rem" }}>
                Your cart is empty
              </h3>
              <p>Explore our delicious cakes, drinks, and short eats below and tap &quot;Add&quot; to build your order.</p>
              <button
                type="button"
                className="btn btn-gold btn-sm"
                style={{ marginTop: "1.5rem" }}
                onClick={() => setIsCartOpen(false)}
              >
                Browse Menu
              </button>
            </div>
          ) : (
            <>
              <div className="cart-items">
                {items.map((item) => (
                  <div key={item.id} className="cart-item">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="cart-item-img"
                      loading="lazy"
                    />
                    <div className="cart-item-details">
                      <div>
                        <div className="cart-item-title">{item.name}</div>
                        <div className="cart-item-price">{formatPrice(item.price)} each</div>
                      </div>

                      <div className="cart-item-controls">
                        <div className="cart-qty-group">
                          <button
                            type="button"
                            className="cart-qty-btn"
                            onClick={() => updateQuantity(item.id, -1)}
                            aria-label={`Decrease ${item.name} quantity`}
                          >
                            <MinusIcon style={{ width: "14px", height: "14px" }} />
                          </button>
                          <span className="cart-qty-num">{item.quantity}</span>
                          <button
                            type="button"
                            className="cart-qty-btn"
                            onClick={() => updateQuantity(item.id, 1)}
                            aria-label={`Increase ${item.name} quantity`}
                          >
                            <PlusIcon style={{ width: "14px", height: "14px" }} />
                          </button>
                        </div>

                        <button
                          type="button"
                          className="cart-remove-btn"
                          onClick={() => removeFromCart(item.id)}
                          aria-label={`Remove ${item.name}`}
                        >
                          <TrashIcon style={{ width: "16px", height: "16px", display: "inline-block", verticalAlign: "middle" }} />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="cart-options">
                <div>
                  <div className="cart-option-label">Order Type</div>
                  <div className="cart-type-selector">
                    <button
                      type="button"
                      className={`cart-type-btn ${orderType === "pickup" ? "is-active" : ""}`}
                      onClick={() => setOrderType("pickup")}
                    >
                      🏬 Pick Up at Bakery
                    </button>
                    <button
                      type="button"
                      className={`cart-type-btn ${orderType === "delivery" ? "is-active" : ""}`}
                      onClick={() => setOrderType("delivery")}
                    >
                      🛵 Delivery
                    </button>
                  </div>
                </div>

                <div>
                  <label htmlFor="cartNotes" className="cart-option-label">
                    Special Instructions / Custom Cake Note
                  </label>
                  <textarea
                    id="cartNotes"
                    className="cart-notes"
                    placeholder="E.g. Cake message: Happy Birthday Rifna, candle count, extra chocolate..."
                    value={customerNotes}
                    onChange={(e) => setCustomerNotes(e.target.value)}
                  />
                </div>

                <button
                  type="button"
                  style={{
                    alignSelf: "flex-start",
                    fontSize: "0.82rem",
                    color: "var(--muted-dark)",
                    textDecoration: "underline",
                    cursor: "pointer"
                  }}
                  onClick={clearCart}
                >
                  Clear all items
                </button>
              </div>
            </>
          )}
        </div>

        {items.length > 0 && (
          <div className="cart-footer">
            <div className="cart-total-row">
              <span className="cart-total-label">Subtotal:</span>
              <span className="cart-total-amount">{formatPrice(totalAmount)}</span>
            </div>

            <a
              href={getWhatsAppCartUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-gold cart-checkout-btn"
              onClick={() => setIsCartOpen(false)}
            >
              <WhatsAppIcon className="i" />
              <span>Order via WhatsApp</span>
            </a>
          </div>
        )}
      </aside>
    </>
  );
}
