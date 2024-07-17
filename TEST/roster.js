document.addEventListener("DOMContentLoaded", function() {
    const apiKey = "47b810e692d64237911c2cbe0d433cfe";
    const groupId = "699392";
    const url = `https://www.bungie.net/Platform/GroupV2/${groupId}/Members/`;

    const headers = {
        'X-API-Key': apiKey
    };

    fetch(url, {
        method: 'GET',
        headers: headers
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        console.log('API Response:', data);
        if (data.ErrorStatus === 'Success') {
            displayRoster(data.Response.results);
        } else {
            console.error('Error fetching roster:', data.Message);
            alert('Error fetching roster: ' + data.Message);
        }
    })
    .catch(error => {
        console.error('Fetch Error:', error);
        alert('Fetch Error: ' + error.message);
    });
});
