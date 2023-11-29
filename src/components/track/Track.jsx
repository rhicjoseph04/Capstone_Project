import React, { useContext, useEffect, useState } from 'react';
import myContext from '../../context/data/myContext';

function Track() {
  const context = useContext(myContext);
  const { mode } = context;
  const [firebaseImage, setFirebaseImage] = useState('');

  useEffect(() => {
    const imageUrl = 'https://firebasestorage.googleapis.com/v0/b/myfirstapp-a0c8d.appspot.com/o/peso%20png.png?alt=media&token=4513d360-893d-4dfc-8076-634128d716df';

    fetch(imageUrl)
      .then(response => response.blob())
      .then(blob => {
        const reader = new FileReader();
        reader.onloadend = function () {
          const base64data = reader.result.replace(/^data:.+;base64,/, '');
          const dataUri = 'data:image/png;base64,' + base64data;
          setFirebaseImage(dataUri);
        };

        reader.readAsDataURL(blob);
      });
  }, []); // The empty dependency array ensures that this effect runs only once

  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 md:py-5 mx-auto">
          <div className="flex flex-wrap -m-4 text-center">
                        <div className="p-4 md:w-1/3 sm:w-1/2 w-full">
                            <div className="border-2 hover:shadow-xl hover:shadow-gray-200 border-gray-200 bg-gray-100 shadow-[inset_0_0_2px_rgba(0,0,0,0.6)] px-4 py-6 rounded-lg" style={{ backgroundColor: mode === 'dark' ? 'rgb(46 49 55)' : '', color: mode === 'dark' ? 'white' : '' }}>
                                <svg className="text-black w-12 h-12 mb-3 inline-block" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                                </svg>

                                <h2 className="title-font font-medium text-lg text-gray-900" style={{ color: mode === 'dark' ? 'white' : '' }}>Top of the Line</h2>
                                <p className="leading-relaxed">
"Experience superior protection and style with our meticulously crafted helmets, designed for the modern rider's safety and comfort."</p>
                            </div>
                        </div>
                        <div className="p-4 md:w-1/3 sm:w-1/2 w-full">
                            <div className="border-2 hover:shadow-xl hover:shadow-gray-200 border-gray-200 bg-gray-100  px-4 py-6 rounded-lg" style={{ backgroundColor: mode === 'dark' ? 'rgb(46 49 55)' : '', color: mode === 'dark' ? 'white' : '' }}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="text-black w-12 h-12 mb-3 inline-block">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
                                </svg>

                                <h2 className="title-font font-medium text-lg text-gray-900" style={{ color: mode === 'dark' ? 'white' : '' }}>Free Shipping</h2>
                                <p className="leading-relaxed">
"We offer FREE shipping nationwide across the Philippines, bringing quality products to your doorstep with no additional charges."</p>
                            </div>
                        </div>
                        <div className="p-4 md:w-1/3 sm:w-1/2 w-full">
                            <div className="border-2 hover:shadow-xl hover:shadow-gray-200 border-gray-200 bg-gray-100 shadow-[inset_0_0_2px_rgba(0,0,0,0.6)] px-4 py-6 rounded-lg" style={{ backgroundColor: mode === 'dark' ? 'rgb(46 49 55)' : '', color: mode === 'dark' ? 'white' : '' }}>
                            <svg xmlns="/src/Img/img_455842.svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="text-black w-12 h-12 mb-3 inline-block">
                  <image xlinkHref={firebaseImage} width="24" height="24" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="gs://myfirstapp-a0c8d.appspot.com/peso png.png
Access to" />
                </svg>
                <h2 className="title-font font-medium text-lg text-gray-900" style={{ color: mode === 'dark' ? 'white' : '' }}>Exciting Offers</h2>
                <p className="leading-relaxed">"Discover irresistible deals and exclusive discounts that will elevate your shopping experience.Explore exclusive deals and discounts."</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Track;
