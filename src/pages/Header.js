import React from 'react';
import { Link } from 'react-router-dom';
import Cats from '../Ani/Cats';
import Dogs from '../Ani/Dogs';

function Header() {
  return (
    <div className='w-full flex justify-between p-4 border-b border-black-900 fixed z-50 bg-white'>
      <h1 className='text-3xl font-bold font-cursive pr-4'>PetStore</h1>
      <div className='text-1xl font-bold ml-4'>
        <ul className='flex cursor-pointer text-center'>
          <Link to={"/Dogs"}>
            <button>
              <li className='pr-7 hover:text-2xl'>dogs</li>
            </button>
          </Link>
          <Link to={"/Cats"}>
            <button>
              <li className='pr-7 hover:text-2xl'>cats</li>
            </button>
          </Link>
        </ul>
      </div>
    </div>
  );
}

export default Header;
