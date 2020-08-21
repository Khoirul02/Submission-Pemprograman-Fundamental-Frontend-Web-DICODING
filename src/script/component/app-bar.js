class AppBar extends HTMLElement {
   
   connectedCallback(){
       this.render();
   }
 
   render() {
       this.innerHTML = `<h1>Movie</h1>
        <p style="font-size: 16px;">The list of Favorite films stored in TMDb, Film Database (TMDb) is a film and TV database built by the community.</p>`;
   }
}
 
customElements.define("app-bar", AppBar);