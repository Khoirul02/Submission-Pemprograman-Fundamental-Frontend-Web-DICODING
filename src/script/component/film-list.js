import './film-item.js';
 
class FilmList extends HTMLElement {
   set films(films) {
       this._films = films;
       this.render();
   }
 
   render() {
       this.innerHTML = "";
       this._films.forEach(film => {
           const filmItemElement = document.createElement("film-item");
           filmItemElement.film = film
           this.appendChild(filmItemElement);
       })
   }

   renderError(message) {
       this.innerHTML = "";
       this.innerHTML += `<div class="container"> 
       <article class="box"> 
       <h3 style="text-align: center;">Film ${message}</h3>
       </div>`;
   }
 
}
 
customElements.define("film-list", FilmList);