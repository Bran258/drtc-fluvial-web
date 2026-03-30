import SubtitleCategorias from "@/components/SubtitleCategorias";

export default function RenovacionPermisoView() {
  return (
    <div className="w-full min-h-screen px-24 py-6">
      <SubtitleCategorias
        category="Trámites"
        subCategory="Renovaciónes"
        title="Renovaciónes"
        description="Autorización oficial para la circulación de embarcaciones en el ámbito fluvial regional, asegurando el cumplimiento de las normativas de seguridad y protección del medio ambiente acuático."
        backHref="/tramites"
      />

      <div className="bg-gray-50 p-4 md:p-6 rounded-xl mt-6">
        <h2 className="font-semibold mb-2">Requisitos</h2>
        <ul className="list-disc pl-6 space-y-1">
          <li>DNI o RUC</li>
          <li>Documento de propiedad</li>
          <li>Pago de tasa</li>
        </ul>
      </div>
    </div>
  );
}