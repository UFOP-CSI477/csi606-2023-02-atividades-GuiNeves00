import InputSelect from "@/components/InputSelect";
import InputText from "@/components/InputText";
import React from "react";
import { useState } from "react";

export default function UpdateForm2({
  elementTitle,
  elementSubtitle,
  elements,
  updateElement,
  deleteElement,
  getElementById,
  elementpropname1,
  elementpropname2,
}) {
  const [selectedOption, setSelectedOption] = useState("");
  const [newElementProp1, setNewElementProp1] = useState("");
  const [newElementProp2, setNewElementProp2] = useState("");
  const [editField, setEditField] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const requiredFields = ["elementpropname1", "elementpropname2"];

    const isValid = requiredFields.every(
      (field) =>
        newElementProp1 !== null &&
        newElementProp1.trim() !== "" &&
        newElementProp2 !== null &&
        newElementProp2.trim() !== ""
    );
    if (isValid) {
      let element = await getElementById(selectedOption);
      console.log(element)
      element[elementpropname1] = newElementProp1;
      element[elementpropname2] = newElementProp2;
      await updateElement(element.id, element);
      setEditField(!editField);
    } else {
      alert("Preencha todos os campos obrigatórios!");
    }
  };

  const handleCancel = () => {
    setEditField(!editField);
    const element = elements.find((el) => el.id === selectedOption);
    setNewElementProp1(element[elementpropname1]);
  };

  const handleEdit = () => {
    setEditField(!editField);
  };

  const handleDelete = async () => {
    await deleteElement(selectedOption);
    setSelectedOption("");
    window.location.reload();
  };

  const handleSetSelectedOption = (option) => {
    setSelectedOption(option);
    const element = elements.find((el) => el.id === option);
    setNewElementProp1(element[elementpropname1]);
    setNewElementProp2(element[elementpropname2]);
  };

  return (
    <div className="p-4 bg-white rounded shadow-md">
      {!editField && (
        <InputSelect
          label={`Escolha um(a) ${elementTitle} para editar`}
          options={elements}
          onChange={(e) => handleSetSelectedOption(e.target.value)}
          value={selectedOption}
          optionViewName={elementpropname1}
        />
      )}
      {editField && (
        <>
          <form>
            <InputText
              label={`Edite o nome do(a) ${elementSubtitle}`}
              value={newElementProp1}
              onChange={(e) => setNewElementProp1(e.target.value)}
              placeholder={`Digite aqui o ${elementpropname1} do(a) ${elementSubtitle}`}
              id="elementpropname1"
              elementpropname1="elementpropname1"
            />
            <InputText
              label={`Edite o nome da abrevição do(a) ${elementSubtitle}`}
              value={newElementProp2}
              onChange={(e) => setNewElementProp2(e.target.value)}
              placeholder={`Digite aqui o ${elementpropname2} do(a) ${elementSubtitle}`}
              id="elementpropname2"
              elementpropname1="elementpropname2"
            />
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
      {!editField && selectedOption != "" && (
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
