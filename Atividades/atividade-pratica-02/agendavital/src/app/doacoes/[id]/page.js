"use client";
import React, { useEffect, useState } from "react";
import { getDoacaoByIdAsync } from "@/services/doacaoService";
import { useRouter } from "next/navigation";
import DoacaoForm from "@/components/DoacaoForm";
import useDoacoes from "@/hooks/useDoacoes";

export default function Doacao({ params }) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [doacao, setDoacao] = useState(null);
  const [editDoacaoForm, setEditDoacaoForm] = useState(false);
  const { updateDoacao, deleteDoacao } = useDoacoes();

  const router = useRouter();

  const handleEdit = () => {
    setEditDoacaoForm(true);
  };

  useEffect(() => {
    const fetchDoacao = async () => {
      try {
        const data = await getDoacaoByIdAsync(params.id);
        setDoacao(data);
        console.log(data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchDoacao();
  }, [params.id]);

  const handleSubmit = async (e, formValues) => {
    e.preventDefault();
    const requiredFields = ["doadorId", "localColetaId", "cidadeId", "data"];
    const isValid = requiredFields.every(
      (field) => formValues[field] !== null && formValues[field] !== ""
    );

    if (isValid) {
      await updateDoacao(params.id, formValues);
      setEditDoacaoForm(!editDoacaoForm);
      window.location.reload()
    } else {
      alert("Preencha todos os campos obrigatórios!");
    }
  };

  const handleDelete = async () => {
    await deleteDoacao(params.id);
    router.push("/");
  };

  if (loading) {
    return (
      <div className="mt-14">
        <h1>Carregando...</h1>
      </div>
    );
  }

  if (error) {
    return (
      <div className="mt-14">
        <h1>Ocorreu um erro ao carregar os detalhes da doação.</h1>
        <p>{error.message}</p>
      </div>
    );
  }

  if (editDoacaoForm) {
    return (
      <DoacaoForm
        isEdit={true}
        handleSubmit={handleSubmit}
        handleCancel={() => {
          setEditDoacaoForm(false);
        }}
        doacao={doacao}
      />
    );
  }
  return (
    <div className="mt-14 grid grid-cols-2 gap-8 w-screen">
      <div className="flex items-start flex-col">
        <div className="ml-4 flex gap-8 flex-wrap">
          <div>
            <h2 className="text-xl font-bold mb-2">Informações da doação</h2>
            <p>Doador: {doacao.doador.nome}</p>
            <p>
              Tipo Sanguineo: {doacao.doador.tipoSanguineo.tipo}{" "}
              {doacao.doador.tipoSanguineo.fator}
            </p>
            <p>Local de coleta: {doacao.localColeta.nome}</p>
            <p>Cidade: {doacao.localColeta.cidade.nome}</p>
            <p>
              Estado: {doacao.localColeta.cidade.estado.nome} (
              {doacao.localColeta.cidade.estado.uf})
            </p>
            <p>Data: {doacao.data}</p>
          </div>
        </div>
        <button
          className="bg-blue-500 text-white p-2 rounded-md mt-4 mr-2"
          onClick={() => handleEdit()}
        >
          Editar
        </button>
        <button
          className="bg-red-500 text-white p-2 rounded-md mt-4"
          onClick={() => handleDelete()}
        >
          Excluir
        </button>
      </div>
    </div>
  );
}
