import { Metadata } from 'next';
import { projects } from '@/lib/data';
import ProjectCard from '@/components/ProjectCard';

export const metadata: Metadata = {
  title: 'Proyectos',
  description: 'Explora mi colección de proyectos de desarrollo web y aplicaciones',
  openGraph: {
    title: 'Proyectos - Portafolio',
    description: 'Explora mi colección de proyectos de desarrollo web',
    images: ['/og-projects.jpg'],
  },
};

export default function ProjectsPage() {
  return (
    <main className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">Mis Proyectos</h1>
      <p className="text-lg text-gray-600 mb-12">
        Una colección de proyectos en los que he trabajado
      </p>

      <section
        aria-label="Listado de proyectos"
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </section>
    </main>
  );
}
