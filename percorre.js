function percorreArray(trsPacientes, comportamento) {
    
    for (var posicaoAtual = 0; posicaoAtual < trsPacientes.length; posicaoAtual++) { 
            var pacienteTrAtual = trsPacientes[posicaoAtual]

            comportamento(pacienteTrAtual);

            //executa alguma coisa

    }

}