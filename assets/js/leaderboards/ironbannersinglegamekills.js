$(function() {
  
            $.ajax({
               url: "https://www.bungie.net/Platform/Destiny2/Stats/Leaderboards/Clans/699392/?&modes=19&maxtop=100",
             headers: {
                 "X-API-Key": "47b810e692d64237911c2cbe0d433cfe"
               }, 
               success: function(data) {
                           if (data.ErrorStatus === 'Success') {  


ironBannerSingleGameKillsfirstPlaceName = data.Response.ironBanner.lbSingleGameKills.entries[0].player.destinyUserInfo.displayName,
ironBannerSingleGameKillsfirstPlaceStat = data.Response.ironBanner.lbSingleGameKills.entries[0].value.basic.displayValue,
ironBannerSingleGameKillssecondPlaceName = data.Response.ironBanner.lbSingleGameKills.entries[1].player.destinyUserInfo.displayName,
ironBannerSingleGameKillssecondPlaceStat = data.Response.ironBanner.lbSingleGameKills.entries[1].value.basic.displayValue,
ironBannerSingleGameKillsthirdPlaceName = data.Response.ironBanner.lbSingleGameKills.entries[2].player.destinyUserInfo.displayName,
ironBannerSingleGameKillsthirdPlaceStat = data.Response.ironBanner.lbSingleGameKills.entries[2].value.basic.displayValue,
ironBannerSingleGameKillsfourthPlaceName = data.Response.ironBanner.lbSingleGameKills.entries[3].player.destinyUserInfo.displayName,
ironBannerSingleGameKillsfourthPlaceStat = data.Response.ironBanner.lbSingleGameKills.entries[3].value.basic.displayValue,
ironBannerSingleGameKillsfifthPlaceName = data.Response.ironBanner.lbSingleGameKills.entries[4].player.destinyUserInfo.displayName,
ironBannerSingleGameKillsfifthPlaceStat = data.Response.ironBanner.lbSingleGameKills.entries[4].value.basic.displayValue;
                             ironBannerSingleGameKillsFirstPlaceIcon = data.Response.ironBanner.lbSingleGameKills.entries[0].player.destinyUserInfo.iconPath;
ironBannerSingleGameKillsSecondPlaceIcon = data.Response.ironBanner.lbSingleGameKills.entries[1].player.destinyUserInfo.iconPath,
ironBannerSingleGameKillsThirdPlaceIcon = data.Response.ironBanner.lbSingleGameKills.entries[2].player.destinyUserInfo.iconPath,
ironBannerSingleGameKillsFourthPlaceIcon = data.Response.ironBanner.lbSingleGameKills.entries[3].player.destinyUserInfo.iconPath,
ironBannerSingleGameKillsFifthPlaceIcon = data.Response.ironBanner.lbSingleGameKills.entries[4].player.destinyUserInfo.iconPath;
$('.player-ironBanner-Single-Game-Kills-Fifth-Place-Icon').attr({
	'src': 'https://www.bungie.net' + ironBannerSingleGameKillsFifthPlaceIcon
});
$('.player-ironBanner-Single-Game-Kills-Fifth-Place-Icon').attr({
	'src': 'https://www.bungie.net' + ironBannerSingleGameKillsFifthPlaceIcon
});
$('.player-ironBanner-Single-Game-Kills-Fourth-Place-Icon').attr({
	'src': 'https://www.bungie.net' + ironBannerSingleGameKillsFourthPlaceIcon
});
$('.player-ironBanner-Single-Game-Kills-Third-Place-Icon').attr({
	'src': 'https://www.bungie.net' + ironBannerSingleGameKillsThirdPlaceIcon
});
$('.player-ironBanner-Single-Game-Kills-Second-Place-Icon').attr({
	'src': 'https://www.bungie.net' + ironBannerSingleGameKillsSecondPlaceIcon
});
$('.player-ironBanner-Single-Game-Kills-First-Place-Icon').attr({
	'src': 'https://www.bungie.net' + ironBannerSingleGameKillsFirstPlaceIcon
});
          
$('#player-ironBanner-Single-Game-Kills-First-Place-Name').text(ironBannerSingleGameKillsfirstPlaceName);
$('#player-ironBanner-Single-Game-Kills-First-Place-Stat').text(ironBannerSingleGameKillsfirstPlaceStat);
$('#player-ironBanner-Single-Game-Kills-Second-Place-Name').text(ironBannerSingleGameKillssecondPlaceName);
$('#player-ironBanner-Single-Game-Kills-Second-Place-Stat').text(ironBannerSingleGameKillssecondPlaceStat);
$('#player-ironBanner-Single-Game-Kills-Third-Place-Name').text(ironBannerSingleGameKillsthirdPlaceName);
$('#player-ironBanner-Single-Game-Kills-Third-Place-Stat').text(ironBannerSingleGameKillsthirdPlaceStat);
$('#player-ironBanner-Single-Game-Kills-Fourth-Place-Name').text(ironBannerSingleGameKillsfourthPlaceName);
$('#player-ironBanner-Single-Game-Kills-Fourth-Place-Stat').text(ironBannerSingleGameKillsfourthPlaceStat);
$('#player-ironBanner-Single-Game-Kills-Fifth-Place-Name').text(ironBannerSingleGameKillsfifthPlaceName);
$('#player-ironBanner-Single-Game-Kills-Fifth-Place-Stat').text(ironBannerSingleGameKillsfifthPlaceStat);
     
     
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
