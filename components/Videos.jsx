import React from "react";
import { VIDEO_REELS, BAKERY_CONFIG } from "@/data/bakery-data";
import { SparkIcon, PlayIcon, InstagramIcon } from "./Icons";

export default function Videos() {
  return (
    <section className="section dark videos" id="videos" aria-labelledby="videosTitle">
      <div className="container">
        <div className="section-head">
          <h2 className="section-title" id="videosTitle">
            Behind the Treats
          </h2>
          <div className="divider" aria-hidden="true">
            <span></span>
            <SparkIcon className="i" />
            <span></span>
          </div>
          <p className="section-intro">
            Catch baking highlights, artisan cake decorating, and behind-the-scenes vibes on Instagram.
          </p>
        </div>

        <ul className="video-grid">
          {VIDEO_REELS.map((reel, idx) => (
            <li key={reel.id}>
              <a
                className="video-card"
                href={reel.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Watch ${reel.title} on Instagram`}
              >
                <img
                  src={reel.thumb}
                  alt={reel.title}
                  width={360}
                  height={460}
                  loading="lazy"
                />
                <span className="video-play">
                  <PlayIcon className="i" />
                </span>
                <span className="video-meta">
                  <InstagramIcon className="i" />
                  <span>Reel #{idx + 1}</span>
                  <small>Watch on Instagram</small>
                </span>
              </a>
            </li>
          ))}
        </ul>

        <div className="center">
          <a
            className="btn btn-gold"
            href={BAKERY_CONFIG.socials.instagram}
            target="_blank"
            rel="noopener noreferrer"
          >
            <InstagramIcon className="i" />
            <span>Follow @leena.s94 on Instagram</span>
          </a>
        </div>
      </div>
    </section>
  );
}
