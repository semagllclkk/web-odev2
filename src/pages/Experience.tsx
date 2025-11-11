import { Briefcase, Calendar } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      company: 'TechVision A.Ş.',
      position: 'Senior Full Stack Developer',
      period: '2022 - Günümüz',
      description: 'React, Node.js ve TypeScript kullanarak enterprise seviyesinde web uygulamaları geliştirme. Mikroservis mimarisi tasarımı ve implementasyonu.'
    },
    {
      company: 'Digital Solutions Ltd.',
      position: 'Frontend Developer',
      period: '2020 - 2022',
      description: 'Modern frontend framework\'leri ile kullanıcı arayüzü geliştirme. REST API entegrasyonları ve responsive tasarım çalışmaları.'
    },
    {
      company: 'StartUp Innovations',
      position: 'Junior Developer',
      period: '2019 - 2020',
      description: 'Web uygulamaları geliştirme, kod review süreçlerine katılım ve agile metodolojiler ile proje yönetimi deneyimi.'
    }
  ];

  return (
    <section className="py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4 flex items-center justify-center gap-3">
            <Briefcase className="text-purple-400" size={36} />
            Çalışma Tecrübesi
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto rounded-full"></div>
        </div>
        <div className="space-y-6">
          {experiences.map((exp, idx) => (
            <div key={idx} className="bg-gradient-to-r from-purple-900/40 to-pink-900/20 rounded-2xl p-6 border border-purple-500/20 hover:border-purple-500/50 hover:shadow-lg hover:shadow-purple-500/20 transition-all">
              <div className="flex items-start gap-4">
                <div className="bg-gradient-to-br from-purple-500 to-pink-500 text-white p-3 rounded-xl">
                  <Briefcase size={24} />
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-start flex-wrap gap-2">
                    <div>
                      <h3 className="text-xl font-bold text-white">{exp.position}</h3>
                      <p className="text-pink-400 font-semibold">{exp.company}</p>
                    </div>
                    <span className="text-sm text-purple-300 flex items-center gap-1">
                      <Calendar size={16} />
                      {exp.period}
                    </span>
                  </div>
                  <p className="text-purple-200 mt-3">{exp.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;