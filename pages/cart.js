import Head from "next/head";
import useCart from '../hooks/cart';

const CartPage = () => {
  const { cart } = useCart();

  return (
    <div>
      <h1>Cart Page</h1>

      {cart.map(item => <p>{item.title}</p>)}
    </div>
  );
};

export default CartPage;
