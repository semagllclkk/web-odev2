import { useState, useEffect } from 'react';
import { Mail, Github } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  const [text, setText] = useState('');
  const fullText = '✨ Full Stack Developer ✨';

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 100);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <div className="inline-block mb-4 px-4 py-2 bg-gradient-to-r from-pink-500/20 to-purple-500/20 rounded-full border border-pink-400/30">
              <span className="text-pink-300 text-sm font-medium">💖 Hoş Geldiniz</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
              Merhaba, Ben{' '}
              <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Lale Demir
              </span>
            </h1>
            <p className="text-2xl text-pink-200 mb-6 h-8 font-medium">{text}<span className="text-pink-400">|</span></p>
            <p className="text-lg text-purple-200 mb-8 leading-relaxed">
              Modern web teknolojileri konusunda uzmanlaşmış, kullanıcı deneyimini ön planda tutan 
              ve sürekli kendini geliştiren bir yazılım geliştiriciyim. Projelerimde temiz kod yazımı 
              ve inovatif çözümler üretmeyi hedefliyorum.
            </p>
            <div className="flex gap-4">
              <Link to="/contact" className="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-8 py-3 rounded-full hover:shadow-lg hover:shadow-pink-500/50 transition-all flex items-center gap-2 font-medium">
                <Mail size={20} />
                İletişime Geç
              </Link>
              <button className="border-2 border-pink-400 text-pink-300 px-8 py-3 rounded-full hover:bg-pink-500/10 transition-all flex items-center gap-2 font-medium">
                <Github size={20} />
                GitHub
              </button>
            </div>
          </div>
                    <div className="flex-1 flex justify-center">
            <div className="relative">
              <div className="w-72 h-72 rounded-full bg-gradient-to-br from-pink-400 via-purple-500 to-pink-500 p-1">
                <div className="w-full h-full rounded-full bg-gradient-to-br from-purple-900 to-purple-950 flex items-center justify-center text-8xl">
                  👩‍💻
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 bg-gradient-to-r from-pink-500 to-purple-500 rounded-2xl shadow-lg shadow-pink-500/50 p-4">
                <p className="text-sm font-semibold text-white">5+ Yıl Tecrübe</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;