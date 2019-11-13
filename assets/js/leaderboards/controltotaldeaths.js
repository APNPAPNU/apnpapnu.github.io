$(function() {
  
    $.ajax({
       url: "https://www.bungie.net/Platform/Destiny2/Stats/Leaderboards/Clans/699392/?&modes=10&maxtop=100",
     headers: {
         "X-API-Key": "47b810e692d64237911c2cbe0d433cfe"
       }, 
       success: function(data) {
                   if (data.ErrorStatus === 'Success') {  


controlTotalDeathsFirstPlaceName = data.Response.control.lbDeaths.entries[0].player.destinyUserInfo.displayName,
controlTotalDeathsFirstPlaceStat = data.Response.control.lbDeaths.entries[0].value.basic.displayValue,
controlTotalDeathsSecondPlaceName = data.Response.control.lbDeaths.entries[1].player.destinyUserInfo.displayName,
controlTotalDeathsSecondPlaceStat = data.Response.control.lbDeaths.entries[1].value.basic.displayValue,
controlTotalDeathsThirdPlaceName = data.Response.control.lbDeaths.entries[2].player.destinyUserInfo.displayName,
controlTotalDeathsThirdPlaceStat = data.Response.control.lbDeaths.entries[2].value.basic.displayValue,
controlTotalDeathsFourthPlaceName = data.Response.control.lbDeaths.entries[3].player.destinyUserInfo.displayName,
controlTotalDeathsFourthPlaceStat = data.Response.control.lbDeaths.entries[3].value.basic.displayValue,
controlTotalDeathsFifthPlaceName = data.Response.control.lbDeaths.entries[4].player.destinyUserInfo.displayName,
controlTotalDeathsFifthPlaceStat = data.Response.control.lbDeaths.entries[4].value.basic.displayValue,
controlTotalDeathsFirstPlaceIcon = data.Response.control.lbDeaths.entries[0].player.destinyUserInfo.iconPath;
controlTotalDeathsSecondPlaceIcon = data.Response.control.lbDeaths.entries[1].player.destinyUserInfo.iconPath,
controlTotalDeathsThirdPlaceIcon = data.Response.control.lbDeaths.entries[2].player.destinyUserInfo.iconPath,
controlTotalDeathsFourthPlaceIcon = data.Response.control.lbDeaths.entries[3].player.destinyUserInfo.iconPath,
controlTotalDeathsFifthPlaceIcon = data.Response.control.lbDeaths.entries[4].player.destinyUserInfo.iconPath;

$('#player-control-Total-Deaths-First-Place-Name').text(controlTotalDeathsFirstPlaceName);
$('#player-control-Total-Deaths-First-Place-Stat').text(controlTotalDeathsFirstPlaceStat);
$('#player-control-Total-Deaths-Second-Place-Name').text(controlTotalDeathsSecondPlaceName);
$('#player-control-Total-Deaths-Second-Place-Stat').text(controlTotalDeathsSecondPlaceStat);
$('#player-control-Total-Deaths-Third-Place-Name').text(controlTotalDeathsThirdPlaceName);
$('#player-control-Total-Deaths-Third-Place-Stat').text(controlTotalDeathsThirdPlaceStat);
$('#player-control-Total-Deaths-Fourth-Place-Name').text(controlTotalDeathsFourthPlaceName);
$('#player-control-Total-Deaths-Fourth-Place-Stat').text(controlTotalDeathsFourthPlaceStat);
$('#player-control-Total-Deaths-Fifth-Place-Name').text(controlTotalDeathsFifthPlaceName);
$('#player-control-Total-Deaths-Fifth-Place-Stat').text(controlTotalDeathsFifthPlaceStat);
$('.player-control-Total-Deaths-Fifth-Place-Icon').attr({
  'src': 'https://www.bungie.net' + controlTotalDeathsFifthPlaceIcon});
$('.player-control-Total-Deaths-Fifth-Place-Icon').attr({
  'src': 'https://www.bungie.net' + controlTotalDeathsFifthPlaceIcon});
$('.player-control-Total-Deaths-Fourth-Place-Icon').attr({
  'src': 'https://www.bungie.net' + controlTotalDeathsFourthPlaceIcon});
$('.player-control-Total-Deaths-Third-Place-Icon').attr({
  'src': 'https://www.bungie.net' + controlTotalDeathsThirdPlaceIcon});
$('.player-control-Total-Deaths-Second-Place-Icon').attr({
  'src': 'https://www.bungie.net' + controlTotalDeathsSecondPlaceIcon});
$('.player-control-Total-Deaths-First-Place-Icon').attr({
  'src': 'https://www.bungie.net' + controlTotalDeathsFirstPlaceIcon});


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
