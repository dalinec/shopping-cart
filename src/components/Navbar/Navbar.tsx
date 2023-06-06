import { navLinks } from './navbarConsts.js';
import { NavLink } from 'react-router-dom';
import { ImCart } from 'react-icons/im';

const Navbar = () => {
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
        <NavLink to={'/cart'} className=' ml-auto relative'>
          <div className='border-[2px] p-1 rounded-lg border-black hover:text-slate-400 hover:border-slate-400 ease-in duration-150'>
            <ImCart size={28} />
          </div>
          <div className='p-1 w-6 h-6 absolute top-7 left-5 rounded-full bg-red-600 flex text-white justify-center items-center'>
            3
          </div>
        </NavLink>
      </div>
    </>
  );
};

export default Navbar;
