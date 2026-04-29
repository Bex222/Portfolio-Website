import { useState, useEffect } from 'react'

const projects = [
  {
    name: 'Portfolio Website',
    tagline: 'Personal Portfolio · Built from scratch',
    description:
      'My personal portfolio built with React, Vite, and Tailwind CSS. Features interactive 3D components, GSAP animations, a WebGL hobby gallery, and custom UI components.',
    tech: ['React', 'Vite', 'Tailwind CSS', 'GSAP', 'OGL'],
    github: 'https://github.com/Bex222/Portfolio-Website',
    demo: '#',
    image: '/photos/portfoliowebsite.png',
  },
  {
    name: 'OweBuddy',
    tagline: 'Web App · Built with friends',
    description:
      'A split bill web app that makes it easy to track shared expenses with friends. Built collaboratively, OweBuddy simplifies who owes what so you can focus on the fun.',
    tech: ['React', 'Node.js', 'JavaScript'],
    github: '#',
    demo: '#',
    image: null,
  },
]

function Project() {
  const [lightbox, setLightbox] = useState(null)

  useEffect(() => {
    const onKey = e => { if (e.key === 'Escape') setLightbox(null) }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  return (
    <>
      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-6"
          style={{ background: 'rgba(0,0,0,0.85)', backdropFilter: 'blur(6px)' }}
          onClick={() => setLightbox(null)}
        >
          <img
            src={lightbox}
            alt="Project preview"
            className="max-w-full max-h-full rounded-2xl shadow-2xl"
            style={{ maxHeight: '90vh', maxWidth: '90vw' }}
            onClick={e => e.stopPropagation()}
          />
          <button
            className="absolute top-5 right-5 text-white/60 hover:text-white text-3xl leading-none"
            onClick={() => setLightbox(null)}
            aria-label="Close"
          >
            ×
          </button>
        </div>
      )}

    <div className="max-w-4xl mx-auto px-6 py-20 text-white">
      <p className="text-xs tracking-[0.3em] uppercase text-white/40 mb-3">Work</p>
      <h1 className="text-4xl font-bold mb-10">Projects</h1>
      <div className="space-y-6">
        {projects.map(project => (
          <div
            key={project.name}
            className="rounded-2xl border border-white/10 overflow-hidden flex flex-col md:flex-row"
            style={{ background: 'rgba(30, 41, 80, 0.35)' }}
          >
            {/* Screenshot */}
            <div className="md:w-72 shrink-0 overflow-hidden" style={{ minHeight: 200 }}>
              {project.image ? (
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover object-top cursor-zoom-in"
                  style={{ minHeight: 200 }}
                  onClick={() => setLightbox(project.image)}
                />
              ) : (
                <div
                  className="w-full h-full flex items-center justify-center"
                  style={{ minHeight: 200, background: 'linear-gradient(145deg, #1e2a4a, #0f172a)' }}
                >
                  <span className="text-white/20 text-sm">No preview</span>
                </div>
              )}
            </div>

            {/* Info */}
            <div className="flex flex-col justify-between p-8 flex-1">
              <div>
                <div className="flex items-start justify-between flex-wrap gap-4 mb-4">
                  <div>
                    <h2 className="text-2xl font-semibold">{project.name}</h2>
                    <p className="text-blue-100/50 mt-1 text-sm">{project.tagline}</p>
                  </div>
                  <div className="flex gap-3">
                    {project.github !== '#' && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-sm font-medium transition-colors"
                      >
                        GitHub
                      </a>
                    )}
                    {project.demo !== '#' && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 rounded-lg bg-blue-500/80 hover:bg-blue-500 text-sm font-medium transition-colors"
                      >
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
                <p className="text-blue-100/70 leading-relaxed text-sm">{project.description}</p>
              </div>
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
          </div>
        ))}
      </div>
    </div>
    </>
  )
}

export default Project
