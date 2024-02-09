"use client";
import { React, useEffect } from "react";
import useDoadores from "@/hooks/useDoadores";
import { useRouter } from "next/navigation";
import DoadorForm from "@/components/DoadorForm";

export default function Doadores() {
  const { doadores, loading, error, addDoador } = useDoadores();
  const router = useRouter();

  useEffect(() => {}, []);
  if (loading) {
    return <p className="mt-14">Carregando doadores...</p>;
  }

  if (error) {
    return (
      <p className="mt-14">
        Ocorreu um erro ao carregar os doadores: {error.message}
      </p>
    );
  }

  const handleSubmit = async (e, formValues) => {
    e.preventDefault();
    const requiredFields = [
      "nome",
      "rg",
      "rua",
      "numero",
      "cidadeId",
      "tipoSanguineoId",
      "idade"
    ];

    const isValid = requiredFields.every(
      (field) => formValues[field] !== null && formValues[field] !== ""
    );
    if (isValid) {
      console.log("Formulário enviado:", formValues);
      await addDoador(formValues);
      window.location.reload();
    } else {
      alert("Preencha todos os campos obrigatórios!");
    }
  };

  return (
    <div className="mt-14">
      <DoadorForm handleSubmit={handleSubmit} />
      {doadores.length > 0 ? (
        <div className="flex justify-around flex-wrap gap-24 mt-5">
          {doadores.map((doador) => (
            <a
              className="cursor-pointer"
              key={doador.id}
              onClick={() => router.push(`/doadores/${doador.id}`)}
            >
              <div className="max-w-xs rounded overflow-hidden shadow-lg bg-white">
                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2">{doador.nome}</div>
                  <p className="text-gray-600 text-sm">RG: {doador.rg}</p>
                  <p className="text-gray-700 text-base mb-2">
                    Tipo Sanguineo: {doador.tipoSanguineo.tipo}{" "}
                    {doador.tipoSanguineo.fator}
                  </p>
                </div>
              </div>
            </a>
          ))}
        </div>
      ) : (
        <div>Nenhum doador encontrado.</div>
      )}
    </div>
  );
}
