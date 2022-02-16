import data from './data/ghibli/ghibli.js';// estas funciones son de ejemplo
export const filtervehicles =() =>{ //filtro de vehiculos
  let vehicles2 = data.films.filter( film => film.vehicles.length !==0) 
 console.log(vehicles2); 
}

export const filterlocation =() =>{ //filtro de locaciones
  let location2 = data.films.filter( film => film.locations.length !==0)
  console.log(location2);
}
// Filtros por score
export const rtgood = () =>{
  let rtscorebuena= data.films.filter(film =>film.rt_score >= 90)// filtro de puntaje pelicula buena
 console.log('bueno',rtscorebuena); 
 
}
export const rtregular = () =>{
  let rtscoreregular= data.films.filter(film => film.rt_score >= 80 && film.rt_score < 90 )// filtro de puntaje pelicula regular
  console.log('regular', rtscoreregular)
  
}
export const rtbad = () =>{
  let rtscorebad= data.films.filter( film=> film.rt_score < 80)// filtro de puntaje pelicula mala
  console.log('malo', rtscorebad)
}
// filtros por personajes
export const characters =() =>{
  let characters2= data.films.filter( film => {
   film.people.map(personaje=> console.log
    (personaje.name))
   })

  console.log(characters2)
    { 
      
      console.log('nombres personajes', characters2)
  }
 
  }  


