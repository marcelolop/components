import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import '../assets/styles/index.css';

function Gallery({ movies }) {
    const galleryRef = useRef(null);

    const scroll = (scrollOffset) => {
        galleryRef.current.scrollBy({
            top: 0,
            left: scrollOffset,
            behavior: 'smooth'
        });
    };

    useEffect(() => {
        const handleWheel = (event) => {
            event.preventDefault();
            if (event.deltaY < 0) {
                scroll(-200);
            } else if (event.deltaY > 0) {
                scroll(200);
            }
        };

        const galleryElement = galleryRef.current;
        galleryElement.addEventListener('wheel', handleWheel, { passive: false });

        return () => {
            galleryElement.removeEventListener('wheel', handleWheel);
        };
    }, []);

    return (
        <section className="gallery-section">
            <div className="container">
                <button className="arrow-button arrow-button-left" onClick={() => scroll(-300)}>
                    &lt;
                </button>
                <div className="gallery" ref={galleryRef}>
                    {movies.map((movie) => (
                        <div key={movie.id} className="gallery-item">
                            <img src={movie.poster} alt={movie.title} />
                            <div className="movie-info">
                                <h3>{movie.title}</h3>
                                <p><i className="fas fa-calendar movie-info-icon"></i>{movie.year}</p>
                                <p><i className="fas fa-clock movie-info-icon"></i>{movie.runningTime}</p>
                                <p><i className="fas fa-star movie-info-icon"></i>Rating: {movie.rating}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <button className="arrow-button arrow-button-right" onClick={() => scroll(300)}>
                    &gt;
                </button>
            </div>
        </section>
    );
}

Gallery.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Gallery;