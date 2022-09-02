AOS.init();

class Cerveza{

    constructor(estilo,maltas, lupulos, densidadInicial, densidadfinal, tempMacerado, tiempoMacerado, escalones){
        this.estilo = estilo 
        this.maltas = maltas      
        this.lupulos = lupulos       
        this.densidadInicial = parseFloat(densidadInicial)
        this.densidadfinal = parseFloat(densidadfinal)    
        this.tempMacerado = tempMacerado
        this.tiempoMacerado = tiempoMacerado  
        this.escalones = escalones  
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


let beer = new Cerveza() // instancia vacia de Cerveza, se va armando a medida que avanza el proceso

//  un poco de azuquitar sintactica. toma de local storage el array de cervezas si existe, o lo crea vacio si no existe
let cervezas = JSON.parse(localStorage.getItem('cervezas')) || []

// if(localStorage.getItem('cervezas')){
//     cervezas = JSON.parse(localStorage.getItem('cervezas'))
// }else{
//     cervezas= []
// }


const maltas = []
const lupulos = []

const txtEstilo = document.getElementById('estilo')
const malta = document.getElementById('maltaBase')
const cantidadMalta = document.getElementById('cantidadMalta')
const btnMalta = document.getElementById('agregarcampo')
const divMaltas = document.getElementById('maltasAgregadas')
const maltaCard = document.createElement('p')

const txtBuscar = document.getElementById('txtBuscar')
const btnBuscar = document.getElementById('btnBuscar')
const textoBuscar = document.getElementById('liBuscar')



// le doy display none acá porque si lo pongo adentro no me toma el primer click
document.getElementById('formBuscar').style.display = 'none'
textoBuscar.onclick = ()=>{
    let form = document.getElementById('formBuscar')
    form.className += " animate__animated animate__backInLeft"    
    form.style.display == 'none' ? form.style.display = 'block' : form.style.display = 'none'   
}
    

document.getElementById('btnLotes').addEventListener('click', (e)=>{
    e.preventDefault()
    let index= 0;
    document.getElementById('divPrincipal').style.display = 'none'
    cervezas.map(e=>{    
    let card = document.createElement('div')
   card.innerHTML= `  <div class="card-header">
Estilo: ${e.estilo} Fecha: ${e.fecha}   
</div>
<div class="card-body ">
<h5 class="card-title"> Ingredientes </h5>
<p class="card-text">Maltas: ${e.maltas.map(e => e.nombre)}
<br>
lupulos:</p>
<a href="#" id= "btn${index}" class="btn btn-primary">Ver información completa</a>
</div> `

document.body.appendChild(card)
index ++
})
    
})

btnBuscar.onclick = (e)=>{
    e.preventDefault()
    let resultado = buscarEstilo(txtBuscar.value)
    document.getElementById('divPrincipal').style.display = 'none'
    if (resultado.length > 0 ){
        resultado.map(e => console.log(`${e.estilo} - ${e.fecha}`))     
    } else{
        console.log('no se encuentra');
    }

}

btnMalta.onclick= (e)=>{ 
    e.preventDefault()
    let maltainput = new Malta(malta.value, cantidadMalta.value)
    maltas.push(maltainput)
    malta.placeholder= ''
    document.getElementById('divOcultar').style.display = 'none'
    document.getElementById('fechaP').innerText = ` ${txtEstilo.value} - ${fecha.toLocaleDateString()}`
    document.getElementById('maltasAgregadas').style.display= 'block'
    let tabla = document.getElementById('tabla__maltas')
    document.querySelector('.table').style.overflow = 'hidden'
    tabla.innerHTML += `  <tr> <td class='animate__animated animate__fadeInLeft'> ${malta.value} </td> <td class= 'animate__animated animate__fadeInRight'>${cantidadMalta.value}</td>
  </tr> `
    malta.value= ''
    cantidadMalta.value= 0
    beer.estilo = txtEstilo.value
    beer.maltas = maltas
    beer.fecha = fecha.toLocaleDateString()
    
}

const addTemp = document.getElementById('addTemp')
addTemp.onclick = ()=> {
    tempMacerado = document.getElementById('tempInput')
    tiempoMacerado = document.getElementById('tiempoInput')
    beer.tiempoMacerado = tiempoMacerado.value
    beer.tempMacerado = tempMacerado.value 
    tiempoMacerado.disabled = true 
    tempMacerado.disabled = true
    
}
document.getElementById('agregarEscalon').addEventListener('click', (e)=>{
    e.preventDefault()
    console.log(document.getElementById('tiempoEscalon').value);
})



 // OCULTAR Y EXPANDIR DIVS

 let btnExpand = document.getElementById('expand')
 btnExpand.addEventListener('click', ()=> {
    //
    if (btnExpand.innerText == 'expand_less') {
        document.getElementById('formMacerado').className = 'ocultar';
        btnExpand.innerText = 'expand_more'
    }else{
        btnExpand.innerText = 'expand_less'
        document.getElementById('formMacerado').classList.remove('ocultar')
    }  
    
})


let expandLavado = document.getElementById('expandLavado')
expandLavado.addEventListener('click', ()=>{
    if (expandLavado.innerText == 'expand_less'){
        document.getElementById('formLavado').className = 'ocultar'
        expandLavado.innerText ='expand_more'
    } else {
        expandLavado.innerText = 'expand_less'
        document.getElementById('formLavado').classList.remove('ocultar')
    }
})


document.getElementById('finalizarMacerado').addEventListener('click', (e)=>{
    e.preventDefault()
    document.getElementById('divMacerado').className = 'ocultar'
})

document.getElementById('finalizarLavado').addEventListener('click', (e)=>{
    e.preventDefault()
    document.getElementById('divLavado').className = 'ocultar'
})

let cerveza = new Cerveza(txtEstilo.value,maltas)



const fecha = new Date()
beer.fecha = fecha
const fechaP = document.getElementById('fechaP')
fechaP.innerText = ` Fecha: ${fecha.toLocaleDateString()} `



let finalizar = document.getElementById('finalizarCoccion')
finalizar.onclick= ()=> {
    
    cervezas.push(beer)
    localStorage.setItem('cervezas', JSON.stringify(cervezas))
    
    
}
let cardUltimoLote = document.createElement('div')
let ultimoLote= cervezas.at(-1)
cardUltimoLote.className = 'container card fondo col-sm-10 '
cardUltimoLote.innerHTML = `  <div class="card-header">
Último lote: ${cervezas.at(-1).estilo} Fecha: ${fecha.toLocaleDateString()}   
</div>
<div class="card-body ">
<h5 class="card-title"> Ingredientes </h5>
<p class="card-text">Maltas: ${ultimoLote.maltas.map((m)=> m.nombre)  }
<br>
lupulos:</p>
<a href="#" class="btn btn-primary">Ver información completa</a>
</div> `

document.getElementById('divPrincipal').appendChild(cardUltimoLote)



let apiBeers = []
document.getElementById('APIrecipes').addEventListener('click',()=>{
    document.getElementById('divPrincipal').style.display = 'none'
   let lista =  document.createElement('ul')
    
    fetch('https://api.punkapi.com/v2/beers')
        .then(response => response.json())
        .then(response => response.map(e =>{
            lista.innerHTML += ` <li id= 'API${e.id}' > ${e.name} - ${e.tagline}</li> `
            apiBeers.push(e)
            for (const beer of apiBeers) {               
                document.getElementById(`API${beer.id}`).addEventListener('click', ()=> {
                    lista.style.display = 'none'
                    let apiCard = document.createElement('div')
                    apiCard.innerHTML = `
                    <h2> ${beer.name} </h2>
                    <h3> ${beer.tagline} </h3>
                    <p> ${beer.description}  </p>
                    <img src="${beer.image_url}" alt="">

                    <p>ABV: ${beer.abv}
                    IBU: ${beer.ibu}
                    SRM: ${beer.srm}
                    Densidad Inicial: ${beer.target_og}
                    Densidad Final: ${beer.target_fg}
                    
                    Maltas: ${beer.ingredients.malt.map(e => e.name)}

                    </p>

                    `
                    document.body.appendChild(apiCard)
                    console.log(beer.id)})
                   
            }
            
           
            
        }))
        .catch(err => console.error(err));
        document.body.appendChild(lista)  
        
        
    })
    

 