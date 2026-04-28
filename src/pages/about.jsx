import CircularGallery from '../components/CircularGallery'
import ProfileCard from '../components/ProfileCard'

const hobbyItems = [
  { image: '/hobbies/Food.jpeg',   text: 'Food'     },
  { image: '/hobbies/CS2.png',     text: 'CS2'      },
  { image: '/hobbies/TV-Show.png', text: 'TV Show'  },
  { image: '/hobbies/Skiing.jpeg', text: 'Skiing'   },
  { image: '/hobbies/Tennis.JPG',  text: 'Tennis'   },
  { image: '/hobbies/Running.JPG', text: 'Running'  },
  { image: '/hobbies/Anime.png',   text: 'Anime'    },
  { image: '/hobbies/Cars.JPG',    text: 'Cars'     },
  { image: '/hobbies/Hiking.jpeg', text: 'Hiking'   },
]

function About() {
  return (
    <div className="text-white">

      {/* Bio */}
      <div className="max-w-5xl mx-auto px-6 pt-20">
        <section className="mb-16 flex flex-col md:flex-row gap-12 items-start">
          {/* Photo */}
          <div className="shrink-0 md:-ml-6 md:mt-6">
            <ProfileCard
              avatarUrl="/hobbies/Me.JPG"
              name="Bex Abila"
              title="Software Engineer"
              handle="bex222"
              status="Open to work"
              showUserInfo={false}
              enableTilt={true}
              behindGlowEnabled={true}
              behindGlowColor="rgba(100, 140, 255, 0.5)"
              innerGradient="linear-gradient(145deg,#1e3a8a88 0%,#3b82f644 100%)"
            />
          </div>

          {/* Text */}
          <div className="flex-1">
            <p className="text-xs tracking-[0.3em] uppercase text-white/40 mb-3">Who am I</p>
            <h1 className="text-4xl font-bold mb-8">I'm Bex, a software engineer</h1>
            <div className="space-y-5 text-blue-100/80 text-lg leading-relaxed">
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
            <div className="flex gap-4 mt-8">
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
            </div>
          </div>
        </section>
      </div>

      {/* Hobbies — full width */}
      <section className="mb-16">
        <div className="text-center mb-8">
          <p className="text-xs tracking-[0.3em] uppercase text-white/40 mb-2">Beyond the Code</p>
          <h2 className="text-4xl font-bold tracking-widest uppercase">Hobbies</h2>
        </div>
        <div style={{ height: '600px', width: '100%' }}>
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
      <div className="max-w-4xl mx-auto px-6 pb-20">

        {/* Favorite Song */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-6">Favorite Song</h2>
          <div className="bg-blue-800/50 rounded-2xl border border-white/10 p-6 flex items-center gap-5">
            <div className="w-14 h-14 bg-green-500/20 rounded-xl flex items-center justify-center shrink-0">
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7 text-green-400">
                <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
              </svg>
            </div>
            <div>
              <p className="font-medium">Song coming soon</p>
              <p className="text-sm text-blue-100/50">Spotify link will be added</p>
            </div>
          </div>
        </section>

        {/* Experience */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-6">Experience</h2>
          <div className="bg-blue-800/50 rounded-2xl border border-white/10 p-6">
            <p className="text-blue-100/40 text-sm">Experience details coming soon</p>
          </div>
        </section>

        {/* Education */}
        <section>
          <h2 className="text-2xl font-semibold mb-6">Education</h2>
          <div className="bg-blue-800/50 rounded-2xl border border-white/10 p-6">
            <div className="flex justify-between items-start flex-wrap gap-2">
              <div>
                <h3 className="text-lg font-semibold">Suffolk University</h3>
                <p className="text-blue-100/70 mt-1">B.S. Computer Science · Minor in Applied Mathematics</p>
              </div>
              <span className="text-sm text-blue-100/50">2023 – 2027</span>
            </div>
          </div>
        </section>

      </div>
    </div>
  )
}

export default About
