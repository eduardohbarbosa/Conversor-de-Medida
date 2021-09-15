function calcular(){
    var primeiraMedida = Number(document.querySelector("#medida1").value)
    var segundaMedida = Number(document.querySelector("#medida2").value)
    var medicao1 = document.querySelector('#selecionarMedidas1').value
    var medicao2 = document.querySelector('#selecionarMedidas2').value
    var resultado = document.querySelector('#resultado')

    if(medicao1 == "selecionar" || medicao2 == "selecionar"){
        resultado.innerHTML = "Selecione uma media para calcular"
    }else if(medicao1 == medicao2){
        resultado.innerHTML = "Selecione uma medias diferentes calcular"
    } 
}