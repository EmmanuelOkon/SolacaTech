export interface AppContainerProps {
  children: React.ReactNode;
}

export interface Product {
  id?: number;
  name: string;
  price: number;
  rating: number;
  vendor?: string;
  imageUrl?: string;
  category: string;
  originalPrice?: string;
}

export interface VendorCardProps {
  name?: string;
  shopName: string;
  rating: number;
  totalRatings: number;
  distance: number;
  freeDelivery: boolean;
}
