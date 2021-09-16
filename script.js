function calcular(){
    var primeiraMedida = Number(document.querySelector("#medida1").value)
    var medicao1 = document.querySelector('#selecionarMedidas1').value
    var medicao2 = document.querySelector('#selecionarMedidas2').value
    var resultado = document.querySelector('#resultado')

    if(medicao1 == "milimetro"){
        if (medicao2 == "milimetro"){
            resultado.innerHTML = `Conversão igual a ${primeiraMedida} mm` 
        }else if (medicao2 == "centimetro"){
            resultado.innerHTML = `Conversão igual a ${primeiraMedida / 10} cm` 
        }else if (medicao2 == "decimetro"){
            resultado.innerHTML = `Conversão igual a ${primeiraMedida / 100} dm` 
        }else if (medicao2 == "metro"){
            resultado.innerHTML = `Conversão igual a ${primeiraMedida /1000} m` 
        }else if (medicao2 == "decametro"){
            resultado.innerHTML = `Conversão igual a ${primeiraMedida / 10000} dam` 
        }else if (medicao2 == "hectometro"){
            resultado.innerHTML = `Conversão igual a ${primeiraMedida / 100000} hm` 
        }else if (medicao2 == "quilometro"){
            resultado.innerHTML = `Conversão igual a ${primeiraMedida / 1000000} km` 
        }
    }else if(medicao1 == "centimetro"){
        if (medicao2 == "milimetro"){
            resultado.innerHTML = `Conversão igual a ${primeiraMedida * 10} mm` 
        }else if (medicao2 == "centimetro"){
            resultado.innerHTML = `Conversão igual a ${primeiraMedida} cm` 
        }else if (medicao2 == "decimetro"){
            resultado.innerHTML = `Conversão igual a ${primeiraMedida / 10} dm` 
        }else if (medicao2 == "metro"){
            resultado.innerHTML = `Conversão igual a ${primeiraMedida / 100} m` 
        }else if (medicao2 == "decametro"){
            resultado.innerHTML = `Conversão igual a ${primeiraMedida / 1000} dam` 
        }else if (medicao2 == "hectometro"){
            resultado.innerHTML = `Conversão igual a ${primeiraMedida / 10000} hm` 
        }else if (medicao2 == "quilometro"){
            resultado.innerHTML = `Conversão igual a ${primeiraMedida / 100000} km` 
        }
    }else if(medicao1 == "decimetro"){
        if (medicao2 == "milimetro"){
            resultado.innerHTML = `Conversão igual a ${primeiraMedida * 100} mm` 
        }else if (medicao2 == "centimetro"){
            resultado.innerHTML = `Conversão igual a ${primeiraMedida * 10} cm` 
        }else if (medicao2 == "decimetro"){
            resultado.innerHTML = `Conversão igual a ${primeiraMedida} dm` 
        }else if (medicao2 == "metro"){
            resultado.innerHTML = `Conversão igual a ${primeiraMedida / 10} m` 
        }else if (medicao2 == "decametro"){
            resultado.innerHTML = `Conversão igual a ${primeiraMedida / 100} dam` 
        }else if (medicao2 == "hectometro"){
            resultado.innerHTML = `Conversão igual a ${primeiraMedida / 1000} hm` 
        }else if (medicao2 == "quilometro"){
            resultado.innerHTML = `Conversão igual a ${primeiraMedida / 10000} km` 
        }
    }else if(medicao1 == "metro"){
        if (medicao2 == "milimetro"){
            resultado.innerHTML = `Conversão igual a ${primeiraMedida * 1000} mm` 
        }else if (medicao2 == "centimetro"){
            resultado.innerHTML = `Conversão igual a ${primeiraMedida * 100} cm` 
        }else if (medicao2 == "decimetro"){
            resultado.innerHTML = `Conversão igual a ${primeiraMedida * 10} dm` 
        }else if (medicao2 == "metro"){
            resultado.innerHTML = `Conversão igual a ${primeiraMedida} m` 
        }else if (medicao2 == "decametro"){
            resultado.innerHTML = `Conversão igual a ${primeiraMedida / 10} dam` 
        }else if (medicao2 == "hectometro"){
            resultado.innerHTML = `Conversão igual a ${primeiraMedida / 100} hm` 
        }else if (medicao2 == "quilometro"){
            resultado.innerHTML = `Conversão igual a ${primeiraMedida / 1000} km` 
        }
    }else if(medicao1 == "decametro"){
        if (medicao2 == "milimetro"){
            resultado.innerHTML = `Conversão igual a ${primeiraMedida * 10000} mm` 
        }else if (medicao2 == "centimetro"){
            resultado.innerHTML = `Conversão igual a ${primeiraMedida * 1000} cm` 
        }else if (medicao2 == "decimetro"){
            resultado.innerHTML = `Conversão igual a ${primeiraMedida * 100} dm` 
        }else if (medicao2 == "metro"){
            resultado.innerHTML = `Conversão igual a ${primeiraMedida * 10} m` 
        }else if (medicao2 == "decametro"){
            resultado.innerHTML = `Conversão igual a ${primeiraMedida} dam` 
        }else if (medicao2 == "hectometro"){
            resultado.innerHTML = `Conversão igual a ${primeiraMedida / 10} hm` 
        }else if (medicao2 == "quilometro"){
            resultado.innerHTML = `Conversão igual a ${primeiraMedida / 100} km` 
        }
    }else if(medicao1 == "hectometro"){
        if (medicao2 == "milimetro"){
            resultado.innerHTML = `Conversão igual a ${primeiraMedida * 100000} mm` 
        }else if (medicao2 == "centimetro"){
            resultado.innerHTML = `Conversão igual a ${primeiraMedida * 10000} cm` 
        }else if (medicao2 == "decimetro"){
            resultado.innerHTML = `Conversão igual a ${primeiraMedida * 1000} dm` 
        }else if (medicao2 == "metro"){
            resultado.innerHTML = `Conversão igual a ${primeiraMedida * 100} m` 
        }else if (medicao2 == "decametro"){
            resultado.innerHTML = `Conversão igual a ${primeiraMedida * 10} dam` 
        }else if (medicao2 == "hectometro"){
            resultado.innerHTML = `Conversão igual a ${primeiraMedida} hm` 
        }else if (medicao2 == "quilometro"){
            resultado.innerHTML = `Conversão igual a ${primeiraMedida / 10} km` 
        }
    }else if(medicao1 == "quilometro"){
        if (medicao2 == "milimetro"){
            resultado.innerHTML = `Conversão igual a ${primeiraMedida * 1000000} mm` 
        }else if (medicao2 == "centimetro"){
            resultado.innerHTML = `Conversão igual a ${primeiraMedida * 100000} cm` 
        }else if (medicao2 == "decimetro"){
            resultado.innerHTML = `Conversão igual a ${primeiraMedida * 10000} dm` 
        }else if (medicao2 == "metro"){
            resultado.innerHTML = `Conversão igual a ${primeiraMedida * 1000} m` 
        }else if (medicao2 == "decametro"){
            resultado.innerHTML = `Conversão igual a ${primeiraMedida * 100} dam` 
        }else if (medicao2 == "hectometro"){
            resultado.innerHTML = `Conversão igual a ${primeiraMedida * 10} hm` 
        }else if (medicao2 == "quilometro"){
            resultado.innerHTML = `Conversão igual a ${primeiraMedida} km` 
        }
    }
}