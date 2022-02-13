import data from './data/ghibli/ghibli.js';// estas funciones son de ejemplo



//export default crear
//listf.innerHTML='<ul>${template}</ul>';
 

//export const anotherExample = () => {
  //return 'OMG';
//}*/

const filtervehiculos =() =>{
  let vehicles2= data.films.filter((films)=> {
  return films.vehicles;
  })

  .map((films) => {
    return `${films.vehicles} ${films.title}`;
  });
  console.log("vehiculos", vehicles2); 
}

/*const filtropelis =() =>{
  const vehicles = data.films.filter((films) => films.vehicles = `${ films.title } ${ - films.vehicles }`);
  console.log( vehicles );
 /* let filtervehiculos= document.getElementById("vehicles");
  filtervehiculos.innerHTML=vehicles.join('');
 return filtropelis;*/


export default filtervehiculos;
/*const crear =() =>{
  const template = data.films.map((films) => `<li>${films.title } ${ - films.release_date}</li>`);
  console.log( template );
  let list=document.getElementById("list");
  list.innerHTML = template.join('')*/
