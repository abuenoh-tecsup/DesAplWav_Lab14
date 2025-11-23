import Image from "next/image";
import Link from "next/link";
import { Project } from "@/types";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      aria-label={`Ver proyecto ${project.title}`}
      className="group block bg-white border border-gray-200 hover:border-blue-500 shadow-sm hover:shadow-md transition-all duration-300"
    >
      {/* Imagen en relación 4:3 con overflow controlado */}
      <div className="relative aspect-4/3 overflow-hidden">
        <Image
          src={project.image}
          alt={`Proyecto ${project.title}`}
          fill
          loading="lazy"
          className="object-cover group-hover:scale-105 transform transition-transform duration-300"
          sizes="(max-width: 768px) 100vw,(max-width: 1200px) 50vw,33vw"
        />
      </div>

      {/* Texto */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
          {project.title}
        </h3>

        <p className="text-gray-600 mb-4 line-clamp-2">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2">
          {project.technologies.slice(0, 3).map((tech) => (
            <span
              key={tech}
              className="text-xs bg-gray-100 text-gray-700 px-2 py-1 border border-gray-300"
            >
              {tech}
            </span>
          ))}

          {project.technologies.length > 3 && (
            <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 border border-gray-300">
              +{project.technologies.length - 3}
            </span>
          )}
        </div>
      </div>
    </Link>
  );
}
