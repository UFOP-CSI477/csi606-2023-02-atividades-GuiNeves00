import url from "@/http/url";

async function createDoadorAsync(doadorDto) {
  console.log(doadorDto)
  try {
    const response = await fetch(`${url}/doador`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(doadorDto),
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

async function getDoadoresAsync() {
  try {
    const response = await fetch(`${url}/doador`);
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

async function getDoadorByIdAsync(doadorId) {
  try {
    const response = await fetch(`${url}/doador/${doadorId}`);
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

async function updateDoadorAsync(doadorId, doadorDto) {
  try {
    console.log(doadorDto)
    const response = await fetch(`${url}/doador/${doadorId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(doadorDto),
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

async function deleteDoadorAsync(doadorId) {
  try {
    const response = await fetch(`${url}/doador/${doadorId}`, {
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
  createDoadorAsync,
  getDoadoresAsync,
  getDoadorByIdAsync,
  updateDoadorAsync,
  deleteDoadorAsync,
};
