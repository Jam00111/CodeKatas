class API {
  constructor() {
    this.API_URL = 'https://api.openbrewerydb.org/breweries/search?query=dog';
    this.API_SEARCH_URL = 'https://api.openbrewerydb.org/breweries/';
  }

  getDogs() {
    return fetch(this.API_URL)
      .then(res => res.json());
  }

  getBrewery(id){
    return fetch(`${this.API_SEARCH_URL}/${id}`)
      .then(res => res.json());
  }
}
