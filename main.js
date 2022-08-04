
class Cerveza{

    constructor(estilo,maltas, lupulos, densidadInicial, densidadfinal){
        this.estilo = estilo 
        this.maltas = maltas
        this.lupulos = lupulos       
        this.densidadInicial = parseFloat(densidadInicial)
        this.densidadfinal = parseFloat(densidadfinal)        
    }
    
    calcularAlcohol(){
       
       this.alc = (this.densidadInicial - this.densidadfinal) * 105 
       this.abv = ((this.alc * 1.25) / 1000 ).toFixed(2)
       console.log(`Volumen alcoholico de la ${this.estilo} : ${this.abv}%`)               
    }
    
    mostrarMaltas() {
        this.maltas.forEach(e => console.log( ` Malta: ${e.nombre} \nCantidad: ${e.cantidad} `) )
    }

    mostrarLupulos() {
        this.lupulos.forEach(e => console.log( ` Lúpulo: ${e.nombre} \nCantidad: ${e.cantidad} \nMinuto de adición: ${e.adicion}`) )
    }
    mostrar() { 
        return `Estilo: ${this.estilo} \n  Densidad inicial: ${this.densidadInicial} \n  Densidad final: ${this.densidadfinal} \n volumen alcoholico: ${this.abv} `
    }  

}

class Malta{
    constructor(nombre, cantidad = 0){
        this.nombre = nombre;
        this.cantidad = parseFloat(cantidad);
    }

    mostrar(){
        return ` Malta = ${this.nombre} - cantidad usada ${this.cantidad} `
    }

}

class Lupulo {
    constructor(nombre,cantidad,adicion){
        this.nombre = nombre
        this.cantidad = cantidad,
        this.adicion = parseInt(adicion)
    }
}


const maltas = []
const lupulos = []

/*           función que pide al usuario las maltas y los lúpulos utilizados           */
const ingresar = () => {
    let malta = ' '
    let lupulo = ' '

    do{
        malta = prompt('Malta (Aceptar para salir): ') 
        if(malta === ''){
            break
        }   
        let cantidad = parseFloat(prompt('Cantidad en KG'))
        maltas.push(new Malta(malta, cantidad)) 
    } while (malta != '')


    do{
        lupulo = prompt('lupulo (Aceptar para salir): ') 
        if(lupulo === ''){
            break
        }   
        let cantidad = parseFloat(prompt('Cantidad en GR'))
        let adicion = parseInt(prompt('Ingrese minuto de adición: '))
        lupulos.push(new Lupulo(lupulo, cantidad, adicion))
    } while (lupulo != '')

    return new Cerveza('ipa',maltas, lupulos,1060, 1011)

}

let micerveza = ingresar()


 



