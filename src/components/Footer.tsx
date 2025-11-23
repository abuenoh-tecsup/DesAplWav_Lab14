import { personalInfo } from '@/lib/data';
import "../app/globals.css";

export default function Footer() {
  return (
    <footer className="bg-darker-smooth text-white py-8 ">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-200 mb-4 md:mb-0">
            © {new Date().getFullYear()} {personalInfo.name}. Todos los derechos
            reservados.
          </p>
          <div className="flex gap-6 text-gray-200">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className=" hover:text-white transition"
              aria-label="GitHub"
            >
              GitHub
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className=" hover:text-white transition"
              aria-label="LinkedIn"
            >
              LinkedIn
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className=" hover:text-white transition"
              aria-label="Email"
            >
              Email
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}