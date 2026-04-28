const projects = [
  {
    name: 'OweBuddy',
    tagline: 'Web App · Built with friends',
    description:
      'A split bill web app that makes it easy to track shared expenses with friends. Built collaboratively, OweBuddy simplifies who owes what so you can focus on the fun.',
    tech: ['React', 'Node.js', 'JavaScript'],
    github: '#',
    demo: '#',
  },
]

function Project() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-20 text-white">
      <h1 className="text-4xl font-bold mb-10">Projects</h1>
      <div className="space-y-6">
        {projects.map(project => (
          <div key={project.name} className="bg-blue-800/50 rounded-2xl border border-white/10 p-8">
            <div className="flex items-start justify-between flex-wrap gap-4">
              <div>
                <h2 className="text-2xl font-semibold">{project.name}</h2>
                <p className="text-blue-100/60 mt-1 text-sm">{project.tagline}</p>
              </div>
              <div className="flex gap-3">
                <a
                  href={project.github}
                  className="px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-sm font-medium transition-colors"
                >
                  GitHub
                </a>
                <a
                  href={project.demo}
                  className="px-4 py-2 rounded-lg bg-blue-500/80 hover:bg-blue-500 text-sm font-medium transition-colors"
                >
                  Live Demo
                </a>
              </div>
            </div>
            <p className="mt-4 text-blue-100/80 leading-relaxed">{project.description}</p>
            <div className="mt-6 flex flex-wrap gap-2">
              {project.tech.map(t => (
                <span
                  key={t}
                  className="px-3 py-1 rounded-full bg-blue-900/60 text-blue-200 text-xs font-medium border border-white/10"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Project
