import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <nav className="relative bg-neutral-900 after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 after:h-px after:bg-white/10">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">
            

            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              <button
                type="button"
                onClick={() => setIsOpen(!isOpen)} 
                className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-white/5 hover:text-white focus:outline-none"
              >
                <span className="sr-only">Open main menu</span>
                
          
                <svg
                  className={`${isOpen ? 'hidden' : 'block'} size-6`}
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>


                <svg
                  className={`${isOpen ? 'block' : 'hidden'} size-6`}
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg>
              </button>
            </div>


            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
              <div className="flex shrink-0 items-center">
                <Link to='/'>                
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/6/69/IMDB_Logo_2016.svg"
                  alt="Logo"
                  className="h-8 w-auto"
                />
                </Link>
              </div>

              <div className="hidden md:block flex-1 max-w-md mx-auto">
                <div className="relative">
                  <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                    <svg className="w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z" />
                    </svg>
                  </div>
                  <input
                    type="search"
                    className="block w-full p-2 ps-9 bg-neutral-800 border border-neutral-700 text-white text-sm rounded-md focus:ring-amber-500 focus:border-amber-500"
                    placeholder="Search"
                  />
                  <button className="absolute end-1 bottom-1 text-black bg-amber-400 hover:bg-amber-500 font-medium rounded text-xs px-3 py-1">
                    Search
                  </button>
                </div>
              </div>

              <div className="hidden sm:ml-6 sm:block">
                <div className="flex space-x-4">
                  <a href="#" className="rounded-md bg-neutral-800 px-3 py-2 text-sm font-medium text-white">Dashboard</a>
                  <a href="#" className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-white/5 hover:text-white">Team</a>
                </div>
              </div>
            </div>
          </div>
        </div>


        <div className={`${isOpen ? 'block' : 'hidden'} sm:hidden bg-neutral-900 border-t border-white/10`}>
          <div className="space-y-1 px-2 pt-2 pb-3">

            <div className="px-3 mb-3">
                <input
                    type="search"
                    className="block w-full p-2 bg-neutral-800 border border-neutral-700 text-white text-sm rounded-md"
                    placeholder="Search..."
                />
            </div>
            <a href="#" className="block rounded-md bg-neutral-800 px-3 py-2 text-base font-medium text-white">Dashboard</a>
            <a href="#" className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-white/5 hover:text-white">Team</a>
            <a href="#" className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-white/5 hover:text-white">Projects</a>
          </div>
        </div>
      </nav>
      <main>
        <Outlet/>
      </main>
    </div>
  );
};

export default Navbar;