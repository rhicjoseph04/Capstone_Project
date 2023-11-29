import React, { Fragment, useContext, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { Link } from 'react-router-dom'
import { BsFillCloudSunFill } from 'react-icons/bs'
import { FiSun } from 'react-icons/fi'
import { FaShopware } from 'react-icons/fa'; 
import myContext from '../../context/data/myContext';
import { RxCross2 } from 'react-icons/rx'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMotorcycle } from '@fortawesome/free-solid-svg-icons';


function Navbar() {
  const [selectedCurrency, setSelectedCurrency] = useState('PHP');
  const context = useContext(myContext);
  const {mode, toggleMode} = context;

  const [open, setOpen] = useState(false)

  const user = JSON.parse(localStorage.getItem('user'));

  const handleCurrencyChange = (newCurrency) => {
    setSelectedCurrency(newCurrency);
  };

  const logout = () => {
    localStorage.clear('user');
    window.location.href = '/login'
  }

  return (
    <div className="bg-white sticky top-0 z-50  "  >
      {/* Mobile menu */}
      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-40 lg:hidden" onClose={setOpen}>
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 z-40 flex">
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <Dialog.Panel className="relative flex w-full max-w-xs flex-col overflow-y-auto bg-white pb-12 shadow-xl" style={{ backgroundColor: mode === 'dark' ? 'rgb(40, 44, 52)' : '', color: mode === 'dark' ? 'white' : '', }}>
                <div className="flex px-4 pb-2 pt-28">
                  <button
                    type="button"
                    className="-m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400"
                    onClick={() => setOpen(false)}
                  >
                    <span className="sr-only">Close menu</span>
                    <RxCross2 />
                  </button>
                </div>

                <div className="space-y-6 border-t border-gray-200 px-4 py-6">
  
  {window.innerWidth < 1024 && (
    <h1 className='text-2xl font-bold text-black px-2 py-1 rounded' style={{ color: mode === 'dark' ? 'white' : '' }}>
      EliteRide Helmet and Gear
    </h1>
  )}

  {/* Navigation Links */}
  <Link to={'/allproducts'} className="text-sm font-medium text-gray-900 " style={{ color: mode === 'dark' ? 'white' : '' }}>
    All Products
  </Link>

  <div className="flow-root">
    <Link to={'/order'} style={{ color: mode === 'dark' ? 'white' : '' }} className="-m-2 block p-2 font-medium text-gray-900">
      Order
    </Link>
  </div>

  {user?.user?.email === 'chavezrhic@gmail.com' ? (
  <Link to={'/dashboard'} className="text-sm font-medium text-gray-700 " style={{ color: mode === 'dark' ? 'white' : '' }}>
    Admin
  </Link>
) : ""}



                  {user ? <div className="flow-root">
                    <a onClick={logout} className="-m-2 block p-2 font-medium text-gray-900 cursor-pointer" style={{ color: mode === 'dark' ? 'white' : '', }}>
                      Logout
                    </a>
                  </div> : ""}

  <div className="flow-root">
    <Link to={'/'} className="-m-2 block p-2 font-medium text-gray-900 cursor-pointer">
      <img
        className="inline-block w-10 h-10 rounded-full"
        src="./src/Img/motocareslogo.jpg"
        alt="Rhic_Chavez"
      />
    </Link>
  </div>

     {/* Change Currency Link */}
     <div className="border-t border-gray-200 px-4 py-6">
        <div className="-m-2 flex items-center p-2">
          <img
            src="/src/Img/philippineflag.png"
            alt=""
            className="block h-auto w-5 flex-shrink-0"
          />
          <span className="ml-3 block text-base font-medium text-gray-900" style={{ color: mode === 'dark' ? 'white' : '' }}>
            {selectedCurrency}
          </span>
          <span className="sr-only">, change currency</span>

          {/* Dropdown for currency selection */}
          <select
            className="ml-2 p-1 border border-gray-300 rounded"
            value={selectedCurrency}
            onChange={(e) => handleCurrencyChange(e.target.value)}
          >
            <option value="PHP">PHP</option>
            <option value="USD">USD</option> {/* Added USD option */}
    </select>
  </div>
</div>

</div>


              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>

      {/* desktop  */}
      <header className="relative bg-white">
        <p
          className="flex h-10 items-center justify-center bg-black px-4 text-sm font-medium text-white sm:px-6 lg:px-8"
          style={{ backgroundColor: mode === 'dark' ? 'rgb(62 64 66)' : '#1a1a2e', color: mode === 'dark' ? 'white' : '' }}
        >
          <FontAwesomeIcon icon={faMotorcycle} style={{ marginLeft: '1em', color: 'orange' }} />
          Your Journey Awaits with FREE Shipping! 🚚
        </p>
        <nav aria-label="Top" className="bg-gray-100 px-4 sm:px-6 lg:px-8 shadow-xl" style={{ backgroundColor: mode === 'dark' ? '#282c34' : '', color: mode === 'dark' ? 'white' : '' }}>
          <div className="">
            <div className="flex h-16 items-center">
              <button
                type="button"
                className="rounded-md bg-white p-2 text-gray-400 lg:hidden"
                onClick={() => setOpen(true)}
                style={{ backgroundColor: mode === 'dark' ? 'rgb(80 82 87)' : '', color: mode === 'dark' ? 'white' : '' }}
              >
         <span className="sr-only">Open menu</span>
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
</svg>


              </button>
{/* Logo */}
<div className="ml-4 flex lg:ml-0">
  <Link to={'/'}>
    <div className="flex items-center">
      <FaShopware
        className="text-4xl lg:text-5xl text-orange-500 hover:text-blue-500 transition duration-300"
        style={{ marginLeft: '5px' }}
      />
      {/* Conditionally render h1 based on screen size */}
      {window.innerWidth >= 421 && window.innerWidth > 1024 && (
        <h1
          className='text-2xl font-bold text-black px-2 py-1 rounded'
          style={{ 
            color: mode === 'dark' ? 'white' : '',
            fontSize: '1 rem', 
          }}
        >
         EliteRide 
        </h1>
      )}
    </div>
  </Link>
</div>



              <div className="ml-auto flex items-center">
              <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
  <Link to={'/allproducts'} className="text-sm font-medium text-gray-700 hover:text-blue-500" style={{ color: mode === 'dark' ? 'white' : '' }}>
    All Products
  </Link>
  <Link to={'/order'} className="text-sm font-medium text-gray-700 hover:text-blue-500" style={{ color: mode === 'dark' ? 'white' : '' }}>
    Order
  </Link>

  {user?.user?.email === 'chavezrhic@gmail.com' ? (
  <Link to={'/dashboard'} className="text-sm font-medium text-gray-700 " style={{ color: mode === 'dark' ? 'white' : '' }}>
    Admin
  </Link>
) : ""}


                 
                {user ? <a onClick={logout} className="text-sm font-medium text-gray-700 cursor-pointer  " style={{ color: mode === 'dark' ? 'white' : '', }}>
                    Logout
                  </a> : <Link to={'/signup'} className="text-sm font-medium text-gray-700 cursor-pointer  " style={{ color: mode === 'dark' ? 'white' : '', }}>
                    Signup
                  </Link>}
</div>

<div className="hidden lg:ml-8 lg:flex">
  <a href="#" className="flex items-center text-gray-700 ">
    <img
      src="/src/Img/philippineflag.png" 
      alt="Philippines Flag"
      className="block h-auto w-5 flex-shrink-0"
    />
    <span className="ml-3 block text-sm font-medium" style={{ color: mode === 'dark' ? 'white' : '' }}>
      PHILIPPINES
    </span>
  </a>
</div>

                <div className="hidden lg:ml-8 lg:flex">
                  <a href="#" className="flex items-center text-gray-700 ">
                    <img
                      className="inline-block w-10 h-10 rounded-full"
                      src="/src/Img/motocareslogo.jpg"
                      alt="Rhic_Chavez" />
                  </a>
                </div>

                {/* Search */}
                <div className="flex lg:ml-6">
                  <button className='' onClick={toggleMode}>
                    {/* <MdDarkMode size={35} style={{ color: mode === 'dark' ? 'white' : '' }} /> */}
                    {mode === 'light' ?
                      (<FiSun className='' size={30} />
                      ) : 'dark' ?
                        (<BsFillCloudSunFill size={30} />
                        ) : ''}
                  </button>
                </div>

                {/* Cart */}
                <div className="ml-4 flow-root lg:ml-6">
                  <Link to={'/cart'} className="group -m-2 flex items-center p-2" style={{ color: mode === 'dark' ? 'white' : '', }}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                    </svg>

                    <span className="ml-2 text-sm font-medium text-gray-700 group-" style={{ color: mode === 'dark' ? 'white' : '', }}>0</span>
                    <span className="sr-only">items in cart, view bag</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  )
}

export default Navbar