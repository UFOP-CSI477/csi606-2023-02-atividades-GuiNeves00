"use client";

import React, { useState } from "react";
import InputText from "@/components/InputText";
import { IoSaveOutline } from "react-icons/io";

export default function AddStateForm({
  addElement,
  elementTitle,
  elementSubtitle,
}) {
  const [newElementName, setNewElementName] = useState("");
  const [newElementAcronym, setNewElementAcronym] = useState("");

  const handleSubmit = (e) => {
    let element = {
      name: newElementName,
    };
    e.preventDefault();
    const requiredFields = ["name", "acronym"];

    const isValid = requiredFields.every(
      (field) => newElementName !== null && newElementName.trim() !== "" && newElementAcronym !== null && newElementAcronym.trim() !== ""
    );
    if (isValid) {
      addElement({
        name: newElementName,
        acronym: newElementAcronym
      });
      setNewElementName("");
      setNewElementAcronym("");
      // window.location.reload();
    } else {
      alert("Preencha todos os campos obrigatórios!");
    }
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
              value={newElementName}
              onChange={(e) => setNewElementName(e.target.value)}
              id="name"
              name="name"
            />
            <InputText
              label={`Edite o nome da abrevição do(a) ${elementTitle}`}
              value={newElementAcronym}
              onChange={(e) => setNewElementAcronym(e.target.value)}
              placeholder={`Digite aqui o novo nome da abreviação do(a) ${elementSubtitle}`}
              id="acronym"
              name="acronym"
            />
            <button
              type="submit"
              className="bg-blue-500 text-white p-2 rounded-md mt-4 flex items-center"
              onClick={() => handleSubmit(event)}
            >
              {/* <IoSaveOutline className="mr-2" /> */}
              Inserir
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
