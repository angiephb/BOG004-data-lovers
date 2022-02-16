import {filtervehicles, filterlocation, rtgood, rtregular, rtbad, characters} from './data.js';
 //import data from './data/lol/lol.js';
import data from './data/ghibli/ghibli.js';
// import data from './data/rickandmorty/rickandmorty.js';

document.getElementById("pag2").style.display="none";

const btn= document.getElementById("btn1");
btn.addEventListener("click", () =>{
 document.getElementById("pag2").style.display="block";
 document.getElementById("pag1").style.display="none";
})

let msg= document.getElementById("msg");
msg.innerHTML= " ";

let get= document.getElementById("btn2");
get.addEventListener("click", ()=>{
const nameuser= document.getElementById("name").value;
 msg.innerHTML = nameuser + ' Aquí podras ver una pelicula a tu gusto y conocer algunas curiosidades ';
})
const crear =() =>{
    const template = data.films.map((films) => `<li>${films.title } ${ - films.release_date}</li>`);
    //console.log( template );
    let list=document.getElementById("list");
    list.innerHTML = template.join('')
    return template
  }
  
document.getElementById("pag3").style.display="none";

const btn1= document.getElementById("btn3");
btn1.addEventListener("click", () =>{
 document.getElementById("pag3").style.display="block";
 document.getElementById("pag2").style.display="none";
 document.getElementById("pag1").style.display="none";

 return data
})
//console.log(data);

crear();
filtervehicles();
filterlocation();
rtgood();
rtregular();
rtbad();
characters();
