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
  let orderaz1= data.films.map(film=>film);
  let orderaz2 = orderaz1.sort((a, b)=>{
    const tituloa = a.title.toLowerCase();
    const titulob = b.title.toLowerCase();
      if (tituloa < titulob){
        return -1;
      }else if (tituloa > titulob){
        return 1;
      }else {return 0;}
        
}); 
//console.log("o", orderaz2);
return orderaz2;
}

export const orderza= () =>{ //orden alfabetico za
  let orderza1= data.films.map(film=> film)
  let orderza2 = orderza1.sort((a, b)=>{
    const tituloa = a.title.toLowerCase();
    const titulob = b.title.toLowerCase();
      if (tituloa < titulob){
        return 1;
      }else if (tituloa > titulob){
        return -1;
      }else {return 0;}
        
}); 
//console.log("o", orderza2);
return orderza2;
}

export const orderfecha12= () =>{//orden más antiguo
  let orderdate1= data.films.map(film=> film)
  let orderdate2 = orderdate1.sort((a, b)=>{
      if (a.release_date < b.release_date){
        return -1;
      }else if (a.release_date > b.release_date){
        return 1;
      }else {return 0;}
}); 
//console.log("año1", orderdate2);
return orderdate2;
}

export const orderfecha21= () =>{//orden más reciente
  let orderdate2= data.films.map(film=> film)
  let orderdate3 = orderdate2.sort((a,b) =>{
      if (a.release_date < b.release_date){
        return 1;
      }else if (a.release_date > b.release_date){
        return -1;
      }else {return 0}
});
//console.log("año2", orderdate3);
return orderdate3;
}




    


