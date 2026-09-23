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
const lr1_1 = { url: '/images/tour-lr1-1.jpg', alt: 'Living room 1 view 1' };
const lr1_2 = { url: '/images/tour-lr1-2.jpg', alt: 'Living room 1 view 2' };
const lr1_3 = { url: '/images/tour-lr1-3.jpg', alt: 'Living room 1 view 3' };
const lr2_1 = { url: '/images/listing-2.jpg', alt: 'Living room 2 view 1' };
const lr2_2 = { url: '/images/listing-3.jpg', alt: 'Living room 2 view 2' };
const lr2_3 = { url: '/images/tour-lr2-3.jpg', alt: 'Living room 2 view 3' };
const lr2_4 = { url: '/images/listing-1.jpg', alt: 'Living room 2 view 4' };
const lr2_5 = { url: '/images/tour-lr2-5.jpg', alt: 'Living room 2 view 5' };
const lr2_6 = { url: '/images/tour-lr2-6.jpg', alt: 'Living room 2 view 6' };
const lr2_7 = { url: '/images/tour-lr2-7.jpg', alt: 'Living room 2 view 7' };

const kit_1 = { url: '/images/custom-3.jpg', alt: 'Full kitchen view 1' };
const kit_2 = { url: '/images/tour-kitchen-2.jpg', alt: 'Full kitchen view 2' };
const bed_1 = { url: '/images/custom-4.jpg', alt: 'Bedroom view 1' };
const bed_2 = { url: '/images/tour-bedroom-2.jpg', alt: 'Bedroom view 2' };
const bed_3 = { url: '/images/tour-bedroom-3.jpg', alt: 'Bedroom view 3' };
const bed_4 = { url: '/images/tour-bedroom-4.jpg', alt: 'Bedroom view 4' };

export const photoTourSections: PhotoTourSection[] = [
  {
    id: "living-room-1",
    title: "Living room 1",
    description: "Sofa · Air conditioning · Ceiling fan · TV",
    images: [lr1_1, lr1_2, lr1_3] // 1 large, 2 side-by-side
  },
  {
    id: "living-room-2",
    title: "Living room 2",
    description: "Ceiling fan · Hot tub",
    images: [lr2_1, lr2_2, lr2_3, lr2_4, lr2_5, lr2_6, lr2_7]
  },
  {
    id: "full-kitchen",
    title: "Full kitchen",
    description: "Freezer · Fridge · Blender · Cooker · Cooking basics · Kettle ·\nMicrowave · Toaster · Wine glasses · Coffee · Crockery and\ncutlery",
    images: [kit_1, kit_2]
  },
  {
    id: "bedroom",
    title: "Bedroom",
    description: "Double bed · Air conditioning · Bed linen · Ceiling fan · Clothes\nstorage · Cot · Hangers · Iron · Room-darkening blinds ·\nCleaning available during stay · Cleaning products · Long-term\nstays allowed · Private entrance · Wifi",
    images: [bed_1, bed_2, bed_3, bed_4]
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
