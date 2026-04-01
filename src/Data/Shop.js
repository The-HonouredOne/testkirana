export const shops = [
  {
    id: "1",
    name: "Gupta General Store",

    description: "Authentic Kirana & Daily Essentials",

    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQj7CIui7mb9GMrK5fQ1m8U6-1W6jLHa6ANUA&s",

    bannerImage:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrm55lsveY2-pgugtjZaf-hCH77dDBRZ_K_Q&s",

    owner: {
      name: "Rakesh Gupta",
      phone: "9876543210",
      email: "guptastore@gmail.com",
    },

    address: {
      street: "Sector 10 Market",
      city: "Jaipur",
      state: "Rajasthan",
      pincode: "302001",
    },

    // location: {
    //   lat: 26.9124,
    //   lng: 75.7873,
    // },

    distance: 0.5,

    rating: 4.5,
    totalReviews: 210,

    deliveryType: "Home Delivery",
    deliveryTime: "30-40 min",
    deliveryCharge: 20,
    minimumOrder: 100,

    categories: ["Grocery", "Snacks", "Beverages"],

    isOpen: true,

    openTime: "08:00 AM",
    closeTime: "10:00 PM",

    services: ["Home Delivery", "Pickup", "UPI Payment"],

    tags: ["kirana", "daily needs", "groceries"],

    createdAt: "2025-12-10",
  },

  {
    id: "2",
    name: "Sharma Provisions",

    description: "Grains, Spices & Quality Grocery",

    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQj7CIui7mb9GMrK5fQ1m8U6-1W6jLHa6ANUA&s",

    bannerImage:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrm55lsveY2-pgugtjZaf-hCH77dDBRZ_K_Q&s",

    owner: {
      name: "Amit Sharma",
      phone: "9876549999",
      email: "sharmaprovisions@gmail.com",
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

    rating: 4.2,
    totalReviews: 150,

    deliveryType: "Home Delivery",
    deliveryTime: "25-35 min",
    deliveryCharge: 15,
    minimumOrder: 150,

    categories: ["Grocery", "Spices", "Dry Fruits"],

    isOpen: true,

    openTime: "09:00 AM",
    closeTime: "09:30 PM",

    services: ["Home Delivery", "UPI Payment"],

    tags: ["spices", "grain store"],

    createdAt: "2025-12-15",
  },

  {
    id: "3",
    name: "Fresh-Day Mart",

    description: "Modern Convenience Store",

    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQj7CIui7mb9GMrK5fQ1m8U6-1W6jLHa6ANUA&s",

    bannerImage:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrm55lsveY2-pgugtjZaf-hCH77dDBRZ_K_Q&s",

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

    distance: 1.2,

    rating: 4.6,
    totalReviews: 320,

    deliveryType: "Fast Delivery",
    deliveryTime: "15-20 min",
    deliveryCharge: 25,
    minimumOrder: 200,

    categories: ["Snacks", "Beverages", "Frozen Food"],

    isOpen: true,

    openTime: "08:30 AM",
    closeTime: "11:00 PM",

    services: ["Home Delivery", "Pickup", "Card Payment", "UPI"],

    tags: ["fast delivery", "mart"],

    createdAt: "2026-01-05",
  },

  {
    id: "4",
    name: "Khurana Dairy & Sweets",

    description: "Pure Dairy Products & Sweets",

    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQj7CIui7mb9GMrK5fQ1m8U6-1W6jLHa6ANUA&s",

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

    distance: 1.5,

    rating: 4.3,
    totalReviews: 180,

    deliveryType: "Pickup Only",

    categories: ["Dairy", "Sweets"],

    isOpen: false,

    openTime: "07:00 AM",
    closeTime: "08:00 PM",

    services: ["Pickup", "UPI"],

    tags: ["dairy", "sweets"],

    createdAt: "2025-11-20",
  },
  {
    id: "5",
    name: "Fresh-Day Mart",

    description: "Modern Convenience Store",

    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQj7CIui7mb9GMrK5fQ1m8U6-1W6jLHa6ANUA&s",

    bannerImage:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrm55lsveY2-pgugtjZaf-hCH77dDBRZ_K_Q&s",

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

    distance: 1.2,

    rating: 4.6,
    totalReviews: 320,

    deliveryType: "Fast Delivery",
    deliveryTime: "15-20 min",
    deliveryCharge: 25,
    minimumOrder: 200,

    categories: ["Snacks", "Beverages", "Frozen Food"],

    isOpen: true,

    openTime: "08:30 AM",
    closeTime: "11:00 PM",

    services: ["Home Delivery", "Pickup", "Card Payment", "UPI"],

    tags: ["fast delivery", "mart"],

    createdAt: "2026-01-05",
  },
];
