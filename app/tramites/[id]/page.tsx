import { tramitesData } from "@/data/tramites";
import { notFound } from "next/navigation";

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const tramite = tramitesData.find((t) => t.id === id);

  if (!tramite) {
    notFound();
  }

  const View = tramite.view;

  return (
    <div className="w-full min-h-screen px-3 py-6">
      {View ? (
        <View />
      ) : (
        <>
          <h1 className="text-3xl font-bold mb-4">
            {tramite.title}
          </h1>
          <p className="text-gray-600 mb-6">
            {tramite.description}
          </p>
        </>
      )}
    </div>
  );
}