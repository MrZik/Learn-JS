const key = 'yS9LsmVkhAdBvMyxI92A4hr6kxe4Bbd2';

// Get city information
const getCity = async(city) => {
    const base = 'http://dataservice.accuweather.com/locations/v1/cities/search';
    // always put ? before for query
    // & indicates the next query
    const query = `?apikey=${key}&q=${city}`;
    const response = await fetch(base+query);
    // if(response.status != 200){
    //     throw new Error('cannot fetch data');
    // }
    const data = await response.json();
    return data[0];
};

// Get weather information
const getWeather = async(id) => {
    const base = 'http://dataservice.accuweather.com/currentconditions/v1/';
    const query = `${id}?apikey=${key}`;
    const response = await fetch(base + query);
    // if(response.status != 200){
    //     throw new Error('cannot fetch data');
    // }
    const data = await response.json();
    return data[0];
};