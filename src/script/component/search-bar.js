class SearchBar extends HTMLElement {
   connectedCallback(){
       this.render();
   }
  
   set clickEvent(event) {
       this._clickEvent = event;
       this.render();
   }
 
   get value() {
       return this.querySelector("#searchElement").value;
   }
 
   render() {
       this.innerHTML = `
      <div class="container" style="margin-bottom: 10px;">
        <input type="text" name="film" class="form-search" id="searchElement" placeholder="Search Movie Name..">
        <button class="button" id="searchButtonElement" type="submit">Search Film</button>
      </div>
       `;
 
       this.querySelector("#searchButtonElement").addEventListener("click", this._clickEvent);
   }
}
 
customElements.define("search-bar", SearchBar);