document.addEventListener("DOMContentLoaded", function() {
    fetch('roster.json')
        .then(response => response.json())
        .then(data => displayRoster(data))
        .catch(error => console.error('Error fetching roster:', error));
});

function displayRoster(roster) {
    const memberList = document.getElementById('member-list');
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
