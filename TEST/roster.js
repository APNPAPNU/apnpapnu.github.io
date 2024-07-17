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

function displayRoster(roster) {
    const memberList = document.querySelector('.memberList-list');
    const memberCount = document.getElementById('member-count');
    memberCount.innerText = `Members: ${roster.length}`;
    
    roster.forEach(member => {
        if (member.destinyUserInfo) {
            const memberElement = document.createElement('div');
            memberElement.classList.add('j-row', 'memberList-item', 'member');
            if (member.memberType === 3) memberElement.classList.add('exalted');

            memberElement.innerHTML = `
                <div class="j-col j-col-3">${member.destinyUserInfo.displayName}</div>
                <div class="j-col j-col-3">${new Date(member.joinDate).toLocaleString()}</div>
                <div class="j-col j-col-3"><span class="member-online ${member.isOnline ? 'online' : ''}">${member.isOnline ? 'Online' : 'Offline'}</span></div>
                <div class="j-col j-col-3"><a href="#">View Stats</a></div>
            `;
            memberList.appendChild(memberElement);
        } else {
            console.warn('Member missing required fields:', member);
        }
    });
}
