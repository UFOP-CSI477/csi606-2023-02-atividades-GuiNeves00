"use client";
import InputSelect from "@/components/InputSelect";
import InputText from "@/components/InputText";
import React from "react";
import { useState } from "react";

export default function UpdateForm({
  elementTitle,
  elementSubtitle,
  elements,
  updateElement,
  deleteElement,
  getElementById,
  isSelect = false,
  selectOptions = [],
  selectOptionViewName = "",
  selectOptionLabel = "",
  selectOptionValue = "",
  selectOptionValue2 = "",
}) {
  const [selectedOption, setSelectedOption] = useState("");
  const [newElementName, setNewElementName] = useState("");
  const [selectedPropOption, setSelectedPropOption] = useState("");
  const [isEditing, setIsEditing] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    let requiredFields = [];
    if (isSelect) {
      requiredFields = ["name", "select"];
    } else {
      requiredFields = ["name"];
    }
    const isValid = requiredFields.every(
      (field) => newElementName !== null && newElementName.trim() !== ""
    );
    if (isValid) {
      let element = await getElementById(selectedOption);
      element.name = newElementName;
      if (isSelect) {
        element[selectOptionValue] = selectedPropOption;
      }
      await updateElement(element.id, element);
      setIsEditing(!isEditing);
    } else {
      alert("Preencha todos os campos obrigatórios!");
    }
  };

  const handleCancel = () => {
    setIsEditing(!isEditing);
    const element = elements.find((el) => el.id === selectedOption);
    setNewElementName(element.name);
  };

  const handleEdit = () => {
    setIsEditing(!isEditing);
  };

  const handleDelete = async () => {
    await deleteElement(selectedOption);
    setSelectedOption("");
    window.location.reload();
  };

  const handleSetSelectedOption = (option) => {
    setSelectedOption(option);
    const element = elements.find((el) => el.id === option);
    console.log(element);
    setNewElementName(element.name);
    if (isSelect) {
      if (element[selectOptionValue2]) {
        setSelectedPropOption(element[selectOptionValue2].id);
      } else {
        setSelectedPropOption(element[selectOptionValue]);
      }
    }
  };

  return (
    <div className="p-4 bg-white rounded shadow-md">
      {!isEditing && (
        <InputSelect
          label={`Escolha um(a) ${elementTitle} para editar`}
          options={elements}
          onChange={(e) => handleSetSelectedOption(e.target.value)}
          value={selectedOption}
        />
      )}
      {isEditing && (
        <>
          <form>
            <InputText
              label={`Edite o nome do(a) ${elementTitle}`}
              value={newElementName}
              onChange={(e) => setNewElementName(e.target.value)}
              placeholder={`Digite aqui o novo nome do(a) ${elementSubtitle}`}
              id="name"
              name="name"
            />
            {isSelect && (
              <InputSelect
                label={`Escolha um(a) ${selectOptionLabel}`}
                options={selectOptions}
                onChange={(e) => setSelectedPropOption(e.target.value)}
                value={selectedPropOption}
                optionViewName={selectOptionViewName}
                id="select"
                name="select"
              />
            )}

            <div className="flex flex-row items-start mt-3">
              <button
                type="submit"
                className="bg-green-500 text-white p-2 rounded-md mr-2 flex items-center"
                onClick={(event) => handleSubmit(event)}
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
          </form>
        </>
      )}
      {!isEditing && selectedOption != "" && (
        <>
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
        </>
      )}
    </div>
  );
}
