"use client";
import { React } from "react";
import useEmployees from "@/hooks/useEmployees";
import EmployeeForm from "@/components/EmployeeForm";
import { useRouter } from "next/navigation";

export default function Employees() {
  const { addEmployee } = useEmployees();
  const router = useRouter()

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
      console.log("Formulário enviado:", formValues);
      await addEmployee(formValues);
      router.push("/");
    } else {
      alert("Preencha todos os campos obrigatórios!");
    }
  };

  return <EmployeeForm  handleSubmit={handleSubmit} />;
}
