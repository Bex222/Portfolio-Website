import CircularGallery from '../components/CircularGallery'
import ProfileCard from '../components/ProfileCard'
import { skills } from '../data/skills'

const hobbyItems = [
  { image: '/photos/Food.jpeg',   text: 'Cooking'     },
  { image: '/photos/CS2.png',     text: 'CS2'      },
  { image: '/photos/TV-Show.png', text: 'TV Show'  },
  { image: '/photos/Skiing.jpeg', text: 'Skiing'   },
  { image: '/photos/Tennis.JPG',  text: 'Tennis'   },
  { image: '/photos/Running.JPG', text: 'Running'  },
  { image: '/photos/Anime.png',   text: 'Anime'    },
  { image: '/photos/Cars.JPG',    text: 'Cars'     },
  { image: '/photos/Hiking.jpeg', text: 'Hiking'   },
]

function About() {
  return (
    <div className="text-white">

      {/* Bio */}
      <div className="max-w-5xl mx-auto px-4 md:px-6 pt-6 md:pt-20">
        <section className="mb-16 flex flex-col md:flex-row gap-8 md:gap-12 items-center md:items-start">
          {/* Photo */}
          <div className="shrink-0 self-center md:self-auto md:-ml-6 md:mt-6">
            <ProfileCard
              avatarUrl="/photos/Me.JPG"
              name="Bex Abila"
              title="Software Engineer"
              handle="bex222"
              status="Open to work"
              showUserInfo={true}
              contactText="Email Me"
              onContactClick={() => { window.location.href = 'mailto:bexultanabila@gmail.com' }}
              enableTilt={true}
              behindGlowEnabled={true}
              behindGlowColor="rgba(100, 140, 255, 0.5)"
              innerGradient="linear-gradient(145deg,#1e3a8a88 0%,#3b82f644 100%)"
            />
          </div>

          {/* Text */}
          <div className="flex-1 text-center md:text-left">
            <p className="text-xs tracking-[0.3em] uppercase text-white/40 mb-3">Who am I?</p>
            <h1 className="text-3xl md:text-4xl font-bold mb-6 md:mb-8">I'm Bex</h1>
            <div className="space-y-4 text-blue-100/80 text-base md:text-lg leading-relaxed">
              <p>
                I'm a Computer Science major and Applied Mathematics minor at Suffolk University.
              </p>
              <p>
                I got into math first, then realized how much it overlaps with computer science.
                In both, you're given a problem, there are existing tools and formulas to lean on,
                and when there aren't, you build your own.
              </p>
              <p>
                Outside of code, I love cooking and baking. I always had a passion for good food,
                but when I moved to the US, I had no choice but to learn to cook for myself. That's
                when it turned into a real interest, and now it's one of my favorite things to do.
                I'm planning to start vlogs around it too.
              </p>
              <p>
                Currently taking Discrete Mathematics II, Linear Algebra, and Software Engineering.
              </p>
            </div>

            {/* Social links */}
            <div className="flex flex-wrap gap-4 mt-8 items-center justify-center md:justify-start">
              <a
                href="https://www.linkedin.com/in/beksabila/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-12 h-12 rounded-xl bg-white/10 hover:bg-white/20 transition-colors"
                aria-label="LinkedIn"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a
                href="https://github.com/Bex222"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-12 h-12 rounded-xl bg-white/10 hover:bg-white/20 transition-colors"
                aria-label="GitHub"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
                </svg>
              </a>
              <a
                href="mailto:bexultanabila@gmail.com"
                className="flex items-center justify-center w-12 h-12 rounded-xl bg-white/10 hover:bg-white/20 transition-colors"
                aria-label="Email"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="m2 7 10 6 10-6" />
                </svg>
              </a>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 h-12 px-5 rounded-xl bg-blue-500/80 hover:bg-blue-500 text-sm font-medium transition-colors"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <path d="M7 10l5 5 5-5" />
                  <path d="M12 15V3" />
                </svg>
                Resume
              </a>
            </div>
          </div>
        </section>
      </div>

      {/* Hobbies — full width */}
      <section className="mb-16">
        <div className="text-center mb-0">
          <p className="text-xs tracking-[0.3em] uppercase text-white/40 mb-2">Beyond the Code</p>
          <h2 className="text-4xl font-bold tracking-widest uppercase">Hobbies</h2>
        </div>
        <div style={{ height: 'clamp(320px, 55vw, 600px)', width: '100%' }}>
          <CircularGallery
            items={hobbyItems}
            bend={3}
            textColor="#ffffff"
            borderRadius={0.05}
            scrollSpeed={2}
            scrollEase={0.02}
          />
        </div>
      </section>

      {/* Rest of content */}
      <div className="max-w-4xl mx-auto px-4 md:px-6 pb-20">

        {/* Favorite Song */}
        <section className="mb-16">
          <a
            href="https://open.spotify.com/track/6dhPR5SoQWhetJM1qvmeRA"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'block',
              position: 'relative',
              borderRadius: 28,
              overflow: 'hidden',
              maxWidth: 400,
              margin: '0 auto',
              height: 500,
              textDecoration: 'none',
            }}
          >
            {/* Full-card background image */}
            <img
              src="/photos/Batyr.png"
              alt=""
              style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }}
            />

            {/* Dark gradient over top so text is readable */}
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(0,0,0,0.82) 0%, rgba(0,0,0,0.55) 35%, rgba(0,0,0,0.1) 65%, transparent 100%)' }} />

            {/* Header */}
            <div style={{ position: 'relative', zIndex: 10, padding: '28px 28px 0' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10 }}>
                <div style={{ width: 28, height: 28, borderRadius: '50%', background: '#1DB954', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <svg viewBox="0 0 24 24" fill="white" style={{ width: 15, height: 15 }}>
                    <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
                  </svg>
                </div>
                <span style={{ fontSize: 11, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.6)', fontWeight: 500 }}>
                  Favorite Music
                </span>
              </div>
              <h3 style={{ fontSize: 26, fontWeight: 700, color: '#fff', lineHeight: 1.3, margin: 0 }}>
                Ер Тұран
              </h3>
              <p style={{ margin: '5px 0 0', fontSize: 14, color: 'rgba(255,255,255,0.5)' }}>
                by Turan Ethno-Folk Ensemble
              </p>
            </div>

            {/* Vinyl record — centered vertically in remaining space */}
            <div style={{ position: 'absolute', bottom: 40, left: 0, right: 0, zIndex: 10, display: 'flex', justifyContent: 'center' }}>
              <div style={{
                width: 210, height: 210, borderRadius: '50%', flexShrink: 0, position: 'relative',
                background: 'repeating-radial-gradient(circle at center, #252525 0px, #111 3px, #1c1c1c 4px, #0a0a0a 6px)',
                boxShadow: '0 20px 60px rgba(0,0,0,0.85)',
              }}>
                <div style={{ position: 'absolute', inset: 0, borderRadius: '50%', background: 'linear-gradient(135deg, rgba(255,255,255,0.07) 0%, transparent 55%)' }} />
                <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <div style={{ width: 80, height: 80, borderRadius: '50%', overflow: 'hidden', border: '3px solid #080808' }}>
                    <img src="/photos/Batyr.png" alt="Ер Тұран" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  </div>
                </div>
              </div>
            </div>
          </a>
        </section>

        {/* Experience */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Experience</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-xl mx-auto">

            {/* Card: Research Assistant */}
            <div className="group relative rounded-2xl overflow-hidden cursor-default aspect-[3/4]">
              <div className="absolute inset-0" style={{ background: 'linear-gradient(145deg, #1e3a8a, #0f172a)' }} />
              {/* Front */}
              <div className="absolute inset-0 z-10 flex flex-col items-center justify-center p-6 transition-opacity duration-300 group-hover:opacity-0">
                <div className="w-36 h-36 rounded-2xl overflow-hidden mb-4 border border-white/20" style={{ background: 'rgba(255,255,255,0.1)' }}>
                  <img src="/photos/suffolkicon.png" alt="Suffolk University" className="w-full h-full object-cover" />
                </div>
                <p className="text-white/40 text-xs tracking-widest uppercase mb-2">Research Assistant</p>
                <h3 className="text-white font-bold text-lg text-center">Suffolk University</h3>
              </div>
              {/* Hover overlay */}
              <div className="absolute inset-0 z-20 flex flex-col justify-between p-5 translate-y-full group-hover:translate-y-0 transition-transform duration-300" style={{ background: 'rgba(10,15,40,0.95)' }}>
                <div>
                  <p className="text-blue-400 text-xs tracking-widest uppercase mb-1">Research Assistant · Part-time</p>
                  <h3 className="text-white font-bold text-base mb-1">Suffolk University</h3>
                  <p className="text-white/40 text-xs mb-3">Apr 2026 – Present · Boston, MA · Hybrid</p>
                  <p className="text-white/75 text-sm leading-relaxed">Engineering Professor Xinxin Jiang's idea of an AI agent that tutors students on Probability &amp; Statistics (MATH-255).</p>
                </div>
                <span className="text-xs text-blue-400/60 font-medium">1 mo</span>
              </div>
            </div>

            {/* Card: Software Engineer Intern */}
            <div className="group relative rounded-2xl overflow-hidden cursor-default aspect-[3/4]">
              <div className="absolute inset-0" style={{ background: 'linear-gradient(145deg, #7c2d12, #1e0a2e)' }} />
              {/* Front */}
              <div className="absolute inset-0 z-10 flex flex-col items-center justify-center p-6 transition-opacity duration-300 group-hover:opacity-0">
                <div className="w-36 h-36 rounded-2xl overflow-hidden mb-4 border border-white/20" style={{ background: 'rgba(255,255,255,0.1)' }}>
                  <img src="/photos/collegiatex.png" alt="CollegiateX" className="w-full h-full object-cover" />
                </div>
                <p className="text-white/40 text-xs tracking-widest uppercase mb-2">SWE Intern</p>
                <h3 className="text-white font-bold text-lg text-center">CollegiateX</h3>
              </div>
              {/* Hover overlay */}
              <div className="absolute inset-0 z-20 flex flex-col justify-between p-5 translate-y-full group-hover:translate-y-0 transition-transform duration-300" style={{ background: 'rgba(20,8,8,0.95)' }}>
                <div>
                  <p className="text-orange-400 text-xs tracking-widest uppercase mb-1">Software Engineer Intern · Part-time</p>
                  <h3 className="text-white font-bold text-base mb-1">CollegiateX</h3>
                  <p className="text-white/40 text-xs mb-3">Oct 2025 – Dec 2025 · Boston, MA · Remote</p>
                  <p className="text-white/75 text-sm leading-relaxed">Built CollegiateX platform and AthleteLink — a NIL Marketplace for College Athletes.</p>
                  <div className="flex flex-wrap gap-1 mt-3">
                    {['Figma', 'Git', 'GitHub', 'Problem Solving'].map(s => (
                      <span key={s} className="text-xs px-2 py-0.5 rounded-full border border-orange-400/30 text-orange-300/70">{s}</span>
                    ))}
                  </div>
                </div>
                <span className="text-xs text-orange-400/60 font-medium">3 mos</span>
              </div>
            </div>

          </div>
        </section>

        {/* Education */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Education</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-xl mx-auto">

            {/* Card: Suffolk University */}
            <div className="group relative rounded-2xl overflow-hidden cursor-default aspect-[3/4]">
              <div className="absolute inset-0" style={{ background: 'linear-gradient(145deg, #164e63, #0f172a)' }} />
              {/* Front */}
              <div className="absolute inset-0 z-10 flex flex-col items-center justify-center p-6 transition-opacity duration-300 group-hover:opacity-0">
                <div className="w-36 h-36 rounded-2xl overflow-hidden mb-4 border border-white/20" style={{ background: 'rgba(255,255,255,0.1)' }}>
                  <img src="/photos/suffolkicon.png" alt="Suffolk University" className="w-full h-full object-cover" />
                </div>
                <p className="text-white/40 text-xs tracking-widest uppercase mb-2">B.S. Computer Science</p>
                <h3 className="text-white font-bold text-lg text-center">Suffolk University</h3>
              </div>
              {/* Hover overlay */}
              <div className="absolute inset-0 z-20 flex flex-col justify-between p-5 translate-y-full group-hover:translate-y-0 transition-transform duration-300" style={{ background: 'rgba(5,20,30,0.95)' }}>
                <div>
                  <p className="text-cyan-400 text-xs tracking-widest uppercase mb-1">Bachelor's Degree</p>
                  <h3 className="text-white font-bold text-base mb-1">Suffolk University</h3>
                  <p className="text-white/40 text-xs mb-3">Sep 2023 – May 2027 · Boston, MA</p>
                  <p className="text-white/75 text-sm leading-relaxed">Computer Science, Minor in Applied Mathematics.</p>
                  <div className="flex flex-wrap gap-1 mt-3">
                    {['Python', 'Java', 'OOP', 'Discrete Math', 'Linear Algebra'].map(s => (
                      <span key={s} className="text-xs px-2 py-0.5 rounded-full border border-cyan-400/30 text-cyan-300/70">{s}</span>
                    ))}
                  </div>
                </div>
                <span className="text-xs text-cyan-400/60 font-medium">GPA 3.3</span>
              </div>
            </div>

            {/* Card: Suleyman Demirel Lyceum */}
            <div className="group relative rounded-2xl overflow-hidden cursor-default aspect-[3/4]">
              <div className="absolute inset-0" style={{ background: 'linear-gradient(145deg, #064e3b, #0f172a)' }} />
              {/* Front */}
              <div className="absolute inset-0 z-10 flex flex-col items-center justify-center p-6 transition-opacity duration-300 group-hover:opacity-0">
                <div className="w-36 h-36 rounded-2xl overflow-hidden mb-4 border border-white/20" style={{ background: 'rgba(255,255,255,0.1)' }}>
                  <img src="/photos/suleymandemirel.png" alt="Suleyman Demirel Lyceum" className="w-full h-full object-cover" />
                </div>
                <p className="text-white/40 text-xs tracking-widest uppercase mb-2">High School Diploma</p>
                <h3 className="text-white font-bold text-base text-center">Suleyman Demirel Lyceum</h3>
              </div>
              {/* Hover overlay */}
              <div className="absolute inset-0 z-20 flex flex-col justify-between p-5 translate-y-full group-hover:translate-y-0 transition-transform duration-300" style={{ background: 'rgba(2,18,12,0.95)' }}>
                <div>
                  <p className="text-emerald-400 text-xs tracking-widest uppercase mb-1">High School Diploma</p>
                  <h3 className="text-white font-bold text-base mb-1">Suleyman Demirel Lyceum</h3>
                  <p className="text-white/40 text-xs mb-3">Sep 2021 – May 2022</p>
                  <p className="text-white/75 text-sm leading-relaxed">Mathematics specialization.</p>
                </div>
                <span className="text-xs text-emerald-400/60 font-medium">Grade 5.0</span>
              </div>
            </div>

          </div>
        </section>

        {/* Skills */}
        <section className="mb-16">
          <p className="text-xs tracking-[0.3em] uppercase text-white/40 mb-2">Tools &amp; Technologies</p>
          <h2 className="text-3xl font-bold mb-8">Skills</h2>
          <div className="flex flex-wrap gap-3">
            {skills.map(({ name, color }) => (
              <span
                key={name}
                className="px-4 py-2 rounded-full text-sm font-medium border transition-colors duration-200"
                style={{
                  borderColor: `${color}40`,
                  color,
                  background: `${color}12`,
                }}
              >
                {name}
              </span>
            ))}
          </div>
        </section>

      </div>
    </div>
  )
}

export default About
