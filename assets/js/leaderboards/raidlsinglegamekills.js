$(function() {
  
            $.ajax({
               url: "https://www.bungie.net/Platform/Destiny2/Stats/Leaderboards/Clans/699392/?&modes=4&maxtop=100&components=medals",
             headers: {
                 "X-API-Key": "47b810e692d64237911c2cbe0d433cfe"
               }, 
               success: function(data) {
                           if (data.ErrorStatus === 'Success') {  


raidSingleGameKillsfirstPlaceName = data.Response.raid.lbSingleGameKills.entries[0].player.destinyUserInfo.displayName,
raidSingleGameKillsfirstPlaceStat = data.Response.raid.lbSingleGameKills.entries[0].value.basic.displayValue,
raidSingleGameKillssecondPlaceName = data.Response.raid.lbSingleGameKills.entries[1].player.destinyUserInfo.displayName,
raidSingleGameKillssecondPlaceStat = data.Response.raid.lbSingleGameKills.entries[1].value.basic.displayValue,
raidSingleGameKillsthirdPlaceName = data.Response.raid.lbSingleGameKills.entries[2].player.destinyUserInfo.displayName,
raidSingleGameKillsthirdPlaceStat = data.Response.raid.lbSingleGameKills.entries[2].value.basic.displayValue,
raidSingleGameKillsfourthPlaceName = data.Response.raid.lbSingleGameKills.entries[3].player.destinyUserInfo.displayName,
raidSingleGameKillsfourthPlaceStat = data.Response.raid.lbSingleGameKills.entries[3].value.basic.displayValue,
raidSingleGameKillsfifthPlaceName = data.Response.raid.lbSingleGameKills.entries[4].player.destinyUserInfo.displayName,
raidSingleGameKillsfifthPlaceStat = data.Response.raid.lbSingleGameKills.entries[4].value.basic.displayValue;
                             raidSingleGameKillsFirstPlaceIcon = data.Response.raid.lbSingleGameKills.entries[0].player.destinyUserInfo.iconPath;
raidSingleGameKillsSecondPlaceIcon = data.Response.raid.lbSingleGameKills.entries[1].player.destinyUserInfo.iconPath,
raidSingleGameKillsThirdPlaceIcon = data.Response.raid.lbSingleGameKills.entries[2].player.destinyUserInfo.iconPath,
raidSingleGameKillsFourthPlaceIcon = data.Response.raid.lbSingleGameKills.entries[3].player.destinyUserInfo.iconPath,
raidSingleGameKillsFifthPlaceIcon = data.Response.raid.lbSingleGameKills.entries[4].player.destinyUserInfo.iconPath;
$('.player-raid-Single-Game-Kills-Fifth-Place-Icon').attr({
	'src': 'https://www.bungie.net' + raidSingleGameKillsFifthPlaceIcon
});
$('.player-raid-Single-Game-Kills-Fifth-Place-Icon').attr({
	'src': 'https://www.bungie.net' + raidSingleGameKillsFifthPlaceIcon
});
$('.player-raid-Single-Game-Kills-Fourth-Place-Icon').attr({
	'src': 'https://www.bungie.net' + raidSingleGameKillsFourthPlaceIcon
});
$('.player-raid-Single-Game-Kills-Third-Place-Icon').attr({
	'src': 'https://www.bungie.net' + raidSingleGameKillsThirdPlaceIcon
});
$('.player-raid-Single-Game-Kills-Second-Place-Icon').attr({
	'src': 'https://www.bungie.net' + raidSingleGameKillsSecondPlaceIcon
});
$('.player-raid-Single-Game-Kills-First-Place-Icon').attr({
	'src': 'https://www.bungie.net' + raidSingleGameKillsFirstPlaceIcon
});
          
$('#player-raid-Single-Game-Kills-First-Place-Name').text(raidSingleGameKillsfirstPlaceName);
$('#player-raid-Single-Game-Kills-First-Place-Stat').text(raidSingleGameKillsfirstPlaceStat);
$('#player-raid-Single-Game-Kills-Second-Place-Name').text(raidSingleGameKillssecondPlaceName);
$('#player-raid-Single-Game-Kills-Second-Place-Stat').text(raidSingleGameKillssecondPlaceStat);
$('#player-raid-Single-Game-Kills-Third-Place-Name').text(raidSingleGameKillsthirdPlaceName);
$('#player-raid-Single-Game-Kills-Third-Place-Stat').text(raidSingleGameKillsthirdPlaceStat);
$('#player-raid-Single-Game-Kills-Fourth-Place-Name').text(raidSingleGameKillsfourthPlaceName);
$('#player-raid-Single-Game-Kills-Fourth-Place-Stat').text(raidSingleGameKillsfourthPlaceStat);
$('#player-raid-Single-Game-Kills-Fifth-Place-Name').text(raidSingleGameKillsfifthPlaceName);
$('#player-raid-Single-Game-Kills-Fifth-Place-Stat').text(raidSingleGameKillsfifthPlaceStat);
     
     
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
