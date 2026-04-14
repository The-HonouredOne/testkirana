export const calculateDistance = (userLat, userLng, shopLat, shopLng) => {
  const R = 6371; // km

  const dLat = (shopLat - userLat) * (Math.PI / 180);
  const dLng = (shopLng - userLng) * (Math.PI / 180);

  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(userLat * (Math.PI / 180)) *
      Math.cos(shopLat * (Math.PI / 180)) *
      Math.sin(dLng / 2) ** 2;

  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

  return R * c;
};