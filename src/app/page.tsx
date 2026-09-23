"use client";

import React, { useState } from "react";
import { listing } from "@/data/listing";
import Header from "@/components/Header/Header";
import ListingHeader from "@/components/ListingHeader/ListingHeader";
import HeroGallery from "@/components/HeroGallery/HeroGallery";
import ListingDetails from "@/components/ListingDetails/ListingDetails";
import BookingCard from "@/components/BookingCard/BookingCard";
import PromoCard from "@/components/PromoCard/PromoCard";
import StickyNav from "@/components/StickyNav/StickyNav";
import CalendarSection from "@/components/CalendarSection/CalendarSection";
import ReviewsSection from "@/components/ReviewsSection/ReviewsSection";
import LocationSection from "@/components/LocationSection/LocationSection";
import MeetYourHost from "@/components/MeetYourHost/MeetYourHost";
import ThingsToKnow from "@/components/ThingsToKnow/ThingsToKnow";
import GuestFavouriteBadge from "@/components/GuestFavouriteBadge/GuestFavouriteBadge";
import PhotoTour from "@/components/PhotoTour/PhotoTour";
import Lightbox from "@/components/Lightbox/Lightbox";
import MoreStaysNearby from "@/components/MoreStaysNearby/MoreStaysNearby";
import styles from "./page.module.css"; 

export default function Home() {
  const [isPhotoTourOpen, setIsPhotoTourOpen] = useState(false);
  const [activePhotoIndex, setActivePhotoIndex] = useState<number | null>(null);
  const [lightboxImages, setLightboxImages] = useState(listing.images);

  const handleShowAllPhotos = () => {
    setIsPhotoTourOpen(true);
  };

  const handleImageClick = (index: number, imagesArray = listing.images) => {
    setLightboxImages(imagesArray);
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
      <StickyNav />
      <main className="container">
        <ListingHeader />
        <HeroGallery 
          onShowAllPhotos={handleShowAllPhotos} 
          onImageClick={(idx) => handleImageClick(idx)} 
        />
        <div className={styles.content}>
          <div className={styles.mainColumn}>
            <ListingDetails />
            <CalendarSection />
          </div>
          <div className={styles.sidebarColumn}>
            <div className={styles.stickyWrapper}>
              <PromoCard />
              <BookingCard />
            </div>
          </div>
        </div>

        <GuestFavouriteBadge />
        <ReviewsSection />
        <LocationSection />
        <MeetYourHost />
        <ThingsToKnow />
        <MoreStaysNearby />
      </main>

      <PhotoTour 
        isOpen={isPhotoTourOpen} 
        onClose={closePhotoTour}
        onImageClick={(idx, images) => handleImageClick(idx, images)}
      />

      <Lightbox 
        activeIndex={activePhotoIndex}
        images={lightboxImages}
        onClose={closeLightbox}
        onNavigate={setActivePhotoIndex}
      />
    </>
  );
}
