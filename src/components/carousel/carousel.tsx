import { useState, useEffect } from 'react';
import '../carousel/carousel.css';

const NikeCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      icon: (
        <svg className="header-icon" viewBox="0 0 24 24" fill="currentColor">
          <path d="M13.49 5.48c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm-3.6 13.9l1-4.4 2.1 2v6h2v-7.5l-2.1-2 .6-3c1.3 1.5 3.3 2.5 5.5 2.5v-2c-1.9 0-3.5-1-4.3-2.4l-1-1.6c-.4-.6-1-1-1.7-1-.3 0-.5.1-.8.1l-5.2 2.2v4.7h2v-3.4l1.8-.7-1.6 8.1-4.9-1-.4 2 7 1.4z"/>
        </svg>
      ),
      title: 'RUNNING SHOES',
      description: 'Find your perfect sneaker.',
      link: 'Learn More'
    },
    {
      icon: (
        <svg className="header-icon" viewBox="0 0 24 24" fill="currentColor">
          <path d="M21 11H6.83l3.58-3.59L9 6l-6 6 6 6 1.41-1.41L6.83 13H21z"/>
          <path d="M21 3H3v18h18V3zm-2 16H5V5h14v14z"/>
        </svg>
      ),
      title: 'GIFT CARD',
      description: 'For last-minute gifts.',
      link: 'Learn More'
    },
    {
      icon: (
        <svg className="header-icon" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
        </svg>
      ),
      title: 'SPECIAL OFFERS',
      description: 'Take advantage of amazing discounts.',
      link: 'Learn More'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="carousel-container">
      <div className="carousel-header">
        <button className="carousel-nav-button" onClick={prevSlide}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="nav-icon">
            <path d="M15 18l-6-6 6-6"/>
          </svg>
        </button>

        <div className="carousel-content-wrapper">
          <div 
            className="carousel-track"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {slides.map((slide, index) => (
              <div key={index} className="carousel-slide">
                {slide.icon}
                <span className="slide-title">{slide.title}</span>
                <span className="slide-description">{slide.description}</span>
                <a 
                  href="#" 
                  className="slide-link"
                  onClick={(e) => e.preventDefault()}
                >
                  {slide.link}
                </a>
              </div>
            ))}
          </div>
        </div>

        <button className="carousel-nav-button" onClick={nextSlide}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="nav-icon">
            <path d="M9 18l6-6-6-6"/>
          </svg>
        </button>
      </div>

    </div>
  );
};

export default NikeCarousel;