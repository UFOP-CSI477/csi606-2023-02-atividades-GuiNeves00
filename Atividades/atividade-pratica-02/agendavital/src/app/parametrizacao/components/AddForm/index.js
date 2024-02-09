"use client";

import React, { useState } from "react";
import InputText from "@/components/InputText";
import InputSelect from "@/components/InputSelect";

export default function AddForm({
  addElement,
  elementTitle,
  elementSubtitle,
  selectOptions,
  selectOptionViewName,
  selectOptionLabel,
  selectOptionValue,
}) {
  const [nomeElement, setNameElement] = useState("");
  const [selectedOption, setSelectedOption] = useState("");

  const handleSubmit = (e) => {
    let element = {
      nome: nomeElement,
      [selectOptionValue]: selectedOption,
    };

    e.preventDefault();
    const requiredFields = ["nome"];

    const isValid = requiredFields.every(
      (field) => nomeElement !== null && nomeElement.trim() !== ""
    );
    if (isValid) {
      addElement(element);
      setNameElement("");
      setSelectedOption("");
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
              label={`Insira um novo(a) ${elementSubtitle}:`}
              placeholder={`Digite aqui o nome do(a) novo(a) ${elementSubtitle}`}
              required
              value={nomeElement}
              onChange={(e) => setNameElement(e.target.value)}
              id="nome"
              nome="nome"
            />

            <InputSelect
              label={`Escolha um(a) ${selectOptionLabel}`}
              options={selectOptions}
              onChange={(e) => handleSetSelectedOption(e.target.value)}
              value={selectedOption}
              optionViewName={selectOptionViewName}
            />
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
