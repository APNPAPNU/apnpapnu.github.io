$(function() {
  
    $.ajax({
       url: "https://www.bungie.net/Platform/Destiny2/Stats/Leaderboards/Clans/699392/?&modes=10&maxtop=100",
     headers: {
         "X-API-Key": "47b810e692d64237911c2cbe0d433cfe"
       }, 
       success: function(data) {
                   if (data.ErrorStatus === 'Success') {  


  controlTotalKillsFirstPlaceName = data.Response.control.lbKills.entries[0].player.destinyUserInfo.displayName,
                            controlTotalKillsFirstPlaceStat = data.Response.control.lbKills.entries[0].value.basic.displayValue,
                            controlTotalKillsSecondPlaceName = data.Response.control.lbKills.entries[1].player.destinyUserInfo.displayName,
                            controlTotalKillsSecondPlaceStat = data.Response.control.lbKills.entries[1].value.basic.displayValue,
                            controlTotalKillsThirdPlaceName = data.Response.control.lbKills.entries[2].player.destinyUserInfo.displayName,
                            controlTotalKillsThirdPlaceStat = data.Response.control.lbKills.entries[2].value.basic.displayValue,
                            controlTotalKillsFourthPlaceName = data.Response.control.lbKills.entries[3].player.destinyUserInfo.displayName,
                            controlTotalKillsFourthPlaceStat = data.Response.control.lbKills.entries[3].value.basic.displayValue,
                            controlTotalKillsFifthPlaceName = data.Response.control.lbKills.entries[4].player.destinyUserInfo.displayName,
                            controlTotalKillsFifthPlaceStat = data.Response.control.lbKills.entries[4].value.basic.displayValue,
                            controlTotalKillsFirstPlaceIcon = data.Response.control.lbKills.entries[0].player.destinyUserInfo.iconPath;
                            controlTotalKillsSecondPlaceIcon = data.Response.control.lbKills.entries[1].player.destinyUserInfo.iconPath,
			    controlTotalKillsThirdPlaceIcon = data.Response.control.lbKills.entries[2].player.destinyUserInfo.iconPath,
			    controlTotalKillsFourthPlaceIcon = data.Response.control.lbKills.entries[3].player.destinyUserInfo.iconPath,
    	 	 	    controlTotalKillsFifthPlaceIcon = data.Response.control.lbKills.entries[4].player.destinyUserInfo.iconPath;
		    	    
			    
			   
                            $('#player-control-Total-Kills-First-Place-Name').text(controlTotalKillsFirstPlaceName);
                            $('#player-control-Total-Kills-First-Place-Stat').text(controlTotalKillsFirstPlaceStat);
                            $('#player-control-Total-Kills-Second-Place-Name').text(controlTotalKillsSecondPlaceName);
                            $('#player-control-Total-Kills-Second-Place-Stat').text(controlTotalKillsSecondPlaceStat);
                            $('#player-control-Total-Kills-Third-Place-Name').text(controlTotalKillsThirdPlaceName);
                            $('#player-control-Total-Kills-Third-Place-Stat').text(controlTotalKillsThirdPlaceStat);
                            $('#player-control-Total-Kills-Fourth-Place-Name').text(controlTotalKillsFourthPlaceName);
                            $('#player-control-Total-Kills-Fourth-Place-Stat').text(controlTotalKillsFourthPlaceStat);
                            $('#player-control-Total-Kills-Fifth-Place-Name').text(controlTotalKillsFifthPlaceName);
                            $('#player-control-Total-Kills-Fifth-Place-Stat').text(controlTotalKillsFifthPlaceStat);
                               $('.player-control-Total-Kills-Fifth-Place-Icon').attr({
						  'src': 'https://www.bungie.net' + controlTotalKillsFifthPlaceIcon
					  });
			   $('.player-control-Total-Kills-Fifth-Place-Icon').attr({
						  'src': 'https://www.bungie.net' + controlTotalKillsFifthPlaceIcon
					  });
			   $('.player-control-Total-Kills-Fourth-Place-Icon').attr({
						  'src': 'https://www.bungie.net' + controlTotalKillsFourthPlaceIcon
					  });
			   $('.player-control-Total-Kills-Third-Place-Icon').attr({
						  'src': 'https://www.bungie.net' + controlTotalKillsThirdPlaceIcon
					  });
			   $('.player-control-Total-Kills-Second-Place-Icon').attr({
						  'src': 'https://www.bungie.net' + controlTotalKillsSecondPlaceIcon
					  });
  $('.player-control-Total-Kills-First-Place-Icon').attr({
						  'src': 'https://www.bungie.net' + controlTotalKillsFirstPlaceIcon
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
