import Image from "next/image";
import Link from "next/link";
import { projects, personalInfo } from "@/lib/data";
import ProjectCard from "@/components/ProjectCard";
import "./globals.css";

export default function Home() {
  const featuredProjects = projects.filter((p) => p.featured);

  return (
    <div className="mx-auto">
      {/* Hero Section */}
      <section className="bg-grid py-20">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-4 items-center">
          {/* Imagen a la izquierda casi pegada al texto */}
          <div className="flex justify-center md:justify-center">
            <div className="relative w-90 h-90 bg-white p-2 border-4">
              <Image
                src={personalInfo.avatar}
                alt={personalInfo.name}
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          {/* Información a la derecha */}
          <div className="max-w-xl text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-3">
              {personalInfo.name}
            </h1>

            <p className="text-xl mb-3">{personalInfo.title}</p>

            <p className="text-lg  mb-6 leading-relaxed">
              {personalInfo.description}
            </p>

            <div className="flex gap-4">
              <Link
                href="/projects"
                className="bg-blue-600 text-white px-6 py-3 hover:bg-blue-700 transition border border-blue-700"
              >
                Ver Proyectos
              </Link>

              <Link
                href="/about"
                className="bg-white text-gray-900 px-6 py-3 hover:bg-gray-100 transition border border-gray-300"
              >
                Sobre Mí
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="bg-dark-smooth py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            Proyectos Destacados
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
