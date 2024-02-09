"use client";
import InputDate from "@/components/InputDate";
import InputSelect from "@/components/InputSelect";
import InputText from "@/components/InputText";
import { React, useEffect, useState } from "react";
import useCities from "@/hooks/useCities";
import useDepartaments from "@/hooks/useDepartaments";
import usePositions from "@/hooks/usePositions";



export default function EmployeeForm({
  isEdit = false,
  employee = {city:{}, departament:{}, position:{}},
  handleSubmit,
  handleCancel = null,
}) {
  const { cities, loading: citiesLoading, error: citiesError } = useCities();
  const {
    departaments,
    loading: departamentsLoading,
    error: departamentsError,
  } = useDepartaments();
  const {
    positions,
    loading: positionsLoading,
    error: positionsError,
  } = usePositions();

  const [formValues, setFormValues] = useState({
    urlImage: employee.urlImage || "",
    fullName: employee.fullName || "",
    age: employee.age || "",
    birthday: employee.birthday || new Date(),
    hiringDate: employee.hiringDate || new Date(),
    cityId: employee.city.id || "",
    street: employee.street || "",
    number: employee.number || "",
    zipCode: employee.zipCode || "",
    departamentId: employee.departament.id || "",
    positionId: employee.position.id || "",
  });

  useEffect(() => {
    console.log(employee)
  })

  const handleInputChange = (name, value) => {
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmitForm = (event, formValues) => {
    handleSubmit(event, formValues)
    if(employee == {city:{}, departament:{}, position:{}}){
      formValues = {
        urlImage: "",
        fullName: "",
        age: "",
        birthday: new Date(),
        hiringDate: new Date(),
        cityId: "",
        street: "",
        number: "",
        zipCode: "",
        departamentId: "",
        positionId: "",
      }
    }
  }

  if (citiesError || departamentsError || positionsError) {
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
          label="Link da foto do colaborador:"
          placeholder="Digite o link da imagem"
          id="urlImage"
          name="urlImage"
          value={formValues.urlImage}
          onChange={(e) => handleInputChange("urlImage", e.target.value)}
        />
        <InputText
          label="Nome completo:"
          placeholder="Digite aqui o nome"
          id="fullName"
          name="fullName"
          value={formValues.fullName}
          onChange={(e) => handleInputChange("fullName", e.target.value)}
        />
        <InputText
          label="Idade:"
          placeholder=""
          id="age"
          name="age"
          type="number"
          value={formValues.age}
          onChange={(e) => handleInputChange("age", e.target.value)}
        />
        <InputDate
          label="Data de nascimento"
          id="birthday"
          name="birthday"
          value={formValues.birthday}
          onChange={(e) => handleInputChange("birthday", e.target.value)}
        />
        {citiesLoading ? (
          <p>Carregando...</p>
        ) : (
          <InputSelect
            label="Escolha uma cidade:"
            id="cityId"
            name="cityId"
            options={cities}
            onChange={(e) => handleInputChange("cityId", e.target.value)}
            value={formValues.cityId}
            optionSelected={formValues.cityId}
          />
        )}
        <InputText
          label="Rua"
          placeholder=""
          id="street"
          name="street"
          value={formValues.street}
          onChange={(e) => handleInputChange("street", e.target.value)}
        />
        <InputText
          label="Numero:"
          placeholder=""
          id="number"
          name="number"
          type="number"
          value={formValues.number}
          onChange={(e) => handleInputChange("number", e.target.value)}
        />
        <InputText
          label="CEP:"
          placeholder=""
          id="zipCode"
          name="zipCode"
          value={formValues.zipCode}
          onChange={(e) => handleInputChange("zipCode", e.target.value)}
        />
        <InputDate
          label="Data de contratação"
          id="hiringDate"
          name="hiringDate"
          value={formValues.hiringDate}
          onChange={(e) => handleInputChange("hiringDate", e.target.value)}
        />
        {departamentsLoading ? (
          <p>Carregando...</p>
        ) : (
          <InputSelect
            label="Escolha um departamento:"
            id="departamentId"
            name="departamentId"
            options={departaments}
            onChange={(e) => handleInputChange("departamentId", e.target.value)}
            value={formValues.departamentId}
            optionSelected={formValues.departamentId}
          />
        )}
        {positionsLoading ? (
          <p>Carregando...</p>
        ) : (
          <InputSelect
            label="Escolha uma função:"
            id="positionId"
            name="positionId"
            options={positions}
            onChange={(e) => handleInputChange("positionId", e.target.value)}
            value={formValues.positionId}
            optionSelected={formValues.positionId}
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
