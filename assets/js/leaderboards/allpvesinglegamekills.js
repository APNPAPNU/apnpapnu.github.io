$(function() {
  
	$.ajax({
	   url: "https://www.bungie.net/Platform/Destiny2/Stats/Leaderboards/Clans/699392/?&modes=7&maxtop=100",
	 headers: {
		 "X-API-Key": "47b810e692d64237911c2cbe0d433cfe"
	   }, 
	   success: function(data) {
				   if (data.ErrorStatus === 'Success') {  


allpveSingleGameKillsfirstPlaceName = data.Response.allPvE.lbSingleGameKills.entries[0].player.destinyUserInfo.displayName,
allpveSingleGameKillsfirstPlaceStat = data.Response.allPvE.lbSingleGameKills.entries[0].value.basic.displayValue,
allpveSingleGameKillssecondPlaceName = data.Response.allPvE.lbSingleGameKills.entries[1].player.destinyUserInfo.displayName,
allpveSingleGameKillssecondPlaceStat = data.Response.allPvE.lbSingleGameKills.entries[1].value.basic.displayValue,
allpveSingleGameKillsthirdPlaceName = data.Response.allPvE.lbSingleGameKills.entries[2].player.destinyUserInfo.displayName,
allpveSingleGameKillsthirdPlaceStat = data.Response.allPvE.lbSingleGameKills.entries[2].value.basic.displayValue,
allpveSingleGameKillsfourthPlaceName = data.Response.allPvE.lbSingleGameKills.entries[3].player.destinyUserInfo.displayName,
allpveSingleGameKillsfourthPlaceStat = data.Response.allPvE.lbSingleGameKills.entries[3].value.basic.displayValue,
allpveSingleGameKillsfifthPlaceName = data.Response.allPvE.lbSingleGameKills.entries[4].player.destinyUserInfo.displayName,
allpveSingleGameKillsfifthPlaceStat = data.Response.allPvE.lbSingleGameKills.entries[4].value.basic.displayValue;
allpveSingleGameKillsFirstPlaceIcon = data.Response.allPvE.lbSingleGameKills.entries[0].player.destinyUserInfo.iconPath;
allpveSingleGameKillsSecondPlaceIcon = data.Response.allPvE.lbSingleGameKills.entries[1].player.destinyUserInfo.iconPath,
allpveSingleGameKillsThirdPlaceIcon = data.Response.allPvE.lbSingleGameKills.entries[2].player.destinyUserInfo.iconPath,
allpveSingleGameKillsFourthPlaceIcon = data.Response.allPvE.lbSingleGameKills.entries[3].player.destinyUserInfo.iconPath,
allpveSingleGameKillsFifthPlaceIcon = data.Response.allPvE.lbSingleGameKills.entries[4].player.destinyUserInfo.iconPath;
$('.player-allpve-Single-Game-Kills-Fifth-Place-Icon').attr({
'src': 'https://www.bungie.net' + allpveSingleGameKillsFifthPlaceIcon
});
$('.player-allpve-Single-Game-Kills-Fifth-Place-Icon').attr({
'src': 'https://www.bungie.net' + allpveSingleGameKillsFifthPlaceIcon
});
$('.player-allpve-Single-Game-Kills-Fourth-Place-Icon').attr({
'src': 'https://www.bungie.net' + allpveSingleGameKillsFourthPlaceIcon
});
$('.player-allpve-Single-Game-Kills-Third-Place-Icon').attr({
'src': 'https://www.bungie.net' + allpveSingleGameKillsThirdPlaceIcon
});
$('.player-allpve-Single-Game-Kills-Second-Place-Icon').attr({
'src': 'https://www.bungie.net' + allpveSingleGameKillsSecondPlaceIcon
});
$('.player-allpve-Single-Game-Kills-First-Place-Icon').attr({
'src': 'https://www.bungie.net' + allpveSingleGameKillsFirstPlaceIcon
});
  
$('#player-allpve-Single-Game-Kills-First-Place-Name').text(allpveSingleGameKillsfirstPlaceName);
$('#player-allpve-Single-Game-Kills-First-Place-Stat').text(allpveSingleGameKillsfirstPlaceStat);
$('#player-allpve-Single-Game-Kills-Second-Place-Name').text(allpveSingleGameKillssecondPlaceName);
$('#player-allpve-Single-Game-Kills-Second-Place-Stat').text(allpveSingleGameKillssecondPlaceStat);
$('#player-allpve-Single-Game-Kills-Third-Place-Name').text(allpveSingleGameKillsthirdPlaceName);
$('#player-allpve-Single-Game-Kills-Third-Place-Stat').text(allpveSingleGameKillsthirdPlaceStat);
$('#player-allpve-Single-Game-Kills-Fourth-Place-Name').text(allpveSingleGameKillsfourthPlaceName);
$('#player-allpve-Single-Game-Kills-Fourth-Place-Stat').text(allpveSingleGameKillsfourthPlaceStat);
$('#player-allpve-Single-Game-Kills-Fifth-Place-Name').text(allpveSingleGameKillsfifthPlaceName);
$('#player-allpve-Single-Game-Kills-Fifth-Place-Stat').text(allpveSingleGameKillsfifthPlaceStat);


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
