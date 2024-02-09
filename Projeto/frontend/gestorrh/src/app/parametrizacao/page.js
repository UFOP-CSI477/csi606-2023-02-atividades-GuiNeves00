"use client";

import React from "react";
import useCities from "@/hooks/useCities";
import useDepartaments from "@/hooks/useDepartaments";
import usePositions from "@/hooks/usePositions";
import useStates from "@/hooks/useStates";
import AddForm from "./components/AddForm";
import UpdateForm from "./components/UpdateForm";
import { getCityByIdAsync } from "@/services/cityService";
import { getDepartamentByIdAsync } from "@/services/departamentService";
import { getStateByIdAsync } from "@/services/stateService";
import { getPositionByIdAsync } from "@/services/positionService";
import UpdateStateForm from "./components/UpdateStateForm";
import AddStateForm from "./components/AddStateForm";

export default function Parameterization() {
  const {
    cities,
    addCity,
    updateCity,
    deleteCity,
    loading: citiesLoading,
    error: citiesError,
  } = useCities();
  const {
    departaments,
    addDepartament,
    updateDepartament,
    deleteDepartament,
    loading: departamentsLoading,
    error: departamentsError,
  } = useDepartaments();
  const {
    positions,
    addPosition,
    updatePosition,
    deletePosition,
    loading: positionsLoading,
    error: positionsError,
  } = usePositions();
  const {
    states,
    addState,
    deleteState,
    updateState,
    loading: statesLoading,
    error: statesError,
  } = useStates();

  if (citiesError || statesError || positionsError || departamentsError) {
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
      <AddForm
        elementTitle={"Departamentos"}
        addElement={addDepartament}
        elementSubtitle={"departamento"}
      />
      {departamentsLoading ? (
        <p>Carregando...</p>
      ) : (
        <UpdateForm
          elements={departaments}
          updateElement={updateDepartament}
          deleteElement={deleteDepartament}
          elementTitle={"Departamento"}
          elementSubtitle={"departamento"}
          getElementById={getDepartamentByIdAsync}
        />
      )}

      <AddForm
        elementTitle={"Funções"}
        addElement={addPosition}
        elementSubtitle={"função"}
      />
      {positionsLoading ? (
        <p>Carregando...</p>
      ) : (
        <UpdateForm
          elements={positions}
          updateElement={updatePosition}
          deleteElement={deletePosition}
          elementTitle={"Função"}
          elementSubtitle={"função"}
          getElementById={getPositionByIdAsync}
        />
      )}

      <AddStateForm
        elementTitle={"Estados"}
        addElement={addState}
        elementSubtitle={"estado"}
      />
      {statesLoading ? (
        <p>Carregando..</p>
      ) : (
        <UpdateStateForm
          elements={states}
          updateElement={updateState}
          deleteElement={deleteState}
          elementTitle={"Estado"}
          elementSubtitle={"estado"}
          getElementById={getStateByIdAsync}
        />
      )}

      {citiesLoading ? (
        <p>Carregando...</p>
      ) : (
        <AddForm
          elementTitle={"Cidades"}
          addElement={addCity}
          elementSubtitle={"cidade"}
          isSelect={true}
          selectOptions={states}
          selectOptionViewName={"name"}
          selectOptionLabel={"estado"}
          selectOptionValue={"stateId"}
        />
      )}

      {citiesLoading ? (
        <p>Carregando...</p>
      ) : (
        <UpdateForm
          elements={cities}
          updateElement={updateCity}
          deleteElement={deleteCity}
          elementTitle={"Cidade"}
          elementSubtitle={"cidade"}
          getElementById={getCityByIdAsync}
          isSelect={true}
          selectOptions={states}
          selectOptionViewName={"name"}
          selectOptionLabel={"estado"}
          selectOptionValue={"stateId"}
          selectOptionValue2={"state"}
        />
      )}
    </div>
  );
}
