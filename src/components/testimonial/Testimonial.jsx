import React, { useContext } from 'react';
import myContext from '../../context/data/myContext';

function Testimonial() {
  const context = useContext(myContext);
  const { mode } = context;

  return (
    <div>
      <section className="text-gray-600 body-font mb-10">
        <div className="container px-5 py-10 mx-auto">
          <h1 className="text-center text-3xl font-bold text-black" style={{ color: mode === 'dark' ? 'white' : '' }}>
            Testimonials
          </h1>
          <h2 className="text-center text-2xl font-semibold mb-10" style={{ color: mode === 'dark' ? 'white' : '' }}>
            Discover the <span className="text-orange-500">feedback</span> from our valued customers.
          </h2>
          <div className="flex flex-wrap -m-4">
            {/* Testimonial 1 */}
            <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
              <div className="h-full text-center">
                <img
                  alt="testimonial"
                  className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                  src="./src/img/PauloSevelino.jpg"
                />
                <p style={{ color: mode === 'dark' ? 'white' : '' }} className="leading-relaxed">
                  "Great products! The quality is amazing, and the customer service is top-notch. I highly recommend Helmet and
                  Gear to everyone."
                </p>
                <span className="inline-block h-1 w-10 rounded bg-pink-500 mt-6 mb-4" />
                <h2 style={{ color: mode === 'dark' ? '#ff4162' : '' }} className="text-gray-900 font-medium title-font tracking-wider text-sm uppercase">
                  Paulo Sevelino
                </h2>
                <p style={{ color: mode === 'dark' ? 'white' : '' }} className="text-gray-500">Endorser</p>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
              <div className="h-full text-center">
                <img
                  alt="testimonial"
                  className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                  src="./src/Img/Michelle dee.jpg"
                />
                <p style={{ color: mode === 'dark' ? 'white' : '' }} className="leading-relaxed">
                  "Amazing selection of products. The variety is great, and the prices are reasonable. Will definitely shop here
                  again!"
                </p>
                <span className="inline-block h-1 w-10 rounded bg-pink-500 mt-6 mb-4" />
                <h2 style={{ color: mode === 'dark' ? '#ff4162' : '' }} className="text-gray-900 font-medium title-font tracking-wider text-sm uppercase">
                  Michelle Dee
                </h2>
                <p style={{ color: mode === 'dark' ? 'white' : '' }} className="text-gray-500">Endorser</p>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="lg:w-1/3 lg:mb-0 p-4">
              <div className="h-full text-center">
                <img
                  alt="testimonial"
                  className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                  src="./src/Img/Angel Locsin.jpg"
                />
                <p style={{ color: mode === 'dark' ? 'white' : '' }} className="leading-relaxed">
                  "Helmet and Gear provides excellent products. The team is responsive and helpful. As an Brand Ambassador, I appreciate the
                  quality service."
                </p>
                <span className="inline-block h-1 w-10 rounded bg-pink-500 mt-6 mb-4" />
                <h2 style={{ color: mode === 'dark' ? '#ff4162' : '' }} className="text-gray-900 font-medium title-font tracking-wider text-sm uppercase">
                  Angel Locsin
                </h2>
                <p style={{ color: mode === 'dark' ? 'white' : '' }} className="text-gray-500">Brand Ambassador</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Testimonial;
