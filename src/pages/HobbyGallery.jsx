import { useParams, Link, Navigate } from 'react-router-dom'
import CircularGallery from '../components/CircularGallery'
import { hobbyData } from '../data/hobbies'

export default function HobbyGallery() {
  const { hobby } = useParams()
  const data = hobbyData[hobby]

  if (!data) return <Navigate to="/about" replace />

  return (
    <div className="flex flex-col text-white" style={{ height: 'calc(100vh - 5rem)' }}>
      <div className="flex items-center gap-4 px-8 pt-8 pb-4 shrink-0">
        <Link
          to="/about"
          className="flex items-center gap-2 text-blue-200/70 hover:text-white transition-colors text-sm"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </svg>
          Back
        </Link>
        <h1 className="text-2xl font-bold">{data.title}</h1>
      </div>
      <div className="flex-1 min-h-0">
        <CircularGallery
          items={data.items}
          bend={3}
          textColor="#ffffff"
          borderRadius={0.05}
          scrollSpeed={2}
          scrollEase={0.02}
        />
      </div>
    </div>
  )
}
