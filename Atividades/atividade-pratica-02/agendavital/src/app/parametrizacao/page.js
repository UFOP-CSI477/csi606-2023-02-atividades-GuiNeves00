"use client";

import React from "react";
import AddForm from "./components/AddForm";
import UpdateForm from "./components/UpdateForm";
import { getCidadeByIdAsync } from "@/services/cidadeService";
import { getEstadoByIdAsync } from "@/services/estadoService";
import UpdateForm2 from "./components/UpdateForm2";
import AddForm2 from "./components/AddForm2";
import useCidades from "@/hooks/useCdades";
import useEstados from "@/hooks/useEstados";
import useTiposSanguineos from "@/hooks/useTiposSanguineos";
import { getTipoSanguineoByIdAsync } from "@/services/tipoSanguineoService";

export default function Parameterization() {
  const {
    cidades,
    addCidade,
    updateCidade,
    deleteCidade,
    loading: cidadesLoading,
    error: cidadesError,
  } = useCidades();

  const {
    estados,
    addEstado,
    deleteEstado,
    updateEstado,
    loading: estadosLoading,
    error: estadosError,
  } = useEstados();

  const {
    tipoSanguineos,
    addTipoSanguineo,
    updateTipoSanguineo,
    deleteTipoSanguineo,
    loading: tiposSanguineosLoading,
    error: tiposSanguineosError,
  } = useTiposSanguineos();

  if (cidadesError || estadosError || tiposSanguineosError) {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-100">
        <h1 className="text-red-600 text-4xl font-bold p-8 border-2 border-red-600 rounded">
          500: ERRO NO SERVIDOR, CONTATE O SUPORTE
        </h1>
      </div>
    );
  }
  return (
    <div className="mt-14">
      <AddForm2
        elementTitle={"Estado"}
        addElement={addEstado}
        elementSubtitle={"estado"}
        elementpropname1={"nome"}
        elementpropname2={"uf"}
      />
      {estadosLoading ? (
        <p>Carregando..</p>
      ) : (
        <UpdateForm2
          elements={estados}
          updateElement={updateEstado}
          deleteElement={deleteEstado}
          elementTitle={"Estado"}
          elementSubtitle={"estado"}
          getElementById={getEstadoByIdAsync}
          elementpropname1={"nome"}
          elementpropname2={"uf"}
        />
      )}
      {estadosLoading ? (
        <p>Carregando..</p>
      ) : (
        <AddForm
          elementTitle={"Cidade"}
          addElement={addCidade}
          elementSubtitle={"cidade"}
          selectOptions={estados}
          selectOptionViewName={"nome"}
          selectOptionLabel={"estado"}
          selectOptionValue={"estadoId"}
        />
      )}
      {cidadesLoading ? (
        <p>Carregando...</p>
      ) : (
        <UpdateForm
          elements={cidades}
          updateElement={updateCidade}
          deleteElement={deleteCidade}
          elementTitle={"Cidade"}
          elementSubtitle={"cidade"}
          getElementById={getCidadeByIdAsync}
          selectOptions={estados}
          selectOptionViewName={"nome"}
          selectOptionLabel={"estado"}
          selectOptionValue={"estadoId"}
        />
      )}

      <AddForm2
        elementTitle={"Tipos Sanguineos"}
        addElement={addTipoSanguineo}
        elementSubtitle={"tipo sanguineo"}
        elementpropname1={"tipo"}
        elementpropname2={"fator"}
      />
      {tiposSanguineosLoading ? (
        <p>Carregando..</p>
      ) : (
        <UpdateForm2
          elements={tipoSanguineos}
          updateElement={updateTipoSanguineo}
          deleteElement={deleteTipoSanguineo}
          elementTitle={"Tipos Sanguineos"}
          elementSubtitle={"tipo sanguineo"}
          getElementById={getTipoSanguineoByIdAsync}
          elementpropname1={"tipo"}
          elementpropname2={"fator"}
        />
      )}
    </div>
  );
}
