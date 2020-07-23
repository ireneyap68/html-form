let endPoint = `https://api.yelp.com/search?q=${}apiKey=${apiKey}`;

fetch(endPoint)
.then(response => {
    return response.json();
})

.then(data => {
    console.log(data)
})

.catch(error => {
    console.log('its error', error)
})