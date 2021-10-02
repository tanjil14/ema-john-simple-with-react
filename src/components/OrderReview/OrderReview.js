import React from "react";
import { useHistory } from "react-router";
import { deleteFromDb } from "../../utilities/fakedb";
import Cart from "../Cart/Cart";
import useCart from "../hooks/useCart";
import useProducts from "../hooks/useProduct";
import ReviewItem from "../ReviewItem/ReviewItem";
const OrderReview = () => {
  const [products] = useProducts();
  const [cart, setCart] = useCart(products);
  const history = useHistory();
  const handleRemove = (key) => {
    const newCart = cart.filter((product) => product.key !== key);
    setCart(newCart);
    deleteFromDb(key);
  };
  const handleOrder = () => {
    history.push("/placeorder");
  };
  return (
    <div className="shop-container">
      <div className="product-container">
        {cart.map((product) => (
          <ReviewItem
            handleRemove={handleRemove}
            key={product.key}
            product={product}
          />
        ))}
      </div>
      <div className="cart-container">
        <Cart cart={cart}>
          <button onClick={handleOrder} type="button" className="btn-regular">
            Place Order
          </button>
        </Cart>
      </div>
    </div>
  );
};

export default OrderReview;
