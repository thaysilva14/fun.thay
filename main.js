 minutos %= 60;
    horas %= 24;
    if (tempoFinal > 0){
        return dias + " dias " + horas + " horas " + minutos + " minutos " + segundos + " segundos";
        return [dias,horas,minutos,segundos];
    } else {
        return "Prazo Finalizado";
        return [0,0,0,0];
    }
}

function atualizaCronometro(){

    document.getElementById("dias0").textContent = calculaTempo(tempos[0])[0];
    document.getElementById("horas0").textContent = calculaTempo(tempos[0])[1];
    document.getElementById("min0").textContent = calculaTempo(tempos[0])[2];
    document.getElementById("seg0").textContent = calculaTempo(tempos[0])[3];

    for (let i=0; i<contadores.length;i++){
        contadores[i].textContent = calculaTempo(tempos[i]);   
       // contadores[i].textContent = calculaTempo(tempos[i]);   
    }
}

@@ -53,4 +57,4 @@ function comecaCronometro(){
    setInterval(atualizaCronometro,1000);
}

//comecaCronometro();
comecaCronometro();
