$(function() {
  
    $.ajax({
       url: "https://www.bungie.net/Platform/Destiny2/Stats/Leaderboards/Clans/699392/?&modes=5&maxtop=100",
     headers: {
         "X-API-Key": "47b810e692d64237911c2cbe0d433cfe"
       }, 
       success: function(data) {
                   if (data.ErrorStatus === 'Success') {  


  allpvpTotalKillsFirstPlaceName = data.Response.allPvP.lbKills.entries[0].player.destinyUserInfo.displayName,
                            allpvpTotalKillsFirstPlaceStat = data.Response.allPvP.lbKills.entries[0].value.basic.displayValue,
                            allpvpTotalKillsSecondPlaceName = data.Response.allPvP.lbKills.entries[1].player.destinyUserInfo.displayName,
                            allpvpTotalKillsSecondPlaceStat = data.Response.allPvP.lbKills.entries[1].value.basic.displayValue,
                            allpvpTotalKillsThirdPlaceName = data.Response.allPvP.lbKills.entries[2].player.destinyUserInfo.displayName,
                            allpvpTotalKillsThirdPlaceStat = data.Response.allPvP.lbKills.entries[2].value.basic.displayValue,
                            allpvpTotalKillsFourthPlaceName = data.Response.allPvP.lbKills.entries[3].player.destinyUserInfo.displayName,
                            allpvpTotalKillsFourthPlaceStat = data.Response.allPvP.lbKills.entries[3].value.basic.displayValue,
                            allpvpTotalKillsFifthPlaceName = data.Response.allPvP.lbKills.entries[4].player.destinyUserInfo.displayName,
                            allpvpTotalKillsFifthPlaceStat = data.Response.allPvP.lbKills.entries[4].value.basic.displayValue,
                            IconTest = data.Response.allPvP.lbKills.entries[1].player.bungieNetUserInfo.iconPath;
                  
                            $('#player-allpvp-Total-Kills-First-Place-Name').text(allpvpTotalKillsFirstPlaceName);
                            $('#player-allpvp-Total-Kills-First-Place-Stat').text(allpvpTotalKillsFirstPlaceStat);
                            $('#player-allpvp-Total-Kills-Second-Place-Name').text(allpvpTotalKillsSecondPlaceName);
                            $('#player-allpvp-Total-Kills-Second-Place-Stat').text(allpvpTotalKillsSecondPlaceStat);
                            $('#player-allpvp-Total-Kills-Third-Place-Name').text(allpvpTotalKillsThirdPlaceName);
                            $('#player-allpvp-Total-Kills-Third-Place-Stat').text(allpvpTotalKillsThirdPlaceStat);
                            $('#player-allpvp-Total-Kills-Fourth-Place-Name').text(allpvpTotalKillsFourthPlaceName);
                            $('#player-allpvp-Total-Kills-Fourth-Place-Stat').text(allpvpTotalKillsFourthPlaceStat);
                            $('#player-allpvp-Total-Kills-Fifth-Place-Name').text(allpvpTotalKillsFifthPlaceName);
                            $('#player-allpvp-Total-Kills-Fifth-Place-Stat').text(allpvpTotalKillsFifthPlaceStat);
                             $('#player-IconTest').img(IconTest);
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
          '<div class="j-col j-col-1 icon"><img src="https://bungie.net/' + IconTest + '"></div>' +
          '<div class="j-col j-col-3 member-name"><h3>' + name + '</h3></div>' +
          '<div class="j-col j-col-3 member-joined" data-label="Joined">' + joined.replace(/-/g, '/') + '</div>' +
          '<div class="j-col j-col-3 member-status" data-label="Status"><div class="blink_me"><span class="member-online" id="status-' + memberId + '">' + online + '</span></div></div>' +
          '<div class="j-col j-col-3 member-button"><a class="button3 outline gold full-width">' + 'View Stats' + '</a></div>'
	  );

} else {
                        alert('Uh oh, failed to load player stats! Looks like Bungie\'s doing server maintenance or having problems. Please check back again soon!');
                      console.log(data);
                   }

       },
       error: function(data) {
                   alert('Uh oh, failed to load player stats! Looks like Bungie\'s doing server maintenance or having problems. Please check back again soon!');
         console.log('Error loading player stats:', data);
       }
    });
});
