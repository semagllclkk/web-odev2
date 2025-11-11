import { useState } from 'react';
import { Mail, Phone, MapPin, Github, Linkedin } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section className="py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4 flex items-center justify-center gap-3">
            <Mail className="text-pink-400" size={36} />
            İletişim
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-pink-400 to-purple-400 mx-auto rounded-full"></div>
        </div>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold text-white mb-6">Bana Ulaşın</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-4 bg-gradient-to-r from-purple-900/50 to-pink-900/30 p-4 rounded-xl border border-pink-500/20">
                <div className="bg-gradient-to-br from-pink-500 to-purple-500 text-white p-3 rounded-lg">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-sm text-purple-300">E-mail</p>
                  <p className="text-white font-semibold">lale.demir@email.com</p>
                </div>
              </div>
              <div className="flex items-center gap-4 bg-gradient-to-r from-purple-900/50 to-pink-900/30 p-4 rounded-xl border border-pink-500/20">
                <div className="bg-gradient-to-br from-purple-500 to-pink-500 text-white p-3 rounded-lg">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="text-sm text-purple-300">Telefon</p>
                  <p className="text-white font-semibold">+90 532 123 45 67</p>
                </div>
              </div>
              <div className="flex items-center gap-4 bg-gradient-to-r from-purple-900/50 to-pink-900/30 p-4 rounded-xl border border-pink-500/20">
                <div className="bg-gradient-to-br from-pink-500 to-purple-500 text-white p-3 rounded-lg">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="text-sm text-purple-300">Konum</p>
                  <p className="text-white font-semibold">Alanya, Antalya, Türkiye</p>
                </div>
              </div>
            </div>
            <div className="flex gap-4 mt-8">
              <button className="bg-gradient-to-r from-purple-600 to-purple-700 text-white p-4 rounded-xl hover:shadow-lg hover:shadow-purple-500/50 transition-all" aria-label="GitHub">
                <Github size={24} />
              </button>
              <button className="bg-gradient-to-r from-pink-600 to-pink-700 text-white p-4 rounded-xl hover:shadow-lg hover:shadow-pink-500/50 transition-all" aria-label="LinkedIn">
                <Linkedin size={24} />
              </button>
            </div>
          </div>
          <div>
            <div className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-pink-300 mb-2">İsim</label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Adınız Soyadınız"
                  className="w-full px-4 py-3 bg-purple-900/50 border border-pink-500/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-500 text-white placeholder-purple-400"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-pink-300 mb-2">Email</label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="ornek@email.com"
                  className="w-full px-4 py-3 bg-purple-900/50 border border-pink-500/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-500 text-white placeholder-purple-400"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-pink-300 mb-2">Mesaj</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  placeholder="Mesajınızı buraya yazın..."
                  className="w-full px-4 py-3 bg-purple-900/50 border border-pink-500/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-ring-pink-500 text-white placeholder-purple-400"
                />
              </div>
              <button
                onClick={handleSubmit}
                className="w-full bg-gradient-to-r from-pink-500 to-purple-500 text-white py-3 rounded-xl hover:shadow-lg hover:shadow-pink-500/50 transition-all font-semibold"
              >
                Mesaj Gönder 💌
              </button>
              {submitted && (
                <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-400/30 text-green-300 px-4 py-3 rounded-xl text-center">
                  ✨ Mesajınız başarıyla gönderildi!
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;