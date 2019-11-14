$(function() {
  
            $.ajax({
               url: "https://www.bungie.net/Platform/Destiny2/Stats/Leaderboards/Clans/699392/?&modes=16&maxtop=100&components=medals",
             headers: {
                 "X-API-Key": "47b810e692d64237911c2cbe0d433cfe"
               }, 
               success: function(data) {
                           if (data.ErrorStatus === 'Success') {  


nightfallSingleGameKillsfirstPlaceName = data.Response.nightfall.lbSingleGameKills.entries[0].player.destinyUserInfo.displayName,
nightfallSingleGameKillsfirstPlaceStat = data.Response.nightfall.lbSingleGameKills.entries[0].value.basic.displayValue,
nightfallSingleGameKillssecondPlaceName = data.Response.nightfall.lbSingleGameKills.entries[1].player.destinyUserInfo.displayName,
nightfallSingleGameKillssecondPlaceStat = data.Response.nightfall.lbSingleGameKills.entries[1].value.basic.displayValue,
nightfallSingleGameKillsthirdPlaceName = data.Response.nightfall.lbSingleGameKills.entries[2].player.destinyUserInfo.displayName,
nightfallSingleGameKillsthirdPlaceStat = data.Response.nightfall.lbSingleGameKills.entries[2].value.basic.displayValue,
nightfallSingleGameKillsfourthPlaceName = data.Response.nightfall.lbSingleGameKills.entries[3].player.destinyUserInfo.displayName,
nightfallSingleGameKillsfourthPlaceStat = data.Response.nightfall.lbSingleGameKills.entries[3].value.basic.displayValue,
nightfallSingleGameKillsfifthPlaceName = data.Response.nightfall.lbSingleGameKills.entries[4].player.destinyUserInfo.displayName,
nightfallSingleGameKillsfifthPlaceStat = data.Response.nightfall.lbSingleGameKills.entries[4].value.basic.displayValue;
                             nightfallSingleGameKillsFirstPlaceIcon = data.Response.nightfall.lbSingleGameKills.entries[0].player.destinyUserInfo.iconPath;
nightfallSingleGameKillsSecondPlaceIcon = data.Response.nightfall.lbSingleGameKills.entries[1].player.destinyUserInfo.iconPath,
nightfallSingleGameKillsThirdPlaceIcon = data.Response.nightfall.lbSingleGameKills.entries[2].player.destinyUserInfo.iconPath,
nightfallSingleGameKillsFourthPlaceIcon = data.Response.nightfall.lbSingleGameKills.entries[3].player.destinyUserInfo.iconPath,
nightfallSingleGameKillsFifthPlaceIcon = data.Response.nightfall.lbSingleGameKills.entries[4].player.destinyUserInfo.iconPath;
$('.player-nightfall-Single-Game-Kills-Fifth-Place-Icon').attr({
	'src': 'https://www.bungie.net' + nightfallSingleGameKillsFifthPlaceIcon
});
$('.player-nightfall-Single-Game-Kills-Fifth-Place-Icon').attr({
	'src': 'https://www.bungie.net' + nightfallSingleGameKillsFifthPlaceIcon
});
$('.player-nightfall-Single-Game-Kills-Fourth-Place-Icon').attr({
	'src': 'https://www.bungie.net' + nightfallSingleGameKillsFourthPlaceIcon
});
$('.player-nightfall-Single-Game-Kills-Third-Place-Icon').attr({
	'src': 'https://www.bungie.net' + nightfallSingleGameKillsThirdPlaceIcon
});
$('.player-nightfall-Single-Game-Kills-Second-Place-Icon').attr({
	'src': 'https://www.bungie.net' + nightfallSingleGameKillsSecondPlaceIcon
});
$('.player-nightfall-Single-Game-Kills-First-Place-Icon').attr({
	'src': 'https://www.bungie.net' + nightfallSingleGameKillsFirstPlaceIcon
});
          
$('#player-nightfall-Single-Game-Kills-First-Place-Name').text(nightfallSingleGameKillsfirstPlaceName);
$('#player-nightfall-Single-Game-Kills-First-Place-Stat').text(nightfallSingleGameKillsfirstPlaceStat);
$('#player-nightfall-Single-Game-Kills-Second-Place-Name').text(nightfallSingleGameKillssecondPlaceName);
$('#player-nightfall-Single-Game-Kills-Second-Place-Stat').text(nightfallSingleGameKillssecondPlaceStat);
$('#player-nightfall-Single-Game-Kills-Third-Place-Name').text(nightfallSingleGameKillsthirdPlaceName);
$('#player-nightfall-Single-Game-Kills-Third-Place-Stat').text(nightfallSingleGameKillsthirdPlaceStat);
$('#player-nightfall-Single-Game-Kills-Fourth-Place-Name').text(nightfallSingleGameKillsfourthPlaceName);
$('#player-nightfall-Single-Game-Kills-Fourth-Place-Stat').text(nightfallSingleGameKillsfourthPlaceStat);
$('#player-nightfall-Single-Game-Kills-Fifth-Place-Name').text(nightfallSingleGameKillsfifthPlaceName);
$('#player-nightfall-Single-Game-Kills-Fifth-Place-Stat').text(nightfallSingleGameKillsfifthPlaceStat);
     
     
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
