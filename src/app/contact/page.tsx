import { Metadata } from "next";
import { personalInfo } from "@/lib/data";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contacto",
  description: `Ponte en contacto con ${personalInfo.name}`,
};

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-white mb-4">Contacto</h1>
        <p className="text-lg text-gray-300 mb-12">
          Si deseas comunicarte conmigo, puedes usar el formulario o cualquiera
          de mis redes de contacto.
        </p>

        <div className="grid md:grid-cols-2 gap-10">
          {/* ---- Columna izquierda: Info de contacto ---- */}
          <div className="space-y-6">
            <div className="bg-neutral-900 p-6 rounded-none border border-neutral-700 shadow-md">
              <h2 className="text-2xl font-bold text-white mb-4">
                Información de Contacto
              </h2>

              <ul className="space-y-4 text-gray-300">
                <li>
                  <span className="font-semibold text-white">Email:</span>{" "}
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="text-blue-400 hover:underline"
                  >
                    {personalInfo.email}
                  </a>
                </li>

                <li>
                  <span className="font-semibold text-white">LinkedIn:</span>{" "}
                  <Link
                    href={personalInfo.linkedin}
                    target="_blank"
                    className="text-blue-400 hover:underline"
                  >
                    Ver perfil
                  </Link>
                </li>

                <li>
                  <span className="font-semibold text-white">GitHub:</span>{" "}
                  <Link
                    href={personalInfo.github}
                    target="_blank"
                    className="text-blue-400 hover:underline"
                  >
                    {personalInfo.github.replace("https://", "")}
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* ---- Columna derecha: Formulario ---- */}
          <div>
            <form
              action="#"
              method="POST"
              className="bg-neutral-900 p-6 rounded-none border border-neutral-700 shadow-md space-y-6"
            >
              <h2 className="text-2xl font-bold text-white mb-4">
                Envíame un Mensaje
              </h2>

              <div>
                <label className="block text-white font-semibold mb-2">
                  Nombre
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  className="w-full p-3 border border-neutral-700 bg-neutral-800 text-white rounded-none focus:outline-none focus:ring focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-white font-semibold mb-2">
                  Correo Electrónico
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  className="w-full p-3 border border-neutral-700 bg-neutral-800 text-white rounded-none focus:outline-none focus:ring focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-white font-semibold mb-2">
                  Mensaje
                </label>
                <textarea
                  name="message"
                  rows={5}
                  required
                  className="w-full p-3 border border-neutral-700 bg-neutral-800 text-white rounded-none focus:outline-none focus:ring focus:ring-blue-500 resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white font-semibold py-3 rounded-none hover:bg-blue-700 transition-colors"
              >
                Enviar Mensaje
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
