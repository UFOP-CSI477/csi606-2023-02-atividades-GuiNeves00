// Atualiza o seu contador a cada 1 segundo
const countDown = setInterval(function () {
  // Data para contagem regressiva
  let countDownDate = new Date("Feb 10, 2024").getTime();
  console.log("countDownDate: " + countDownDate);

  // Encontrando o horário atual
  let now = new Date().getTime();
  console.log("now: " + now);

  // Encontrando a distância entre as datas
  let distance = countDownDate - now;
  console.log("distance: " + distance);

  if (distance > 0) {
    //     // Calculando os dias/horas/minutos/segundos
    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    //     // Insira os suas variáveis no html (use os ids já presentes no HTML)
    document.getElementById("countdown-day").innerText = days;
    document.getElementById("countdown-hours").innerText = hours;
    document.getElementById("countdown-minutes").innerText = minutes;
    document.getElementById("countdown-seconds").innerText = seconds;
  }
}, 1000);
