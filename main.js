
class Cerveza{

    constructor(estilo, densidadInicial, densidadfinal){
        this.estilo = estilo        
        this.densidadInicial = densidadInicial
        this.densidadfinal = densidadfinal        
    }
    
    calcularAlcohol(){
        /*
        Densidad inicial - densidad final x 105   para obtener peso del alcohol
        peso del alcohol x 1,25 para obtener el volumen en %  
        */
       this.alc = (this.densidadInicial - this.densidadfinal) * 105 
       this.abv = ((this.alc * 1.25) / 1000 ).toFixed(2)
       console.log(`Volumen alcoholico de la ${this.estilo} : ${this.abv}%`)    
             
    }
    
    mostrar(){
        console.log(`Estilo: ${this.estilo} \n  Densidad inicial: ${this.densidadInicial} \n  Densidad final: ${this.densidadfinal} \n volumen alcoholico: ${this.abv} `)
    }

}



let dorada = new Cerveza('Dorada Pampeana', parseFloat(1060), parseFloat(1011))
dorada.calcularAlcohol()
dorada.mostrar()
