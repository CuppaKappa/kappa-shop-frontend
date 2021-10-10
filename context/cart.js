import { createContext, useContext } from "react";
import useCart from '../hooks/cart';

export const CartContext = createContext();

export function useCartContext() {
  const context = useContext(CartContext);

  if (context === undefined) {
    throw new Error('useCartContext must be used within a CartProvider');
  }

  return context;
}

function CartProvider({ children }) {
  const cart = useCart([]);

  return (
    <CartContext.Provider value={cart}>
      {children}
    </CartContext.Provider>
  );
}

export default CartProvider;
