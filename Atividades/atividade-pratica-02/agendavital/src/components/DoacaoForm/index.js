"use client";
import InputSelect from "@/components/InputSelect";
import { React, useState } from "react";
import InputDate from "../InputDate";
import useDoadores from "@/hooks/useDoadores";
import useLocaisColeta from "@/hooks/useLocaisColeta";

export default function DoacaoForm({
  isEdit = false,
  doacao = { doador: {}, localColeta: {} },
  handleSubmit,
  handleCancel = null,
}) {
  const {
    locaisColeta,
    loading: locaisColetaLoading,
    error: locaisColetaError,
  } = useLocaisColeta();
  const {
    doadores,
    loading: doadoresLoading,
    error: doadoresError,
  } = useDoadores();

  const [formValues, setFormValues] = useState({
    doadorId: doacao.doador.id || "",
    localColetaId: doacao.localColeta.id || "",
    data: doacao.data || "",
  });

  const handleInputChange = (name, value) => {
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmitForm = (event, formValues) => {
    handleSubmit(event, formValues);
    if (doacao == { doador: {}, localColeta: {} }) {
      formValues = {
        doadorId: "",
        localColetaId: "",
      };
    }
  };

  if (locaisColetaError || doadoresError) {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-100">
        <h1 className="text-red-600 text-4xl font-bold p-8 border-2 border-red-600 rounded">
          500: ERRO NO SERVIDOR, CONTATE O SUPORTE
        </h1>
      </div>
    );
  }

  return (
    <div>
      <form
        className="flex items-center justify-center flex-col mt-14 gap-y-4"
        onSubmit={handleSubmit}
      >
        {doadoresLoading ? (
          <p>Carregando...</p>
        ) : (
          <InputSelect
            label="Escolha um doador:"
            id="doadorId"
            name="doadorId"
            options={doadores}
            onChange={(e) => handleInputChange("doadorId", e.target.value)}
            value={formValues.doadorId}
            optionSelected={formValues.doadorId}
          />
        )}
        {locaisColetaLoading ? (
          <p>Carregando...</p>
        ) : (
          <InputSelect
            label="Escolha um local de coleta:"
            id="localColetaId"
            name="localColetaId"
            options={locaisColeta}
            onChange={(e) => handleInputChange("localColetaId", e.target.value)}
            value={formValues.localColetaId}
            optionSelected={formValues.localColetaId}
          />
        )}
        <InputDate
          label="Data"
          id="data"
          name="data"
          value={formValues.data}
          onChange={(e) => handleInputChange("data", e.target.value)}
        />

        {isEdit ? (
          <div className="flex flex-row items-start mt-3">
            <button
              type="submit"
              className="bg-green-500 text-white p-2 rounded-md mr-2 flex items-center"
              onClick={(event) => handleSubmitForm(event, formValues)}
            >
              Salvar
            </button>
            <button
              className="bg-gray-500 text-white p-2 rounded-md flex items-center"
              onClick={() => handleCancel()}
            >
              Cancelar
            </button>
          </div>
        ) : (
          <button
            type="submit"
            className="bg-blue-500 text-white p-2 rounded-md mt-4"
            onClick={(event) => handleSubmitForm(event, formValues)}
          >
            Enviar Formulário
          </button>
        )}
      </form>
    </div>
  );
}
