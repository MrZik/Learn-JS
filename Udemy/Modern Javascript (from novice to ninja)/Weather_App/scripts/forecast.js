class Forecast{
    constructor(){
        this.key = 'yS9LsmVkhAdBvMyxI92A4hr6kxe4Bbd2';
        this.weatherURI = 'http://dataservice.accuweather.com/currentconditions/v1/';
        this.cityURI = 'http://dataservice.accuweather.com/locations/v1/cities/search';
    }

    async updateCity(city) {
        const cityDetails = await this.getCity(city);
        const weather = await this.getWeather(cityDetails.Key);

        // object shorthand notation
        // when property and value is the same
        return { cityDetails, weather };
    }

    async getCity(city){
        // always put ? before for query
        // & indicates the next query
        const query = `?apikey=${this.key}&q=${city}`;
        const response = await fetch(this.cityURI + query);
        // if(response.status != 200){
        //     throw new Error('cannot fetch data');
        // }
        const data = await response.json();
        return data[0];
    }

    async getWeather(id) {
        const query = `${id}?apikey=${this.key}`;
        const response = await fetch(this.weatherURI + query);
        // if(response.status != 200){
        //     throw new Error('cannot fetch data');
        // }
        const data = await response.json();
        return data[0];
    }
}