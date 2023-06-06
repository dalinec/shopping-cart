import StoreItem from '../components/StoreItem/StoreItem';
import { storeItems } from '../data/items.js';

const Store = () => {
  return (
    <>
      <div className='text-5xl font-semibold my-10 text-center'>Store</div>
      <div className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 place-items-center'>
        {storeItems.map((item) => (
          <div key={item.id}>
            <StoreItem {...item} />
          </div>
        ))}
      </div>
    </>
  );
};

export default Store;
