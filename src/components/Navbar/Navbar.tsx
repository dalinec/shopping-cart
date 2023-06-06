import { navLinks } from './navbarConsts.js';
import { NavLink } from 'react-router-dom';
import { ImCart } from 'react-icons/im';
import { useShoppingCart } from '../../context/ShoppingCartContext.js';

const Navbar = () => {
  const { openCart, cartQty } = useShoppingCart();
  return (
    <>
      <div className='sticky sm:text-[12px] px-[20%] lg:text-lg flex gap-12 items-center  font-bold bg-white shadow-md mb-3 p-4'>
        {navLinks.map((item) => (
          <NavLink to={item.link}>
            <div key={item.title}>
              <div className='hover:text-slate-400 ease-in duration-150 cursor-pointer'>
                {item.title}
              </div>
            </div>
          </NavLink>
        ))}
        <div className=' ml-auto relative'>
          <button
            onClick={openCart}
            className='border-[2px] p-1 rounded-lg border-black hover:text-slate-400 hover:border-slate-400 ease-in duration-150'
          >
            <ImCart size={28} />
          </button>
          <div className='p-1 w-6 h-6 absolute top-7 left-5 rounded-full bg-red-600 flex text-white justify-center items-center'>
            {cartQty}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
