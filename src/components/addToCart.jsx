export const addToCart = (
  product,
  setShowModal = null,
  setSelectedProduct = null
) => {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  const existingProductIndex = cart.findIndex((item) => item.id === product.id);

  if (existingProductIndex !== -1) {
    cart[existingProductIndex].quantity += 1;
  } else {
    cart.push({ ...product, quantity: 1 });
  }

  localStorage.setItem("cart", JSON.stringify(cart));

  if (setShowModal && setSelectedProduct) {
    setSelectedProduct(product);
    setShowModal(true);
  }
};
export default addToCart;
