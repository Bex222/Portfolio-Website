import { useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'motion/react'
import VariableProximity from '../components/VariableProximity'
import { projects } from '../data/projects'
import { skills } from '../data/skills'

const EMAIL = 'bexultanabila@gmail.com'
const LINKEDIN = 'https://www.linkedin.com/in/beksabila/'
const GITHUB = 'https://github.com/Bex222'

const roleTags = ['Software Engineer', "CS @ Suffolk '27", 'Boston, MA', 'Open to work']

// Light scroll-reveal wrapper to match the site's animated feel
function Reveal({ children, delay = 0, className = '' }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.5, delay, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  )
}

function Home() {
  const heroRef = useRef(null)
  const navigate = useNavigate()

  return (
    <div className="text-white">

      {/* Hero */}
      <section
        ref={heroRef}
        className="max-w-4xl mx-auto text-center px-4 md:px-6 pt-16 md:pt-32 pb-10"
      >
        <VariableProximity
          label="Hi, I'm Bex Abila."
          className="block text-4xl font-semibold leading-tight sm:text-5xl lg:text-7xl"
          fromFontVariationSettings="'wght' 400, 'opsz' 9"
          toFontVariationSettings="'wght' 1000, 'opsz' 40"
          containerRef={heroRef}
          radius={100}
          falloff="linear"
        />

        {/* Role tags */}
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          {roleTags.map(tag => (
            <span
              key={tag}
              className="px-3 py-1 rounded-full text-xs sm:text-sm font-medium border border-blue-400/30 text-blue-200/90 bg-blue-500/10"
            >
              {tag}
            </span>
          ))}
        </div>

        <p className="mx-auto mt-6 max-w-3xl text-base text-blue-100/80 sm:text-lg">
          I'm a Computer Science student at Suffolk University, Class of 2027, with a minor in Applied Mathematics.
          I specialize in building modern web and mobile applications using React, Next.js, and TypeScript,
          with a strong foundation in data structures, algorithms, and software design.
        </p>

        {/* CTA buttons */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <button
            onClick={() => navigate('/projects')}
            className="px-6 py-3 rounded-xl bg-blue-500/90 hover:bg-blue-500 text-sm font-semibold transition-colors"
          >
            View Work
          </button>
          <a
            href={`mailto:${EMAIL}`}
            className="px-6 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-sm font-semibold transition-colors"
          >
            Get in Touch
          </a>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 rounded-xl border border-white/15 hover:bg-white/10 text-sm font-semibold transition-colors"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <path d="M7 10l5 5 5-5" />
              <path d="M12 15V3" />
            </svg>
            Resume
          </a>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="max-w-5xl mx-auto px-4 md:px-6 py-16">
        <Reveal>
          <div className="flex items-end justify-between gap-4 mb-8">
            <div>
              <p className="text-xs tracking-[0.3em] uppercase text-white/40 mb-2">Selected Work</p>
              <h2 className="text-3xl font-bold">Featured Projects</h2>
            </div>
            <button
              onClick={() => navigate('/projects')}
              className="text-sm text-blue-300 hover:text-blue-200 transition-colors shrink-0"
            >
              See all projects →
            </button>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {projects.map((project, i) => (
            <Reveal key={project.name} delay={i * 0.1}>
              <div
                className="h-full rounded-2xl border border-white/10 overflow-hidden flex flex-col"
                style={{ background: 'rgba(30, 41, 80, 0.35)' }}
              >
                {project.image && (
                  <div className="h-44 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.name}
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                )}
                <div className="flex flex-col flex-1 p-5">
                  <h3 className="text-xl font-semibold">{project.name}</h3>
                  <p className="text-blue-100/50 mt-1 text-sm">{project.tagline}</p>
                  <p className="text-blue-100/70 text-sm leading-relaxed mt-3 flex-1">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {project.tech.map(t => (
                      <span
                        key={t}
                        className="px-3 py-1 rounded-full bg-blue-900/60 text-blue-200 text-xs font-medium border border-white/10"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-3 mt-5">
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
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Tech stack strip */}
      <section className="max-w-5xl mx-auto px-4 md:px-6 py-12">
        <Reveal>
          <p className="text-xs tracking-[0.3em] uppercase text-white/40 mb-5 text-center">
            Tools &amp; Technologies
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {skills.map(({ name, color }) => (
              <span
                key={name}
                className="px-4 py-2 rounded-full text-sm font-medium border transition-colors duration-200"
                style={{ borderColor: `${color}40`, color, background: `${color}12` }}
              >
                {name}
              </span>
            ))}
          </div>
        </Reveal>
      </section>

      {/* Closing CTA */}
      <section className="max-w-3xl mx-auto px-4 md:px-6 py-16 text-center">
        <Reveal>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Let's build something.</h2>
          <p className="text-blue-100/70 mb-8 max-w-xl mx-auto">
            I'm currently open to internships and software engineering opportunities.
            Have a project in mind or just want to say hi? My inbox is always open.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href={`mailto:${EMAIL}`}
              className="px-6 py-3 rounded-xl bg-blue-500/90 hover:bg-blue-500 text-sm font-semibold transition-colors"
            >
              Email Me
            </a>
            <a
              href={LINKEDIN}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-sm font-semibold transition-colors"
            >
              LinkedIn
            </a>
            <a
              href={GITHUB}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-sm font-semibold transition-colors"
            >
              GitHub
            </a>
          </div>
        </Reveal>
      </section>

    </div>
  )
}

export default Home
