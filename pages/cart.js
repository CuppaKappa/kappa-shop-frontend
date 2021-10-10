import Head from "next/head";
import { useCartContext } from "../context/cart";

const CartPage = () => {
  const { cart } = useCartContext();

  return (
    <div>
      <h1>Cart Page</h1>

      {cart.map(item => <p>{item.title}</p>)}
    </div>
  );
};

export default CartPage;
