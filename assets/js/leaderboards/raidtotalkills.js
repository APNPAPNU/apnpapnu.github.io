$(function() {
  
    $.ajax({
       url: "https://www.bungie.net/Platform/Destiny2/Stats/Leaderboards/Clans/699392/?&modes=4&maxtop=100&components=medals",
     headers: {
         "X-API-Key": "47b810e692d64237911c2cbe0d433cfe"
       }, 
       success: function(data) {
                   if (data.ErrorStatus === 'Success') {  


  raidTotalKillsFirstPlaceName = data.Response.raid.lbKills.entries[0].player.destinyUserInfo.displayName,
                            raidTotalKillsFirstPlaceStat = data.Response.raid.lbKills.entries[0].value.basic.displayValue,
                            raidTotalKillsSecondPlaceName = data.Response.raid.lbKills.entries[1].player.destinyUserInfo.displayName,
                            raidTotalKillsSecondPlaceStat = data.Response.raid.lbKills.entries[1].value.basic.displayValue,
                            raidTotalKillsThirdPlaceName = data.Response.raid.lbKills.entries[2].player.destinyUserInfo.displayName,
                            raidTotalKillsThirdPlaceStat = data.Response.raid.lbKills.entries[2].value.basic.displayValue,
                            raidTotalKillsFourthPlaceName = data.Response.raid.lbKills.entries[3].player.destinyUserInfo.displayName,
                            raidTotalKillsFourthPlaceStat = data.Response.raid.lbKills.entries[3].value.basic.displayValue,
                            raidTotalKillsFifthPlaceName = data.Response.raid.lbKills.entries[4].player.destinyUserInfo.displayName,
                            raidTotalKillsFifthPlaceStat = data.Response.raid.lbKills.entries[4].value.basic.displayValue,
                            raidTotalKillsFirstPlaceIcon = data.Response.raid.lbKills.entries[0].player.destinyUserInfo.iconPath;
                            raidTotalKillsSecondPlaceIcon = data.Response.raid.lbKills.entries[1].player.destinyUserInfo.iconPath,
			    raidTotalKillsThirdPlaceIcon = data.Response.raid.lbKills.entries[2].player.destinyUserInfo.iconPath,
			    raidTotalKillsFourthPlaceIcon = data.Response.raid.lbKills.entries[3].player.destinyUserInfo.iconPath,
    	 	 	    raidTotalKillsFifthPlaceIcon = data.Response.raid.lbKills.entries[4].player.destinyUserInfo.iconPath;
		    	    
			    
			   
                            $('#player-raid-Total-Kills-First-Place-Name').text(raidTotalKillsFirstPlaceName);
                            $('#player-raid-Total-Kills-First-Place-Stat').text(raidTotalKillsFirstPlaceStat);
                            $('#player-raid-Total-Kills-Second-Place-Name').text(raidTotalKillsSecondPlaceName);
                            $('#player-raid-Total-Kills-Second-Place-Stat').text(raidTotalKillsSecondPlaceStat);
                            $('#player-raid-Total-Kills-Third-Place-Name').text(raidTotalKillsThirdPlaceName);
                            $('#player-raid-Total-Kills-Third-Place-Stat').text(raidTotalKillsThirdPlaceStat);
                            $('#player-raid-Total-Kills-Fourth-Place-Name').text(raidTotalKillsFourthPlaceName);
                            $('#player-raid-Total-Kills-Fourth-Place-Stat').text(raidTotalKillsFourthPlaceStat);
                            $('#player-raid-Total-Kills-Fifth-Place-Name').text(raidTotalKillsFifthPlaceName);
                            $('#player-raid-Total-Kills-Fifth-Place-Stat').text(raidTotalKillsFifthPlaceStat);
                               $('.player-raid-Total-Kills-Fifth-Place-Icon').attr({
						  'src': 'https://www.bungie.net' + raidTotalKillsFifthPlaceIcon
					  });
			   $('.player-raid-Total-Kills-Fifth-Place-Icon').attr({
						  'src': 'https://www.bungie.net' + raidTotalKillsFifthPlaceIcon
					  });
			   $('.player-raid-Total-Kills-Fourth-Place-Icon').attr({
						  'src': 'https://www.bungie.net' + raidTotalKillsFourthPlaceIcon
					  });
			   $('.player-raid-Total-Kills-Third-Place-Icon').attr({
						  'src': 'https://www.bungie.net' + raidTotalKillsThirdPlaceIcon
					  });
			   $('.player-raid-Total-Kills-Second-Place-Icon').attr({
						  'src': 'https://www.bungie.net' + raidTotalKillsSecondPlaceIcon
					  });
  $('.player-raid-Total-Kills-First-Place-Icon').attr({
						  'src': 'https://www.bungie.net' + raidTotalKillsFirstPlaceIcon
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
