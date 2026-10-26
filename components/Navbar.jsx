"use client";

import React, { useState, useEffect } from "react";
import { useCart } from "@/context/CartContext";
import { BAKERY_CONFIG } from "@/data/bakery-data";
import { WhatsAppIcon, CartIcon } from "./Icons";

export default function Navbar() {
  const { totalItems, setIsCartOpen } = useCart();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    // Section observer for highlighting active nav
    const sections = ["home", "about", "featured", "menu", "gallery", "videos", "reviews", "contact"];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -50% 0px" }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  const closeMobileNav = () => {
    setIsMobileMenuOpen(false);
    document.body.classList.remove("nav-open");
  };

  const toggleMobileNav = () => {
    const nextState = !isMobileMenuOpen;
    setIsMobileMenuOpen(nextState);
    if (nextState) {
      document.body.classList.add("nav-open");
    } else {
      document.body.classList.remove("nav-open");
    }
  };

  const navLinks = [
    { href: "#home", label: "Home", id: "home" },
    { href: "#about", label: "About", id: "about" },
    { href: "#menu", label: "Menu", id: "menu" },
    { href: "#gallery", label: "Gallery", id: "gallery" },
    { href: "#videos", label: "Videos", id: "videos" },
    { href: "#reviews", label: "Reviews", id: "reviews" },
    { href: "#contact", label: "Contact", id: "contact" },
  ];

  return (
    <>
      <header className={`nav ${isScrolled ? "is-scrolled" : ""}`} id="nav">
        <div className="nav-inner container">
          <a href="#home" className="brand" aria-label="Leena's Cakes & Desserts - Home">
            <img
              src="/images/logo/leenas-logo-96.webp"
              srcSet="/images/logo/leenas-logo-96.webp 1x, /images/logo/leenas-logo-240.webp 2.5x"
              width="48"
              height="48"
              alt="Leena's Cakes Logo"
              className="brand-logo"
            />
            <span className="brand-text">
              <span className="brand-name">Leena&apos;s</span>
              <span className="brand-sub">Cakes &amp; Desserts</span>
            </span>
          </a>

          <nav className="nav-links" aria-label="Main Navigation">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                className={activeSection === link.id ? "is-active" : ""}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="nav-actions">
            {/* Cart Trigger Button */}
            <button
              type="button"
              className="nav-cart-btn"
              onClick={() => setIsCartOpen(true)}
              aria-label={`View shopping cart with ${totalItems} items`}
            >
              <CartIcon className="i" />
              {totalItems > 0 && <span className="nav-cart-badge">{totalItems}</span>}
            </button>

            {/* Direct WhatsApp CTA */}
            <a
              className="btn btn-gold btn-sm nav-cta"
              href={`https://wa.me/${BAKERY_CONFIG.whatsapp.primary}?text=${encodeURIComponent(
                "Hello Leena's Cakes & Desserts! I would like to place an order."
              )}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <WhatsAppIcon className="i" />
              <span>Order now</span>
            </a>

            {/* Mobile Hamburger Button */}
            <button
              className={`burger ${isMobileMenuOpen ? "is-open" : ""}`}
              type="button"
              aria-expanded={isMobileMenuOpen}
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
              onClick={toggleMobileNav}
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      {isMobileMenuOpen && (
        <div className="mobile-nav" role="dialog" aria-modal="true">
          <nav aria-label="Mobile Navigation">
            {navLinks.map((link) => (
              <a key={link.id} href={link.href} onClick={closeMobileNav}>
                {link.label}
              </a>
            ))}
          </nav>

          <div className="mobile-nav-foot">
            <button
              type="button"
              className="btn btn-ghost"
              onClick={() => {
                closeMobileNav();
                setIsCartOpen(true);
              }}
            >
              <CartIcon className="i" />
              <span>View Order Cart ({totalItems})</span>
            </button>

            <a
              className="btn btn-gold"
              href={`https://wa.me/${BAKERY_CONFIG.whatsapp.primary}?text=${encodeURIComponent(
                "Hello Leena's Cakes & Desserts! I would like to place an order."
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMobileNav}
            >
              <WhatsAppIcon className="i" />
              <span>Order on WhatsApp</span>
            </a>
            <p className="mobile-nav-hours">{BAKERY_CONFIG.hours.label} • Open Daily</p>
          </div>
        </div>
      )}
    </>
  );
}
