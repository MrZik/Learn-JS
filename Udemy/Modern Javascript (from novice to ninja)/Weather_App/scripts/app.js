// we get form directly because there is only 1 form in the html file
const cityForm = document.querySelector('form');

const updateCity = async(city) => {
    const cityDetails = await getCity(city);
    const weather = await getWeather(cityDetails.Key);

    // object shorthand notation
    // when property and value is the same
    return { cityDetails, weather };
};

cityForm.addEventListener('submit', e => {
    e.preventDefault();
    // get city value
    const city = cityForm.city.value.trim();
    cityForm.reset();
    // update ui with the new city
    updateCity(city)
    .then(data => console.log(data))
    .catch(err => console.log(err.message));
});