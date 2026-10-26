"use client";

import React, { useState, useEffect } from "react";
import { BAKERY_CONFIG } from "@/data/bakery-data";
import { WhatsAppIcon, ChevronUpIcon } from "./Icons";

export default function FloatingActions() {
  const [showToTop, setShowToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowToTop(window.scrollY > 600);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {showToTop && (
        <button
          className="to-top"
          type="button"
          aria-label="Back to top"
          onClick={scrollToTop}
        >
          <ChevronUpIcon className="i" />
        </button>
      )}

      <a
        className="wa-float"
        href={`https://wa.me/${BAKERY_CONFIG.whatsapp.primary}?text=${encodeURIComponent(
          "Hello Leena's Cakes & Desserts! I would like to place an order."
        )}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Order on WhatsApp"
      >
        <WhatsAppIcon className="i" />
      </a>
    </>
  );
}
