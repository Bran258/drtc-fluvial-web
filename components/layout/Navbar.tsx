"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const linkClass =
    "font-bold uppercase text-sm transition hover:text-blue-900";

  const isActive = (path: string) => {
    if (path === "/") return pathname === "/";
    return pathname.startsWith(path);
  };

  const closeMenu = () => setOpen(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md shadow-sm">
      <div className="flex justify-between items-center px-6 md:px-8 h-20 max-w-screen-2xl mx-auto">

        {/* LOGO */}
        <Link
          href="/"
          className="text-xl font-black text-blue-900 uppercase"
        >
          DRTC Fluvial
        </Link>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex gap-6 items-center">
          <Link href="/" className={`${linkClass} ${isActive("/") ? "text-blue-700" : "text-slate-600"}`}>
            Inicio
          </Link>

          <Link href="/tramites" className={`${linkClass} ${isActive("/tramites") ? "text-blue-700" : "text-slate-600"}`}>
            Trámites
          </Link>

          <Link href="/requisitos" className={`${linkClass} ${isActive("/requisitos") ? "text-blue-700" : "text-slate-600"}`}>
            Validar requisitos
          </Link>

          <Link href="/citas" className={`${linkClass} ${isActive("/citas") ? "text-blue-700" : "text-slate-600"}`}>
            Agendar cita
          </Link>

          <Link href="/consulta" className={`${linkClass} ${isActive("/consulta") ? "text-blue-700" : "text-slate-600"}`}>
            Consultar trámite
          </Link>
        </div>

        {/* CTA DESKTOP */}
        <Link
          href="/login"
          className="hidden md:block px-6 py-2 bg-blue-900 text-white rounded-xl font-semibold hover:bg-blue-800 transition"
        >
          Iniciar Sesión
        </Link>

        {/* MOBILE BUTTON */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition"
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden bg-white border-t shadow-md">
          <div className="flex flex-col px-6 py-4 gap-4">

            <Link onClick={closeMenu} href="/" className={linkClass}>
              Inicio
            </Link>

            <Link onClick={closeMenu} href="/tramites" className={linkClass}>
              Trámites
            </Link>

            <Link onClick={closeMenu} href="/requisitos" className={linkClass}>
              Validar requisitos
            </Link>

            <Link onClick={closeMenu} href="/citas" className={linkClass}>
              Agendar cita
            </Link>

            <Link onClick={closeMenu} href="/consulta" className={linkClass}>
              Consultar trámite
            </Link>

            <Link
              onClick={closeMenu}
              href="/login"
              className="mt-2 px-4 py-2 bg-blue-900 text-white rounded-xl text-center font-semibold"
            >
              Iniciar Sesión
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}