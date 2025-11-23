"use client";

import Link from "next/link";
import { personalInfo } from "@/lib/data";
import { useState } from "react";
import "../app/globals.css";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-darker-smooth shadow-sm sticky top-0 z-50 text-gray-200">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Nombre */}
          <Link
            href="/"
            className="text-2xl font-bold font-display hover:text-white"
          >
            {personalInfo.name}
          </Link>

          {/* BOTÓN HAMBURGUESA (solo móvil) */}
          <button
            className="md:hidden text-gray-200 hover:text-white"
            onClick={() => setOpen(!open)}
            aria-label="Abrir menú"
          >
            {open ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-7 w-7"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-7 w-7"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>

          {/* Menú normal en escritorio */}
          <ul className="hidden md:flex gap-6">
            <li><Link href="/" className="hover:text-white transition">Inicio</Link></li>
            <li><Link href="/projects" className="hover:text-white transition">Proyectos</Link></li>
            <li><Link href="/about" className="hover:text-white transition">Sobre Mí</Link></li>
            <li><Link href="/contact" className="hover:text-white transition">Contacto</Link></li>
          </ul>
        </div>

        {/* Menú desplegable en móvil */}
        {open && (
          <ul className="md:hidden mt-4 flex flex-col gap-4 bg-neutral-900 p-4 border border-neutral-700 rounded-none">
            <li><Link href="/" onClick={() => setOpen(false)} className="block text-gray-200 hover:text-white">Inicio</Link></li>
            <li><Link href="/projects" onClick={() => setOpen(false)} className="block text-gray-200 hover:text-white">Proyectos</Link></li>
            <li><Link href="/about" onClick={() => setOpen(false)} className="block text-gray-200 hover:text-white">Sobre Mí</Link></li>
            <li><Link href="/contact" onClick={() => setOpen(false)} className="block text-gray-200 hover:text-white">Contacto</Link></li>
          </ul>
        )}
      </nav>
    </header>
  );
}
