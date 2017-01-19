
var trsPacientes = document.getElementsByClassName("paciente");

var posicaoAtual = 0;

while(posicaoAtual < trsPacientes.length) {

  var pacienteTr = trsPacientes[posicaoAtual];

  var tdNome = pacienteTr.getElementsByClassName("info-nome")[0];
  var tdPeso = pacienteTr.getElementsByClassName("info-peso")[0];
  var tdAltura = pacienteTr.getElementsByClassName("info-altura")[0];
  var tdImc = pacienteTr.getElementsByClassName("info-imc")[0];

  var pacientes = {nome : tdNome.textContent, peso : tdPeso.textContent, altura : tdAltura.textContent };

  if (pacientes.altura != 0) {

    var imc = pacientes.peso / (pacientes.altura * pacientes.altura);  

    tdImc.textContent = imc;
    
  } else {
    console.log("Não executei porque altura é igual a zero");
  }
  posicaoAtual++;
}
