// services/storeService.js

import { shops } from "../Data/Shop";
import { products } from "../Data/products";

// Simulate API delay (optional but recommended)
const delay = (ms) => new Promise((res) => setTimeout(res, ms));

export async function getStoreById(storeId) {
  await delay(0); // simulate network
  return shops.find((s) => s.id.toString() === storeId.toString());
}

export async function getProductsByStore(storeId) {
  await delay(300);
  return products.filter((p) => p.storeId.toString() === storeId.toString());
}
