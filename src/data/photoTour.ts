export interface TourImage {
  url: string;
  alt: string;
}

export interface PhotoTourSection {
  id: string;
  title: string;
  description: string;
  images: TourImage[];
}

// Reusing the 5 local images we have to mock the layout
const img1 = { url: '/images/custom-1.jpg', alt: 'Living room 1' };
const img2 = { url: '/images/custom-2.jpg', alt: 'Living room 2' };
const img3 = { url: '/images/custom-3.png', alt: 'Full kitchen' };
const img4 = { url: '/images/custom-4.jpg', alt: 'Bedroom' };
const img5 = { url: '/images/custom-5.jpg', alt: 'Full bathroom' };
const img6 = { url: '/images/tour-6.jpg', alt: 'Gym' };
const img7 = { url: '/images/tour-7.jpg', alt: 'Exterior' };
const img8 = { url: '/images/tour-8.jpg', alt: 'Pool' };
const img9 = { url: '/images/tour-9.jpg', alt: 'Additional photos' };

export const photoTourSections: PhotoTourSection[] = [
  {
    id: "living-room-1",
    title: "Living room 1",
    description: "Sofa · Air conditioning · Ceiling fan · TV",
    images: [img1, img1, img1] // 1 large, 2 side-by-side
  },
  {
    id: "living-room-2",
    title: "Living room 2",
    description: "Ceiling fan · Hot tub",
    images: [img2, img2, img2, img2] // large main, smaller underneath, additional large
  },
  {
    id: "full-kitchen",
    title: "Full kitchen",
    description: "Freezer · Fridge · Blender · Cooker · Cooking basics · Kettle · Microwave · Toaster · Wine glasses · Coffee · Crockery and cutlery",
    images: [img3, img3, img3]
  },
  {
    id: "bedroom",
    title: "Bedroom",
    description: "Queen bed",
    images: [img4, img4, img4]
  },
  {
    id: "full-bathroom",
    title: "Full bathroom",
    description: "Shower · Toilet",
    images: [img5, img5]
  },
  {
    id: "gym",
    title: "Gym",
    description: "Air conditioning · Gym · Exercise equipment · Ceiling fan",
    images: [img6, img6, img6]
  },
  {
    id: "exterior",
    title: "Exterior",
    description: "Outdoor space",
    images: [img7, img7, img7]
  },
  {
    id: "pool",
    title: "Pool",
    description: "Pool",
    images: [img8, img8, img8] // large pool, two smaller pool
  },
  {
    id: "additional-photos",
    title: "Additional photos",
    description: "",
    images: [img9, img9, img9, img9]
  }
];

// Flat array for the Lightbox global index navigation
export const flattenedTourImages: TourImage[] = photoTourSections.flatMap(section => section.images);
