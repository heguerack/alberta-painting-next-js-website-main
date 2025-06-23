import ProjectCard from "./ProjectCard";
import type { Metadata, Viewport } from "next";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1.0,
};
export const metadata: Metadata = {
  title: "Gallery | Alberta Colour Painting",
  description:
    "Looking for affordable Calgary painters? Our top-rated house painting company in Calgary offers professional interior and exterior painting services to meet all your needs.",
  viewport: "width=device-width, initial-scale=1.0",
  keywords: [
    "calgary painters",
    "painting companies calgary",
    "painting companies calgary alberta",
    "calgary painting companies",
    "house painting calgary",
    "painting services calgary",
    "painters in calgary alberta",
    "painting contractors calgary",
    "alberta painting contractors calgary",
  ],
  alternates: {
    canonical: "https://www.albertacolourpainting.com",
  },
  openGraph: {
    title: "Need Calgary Painters?",
    description:
      "Book your free estimate today with Alberta Colour Painting, the top-rated painting company in Calgary.",
    images: [
      {
        url: "https://res.cloudinary.com/alberta-colour-painting/image/upload/v1672799089/home/awards/best-of-the-best-award-homestars-winner-2022-white-version_psaofg.webp",
      },
    ],
    url: "https://www.albertacolourpainting.com",
    siteName: "Alberta Colour Painting",
    type: "website",
  },
};
const projects = [
  {
    title: "Walls: From Brown to Off-White",
    imageSrc:
      "/painting-projects/interior-wall-painting-brown-to-off-white/A2218127_6.webp",
    location: "Mckenzie Towne, Calgary, AB",
    href: "/gallery//interior-wall-paining-brown-to-off-white",
  },
];

export default function ProjectGalleryPage() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4 text-black">
          Our Painting Projects
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Explore some of the residential and commercial painting projects we've
          completed across Calgary and surrounding areas. See the quality of our
          work and get inspired for your next project!
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
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
  );
}
