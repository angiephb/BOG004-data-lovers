import { filtervehicles, filterlocation, rtgood, rtregular, rtbad, orderaz, orderza, orderfecha12, orderfecha21, stadistics } from './data.js';
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
  msg.innerHTML = nameuser.toUpperCase() + ' , aquí podras ver una pelicula a tu gusto y conocer algunas curiosidades. ';
})
const crear = () => { //creamos la lista usando la data
  const templatelist = data.films.map((films) => `<li>${films.title} ${- films.release_date}</li>`);
  //console.log(templatelist);
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
    `<div class="card">
      <div class= "delante">
        <div class="poster">
          <img src="${film.poster}" alt="postermovie">
        </div>
        <div class="datamovie">
          <ul id="datos">
            <li id="tittle"> ${film.title} </li>
            <li id="director">${film.director} </li>
            <li id="date">${film.release_date}</li>
            <li id="score"> Score: ${film.rt_score} </li>
          </ul>
        </div>
      </div>
      <div class= "atras">
        <p id=description> ${film.description} <p/>
      </div>
    </div>`

  const bodyc = document.createElement("div")
  bodyc.classList.add("body-card")
  bodyc.innerHTML = template
  card.appendChild(bodyc);

};

data.films.forEach((film) => {
  contentCard(film);
})

//funcionalidad botones filtros

const btnfilter1 = document.getElementById("btnrt1");// cards rt bueno
btnfilter1.addEventListener("click", () => {
  const bodyc = document.getElementById("cards");
  bodyc.innerHTML = " "
  let cardrtg = rtgood(data);
  cardrtg.forEach((film) => {
    contentCard(film);
  })
})

const btnfilter2 = document.getElementById("btnrt2");// cards rt regular
btnfilter2.addEventListener("click", () => {
  const bodyc = document.getElementById("cards");
  bodyc.innerHTML = " "
  let cardrtr = rtregular(data);
  cardrtr.forEach((film) => {
    contentCard(film);
  })
})

const btnfilter3 = document.getElementById("btnrt3");// cards rt regular
btnfilter3.addEventListener("click", () => {
  const bodyc = document.getElementById("cards");
  bodyc.innerHTML = " "
  let cardrtb = rtbad(data);
  cardrtb.forEach((film) => {
    contentCard(film);
  })
})

const btnfilter4 = document.getElementById("vehicles");// cards films con vehiculos
btnfilter4.addEventListener("click", () => {
  const bodyc = document.getElementById("cards");
  bodyc.innerHTML = " "
  let cardve = filtervehicles(data);
  cardve.forEach((film) => {
    contentCard(film);
  })
})

const btnfilter5 = document.getElementById("location");// cards films locaciones
btnfilter5.addEventListener("click", () => {
  const bodyc = document.getElementById("cards");
  bodyc.innerHTML = " "
  let cardlo = filterlocation(data);
  cardlo.forEach((film) => {
    contentCard(film);
  })
})

const btnorder1 = document.getElementById("ascendente");// cards orden films a-z
btnorder1.addEventListener("click", () => {
  const bodyc = document.getElementById("cards");
  bodyc.innerHTML = " "
  let cardaz = orderaz(data);
  cardaz.forEach((film) => {
    contentCard(film);
  })
})

const btnorder2 = document.getElementById("descendente");// cards orden descendente
btnorder2.addEventListener("click", () => {
  const bodyc = document.getElementById("cards");
  bodyc.innerHTML = " "
  let cardza = orderza(data);
  cardza.forEach((film) => {
    contentCard(film);
  })
})

const btnorderdate1 = document.getElementById("btny2");// cards lanzamiento mas antiguo
btnorderdate1.addEventListener("click", () => {
  const bodyc = document.getElementById("cards");
  bodyc.innerHTML = " "
  let cardyear = orderfecha12(data);
  cardyear.forEach((film) => {
    contentCard(film);
  })
})

const btnorderdate2 = document.getElementById("btny1");// cards lanzamiento mas reciente
btnorderdate2.addEventListener("click", () => {
  const bodyc = document.getElementById("cards");
  bodyc.innerHTML = " "
  let cardyear = orderfecha21(data);
  cardyear.forEach((film) => {
    contentCard(film);
  })
})



crear();


stadistics(data);








