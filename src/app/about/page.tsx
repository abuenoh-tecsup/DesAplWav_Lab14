import { Metadata } from "next";
import Image from "next/image";
import { personalInfo } from "@/lib/data";

export const metadata: Metadata = {
  title: "Sobre Mí",
  description: `Conoce más sobre ${personalInfo.name}, ${personalInfo.title}`,
};

export default function AboutPage() {
  const skills = [
    "JavaScript/TypeScript",
    "React & Next.js",
    "Node.js & Express",
    "PostgreSQL & MongoDB",
    "Tailwind CSS",
    "Git & GitHub",
    "Docker",
    "AWS",
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-white mb-8">Sobre Mí</h1>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Avatar optimizado */}
          <div className="md:col-span-1">
            <div className="relative w-full aspect-square rounded-none overflow-hidden">
              <Image
                src={personalInfo.avatar}
                alt={personalInfo.name}
                fill
                priority
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/2wCEAA..."
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
          </div>

          {/* Descripción */}
          <div className="md:col-span-2">
            <h2 className="text-2xl font-bold text-white mb-4">
              ¡Hola! Soy {personalInfo.name}
            </h2>
            <div className="prose prose-invert text-gray-300 space-y-4">
              <p>
                Soy estudiante de Diseño y Desarrollo de Software en TECSUP, con
                enfoque en desarrollo backend y creación de soluciones
                eficientes y bien estructuradas.
              </p>

              <p>
                He trabajado con frameworks como <strong>Django</strong>,{" "}
                <strong>Spring</strong> y<strong> Express</strong>, aplicando
                buenas prácticas, arquitectura limpia y manejo de bases de datos
                relacionales y no relacionales.
              </p>

              <p>
                También tengo experiencia con metodologías ágiles, control de
                versiones con
                <strong> Git/GitHub</strong> y un nivel avanzado de inglés que
                me permite investigar y aprender con rapidez.
              </p>
            </div>
          </div>
        </div>

        {/* Skills */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-6">
            Habilidades Técnicas
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {skills.map((skill) => (
              <div
                key={skill}
                className="bg-neutral-900 p-4 rounded-none border border-neutral-700 hover:bg-neutral-800 transition"
              >
                <p className="font-semibold text-white">{skill}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
