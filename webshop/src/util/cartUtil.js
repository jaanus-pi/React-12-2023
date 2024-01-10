export const calculateCartTotal = (cart) => {
  let sum = 0;
  cart.forEach(p => sum = sum + p.product.price * p.quantity);
  return sum.toFixed(2);
}