
function CalculaImc() {
  var trsPacientes = document.getElementsByClassName("paciente");

  var posicaoAtual = 0;

  for (var posicaoAtual; posicaoAtual < trsPacientes.length; posicaoAtual++) {

    var pacienteTr = trsPacientes[posicaoAtual];

    var tdNome = pacienteTr.getElementsByClassName("info-nome")[0];
    var tdPeso = pacienteTr.getElementsByClassName("info-peso")[0];
    var tdAltura = pacienteTr.getElementsByClassName("info-altura")[0];
    var tdImc = pacienteTr.getElementsByClassName("info-imc")[0];

    var pacientes = { nome: tdNome.textContent, peso: tdPeso.textContent, altura: tdAltura.textContent };

    if (pacientes.altura != 0) {

      var imc = pacientes.peso / (pacientes.altura * pacientes.altura);

      tdImc.textContent = imc;

    } else {
      console.log("Não executei porque altura é igual a zero");
    }
  }
}

function AdicionarPaciente(){

  var Nome = document.getElementById("campo-nome");
  var Peso = document.getElementById("campo-peso");
  var Altura = document.getElementById("campo-altura");

  


}