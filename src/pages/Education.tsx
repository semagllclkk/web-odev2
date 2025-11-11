import { GraduationCap, Calendar } from 'lucide-react';

const Education = () => {
  const educations = [
    {
      school: 'Ankara Üniversitesi',
      degree: 'Bilgisayar Mühendisliği, Yüksek Lisans',
      period: '2020 - 2022',
      gpa: '3.85/4.00'
    },
    {
      school: 'Orta Doğu Teknik Üniversitesi',
      degree: 'Bilgisayar Mühendisliği, Lisans',
      period: '2016 - 2020',
      gpa: '3.52/4.00'
    }
  ];

  return (
    <section className="py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4 flex items-center justify-center gap-3">
            <GraduationCap className="text-pink-400" size={36} />
            Eğitim
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-pink-400 to-purple-400 mx-auto rounded-full"></div>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {educations.map((edu, idx) => (
            <div key={idx} className="bg-gradient-to-br from-purple-900/50 to-pink-900/30 rounded-2xl p-6 border border-pink-500/20 hover:border-pink-500/50 hover:shadow-lg hover:shadow-pink-500/20 transition-all">
              <div className="flex items-start gap-4">
                <div className="bg-gradient-to-br from-pink-500 to-purple-500 text-white p-3 rounded-xl">
                  <GraduationCap size={24} />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-2">{edu.school}</h3>
                  <p className="text-pink-200 mb-2">{edu.degree}</p>
                  <div className="flex items-center gap-4 text-sm text-purple-300">
                    <span className="flex items-center gap-1">
                      <Calendar size={16} />
                      {edu.period}
                    </span>
                    <span className="font-semibold text-pink-400">GPA: {edu.gpa}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;