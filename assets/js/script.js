function meuEscopo() {
  const formulario = document.querySelector("#form");
  const result = document.querySelector("#result");
  const abaixoPeso = document.querySelector("#abaixoPeso");
  const pesoNormal = document.querySelector("#pesoNormal");
  const sobrepeso = document.querySelector("#sobrepeso");
  const obesidadeI = document.querySelector("#obesidadeI");
  const obesidadeII = document.querySelector("#obesidadeII");
  const obesidadeIII = document.querySelector("#obesidadeIII");

  function calculateImc(e) {
    e.preventDefault();
    const weight = Number(formulario.querySelector("#weight").value);
    const height = Number(formulario.querySelector("#height").value);
    const options = document.querySelector("#resultColor").children;
    console.log(options);

    for (let i = 0; i < options.length; i++) {
      options[i].style.backgroundColor = "transparent";
      console.log(options[i]);
    }

    if (
      !isNaN(weight) === true &&
      weight != "" &&
      !isNaN(height) &&
      height != ""
    ) {
      const getImc = weight / height ** 2;
      const imc = getImc.toFixed(2);

      if (imc < 18.5) {
        result.innerHTML = `<p> Você está com: ${imc} imc</p>`;
        abaixoPeso.style.backgroundColor = "yellow";
      } else if (imc > 18.5 && imc < 24.9) {
        result.innerHTML = `<p> Você está com: ${imc} imc</p>`;
        pesoNormal.style.backgroundColor = "green";
      } else if (imc > 25 && imc < 29.9) {
        result.innerHTML = `<p> Você está com: ${imc} imc</p>`;
        sobrepeso.style.backgroundColor = "yellow";
      } else if (imc > 30 && imc < 34.9) {
        result.innerHTML = `<p> Você está com: ${imc} imc</p>`;
        obesidadeI.style.backgroundColor = "orange";
      } else if (imc > 35 && imc < 39.9) {
        result.innerHTML = `<p> Você está com: ${imc} imc</p>`;
        obesidadeII.style.backgroundColor = "red";
      } else if (imc >= 40) {
        result.innerHTML = `<p> Você está com: ${imc} imc</p>`;
        obesidadeIII.style.backgroundColor = "rgb(116, 13, 13)";
      }
    } else {
      result.innerHTML =
        "<p>Peso ou Altura inválido, digite um número válido</p>";
    }

    return console.log(weight, height);
  }

  formulario.addEventListener("submit", calculateImc);
}
meuEscopo();
