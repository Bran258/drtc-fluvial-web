import SubtitleCategorias from "@/components/SubtitleCategorias";
import DetalleTramite from "../components/DetalleTramite";

export default function PermisoNavegacionView() {
  return (
    <div className="w-full min-h-screen px-24 py-6">
      <SubtitleCategorias
        category="Trámites"
        subCategory="Permiso de Navegación"
        title="Permiso de Navegación"
        description="Autorización oficial para la circulación de embarcaciones en el ámbito fluvial regional, asegurando el cumplimiento de las normativas de seguridad y protección del medio ambiente acuático."
        backHref="/tramites"
      />

      <div className="bg-gray-50 p-4 md:p-6 rounded-xl mt-6 ">
        <DetalleTramite/>
      </div>
    </div>
  );
}