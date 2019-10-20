$(function() {
  
    $.ajax({
       url: "https://www.bungie.net/Platform/Destiny2/Stats/Leaderboards/Clans/699392/?&modes=3&maxtop=100",
     headers: {
         "X-API-Key": "47b810e692d64237911c2cbe0d433cfe"
       }, 
       success: function(data) {
                   if (data.ErrorStatus === 'Success') {  


  strikeTotalKillsFirstPlaceName = data.Response.strike.lbKills.entries[0].player.destinyUserInfo.displayName,
                            strikeTotalKillsFirstPlaceStat = data.Response.strike.lbKills.entries[0].value.basic.displayValue,
                            strikeTotalKillsSecondPlaceName = data.Response.strike.lbKills.entries[1].player.destinyUserInfo.displayName,
                            strikeTotalKillsSecondPlaceStat = data.Response.strike.lbKills.entries[1].value.basic.displayValue,
                            strikeTotalKillsThirdPlaceName = data.Response.strike.lbKills.entries[2].player.destinyUserInfo.displayName,
                            strikeTotalKillsThirdPlaceStat = data.Response.strike.lbKills.entries[2].value.basic.displayValue,
                            strikeTotalKillsFourthPlaceName = data.Response.strike.lbKills.entries[3].player.destinyUserInfo.displayName,
                            strikeTotalKillsFourthPlaceStat = data.Response.strike.lbKills.entries[3].value.basic.displayValue,
                            strikeTotalKillsFifthPlaceName = data.Response.strike.lbKills.entries[4].player.destinyUserInfo.displayName,
                            strikeTotalKillsFifthPlaceStat = data.Response.strike.lbKills.entries[4].value.basic.displayValue,
                            strikeTotalKillsFirstPlaceIcon = data.Response.strike.lbKills.entries[0].player.destinyUserInfo.iconPath;
                            strikeTotalKillsSecondPlaceIcon = data.Response.strike.lbKills.entries[1].player.destinyUserInfo.iconPath,
			    strikeTotalKillsThirdPlaceIcon = data.Response.strike.lbKills.entries[2].player.destinyUserInfo.iconPath,
			    strikeTotalKillsFourthPlaceIcon = data.Response.strike.lbKills.entries[3].player.destinyUserInfo.iconPath,
    	 	 	    strikeTotalKillsFifthPlaceIcon = data.Response.strike.lbKills.entries[4].player.destinyUserInfo.iconPath;
		    	    
			    
			   
                            $('#player-strike-Total-Kills-First-Place-Name').text(strikeTotalKillsFirstPlaceName);
                            $('#player-strike-Total-Kills-First-Place-Stat').text(strikeTotalKillsFirstPlaceStat);
                            $('#player-strike-Total-Kills-Second-Place-Name').text(strikeTotalKillsSecondPlaceName);
                            $('#player-strike-Total-Kills-Second-Place-Stat').text(strikeTotalKillsSecondPlaceStat);
                            $('#player-strike-Total-Kills-Third-Place-Name').text(strikeTotalKillsThirdPlaceName);
                            $('#player-strike-Total-Kills-Third-Place-Stat').text(strikeTotalKillsThirdPlaceStat);
                            $('#player-strike-Total-Kills-Fourth-Place-Name').text(strikeTotalKillsFourthPlaceName);
                            $('#player-strike-Total-Kills-Fourth-Place-Stat').text(strikeTotalKillsFourthPlaceStat);
                            $('#player-strike-Total-Kills-Fifth-Place-Name').text(strikeTotalKillsFifthPlaceName);
                            $('#player-strike-Total-Kills-Fifth-Place-Stat').text(strikeTotalKillsFifthPlaceStat);
                               $('.player-strike-Total-Kills-Fifth-Place-Icon').attr({
						  'src': 'https://www.bungie.net' + strikeTotalKillsFifthPlaceIcon
					  });
			   $('.player-strike-Total-Kills-Fifth-Place-Icon').attr({
						  'src': 'https://www.bungie.net' + strikeTotalKillsFifthPlaceIcon
					  });
			   $('.player-strike-Total-Kills-Fourth-Place-Icon').attr({
						  'src': 'https://www.bungie.net' + strikeTotalKillsFourthPlaceIcon
					  });
			   $('.player-strike-Total-Kills-Third-Place-Icon').attr({
						  'src': 'https://www.bungie.net' + strikeTotalKillsThirdPlaceIcon
					  });
			   $('.player-strike-Total-Kills-Second-Place-Icon').attr({
						  'src': 'https://www.bungie.net' + strikeTotalKillsSecondPlaceIcon
					  });
  $('.player-strike-Total-Kills-First-Place-Icon').attr({
						  'src': 'https://www.bungie.net' + strikeTotalKillsFirstPlaceIcon
					  });

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
