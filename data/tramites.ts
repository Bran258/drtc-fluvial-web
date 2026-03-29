import EmpadronamientoNaveView from "@/features/tramites/views/EmpadronamientoNaveView";
import PermisoNavegacionView from "@/features/tramites/views/PermisoNavegacionView";
import RenovacionPermisoView from "@/features/tramites/views/RenovacionPermisoView";
import { Tramite } from "@/types/tramite";
import { Ship, FileText, RefreshCw } from "lucide-react";

export type EstadoTramite = "disponible" | "en_mantenimiento";

export const tramitesData: Tramite[] = [
  {
    id: "permiso-navegacion",
    title: "Permiso de navegación",
    description: "Autorización para operar embarcaciones.",
    icon: Ship,
    estado: "disponible" as EstadoTramite,
    view: PermisoNavegacionView,
  },
  {
    id: "empadronamiento-nave",
    title: "Empadronamiento de nave",
    description: "Registro oficial de embarcaciones.",
    icon: FileText,
    estado: "en_mantenimiento" as EstadoTramite,
    view: EmpadronamientoNaveView,
  },
  {
    id: "renovacion-permiso",
    title: "Renovación de permiso",
    description: "Actualización de permisos vencidos.",
    estado: "en_mantenimiento" as EstadoTramite,
    icon: RefreshCw,
    view: RenovacionPermisoView,
  },
];