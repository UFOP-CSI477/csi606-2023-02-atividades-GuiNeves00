import url from "@/http/url";

async function createEmployeeAsync(employeeDto) {
  try {
    const response = await fetch(`${url}/colaborador`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(employeeDto),
    });

    if (!response.ok) {
      throw new Error(`Erro na requisição: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Erro na requisição:", error);
    throw error;
  }
}

async function getEmployeesAsync() {
  try {
    const response = await fetch(`${url}/colaborador`);
    if (!response.ok) {
      throw new Error(`Erro na requisição: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Erro na requisição:", error);
    throw error;
  }
}

async function getEmployeeByIdAsync(employeeId) {
  try {
    const response = await fetch(`${url}/colaborador/${employeeId}`);
    if (!response.ok) {
      throw new Error(`Erro na requisição: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Erro na requisição:", error);
    throw error;
  }
}

async function updateEmployeeAsync(employeeId, employeeDto) {
  try {
    console.log(employeeDto)
    const response = await fetch(`${url}/colaborador/${employeeId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(employeeDto),
    });

    if (!response.ok) {
      throw new Error(`Erro na requisição: ${response.status}`);
    }

    console.log(response);
  } catch (error) {
    console.error("Erro na requisição:", error);
    throw error;
  }
}

async function deleteEmployeeAsync(employeeId) {
  try {
    const response = await fetch(`${url}/colaborador/${employeeId}`, {
      method: "DELETE",
    });

    if (!response.ok) {
      throw new Error(`Erro na requisição: ${response.status}`);
    }

    console.log(response);
  } catch (error) {
    console.error("Erro na requisição:", error);
    throw error;
  }
}

export {
  createEmployeeAsync,
  getEmployeesAsync,
  getEmployeeByIdAsync,
  updateEmployeeAsync,
  deleteEmployeeAsync,
};
