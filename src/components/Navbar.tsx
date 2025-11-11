import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Heart } from 'lucide-react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-purple-950/90 backdrop-blur-lg shadow-lg shadow-pink-500/20' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="text-2xl font-bold bg-gradient-to-r from-pink-400 via-purple-400 to-pink-400 bg-clip-text text-transparent flex items-center gap-2">
            <Heart className="text-pink-400" fill="currentColor" size={24} />
            Portfolyo
          </Link>
          <div className="hidden md:flex space-x-6">
            <Link to="/" className="text-pink-200 hover:text-pink-400 transition-colors font-medium">
              Ana Sayfa
            </Link>
            <Link to="/education" className="text-pink-200 hover:text-pink-400 transition-colors font-medium">
              Eğitim
            </Link>
            <Link to="/experience" className="text-pink-200 hover:text-pink-400 transition-colors font-medium">
              Tecrübe
            </Link>
            <Link to="/skills" className="text-pink-200 hover:text-pink-400 transition-colors font-medium">
              Yetenekler
            </Link>
            <Link to="/projects" className="text-pink-200 hover:text-pink-400 transition-colors font-medium">
              Projeler
            </Link>
            <Link to="/contact" className="text-pink-200 hover:text-pink-400 transition-colors font-medium">
              İletişim
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;