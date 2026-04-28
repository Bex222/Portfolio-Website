const courses = [
  {
    name: 'Data Structures & Algorithms',
    subject: 'CS',
    description:
      'Arrays, linked lists, trees, graphs, sorting, searching, and algorithmic complexity analysis.',
  },
  {
    name: 'Software Engineering',
    subject: 'CS',
    description:
      'Software development lifecycle, design patterns, agile methodologies, testing, and team collaboration.',
  },
  {
    name: 'Discrete Mathematics II',
    subject: 'MATH',
    description:
      'Graph theory, combinatorics, probability, logic, and proofs with applications in computer science.',
  },
]

function Classes() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-20 text-white">
      <h1 className="text-4xl font-bold mb-10">Classes</h1>
      <div className="space-y-4">
        {courses.map(course => (
          <div key={course.name} className="bg-blue-800/50 rounded-2xl border border-white/10 p-6">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h2 className="text-lg font-semibold">{course.name}</h2>
                <p className="text-blue-100/70 mt-2 text-sm leading-relaxed">{course.description}</p>
              </div>
              <span className="text-xs font-medium px-2 py-1 rounded-md bg-blue-900/60 text-blue-300 border border-white/10 shrink-0">
                {course.subject}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Classes
