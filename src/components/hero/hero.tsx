import './hero.css'
import NikeCarousel from '../carousel/carousel';

export default function Hero() {
  return (
    <div className="hero-container">
      <NikeCarousel />
      <img src="/nito.png" alt="cool nito logo" className="hero-logo" />
    </div>
  );
}