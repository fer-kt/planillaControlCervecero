
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
        this.maltas.forEach(e => console.log(e) )
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


function buscarEstilo(estilo){  
    return cervezas.filter( e =>  e.estilo === estilo)
}


const cervezas = []
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

//let cerveza1 = ingresar()
let cerveza2 = new Cerveza('apa', [{nombre: 'malta1', cantidad: 200}, {nombre: 'malta2', cantidad : 300}, {nombre: 'malta3', cantidad: 300}  ],[ {nombre: 'cascade' , cantidad: 100 , adicion: 90 }],1052,1010)
let cerveza3 = new Cerveza('ipa', [{nombre: 'maltaIpa', cantidad: 200}, {nombre: 'maltaIpa2', cantidad : 300}, {nombre: 'malta3', cantidad: 300}], [ {nombre: 'amarillo' , cantidad: 100 , adicion: 90 }],1052,1010)
let cerveza4 = new Cerveza('ipa', [{nombre: 'otra malta', cantidad: 200}, {nombre: 'm2', cantidad : 300}, {nombre: 'm3', cantidad: 300}], [ {nombre: 'citra' , cantidad: 100 , adicion: 90 }],1052,1010)
let cerveza5 = new Cerveza('ipa', [{nombre: 'Pale Ale', cantidad: 15}, {nombre: 'caramelo 30', cantidad : 300}, {nombre: 'malta3', cantidad: 300}], [ {nombre: 'mosaic' , cantidad: 100 , adicion: 90 }],1052,1010)
let cerveza6 = new Cerveza('scottish', [{nombre: 'maltaScottish', cantidad: 200}, {nombre: 'maltaScottish2', cantidad : 300}, {nombre: 'malta3', cantidad: 300}], [ {nombre: 'Chinook' , cantidad: 100 , adicion: 90 }],1052,1010)



cervezas.push(cerveza2, cerveza3, cerveza4,cerveza5,cerveza6)

let buscarEjemplo = buscarEstilo('ipa')


const fecha = new Date()
const fechaP = document.getElementById('fechaP')
fechaP.innerText = ` Fecha: ${fecha.toLocaleDateString()} `



let cardUltimoLote = document.createElement('div')
let ultimoLote= cervezas.at(-1)
cardUltimoLote.className = 'container card fondo '
cardUltimoLote.innerHTML = `  <div class="card-header">
Último lote: ${cervezas.at(-1).estilo} Fecha:  
</div>
<div class="card-body ">
<h5 class="card-title"> Ingredientes </h5>
<p class="card-text">Maltas: ${ultimoLote.maltas.map((m)=> m.nombre)  }

lupulos: ${ultimoLote.lupulos.map((m)=> m.nombre)  }</p>
<a href="#" class="btn btn-primary">Ver información completa</a>
</div> `


document.body.append(cardUltimoLote)


 

