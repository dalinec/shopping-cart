import { useShoppingCart } from '../../context/ShoppingCartContext';
import { storeItems } from '../../data/items';
import formatCurrency from '../../utils/formatCurrency';
import CartItem from '../CartItem/CartItem';

const ShoppingCart = () => {
  const { closeCart, isOpen, cartItems } = useShoppingCart();

  return (
    <>
      <div
        className={
          isOpen
            ? 'fixed right-0 top-0 flex flex-col p-5 w-[30vw] h-screen bg-white shadow-lg text-white ease-in duration-300'
            : 'fixed right-[-30%] top-0 flex flex-col p-5 w-[30vw] h-screen bg-white shadow-lg text-white ease-in duration-300'
        }
      >
        <div className='flex text-black text-3xl'>
          <div className='font-semibold '>Cart</div>
          <div className='cursor-pointer ml-auto' onClick={closeCart}>
            <div>X</div>
          </div>
        </div>
        <div className='mt-5 flex flex-col text-black'>
          {cartItems.map((item) => (
            <CartItem key={item.id} {...item} />
          ))}
        </div>
        <div className='ml-auto text-black font-bold text-xl'>
          Total:{' '}
          {formatCurrency(
            cartItems.reduce((total, cartItem) => {
              const item = storeItems.find((i) => i.id === cartItem.id);
              return total + (item?.price || 0) * cartItem.qty;
            }, 0)
          )}
        </div>
      </div>
    </>
  );
};

export default ShoppingCart;
