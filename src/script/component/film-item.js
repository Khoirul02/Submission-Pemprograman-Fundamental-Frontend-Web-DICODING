class FilmItem extends HTMLElement {
   set film(film) {
       this._film = film;
       this.render();
   }
 
   render() {
       this.innerHTML = `<div class="container">
                <article style="background-image: url(https://image.tmdb.org/t/p/w220_and_h330_face${this._film.backdrop_path});height: 100%;width: 200px;" class="box">
                '<h3 style="text-align: center;">Film  ${this._film.original_title} </h3>
                <img class="center" src="https://image.tmdb.org/t/p/w220_and_h330_face${this._film.poster_path}" style="width: 100px;display: block;margin-bottom: 10px; border: 1px solid #ffffff;" alt="Poster Film">
                <table style="text-align: center;background-image: url(image/bg-deskripsi.png);border-radius: 5px;padding: 15px;margin: 5px;display: block;">
                <tr>
                <td>Vote : ${this._film.vote_average * 10} %</td>
                </tr>
                <tr>
                <td style="text-align: inherit;">Overview : ${this._film.overview} </br></td>
                </tr>
                <tr>
                <td>Release : ${new Date(this._film.release_date)}</td>
                </tr>
                </table>
                </article>
                </div>`;
   }
}
 
customElements.define("film-item", FilmItem);