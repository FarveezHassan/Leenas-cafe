import React from "react";
import { BAKERY_CONFIG } from "@/data/bakery-data";
import { FacebookIcon, InstagramIcon, WhatsAppIcon, PinIcon } from "./Icons";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <img
            src="/images/logo/leenas-logo-96.webp"
            srcSet="/images/logo/leenas-logo-96.webp 1x, /images/logo/leenas-logo-240.webp 2.5x"
            width={72}
            height={72}
            alt="Leena's Cakes & Desserts logo"
            loading="lazy"
          />
          <p className="footer-name">{BAKERY_CONFIG.name}</p>
          <p className="footer-script">{BAKERY_CONFIG.tagline}</p>
        </div>

        <div>
          <h2 className="footer-h">Find us</h2>
          <address>
            {BAKERY_CONFIG.address.street},<br />
            {BAKERY_CONFIG.address.locality}, {BAKERY_CONFIG.address.country}
          </address>
          <p>
            <a href={`tel:${BAKERY_CONFIG.phoneFormatted}`}>{BAKERY_CONFIG.phone}</a>
            <br />
            <a href="tel:+94761776093">0761776093</a>
          </p>
        </div>

        <div>
          <h2 className="footer-h">Opening Hours</h2>
          <p>{BAKERY_CONFIG.hours.label} daily</p>
          <ul className="social" aria-label="Social media links">
            <li>
              <a
                href={BAKERY_CONFIG.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <FacebookIcon className="i" />
              </a>
            </li>
            <li>
              <a
                href={BAKERY_CONFIG.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <InstagramIcon className="i" />
              </a>
            </li>
            <li>
              <a
                href={`https://wa.me/${BAKERY_CONFIG.whatsapp.primary}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
              >
                <WhatsAppIcon className="i" />
              </a>
            </li>
            <li>
              <a
                href={BAKERY_CONFIG.address.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Google Maps"
              >
                <PinIcon className="i" />
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="container footer-base">
        <p>&copy; {currentYear} {BAKERY_CONFIG.name}. All rights reserved.</p>
        <p className="credit">
          Website modernized &amp; maintained with Next.js &amp; React.
        </p>
      </div>
    </footer>
  );
}
