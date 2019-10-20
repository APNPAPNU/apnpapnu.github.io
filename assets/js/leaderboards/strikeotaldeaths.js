$(function() {
  
    $.ajax({
       url: "https://www.bungie.net/Platform/Destiny2/Stats/Leaderboards/Clans/699392/?&modes=3&maxtop=100",
     headers: {
         "X-API-Key": "47b810e692d64237911c2cbe0d433cfe"
       }, 
       success: function(data) {
                   if (data.ErrorStatus === 'Success') {  


strikeTotalDeathsFirstPlaceName = data.Response.strike.lbDeaths.entries[0].player.destinyUserInfo.displayName,
strikeTotalDeathsFirstPlaceStat = data.Response.strike.lbDeaths.entries[0].value.basic.displayValue,
strikeTotalDeathsSecondPlaceName = data.Response.strike.lbDeaths.entries[1].player.destinyUserInfo.displayName,
strikeTotalDeathsSecondPlaceStat = data.Response.strike.lbDeaths.entries[1].value.basic.displayValue,
strikeTotalDeathsThirdPlaceName = data.Response.strike.lbDeaths.entries[2].player.destinyUserInfo.displayName,
strikeTotalDeathsThirdPlaceStat = data.Response.strike.lbDeaths.entries[2].value.basic.displayValue,
strikeTotalDeathsFourthPlaceName = data.Response.strike.lbDeaths.entries[3].player.destinyUserInfo.displayName,
strikeTotalDeathsFourthPlaceStat = data.Response.strike.lbDeaths.entries[3].value.basic.displayValue,
strikeTotalDeathsFifthPlaceName = data.Response.strike.lbDeaths.entries[4].player.destinyUserInfo.displayName,
strikeTotalDeathsFifthPlaceStat = data.Response.strike.lbDeaths.entries[4].value.basic.displayValue,
strikeTotalDeathsFirstPlaceIcon = data.Response.strike.lbDeaths.entries[0].player.destinyUserInfo.iconPath;
strikeTotalDeathsSecondPlaceIcon = data.Response.strike.lbDeaths.entries[1].player.destinyUserInfo.iconPath,
strikeTotalDeathsThirdPlaceIcon = data.Response.strike.lbDeaths.entries[2].player.destinyUserInfo.iconPath,
strikeTotalDeathsFourthPlaceIcon = data.Response.strike.lbDeaths.entries[3].player.destinyUserInfo.iconPath,
strikeTotalDeathsFifthPlaceIcon = data.Response.strike.lbDeaths.entries[4].player.destinyUserInfo.iconPath;

$('#player-strike-Total-Deaths-First-Place-Name').text(strikeTotalDeathsFirstPlaceName);
$('#player-strike-Total-Deaths-First-Place-Stat').text(strikeTotalDeathsFirstPlaceStat);
$('#player-strike-Total-Deaths-Second-Place-Name').text(strikeTotalDeathsSecondPlaceName);
$('#player-strike-Total-Deaths-Second-Place-Stat').text(strikeTotalDeathsSecondPlaceStat);
$('#player-strike-Total-Deaths-Third-Place-Name').text(strikeTotalDeathsThirdPlaceName);
$('#player-strike-Total-Deaths-Third-Place-Stat').text(strikeTotalDeathsThirdPlaceStat);
$('#player-strike-Total-Deaths-Fourth-Place-Name').text(strikeTotalDeathsFourthPlaceName);
$('#player-strike-Total-Deaths-Fourth-Place-Stat').text(strikeTotalDeathsFourthPlaceStat);
$('#player-strike-Total-Deaths-Fifth-Place-Name').text(strikeTotalDeathsFifthPlaceName);
$('#player-strike-Total-Deaths-Fifth-Place-Stat').text(strikeTotalDeathsFifthPlaceStat);
$('.player-strike-Total-Deaths-Fifth-Place-Icon').attr({
  'src': 'https://www.bungie.net' + strikeTotalDeathsFifthPlaceIcon});
$('.player-strike-Total-Deaths-Fifth-Place-Icon').attr({
  'src': 'https://www.bungie.net' + strikeTotalDeathsFifthPlaceIcon});
$('.player-strike-Total-Deaths-Fourth-Place-Icon').attr({
  'src': 'https://www.bungie.net' + strikeTotalDeathsFourthPlaceIcon});
$('.player-strike-Total-Deaths-Third-Place-Icon').attr({
  'src': 'https://www.bungie.net' + strikeTotalDeathsThirdPlaceIcon});
$('.player-strike-Total-Deaths-Second-Place-Icon').attr({
  'src': 'https://www.bungie.net' + strikeTotalDeathsSecondPlaceIcon});
$('.player-strike-Total-Deaths-First-Place-Icon').attr({
  'src': 'https://www.bungie.net' + strikeTotalDeathsFirstPlaceIcon});


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
