$(function() {
  
            $.ajax({
               url: "https://www.bungie.net/Platform/Destiny2/Stats/Leaderboards/Clans/699392/?&modes=3&maxtop=100",
             headers: {
                 "X-API-Key": "47b810e692d64237911c2cbe0d433cfe"
               }, 
               success: function(data) {
                           if (data.ErrorStatus === 'Success') {  


strikeSingleGameKillsfirstPlaceName = data.Response.strike.lbSingleGameKills.entries[0].player.destinyUserInfo.displayName,
strikeSingleGameKillsfirstPlaceStat = data.Response.strike.lbSingleGameKills.entries[0].value.basic.displayValue,
strikeSingleGameKillssecondPlaceName = data.Response.strike.lbSingleGameKills.entries[1].player.destinyUserInfo.displayName,
strikeSingleGameKillssecondPlaceStat = data.Response.strike.lbSingleGameKills.entries[1].value.basic.displayValue,
strikeSingleGameKillsthirdPlaceName = data.Response.strike.lbSingleGameKills.entries[2].player.destinyUserInfo.displayName,
strikeSingleGameKillsthirdPlaceStat = data.Response.strike.lbSingleGameKills.entries[2].value.basic.displayValue,
strikeSingleGameKillsfourthPlaceName = data.Response.strike.lbSingleGameKills.entries[3].player.destinyUserInfo.displayName,
strikeSingleGameKillsfourthPlaceStat = data.Response.strike.lbSingleGameKills.entries[3].value.basic.displayValue,
strikeSingleGameKillsfifthPlaceName = data.Response.strike.lbSingleGameKills.entries[4].player.destinyUserInfo.displayName,
strikeSingleGameKillsfifthPlaceStat = data.Response.strike.lbSingleGameKills.entries[4].value.basic.displayValue;
                             strikeSingleGameKillsFirstPlaceIcon = data.Response.strike.lbSingleGameKills.entries[0].player.destinyUserInfo.iconPath;
strikeSingleGameKillsSecondPlaceIcon = data.Response.strike.lbSingleGameKills.entries[1].player.destinyUserInfo.iconPath,
strikeSingleGameKillsThirdPlaceIcon = data.Response.strike.lbSingleGameKills.entries[2].player.destinyUserInfo.iconPath,
strikeSingleGameKillsFourthPlaceIcon = data.Response.strike.lbSingleGameKills.entries[3].player.destinyUserInfo.iconPath,
strikeSingleGameKillsFifthPlaceIcon = data.Response.strike.lbSingleGameKills.entries[4].player.destinyUserInfo.iconPath;
$('.player-strike-Single-Game-Kills-Fifth-Place-Icon').attr({
	'src': 'https://www.bungie.net' + strikeSingleGameKillsFifthPlaceIcon
});
$('.player-strike-Single-Game-Kills-Fifth-Place-Icon').attr({
	'src': 'https://www.bungie.net' + strikeSingleGameKillsFifthPlaceIcon
});
$('.player-strike-Single-Game-Kills-Fourth-Place-Icon').attr({
	'src': 'https://www.bungie.net' + strikeSingleGameKillsFourthPlaceIcon
});
$('.player-strike-Single-Game-Kills-Third-Place-Icon').attr({
	'src': 'https://www.bungie.net' + strikeSingleGameKillsThirdPlaceIcon
});
$('.player-strike-Single-Game-Kills-Second-Place-Icon').attr({
	'src': 'https://www.bungie.net' + strikeSingleGameKillsSecondPlaceIcon
});
$('.player-strike-Single-Game-Kills-First-Place-Icon').attr({
	'src': 'https://www.bungie.net' + strikeSingleGameKillsFirstPlaceIcon
});
          
$('#player-strike-Single-Game-Kills-First-Place-Name').text(strikeSingleGameKillsfirstPlaceName);
$('#player-strike-Single-Game-Kills-First-Place-Stat').text(strikeSingleGameKillsfirstPlaceStat);
$('#player-strike-Single-Game-Kills-Second-Place-Name').text(strikeSingleGameKillssecondPlaceName);
$('#player-strike-Single-Game-Kills-Second-Place-Stat').text(strikeSingleGameKillssecondPlaceStat);
$('#player-strike-Single-Game-Kills-Third-Place-Name').text(strikeSingleGameKillsthirdPlaceName);
$('#player-strike-Single-Game-Kills-Third-Place-Stat').text(strikeSingleGameKillsthirdPlaceStat);
$('#player-strike-Single-Game-Kills-Fourth-Place-Name').text(strikeSingleGameKillsfourthPlaceName);
$('#player-strike-Single-Game-Kills-Fourth-Place-Stat').text(strikeSingleGameKillsfourthPlaceStat);
$('#player-strike-Single-Game-Kills-Fifth-Place-Name').text(strikeSingleGameKillsfifthPlaceName);
$('#player-strike-Single-Game-Kills-Fifth-Place-Stat').text(strikeSingleGameKillsfifthPlaceStat);
     
     
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
