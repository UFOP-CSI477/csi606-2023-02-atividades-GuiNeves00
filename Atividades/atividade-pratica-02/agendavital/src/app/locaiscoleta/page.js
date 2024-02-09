"use client";
import { React, useEffect } from "react";
import useLocaisColeta from "@/hooks/useLocaisColeta";
import { useRouter } from "next/navigation";
import LocalColetaForm from "@/components/LocalColetaForm";

export default function LocaisColeta() {
  const { locaisColeta, loading, error, addLocalColeta } = useLocaisColeta();
  const router = useRouter();

  useEffect(() => {}, []);
  if (loading) {
    return <p> className="mt-14"Carregando locais de coleta...</p>;
  }

  if (error) {
    return (
      <p className="mt-14">
        Ocorreu um erro ao carregar os locais de coleta: {error.message}
      </p>
    );
  }

  const handleSubmit = async (e, formValues) => {
    e.preventDefault();
    const requiredFields = [
      "nome",
      "rua",
      "numero",
      "complemento",
      "cidadeId",
    ];

    const isValid = requiredFields.every(
      (field) => formValues[field] !== null && formValues[field] !== ""
    );
    if (isValid) {
      console.log("Formulário enviado:", formValues);
      await addLocalColeta(formValues);
      window.location.reload();
    } else {
      alert("Preencha todos os campos obrigatórios!");
    }
  };

  return (
    <div className="mt-14">
      <LocalColetaForm handleSubmit={handleSubmit} />
      {locaisColeta.length > 0 ? (
        <div className="flex justify-around flex-wrap gap-24 mt-5">
          {locaisColeta.map((localColeta) => (
            <a
              className="cursor-pointer"
              key={localColeta.id}
              onClick={() => router.push(`/locaiscoleta/${localColeta.id}`)}
            >
              <div className="max-w-xs rounded overflow-hidden shadow-lg bg-white">
                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2">
                    {localColeta.nome}
                  </div>
                  <p className="text-gray-700 text-base mb-2">
                    Cidade: {localColeta.cidade.nome}
                  </p>
                </div>
              </div>
            </a>
          ))}
        </div>
      ) : (
        <div>Nenhum local de coleta encontrado.</div>
      )}
    </div>
  );
}
