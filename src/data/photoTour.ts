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
const bed_5 = { url: '/images/tour-bedroom-5.jpg', alt: 'Bedroom view 5' };
const bed_6 = { url: '/images/tour-bedroom-6.jpg', alt: 'Bedroom view 6' };

const gym_1 = { url: '/images/tour-6.jpg', alt: 'Gym view 1' };
const gym_2 = { url: '/images/tour-gym-2.png', alt: 'Gym view 2' };
const gym_3 = { url: '/images/tour-gym-3.jpg', alt: 'Gym view 3' };
const gym_4 = { url: '/images/tour-gym-4.jpg', alt: 'Gym view 4' };
const gym_5 = { url: '/images/tour-gym-5.jpg', alt: 'Gym view 5' };

const ext_1 = { url: '/images/tour-exterior-1.jpg', alt: 'Exterior view 1' };
const ext_2 = { url: '/images/tour-exterior-2.jpg', alt: 'Exterior view 2' };
const ext_3 = { url: '/images/tour-exterior-3.jpg', alt: 'Exterior view 3' };
const ext_4 = { url: '/images/listing-5.jpg', alt: 'Exterior view 4' };
const ext_5 = { url: '/images/tour-exterior-5.jpg', alt: 'Exterior view 5' };
const ext_6 = { url: '/images/tour-exterior-6.jpg', alt: 'Exterior view 6' };

const pool_1 = { url: '/images/tour-8.jpg', alt: 'Pool view 1' };
const pool_2 = { url: '/images/tour-pool-2.jpg', alt: 'Pool view 2' };
const pool_3 = { url: '/images/tour-8.jpg', alt: 'Pool view 3' };

const add_1 = { url: '/images/tour-add-1.jpg', alt: 'Additional view 1' };
const add_2 = { url: '/images/tour-add-2.jpg', alt: 'Additional view 2' };
const add_3 = { url: '/images/tour-add-3.jpg', alt: 'Additional view 3' };

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
    images: [kit_2, kit_1 ]
  },
  {
    id: "bedroom",
    title: "Bedroom",
    description: "Double bed · Air conditioning · Bed linen · Ceiling fan · Clothes\nstorage · Cot · Hangers · Iron · Room-darkening blinds ·\nCleaning available during stay · Cleaning products · Long-term\nstays allowed · Private entrance · Wifi",
    images: [bed_1, bed_2, bed_3, bed_4, bed_5, bed_6]
  },
  {
    id: "full-bathroom",
    title: "Full bathroom",
    description: "Hairdryer · Hot water · Shampoo · Shower gel",
    images: [img5]
  },
  {
    id: "gym",
    title: "Gym",
    description: "Air conditioning · Gym · Exercise equipment · Ceiling fan",
    images: [gym_1, gym_2, gym_3, gym_4, gym_5]
  },
  {
    id: "exterior",
    title: "Exterior",
    description: "",
    images: [ext_1, ext_2, ext_3, ext_4, ext_5, ext_6]
  },
  {
    id: "pool",
    title: "Pool",
    description: "Pool",
    images: [pool_1, pool_2, pool_3] // large pool, two smaller pool
  },
  {
    id: "additional-photos",
    title: "Additional photos",
    description: "",
    images: [add_1, add_2, add_3, img9, img9, img9, img9, img9, img9, img9]
  }
];

// Flat array for the Lightbox global index navigation
export const flattenedTourImages: TourImage[] = photoTourSections.flatMap(section => section.images);
