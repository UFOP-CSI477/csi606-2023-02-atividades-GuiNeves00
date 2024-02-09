import url from "@/http/url";

async function createDepartamentAsync(departamentDto) {
  try {
    const response = await fetch(`${url}/departamento`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(departamentDto),
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

async function getDepartamentsAsync() {
  try {
    const response = await fetch(`${url}/departamento`);
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

async function getDepartamentByIdAsync(departamentId) {
  try {
    const response = await fetch(`${url}/departamento/${departamentId}`);
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

async function updateDepartamentAsync(departamentId, departamentDto) {
  try {
    const response = await fetch(`${url}/departamento/${departamentId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(departamentDto),
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

async function deleteDepartamentAsync(departamentId) {
  try {
    const response = await fetch(`${url}/departamento/${departamentId}`, {
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
  createDepartamentAsync,
  getDepartamentsAsync,
  getDepartamentByIdAsync,
  updateDepartamentAsync,
  deleteDepartamentAsync,
};
