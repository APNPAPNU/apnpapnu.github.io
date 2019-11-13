$(function() {
  
            $.ajax({
               url: "https://www.bungie.net/Platform/Destiny2/Stats/Leaderboards/Clans/699392/?&modes=12&maxtop=100",
             headers: {
                 "X-API-Key": "47b810e692d64237911c2cbe0d433cfe"
               }, 
               success: function(data) {
                           if (data.ErrorStatus === 'Success') {  


clashSingleGameKillsfirstPlaceName = data.Response.clash.lbSingleGameKills.entries[0].player.destinyUserInfo.displayName,
clashSingleGameKillsfirstPlaceStat = data.Response.clash.lbSingleGameKills.entries[0].value.basic.displayValue,
clashSingleGameKillssecondPlaceName = data.Response.clash.lbSingleGameKills.entries[1].player.destinyUserInfo.displayName,
clashSingleGameKillssecondPlaceStat = data.Response.clash.lbSingleGameKills.entries[1].value.basic.displayValue,
clashSingleGameKillsthirdPlaceName = data.Response.clash.lbSingleGameKills.entries[2].player.destinyUserInfo.displayName,
clashSingleGameKillsthirdPlaceStat = data.Response.clash.lbSingleGameKills.entries[2].value.basic.displayValue,
clashSingleGameKillsfourthPlaceName = data.Response.clash.lbSingleGameKills.entries[3].player.destinyUserInfo.displayName,
clashSingleGameKillsfourthPlaceStat = data.Response.clash.lbSingleGameKills.entries[3].value.basic.displayValue,
clashSingleGameKillsfifthPlaceName = data.Response.clash.lbSingleGameKills.entries[4].player.destinyUserInfo.displayName,
clashSingleGameKillsfifthPlaceStat = data.Response.clash.lbSingleGameKills.entries[4].value.basic.displayValue;
                             clashSingleGameKillsFirstPlaceIcon = data.Response.clash.lbSingleGameKills.entries[0].player.destinyUserInfo.iconPath;
clashSingleGameKillsSecondPlaceIcon = data.Response.clash.lbSingleGameKills.entries[1].player.destinyUserInfo.iconPath,
clashSingleGameKillsThirdPlaceIcon = data.Response.clash.lbSingleGameKills.entries[2].player.destinyUserInfo.iconPath,
clashSingleGameKillsFourthPlaceIcon = data.Response.clash.lbSingleGameKills.entries[3].player.destinyUserInfo.iconPath,
clashSingleGameKillsFifthPlaceIcon = data.Response.clash.lbSingleGameKills.entries[4].player.destinyUserInfo.iconPath;
$('.player-clash-Single-Game-Kills-Fifth-Place-Icon').attr({
	'src': 'https://www.bungie.net' + clashSingleGameKillsFifthPlaceIcon
});
$('.player-clash-Single-Game-Kills-Fifth-Place-Icon').attr({
	'src': 'https://www.bungie.net' + clashSingleGameKillsFifthPlaceIcon
});
$('.player-clash-Single-Game-Kills-Fourth-Place-Icon').attr({
	'src': 'https://www.bungie.net' + clashSingleGameKillsFourthPlaceIcon
});
$('.player-clash-Single-Game-Kills-Third-Place-Icon').attr({
	'src': 'https://www.bungie.net' + clashSingleGameKillsThirdPlaceIcon
});
$('.player-clash-Single-Game-Kills-Second-Place-Icon').attr({
	'src': 'https://www.bungie.net' + clashSingleGameKillsSecondPlaceIcon
});
$('.player-clash-Single-Game-Kills-First-Place-Icon').attr({
	'src': 'https://www.bungie.net' + clashSingleGameKillsFirstPlaceIcon
});
          
$('#player-clash-Single-Game-Kills-First-Place-Name').text(clashSingleGameKillsfirstPlaceName);
$('#player-clash-Single-Game-Kills-First-Place-Stat').text(clashSingleGameKillsfirstPlaceStat);
$('#player-clash-Single-Game-Kills-Second-Place-Name').text(clashSingleGameKillssecondPlaceName);
$('#player-clash-Single-Game-Kills-Second-Place-Stat').text(clashSingleGameKillssecondPlaceStat);
$('#player-clash-Single-Game-Kills-Third-Place-Name').text(clashSingleGameKillsthirdPlaceName);
$('#player-clash-Single-Game-Kills-Third-Place-Stat').text(clashSingleGameKillsthirdPlaceStat);
$('#player-clash-Single-Game-Kills-Fourth-Place-Name').text(clashSingleGameKillsfourthPlaceName);
$('#player-clash-Single-Game-Kills-Fourth-Place-Stat').text(clashSingleGameKillsfourthPlaceStat);
$('#player-clash-Single-Game-Kills-Fifth-Place-Name').text(clashSingleGameKillsfifthPlaceName);
$('#player-clash-Single-Game-Kills-Fifth-Place-Stat').text(clashSingleGameKillsfifthPlaceStat);
     
     
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
