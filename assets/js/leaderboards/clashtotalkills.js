$(function() {
  
    $.ajax({
       url: "https://www.bungie.net/Platform/Destiny2/Stats/Leaderboards/Clans/699392/?&modes=12&maxtop=100",
     headers: {
         "X-API-Key": "47b810e692d64237911c2cbe0d433cfe"
       }, 
       success: function(data) {
                   if (data.ErrorStatus === 'Success') {  


  clashTotalKillsFirstPlaceName = data.Response.clash.lbKills.entries[0].player.destinyUserInfo.displayName,
                            clashTotalKillsFirstPlaceStat = data.Response.clash.lbKills.entries[0].value.basic.displayValue,
                            clashTotalKillsSecondPlaceName = data.Response.clash.lbKills.entries[1].player.destinyUserInfo.displayName,
                            clashTotalKillsSecondPlaceStat = data.Response.clash.lbKills.entries[1].value.basic.displayValue,
                            clashTotalKillsThirdPlaceName = data.Response.clash.lbKills.entries[2].player.destinyUserInfo.displayName,
                            clashTotalKillsThirdPlaceStat = data.Response.clash.lbKills.entries[2].value.basic.displayValue,
                            clashTotalKillsFourthPlaceName = data.Response.clash.lbKills.entries[3].player.destinyUserInfo.displayName,
                            clashTotalKillsFourthPlaceStat = data.Response.clash.lbKills.entries[3].value.basic.displayValue,
                            clashTotalKillsFifthPlaceName = data.Response.clash.lbKills.entries[4].player.destinyUserInfo.displayName,
                            clashTotalKillsFifthPlaceStat = data.Response.clash.lbKills.entries[4].value.basic.displayValue,
                            clashTotalKillsFirstPlaceIcon = data.Response.clash.lbKills.entries[0].player.destinyUserInfo.iconPath;
                            clashTotalKillsSecondPlaceIcon = data.Response.clash.lbKills.entries[1].player.destinyUserInfo.iconPath,
			    clashTotalKillsThirdPlaceIcon = data.Response.clash.lbKills.entries[2].player.destinyUserInfo.iconPath,
			    clashTotalKillsFourthPlaceIcon = data.Response.clash.lbKills.entries[3].player.destinyUserInfo.iconPath,
    	 	 	    clashTotalKillsFifthPlaceIcon = data.Response.clash.lbKills.entries[4].player.destinyUserInfo.iconPath;
		    	    
			    
			   
                            $('#player-clash-Total-Kills-First-Place-Name').text(clashTotalKillsFirstPlaceName);
                            $('#player-clash-Total-Kills-First-Place-Stat').text(clashTotalKillsFirstPlaceStat);
                            $('#player-clash-Total-Kills-Second-Place-Name').text(clashTotalKillsSecondPlaceName);
                            $('#player-clash-Total-Kills-Second-Place-Stat').text(clashTotalKillsSecondPlaceStat);
                            $('#player-clash-Total-Kills-Third-Place-Name').text(clashTotalKillsThirdPlaceName);
                            $('#player-clash-Total-Kills-Third-Place-Stat').text(clashTotalKillsThirdPlaceStat);
                            $('#player-clash-Total-Kills-Fourth-Place-Name').text(clashTotalKillsFourthPlaceName);
                            $('#player-clash-Total-Kills-Fourth-Place-Stat').text(clashTotalKillsFourthPlaceStat);
                            $('#player-clash-Total-Kills-Fifth-Place-Name').text(clashTotalKillsFifthPlaceName);
                            $('#player-clash-Total-Kills-Fifth-Place-Stat').text(clashTotalKillsFifthPlaceStat);
                               $('.player-clash-Total-Kills-Fifth-Place-Icon').attr({
						  'src': 'https://www.bungie.net' + clashTotalKillsFifthPlaceIcon
					  });
			   $('.player-clash-Total-Kills-Fifth-Place-Icon').attr({
						  'src': 'https://www.bungie.net' + clashTotalKillsFifthPlaceIcon
					  });
			   $('.player-clash-Total-Kills-Fourth-Place-Icon').attr({
						  'src': 'https://www.bungie.net' + clashTotalKillsFourthPlaceIcon
					  });
			   $('.player-clash-Total-Kills-Third-Place-Icon').attr({
						  'src': 'https://www.bungie.net' + clashTotalKillsThirdPlaceIcon
					  });
			   $('.player-clash-Total-Kills-Second-Place-Icon').attr({
						  'src': 'https://www.bungie.net' + clashTotalKillsSecondPlaceIcon
					  });
  $('.player-clash-Total-Kills-First-Place-Icon').attr({
						  'src': 'https://www.bungie.net' + clashTotalKillsFirstPlaceIcon
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
