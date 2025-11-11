import { Code } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      category: 'Frontend',
      skills: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Redux', 'Vue.js'],
      icon: '💅'
    },
    {
      category: 'Backend',
      skills: ['Node.js', 'Express', 'MongoDB', 'PostgreSQL', 'REST API', 'GraphQL'],
      icon: '⚙️'
    },
    {
      category: 'Araçlar',
      skills: ['Git', 'Docker', 'AWS', 'CI/CD', 'Jest', 'Webpack'],
      icon: '🛠️'
    }
  ];

  return (
    <section className="py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4 flex items-center justify-center gap-3">
            <Code className="text-pink-400" size={36} />
            Yetenekler
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-pink-400 to-purple-400 mx-auto rounded-full"></div>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((cat, idx) => (
            <div key={idx} className="bg-gradient-to-br from-purple-900/50 to-pink-900/30 rounded-2xl p-6 border border-pink-500/20 hover:border-pink-500/50 hover:shadow-lg hover:shadow-pink-500/20 transition-all">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl">{cat.icon}</span>
                <h3 className="text-xl font-bold text-white">{cat.category}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill, sidx) => (
                  <span
                    key={sidx}
                    className="px-3 py-1 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-full text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;