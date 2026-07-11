import { Outlet, useNavigate } from 'react-router-dom'
import { GoHome, GoPerson, GoCode, GoMortarBoard, GoPencil } from 'react-icons/go'
import Dock from './Dock'
import ShapeGrid from './ShapeGrid'
import Footer from './Footer'

function Layout() {
  const navigate = useNavigate()

  const navItems = [
    { icon: <GoHome size={20} />,   label: 'Home',     onClick: () => navigate('/') },
    { icon: <GoPerson size={20} />, label: 'About',    onClick: () => navigate('/about') },
    { icon: <GoCode size={20} />,        label: 'Projects', onClick: () => navigate('/projects') },
    { icon: <GoMortarBoard size={20} />, label: 'Classes',  onClick: () => navigate('/classes') },
    { icon: <GoPencil size={20} />,      label: 'Blog',     onClick: () => navigate('/blog') },
  ]

  return (
    <div className="min-h-screen bg-[#120F17]" style={{ position: 'relative' }}>
      {/* Full-page ShapeGrid background */}
      <div style={{ position: 'fixed', inset: 0, zIndex: 0, pointerEvents: 'none' }}>
        <ShapeGrid
          direction="diagonal"
          speed={0.4}
          squareSize={40}
          borderColor="#222"
          hoverFillColor="#1e1a2e"
          shape="square"
          hoverTrailAmount={4}
        />
      </div>

      {/* Top dock */}
      <div style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50, height: '80px', pointerEvents: 'none' }}>
        <div style={{ pointerEvents: 'auto' }}>
          <Dock
            items={navItems}
            panelHeight={56}
            baseItemSize={44}
            magnification={68}
            distance={160}
          />
        </div>
      </div>

      {/* Page content */}
      <main className="relative pt-20" style={{ zIndex: 1 }}>
        <Outlet />
        <Footer />
      </main>
    </div>
  )
}

export default Layout
