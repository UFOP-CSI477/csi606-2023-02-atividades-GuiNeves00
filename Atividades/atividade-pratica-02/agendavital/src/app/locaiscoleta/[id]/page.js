"use client";
import React, { useEffect, useState } from "react";
import { getLocalColetaByIdAsync } from "@/services/localColetaService";
import { useRouter } from "next/navigation";
import useLocaisColeta from "@/hooks/useLocaisColeta";
import LocalColetaForm from "@/components/LocalColetaForm";

export default function LocalColeta({ params }) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [localColeta, setLocalColeta] = useState(null);
  const [editLocalColetaForm, setEditLocalColetaForm] = useState(false);
  const { updateLocalColeta, deleteLocalColeta } = useLocaisColeta();

  const router = useRouter();

  const handleEdit = () => {
    setEditLocalColetaForm(true);
  };

  useEffect(() => {
    const fetchLocalColeta = async () => {
      try {
        const data = await getLocalColetaByIdAsync(params.id);
        setLocalColeta(data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchLocalColeta();
  }, [params.id]);

  const handleSubmit = async (e, formValues) => {
    e.preventDefault();
    const requiredFields = ["nome", "rua", "cidadeId", "numero"];
    const isValid = requiredFields.every(
      (field) => formValues[field] !== null && formValues[field] !== ""
    );

    if (isValid) {
      await updateLocalColeta(params.id, formValues);
      setEditLocalColetaForm(!editLocalColetaForm);
      window.location.reload()
    } else {
      alert("Preencha todos os campos obrigatórios!");
    }
  };

  const handleDelete = async () => {
    await deleteLocalColeta(params.id);
    router.push("/locaiscoleta");
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
        <h1>Ocorreu um erro ao carregar os detalhes do local de coleta.</h1>
        <p>{error.message}</p>
      </div>
    );
  }

  if (editLocalColetaForm) {
    return (
      <LocalColetaForm
        isEdit={true}
        handleSubmit={handleSubmit}
        handleCancel={() => {
          setEditLocalColetaForm(false);
        }}
        localColeta={localColeta}
      />
    );
  }
  return (
    <div className="mt-14 grid grid-cols-2 gap-8 w-screen">
      <div className="flex items-start flex-col">
        <div className="ml-4 flex flex-col gap-8 flex-wrap">
          <div className="flex items-center justify-center mb-4 flex-wrap">
            <h2 className="text-xl font-bold mb-2 ml-4">{localColeta.nome}</h2>
          </div>
          <div>
            <h2 className="text-xl font-bold mb-2">
              Informações do local de coleta
            </h2>
            <p>Cidade: {localColeta.cidade.nome}</p>
            <p>Rua: {localColeta.rua}</p>
            <p>Numero: {localColeta.numero}</p>
            <p>Complemento: {localColeta.complemento}</p>
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
