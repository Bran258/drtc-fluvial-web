import { EstadoTramite } from "@/data/tramites";
import { LucideIcon } from "lucide-react";

export interface Tramite {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  estado: EstadoTramite;
  view?: React.ComponentType; // 👈 clave
}