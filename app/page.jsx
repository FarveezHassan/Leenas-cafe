"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import About from "@/components/About";
import Featured from "@/components/Featured";
import Menu from "@/components/Menu";
import Gallery from "@/components/Gallery";
import Videos from "@/components/Videos";
import Reviews from "@/components/Reviews";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ProductModal from "@/components/ProductModal";

export default function HomePage() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleSelectCategoryFromAbout = (catId) => {
    setActiveCategory(catId);
    setSearchQuery("");
  };

  return (
    <>
      <Navbar />

      <main id="main">
        <Hero />
        <Marquee />
        <About onSelectCategory={handleSelectCategoryFromAbout} />
        <Featured onSelectProduct={(p) => setSelectedProduct(p)} />
        <Menu
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          onSelectProduct={(p) => setSelectedProduct(p)}
        />
        <Gallery />
        <Videos />
        <Reviews />
        <Contact />
      </main>

      <Footer />

      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </>
  );
}
