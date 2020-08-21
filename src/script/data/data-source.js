class DataSource {
   static searchFilm(keyword) {
       return fetch(`https://api.themoviedb.org/3/search/movie?query=${keyword}&api_key=8152b136a5dad36d2ca7844f884577ba&language=en-EN`)
       .then(response => {
           return response.json(); 
       })
       .then(responseJson => {
            if(responseJson.results) {
               if (responseJson.total_results == 0) {
                  return Promise.reject(`${keyword} is not found`); 
               }else{
                  return Promise.resolve(responseJson.results);
               }
           } else {
               return Promise.reject(`${keyword} is not found`);
           }
       })
   }
}

export default DataSource;