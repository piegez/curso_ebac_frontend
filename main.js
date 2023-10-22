function validarFormulario() {
    
    var campoA = parseFloat(document.getElementById('campoA').value);
    var campoB = parseFloat(document.getElementById('campoB').value);

    
    if (campoB > campoA) {
        
        document.getElementById('mensagem').innerHTML = "Seu dados foram enviados com sucesso";
    } else {
        
        document.getElementById('mensagem').innerHTML = "Dados inválidos. B precisa ser maior que A";
    }
}