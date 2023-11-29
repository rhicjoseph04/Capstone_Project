import React, { useContext } from 'react'
import myContext from '../../context/data/myContext'
import { Link } from 'react-router-dom';
import { FaFacebook, FaTimes, FaInstagram, FaLinkedin, FaShopware } from 'react-icons/fa';




function Footer() {
    const context = useContext(myContext);
    const { mode } = context;

    return (
        <footer className="text-gray-600 body-font bg-gray-300" style={{ backgroundColor: mode === 'dark' ? 'rgb(46 49 55)' : '', color: mode === 'dark' ? 'white' : '', }}>
            <div className="container px-5 py-24 mx-auto" >
                <div className="flex flex-wrap md:text-left text-center order-first">
                <div className="lg:w-1/4 md:w-1/2 w-full px-4">
    <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3" style={{ color: mode === 'dark' ? 'white' : '' }}>Helmet Categories</h2>
    <nav className="list-none mb-10">
        <li>
            <Link to={'/helmets/motorcycle'} className="text-gray-600 hover:text-gray-800" style={{ color: mode === 'dark' ? 'white' : '' }}>Motorcycle Helmets</Link>
        </li>
        <li>
            <Link to={'/helmets/bicycle'} className="text-gray-600 hover:text-gray-800" style={{ color: mode === 'dark' ? 'white' : '' }}>Accesories</Link>
        </li>
        <li>
            <Link to={'/helmets/accessories'} className="text-gray-600 hover:text-gray-800" style={{ color: mode === 'dark' ? 'white' : '' }}>Maintenance</Link>
        </li>
    </nav>
</div>
<div className="lg:w-1/4 md:w-1/2 w-full px-4">
    <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3 uppercase" style={{ color: mode === 'dark' ? 'white' : '' }}>Customer Service</h2>
    <nav className="list-none mb-10">
        <li>
            <Link to={'/returnpolicy'} className="text-gray-600 hover:text-gray-800" style={{ color: mode === 'dark' ? 'white' : '' }}>Return Policy</Link>
        </li>
        <li>
            <Link to={'/about'} className="text-gray-600 hover:text-gray-800" style={{ color: mode === 'dark' ? 'white' : '' }}>About Us</Link>
        </li>
        <li>
            <Link to={'/contact'} className="text-gray-600 hover:text-gray-800" style={{ color: mode === 'dark' ? 'white' : '' }}>Contact Us</Link>
        </li>
    </nav>
</div>


                    <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                        <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3" style={{ color: mode === 'dark' ? 'white' : '' }}>Services</h2>
                        <nav className="list-none mb-10">
                            <li>
                                <Link to={'/privacypolicy'} className="text-gray-600 hover:text-gray-800" style={{ color: mode === 'dark' ? 'white' : '' }}>Privacy</Link>
                            </li>

                        </nav>
                    </div>
                    <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                        <img src="https://ecommerce-sk.vercel.app/pay.png" alt="" />
                    </div>
                </div>

            </div>

            <div className="bg-black" style={{ color: mode === 'dark' ? '#ffffff' : '' }}>
  <div className="container px-5 py-3 mx-auto flex items-center sm:flex-row flex-col">
  <Link to={'/'} className='flex items-center'>
                            <div className="flex items-center">
                                {/* Add your logo here */}
                                <FaShopware
                                    className="text-4xl text-orange-500 hover:text-blue-500 transition duration-300"
                                    style={{ marginRight: '5px' }}
                                />
                                <h1 className='text-2xl font-bold text-white px-2 py-1 rounded'>EliteRide Helmet and Gear</h1>
                            </div>
                        </Link>
    <p className="text-sm text-white sm:ml-6 sm:mt-0 mt-4">
      © 2023 EliteRide Helmets and Gear —
      <a href="https://twitter.com/knyttneve" rel="noopener noreferrer" className="text-white ml-1" target="_blank">
        www.eliteridehelmetsandgear.com
      </a>
    </p>
    <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
  {/* Facebook Icon */}
  <a className="text-white mx-2" href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
    <FaFacebook size={25} />
  </a>
  {/* Twitter Icon */}
  <a className="text-white mx-2" href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
    {/* Use an "x" icon for Twitter */}
    <FaTimes size={25} />
  </a>
  {/* Instagram Icon */}
  <a className="text-white mx-2" href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
    <FaInstagram size={25} />
  </a>
  {/* LinkedIn Icon */}
  <a className="text-white mx-2" href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
    <FaLinkedin size={25} />
  </a>
  {/* Add other social media icons as needed */}
</span>
  </div>
</div>


        </footer>
    )
}

export default Footer