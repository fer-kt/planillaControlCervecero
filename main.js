AOS.init();



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


// instancia vacia de Cerveza, se va armando a medida que avanza el proceso
let beer = {}

//  un poco de azuquitar sintactica. toma de local storage el array de cervezas si existe, o lo crea vacio si no existe
let cervezas = JSON.parse(localStorage.getItem('cervezas')) || []




//    ARRAYS VACIOS QUE SE VAN LLENANDO CON LOS VALUES DEL DOM

const maltas = []
const lupulos = []


/*                    DOM                                                                              */

const txtEstilo = document.getElementById('estilo')
const malta = document.getElementById('maltaBase')
const cantidadMalta = document.getElementById('cantidadMalta')
const btnMalta = document.getElementById('agregarcampo')
const divMaltas = document.getElementById('maltasAgregadas')
const maltaCard = document.createElement('p')

const txtBuscar = document.getElementById('txtBuscar')
const btnBuscar = document.getElementById('btnBuscar')
const textoBuscar = document.getElementById('liBuscar')

const btnAddLupulo = document.getElementById('btnAddLupulo')



// le doy display none acá porque si lo pongo adentro no me toma el primer click

document.getElementById('formBuscar').style.display = 'none'
textoBuscar.onclick = ()=>{
    let form = document.getElementById('formBuscar')
    form.className += " animate__animated animate__backInLeft"    
    form.style.display == 'none' ? form.style.display = 'block' : form.style.display = 'none'   
}
    

document.getElementById('addLupulo').addEventListener('click', ()=>{
    document.getElementById('lupulosAgregados').style.display = 'block'
    let lupulo = new Lupulo(document.getElementById('lupulo').value,document.getElementById('lupuloCantidad').value )
    lupulos.push(lupulo)
    let tabla = document.getElementById('tabla__lupulos')
    tabla.innerHTML += `<tr> <td class='animate__animated animate__fadeInLeft'> ${lupulo.nombre} </td> <td class= 'animate__animated animate__fadeInRight'>${lupulo.cantidad}</td>
  </tr> `
} )
    
    
    

btnAddLupulo.onclick = (e)=>{
    e.preventDefault()
    beer.lupulos = lupulos
    
}

document.getElementById('btnLotes').addEventListener('click', (el)=>{
    el.preventDefault()
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
lupulos:${e.lupulos.map(e => e.nombre)}</p>
<a href="#" id= "btn${index}" class="btn btn-primary">Ver información completa</a>
</div> `

document.body.appendChild(card)
index ++
})
    
})

btnBuscar.onclick = (e)=>{
    e.preventDefault()
    let resultado = buscarEstilo(txtBuscar.value)
    let card = document.createElement('div')
    document.getElementById('divPrincipal').style.display = 'none'
    if (resultado.length > 0 ){
        resultado.map((e) => card.innerHTML = `  <div class="card-header">
        Estilo: ${e.estilo} Fecha: ${e.fecha}   
        </div>
        <div class="card-body ">
        <h5 class="card-title"> Ingredientes </h5>
        <p class="card-text">Maltas: ${e.maltas.map(e => e.nombre)}
        <br>
        lupulos:${e.lupulos.map(e => e.nombre)}</p>
        </div> `)
             
    } else{
        card.innerHTML = ` <p> No se encuentra </p> `;
    }
    document.body.appendChild(card)

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

//          SECCIÓN DE MACERADO
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
    let escalonTemp = document.getElementById('tiempoEscalon').value
    let escalonTiempo = document.getElementById('temperaturaEscalon').value
    beer.escalonesTemp = {temperatura: escalonTemp, tiempo: escalonTiempo}
   
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
let ultimoLote= cervezas.at(-1) || 'nada'
cardUltimoLote.className = 'container card fondo col-sm-10 '
cardUltimoLote.innerHTML = `  <div class="card-header">
Último lote: ${cervezas.at(-1).estilo} Fecha: ${fecha.toLocaleDateString()}   
</div>
<div class="card-body ">
<h5 class="card-title"> Ingredientes </h5>
<p class="card-text">Maltas: ${ultimoLote.maltas.map((m)=> m.nombre)  }
<br>
lupulos: ${ultimoLote.lupulos.map((m)=> m.nombre)  }</p>
<a href="#" class="btn btn-primary">Ver información completa</a>
</div> `

document.getElementById('divPrincipal').appendChild(cardUltimoLote)



/*              API              */

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
    

 