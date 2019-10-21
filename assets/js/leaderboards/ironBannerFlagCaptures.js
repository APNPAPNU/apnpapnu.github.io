$(function() {
  
    $.ajax({
       url: "https://www.bungie.net/Platform/Destiny2/Stats/Leaderboards/Clans/699392/?&modes=19&maxtop=100",
     headers: {
         "X-API-Key": "47b810e692d64237911c2cbe0d433cfe"
       }, 
       success: function(data) {
                   if (data.ErrorStatus === 'Success') {  


  ironBannerFlagCapturesFirstPlaceName = data.Response.ironBanner.lbObjectivesCompleted.entries[0].player.destinyUserInfo.displayName,
                            ironBannerFlagCapturesFirstPlaceStat = data.Response.ironBanner.lbObjectivesCompleted.entries[0].value.basic.displayValue,
                            ironBannerFlagCapturesSecondPlaceName = data.Response.ironBanner.lbObjectivesCompleted.entries[1].player.destinyUserInfo.displayName,
                            ironBannerFlagCapturesSecondPlaceStat = data.Response.ironBanner.lbObjectivesCompleted.entries[1].value.basic.displayValue,
                            ironBannerFlagCapturesThirdPlaceName = data.Response.ironBanner.lbObjectivesCompleted.entries[2].player.destinyUserInfo.displayName,
                            ironBannerFlagCapturesThirdPlaceStat = data.Response.ironBanner.lbObjectivesCompleted.entries[2].value.basic.displayValue,
                            ironBannerFlagCapturesFourthPlaceName = data.Response.ironBanner.lbObjectivesCompleted.entries[3].player.destinyUserInfo.displayName,
                            ironBannerFlagCapturesFourthPlaceStat = data.Response.ironBanner.lbObjectivesCompleted.entries[3].value.basic.displayValue,
                            ironBannerFlagCapturesFifthPlaceName = data.Response.ironBanner.lbObjectivesCompleted.entries[4].player.destinyUserInfo.displayName,
                            ironBannerFlagCapturesFifthPlaceStat = data.Response.ironBanner.lbObjectivesCompleted.entries[4].value.basic.displayValue,
                            ironBannerFlagCapturesFirstPlaceIcon = data.Response.ironBanner.lbObjectivesCompleted.entries[0].player.destinyUserInfo.iconPath;
                            ironBannerFlagCapturesSecondPlaceIcon = data.Response.ironBanner.lbObjectivesCompleted.entries[1].player.destinyUserInfo.iconPath,
			    ironBannerFlagCapturesThirdPlaceIcon = data.Response.ironBanner.lbObjectivesCompleted.entries[2].player.destinyUserInfo.iconPath,
			    ironBannerFlagCapturesFourthPlaceIcon = data.Response.ironBanner.lbObjectivesCompleted.entries[3].player.destinyUserInfo.iconPath,
    	 	 	    ironBannerFlagCapturesFifthPlaceIcon = data.Response.ironBanner.lbObjectivesCompleted.entries[4].player.destinyUserInfo.iconPath;
		    	    
			    
			   
                            $('#player-ironBanner-Flag-Captures-First-Place-Name').text(ironBannerFlagCapturesFirstPlaceName);
                            $('#player-ironBanner-Flag-Captures-First-Place-Stat').text(ironBannerFlagCapturesFirstPlaceStat);
                            $('#player-ironBanner-Flag-Captures-Second-Place-Name').text(ironBannerFlagCapturesSecondPlaceName);
                            $('#player-ironBanner-Flag-Captures-Second-Place-Stat').text(ironBannerFlagCapturesSecondPlaceStat);
                            $('#player-ironBanner-Flag-Captures-Third-Place-Name').text(ironBannerFlagCapturesThirdPlaceName);
                            $('#player-ironBanner-Flag-Captures-Third-Place-Stat').text(ironBannerFlagCapturesThirdPlaceStat);
                            $('#player-ironBanner-Flag-Captures-Fourth-Place-Name').text(ironBannerFlagCapturesFourthPlaceName);
                            $('#player-ironBanner-Flag-Captures-Fourth-Place-Stat').text(ironBannerFlagCapturesFourthPlaceStat);
                            $('#player-ironBanner-Flag-Captures-Fifth-Place-Name').text(ironBannerFlagCapturesFifthPlaceName);
                            $('#player-ironBanner-Flag-Captures-Fifth-Place-Stat').text(ironBannerFlagCapturesFifthPlaceStat);
                               $('.player-ironBanner-Flag-Captures-Fifth-Place-Icon').attr({
						  'src': 'https://www.bungie.net' + ironBannerFlagCapturesFifthPlaceIcon
					  });
			   $('.player-ironBanner-Flag-Captures-Fifth-Place-Icon').attr({
						  'src': 'https://www.bungie.net' + ironBannerFlagCapturesFifthPlaceIcon
					  });
			   $('.player-ironBanner-Flag-Captures-Fourth-Place-Icon').attr({
						  'src': 'https://www.bungie.net' + ironBannerFlagCapturesFourthPlaceIcon
					  });
			   $('.player-ironBanner-Flag-Captures-Third-Place-Icon').attr({
						  'src': 'https://www.bungie.net' + ironBannerFlagCapturesThirdPlaceIcon
					  });
			   $('.player-ironBanner-Flag-Captures-Second-Place-Icon').attr({
						  'src': 'https://www.bungie.net' + ironBannerFlagCapturesSecondPlaceIcon
					  });
  $('.player-ironBanner-Flag-Captures-First-Place-Icon').attr({
						  'src': 'https://www.bungie.net' + ironBannerFlagCapturesFirstPlaceIcon
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
