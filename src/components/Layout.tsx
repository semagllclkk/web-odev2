import { Outlet } from 'react-router-dom';
import { Heart } from 'lucide-react';
import Navbar from './Navbar';

const Layout = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Outlet: Çocuk sayfalar buraya yüklenir */}
      <main>
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-purple-950/50 border-t border-pink-500/20 py-8 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center gap-2 mb-2">
            <Heart className="text-pink-400" fill="currentColor" size={20} />
            <p className="text-purple-200">Made with love by Lale Demir</p>
            <Heart className="text-pink-400" fill="currentColor" size={20} />
          </div>
          <p className="text-purple-400 text-sm">© 2025 Tüm hakları saklıdır.</p>
          <p className="text-purple-500 text-xs mt-2">CENG 307 - Portfolyo Projesi</p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;