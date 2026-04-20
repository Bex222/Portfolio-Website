import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="bg-blue-900 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <Link to="/" className="text-2xl font-bold">
              Portfolio
            </Link>
          </div>
          <div className="flex space-x-8">
            <Link to="/" className="hover:text-blue-200 transition">
              Landing
            </Link>
            <Link to="/about" className="hover:text-blue-200 transition">
              About
            </Link>
            <Link to="/projects" className="hover:text-blue-200 transition">
              Projects
            </Link>
            <Link to="/classes" className="hover:text-blue-200 transition">
              Classes
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
