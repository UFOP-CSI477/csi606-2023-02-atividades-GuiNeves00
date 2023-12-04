const getRepository = async (user) => {
  /* 
        Esta função vai faz um request na API aberta do github
        e retorna um array contendo as seguintes informações do usuário
        login, email, public_repos, followers, following
    */

  try {
    const url = `https://api.github.com/users`;
    const data = await fetch(`${url}/${user}`)
      .then((data) => data.json())
      .catch((err) => err.json());

    //mudei de const pra let pra permitir tratamento de emails privados
    let { login, email, public_repos, followers, following } = data;
    email = email || "email not public"; // tratamento para perfis github com email privado
    return [login, email, public_repos, followers, following];
  } catch (e) {
    console.error(e);
  }
};

const showError = () => {
  /*
        Criar uma função que mostre um erro ao usuário
        quando o usuário pesquisado não existir 
    */
  disableText = document.getElementById("disable_text");
  disableText.style.display = "block";
};

const insertRow = async () => {
  //Recupere o input digitado
  var nameValue = document.getElementById("github_name").value;
  console.log("nameValue: " + nameValue);

  const userInfos = await getRepository(nameValue);

  /*  
        Se o elemento login retornado pela função getRepository 
        for undefined, significa que o usuário não existe, então será
        mostrado ao usuário uma mensagem de erro
    */
  if (!userInfos[0]) {
    showError();
    return true;
  } else {
    //remove msg de erro da tela
    disableText = document.getElementById("disable_text");
    disableText.style.display = "none";
  }

  //adicione o usuário digitado na tabela de id "myTable"
  const table = document
    .getElementById("myTable")
    .getElementsByTagName("tbody")[0];
  const newRow = table.insertRow(table.rows.length);
  for (let i = 0; i < userInfos.length; i++) {
    const cell = newRow.insertCell(i);
    cell.innerHTML = userInfos[i];
  }
};
