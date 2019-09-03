// get list of members and populate roster table

var roster = [];

$.when(
		$.ajax({
		url: "https://www.bungie.net/platform/GroupV2/699392/Members/",
		headers: {
			"X-API-Key":"47b810e692d64237911c2cbe0d433cfe"
		}
	})
	.success(function(json) {

		if (json.ErrorStatus === 'Success') {

			roster = json.Response.results;

			console.log('Exalted member list:', roster);

		} else {

			alert('Uh oh, looks like Bungie\'s doing server maintenance or having problems. Please check back again soon!');
			console.log(json);

		}

	})
	.error(function(json) {

		alert('Uh oh, looks like Bungie\'s doing server maintenance or having problems. Please check back again soon!');
		console.log(json);

	}),

	$.ajax({
		url: 'https://www.bungie.net/platform/destiny2/2/profile/4611686018429000034/?components=200',
		headers: {
			'X-API-Key': "47b810e692d64237911c2cbe0d433cfe"
		}
	}).success(function(res) {
		console.log('PS4 stats:', res);
	})

)
.then(function() {

	listMembers(roster);

});

function listMembers(rsp) {

  var
  list = $('.memberList-list'),
  on = 0,
  sortMembers = function(method) {
    // sort by date joined
    if (method = joined) {
      list.find('.member').sort(function(a, b) {
        return ($(b).data('joined')) < ($(a).data('joined')) ? 1 : -1;
      }).appendTo(list);
    } else if (method = username) {
      list.find('.member').sort(function(a, b) {
        return ($(b).data('username')) < ($(a).data('username')) ? 1 : -1;
      }).appendTo(list);
    }
    list.find('.member.online').prependTo(list);
  };

  for (var i = 0; i < rsp.length; i++) {

    var
		profile = rsp[i].bungieNetUserInfo,
		member = $('<a></a>');

		// tally up online members
		if (rsp[i].isOnline) {
			on++
		}

		// check for valid profile
		// some users don't have Bungie profiles somehow and it breaks function
    if (typeof profile != 'undefined') {
			// store response data in semantic variables
      var
        name = rsp[i].destinyUserInfo.displayName,
        joinDate = rsp[i].joinDate,
        joined = joinDate.substring(0, joinDate.indexOf('T')),
        online = rsp[i].isOnline,
        icon = profile.iconPath,
        memberId = profile.membershipId,
        memberType = rsp[i].destinyUserInfo.membershipType,
        destinyId = rsp[i].destinyUserInfo.membershipId,
        rank = rsp[i].memberType;
			// configure D OM node and add to page
	     $('#destiny-Id').text(destinyId);
	   
	    $.ajax({
  url: "https://www.bungie.net/Platform/Destiny/2/Account/" + destinyId + "/",
  headers: {
    "X-API-Key": "47b810e692d64237911c2cbe0d433cfe"
  }
}).done(function(json) {

});
$(function() {

  
    $.ajax({
      url: "https://www.bungie.net/Platform/Destiny/2/Account/" + destinyId + "/",
      headers: {
        "X-API-Key": "47b810e692d64237911c2cbe0d433cfe"
      },
      success: function(data) {
				
          // Gambit stats
	        fstats = data.Response.data.characters[0].characterBase.characterId;

	        // Populate stats
          // pvp
	   
	        $('#player-f-stats').text(fstats);
	        
          					

      },
      error: function(data) {
				alert('Uh oh, failed to load player stats! Looks like Bungie\'s doing server maintenance or having problems. Please check back again soon!');
        console.log('Error loading player stats:', data);
      }
    });
});

      member
      .attr({
        'class': 'j-row vertical-center-row member',
        'href': '/player/?bungieId=' + memberId + '&destinyId=' + destinyId + '&joined=' + joined + '&rank=' + rank,
        'title': 'See player profile for ' + name,
        'data-joined' : joined.replace(/-/g, ''),
        'data-username': name,
        'data-online' : 'false',
        'data-searchable' : name,
      })
        .html(
        '<div class="j-col j-col-1 member-icon"><img src="https://bungie.net/' + icon + '"></div>' +
        '<div class="j-col j-col-3 member-name"><h3>' + name + '</h3></div>' +
        '<div class="j-col j-col-3 member-joined" data-label="Joined">' + joined.replace(/-/g, '/') + '</div>' +
        '<div class="j-col j-col-3 member-status" data-label="Status"><span class="member-online" id="status-' + memberId + '">' + online + '</span></div>' +
        '<div class="j-col j-col-3 member-button"><a class="button outline gold full-width">' + 'View Stats' + '</a></div>' +
	      '<div class="j-col j-col-3 member-button"> + <a href="https://braytech.org/2/'+ destinyId +'/' + "characterId" +' /legend">In Depth Stats</a>' + '</a></div>'
      )
      .appendTo(list);
      // indicate online/offline status
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
      sortMembers(joined); // sort members by join date
    }
  }
}
