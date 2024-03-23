let data = null;
fetch('https://api.restful-api.dev/objects')
    .then(response=>response.json())
    .then(response=>console.log(response));