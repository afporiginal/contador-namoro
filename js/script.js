let intervalo;

function iniciarContagem() {
  clearInterval(intervalo);

  const inicioInput = document.getElementById('dataInicio').value;
  const inicio = new Date(inicioInput);

  if (!inicioInput || isNaN(inicio.getTime())) {
    document.getElementById('resultado').textContent = "Por favor, insira uma data válida.";
    return;
  }

  function atualizarTempo() {
    const agora = new Date();
    const diffMs = agora - inicio;

    const segundosTotais = Math.floor(diffMs / 1000);
    const minutosTotais = Math.floor(segundosTotais / 60);
    const horasTotais = Math.floor(minutosTotais / 60);
    const diasTotais = Math.floor(horasTotais / 24);

    const dias = diasTotais;
    const horas = horasTotais % 24;
    const minutos = minutosTotais % 60;
    const segundos = segundosTotais % 60;

    document.getElementById('resultado').textContent =
      `${dias} dias, ${horas} horas, ${minutos} minutos e ${segundos} segundos.`;
  }

  atualizarTempo();
  intervalo = setInterval(atualizarTempo, 1000);
}
