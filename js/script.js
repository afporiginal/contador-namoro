let intervalo;

function iniciarContagem() {
  clearInterval(intervalo);

  const input = document.getElementById('dataInicio');
  if (!input || !input.value) return;

  const inicio = new Date(input.value);
  if (isNaN(inicio.getTime())) {
    document.getElementById('resultado').textContent = "Por favor, insira uma data válida.";
    return;
  }

  function atualizar() {
    const agora = new Date();
    const diff = agora - inicio;

    if (diff < 0) {
      document.getElementById('resultado').textContent = "A data está no futuro.";
      return;
    }

    const totalSegundos = Math.floor(diff / 1000);
    const dias = Math.floor(totalSegundos / (60 * 60 * 24));
    const horas = Math.floor((totalSegundos % (60 * 60 * 24)) / 3600);
    const minutos = Math.floor((totalSegundos % 3600) / 60);
    const segundos = totalSegundos % 60;

    document.getElementById('resultado').textContent =
      `${dias} dias, ${horas} horas, ${minutos} minutos e ${segundos} segundos.`;
  }

  atualizar();
  intervalo = setInterval(atualizar, 1000);
}
