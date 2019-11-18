$(function() {
  
    $.ajax({
       url: "https://www.bungie.net/Platform/Destiny2/Stats/Leaderboards/Clans/699392/?&modes=4&maxtop=100&components=medals",
     headers: {
         "X-API-Key": "47b810e692d64237911c2cbe0d433cfe"
       }, 
       success: function(data) {
                   if (data.ErrorStatus === 'Success') {  


raidTotalDeathsFirstPlaceName = data.Response.raid.lbDeaths.entries[0].player.destinyUserInfo.displayName,
raidTotalDeathsFirstPlaceStat = data.Response.raid.lbDeaths.entries[0].value.basic.displayValue,
raidTotalDeathsSecondPlaceName = data.Response.raid.lbDeaths.entries[1].player.destinyUserInfo.displayName,
raidTotalDeathsSecondPlaceStat = data.Response.raid.lbDeaths.entries[1].value.basic.displayValue,
raidTotalDeathsThirdPlaceName = data.Response.raid.lbDeaths.entries[2].player.destinyUserInfo.displayName,
raidTotalDeathsThirdPlaceStat = data.Response.raid.lbDeaths.entries[2].value.basic.displayValue,
raidTotalDeathsFourthPlaceName = data.Response.raid.lbDeaths.entries[3].player.destinyUserInfo.displayName,
raidTotalDeathsFourthPlaceStat = data.Response.raid.lbDeaths.entries[3].value.basic.displayValue,
raidTotalDeathsFifthPlaceName = data.Response.raid.lbDeaths.entries[4].player.destinyUserInfo.displayName,
raidTotalDeathsFifthPlaceStat = data.Response.raid.lbDeaths.entries[4].value.basic.displayValue,
raidTotalDeathsFirstPlaceIcon = data.Response.raid.lbDeaths.entries[0].player.destinyUserInfo.iconPath;
raidTotalDeathsSecondPlaceIcon = data.Response.raid.lbDeaths.entries[1].player.destinyUserInfo.iconPath,
raidTotalDeathsThirdPlaceIcon = data.Response.raid.lbDeaths.entries[2].player.destinyUserInfo.iconPath,
raidTotalDeathsFourthPlaceIcon = data.Response.raid.lbDeaths.entries[3].player.destinyUserInfo.iconPath,
raidTotalDeathsFifthPlaceIcon = data.Response.raid.lbDeaths.entries[4].player.destinyUserInfo.iconPath;

$('#player-raid-Total-Deaths-First-Place-Name').text(raidTotalDeathsFirstPlaceName);
$('#player-raid-Total-Deaths-First-Place-Stat').text(raidTotalDeathsFirstPlaceStat);
$('#player-raid-Total-Deaths-Second-Place-Name').text(raidTotalDeathsSecondPlaceName);
$('#player-raid-Total-Deaths-Second-Place-Stat').text(raidTotalDeathsSecondPlaceStat);
$('#player-raid-Total-Deaths-Third-Place-Name').text(raidTotalDeathsThirdPlaceName);
$('#player-raid-Total-Deaths-Third-Place-Stat').text(raidTotalDeathsThirdPlaceStat);
$('#player-raid-Total-Deaths-Fourth-Place-Name').text(raidTotalDeathsFourthPlaceName);
$('#player-raid-Total-Deaths-Fourth-Place-Stat').text(raidTotalDeathsFourthPlaceStat);
$('#player-raid-Total-Deaths-Fifth-Place-Name').text(raidTotalDeathsFifthPlaceName);
$('#player-raid-Total-Deaths-Fifth-Place-Stat').text(raidTotalDeathsFifthPlaceStat);
$('.player-raid-Total-Deaths-Fifth-Place-Icon').attr({
  'src': 'https://www.bungie.net' + raidTotalDeathsFifthPlaceIcon});
$('.player-raid-Total-Deaths-Fifth-Place-Icon').attr({
  'src': 'https://www.bungie.net' + raidTotalDeathsFifthPlaceIcon});
$('.player-raid-Total-Deaths-Fourth-Place-Icon').attr({
  'src': 'https://www.bungie.net' + raidTotalDeathsFourthPlaceIcon});
$('.player-raid-Total-Deaths-Third-Place-Icon').attr({
  'src': 'https://www.bungie.net' + raidTotalDeathsThirdPlaceIcon});
$('.player-raid-Total-Deaths-Second-Place-Icon').attr({
  'src': 'https://www.bungie.net' + raidTotalDeathsSecondPlaceIcon});
$('.player-raid-Total-Deaths-First-Place-Icon').attr({
  'src': 'https://www.bungie.net' + raidTotalDeathsFirstPlaceIcon});


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
