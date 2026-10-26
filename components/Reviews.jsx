import React from "react";
import { REVIEWS, BAKERY_CONFIG } from "@/data/bakery-data";
import { SparkIcon, FacebookIcon, InstagramIcon, WhatsAppIcon } from "./Icons";

export default function Reviews() {
  return (
    <section className="section cream reviews" id="reviews" aria-labelledby="reviewsTitle">
      <div className="container">
        <div className="section-head">
          <h2 className="section-title" id="reviewsTitle">
            Loved by Cake Lovers
          </h2>
          <div className="divider" aria-hidden="true">
            <span></span>
            <SparkIcon className="i" />
            <span></span>
          </div>
          <p className="section-intro">
            Real feedback from our lovely customers in Eravur and Batticaloa.
          </p>
        </div>

        <div className="review-grid">
          {REVIEWS.map((rev) => (
            <figure key={rev.id} className="review">
              <div>
                <div className="review-stars" aria-label="5 out of 5 stars">
                  {"★".repeat(rev.rating || 5)}
                </div>
                <blockquote>&ldquo;{rev.quote}&rdquo;</blockquote>
              </div>
              <figcaption>
                <strong>{rev.name}</strong>
                <span>{rev.source}</span>
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="review-empty review-invite">
          <SparkIcon className="i" />
          <h3>Visited Leena&apos;s recently?</h3>
          <p>
            We would love to hear about your experience! Share your photos and thoughts with us on social media or send us a message.
          </p>
          <div className="review-actions">
            <a
              className="btn btn-ghost"
              href={BAKERY_CONFIG.socials.facebook}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FacebookIcon className="i" />
              <span>Facebook</span>
            </a>
            <a
              className="btn btn-ghost"
              href={BAKERY_CONFIG.socials.instagram}
              target="_blank"
              rel="noopener noreferrer"
            >
              <InstagramIcon className="i" />
              <span>Instagram</span>
            </a>
            <a
              className="btn btn-ghost"
              href={`https://wa.me/${BAKERY_CONFIG.whatsapp.primary}?text=${encodeURIComponent(
                "Hello Leena's! I'd like to share my feedback on my recent visit."
              )}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <WhatsAppIcon className="i" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
