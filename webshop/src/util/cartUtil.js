export const calculateCartTotalLS = (cartLS, dbProducts) => {
  const cartWithProducts = cartLS.map(cartProduct => ({
    "quantity": cartProduct.quantity,
    "product": dbProducts.find(dbProduct => dbProduct.id === cartProduct.productId)
  }));

  let sum = 0;
  cartWithProducts.forEach(p => sum = sum + p.product.price * p.quantity);
  return sum.toFixed(2);
}

export const calculateCartTotal = (cartHTML) => {
  let sum = 0;
  cartHTML.forEach(p => sum = sum + p.product.price * p.quantity);
  return sum.toFixed(2);
}