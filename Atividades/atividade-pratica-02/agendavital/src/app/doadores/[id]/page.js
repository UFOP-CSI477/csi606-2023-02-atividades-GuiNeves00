"use client";
import React, { useEffect, useState } from "react";
import { getDoadorByIdAsync } from "@/services/doadorService";
import DoadorForm from "@/components/DoadorForm";
import { useRouter } from "next/navigation";
import useDoadores from "@/hooks/useDoadores";

export default function Doador({ params }) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [doador, setDoador] = useState(null);
  const [editDoadorForm, setEditDoadorForm] = useState(false);
  const {updateDoador, deleteDoador} = useDoadores()
  
  const formatDate = (dateString) => {
    const options = { day: "2-digit", month: "2-digit", year: "numeric" };
    return new Date(dateString).toLocaleDateString("pt-BR", options);
  };
  const router = useRouter()

  const handleEdit = ()=> {
    setEditDoadorForm(true)
  }

  useEffect(() => {
    const fetchDoador = async () => {
      try {
        const data = await getDoadorByIdAsync(params.id);
        setDoador(data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchDoador();
  }, [params.id]);


  const handleSubmit = async (e, formValues) => {
    e.preventDefault();
    const requiredFields = [
      "nome",
      "rg",
      "cidadeId",
      "rua",
      "numero",
      "departamentId",
      "tipoSanguineoId",
    ];
    const isValid = requiredFields.every(
      (field) => formValues[field] !== null && formValues[field] !== ""
    );

    if (isValid) {
      await updateDoador(params.id,formValues);
      setEditDoadorForm(!editDoadorForm)
      window.location.reload()
    } else {
      alert("Preencha todos os campos obrigatórios!");
    }
  };

  const handleDelete = async () => {
    await deleteDoador(params.id)
    router.push("/doadores");
  }

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
        <h1>Ocorreu um erro ao carregar os detalhes do doador.</h1>
        <p>{error.messidade}</p>
      </div>
    );
  }

if(editDoadorForm){
  return <DoadorForm isEdit={true}  handleSubmit={handleSubmit} handleCancel={() => {setEditDoadorForm(false)}} doador={doador}/>
}
  return (
    <div className="mt-14 grid grid-cols-2 gap-8 w-screen">
      <div className="flex items-start flex-col">
        <div className="flex items-center justify-center mb-4 flex-wrap">
          <h2 className="text-xl font-bold mb-2 ml-4">{doador.nome}</h2>
        </div>
        <div className="ml-4 flex gap-8 flex-wrap">
          <div>
            <h2 className="text-xl font-bold mb-2">Informações Pessoais</h2>
            <p>
              Endereço: {doador.rua}, {doador.numero}
            </p>
            <p>
              Complemento: {doador.complemento}
            </p>
            <p>Cidade: {doador.cidade.nome}</p>
            <p>
              Estado: {doador.cidade.estado.nome} ({doador.cidade.estado.uf})
            </p>
            <p>
              Tipo Sanguineo: {doador.tipoSanguineo.tipo} {doador.tipoSanguineo.fator}
            </p>
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
