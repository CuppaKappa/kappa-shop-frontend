import Head from "next/head";
import { useCartContext } from "../context/cart";
import { useCart } from '../hooks/cart';
import NextImage from "../components/Image";

const CartPage = () => {
  const { cart } = useCartContext();

  return (
    <div>
      <h1>Cart Page</h1>

      {cart.map(item => <div key={item.title}>
        <NextImage media={item.image} />
        {item.title}
      </div>)}
    </div>
  );
};

export default CartPage;
