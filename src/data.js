import data from './data/ghibli/ghibli.js';// estas funciones son de ejemplo

export const filtervehicles =() =>{ //filtro de vehiculos
  let vehicles2 = data.films.filter( film => film.vehicles.length !==0) 
 return vehicles2; 
}

export const filterlocation =() =>{ //filtro de locaciones
  let location2 = data.films.filter( film => film.locations.length !==0)
  //console.log(location2);
  return location2;
}
// Filtros por score
export const rtgood = () =>{
  let rtscorebuena= data.films.filter(film =>film.rt_score >= 90)// filtro de puntaje pelicula buena
 //console.log('bueno',rtscorebuena);
 return rtscorebuena;
 
}
export const rtregular = () =>{
  let rtscoreregular= data.films.filter(film => film.rt_score >= 80 && film.rt_score < 90 )// filtro de puntaje pelicula regular
  //console.log('regular', rtscoreregular)
  return rtscoreregular
}
export const rtbad = () =>{
  let rtscorebad= data.films.filter( film=> film.rt_score < 80)// filtro de puntaje pelicula mala
  //console.log('malo', rtscorebad)
  return rtscorebad
}
// filtros por personajes
export const characters =() =>{
  let characters2= data.films.map( film => 
   film.people);
   let characters3= characters2.flat()
   console.log('nombres personajes', characters3);
  } 

 /* export const characters =() =>{
    let characters2= []
    data.films.forEach( film => 
     characters2.push(film.people));
     let characters3= characters2.flat()
     console.log('nombres personajes', characters3);
    }
     */
//ORDEN

export const orderaz= () =>{ //orden alfabetico az
  let orderaz1= data.films.map(film=> film)
  orderaz1.sort();
  console.log(orderaz1);

}
export const orderza= () =>{ //orden alfabetico za
  let orderza1= data.films.map(film=> film.title)
  orderza1.sort().reverse();
  //console.log("orden za", orderza1)
  return orderza1;
    
}

export const orderfecha12= () =>{
  let orderdate1= data.films.map(film=> film.release_date)
  orderdate1.sort();
  console.log("orden año", orderdate1)
}

export const orderfecha21= () =>{
  let orderdate2= data.films.map(film=> film.release_date)
  orderdate2.sort().reverse();
  console.log("orden año descendente", orderdate2)
}




    


