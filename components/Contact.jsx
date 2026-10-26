"use client";

import React, { useState, useEffect } from "react";
import { BAKERY_CONFIG } from "@/data/bakery-data";
import {
  SparkIcon,
  PinIcon,
  PhoneIcon,
  WhatsAppIcon,
  UserIcon,
  ClockIcon,
  DirectionsIcon,
  FacebookIcon,
  InstagramIcon,
  ExternalIcon
} from "./Icons";

export default function Contact() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    function checkHours() {
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

        setIsOpen(now >= openMin || now < closeMin);
      } catch (e) {
        setIsOpen(true);
      }
    }
    checkHours();
    const interval = setInterval(checkHours, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="section dark contact" id="contact" aria-labelledby="contactTitle">
      <div className="container contact-grid">
        <div className="contact-copy">
          <h2 className="section-title" id="contactTitle">
            Visit or Order
          </h2>
          <div className="divider" aria-hidden="true">
            <span></span>
            <SparkIcon className="i" />
            <span></span>
          </div>

          <p className="contact-name">{BAKERY_CONFIG.name}</p>

          <ul className="contact-list">
            <li>
              <PinIcon className="i" />
              <span>{BAKERY_CONFIG.address.street}, {BAKERY_CONFIG.address.locality}, {BAKERY_CONFIG.address.country}</span>
            </li>
            <li>
              <PhoneIcon className="i" />
              <span>
                Bakery Hotline: <a href={`tel:${BAKERY_CONFIG.phoneFormatted}`}>{BAKERY_CONFIG.phone}</a>
              </span>
            </li>
            <li>
              <WhatsAppIcon className="i" />
              <span>
                WhatsApp:{" "}
                <a
                  href={`https://wa.me/${BAKERY_CONFIG.whatsapp.primary}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  0761776093
                </a>
              </span>
            </li>
            <li>
              <UserIcon className="i" />
              <span>Key contact: Mohamed Rifan</span>
            </li>
            <li>
              <ClockIcon className="i" />
              <span>
                {BAKERY_CONFIG.hours.label}{" "}
                <em className="hours-live">
                  {isOpen ? "• Open right now" : "• Closed now, opens at 4:30 PM"}
                </em>
              </span>
            </li>
          </ul>

          <div className="contact-actions">
            <a
              className="btn btn-gold"
              href={`https://wa.me/${BAKERY_CONFIG.whatsapp.primary}?text=${encodeURIComponent(
                "Hello Leena's Cakes & Desserts! I would like to place an order."
              )}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <WhatsAppIcon className="i" />
              <span>WhatsApp</span>
            </a>
            <a className="btn btn-ghost" href={`tel:${BAKERY_CONFIG.phoneFormatted}`}>
              <PhoneIcon className="i" />
              <span>Call now</span>
            </a>
            <a
              className="btn btn-ghost"
              href={BAKERY_CONFIG.address.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <DirectionsIcon className="i" />
              <span>Get directions</span>
            </a>
          </div>

          <p className="contact-fallback">
            Line busy? Reach out directly to Mohamed Rifan at{" "}
            <a href="tel:+94761776093">0761776093</a> or{" "}
            <a href={`tel:${BAKERY_CONFIG.phoneFormatted}`}>{BAKERY_CONFIG.phone}</a>.
          </p>

          <ul className="social" aria-label="Social media">
            <li>
              <a
                href={BAKERY_CONFIG.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook page"
              >
                <FacebookIcon className="i" />
              </a>
            </li>
            <li>
              <a
                href={BAKERY_CONFIG.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram profile"
              >
                <InstagramIcon className="i" />
              </a>
            </li>
            <li>
              <a
                href={`https://wa.me/${BAKERY_CONFIG.whatsapp.primary}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp chat"
              >
                <WhatsAppIcon className="i" />
              </a>
            </li>
          </ul>
        </div>

        {/* Google Maps Interactive Card */}
        <a
          className="map-card"
          href={BAKERY_CONFIG.address.mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Open Leena's Cakes in Google Maps"
        >
          <img
            src="/images/shop/shop-exterior-640.webp"
            srcSet="/images/shop/shop-exterior-640.webp 640w, /images/shop/shop-exterior-1280.webp 1280w"
            sizes="(min-width: 900px) 45vw, 90vw"
            width={640}
            height={474}
            alt="Leena's storefront"
            loading="lazy"
          />
          <span className="map-card-body">
            <PinIcon className="i" />
            <strong>Find us on Google Maps</strong>
            <span>{BAKERY_CONFIG.address.street}, {BAKERY_CONFIG.address.locality}</span>
            <span className="map-card-cta">
              Open map <ExternalIcon className="i" />
            </span>
          </span>
        </a>
      </div>
    </section>
  );
}
