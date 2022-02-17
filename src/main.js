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


const contentCard = (film) => { //creacion de tarjetas
  const card = document.querySelector('.cards');
  const template =
  `<div class= "delante">
    <div class="poster">
      <img src="${film.poster}" alt="postermovie">
    </div>
    <div class="datamovie">
      <ul id="datos">
        <li id="tittle"> Titulo: ${film.title} </li>
        <li id="director">Director: ${film.director} </li>
        <li id="date">Año de Lanzamiento: ${film.release_date}</li>
        <li id="score"> Score: ${film.rt_score} </li>
      </ul>
    </div>
    </div>
  <div class= "atras">
  <p id=description> ${film.description} <p/p
  </div>
  `

  const bodyc =document.createElement("div")
  bodyc.classList.add("body-card")
  bodyc.innerHTML=template
  card.appendChild(bodyc);

};

data.films.forEach((film)=>{
  contentCard(film);
})

console.log(data);
crear();
filtervehicles();
filterlocation();
rtgood();
rtregular();
rtbad();
characters();





