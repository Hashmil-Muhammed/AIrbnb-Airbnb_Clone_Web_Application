"use client";

import React, { useState } from "react";
import Header from "@/components/Header/Header";
import ListingHeader from "@/components/ListingHeader/ListingHeader";
import HeroGallery from "@/components/HeroGallery/HeroGallery";
import ListingDetails from "@/components/ListingDetails/ListingDetails";
import BookingCard from "@/components/BookingCard/BookingCard";
import PhotoTour from "@/components/PhotoTour/PhotoTour";
import Lightbox from "@/components/Lightbox/Lightbox";
import styles from "./page.module.css"; 

export default function Home() {
  const [isPhotoTourOpen, setIsPhotoTourOpen] = useState(false);
  const [activePhotoIndex, setActivePhotoIndex] = useState<number | null>(null);

  const handleShowAllPhotos = () => {
    setIsPhotoTourOpen(true);
  };

  const handleImageClick = (index: number) => {
    setActivePhotoIndex(index);
  };

  const closePhotoTour = () => {
    setIsPhotoTourOpen(false);
  };

  const closeLightbox = () => {
    setActivePhotoIndex(null);
  };

  return (
    <>
      <Header />
      <main className="container">
        <ListingHeader />
        <HeroGallery 
          onShowAllPhotos={handleShowAllPhotos} 
          onImageClick={handleImageClick} 
        />
        <div className={styles.content}>
          <div className={styles.mainColumn}>
            <ListingDetails />
          </div>
          <div className={styles.sidebarColumn}>
            <BookingCard />
          </div>
        </div>
      </main>

      <PhotoTour 
        isOpen={isPhotoTourOpen} 
        onClose={closePhotoTour}
        onImageClick={handleImageClick}
      />

      <Lightbox 
        activeIndex={activePhotoIndex}
        onClose={closeLightbox}
        onNavigate={setActivePhotoIndex}
      />
    </>
  );
}
