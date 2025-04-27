import ProjectCard from './ProjectCard'

const projects = [
  {
    title: 'Cabinet Painting in Calgary',
    imageSrc: '/services/cabinet-painting-oak-to white-and-teal-colour.jpg',
    location: 'Calgary, AB',
    href: '/gallery/cabinet-painting-project-mapple-to-offwhite',
  },
  // later you will add more projects here
]

export default function ProjectGalleryPage() {
  return (
    <section className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12'>
      <div className='text-center mb-12'>
        <h1 className='text-4xl font-bold mb-4'>Our Painting Projects</h1>
        <p className='text-lg text-gray-600 max-w-2xl mx-auto'>
          Explore some of the residential and commercial painting projects we've
          completed across Calgary and surrounding areas. See the quality of our
          work and get inspired for your next project!
        </p>
      </div>

      {/* Projects Grid */}
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            imageSrc={project.imageSrc}
            location={project.location}
            href={project.href}
          />
        ))}
      </div>
    </section>
  )
}
