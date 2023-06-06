import { useShoppingCart } from '../../context/ShoppingCartContext';
import formatCurrency from '../../utils/formatCurrency';

type StoreItemProps = {
  id: number;
  name: string;
  price: number;
  bg: string;
};

const StoreItem = ({ id, name, price, bg }: StoreItemProps) => {
  const { getItemQty, increaseCartQty, decreaseCartQty, removeFromCart } =
    useShoppingCart();
  const qty = getItemQty(id);

  return (
    <div className='rounded-xl shadow-lg h-full '>
      <div
        className={`${bg} bg-cover bg-center bg-no-repeat w-[350px] h-[225px] rounded-t-xl`}
      ></div>
      <div className='flex flex-col p-2'>
        <div className='flex justify-between p-3 mb-4 text-xl'>
          <div className='font-semibold'>{name}</div>
          <div className='text-gray-400 text-lg'>{formatCurrency(price)}</div>
        </div>
        <div className='mt-auto'>
          {qty === 0 ? (
            <button
              onClick={() => increaseCartQty(id)}
              className='p-2 font-semibold rounded-lg bg-blue-600 text-white w-full'
            >
              + Add to cart
            </button>
          ) : (
            <div className='flex flex-col items-center gap-2'>
              <div className='flex items-center justify-center gap-2'>
                <button
                  onClick={() => decreaseCartQty(id)}
                  className='p-2 w-[40px] font-semibold rounded-lg bg-blue-600 text-white'
                >
                  -
                </button>
                <div>
                  <span className='text-xl'>{qty}</span> in cart
                </div>
                <button
                  onClick={() => increaseCartQty(id)}
                  className='p-2 w-[40px] font-semibold rounded-lg bg-blue-600 text-white'
                >
                  +
                </button>
              </div>
              <button  onClick={() => removeFromCart(id)} className='p-2 font-semibold rounded-lg bg-red-600 text-white w-1/3'>
                Remove
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default StoreItem;
