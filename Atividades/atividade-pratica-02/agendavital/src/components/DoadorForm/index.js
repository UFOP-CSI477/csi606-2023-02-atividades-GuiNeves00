"use client";
import InputSelect from "@/components/InputSelect";
import InputText from "@/components/InputText";
import { React, useState } from "react";
import useCidades from "@/hooks/useCdades";
import useTiposSanguineos from "@/hooks/useTiposSanguineos";

export default function DoadorForm({
  isEdit = false,
  doador = { cidade: {}, tipoSanguineo: {} },
  handleSubmit,
  handleCancel = null,
}) {
  const {
    cidades,
    loading: cidadesLoading,
    error: cidadesError,
  } = useCidades();
  const {
    tipoSanguineos,
    loading: tiposSanguineosLoading,
    error: tipoSanguineosError,
  } = useTiposSanguineos();

  const [formValues, setFormValues] = useState({
    nome: doador.nome || "",
    rg: doador.rg || "",
    rua: doador.rua || "",
    numero: doador.numero || "",
    complemento: doador.complemento || "",
    cidadeId: doador.cidade.id || "",
    tipoSanguineoId: doador.tipoSanguineo.id || "",
  });

  const handleInputChange = (name, value) => {
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmitForm = (event, formValues) => {
    handleSubmit(event, formValues);
    if (doador == { cidade: {}, tipoSanguineo: {} }) {
      formValues = {
        nome: "",
        rg: "",
        rua: "",
        numero: "",
        cidadeId: "",
        tipoSanguineoId: "",
      };
    }
  };

  if (cidadesError || tipoSanguineosError) {
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
        <InputText
          label="Nome completo:"
          placeholder="Digite aqui o nome"
          id="nome"
          name="nome"
          value={formValues.nome}
          onChange={(e) => handleInputChange("nome", e.target.value)}
        />      
        <InputText
          label="RG:"
          placeholder="Digite aqui o RG do doador"
          id="rg"
          name="rg"
          value={formValues.rg}
          onChange={(e) => handleInputChange("rg", e.target.value)}
        />
        <InputText
          label="Rua:"
          placeholder="Digite a rua do doador"
          id="rua"
          name="rua"
          value={formValues.rua}
          onChange={(e) => handleInputChange("rua", e.target.value)}
        />
        <InputText
          label="Numero:"
          placeholder="Digite o numero"
          id="numero"
          name="numero"
          type="numero"
          value={formValues.numero}
          onChange={(e) => handleInputChange("numero", e.target.value)}
        />
        <InputText
          label="Complemento:"
          placeholder="Digite o complemento"
          id="complemento"
          name="complemento"
          type="complemento"
          value={formValues.complemento}
          onChange={(e) => handleInputChange("complemento", e.target.value)}
        />
        {cidadesLoading ? (
          <p>Carregando...</p>
        ) : (
          <InputSelect
            label="Escolha uma cidade:"
            id="cidadeId"
            name="cidadeId"
            options={cidades}
            onChange={(e) => handleInputChange("cidadeId", e.target.value)}
            value={formValues.cidadeId}
            optionSelected={formValues.cidadeId}
          />
        )}
        {tiposSanguineosLoading ? (
          <p>Carregando...</p>
        ) : (
          <InputSelect
            label="Escolha um tipo sanguineo:"
            id="tipoSanguineoId"
            name="tipoSanguineoId"
            options={tipoSanguineos}
            onChange={(e) =>
              handleInputChange("tipoSanguineoId", e.target.value)
            }
            value={formValues.tipoSanguineoId}
            optionSelected={formValues.tipoSanguineoId}
            optionViewName="tipo"
          />
        )}

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
