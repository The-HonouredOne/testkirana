export const shops = [
  {
    id: "1",
    name: "Gupta General Store",

    description: "Authentic Kirana & Daily Essentials",

    images: {
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQj7CIui7mb9GMrK5fQ1m8U6-1W6jLHa6ANUA&s",
      banner:
        "https://t3.ftcdn.net/jpg/02/62/18/46/360_F_262184611_bXhmboL9oE6k2ILu4qXxNWFhNJCEbTn2.jpg",
    },

    owner: {
      name: "Rakesh Gupta",
      phone: "9876543210",
      email: "guptastore@gmail.com",
    },

    location: {
      type: "Point",
      coordinates: [75.7873, 26.9124],
    },

    address: {
      street: "Sector 10 Market",
      city: "Jaipur",
      state: "Rajasthan",
      pincode: "302001",
    },

    distance: 0.5,

    rating: {
      average: 4.6,
      totalReviews: 320,
    },

    delivery: {
      type: "Fast Delivery",
      time: "15-20 min",
      charge: 25,
      minimumOrder: 200,
    },

    categories: ["Snacks", "Beverages", "Frozen Food"],

    status: {
      isOpen: true,
      openTime: "08:30 AM",
      closeTime: "11:00 PM",
    },

    services: ["Home Delivery", "Pickup", "Card Payment", "UPI"],
    tags: ["kirana", "daily needs", "groceries"],

    createdAt: "2025-12-10",
  },

  {
    id: "2",
    name: "Sharma Provisions",

    description: "Grains, Spices & Quality Grocery",

    images: {
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQj7CIui7mb9GMrK5fQ1m8U6-1W6jLHa6ANUA&s",
      banner:
        "https://i.pinimg.com/736x/12/f8/99/12f899172d8d14c48ace7730ab57c2d6.jpg",
    },

    owner: {
      name: "Amit Sharma",
      phone: "9876549999",
      email: "sharmaprovisions@gmail.com",
    },
    location: {
      type: "Point",
      coordinates: [75.7873, 26.9124],
    },

    address: {
      street: "Malviya Nagar",
      city: "Jaipur",
      state: "Rajasthan",
      pincode: "302017",
    },

    // location: {
    //   lat: 26.85,
    //   lng: 75.82,
    // },

    distance: 0.8,

    rating: {
      average: 4.6,
      totalReviews: 320,
    },

    delivery: {
      type: "Fast Delivery",
      time: "15-20 min",
      charge: 25,
      minimumOrder: 200,
    },

    categories: ["Snacks", "Beverages", "Frozen Food"],

    status: {
      isOpen: true,
      openTime: "08:30 AM",
      closeTime: "11:00 PM",
    },

    services: ["Home Delivery", "Pickup", "Card Payment", "UPI"],
    tags: ["fast delivery", "mart"],

    createdAt: "2025-12-15",
  },

  {
    id: "3",
    name: "Fresh-Day Mart",

    description: "Modern Convenience Store",

    images: {
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQj7CIui7mb9GMrK5fQ1m8U6-1W6jLHa6ANUA&s",
      banner:
        "https://thumbs.dreamstime.com/b/e-commerce-banner-design-shopping-bags-boxes-online-retail-modern-features-floating-perfect-advertising-delivery-394998903.jpg",
    },

    owner: {
      name: "Rohit Mehta",
      phone: "9811122233",
    },
    location: {
      type: "Point",
      coordinates: [75.7873, 26.9124],
    },

    address: {
      street: "Vaishali Nagar",
      city: "Jaipur",
      state: "Rajasthan",
      pincode: "302021",
    },

    distance: 1.2,

    rating: {
      average: 4.3,
      totalReviews: 120,
    },

    delivery: {
      type: "Fast Delivery",
      time: "25-30 min",
      charge: 15,
      minimumOrder: 150,
    },

    categories: ["Snacks", "Beverages", "Frozen Food"],

    status: {
      isOpen: true,
      openTime: "05:30 AM",
      closeTime: "10:00 PM",
    },

    services: ["Home Delivery", "Pickup", "Card Payment", "UPI"],

    tags: ["fast delivery", "mart"],

    createdAt: "2026-01-05",
  },

  {
    id: "4",
    name: "Khurana Dairy & Sweets",

    description: "Pure Dairy Products & Sweets",

    images: {
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQj7CIui7mb9GMrK5fQ1m8U6-1W6jLHa6ANUA&s",
      banner:
        "https://static.vecteezy.com/system/resources/thumbnails/004/707/502/small/online-shopping-on-phone-buy-sell-business-digital-web-banner-application-money-advertising-payment-ecommerce-illustration-search-vector.jpg",
    },

    owner: {
      name: "Sanjay Khurana",
      phone: "9876512345",
    },

    address: {
      street: "Bani Park",
      city: "Jaipur",
      state: "Rajasthan",
      pincode: "302016",
    },
    location: {
      type: "Point",
      coordinates: [65.7873, 26.9124],
    },

    distance: 1.5,

    rating: {
      average: 4.7,
      totalReviews: 710,
    },

    delivery: {
      type: "Fast Delivery",
      time: "15-20 min",
      charge: 15,
      minimumOrder: 260,
    },

    categories: ["Snacks", "Beverages", "Frozen Food"],

    status: {
      isOpen: true,
      openTime: "08:30 AM",
      closeTime: "11:00 PM",
    },
    services: ["Pickup", "UPI"],

    tags: ["dairy", "sweets"],

    createdAt: "2025-11-20",
  },
  {
    id: "5",
    name: "Fresh-Day Mart",

    description: "Modern Convenience Store",

    images: {
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQj7CIui7mb9GMrK5fQ1m8U6-1W6jLHa6ANUA&s",
      banner:
        "https://t3.ftcdn.net/jpg/02/62/18/46/360_F_262184611_bXhmboL9oE6k2ILu4qXxNWFhNJCEbTn2.jpg",
    },

    owner: {
      name: "Rohit Mehta",
      phone: "9811122233",
    },

    address: {
      street: "Vaishali Nagar",
      city: "Jaipur",
      state: "Rajasthan",
      pincode: "302021",
    },
    location: {
      type: "Point",
      coordinates: [22.7873, 16.9124],
    },

    distance: 1.2,

    rating: {
      average: 4.6,
      totalReviews: 320,
    },

    delivery: {
      type: "Fast Delivery",
      time: "15-20 min",
      charge: 25,
      minimumOrder: 200,
    },

    categories: ["Snacks", "Beverages", "Frozen Food"],

    status: {
      isOpen: true,
      openTime: "08:30 AM",
      closeTime: "11:00 PM",
    },

    services: ["Home Delivery", "Pickup", "Card Payment", "UPI"],

    tags: ["fast delivery", "mart"],

    createdAt: "2026-01-05",
  },
  {
    id: "6",
    name: "Fresh-Day Mart",

    description: "Modern Convenience Store",

    images: {
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQj7CIui7mb9GMrK5fQ1m8U6-1W6jLHa6ANUA&s",
      banner:
        "https://thumbs.dreamstime.com/b/e-commerce-banner-design-shopping-bags-boxes-online-retail-modern-features-floating-perfect-advertising-delivery-394998903.jpg",
    },

    owner: {
      name: "Rohit Mehta",
      phone: "9811122233",
    },

    address: {
      street: "Vaishali Nagar",
      city: "Jaipur",
      state: "Rajasthan",
      pincode: "302021",
    },
    location: {
      type: "Point",
      coordinates: [71.7873, 21.9124],
    },
    distance: 1.2,

    rating: {
      average: 4.6,
      totalReviews: 320,
    },

    delivery: {
      type: "Fast Delivery",
      time: "15-20 min",
      charge: 25,
      minimumOrder: 200,
    },

    categories: ["Snacks", "Beverages", "Frozen Food"],

    status: {
      isOpen: true,
      openTime: "08:30 AM",
      closeTime: "11:00 PM",
    },

    services: ["Home Delivery", "Pickup", "Card Payment", "UPI"],

    tags: ["fast delivery", "mart"],

    createdAt: "2026-01-05",
  },
  {
    id: "7",
    name: "Fresh-Day Mart",

    description: "Modern Convenience Store",

    images: {
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQj7CIui7mb9GMrK5fQ1m8U6-1W6jLHa6ANUA&s",
      banner:
        "https://static.vecteezy.com/system/resources/thumbnails/004/707/502/small/online-shopping-on-phone-buy-sell-business-digital-web-banner-application-money-advertising-payment-ecommerce-illustration-search-vector.jpg",
    },

    owner: {
      name: "Rohit Mehta",
      phone: "9811122233",
    },

    address: {
      street: "Vaishali Nagar",
      city: "Jaipur",
      state: "Rajasthan",
      pincode: "302021",
    },
    location: {
      type: "Point",
      coordinates: [7.7873, 2.9124],
    },
    distance: 1.2,

    rating: {
      average: 4.6,
      totalReviews: 320,
    },

    delivery: {
      type: "Fast Delivery",
      time: "15-20 min",
      charge: 25,
      minimumOrder: 200,
    },

    categories: ["Snacks", "Beverages", "Frozen Food"],

    status: {
      isOpen: true,
      openTime: "08:30 AM",
      closeTime: "11:00 PM",
    },

    services: ["Home Delivery", "Pickup", "Card Payment", "UPI"],

    tags: ["fast delivery", "mart"],

    createdAt: "2026-01-05",
  },
  {
    id: "8",
    name: "Fresh-Day Mart",

    description: "Modern Convenience Store",

    images: {
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQj7CIui7mb9GMrK5fQ1m8U6-1W6jLHa6ANUA&s",
      banner:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrm55lsveY2-pgugtjZaf-hCH77dDBRZ_K_Q&s",
    },

    owner: {
      name: "Rohit Mehta",
      phone: "9811122233",
    },

    address: {
      street: "Vaishali Nagar",
      city: "Jaipur",
      state: "Rajasthan",
      pincode: "302021",
    },
    location: {
      type: "Point",
      coordinates: [71.7873, 21.9124],
    },
    distance: 1.2,

    rating: {
      average: 4.6,
      totalReviews: 320,
    },

    delivery: {
      type: "Fast Delivery",
      time: "15-20 min",
      charge: 25,
      minimumOrder: 200,
    },

    categories: ["Snacks", "Beverages", "Frozen Food"],

    status: {
      isOpen: true,
      openTime: "08:30 AM",
      closeTime: "11:00 PM",
    },

    services: ["Home Delivery", "Pickup", "Card Payment", "UPI"],

    tags: ["fast delivery", "mart"],

    createdAt: "2026-01-05",
  },
  {
    id: "9",
    name: "Fresh-Day Mart",

    description: "Modern Convenience Store",

    images: {
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQj7CIui7mb9GMrK5fQ1m8U6-1W6jLHa6ANUA&s",
      banner:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrm55lsveY2-pgugtjZaf-hCH77dDBRZ_K_Q&s",
    },

    owner: {
      name: "Rohit Mehta",
      phone: "9811122233",
    },

    address: {
      street: "Vaishali Nagar",
      city: "Jaipur",
      state: "Rajasthan",
      pincode: "302021",
    },
    location: {
      type: "Point",
      coordinates: [11.7873, 12.9124],
    },
    distance: 1.2,

    rating: {
      average: 4.6,
      totalReviews: 320,
    },

    delivery: {
      type: "Fast Delivery",
      time: "15-20 min",
      charge: 25,
      minimumOrder: 200,
    },

    categories: ["Snacks", "Beverages", "Frozen Food"],

    status: {
      isOpen: true,
      openTime: "08:30 AM",
      closeTime: "11:00 PM",
    },

    services: ["Home Delivery", "Pickup", "Card Payment", "UPI"],

    tags: ["fast delivery", "mart"],

    createdAt: "2026-01-05",
  },
];
