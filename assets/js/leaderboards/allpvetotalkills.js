$(function() {
  
    $.ajax({
       url: "https://www.bungie.net/Platform/Destiny2/Stats/Leaderboards/Clans/699392/?&modes=7&maxtop=100",
     headers: {
         "X-API-Key": "47b810e692d64237911c2cbe0d433cfe"
       }, 
       success: function(data) {
                   if (data.ErrorStatus === 'Success') {  


  allpveTotalKillsFirstPlaceName = data.Response.allPvE.lbKills.entries[0].player.destinyUserInfo.displayName,
                            allpveTotalKillsFirstPlaceStat = data.Response.allPvE.lbKills.entries[0].value.basic.displayValue,
                            allpveTotalKillsSecondPlaceName = data.Response.allPvE.lbKills.entries[1].player.destinyUserInfo.displayName,
                            allpveTotalKillsSecondPlaceStat = data.Response.allPvE.lbKills.entries[1].value.basic.displayValue,
                            allpveTotalKillsThirdPlaceName = data.Response.allPvE.lbKills.entries[2].player.destinyUserInfo.displayName,
                            allpveTotalKillsThirdPlaceStat = data.Response.allPvE.lbKills.entries[2].value.basic.displayValue,
                            allpveTotalKillsFourthPlaceName = data.Response.allPvE.lbKills.entries[3].player.destinyUserInfo.displayName,
                            allpveTotalKillsFourthPlaceStat = data.Response.allPvE.lbKills.entries[3].value.basic.displayValue,
                            allpveTotalKillsFifthPlaceName = data.Response.allPvE.lbKills.entries[4].player.destinyUserInfo.displayName,
                            allpveTotalKillsFifthPlaceStat = data.Response.allPvE.lbKills.entries[4].value.basic.displayValue,
                            allpveTotalKillsFirstPlaceIcon = data.Response.allPvE.lbKills.entries[0].player.destinyUserInfo.iconPath;
                            allpveTotalKillsSecondPlaceIcon = data.Response.allPvE.lbKills.entries[1].player.destinyUserInfo.iconPath,
			    allpveTotalKillsThirdPlaceIcon = data.Response.allPvE.lbKills.entries[2].player.destinyUserInfo.iconPath,
			    allpveTotalKillsFourthPlaceIcon = data.Response.allPvE.lbKills.entries[3].player.destinyUserInfo.iconPath,
    	 	 	    allpveTotalKillsFifthPlaceIcon = data.Response.allPvE.lbKills.entries[4].player.destinyUserInfo.iconPath;
		    	    
			    
			   
                            $('#player-allpve-Total-Kills-First-Place-Name').text(allpveTotalKillsFirstPlaceName);
                            $('#player-allpve-Total-Kills-First-Place-Stat').text(allpveTotalKillsFirstPlaceStat);
                            $('#player-allpve-Total-Kills-Second-Place-Name').text(allpveTotalKillsSecondPlaceName);
                            $('#player-allpve-Total-Kills-Second-Place-Stat').text(allpveTotalKillsSecondPlaceStat);
                            $('#player-allpve-Total-Kills-Third-Place-Name').text(allpveTotalKillsThirdPlaceName);
                            $('#player-allpve-Total-Kills-Third-Place-Stat').text(allpveTotalKillsThirdPlaceStat);
                            $('#player-allpve-Total-Kills-Fourth-Place-Name').text(allpveTotalKillsFourthPlaceName);
                            $('#player-allpve-Total-Kills-Fourth-Place-Stat').text(allpveTotalKillsFourthPlaceStat);
                            $('#player-allpve-Total-Kills-Fifth-Place-Name').text(allpveTotalKillsFifthPlaceName);
                            $('#player-allpve-Total-Kills-Fifth-Place-Stat').text(allpveTotalKillsFifthPlaceStat);
                               $('.player-allpve-Total-Kills-Fifth-Place-Icon').attr({
						  'src': 'https://www.bungie.net' + allpveTotalKillsFifthPlaceIcon
					  });
			   $('.player-allpve-Total-Kills-Fifth-Place-Icon').attr({
						  'src': 'https://www.bungie.net' + allpveTotalKillsFifthPlaceIcon
					  });
			   $('.player-allpve-Total-Kills-Fourth-Place-Icon').attr({
						  'src': 'https://www.bungie.net' + allpveTotalKillsFourthPlaceIcon
					  });
			   $('.player-allpve-Total-Kills-Third-Place-Icon').attr({
						  'src': 'https://www.bungie.net' + allpveTotalKillsThirdPlaceIcon
					  });
			   $('.player-allpve-Total-Kills-Second-Place-Icon').attr({
						  'src': 'https://www.bungie.net' + allpveTotalKillsSecondPlaceIcon
					  });
  $('.player-allpve-Total-Kills-First-Place-Icon').attr({
						  'src': 'https://www.bungie.net' + allpveTotalKillsFirstPlaceIcon
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
