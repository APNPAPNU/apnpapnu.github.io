$(function() {
  
    $.ajax({
       url: "https://www.bungie.net/Platform/Destiny2/Stats/Leaderboards/Clans/699392/?&modes=12&maxtop=100",
     headers: {
         "X-API-Key": "47b810e692d64237911c2cbe0d433cfe"
       }, 
       success: function(data) {
                   if (data.ErrorStatus === 'Success') {  


clashTotalDeathsFirstPlaceName = data.Response.clash.lbDeaths.entries[0].player.destinyUserInfo.displayName,
clashTotalDeathsFirstPlaceStat = data.Response.clash.lbDeaths.entries[0].value.basic.displayValue,
clashTotalDeathsSecondPlaceName = data.Response.clash.lbDeaths.entries[1].player.destinyUserInfo.displayName,
clashTotalDeathsSecondPlaceStat = data.Response.clash.lbDeaths.entries[1].value.basic.displayValue,
clashTotalDeathsThirdPlaceName = data.Response.clash.lbDeaths.entries[2].player.destinyUserInfo.displayName,
clashTotalDeathsThirdPlaceStat = data.Response.clash.lbDeaths.entries[2].value.basic.displayValue,
clashTotalDeathsFourthPlaceName = data.Response.clash.lbDeaths.entries[3].player.destinyUserInfo.displayName,
clashTotalDeathsFourthPlaceStat = data.Response.clash.lbDeaths.entries[3].value.basic.displayValue,
clashTotalDeathsFifthPlaceName = data.Response.clash.lbDeaths.entries[4].player.destinyUserInfo.displayName,
clashTotalDeathsFifthPlaceStat = data.Response.clash.lbDeaths.entries[4].value.basic.displayValue,
clashTotalDeathsFirstPlaceIcon = data.Response.clash.lbDeaths.entries[0].player.destinyUserInfo.iconPath;
clashTotalDeathsSecondPlaceIcon = data.Response.clash.lbDeaths.entries[1].player.destinyUserInfo.iconPath,
clashTotalDeathsThirdPlaceIcon = data.Response.clash.lbDeaths.entries[2].player.destinyUserInfo.iconPath,
clashTotalDeathsFourthPlaceIcon = data.Response.clash.lbDeaths.entries[3].player.destinyUserInfo.iconPath,
clashTotalDeathsFifthPlaceIcon = data.Response.clash.lbDeaths.entries[4].player.destinyUserInfo.iconPath;

$('#player-clash-Total-Deaths-First-Place-Name').text(clashTotalDeathsFirstPlaceName);
$('#player-clash-Total-Deaths-First-Place-Stat').text(clashTotalDeathsFirstPlaceStat);
$('#player-clash-Total-Deaths-Second-Place-Name').text(clashTotalDeathsSecondPlaceName);
$('#player-clash-Total-Deaths-Second-Place-Stat').text(clashTotalDeathsSecondPlaceStat);
$('#player-clash-Total-Deaths-Third-Place-Name').text(clashTotalDeathsThirdPlaceName);
$('#player-clash-Total-Deaths-Third-Place-Stat').text(clashTotalDeathsThirdPlaceStat);
$('#player-clash-Total-Deaths-Fourth-Place-Name').text(clashTotalDeathsFourthPlaceName);
$('#player-clash-Total-Deaths-Fourth-Place-Stat').text(clashTotalDeathsFourthPlaceStat);
$('#player-clash-Total-Deaths-Fifth-Place-Name').text(clashTotalDeathsFifthPlaceName);
$('#player-clash-Total-Deaths-Fifth-Place-Stat').text(clashTotalDeathsFifthPlaceStat);
$('.player-clash-Total-Deaths-Fifth-Place-Icon').attr({
  'src': 'https://www.bungie.net' + clashTotalDeathsFifthPlaceIcon});
$('.player-clash-Total-Deaths-Fifth-Place-Icon').attr({
  'src': 'https://www.bungie.net' + clashTotalDeathsFifthPlaceIcon});
$('.player-clash-Total-Deaths-Fourth-Place-Icon').attr({
  'src': 'https://www.bungie.net' + clashTotalDeathsFourthPlaceIcon});
$('.player-clash-Total-Deaths-Third-Place-Icon').attr({
  'src': 'https://www.bungie.net' + clashTotalDeathsThirdPlaceIcon});
$('.player-clash-Total-Deaths-Second-Place-Icon').attr({
  'src': 'https://www.bungie.net' + clashTotalDeathsSecondPlaceIcon});
$('.player-clash-Total-Deaths-First-Place-Icon').attr({
  'src': 'https://www.bungie.net' + clashTotalDeathsFirstPlaceIcon});


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
