import CartItemCard from '../../components/cartitemcard';
import { useSelector } from 'react-redux';

const Cart = () => {
  const cartItem = useSelector((state) => state.cart.cartItem);
  return (
    <div>
      {cartItem.map((item, index) => (
        <CartItemCard item={item} key={index} />
      ))}
    </div>
  );
};

export default Cart;
