$(function() {
  
    $.ajax({
       url: "https://www.bungie.net/Platform/Destiny2/Stats/Leaderboards/Clans/699392/?&modes=16&maxtop=100&components=medals",
     headers: {
         "X-API-Key": "47b810e692d64237911c2cbe0d433cfe"
       }, 
       success: function(data) {
                   if (data.ErrorStatus === 'Success') {  


  nightfallTotalKillsFirstPlaceName = data.Response.nightfall.lbKills.entries[0].player.destinyUserInfo.displayName,
                            nightfallTotalKillsFirstPlaceStat = data.Response.nightfall.lbKills.entries[0].value.basic.displayValue,
                            nightfallTotalKillsSecondPlaceName = data.Response.nightfall.lbKills.entries[1].player.destinyUserInfo.displayName,
                            nightfallTotalKillsSecondPlaceStat = data.Response.nightfall.lbKills.entries[1].value.basic.displayValue,
                            nightfallTotalKillsThirdPlaceName = data.Response.nightfall.lbKills.entries[2].player.destinyUserInfo.displayName,
                            nightfallTotalKillsThirdPlaceStat = data.Response.nightfall.lbKills.entries[2].value.basic.displayValue,
                            nightfallTotalKillsFourthPlaceName = data.Response.nightfall.lbKills.entries[3].player.destinyUserInfo.displayName,
                            nightfallTotalKillsFourthPlaceStat = data.Response.nightfall.lbKills.entries[3].value.basic.displayValue,
                            nightfallTotalKillsFifthPlaceName = data.Response.nightfall.lbKills.entries[4].player.destinyUserInfo.displayName,
                            nightfallTotalKillsFifthPlaceStat = data.Response.nightfall.lbKills.entries[4].value.basic.displayValue,
                            nightfallTotalKillsFirstPlaceIcon = data.Response.nightfall.lbKills.entries[0].player.destinyUserInfo.iconPath;
                            nightfallTotalKillsSecondPlaceIcon = data.Response.nightfall.lbKills.entries[1].player.destinyUserInfo.iconPath,
			    nightfallTotalKillsThirdPlaceIcon = data.Response.nightfall.lbKills.entries[2].player.destinyUserInfo.iconPath,
			    nightfallTotalKillsFourthPlaceIcon = data.Response.nightfall.lbKills.entries[3].player.destinyUserInfo.iconPath,
    	 	 	    nightfallTotalKillsFifthPlaceIcon = data.Response.nightfall.lbKills.entries[4].player.destinyUserInfo.iconPath;
		    	    
			    
			   
                            $('#player-nightfall-Total-Kills-First-Place-Name').text(nightfallTotalKillsFirstPlaceName);
                            $('#player-nightfall-Total-Kills-First-Place-Stat').text(nightfallTotalKillsFirstPlaceStat);
                            $('#player-nightfall-Total-Kills-Second-Place-Name').text(nightfallTotalKillsSecondPlaceName);
                            $('#player-nightfall-Total-Kills-Second-Place-Stat').text(nightfallTotalKillsSecondPlaceStat);
                            $('#player-nightfall-Total-Kills-Third-Place-Name').text(nightfallTotalKillsThirdPlaceName);
                            $('#player-nightfall-Total-Kills-Third-Place-Stat').text(nightfallTotalKillsThirdPlaceStat);
                            $('#player-nightfall-Total-Kills-Fourth-Place-Name').text(nightfallTotalKillsFourthPlaceName);
                            $('#player-nightfall-Total-Kills-Fourth-Place-Stat').text(nightfallTotalKillsFourthPlaceStat);
                            $('#player-nightfall-Total-Kills-Fifth-Place-Name').text(nightfallTotalKillsFifthPlaceName);
                            $('#player-nightfall-Total-Kills-Fifth-Place-Stat').text(nightfallTotalKillsFifthPlaceStat);
                               $('.player-nightfall-Total-Kills-Fifth-Place-Icon').attr({
						  'src': 'https://www.bungie.net' + nightfallTotalKillsFifthPlaceIcon
					  });
			   $('.player-nightfall-Total-Kills-Fifth-Place-Icon').attr({
						  'src': 'https://www.bungie.net' + nightfallTotalKillsFifthPlaceIcon
					  });
			   $('.player-nightfall-Total-Kills-Fourth-Place-Icon').attr({
						  'src': 'https://www.bungie.net' + nightfallTotalKillsFourthPlaceIcon
					  });
			   $('.player-nightfall-Total-Kills-Third-Place-Icon').attr({
						  'src': 'https://www.bungie.net' + nightfallTotalKillsThirdPlaceIcon
					  });
			   $('.player-nightfall-Total-Kills-Second-Place-Icon').attr({
						  'src': 'https://www.bungie.net' + nightfallTotalKillsSecondPlaceIcon
					  });
  $('.player-nightfall-Total-Kills-First-Place-Icon').attr({
						  'src': 'https://www.bungie.net' + nightfallTotalKillsFirstPlaceIcon
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
