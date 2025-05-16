"use client";

import { useParams } from "next/navigation";

export default function ProductDetail() {
  const params = useParams();

  return (
    <div className="flex flex-col gap-4 p-4">
      <h1 className="text-2xl font-bold">Detalhes do produto</h1>
      <p>Produto ID: {params.id}</p>
    </div>
  );
}
