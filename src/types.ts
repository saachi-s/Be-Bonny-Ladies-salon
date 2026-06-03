export interface ServiceItem {
  id: string;
  name: string;
  category: 'makeup' | 'hair' | 'skin' | 'nails' | 'other';
  icon: string;
  desc: string;
  priceEstimate?: string;
  imgUrl?: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'bridal' | 'hair' | 'skin' | 'nails' | 'other';
  imgUrl: string;
  description: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  rating: number;
  text: string;
  role: string;
  date: string;
  avatarChar: string;
}

export interface BookingFormState {
  name: string;
  phone: string;
  service: string;
  date: string;
  time: string;
}
