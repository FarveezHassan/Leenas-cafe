"use client";

import React from "react";
import { useCart } from "@/context/CartContext";
import { CartIcon } from "./Icons";

export default function Toast() {
  const { toasts } = useCart();

  if (toasts.length === 0) return null;

  return (
    <div className="toast-container" aria-live="polite">
      {toasts.map((toast) => (
        <div key={toast.id} className="toast">
          <CartIcon style={{ width: "18px", height: "18px", color: "var(--gold)" }} />
          <span>{toast.message}</span>
        </div>
      ))}
    </div>
  );
}
