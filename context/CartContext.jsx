"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { BAKERY_CONFIG } from "@/data/bakery-data";

const CartContext = createContext(null);

export function CartProvider({ children }) {
  const [items, setItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [orderType, setOrderType] = useState("pickup"); // 'pickup' | 'delivery'
  const [customerNotes, setCustomerNotes] = useState("");
  const [toasts, setToasts] = useState([]);

  // Load cart from localStorage if available
  useEffect(() => {
    try {
      const saved = localStorage.getItem("leenas_cart");
      if (saved) {
        setItems(JSON.parse(saved));
      }
    } catch (e) {
      // Ignore
    }
  }, []);

  // Sync to localStorage
  useEffect(() => {
    try {
      localStorage.setItem("leenas_cart", JSON.stringify(items));
    } catch (e) {
      // Ignore
    }
  }, [items]);

  const showToast = (message) => {
    const id = Date.now() + Math.random();
    setToasts((prev) => [...prev, { id, message }]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 2800);
  };

  const addToCart = (product, quantity = 1, note = "") => {
    setItems((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantity, note: note || item.note }
            : item
        );
      }
      return [
        ...prev,
        {
          id: product.id,
          name: product.name,
          price: product.price,
          image: product.image,
          quantity,
          note
        }
      ];
    });
    showToast(`Added ${quantity > 1 ? `${quantity}x ` : ""}${product.name} to order`);
  };

  const removeFromCart = (productId) => {
    setItems((prev) => prev.filter((item) => item.id !== productId));
  };

  const updateQuantity = (productId, delta) => {
    setItems((prev) =>
      prev
        .map((item) => {
          if (item.id === productId) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean)
    );
  };

  const clearCart = () => {
    setItems([]);
  };

  const formatPrice = (amount) => {
    return "Rs. " + Number(amount).toLocaleString("en-US");
  };

  const totalItems = items.reduce((acc, item) => acc + item.quantity, 0);
  const totalAmount = items.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const getWhatsAppCartUrl = () => {
    if (items.length === 0) return "";
    
    let text = `${BAKERY_CONFIG.greeting}\n\n`;
    text += `*NEW ORDER - ${orderType.toUpperCase()}*\n`;
    text += `--------------------------\n`;
    
    items.forEach((item, index) => {
      text += `${index + 1}. *${item.name}* x ${item.quantity} = ${formatPrice(item.price * item.quantity)}\n`;
      if (item.note) {
        text += `   _Note: ${item.note}_\n`;
      }
    });

    text += `--------------------------\n`;
    text += `*Total items:* ${totalItems}\n`;
    text += `*Total Amount:* ${formatPrice(totalAmount)}\n`;
    text += `*Preference:* ${orderType === "pickup" ? "Pick up at bakery" : "Delivery requested"}\n`;

    if (customerNotes.trim()) {
      text += `*Special instructions:* ${customerNotes.trim()}\n`;
    }

    text += `\nPlease confirm if available. Thank you!`;

    return `https://wa.me/${BAKERY_CONFIG.whatsapp.primary}?text=${encodeURIComponent(text)}`;
  };

  const getDirectProductOrderUrl = (product, quantity = 1) => {
    const text = `${BAKERY_CONFIG.greeting}\nI would like to order:\n${quantity > 1 ? `${quantity}x ` : ""}${product.name}\nPrice: ${formatPrice(product.price * quantity)}`;
    return `https://wa.me/${BAKERY_CONFIG.whatsapp.primary}?text=${encodeURIComponent(text)}`;
  };

  return (
    <CartContext.Provider
      value={{
        items,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        isCartOpen,
        setIsCartOpen,
        orderType,
        setOrderType,
        customerNotes,
        setCustomerNotes,
        totalItems,
        totalAmount,
        formatPrice,
        getWhatsAppCartUrl,
        getDirectProductOrderUrl,
        toasts,
        showToast
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}
