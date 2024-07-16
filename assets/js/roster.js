async function fetchRoster() {
    const apiKey = "47b810e692d64237911c2cbe0d433cfe";
    const groupId = "699392"; // Replace with the current group ID if needed

    try {
        const response = await fetch(`https://www.bungie.net/Platform/GroupV2/${groupId}/Members/`, {
            headers: {
                "X-API-Key": apiKey
            }
        });
        const json = await response.json();

        if (json.ErrorStatus === 'Success') {
            return json.Response.results;
        } else {
            alert('Uh oh, looks like Bungie\'s doing server maintenance or having problems. Please check back again soon!');
            console.log(json);
            return [];
        }
    } catch (error) {
        alert('Uh oh, looks like Bungie\'s doing server maintenance or having problems. Please check back again soon!');
        console.log(error);
        return [];
    }
}

async function fetchProfile() {
    const apiKey = "47b810e692d64237911c2cbe0d433cfe";
    const membershipType = "2"; // Replace with the correct membership type
    const membershipId = "4611686018429000034"; // Replace with the correct membership ID

    try {
        const response = await fetch(`https://www.bungie.net/Platform/Destiny2/${membershipType}/Profile/${membershipId}/?components=200`, {
            headers: {
                "X-API-Key": apiKey
            }
        });
        const res = await response.json();
        console.log('PS4 stats:', res);
    } catch (error) {
        console.log(error);
    }
}

async function init() {
    const roster = await fetchRoster();
    await fetchProfile();
    listMembers(roster);
}

function listMembers(rsp) {
    var list = $('.memberList-list');
    var on = 0;

    var sortMembers = function(method) {
        if (method === 'joined') {
            list.find('.member').sort(function(a, b) {
                return ($(b).data('joined')) < ($(a).data('joined')) ? 1 : -1;
            }).appendTo(list);
        } else if (method === 'username') {
            list.find('.member').sort(function(a, b) {
                return ($(b).data('username')) < ($(a).data('username')) ? 1 : -1;
            }).appendTo(list);
        }
        list.find('.member.online').prependTo(list);
    };

    for (var i = 0; i < rsp.length; i++) {
        var profile = rsp[i].bungieNetUserInfo;
        var member = $('<a></a>');

        if (rsp[i].isOnline) {
            on++;
        }

        if (typeof profile !== 'undefined') {
            var name = rsp[i].destinyUserInfo.displayName;
            var joinDate = rsp[i].joinDate;
            var joined = joinDate.substring(0, joinDate.indexOf('T'));
            var online = rsp[i].isOnline;
            var icon = profile.iconPath;
            var memberId = profile.membershipId;
            var memberType = rsp[i].destinyUserInfo.membershipType;
            var destinyId = rsp[i].destinyUserInfo.membershipId;
            var rank = rsp[i].memberType;

            member
                .attr({
                    'class': 'j-row vertical-center-row member',
                    'href': '/player/?bungieId=' + memberId + '&destinyId=' + destinyId + '&joined=' + joined + '&rank=' + rank,
                    'title': 'See player profile for ' + name,
                    'data-joined': joined.replace(/-/g, ''),
                    'data-username': name,
                    'data-online': 'false',
                    'data-searchable': name,
                })
                .html(
                    '<div class="j-col j-col-1 member-icon"><img src="https://bungie.net/' + icon + '"></div>' +
                    '<div class="j-col j-col-3 member-name"><h3>' + name + '</h3></div>' +
                    '<div class="j-col j-col-3 member-joined" data-label="Joined">' + joined.replace(/-/g, '/') + '</div>' +
                    '<div class="j-col j-col-3 member-status" data-label="Status"><div class="blink_me"><span class="member-online" id="status-' + memberId + '">' + online + '</span></div></div>' +
                    '<div class="j-col j-col-3 member-button"><a class="button3 outline gold full-width">' + 'View Stats' + '</a></div>'
                );

            if (rsp[i].exalted) {
                member.addClass('exalted')
                    .attr({
                        'href': '/player/?bungieId=' + memberId + '&destinyId=' + destinyId + '&joined=' + joined + '&rank=' + rank + '&exalted=false'
                    })
                    .find('.member-name').find('h3')
                    .html(name + ' &nbsp;<span class="gold" title="Exalted">&epsilon;</span>');
            }

            member.appendTo(list);

            if (String(online) === 'true') {
                $('#status-' + memberId)
                    .text('Online')
                    .addClass('online')
                    .closest('.member')
                    .attr('data-online', true)
                    .addClass('online');
            } else {
                $('#status-' + memberId).text('Offline').removeClass('online');
            }

            sortMembers('joined');
        }
    }

    $('#member-count').text(on + ' / ' + rsp.length + ' Members Online');
}

init();
