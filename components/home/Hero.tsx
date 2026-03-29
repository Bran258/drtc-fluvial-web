import Image from "next/image";
import Link from "next/link";
import MotionWrapper from "../MotionWrapper";

type HeroProps = {
  badge: string;
  title: string;
  description: string;
  primaryAction: {
    label: string;
    href: string;
  };
  secondaryAction?: {
    label: string;
    href?: string;
    onClick?: () => void;
  };
  stats: {
    label: string;
    value: string;
  }[];
  image: string;
};

export default function Hero({
  badge,
  title,
  description,
  primaryAction,
  secondaryAction,
  stats,
  image,
}: HeroProps) {
  return (
    <MotionWrapper direction="left">
      <section className="relative w-full min-h-[600px] bg-white overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2 w-full min-h-[600px]">

          {/* LEFT */}
          <div className="flex flex-col justify-center px-8 md:px-16 lg:px-24 py-16 z-10 bg-white">

            <span className="text-[11px] tracking-[0.2em] font-bold uppercase mb-5 text-[#6B769B]">
              {badge}
            </span>

            <h1 className="text-4xl md:text-5xl lg:text-[56px] font-extrabold leading-[1.1] mb-8 max-w-xl text-[#00338D]">
              {title}
            </h1>

            <p className="text-base md:text-lg mb-12 max-w-lg leading-relaxed text-[#6B769B]">
              {description}
            </p>

            <div className="flex flex-wrap gap-3 mb-16">
              <Link
                href={primaryAction.href}
                className="px-8 py-3 rounded-sm font-semibold text-sm text-white bg-[#00338D] shadow-sm hover:opacity-90 transition"
              >
                {primaryAction.label}
              </Link>

              {secondaryAction?.href ? (
                <Link
                  href={secondaryAction.href}
                  className="px-8 py-3 rounded-sm font-semibold text-sm bg-[#F5F5F7] text-[#00338D] border border-gray-200 hover:bg-gray-200 transition"
                >
                  {secondaryAction.label}
                </Link>
              ) : (
                <button
                  type="button"
                  onClick={secondaryAction?.onClick}
                  className="px-8 py-3 rounded-sm font-semibold text-sm bg-[#F5F5F7] text-[#00338D] border border-gray-200 hover:bg-gray-200 transition"
                >
                  {secondaryAction?.label}
                </button>
              )}
            </div>

            <div className="flex gap-12 pt-8 border-t border-gray-100 w-full max-w-xs">
              {stats.map((item, i) => (
                <div key={i}>
                  <p className="text-2xl font-bold text-[#00338D]">
                    {item.value}
                  </p>
                  <p className="text-[10px] uppercase tracking-wider font-bold text-[#6B769B]">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT */}
          <div className="relative w-full min-h-[400px] md:min-h-full">
            <Image
              src={image}
              alt="Hero image"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover object-center"
            />

            <div className="absolute inset-0 bg-gradient-to-r from-white via-white/40 to-transparent md:w-1/2" />
          </div>

        </div>
      </section>
    </MotionWrapper>
  );
}