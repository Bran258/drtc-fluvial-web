import React from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

interface SubtitleCategoriasProps {
    category: string;
    subCategory: string;
    title: string;
    description: string;
    backHref?: string;
}

const SubtitleCategorias: React.FC<SubtitleCategoriasProps> = ({
    category,
    subCategory,
    title,
    description,
    backHref,
}) => {
    return (
        <div className="w-full max-w-4xl py-4 font-sans">

            {/* Breadcrumb + Back */}
            <div className="flex items-center gap-3 mb-4">

                {backHref && (
                    <Link
                        href={backHref}
                        className="group flex items-center gap-2 px-3 py-2 rounded-full 
             bg-white border border-gray-200 shadow-sm
             hover:bg-gray-50 hover:shadow-md
             active:scale-95 transition-all duration-200"
                    >
                        <div className="w-8 h-8 flex items-center justify-center rounded-full 
                  bg-gray-100 group-hover:bg-gray-200 transition">
                            <ArrowLeft className="w-4 h-4 text-gray-700" />
                        </div>

                        <span className="text-sm font-medium text-gray-700">
                            Regresar
                        </span>
                    </Link>
                )}

                <div className="flex items-center gap-1 text-xs text-gray-500">
                    <span>{category}</span>
                    <span className="text-[10px]">/</span>
                    <span className="font-semibold text-blue-900">
                        {subCategory}
                    </span>
                </div>
            </div>

            {/* Title */}
            <h1 className="text-5xl md:text-6xl font-black text-[#00338D] leading-tight tracking-tight mb-6 max-w-[600px] break-words">
                {title}
            </h1>

            {/* Description */}
            <p className="text-gray-600 text-lg leading-relaxed max-w-2xl">
                {description}
            </p>
        </div>
    );
};

export default SubtitleCategorias;