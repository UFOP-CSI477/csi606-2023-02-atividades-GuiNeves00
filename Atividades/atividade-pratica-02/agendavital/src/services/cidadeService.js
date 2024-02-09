import url from "@/http/url";

async function createCidadeAsync(cidadeDto) {
  try {
    const response = await fetch(`${url}/cidade`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(cidadeDto),
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

async function getCidadesAsync() {
  try {
    const response = await fetch(`${url}/cidade`);
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

async function getCidadeByIdAsync(cidadeId) {
  try {
    const response = await fetch(`${url}/cidade/${cidadeId}`);
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

async function updateCidadeAsync(cidadeId, cidadeDto) {
  try {
    const response = await fetch(`${url}/cidade/${cidadeId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(cidadeDto),
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

async function deleteCidadeAsync(cidadeId) {
  try {
    const response = await fetch(`${url}/cidade/${cidadeId}`, {
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
  createCidadeAsync,
  getCidadesAsync,
  getCidadeByIdAsync,
  updateCidadeAsync,
  deleteCidadeAsync,
};
