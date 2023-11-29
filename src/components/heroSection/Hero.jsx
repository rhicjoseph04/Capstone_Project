import React from 'react';
import { Carousel } from 'react-bootstrap';
import { Parallax } from 'react-parallax';
import 'bootstrap/dist/css/bootstrap.min.css';


function HeroSection() {
  const carouselImages = [
    '/src/Img/motorbike-438464_1280.jpg',
    '/src/Img/slide2.jpg',
    '/src/Img/slide3.jpg',
  ];

  return (

      <div className="hero-section">
        <div className="hero-container">
          <div className="row mb-0">
            <div className="col-md-8">
              {/* Carousel on the left */}
              <Carousel fade controls={false} interval={2000} pause={false}>
                {carouselImages.map((image, index) => (
                  <Carousel.Item key={index}>
                    <img src={image} className="d-block w-100" alt={`Slide ${index + 1}`} />
                  </Carousel.Item>
                ))}
              </Carousel>
            </div>
            <div className="col-md-4">
              {/* Videos on the right */}
              <div className="video-container">
                {/* Videos go here */}
                <div className="video">
                  <iframe
                    title="Video 1"
                    width="100%"
                    height="264"
                    src="https://www.youtube.com/embed/je1WI5mwk1A?autoplay=1&mute=1"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
                <div className="video">
                  <iframe
                    title="Video 2"
                    width="100%"
                    height="260"
                    src="https://www.youtube.com/embed/y6Hag0GJBdU?autoplay=1&mute=1"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
                <div className="video">
                  <iframe
                    title="Video 3"
                    width="100%"
                    height="260"
                    src="https://www.youtube.com/embed/8OBQyMAGjeg?autoplay=1&mute=1"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  
  );
}

export default HeroSection;












