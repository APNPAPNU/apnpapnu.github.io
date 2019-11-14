$(function() {
  
    $.ajax({
       url: "https://www.bungie.net/Platform/Destiny2/Stats/Leaderboards/Clans/699392/?&modes=16&maxtop=100&components=medals",
     headers: {
         "X-API-Key": "47b810e692d64237911c2cbe0d433cfe"
       }, 
       success: function(data) {
                   if (data.ErrorStatus === 'Success') {  


nightfallTotalDeathsFirstPlaceName = data.Response.nightfall.lbDeaths.entries[0].player.destinyUserInfo.displayName,
nightfallTotalDeathsFirstPlaceStat = data.Response.nightfall.lbDeaths.entries[0].value.basic.displayValue,
nightfallTotalDeathsSecondPlaceName = data.Response.nightfall.lbDeaths.entries[1].player.destinyUserInfo.displayName,
nightfallTotalDeathsSecondPlaceStat = data.Response.nightfall.lbDeaths.entries[1].value.basic.displayValue,
nightfallTotalDeathsThirdPlaceName = data.Response.nightfall.lbDeaths.entries[2].player.destinyUserInfo.displayName,
nightfallTotalDeathsThirdPlaceStat = data.Response.nightfall.lbDeaths.entries[2].value.basic.displayValue,
nightfallTotalDeathsFourthPlaceName = data.Response.nightfall.lbDeaths.entries[3].player.destinyUserInfo.displayName,
nightfallTotalDeathsFourthPlaceStat = data.Response.nightfall.lbDeaths.entries[3].value.basic.displayValue,
nightfallTotalDeathsFifthPlaceName = data.Response.nightfall.lbDeaths.entries[4].player.destinyUserInfo.displayName,
nightfallTotalDeathsFifthPlaceStat = data.Response.nightfall.lbDeaths.entries[4].value.basic.displayValue,
nightfallTotalDeathsFirstPlaceIcon = data.Response.nightfall.lbDeaths.entries[0].player.destinyUserInfo.iconPath;
nightfallTotalDeathsSecondPlaceIcon = data.Response.nightfall.lbDeaths.entries[1].player.destinyUserInfo.iconPath,
nightfallTotalDeathsThirdPlaceIcon = data.Response.nightfall.lbDeaths.entries[2].player.destinyUserInfo.iconPath,
nightfallTotalDeathsFourthPlaceIcon = data.Response.nightfall.lbDeaths.entries[3].player.destinyUserInfo.iconPath,
nightfallTotalDeathsFifthPlaceIcon = data.Response.nightfall.lbDeaths.entries[4].player.destinyUserInfo.iconPath;

$('#player-nightfall-Total-Deaths-First-Place-Name').text(nightfallTotalDeathsFirstPlaceName);
$('#player-nightfall-Total-Deaths-First-Place-Stat').text(nightfallTotalDeathsFirstPlaceStat);
$('#player-nightfall-Total-Deaths-Second-Place-Name').text(nightfallTotalDeathsSecondPlaceName);
$('#player-nightfall-Total-Deaths-Second-Place-Stat').text(nightfallTotalDeathsSecondPlaceStat);
$('#player-nightfall-Total-Deaths-Third-Place-Name').text(nightfallTotalDeathsThirdPlaceName);
$('#player-nightfall-Total-Deaths-Third-Place-Stat').text(nightfallTotalDeathsThirdPlaceStat);
$('#player-nightfall-Total-Deaths-Fourth-Place-Name').text(nightfallTotalDeathsFourthPlaceName);
$('#player-nightfall-Total-Deaths-Fourth-Place-Stat').text(nightfallTotalDeathsFourthPlaceStat);
$('#player-nightfall-Total-Deaths-Fifth-Place-Name').text(nightfallTotalDeathsFifthPlaceName);
$('#player-nightfall-Total-Deaths-Fifth-Place-Stat').text(nightfallTotalDeathsFifthPlaceStat);
$('.player-nightfall-Total-Deaths-Fifth-Place-Icon').attr({
  'src': 'https://www.bungie.net' + nightfallTotalDeathsFifthPlaceIcon});
$('.player-nightfall-Total-Deaths-Fifth-Place-Icon').attr({
  'src': 'https://www.bungie.net' + nightfallTotalDeathsFifthPlaceIcon});
$('.player-nightfall-Total-Deaths-Fourth-Place-Icon').attr({
  'src': 'https://www.bungie.net' + nightfallTotalDeathsFourthPlaceIcon});
$('.player-nightfall-Total-Deaths-Third-Place-Icon').attr({
  'src': 'https://www.bungie.net' + nightfallTotalDeathsThirdPlaceIcon});
$('.player-nightfall-Total-Deaths-Second-Place-Icon').attr({
  'src': 'https://www.bungie.net' + nightfallTotalDeathsSecondPlaceIcon});
$('.player-nightfall-Total-Deaths-First-Place-Icon').attr({
  'src': 'https://www.bungie.net' + nightfallTotalDeathsFirstPlaceIcon});


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
