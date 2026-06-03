import { ServiceItem, GalleryItem, TestimonialItem } from './types';

// Let's import or define the exact absolute local paths for the generated image assets:
import heroBridalImg from './assets/images/hero_bridal_makeup_1780425127169.png';
import aboutSalonImg from './assets/images/about_beauty_salon_1780425146772.png';
import galleryFacialImg from './assets/images/gallery_facial_treatment_1780425163077.png';
import galleryHairImg from './assets/images/gallery_hair_styling_1780425179621.png';

export const IMAGES = {
  heroBridal: heroBridalImg,
  aboutSalon: aboutSalonImg,
  galleryFacial: galleryFacialImg,
  galleryHair: galleryHairImg,
  // Other high-quality thematic fallbacks:
  galleryMakeup: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&q=80&w=600',
  galleryNails: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&q=80&w=600',
  gallerySaree: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&q=80&w=600',
  gallerySpa: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&q=80&w=600',
};

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 's1',
    name: 'Bridal Makeup',
    category: 'makeup',
    icon: '👰',
    desc: 'Stunning and elegant traditional & HD bridal looks designed for your special day.',
    priceEstimate: 'From ₹8,000',
    imgUrl: IMAGES.heroBridal
  },
  {
    id: 's2',
    name: 'Party Makeup',
    category: 'makeup',
    icon: '🎉',
    desc: 'Glamorous and radiant party makeup tailored to suit the mood and venue of any event.',
    priceEstimate: 'From ₹1,800',
    imgUrl: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 's3',
    name: 'HD Makeup',
    category: 'makeup',
    icon: '💫',
    desc: 'Premium high-definition flawless airbrush/HD finish designed to look stunning on-camera.',
    priceEstimate: 'From ₹3,500',
    imgUrl: IMAGES.galleryMakeup
  },
  {
    id: 's4',
    name: 'Hair Styling',
    category: 'hair',
    icon: '💇‍♀️',
    desc: 'Intricate buns, cascading curls, and sleek modern hairstyles for any occasion.',
    priceEstimate: 'From ₹500',
    imgUrl: IMAGES.galleryHair
  },
  {
    id: 's5',
    name: 'Hair Cutting',
    category: 'hair',
    icon: '✂️',
    desc: 'Precision cuts, trim, and complete style makeovers by trained expert stylists.',
    priceEstimate: 'From ₹350',
    imgUrl: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 's6',
    name: 'Hair Spa',
    category: 'hair',
    icon: '🛁',
    desc: 'Deep nourishing therapy with massage to repair dry, frizzy, or damaged hair.',
    priceEstimate: 'From ₹1,200',
    imgUrl: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 's7',
    name: 'Hair Treatment',
    category: 'hair',
    icon: '🌿',
    desc: 'Advanced smooth silk, biotin, and custom nourishment treatments for ultimate shine.',
    priceEstimate: 'From ₹2,000',
    imgUrl: 'https://images.unsplash.com/photo-1595475243610-10111553a168?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 's8',
    name: 'Facial Treatments',
    category: 'skin',
    icon: '🌸',
    desc: 'De-tan, herbal, and luxurious whitening facials for young, hydrated, and glowing skin.',
    priceEstimate: 'From ₹800',
    imgUrl: IMAGES.galleryFacial
  },
  {
    id: 's9',
    name: 'Skin Care',
    category: 'skin',
    icon: '✨',
    desc: 'Hydration therapies, gold glow packs, and clean-ups tailored specifically to your skin type.',
    priceEstimate: 'From ₹600',
    imgUrl: IMAGES.gallerySpa
  },
  {
    id: 's10',
    name: 'Threading',
    category: 'other',
    icon: '🧵',
    desc: 'Highly precise forehead, upper-lip, and eyebrow shaping carried out with maximum hygienic standards.',
    priceEstimate: 'From ₹40',
    imgUrl: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 's11',
    name: 'Waxing',
    category: 'skin',
    icon: '🕯️',
    desc: 'Smooth, nourishing honey, chocolate, and Rica waxing for a silky and long-lasting finish.',
    priceEstimate: 'From ₹300',
    imgUrl: 'https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 's12',
    name: 'Manicure',
    category: 'nails',
    icon: '💅',
    desc: 'Exfoliating wash, cuticle care, relaxing hand massage, and professional lacquer polishing.',
    priceEstimate: 'From ₹500',
    imgUrl: IMAGES.galleryNails
  },
  {
    id: 's13',
    name: 'Pedicure',
    category: 'nails',
    icon: '🦶',
    desc: 'Warm salt soak, active scrubbing, precise nail grooming, and deep moisturizing massage.',
    priceEstimate: 'From ₹700',
    imgUrl: 'https://images.unsplash.com/photo-1519041110555-f90019114066?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 's14',
    name: 'Saree Draping',
    category: 'other',
    icon: '🥻',
    desc: 'Perfect traditional Bengali, Gujarati, or lehenga-style saree draping that stays throughout the event.',
    priceEstimate: 'From ₹400',
    imgUrl: IMAGES.gallerySaree
  },
  {
    id: 's15',
    name: 'Grooming Services',
    category: 'other',
    icon: '👗',
    desc: 'Complete personalized styling package, body polishing, and event preparation assistance.',
    priceEstimate: 'From ₹1,500',
    imgUrl: 'https://images.unsplash.com/photo-1522337094133-f6750a12632b?auto=format&fit=crop&q=80&w=600'
  }
];

export const GALLERY_DATA: GalleryItem[] = [
  {
    id: 'g1',
    title: 'Flawless Bengali Bridal Makeup',
    category: 'bridal',
    imgUrl: IMAGES.heroBridal,
    description: 'A close-up of a stunning traditional Bengali bride featuring gorgeous eye makeup and elaborate bindi detailing.'
  },
  {
    id: 'g2',
    title: 'Intricate Hair Styling Updo',
    category: 'hair',
    imgUrl: IMAGES.galleryHair,
    description: 'A beautiful elaborate braided updo with delicate rose gold chain accessories and subtle floral pins.'
  },
  {
    id: 'g3',
    title: 'Premium Glow Facial Therapy',
    category: 'skin',
    imgUrl: IMAGES.galleryFacial,
    description: 'Our luxurious hydrating facial massage session which leaves skin deeply moisturized and bright.'
  },
  {
    id: 'g4',
    title: 'Gold Glitter & Matte HD Makeup',
    category: 'bridal',
    imgUrl: IMAGES.galleryMakeup,
    description: 'A high-contrast professional look using premium safe cosmetics ideal for long registry events.'
  },
  {
    id: 'g5',
    title: 'Luxury Nail Art & Grooming',
    category: 'nails',
    imgUrl: IMAGES.galleryNails,
    description: 'Elegant soft nude extension nails with premium gel finishes.'
  },
  {
    id: 'g6',
    title: 'Perfect Saree Draping',
    category: 'other',
    imgUrl: IMAGES.gallerySaree,
    description: 'Traditional heavy red silk Banarasi saree draped with perfect pleats.'
  }
];

export const TESTIMONIALS_DATA: TestimonialItem[] = [
  {
    id: 't1',
    name: 'Priya Mondal',
    rating: 5,
    text: 'The bridal makeup done by Be Bonny team was absolutely stunning! Everyone at the wedding kept asking who did my makeup. I felt like a queen on my special day. Highly recommend to every bride in Tamluk!',
    role: 'Bridal Client',
    date: 'March 2025',
    avatarChar: 'P'
  },
  {
    id: 't2',
    name: 'Susmita Das',
    rating: 5,
    text: 'Best parlour in Tamluk! The staff is so friendly, professional, and talented. I went for a party makeup and hair styling, and the results were beyond my expectations. Will definitely be my regular salon.',
    role: 'Party Makeup',
    date: 'January 2025',
    avatarChar: 'S'
  },
  {
    id: 't3',
    name: 'Ankita Roy',
    rating: 5,
    text: 'Got my hair spa and facial done here and my skin and hair have never felt better! The place is so clean and hygienic. The products they use are amazing. Very happy with the service and the price is very reasonable.',
    role: 'Hair & Skin Care',
    date: 'February 2025',
    avatarChar: 'A'
  },
  {
    id: 't4',
    name: 'Riya Ghosh',
    rating: 5,
    text: "I came for HD makeup for my sister's wedding reception and wow! The artist is so skilled and detail-oriented. The makeup lasted the entire day and looked perfect in every single photo. Be Bonny is truly the best!",
    role: 'HD Makeup',
    date: 'December 2024',
    avatarChar: 'R'
  },
  {
    id: 't5',
    name: 'Madhuri Pal',
    rating: 5,
    text: 'The saree draping service was fantastic! They made me look so elegant and regal. The staff is extremely courteous and makes you feel very comfortable. Strongly recommend Be Bonny to anyone in Tamluk!',
    role: 'Saree Draping',
    date: 'November 2024',
    avatarChar: 'M'
  },
  {
    id: 't6',
    name: 'Debjani Sen',
    rating: 5,
    text: 'I have visited many parlours in the Purba Medinipur area but Be Bonny is by far the best. Their facial treatment gave me such glowing skin. The ambiance is very relaxing and the team is extremely professional.',
    role: 'Facial & Spa',
    date: 'October 2024',
    avatarChar: 'D'
  }
];
