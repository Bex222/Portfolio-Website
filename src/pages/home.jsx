import { useRef } from 'react'
import VariableProximity from '../components/VariableProximity'

function Home() {
  const heroRef = useRef(null)

  return (
    <div className="flex items-start justify-center min-h-[calc(100vh-5rem)] px-4 md:px-6 pt-16 md:pt-36">
      <section ref={heroRef} className="max-w-4xl text-center text-white">
        <VariableProximity
          label="Hi, I'm Bex Abila."
          className="block text-4xl font-semibold leading-tight sm:text-5xl lg:text-7xl"
          fromFontVariationSettings="'wght' 400, 'opsz' 9"
          toFontVariationSettings="'wght' 1000, 'opsz' 40"
          containerRef={heroRef}
          radius={100}
          falloff="linear"
        />
        <p className="mx-auto mt-6 max-w-3xl text-base text-blue-100/80 sm:text-lg">
          I'm a Computer Science student at Suffolk University, Class of 2027, with a minor in Applied Mathematics.
          I specialize in building modern web and mobile applications using React, Next.js, and TypeScript,
          with a strong foundation in data structures, algorithms, and software design.
        </p>
      </section>
    </div>
  )
}

export default Home
