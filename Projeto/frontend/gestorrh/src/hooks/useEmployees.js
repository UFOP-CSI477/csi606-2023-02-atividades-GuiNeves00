import { useState, useEffect } from "react";
import {
  getEmployeesAsync,
  updateEmployeeAsync,
  deleteEmployeeAsync,
  createEmployeeAsync,
} from "@/services/employeeService";

const useEmployees = () => {
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const data = await getEmployeesAsync();
        setEmployees(data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchEmployees();
  }, []);

  const addEmployee = async (newEmployee) => {
    try {
      const data = await createEmployeeAsync(newEmployee);
      newEmployee.id = data.id;
      setEmployees((prevEmployees) => [...prevEmployees, newEmployee]);
    } catch (error) {
      console.error("Erro ao adicionar colaborador:", error);
      throw error;
    }
  };

  const updateEmployee = async (employeeId, updatedEmployee) => {
    try {
      await updateEmployeeAsync(employeeId, updatedEmployee);
      setEmployees((prevEmployees) =>
        prevEmployees.map((employee) =>
          employee.id === employeeId
            ? { ...employee, ...updatedEmployee }
            : employee
        )
      );
    } catch (error) {
      console.error("Erro ao atualizar colaborador:", error);
      throw error;
    }
  };

  const deleteEmployee = async (employeeId) => {
    try {
      await deleteEmployeeAsync(employeeId);
      setEmployees((prevEmployees) =>
        prevEmployees.filter((employee) => employee.id !== employeeId)
      );
    } catch (error) {
      console.error("Erro ao excluir colaborador:", error);
      throw error;
    }
  };

  return {
    employees,
    loading,
    error,
    addEmployee,
    updateEmployee,
    deleteEmployee,
  };
};

export default useEmployees;
