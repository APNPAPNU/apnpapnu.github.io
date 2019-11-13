$(function() {
  
    $.ajax({
       url: "https://www.bungie.net/Platform/Destiny2/Stats/Leaderboards/Clans/699392/?&modes=12&maxtop=100",
     headers: {
         "X-API-Key": "47b810e692d64237911c2cbe0d433cfe"
       }, 
       success: function(data) {
                   if (data.ErrorStatus === 'Success') {  


  clashFlagCapturesFirstPlaceName = data.Response.clash.lbObjectivesCompleted.entries[0].player.destinyUserInfo.displayName,
                            clashFlagCapturesFirstPlaceStat = data.Response.clash.lbObjectivesCompleted.entries[0].value.basic.displayValue,
                            clashFlagCapturesSecondPlaceName = data.Response.clash.lbObjectivesCompleted.entries[1].player.destinyUserInfo.displayName,
                            clashFlagCapturesSecondPlaceStat = data.Response.clash.lbObjectivesCompleted.entries[1].value.basic.displayValue,
                            clashFlagCapturesThirdPlaceName = data.Response.clash.lbObjectivesCompleted.entries[2].player.destinyUserInfo.displayName,
                            clashFlagCapturesThirdPlaceStat = data.Response.clash.lbObjectivesCompleted.entries[2].value.basic.displayValue,
                            clashFlagCapturesFourthPlaceName = data.Response.clash.lbObjectivesCompleted.entries[3].player.destinyUserInfo.displayName,
                            clashFlagCapturesFourthPlaceStat = data.Response.clash.lbObjectivesCompleted.entries[3].value.basic.displayValue,
                            clashFlagCapturesFifthPlaceName = data.Response.clash.lbObjectivesCompleted.entries[4].player.destinyUserInfo.displayName,
                            clashFlagCapturesFifthPlaceStat = data.Response.clash.lbObjectivesCompleted.entries[4].value.basic.displayValue,
                            clashFlagCapturesFirstPlaceIcon = data.Response.clash.lbObjectivesCompleted.entries[0].player.destinyUserInfo.iconPath;
                            clashFlagCapturesSecondPlaceIcon = data.Response.clash.lbObjectivesCompleted.entries[1].player.destinyUserInfo.iconPath,
			    clashFlagCapturesThirdPlaceIcon = data.Response.clash.lbObjectivesCompleted.entries[2].player.destinyUserInfo.iconPath,
			    clashFlagCapturesFourthPlaceIcon = data.Response.clash.lbObjectivesCompleted.entries[3].player.destinyUserInfo.iconPath,
    	 	 	    clashFlagCapturesFifthPlaceIcon = data.Response.clash.lbObjectivesCompleted.entries[4].player.destinyUserInfo.iconPath;
		    	    
			    
			   
                            $('#player-clash-Flag-Captures-First-Place-Name').text(clashFlagCapturesFirstPlaceName);
                            $('#player-clash-Flag-Captures-First-Place-Stat').text(clashFlagCapturesFirstPlaceStat);
                            $('#player-clash-Flag-Captures-Second-Place-Name').text(clashFlagCapturesSecondPlaceName);
                            $('#player-clash-Flag-Captures-Second-Place-Stat').text(clashFlagCapturesSecondPlaceStat);
                            $('#player-clash-Flag-Captures-Third-Place-Name').text(clashFlagCapturesThirdPlaceName);
                            $('#player-clash-Flag-Captures-Third-Place-Stat').text(clashFlagCapturesThirdPlaceStat);
                            $('#player-clash-Flag-Captures-Fourth-Place-Name').text(clashFlagCapturesFourthPlaceName);
                            $('#player-clash-Flag-Captures-Fourth-Place-Stat').text(clashFlagCapturesFourthPlaceStat);
                            $('#player-clash-Flag-Captures-Fifth-Place-Name').text(clashFlagCapturesFifthPlaceName);
                            $('#player-clash-Flag-Captures-Fifth-Place-Stat').text(clashFlagCapturesFifthPlaceStat);
                               $('.player-clash-Flag-Captures-Fifth-Place-Icon').attr({
						  'src': 'https://www.bungie.net' + clashFlagCapturesFifthPlaceIcon
					  });
			   $('.player-clash-Flag-Captures-Fifth-Place-Icon').attr({
						  'src': 'https://www.bungie.net' + clashFlagCapturesFifthPlaceIcon
					  });
			   $('.player-clash-Flag-Captures-Fourth-Place-Icon').attr({
						  'src': 'https://www.bungie.net' + clashFlagCapturesFourthPlaceIcon
					  });
			   $('.player-clash-Flag-Captures-Third-Place-Icon').attr({
						  'src': 'https://www.bungie.net' + clashFlagCapturesThirdPlaceIcon
					  });
			   $('.player-clash-Flag-Captures-Second-Place-Icon').attr({
						  'src': 'https://www.bungie.net' + clashFlagCapturesSecondPlaceIcon
					  });
  $('.player-clash-Flag-Captures-First-Place-Icon').attr({
						  'src': 'https://www.bungie.net' + clashFlagCapturesFirstPlaceIcon
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
