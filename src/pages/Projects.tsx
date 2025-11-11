import { ExternalLink } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'E-Ticaret Platformu',
      description: 'React ve Node.js kullanılarak geliştirilmiş, ödeme sistemi entegrasyonlu tam teşekküllü e-ticaret platformu.',
      tech: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      image: '🛒'
    },
    {
      title: 'Sosyal Medya Analiz Aracı',
      description: 'Makine öğrenmesi algoritmaları ile sosyal medya verilerini analiz eden dashboard uygulaması.',
      tech: ['Python', 'React', 'D3.js', 'AWS'],
      image: '📊'
    },
    {
      title: 'Proje Yönetim Sistemi',
      description: 'Agile metodolojilerini destekleyen, takım işbirliğine odaklanan proje yönetim uygulaması.',
      tech: ['Vue.js', 'Express', 'PostgreSQL', 'Docker'],
      image: '📋'
    },
    {
      title: 'Real-Time Chat Uygulaması',
      description: 'WebSocket teknolojisi ile gerçek zamanlı mesajlaşma ve video görüşme özelliklerine sahip platform.',
      tech: ['React', 'Socket.io', 'WebRTC', 'Redis'],
      image: '💬'
    }
  ];

  return (
    <section className="py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">Projeler</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto rounded-full"></div>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <div key={idx} className="bg-gradient-to-br from-purple-900/50 to-pink-900/30 rounded-2xl overflow-hidden border border-pink-500/20 hover:border-pink-500/50 hover:shadow-lg hover:shadow-pink-500/20 transition-all">
              <div className="bg-gradient-to-br from-pink-500 to-purple-500 h-48 flex items-center justify-center text-8xl">
                {project.image}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-purple-200 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, tidx) => (
                    <span key={tidx} className="px-3 py-1 bg-purple-800/50 text-pink-300 rounded-full text-sm border border-pink-500/20">
                      {tech}
                    </span>
                  ))}
                </div>
                <button className="flex items-center gap-2 text-pink-400 hover:text-pink-300 font-semibold transition-colors">
                  Detayları Gör <ExternalLink size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;