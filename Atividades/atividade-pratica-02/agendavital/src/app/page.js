"use client";
import { React, useEffect } from "react";
import { useRouter } from "next/navigation";
import useDoacoes from "@/hooks/useDoacoes";
import DoacaoForm from "@/components/DoacaoForm";
import { FaUpDown } from "react-icons/fa6";

export default function Home() {
  const { doacoes, loading, error, addDoacao } = useDoacoes();
  const router = useRouter();

  useEffect(() => {}, []);
  if (loading) {
    return <p className="mt-14">Carregando doações...</p>;
  }

  if (error) {
    return (
      <p className="mt-14">
        Ocorreu um erro ao carregar as doações: {error.message}
      </p>
    );
  }

  const handleSubmit = async (e, formValues) => {
    e.preventDefault();
    const requiredFields = ["doadorId", "localColetaId"];

    const isValid = requiredFields.every(
      (field) => formValues[field] !== null && formValues[field] !== ""
    );
    if (isValid) {
      console.log("Formulário enviado:", formValues);
      await addDoacao(formValues);
      window.location.reload();
    } else {
      alert("Preencha todos os campos obrigatórios!");
    }
  };

  return (
    <div className="mt-14">
      <DoacaoForm handleSubmit={handleSubmit} />
      {doacoes.length > 0 ? (
        <div className="flex justify-around flex-wrap gap-24 mt-5">
          {doacoes.map((doacao) => (
            <a
              className="cursor-pointer"
              key={doacao.id}
              onClick={() => router.push(`/doacoes/${doacao.id}`)}
            >
              <div className="max-w-xs rounded overflow-hidden shadow-lg bg-white p-3">
                <div className="px-6 py-4">
                  <div className=" flex flex-col gap-2 items-center">
                    <p className="text-xl">{doacao.doador.nome}</p>
                    <FaUpDown/>
                    <p className="text-xl">{doacao.localColeta.nome}</p>
                    <p>{doacao.data}</p>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      ) : (
        <div>Nenhuma doação encontrado.</div>
      )}
    </div>
  );
}
