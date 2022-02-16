import { filtervehicles, filterlocation, rtgood, rtregular, rtbad, characters } from './data.js';
//import data from './data/lol/lol.js';
import data from './data/ghibli/ghibli.js';
// import data from './data/rickandmorty/rickandmorty.js';

document.getElementById("pag2").style.display = "none";//ocultamos pag 2

const btn = document.getElementById("btn1");//le dimos funcionalidad al boton continuar para mostrar pag2 y ocultar pag1
btn.addEventListener("click", () => {
  document.getElementById("pag2").style.display = "block";
  document.getElementById("pag1").style.display = "none";
})

let msg = document.getElementById("msg");
msg.innerHTML = " ";
let get = document.getElementById("btn2");// le dimos funcionalidad al boton ingresar para mostar el msj concatenado
get.addEventListener("click", () => {
  const nameuser = document.getElementById("name").value;// Mostramos el msj con el nombre del usuario
  msg.innerHTML = nameuser + ' Aquí podras ver una pelicula a tu gusto y conocer algunas curiosidades ';
})
const crear = () => { //creamos la lista usando la data
  const templatelist = data.films.map((films) => `<li>${films.title} ${- films.release_date}</li>`);
  console.log(templatelist);
  let list = document.getElementById("list");
  list.innerHTML = templatelist.join('')
}

document.getElementById("pag3").style.display = "none"; //ocultamos la pagina 3

const btn1 = document.getElementById("btn3");// le dimos funcionalidad al boton ver más y mostrams la pag 3 ocultamos pag1 y pag2
btn1.addEventListener("click", () => {
  document.getElementById("pag3").style.display = "block";
  document.getElementById("pag2").style.display = "none";
  document.getElementById("pag1").style.display = "none";
})


const contentCard = () => {
  const card = document.querySelector('.card');
  const template = document.getElementById('templatecard').content;
  const clone= template.cloneNode(true);
  const fragment = document.createDocumentFragment();


  clone.querySelector('.card-img').setAttribute('src', films.poster);
  clone.querySelector('.card-ul-li')[0].textContent = films.tittle;
  clone.querySelector('.card-ul-li')[1].textContent = films.director;
  clone.querySelector('.card-ul-li')[2].textContent = films.release_date;
  clone.querySelector('.card-ul-li')[3].textContent = films.rt_score;

  fragment.appendChild(clone);
  card.appendChild(fragment);
  console.log(contentCard)
};


console.log(data);
crear();
filtervehicles();
filterlocation();
rtgood();
rtregular();
rtbad();
characters();





