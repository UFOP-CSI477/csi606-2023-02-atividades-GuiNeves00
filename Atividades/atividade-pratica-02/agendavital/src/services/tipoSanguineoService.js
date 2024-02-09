import url from "@/http/url";

async function createTipoSanguineoAsync(tipoSanguineoDto) {
  try {
    const response = await fetch(`${url}/TipoSanguineo`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(tipoSanguineoDto),
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

async function getTiposSanguineosAsync() {
  try {
    const response = await fetch(`${url}/TipoSanguineo`);
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

async function getTipoSanguineoByIdAsync(tipoSanguineoId) {
  try {
    const response = await fetch(`${url}/TipoSanguineo/${tipoSanguineoId}`);
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

async function updateTipoSanguineoAsync(tipoSanguineoId, tipoSanguineoDto) {
  try {
    const response = await fetch(`${url}/TipoSanguineo/${tipoSanguineoId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(tipoSanguineoDto),
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

async function deleteTipoSanguineoAsync(tipoSanguineoId) {
  try {
    const response = await fetch(`${url}/TipoSanguineo/${tipoSanguineoId}`, {
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
  createTipoSanguineoAsync,
  getTiposSanguineosAsync,
  getTipoSanguineoByIdAsync,
  updateTipoSanguineoAsync,
  deleteTipoSanguineoAsync,
};
