$(function() {
  
            $.ajax({
               url: "https://www.bungie.net/Platform/Destiny2/Stats/Leaderboards/Clans/699392/?&modes=5&maxtop=100",
             headers: {
                 "X-API-Key": "47b810e692d64237911c2cbe0d433cfe"
               }, 
               success: function(data) {
                           if (data.ErrorStatus === 'Success') {  


allpvpSingleGameKillsfirstPlaceName = data.Response.allPvP.lbSingleGameKills.entries[0].player.destinyUserInfo.displayName,
allpvpSingleGameKillsfirstPlaceStat = data.Response.allPvP.lbSingleGameKills.entries[0].value.basic.displayValue,
allpvpSingleGameKillssecondPlaceName = data.Response.allPvP.lbSingleGameKills.entries[1].player.destinyUserInfo.displayName,
allpvpSingleGameKillssecondPlaceStat = data.Response.allPvP.lbSingleGameKills.entries[1].value.basic.displayValue,
allpvpSingleGameKillsthirdPlaceName = data.Response.allPvP.lbSingleGameKills.entries[2].player.destinyUserInfo.displayName,
allpvpSingleGameKillsthirdPlaceStat = data.Response.allPvP.lbSingleGameKills.entries[2].value.basic.displayValue,
allpvpSingleGameKillsfourthPlaceName = data.Response.allPvP.lbSingleGameKills.entries[3].player.destinyUserInfo.displayName,
allpvpSingleGameKillsfourthPlaceStat = data.Response.allPvP.lbSingleGameKills.entries[3].value.basic.displayValue,
allpvpSingleGameKillsfifthPlaceName = data.Response.allPvP.lbSingleGameKills.entries[4].player.destinyUserInfo.displayName,
allpvpSingleGameKillsfifthPlaceStat = data.Response.allPvP.lbSingleGameKills.entries[4].value.basic.displayValue;
                             allpvpSingleGameKillsFirstPlaceIcon = data.Response.allPvP.lbSingleGameKills.entries[0].player.destinyUserInfo.iconPath;
allpvpSingleGameKillsSecondPlaceIcon = data.Response.allPvP.lbSingleGameKills.entries[1].player.destinyUserInfo.iconPath,
allpvpSingleGameKillsThirdPlaceIcon = data.Response.allPvP.lbSingleGameKills.entries[2].player.destinyUserInfo.iconPath,
allpvpSingleGameKillsFourthPlaceIcon = data.Response.allPvP.lbSingleGameKills.entries[3].player.destinyUserInfo.iconPath,
allpvpSingleGameKillsFifthPlaceIcon = data.Response.allPvP.lbSingleGameKills.entries[4].player.destinyUserInfo.iconPath;
$('.player-allpvp-Single-Game-Kills-Fifth-Place-Icon').attr({
	'src': 'https://www.bungie.net' + allpvpSingleGameKillsFifthPlaceIcon
});
$('.player-allpvp-Single-Game-Kills-Fifth-Place-Icon').attr({
	'src': 'https://www.bungie.net' + allpvpSingleGameKillsFifthPlaceIcon
});
$('.player-allpvp-Single-Game-Kills-Fourth-Place-Icon').attr({
	'src': 'https://www.bungie.net' + allpvpSingleGameKillsFourthPlaceIcon
});
$('.player-allpvp-Single-Game-Kills-Third-Place-Icon').attr({
	'src': 'https://www.bungie.net' + allpvpSingleGameKillsThirdPlaceIcon
});
$('.player-allpvp-Single-Game-Kills-Second-Place-Icon').attr({
	'src': 'https://www.bungie.net' + allpvpSingleGameKillsSecondPlaceIcon
});
$('.player-allpvp-Single-Game-Kills-First-Place-Icon').attr({
	'src': 'https://www.bungie.net' + allpvpSingleGameKillsFirstPlaceIcon
});
          
$('#player-allpvp-Single-Game-Kills-First-Place-Name').text(allpvpSingleGameKillsfirstPlaceName);
$('#player-allpvp-Single-Game-Kills-First-Place-Stat').text(allpvpSingleGameKillsfirstPlaceStat);
$('#player-allpvp-Single-Game-Kills-Second-Place-Name').text(allpvpSingleGameKillssecondPlaceName);
$('#player-allpvp-Single-Game-Kills-Second-Place-Stat').text(allpvpSingleGameKillssecondPlaceStat);
$('#player-allpvp-Single-Game-Kills-Third-Place-Name').text(allpvpSingleGameKillsthirdPlaceName);
$('#player-allpvp-Single-Game-Kills-Third-Place-Stat').text(allpvpSingleGameKillsthirdPlaceStat);
$('#player-allpvp-Single-Game-Kills-Fourth-Place-Name').text(allpvpSingleGameKillsfourthPlaceName);
$('#player-allpvp-Single-Game-Kills-Fourth-Place-Stat').text(allpvpSingleGameKillsfourthPlaceStat);
$('#player-allpvp-Single-Game-Kills-Fifth-Place-Name').text(allpvpSingleGameKillsfifthPlaceName);
$('#player-allpvp-Single-Game-Kills-Fifth-Place-Stat').text(allpvpSingleGameKillsfifthPlaceStat);
     
     
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
