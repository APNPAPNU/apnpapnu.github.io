document.addEventListener("DOMContentLoaded", function() {
    const apiKey = "47b810e692d64237911c2cbe0d433cfe";
    const groupId = "699392";
    const url = `https://www.bungie.net/Platform/GroupV2/${groupId}/Members/`;

    const xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.setRequestHeader('X-API-Key', apiKey);
    xhr.onreadystatechange = function() {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                const data = JSON.parse(xhr.responseText);
                console.log('API Response:', data);
                if (data.ErrorStatus === 'Success') {
                    displayRoster(data.Response.results);
                } else {
                    console.error('Error fetching roster:', data.Message);
                    alert('Error fetching roster: ' + data.Message);
                }
            } else {
                console.error('Request failed. Status:', xhr.status);
                alert('Request failed. Status: ' + xhr.status);
            }
        }
    };
    xhr.send();
});
