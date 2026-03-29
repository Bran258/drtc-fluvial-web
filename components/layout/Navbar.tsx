"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const linkClass =
    "font-bold uppercase text-sm transition hover:text-blue-900";

  // ✅ FIX: detecta rutas base y subrutas correctamente
  const isActive = (path: string) => {
    if (path === "/") return pathname === "/";

    return pathname === path || pathname.startsWith(path + "/");
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md shadow-sm">
      <div className="flex justify-between items-center px-8 h-20 max-w-screen-2xl mx-auto">

        {/* LOGO */}
        <Link href="/" className="text-xl font-black text-blue-900 uppercase">
          DRTC Fluvial
        </Link>

        {/* LINKS */}
        <div className="hidden md:flex gap-6 items-center">
          <Link
            href="/"
            className={`${linkClass} ${
              isActive("/") ? "text-blue-700 border-b-2 border-blue-700 pb-1" : "text-slate-600"
            }`}
          >
            Inicio
          </Link>

          <Link
            href="/tramites"
            className={`${linkClass} ${
              isActive("/tramites") ? "text-blue-700 border-b-2 border-blue-700 pb-1" : "text-slate-600"
            }`}
          >
            Trámites
          </Link>

          <Link
            href="/requisitos"
            className={`${linkClass} ${
              isActive("/requisitos") ? "text-blue-700 border-b-2 border-blue-700 pb-1" : "text-slate-600"
            }`}
          >
            Validar requisitos
          </Link>

          <Link
            href="/citas"
            className={`${linkClass} ${
              isActive("/citas") ? "text-blue-700 border-b-2 border-blue-700 pb-1" : "text-slate-600"
            }`}
          >
            Agendar cita
          </Link>

          <Link
            href="/consulta"
            className={`${linkClass} ${
              isActive("/consulta") ? "text-blue-700 border-b-2 border-blue-700 pb-1" : "text-slate-600"
            }`}
          >
            Consultar trámite
          </Link>
        </div>

        {/* CTA */}
        <Link
          href="/login"
          className="px-6 py-2 bg-blue-900 text-white rounded-xl font-semibold hover:bg-blue-800 transition"
        >
          Iniciar Sesión
        </Link>
      </div>
    </nav>
  );
}