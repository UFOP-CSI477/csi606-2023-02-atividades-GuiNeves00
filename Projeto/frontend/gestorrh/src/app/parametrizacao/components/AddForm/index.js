"use client";
import React, { useState } from "react";
import InputText from "@/components/InputText";
import InputSelect from "@/components/InputSelect";

export default function AddForm({
  addElement,
  elementTitle,
  elementSubtitle,
  isSelect = false,
  selectOptions = [],
  selectOptionViewName = "",
  selectOptionLabel = "",
  selectOptionValue = "",
}) {
  const [nameElement, setNameElement] = useState("");
  const [selectedOption, setSelectedOption] = useState("");

  const handleSubmit = (e) => {
    let element = {};
    if (isSelect) {
      element = {
        name: nameElement,
        [selectOptionValue]: selectedOption,
      };
    } else {
      element = {
        name: nameElement,
      };
    }
    e.preventDefault();
    let requiredFields = [];
    if (isSelect) {
      requiredFields = ["name", "select"];
    } else {
      requiredFields = ["name"];
    }
    const isValid = requiredFields.every(
      (field) => nameElement !== null && nameElement.trim() !== ""
    );
    if (isValid) {
      addElement(element);
      setNameElement("");
      setSelectedOption("")
      // window.location.reload();
    } else {
      alert("Preencha todos os campos obrigatórios!");
    }
  };

  const handleSetSelectedOption = (option) => {
    setSelectedOption(option);
  };

  return (
    <div className="mt-14 p-4 bg-white rounded shadow-md">
      <div>
        <h1>{elementTitle}</h1>
        <div>
          <form>
            <InputText
              label={`Insira um novo(a) ${elementTitle}:`}
              placeholder={`Digite aqui o nome do(a) novo(a) ${elementSubtitle}`}
              required
              value={nameElement}
              onChange={(e) => setNameElement(e.target.value)}
              id="name"
              name="name"
            />
            {isSelect && (
              <InputSelect
                label={`Escolha um(a) ${selectOptionLabel}`}
                options={selectOptions}
                onChange={(e) => handleSetSelectedOption(e.target.value)}
                value={selectedOption}
                optionViewName={selectOptionViewName}
                id="select"
                name="select"
              />
            )}
            <button
              type="submit"
              className="bg-blue-500 text-white p-2 rounded-md mt-4 flex items-center"
              onClick={() => handleSubmit(event)}
            >
              Inserir
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
