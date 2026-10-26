"use client";

import React, { useState, useEffect, useCallback } from "react";
import { GALLERY_ITEMS } from "@/data/bakery-data";
import { SparkIcon, CloseIcon, PrevIcon, NextIcon } from "./Icons";

export default function Gallery() {
  const [activePhotoIndex, setActivePhotoIndex] = useState(null);

  const handlePrev = useCallback(() => {
    setActivePhotoIndex((prev) =>
      prev !== null ? (prev - 1 + GALLERY_ITEMS.length) % GALLERY_ITEMS.length : null
    );
  }, []);

  const handleNext = useCallback(() => {
    setActivePhotoIndex((prev) =>
      prev !== null ? (prev + 1) % GALLERY_ITEMS.length : null
    );
  }, []);

  const handleClose = useCallback(() => {
    setActivePhotoIndex(null);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (activePhotoIndex === null) return;
      if (e.key === "Escape") handleClose();
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    };

    if (activePhotoIndex !== null) {
      document.body.classList.add("modal-open");
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.classList.remove("modal-open");
    }

    return () => {
      document.body.classList.remove("modal-open");
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activePhotoIndex, handleClose, handlePrev, handleNext]);

  return (
    <section className="section cream gallery" id="gallery" aria-labelledby="galleryTitle">
      <div className="container">
        <div className="section-head">
          <h2 className="section-title" id="galleryTitle">
            Inside Leena&apos;s
          </h2>
          <div className="divider" aria-hidden="true">
            <span></span>
            <SparkIcon className="i" />
            <span></span>
          </div>
          <p className="section-intro">
            Moments, interior atmosphere, and ambiance from our shop in Eravur. Tap any photo to enlarge.
          </p>
        </div>

        <ul className="gallery-grid" id="galleryGrid">
          {GALLERY_ITEMS.map((item, idx) => (
            <li key={item.id}>
              <button
                type="button"
                className="g-item"
                onClick={() => setActivePhotoIndex(idx)}
                aria-label={`View photo: ${item.caption}`}
              >
                <img
                  src={item.thumb}
                  alt={item.caption}
                  loading="lazy"
                />
                <span className="g-cap">{item.caption}</span>
              </button>
            </li>
          ))}
        </ul>

        {/* Full-screen Lightbox Dialog */}
        {activePhotoIndex !== null && (
          <div
            className="lightbox"
            role="dialog"
            aria-modal="true"
            aria-label="Photo viewer"
            onClick={handleClose}
          >
            <button
              type="button"
              className="lb-btn lb-close"
              onClick={handleClose}
              aria-label="Close photo"
            >
              <CloseIcon className="i" />
            </button>

            <button
              type="button"
              className="lb-btn lb-prev"
              onClick={(e) => {
                e.stopPropagation();
                handlePrev();
              }}
              aria-label="Previous photo"
            >
              <PrevIcon className="i" />
            </button>

            <figure className="lb-figure" onClick={(e) => e.stopPropagation()}>
              <img
                src={GALLERY_ITEMS[activePhotoIndex].full}
                alt={GALLERY_ITEMS[activePhotoIndex].caption}
              />
              <figcaption>{GALLERY_ITEMS[activePhotoIndex].caption}</figcaption>
            </figure>

            <button
              type="button"
              className="lb-btn lb-next"
              onClick={(e) => {
                e.stopPropagation();
                handleNext();
              }}
              aria-label="Next photo"
            >
              <NextIcon className="i" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
