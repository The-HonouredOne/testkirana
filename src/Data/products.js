export const products = [
  {
    id: "1",
    storeId: "1",
    productId: "p1",

    name: "Aashirvaad Superior MP Atta",
    brand: "Aashirvaad",
    category: "Grocery",

    description:
      "Premium quality whole wheat flour made from MP wheat grains for soft and fluffy rotis.",

    images: ["/images/products/atta1.jpg", "/images/products/atta2.jpg"],

    quantity: "5kg",
    unit: "kg",

    price: 245,
    image:
      "https://indian-retailer.s3.ap-south-1.amazonaws.com/s3fs-public/2021-06/beautiful-tasty-appetizing-ingredients-spices-grocery-cooking-healthy-kitchen-blue-old-wooden-background-top-view.jpg",

    discountPrice: 230,

    stock: 50,
    minOrderQty: 1,
    maxOrderQty: 10,

    sku: "ATTAMP5KG",

    rating: 4.5,
    totalReviews: 324,

    isAvailable: true,
    deliveryAvailable: true,

    offer: {
      type: "percentage",
      value: 6,
      label: "6% OFF",
    },

    deliveryTime: "30-40 min",

    tags: ["atta", "flour", "wheat"],

    nutrition: {
      energy: "364 kcal",
      protein: "12g",
      carbs: "72g",
    },

    shopkeeperNote: "Best selling product",

    createdAt: "2025-12-01",
    updatedAt: "2026-03-01",
  },

  {
    id: "2",
    storeId: "1",
    productId: "p2",

    name: "Amul Taaza Milk",
    brand: "Amul",
    category: "Dairy",

    description: "Fresh toned milk rich in calcium and protein from Amul.",

    images: ["/images/products/milk1.jpg", "/images/products/milk2.jpg"],

    quantity: "1L",
    unit: "ltr",

    price: 54,
    image:
      "https://imgs.search.brave.com/DG8xQLrnPNyV3u7cEfY62r7KZqXN7QDI8DMELE_Rcd0/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/c2h1dHRlcnN0b2Nr/LmNvbS9pbWFnZS1p/bGx1c3RyYXRpb24v/c2hvcHBpbmctYmFz/a2V0LWZ1bGwtZ3Jv/Y2VyeS1wcm9kdWN0/cy0yNjBudy0yNDYx/MTY2NTYzLmpwZw",
    discountPrice: 50,

    stock: 120,
    minOrderQty: 1,
    maxOrderQty: 20,

    sku: "AMUL1L",

    rating: 4.6,
    totalReviews: 540,

    isAvailable: true,
    deliveryAvailable: true,

    deliveryTime: "20-30 min",

    tags: ["milk", "dairy", "amul"],

    nutrition: {
      fat: "3%",
      protein: "3.2g",
      calcium: "120mg",
    },

    createdAt: "2026-01-20",
    updatedAt: "2026-03-01",
  },

  {
    id: "3",
    storeId: "2",
    productId: "p3",

    name: "Lay's Classic Salted Chips",
    brand: "Lay's",
    category: "Grocery",

    description: "Crunchy potato chips with classic salted flavour.",

    images: ["/images/products/chips1.jpg", "/images/products/chips2.jpg"],

    quantity: "50g",
    unit: "g",

    price: 20,
    image:
      "https://imgs.search.brave.com/DG8xQLrnPNyV3u7cEfY62r7KZqXN7QDI8DMELE_Rcd0/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/c2h1dHRlcnN0b2Nr/LmNvbS9pbWFnZS1p/bGx1c3RyYXRpb24v/c2hvcHBpbmctYmFz/a2V0LWZ1bGwtZ3Jv/Y2VyeS1wcm9kdWN0/cy0yNjBudy0yNDYx/MTY2NTYzLmpwZw",

    discountPrice: 18,

    stock: 80,
    minOrderQty: 1,
    maxOrderQty: 15,

    sku: "LAYS50G",

    rating: 4.2,
    totalReviews: 190,

    isAvailable: true,
    deliveryAvailable: false,

    deliveryTime: "Pickup Only",

    tags: ["chips", "snacks"],

    createdAt: "2026-02-01",
    updatedAt: "2026-03-01",
  },
  {
    id: "4",
    storeId: "2",
    productId: "p4",

    name: "Lay's Classic Salted Chips",
    brand: "Lay's",
    category: "Dairy",

    description: "Crunchy potato chips with classic salted flavour.",

    images: ["/images/products/chips1.jpg", "/images/products/chips2.jpg"],

    quantity: "50g",
    unit: "g",

    price: 20,
    image:
      "https://indian-retailer.s3.ap-south-1.amazonaws.com/s3fs-public/2021-06/beautiful-tasty-appetizing-ingredients-spices-grocery-cooking-healthy-kitchen-blue-old-wooden-background-top-view.jpg",

    discountPrice: 18,

    stock: 80,
    minOrderQty: 1,
    maxOrderQty: 15,

    sku: "LAYS50G",

    rating: 4.2,
    totalReviews: 190,

    isAvailable: true,
    deliveryAvailable: false,

    deliveryTime: "Pickup Only",

    tags: ["chips", "snacks", "Dairy"],

    createdAt: "2026-02-01",
    updatedAt: "2026-03-01",
  },
  {
    id: "5",
    storeId: "3",
    productId: "p5",

    name: "Lay's Classic Salted Chips",
    brand: "Lay's",
    category: "Beverages",

    description: "Crunchy potato chips with classic salted flavour.",

    images: ["/images/products/chips1.jpg", "/images/products/chips2.jpg"],

    quantity: "50g",
    unit: "g",

    price: 20,
    image:
      "https://imgs.search.brave.com/DG8xQLrnPNyV3u7cEfY62r7KZqXN7QDI8DMELE_Rcd0/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/c2h1dHRlcnN0b2Nr/LmNvbS9pbWFnZS1p/bGx1c3RyYXRpb24v/c2hvcHBpbmctYmFz/a2V0LWZ1bGwtZ3Jv/Y2VyeS1wcm9kdWN0/cy0yNjBudy0yNDYx/MTY2NTYzLmpwZw",

    discountPrice: 18,

    stock: 80,
    minOrderQty: 1,
    maxOrderQty: 15,

    sku: "LAYS50G",

    rating: 4.2,
    totalReviews: 190,

    isAvailable: true,
    deliveryAvailable: false,

    deliveryTime: "Pickup Only",

    tags: ["chips", "Beverages"],

    createdAt: "2026-02-01",
    updatedAt: "2026-03-01",
  },
  {
    id: "6",
    storeId: "7",
    productId: "p6",

    name: "Lay's Classic Salted Chips",
    brand: "Lay's",
    category: "Frozen Food",

    description: "Crunchy potato chips with classic salted flavour.",

    images: ["/images/products/chips1.jpg", "/images/products/chips2.jpg"],

    quantity: "50g",
    unit: "g",

    image:
      "https://imgs.search.brave.com/DG8xQLrnPNyV3u7cEfY62r7KZqXN7QDI8DMELE_Rcd0/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/c2h1dHRlcnN0b2Nr/LmNvbS9pbWFnZS1p/bGx1c3RyYXRpb24v/c2hvcHBpbmctYmFz/a2V0LWZ1bGwtZ3Jv/Y2VyeS1wcm9kdWN0/cy0yNjBudy0yNDYx/MTY2NTYzLmpwZw",
   
      price: 20,
    discountPrice: 18,

    stock: 80,
    minOrderQty: 1,
    maxOrderQty: 15,

    sku: "LAYS50G",

    rating: 4.2,
    totalReviews: 190,

    isAvailable: true,
    deliveryAvailable: false,

    deliveryTime: "Pickup Only",

    tags: ["chips", "Beverages", "Frozen Food"],

    createdAt: "2026-02-01",
    updatedAt: "2026-03-01",
  },
   {
    id: "7",
    storeId: "1",
    productId: "p7",

    name: "Rice",
    brand: "Aashirvaad",
    category: "Grocery",

    description:
      "Premium quality whole wheat flour made from MP wheat grains for soft and fluffy rotis.",

    images: ["/images/products/atta1.jpg", "/images/products/atta2.jpg"],

    quantity: "5kg",
    unit: "kg",

    price: 245,
    image:
      "https://imgs.search.brave.com/DG8xQLrnPNyV3u7cEfY62r7KZqXN7QDI8DMELE_Rcd0/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/c2h1dHRlcnN0b2Nr/LmNvbS9pbWFnZS1p/bGx1c3RyYXRpb24v/c2hvcHBpbmctYmFz/a2V0LWZ1bGwtZ3Jv/Y2VyeS1wcm9kdWN0/cy0yNjBudy0yNDYx/MTY2NTYzLmpwZw",

    discountPrice: 230,

    stock: 50,
    minOrderQty: 1,
    maxOrderQty: 10,

    sku: "ATTAMP5KG",

    rating: 4.5,
    totalReviews: 324,

    isAvailable: true,
    deliveryAvailable: true,

    offer: {
      type: "percentage",
      value: 6,
      label: "6% OFF",
    },

    deliveryTime: "30-40 min",

    tags: ["atta", "flour", "wheat"],

    nutrition: {
      energy: "364 kcal",
      protein: "12g",
      carbs: "72g",
    },

    shopkeeperNote: "Best selling product",

    createdAt: "2025-12-01",
    updatedAt: "2026-03-01",
  }, {
    id: "8",
    storeId: "1",
    productId: "p1",

    name: "Sope",
    brand: "lux",
    category: "Grocery",

    description:
      "Premium quality whole wheat flour made from MP wheat grains for soft and fluffy rotis.",

    images: ["/images/products/atta1.jpg", "/images/products/atta2.jpg"],

    quantity: "5kg",
    unit: "kg",

    price: 245,
    image:
      "https://imgs.search.brave.com/DG8xQLrnPNyV3u7cEfY62r7KZqXN7QDI8DMELE_Rcd0/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/c2h1dHRlcnN0b2Nr/LmNvbS9pbWFnZS1p/bGx1c3RyYXRpb24v/c2hvcHBpbmctYmFz/a2V0LWZ1bGwtZ3Jv/Y2VyeS1wcm9kdWN0/cy0yNjBudy0yNDYx/MTY2NTYzLmpwZw",

    discountPrice: 230,

    stock: 50,
    minOrderQty: 1,
    maxOrderQty: 10,

    sku: "ATTAMP5KG",

    rating: 4.5,
    totalReviews: 324,

    isAvailable: true,
    deliveryAvailable: true,

    offer: {
      type: "percentage",
      value: 6,
      label: "6% OFF",
    },

    deliveryTime: "30-40 min",

    tags: ["atta", "flour", "wheat"],

    nutrition: {
      energy: "364 kcal",
      protein: "12g",
      carbs: "72g",
    },

    shopkeeperNote: "Best selling product",

    createdAt: "2025-12-01",
    updatedAt: "2026-03-01",
  },
];
