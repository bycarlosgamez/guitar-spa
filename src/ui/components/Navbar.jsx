import { Link, NavLink } from 'react-router-dom';

export const Navbar = () => {
  return (
    <nav className='shadow bg-slate-900 text-white'>
      <div className='h-16 mx-auto px-5 flex items-center justify-between'>
        <Link
          to='/'
          className='text-2xl hover:text-cyan-500 transition-colors cursor-pointer'
        >
          GUITARS
        </Link>

        <ul className='flex items-center gap-5'>
          <li>
            <NavLink
              to='/fender'
              className={({ isActive }) =>
                `hover:text-cyan-500 transition-colors ${
                  isActive ? 'text-cyan-200' : ''
                }`
              }
            >
              Fender
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/gibson'
              className={({ isActive }) =>
                `hover:text-cyan-500 transition-colors ${
                  isActive ? 'text-cyan-200' : ''
                }`
              }
            >
              Gibson
            </NavLink>

            <NavLink
              to='/'
              className='middle none center mr-4 rounded-lg bg-white
               py-3 px-6 ml-6 font-sans text-xs font-bold uppercase text-slate-900 shadow-md transition-all focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none'
            >
              Logout
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};
