$(function() {
  
            $.ajax({
               url: "https://www.bungie.net/Platform/Destiny2/Stats/Leaderboards/Clans/699392/?&modes=5&maxtop=100",
             headers: {
                 "X-API-Key": "47b810e692d64237911c2cbe0d433cfe"
               }, 
               success: function(data) {
                           if (data.ErrorStatus === 'Success') {  


firstPlaceName = data.Response.allPvP.lbSingleGameKills.entries[0].player.destinyUserInfo.displayName,
firstPlaceClass = data.Response.allPvP.lbSingleGameKills.entries[0].player.characterClass,
firstPlaceIcon = data.Response.allPvP.lbSingleGameKills.entries[0].player.bungieNetUserInfo.iconPath,
firstPlaceStat = data.Response.allPvP.lbSingleGameKills.entries[0].value.basic.displayValue,
secondPlaceName = data.Response.allPvP.lbSingleGameKills.entries[1].player.destinyUserInfo.displayName,
secondPlaceClass = data.Response.allPvP.lbSingleGameKills.entries[1].player.characterClass,
secondPlaceIcon = data.Response.allPvP.lbSingleGameKills.entries[1].player.bungieNetUserInfo.iconPath,
secondPlaceStat = data.Response.allPvP.lbSingleGameKills.entries[1].value.basic.displayValue,
thirdPlaceName = data.Response.allPvP.lbSingleGameKills.entries[2].player.destinyUserInfo.displayName,
thirdPlaceClass = data.Response.allPvP.lbSingleGameKills.entries[2].player.characterClass,
thirdPlaceIcon = data.Response.allPvP.lbSingleGameKills.entries[2].player.bungieNetUserInfo.iconPath,
thirdPlaceStat = data.Response.allPvP.lbSingleGameKills.entries[2].value.basic.displayValue,
fourthPlaceName = data.Response.allPvP.lbSingleGameKills.entries[3].player.destinyUserInfo.displayName,
fourthPlaceClass = data.Response.allPvP.lbSingleGameKills.entries[3].player.characterClass,
fourthPlaceIcon = data.Response.allPvP.lbSingleGameKills.entries[3].player.bungieNetUserInfo.iconPath,
fourthPlaceStat = data.Response.allPvP.lbSingleGameKills.entries[3].value.basic.displayValue,
fifthPlaceName = data.Response.allPvP.lbSingleGameKills.entries[4].player.destinyUserInfo.displayName,
fifthPlaceClass = data.Response.allPvP.lbSingleGameKills.entries[4].player.characterClass,
fifthPlaceIcon = data.Response.allPvP.lbSingleGameKills.entries[4].player.bungieNetUserInfo.iconPath,
fifthPlaceStat = data.Response.allPvP.lbSingleGameKills.entries[4].value.basic.displayValue;

$('#player-first-Place-Name').text(firstPlaceName);
$('#player-first-Place-Class').text(firstPlaceClass);
 $('#player-first-Place-Icon').attr({
						  'src': 'https://www.bungie.net' + firstPlaceIcon
					  });
$('#player-first-Place-Stat').text(firstPlaceStat);
$('#player-second-Place-Name').text(secondPlaceName);
$('#player-second-Place-Class').text(secondPlaceClass);
$('#player-second-Place-Icon').text(secondPlaceIcon);
$('#player-second-Place-Stat').text(secondPlaceStat);
$('#player-third-Place-Name').text(thirdPlaceName);
$('#player-third-Place-Class').text(thirdPlaceClass);
$('#player-third-Place-Icon').text(thirdPlaceIcon);
$('#player-third-Place-Stat').text(thirdPlaceStat);
$('#player-fourth-Place-Name').text(fourthPlaceName);
$('#player-fourth-Place-Class').text(fourthPlaceClass);
$('#player-fourth-Place-Icon').text(fourthPlaceIcon);
$('#player-fourth-Place-Stat').text(fourthPlaceStat);
$('#player-fifth-Place-Name').text(fifthPlaceName);
$('#player-fifth-Place-Class').text(fifthPlaceClass);
$('#player-fifth-Place-Icon').text(fifthPlaceIcon);
$('#player-fifth-Place-Stat').text(fifthPlaceStat);
          
     
     
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
