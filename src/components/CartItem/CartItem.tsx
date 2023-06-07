import { useShoppingCart } from '../../context/ShoppingCartContext';
import { storeItems } from '../../data/items';
import formatCurrency from '../../utils/formatCurrency';

type CartItemProps = {
  id: number;
  qty: number;
};

const CartItem = ({ id, qty }: CartItemProps) => {
  const { removeFromCart } = useShoppingCart();
  const item = storeItems.find((i) => i.id === id);
  if (item === undefined) return null;
  return (
    <div className='flex justify-between mb-5'>
      <div className='flex items-center justify-center gap-3'>
        <div
          className={`${item?.bg} w-[150px] h-[85px] bg-cover bg-center rounded-md`}
        ></div>
        <div className='flex flex-col items-start'>
          <div className='text-xl '>
            {item?.name} <span className='text-sm text-gray-400'>x{qty}</span>
          </div>
          <div className='text-gray-400'>${formatCurrency(item?.price)}</div>
        </div>
      </div>
      <div className='flex items-center gap-2'>
        <div>{formatCurrency(item.price * qty)}</div>
        <button
          onClick={() => removeFromCart(id)}
          className='p-2 font-semibold rounded-lg text-red-600 border-red-600 border-[1px] bg-white w-[40px] '
        >
          &times;
        </button>
      </div>
    </div>
  );
};

export default CartItem;
