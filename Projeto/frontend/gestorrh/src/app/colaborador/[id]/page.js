"use client";
import React, { useEffect, useState } from "react";
import { getEmployeeByIdAsync } from "@/services/employeeService";
import Image from "next/image";
import EmployeeForm from "@/components/EmployeeForm";
import { useRouter } from "next/navigation";
import useEmployees from "@/hooks/useEmployees";

export default function Employee({ params }) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [employee, setEmployee] = useState(null);
  const [editEmployeeForm, setEditEmployeeForm] = useState(false);
  const {updateEmployee, deleteEmployee} = useEmployees()

  const router = useRouter()

  const formatZipCode = (zipCode) => {
    return zipCode.replace(/(\d{5})(\d{3})/, "$1-$2");
  };

  const handleEdit = ()=> {
    setEditEmployeeForm(true)
  }

  useEffect(() => {
    const fetchEmployee = async () => {
      try {
        const data = await getEmployeeByIdAsync(params.id);
        setEmployee(data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchEmployee();
  }, [params.id]);


  const handleSubmit = async (e, formValues) => {
    e.preventDefault();
    const requiredFields = [
      "urlImage",
      "fullName",
      "age",
      "birthday",
      "hiringDate",
      "cityId",
      "street",
      "number",
      "zipCode",
      "departamentId",
      "positionId",
    ];
    const isValid = requiredFields.every(
      (field) => formValues[field] !== null && formValues[field] !== ""
    );

    if (isValid) {
      console.log(employee)
      console.log(formValues)
      await updateEmployee(params.id,formValues);
      setEditEmployeeForm(!editEmployeeForm)
      window.location.reload()
    } else {
      alert("Preencha todos os campos obrigatórios!");
    }
  };

  const handleDelete = async () => {
    await deleteEmployee(params.id)
    router.push("/");
  }

  if (loading) {
    return (
      <div className="mt-14">
        <h1>Carregando...</h1>
      </div>
    );
  }

  if (error) {
    return (
      <div className="mt-14">
        <h1>Ocorreu um erro ao carregar os detalhes do colaborador.</h1>
        <p>{error.message}</p>
      </div>
    );
  }

if(editEmployeeForm){
  return <EmployeeForm isEdit={true}  handleSubmit={handleSubmit} handleCancel={() => {setEditEmployeeForm(false)}} employee={employee}/>
}
  return (
    <div className="mt-14 grid grid-cols-2 gap-8 w-screen">
      <div className="flex items-start flex-col">
        <div className="flex items-center justify-center mb-4 flex-wrap">
          <Image
            style={{ borderRadius: "50%" }}
            width={120}
            height={120}
            src={employee.urlImage}
            alt="Imagem do Colaborador"
          />
          <h2 className="text-xl font-bold mb-2 ml-4">{employee.fullName}</h2>
        </div>
        <div className="ml-4 flex gap-8 flex-wrap">
          <div>
            <h2 className="text-xl font-bold mb-2">Informações Pessoais</h2>
            <p>Idade: {employee.age}</p>
            <p>Data de Nascimento: {employee.birthday}</p>
            <p>
              Endereço: {employee.street}, {employee.number},{" "}
              {formatZipCode(employee.zipCode)}
            </p>
            <p>Cidade: {employee.city.name}</p>
            <p>
              Estado: {employee.city.state.name} ({employee.city.state.acronym})
            </p>
          </div>
          <div>
            <h2 className="text-xl font-bold mb-2">Informações do Trabalho</h2>
            <p>Departamento: {employee.departament.name}</p>
            <p>Cargo: {employee.position.name}</p>
            <p>Data de Contratação: {employee.hiringDate}</p>
          </div>
        </div>
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
      </div>
    </div> 
  );
}
