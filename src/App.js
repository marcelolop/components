import './assets/styles/index.css';
import './assets/styles/reset.css';
import React, { useState } from 'react';
import Header from './components/Header';
import Banner from './components/Banner';
import Gallery from './components/Gallery';
import Footer from './components/Footer';
import moviesData from './data/movie_data';
import heroBanner from './assets/media/hero-banner-video.mp4';


function App() {
  const [movies, setMovies] = useState(moviesData);
  const bannerProps = {
    title: 'Welcome to MFlix!',
    text: 'Discover the latest movies and find your next favorite film.',
    background: heroBanner,
  };

  return (
    <>
      <Header />
      <main>
      <Banner {...bannerProps} isVideo={true} />
        <Gallery movies={movies} />
      </main>
      <Footer />
    </>
  );
}

export default App;