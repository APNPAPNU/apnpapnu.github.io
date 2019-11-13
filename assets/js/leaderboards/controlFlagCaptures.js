$(function() {
  
    $.ajax({
       url: "https://www.bungie.net/Platform/Destiny2/Stats/Leaderboards/Clans/699392/?&modes=10&maxtop=100",
     headers: {
         "X-API-Key": "47b810e692d64237911c2cbe0d433cfe"
       }, 
       success: function(data) {
                   if (data.ErrorStatus === 'Success') {  


  controlFlagCapturesFirstPlaceName = data.Response.control.lbObjectivesCompleted.entries[0].player.destinyUserInfo.displayName,
                            controlFlagCapturesFirstPlaceStat = data.Response.control.lbObjectivesCompleted.entries[0].value.basic.displayValue,
                            controlFlagCapturesSecondPlaceName = data.Response.control.lbObjectivesCompleted.entries[1].player.destinyUserInfo.displayName,
                            controlFlagCapturesSecondPlaceStat = data.Response.control.lbObjectivesCompleted.entries[1].value.basic.displayValue,
                            controlFlagCapturesThirdPlaceName = data.Response.control.lbObjectivesCompleted.entries[2].player.destinyUserInfo.displayName,
                            controlFlagCapturesThirdPlaceStat = data.Response.control.lbObjectivesCompleted.entries[2].value.basic.displayValue,
                            controlFlagCapturesFourthPlaceName = data.Response.control.lbObjectivesCompleted.entries[3].player.destinyUserInfo.displayName,
                            controlFlagCapturesFourthPlaceStat = data.Response.control.lbObjectivesCompleted.entries[3].value.basic.displayValue,
                            controlFlagCapturesFifthPlaceName = data.Response.control.lbObjectivesCompleted.entries[4].player.destinyUserInfo.displayName,
                            controlFlagCapturesFifthPlaceStat = data.Response.control.lbObjectivesCompleted.entries[4].value.basic.displayValue,
                            controlFlagCapturesFirstPlaceIcon = data.Response.control.lbObjectivesCompleted.entries[0].player.destinyUserInfo.iconPath;
                            controlFlagCapturesSecondPlaceIcon = data.Response.control.lbObjectivesCompleted.entries[1].player.destinyUserInfo.iconPath,
			    controlFlagCapturesThirdPlaceIcon = data.Response.control.lbObjectivesCompleted.entries[2].player.destinyUserInfo.iconPath,
			    controlFlagCapturesFourthPlaceIcon = data.Response.control.lbObjectivesCompleted.entries[3].player.destinyUserInfo.iconPath,
    	 	 	    controlFlagCapturesFifthPlaceIcon = data.Response.control.lbObjectivesCompleted.entries[4].player.destinyUserInfo.iconPath;
		    	    
			    
			   
                            $('#player-control-Flag-Captures-First-Place-Name').text(controlFlagCapturesFirstPlaceName);
                            $('#player-control-Flag-Captures-First-Place-Stat').text(controlFlagCapturesFirstPlaceStat);
                            $('#player-control-Flag-Captures-Second-Place-Name').text(controlFlagCapturesSecondPlaceName);
                            $('#player-control-Flag-Captures-Second-Place-Stat').text(controlFlagCapturesSecondPlaceStat);
                            $('#player-control-Flag-Captures-Third-Place-Name').text(controlFlagCapturesThirdPlaceName);
                            $('#player-control-Flag-Captures-Third-Place-Stat').text(controlFlagCapturesThirdPlaceStat);
                            $('#player-control-Flag-Captures-Fourth-Place-Name').text(controlFlagCapturesFourthPlaceName);
                            $('#player-control-Flag-Captures-Fourth-Place-Stat').text(controlFlagCapturesFourthPlaceStat);
                            $('#player-control-Flag-Captures-Fifth-Place-Name').text(controlFlagCapturesFifthPlaceName);
                            $('#player-control-Flag-Captures-Fifth-Place-Stat').text(controlFlagCapturesFifthPlaceStat);
                               $('.player-control-Flag-Captures-Fifth-Place-Icon').attr({
						  'src': 'https://www.bungie.net' + controlFlagCapturesFifthPlaceIcon
					  });
			   $('.player-control-Flag-Captures-Fifth-Place-Icon').attr({
						  'src': 'https://www.bungie.net' + controlFlagCapturesFifthPlaceIcon
					  });
			   $('.player-control-Flag-Captures-Fourth-Place-Icon').attr({
						  'src': 'https://www.bungie.net' + controlFlagCapturesFourthPlaceIcon
					  });
			   $('.player-control-Flag-Captures-Third-Place-Icon').attr({
						  'src': 'https://www.bungie.net' + controlFlagCapturesThirdPlaceIcon
					  });
			   $('.player-control-Flag-Captures-Second-Place-Icon').attr({
						  'src': 'https://www.bungie.net' + controlFlagCapturesSecondPlaceIcon
					  });
  $('.player-control-Flag-Captures-First-Place-Icon').attr({
						  'src': 'https://www.bungie.net' + controlFlagCapturesFirstPlaceIcon
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
