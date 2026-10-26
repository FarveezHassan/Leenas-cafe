"use client";

import React, { useState, useEffect } from "react";
import { BAKERY_CONFIG } from "@/data/bakery-data";
import { PinIcon, WhatsAppIcon } from "./Icons";

export default function Hero() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    function checkIsOpen() {
      try {
        const parts = new Intl.DateTimeFormat("en-GB", {
          timeZone: BAKERY_CONFIG.hours.timeZone,
          hour: "2-digit",
          minute: "2-digit",
          hourCycle: "h23",
        }).formatToParts(new Date());

        let h = 0, m = 0;
        parts.forEach((p) => {
          if (p.type === "hour") h = parseInt(p.value, 10);
          if (p.type === "minute") m = parseInt(p.value, 10);
        });

        const now = h * 60 + m;
        const openMin = BAKERY_CONFIG.hours.open.h * 60 + BAKERY_CONFIG.hours.open.m;
        const closeMin = BAKERY_CONFIG.hours.close.h * 60 + BAKERY_CONFIG.hours.close.m;

        // Open from 4:30 PM (16:30) to 1:00 AM (01:00 next day)
        setIsOpen(now >= openMin || now < closeMin);
      } catch (e) {
        // Fallback default
        setIsOpen(true);
      }
    }

    checkIsOpen();
    const interval = setInterval(checkIsOpen, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero dark" id="home" aria-labelledby="heroTitle">
      <div className="container hero-grid">
        <div className="hero-copy">
          <p className={`status-pill ${isOpen ? "is-open" : ""}`}>
            <span className="dot" aria-hidden="true"></span>
            <span>{isOpen ? "Open now" : "Opens at 4:30 PM"}</span>
            <span className="status-sep" aria-hidden="true"></span>
            <span>{BAKERY_CONFIG.hours.label}</span>
          </p>

          <h1 className="hero-title" id="heroTitle">
            <span className="hero-name">Leena&apos;s</span>
            <span className="hero-sub">Cakes &amp; Desserts</span>
          </h1>

          <p className="hero-script">{BAKERY_CONFIG.tagline}</p>
          <p className="hero-lede">{BAKERY_CONFIG.description}</p>

          <div className="hero-cta">
            <a className="btn btn-gold" href="#menu">
              Explore menu
            </a>
            <a
              className="btn btn-ghost"
              href={`https://wa.me/${BAKERY_CONFIG.whatsapp.primary}?text=${encodeURIComponent(
                "Hello Leena's Cakes & Desserts! I would like to place an order."
              )}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <WhatsAppIcon className="i" />
              <span>Order on WhatsApp</span>
            </a>
          </div>
        </div>

        <div className="hero-visual">
          <div className="arch">
            <div className="arch-frame">
              <img
                src="/images/shop/shop-interior-hero-arch.webp"
                width={700}
                height={919}
                alt="Inside Leena's: Glowing Moon Wall with neon logo and marble seating"
                fetchPriority="high"
              />
            </div>
          </div>
          <img
            className="hero-logo"
            src="/images/logo/leenas-logo-240.webp"
            srcSet="/images/logo/leenas-logo-240.webp 1x, /images/logo/leenas-logo-512.webp 2x"
            width={240}
            height={240}
            alt="Leena's Cakes & Desserts logo"
          />
          <p className="hero-place">
            <PinIcon className="i" />
            <span>{BAKERY_CONFIG.address.street}, {BAKERY_CONFIG.address.locality}</span>
          </p>
        </div>
      </div>
    </section>
  );
}
