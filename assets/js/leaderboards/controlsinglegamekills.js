$(function() {
  
            $.ajax({
               url: "https://www.bungie.net/Platform/Destiny2/Stats/Leaderboards/Clans/699392/?&modes=10&maxtop=100",
             headers: {
                 "X-API-Key": "47b810e692d64237911c2cbe0d433cfe"
               }, 
               success: function(data) {
                           if (data.ErrorStatus === 'Success') {  


controlSingleGameKillsfirstPlaceName = data.Response.control.lbSingleGameKills.entries[0].player.destinyUserInfo.displayName,
controlSingleGameKillsfirstPlaceStat = data.Response.control.lbSingleGameKills.entries[0].value.basic.displayValue,
controlSingleGameKillssecondPlaceName = data.Response.control.lbSingleGameKills.entries[1].player.destinyUserInfo.displayName,
controlSingleGameKillssecondPlaceStat = data.Response.control.lbSingleGameKills.entries[1].value.basic.displayValue,
controlSingleGameKillsthirdPlaceName = data.Response.control.lbSingleGameKills.entries[2].player.destinyUserInfo.displayName,
controlSingleGameKillsthirdPlaceStat = data.Response.control.lbSingleGameKills.entries[2].value.basic.displayValue,
controlSingleGameKillsfourthPlaceName = data.Response.control.lbSingleGameKills.entries[3].player.destinyUserInfo.displayName,
controlSingleGameKillsfourthPlaceStat = data.Response.control.lbSingleGameKills.entries[3].value.basic.displayValue,
controlSingleGameKillsfifthPlaceName = data.Response.control.lbSingleGameKills.entries[4].player.destinyUserInfo.displayName,
controlSingleGameKillsfifthPlaceStat = data.Response.control.lbSingleGameKills.entries[4].value.basic.displayValue;
                             controlSingleGameKillsFirstPlaceIcon = data.Response.control.lbSingleGameKills.entries[0].player.destinyUserInfo.iconPath;
controlSingleGameKillsSecondPlaceIcon = data.Response.control.lbSingleGameKills.entries[1].player.destinyUserInfo.iconPath,
controlSingleGameKillsThirdPlaceIcon = data.Response.control.lbSingleGameKills.entries[2].player.destinyUserInfo.iconPath,
controlSingleGameKillsFourthPlaceIcon = data.Response.control.lbSingleGameKills.entries[3].player.destinyUserInfo.iconPath,
controlSingleGameKillsFifthPlaceIcon = data.Response.control.lbSingleGameKills.entries[4].player.destinyUserInfo.iconPath;
$('.player-control-Single-Game-Kills-Fifth-Place-Icon').attr({
	'src': 'https://www.bungie.net' + controlSingleGameKillsFifthPlaceIcon
});
$('.player-control-Single-Game-Kills-Fifth-Place-Icon').attr({
	'src': 'https://www.bungie.net' + controlSingleGameKillsFifthPlaceIcon
});
$('.player-control-Single-Game-Kills-Fourth-Place-Icon').attr({
	'src': 'https://www.bungie.net' + controlSingleGameKillsFourthPlaceIcon
});
$('.player-control-Single-Game-Kills-Third-Place-Icon').attr({
	'src': 'https://www.bungie.net' + controlSingleGameKillsThirdPlaceIcon
});
$('.player-control-Single-Game-Kills-Second-Place-Icon').attr({
	'src': 'https://www.bungie.net' + controlSingleGameKillsSecondPlaceIcon
});
$('.player-control-Single-Game-Kills-First-Place-Icon').attr({
	'src': 'https://www.bungie.net' + controlSingleGameKillsFirstPlaceIcon
});
          
$('#player-control-Single-Game-Kills-First-Place-Name').text(controlSingleGameKillsfirstPlaceName);
$('#player-control-Single-Game-Kills-First-Place-Stat').text(controlSingleGameKillsfirstPlaceStat);
$('#player-control-Single-Game-Kills-Second-Place-Name').text(controlSingleGameKillssecondPlaceName);
$('#player-control-Single-Game-Kills-Second-Place-Stat').text(controlSingleGameKillssecondPlaceStat);
$('#player-control-Single-Game-Kills-Third-Place-Name').text(controlSingleGameKillsthirdPlaceName);
$('#player-control-Single-Game-Kills-Third-Place-Stat').text(controlSingleGameKillsthirdPlaceStat);
$('#player-control-Single-Game-Kills-Fourth-Place-Name').text(controlSingleGameKillsfourthPlaceName);
$('#player-control-Single-Game-Kills-Fourth-Place-Stat').text(controlSingleGameKillsfourthPlaceStat);
$('#player-control-Single-Game-Kills-Fifth-Place-Name').text(controlSingleGameKillsfifthPlaceName);
$('#player-control-Single-Game-Kills-Fifth-Place-Stat').text(controlSingleGameKillsfifthPlaceStat);
     
     
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
