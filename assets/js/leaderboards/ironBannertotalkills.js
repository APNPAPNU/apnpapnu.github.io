$(function() {
  
    $.ajax({
       url: "https://www.bungie.net/Platform/Destiny2/Stats/Leaderboards/Clans/699392/?&modes=19&maxtop=100",
     headers: {
         "X-API-Key": "47b810e692d64237911c2cbe0d433cfe"
       }, 
       success: function(data) {
                   if (data.ErrorStatus === 'Success') {  


  ironBannerTotalKillsFirstPlaceName = data.Response.ironBanner.lbKills.entries[0].player.destinyUserInfo.displayName,
                            ironBannerTotalKillsFirstPlaceStat = data.Response.ironBanner.lbKills.entries[0].value.basic.displayValue,
                            ironBannerTotalKillsSecondPlaceName = data.Response.ironBanner.lbKills.entries[1].player.destinyUserInfo.displayName,
                            ironBannerTotalKillsSecondPlaceStat = data.Response.ironBanner.lbKills.entries[1].value.basic.displayValue,
                            ironBannerTotalKillsThirdPlaceName = data.Response.ironBanner.lbKills.entries[2].player.destinyUserInfo.displayName,
                            ironBannerTotalKillsThirdPlaceStat = data.Response.ironBanner.lbKills.entries[2].value.basic.displayValue,
                            ironBannerTotalKillsFourthPlaceName = data.Response.ironBanner.lbKills.entries[3].player.destinyUserInfo.displayName,
                            ironBannerTotalKillsFourthPlaceStat = data.Response.ironBanner.lbKills.entries[3].value.basic.displayValue,
                            ironBannerTotalKillsFifthPlaceName = data.Response.ironBanner.lbKills.entries[4].player.destinyUserInfo.displayName,
                            ironBannerTotalKillsFifthPlaceStat = data.Response.ironBanner.lbKills.entries[4].value.basic.displayValue,
                            ironBannerTotalKillsFirstPlaceIcon = data.Response.ironBanner.lbKills.entries[0].player.destinyUserInfo.iconPath;
                            ironBannerTotalKillsSecondPlaceIcon = data.Response.ironBanner.lbKills.entries[1].player.destinyUserInfo.iconPath,
			    ironBannerTotalKillsThirdPlaceIcon = data.Response.ironBanner.lbKills.entries[2].player.destinyUserInfo.iconPath,
			    ironBannerTotalKillsFourthPlaceIcon = data.Response.ironBanner.lbKills.entries[3].player.destinyUserInfo.iconPath,
    	 	 	    ironBannerTotalKillsFifthPlaceIcon = data.Response.ironBanner.lbKills.entries[4].player.destinyUserInfo.iconPath;
		    	    
			    
			   
                            $('#player-ironBanner-Total-Kills-First-Place-Name').text(ironBannerTotalKillsFirstPlaceName);
                            $('#player-ironBanner-Total-Kills-First-Place-Stat').text(ironBannerTotalKillsFirstPlaceStat);
                            $('#player-ironBanner-Total-Kills-Second-Place-Name').text(ironBannerTotalKillsSecondPlaceName);
                            $('#player-ironBanner-Total-Kills-Second-Place-Stat').text(ironBannerTotalKillsSecondPlaceStat);
                            $('#player-ironBanner-Total-Kills-Third-Place-Name').text(ironBannerTotalKillsThirdPlaceName);
                            $('#player-ironBanner-Total-Kills-Third-Place-Stat').text(ironBannerTotalKillsThirdPlaceStat);
                            $('#player-ironBanner-Total-Kills-Fourth-Place-Name').text(ironBannerTotalKillsFourthPlaceName);
                            $('#player-ironBanner-Total-Kills-Fourth-Place-Stat').text(ironBannerTotalKillsFourthPlaceStat);
                            $('#player-ironBanner-Total-Kills-Fifth-Place-Name').text(ironBannerTotalKillsFifthPlaceName);
                            $('#player-ironBanner-Total-Kills-Fifth-Place-Stat').text(ironBannerTotalKillsFifthPlaceStat);
                               $('.player-ironBanner-Total-Kills-Fifth-Place-Icon').attr({
						  'src': 'https://www.bungie.net' + ironBannerTotalKillsFifthPlaceIcon
					  });
			   $('.player-ironBanner-Total-Kills-Fifth-Place-Icon').attr({
						  'src': 'https://www.bungie.net' + ironBannerTotalKillsFifthPlaceIcon
					  });
			   $('.player-ironBanner-Total-Kills-Fourth-Place-Icon').attr({
						  'src': 'https://www.bungie.net' + ironBannerTotalKillsFourthPlaceIcon
					  });
			   $('.player-ironBanner-Total-Kills-Third-Place-Icon').attr({
						  'src': 'https://www.bungie.net' + ironBannerTotalKillsThirdPlaceIcon
					  });
			   $('.player-ironBanner-Total-Kills-Second-Place-Icon').attr({
						  'src': 'https://www.bungie.net' + ironBannerTotalKillsSecondPlaceIcon
					  });
  $('.player-ironBanner-Total-Kills-First-Place-Icon').attr({
						  'src': 'https://www.bungie.net' + ironBannerTotalKillsFirstPlaceIcon
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
