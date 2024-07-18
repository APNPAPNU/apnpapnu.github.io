document.addEventListener("DOMContentLoaded", function() {
    const axios = require('axios');
    const apiKey = "47b810e692d64237911c2cbe0d433cfe";
    const groupId = "699392";
    const url = `https://www.bungie.net/Platform/GroupV2/${groupId}/Members/`;

    axios.get(url, {
        headers: {
            'X-API-Key': apiKey
        }
    })
    .then(response => {
        console.log('API Response:', response.data);
        if (response.data.ErrorStatus === 'Success') {
            displayRoster(response.data.Response.results);
        } else {
            console.error('Error fetching roster:', response.data.Message);
            alert('Error fetching roster: ' + response.data.Message);
        }
    })
    .catch(error => {
        console.error('Axios Error:', error);
        alert('Axios Error: ' + error.message);
    });
});
