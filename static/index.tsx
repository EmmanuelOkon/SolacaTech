import { Product } from "@/interface";
import { Icons } from "@/public/assets/icon";

export const navigation = {
  demo: [
    { name: "About Us", href: "#" },
    { name: "Careers", href: "#" },
    { name: "Terms of Services", href: "#" },
    { name: "Privacy Policy", href: "#" },
    { name: "Copyright Infringement Policy", href: "#" },
  ],
  support: [
    { name: "Help & Support", href: "#" },
    { name: "Buy on Demo", href: "#" },
    { name: "Sell on Demo", href: "#" },
    { name: "Contact Us", href: "#" },
    { name: "FAQ", href: "#" },
  ],
  resources: [
    { name: "Our Blog", href: "#" },
    { name: "How to start", href: "#" },
  ],

  social: [
    {
      name: "Facebook",
      href: "/",
      icon: Icons.Facebook,
    },
    {
      name: "Instagram",
      href: "/",
      icon: Icons.Instagram,
    },
    {
      name: "LinkedIn",
      href: "/",
      icon: Icons.LinkedIn,
    },
    {
      name: "Pinterest",
      href: "/",
      icon: Icons.Pinterest,
    },
    {
      name: "Twitter",
      href: "/",
      icon: Icons.Twitter,
    },
    {
      name: "Tiktok",
      href: "/",
      icon: Icons.Tiktok,
    },
  ],
};

export const categories = [
  {
    id: 1,
    name: "Accessories",
  },
  {
    id: 2,
    name: "Clothing and Fashion",
  },
  {
    id: 3,
    name: "Food and Beverages",
  },
  {
    id: 4,
    name: "Office Supplies and Stationeries",
  },
  {
    id: 5,
    name: "Cosmetics and Beauty",
  },
  {
    id: 6,
    name: "Musical Instruments",
  },
  {
    id: 7,
    name: "Sporting Facilities",
  },
  {
    id: 8,
    name: "Toys and Games",
  },
  {
    id: 9,
    name: "Arts and Crafts",
  },
  {
    id: 10,
    name: "Antiques and Collectibles",
  },
  {
    id: 11,
    name: "Babies and Toddlers",
  },
  {
    id: 12,
    name: "Cameras and Optics",
  },
  {
    id: 13,
    name: "Electronics",
  },
  {
    id: 14,
    name: "Furniture and Decor",
  },
  {
    id: 15,
    name: "Vehicle Parts",
  },
  {
    id: 16,
    name: "Pet Supplies",
  },
  {
    id: 17,
    name: "Health and Medic",
  },
  {
    id: 18,
    name: "Home and Garden",
  },
  {
    id: 19,
    name: "Luggage and Bags",
  },
  {
    id: 20,
    name: "Mobile and Tablets",
  },
];

// export const products: ProductProps[] = [
//   {
//     id: 1,
//     name: "Men's Fleece Pullover Hoodie Sweatshirt",
//     price: 10000,
//     rating: 4.2,
//     vendor: "Esther Ubi",
//     imageUrl: "/assets/images/men1.png",
//     category: "Men Clothing",
//   },
//   {
//     id: 2,
//     name: "Men's Fleece Pullover Hoodie Sweatshirt",
//     price: 10000,
//     rating: 4.2,
//     vendor: "Esther Ubi",
//     imageUrl: "/assets/images/men2.jpg",
//     category: "Men Clothing",
//   },
//   {
//     id: 3,
//     name: "Men's Fleece Pullover Hoodie Sweatshirt",
//     price: 10000,
//     rating: 4.2,
//     vendor: "Esther Ubi",
//     imageUrl: "/assets/images/men3.jpg",
//     category: "Men Clothing",
//   },
//   {
//     id: 4,
//     name: "Men's Fleece Pullover Hoodie Sweatshirt",
//     price: 10000,
//     rating: 4.2,
//     vendor: "Esther Ubi",
//     imageUrl: "/assets/images/men4.webp",
//     category: "Men Clothing",
//   },
//   {
//     id: 5,
//     name: "Men's Fleece Pullover Hoodie Sweatshirt",
//     price: 10000,
//     rating: 4.2,
//     vendor: "Esther Ubi",
//     imageUrl: "/assets/images/men5.jpg",
//     category: "Men Clothing",
//   },
// ];

export const products: Product[] = [
  {
    id: 1,
    name: "Men's Fleece Pullover Hoodie Sweatshirt",
    price: 10000,
    rating: 4.2,
    vendor: "Esther Ubi",
    imageUrl: "/assets/images/men1.png",
    category: "Men Clothing",
    originalPrice: "150,000.00",
  },
  {
    id: 2,
    name: "Men's Fleece Pullover Hoodie Sweatshirt",
    price: 10000,
    rating: 4.2,
    vendor: "Esther Ubi",
    imageUrl: "/assets/images/men2.jpg",
    category: "Men Clothing",
  },
  {
    id: 3,
    name: "Men's Fleece Pullover Hoodie Sweatshirt",
    price: 10000,
    rating: 4.2,
    vendor: "Esther Ubi",
    imageUrl: "/assets/images/men3.jpg",
    category: "Men Clothing",
  },
  {
    id: 4,
    name: "Men's Fleece Pullover Hoodie Sweatshirt",
    price: 10000,
    rating: 4.2,
    vendor: "Esther Ubi",
    imageUrl: "/assets/images/men4.webp",
    category: "Men Clothing",
  },
  {
    id: 5,
    name: "Men's Fleece Pullover Hoodie Sweatshirt",
    price: 10000,
    rating: 4.2,
    vendor: "Esther Ubi",
    imageUrl: "/assets/images/men5.jpg",
    category: "Men Clothing",
  },
  {
    id: 6,
    name: `Apple MacBook Pro 16 Laptop M2 Max Chip 32GB Memory `,
    price: 10000,
    rating: 4.2,
    vendor: "Esther Ubi",
    imageUrl: "/assets/images/deals1.jpg",
    category: "Top Deals",
  },
  {
    id: 7,
    name: "Apple Vision Pro 2",
    price: 10000,
    rating: 4.2,
    vendor: "Esther Ubi",
    imageUrl: "/assets/images/deals2.jpg",
    category: "Top Deals",
  },
  {
    id: 8,
    name: "Apple iPhone 11 64GB Black Smartphone",
    price: 10000,
    rating: 4.2,
    vendor: "Esther Ubi",
    imageUrl: "/assets/images/deals3.jpg",
    category: "Top Deals",
  },
  {
    id: 9,
    name: "Apple iPad Air 2 16GB Wifi only Grey",
    price: 10000,
    rating: 4.2,
    vendor: "Esther Ubi",
    imageUrl: "/assets/images/deals4.jpg",
    category: "Top Deals",
  },
  {
    id: 10,
    name: "Samsung Galaxy Note20 5G N981U 128GB",
    price: 10000,
    rating: 4.2,
    vendor: "Esther Ubi",
    imageUrl: "/assets/images/deals5.jpg",
    category: "Top Deals",
  },
];

// export const products = [
//   {
//     id: 1,
//     name: "Tagea Cream",
//     image: "product1",
//     percent: "30%",
//     price: 53.22,
//     discount: "$80.22",
//     star: 4.8,
//   },
//   {
//     id: 2,
//     name: "Solid Black Cream",
//     image: "product2",
//     percent: "20%",
//     price: 83.52,
//     discount: "$103.52",
//     star: 4.8,
//   },
//   {
//     id: 3,
//     name: "Pingky Cream",
//     image: "product3",
//     percent: "20%",
//     price: 53.25,
//     discount: "$73.25",
//     star: 4.7,
//   },
//   {
//     id: 4,
//     name: "Navy Cream",
//     image: "product4",
//     percent: "20%",
//     price: 38.82,
//     discount: "$58.82",
//     star: 4.8,
//   },
//   {
//     id: 5,
//     name: "Green Light Cream",
//     image: "product5",
//     percent: "30%",
//     price: 43.82,
//     discount: "$73.82",
//     star: 4.8,
//   },
//   {
//     id: 6,
//     name: "Wash Cream",
//     image: "product6",
//     percent: "30%",
//     price: 34.22,
//     discount: "$74.49",
//     star: 4.8,
//   },
// ];
