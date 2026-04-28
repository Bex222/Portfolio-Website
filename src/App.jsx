import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/home'
import About from './pages/about'
import Project from './pages/project'
import Classes from './pages/classes'
function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="projects" element={<Project />} />
        <Route path="classes" element={<Classes />} />
      </Route>
    </Routes>
  )
}

export default App
