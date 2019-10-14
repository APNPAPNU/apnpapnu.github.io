$(function() {
  
    $.ajax({
       url: "https://www.bungie.net/Platform/Destiny2/Stats/Leaderboards/Clans/699392/?&modes=7&maxtop=100",
     headers: {
         "X-API-Key": "47b810e692d64237911c2cbe0d433cfe"
       }, 
       success: function(data) {
                   if (data.ErrorStatus === 'Success') {  


allpveTotalDeathsFirstPlaceName = data.Response.allPvE.lbDeaths.entries[0].player.destinyUserInfo.displayName,
allpveTotalDeathsFirstPlaceStat = data.Response.allPvE.lbDeaths.entries[0].value.basic.displayValue,
allpveTotalDeathsSecondPlaceName = data.Response.allPvE.lbDeaths.entries[1].player.destinyUserInfo.displayName,
allpveTotalDeathsSecondPlaceStat = data.Response.allPvE.lbDeaths.entries[1].value.basic.displayValue,
allpveTotalDeathsThirdPlaceName = data.Response.allPvE.lbDeaths.entries[2].player.destinyUserInfo.displayName,
allpveTotalDeathsThirdPlaceStat = data.Response.allPvE.lbDeaths.entries[2].value.basic.displayValue,
allpveTotalDeathsFourthPlaceName = data.Response.allPvE.lbDeaths.entries[3].player.destinyUserInfo.displayName,
allpveTotalDeathsFourthPlaceStat = data.Response.allPvE.lbDeaths.entries[3].value.basic.displayValue,
allpveTotalDeathsFifthPlaceName = data.Response.allPvE.lbDeaths.entries[4].player.destinyUserInfo.displayName,
allpveTotalDeathsFifthPlaceStat = data.Response.allPvE.lbDeaths.entries[4].value.basic.displayValue,
allpveTotalDeathsFirstPlaceIcon = data.Response.allPvE.lbDeaths.entries[0].player.destinyUserInfo.iconPath;
allpveTotalDeathsSecondPlaceIcon = data.Response.allPvE.lbDeaths.entries[1].player.destinyUserInfo.iconPath,
allpveTotalDeathsThirdPlaceIcon = data.Response.allPvE.lbDeaths.entries[2].player.destinyUserInfo.iconPath,
allpveTotalDeathsFourthPlaceIcon = data.Response.allPvE.lbDeaths.entries[3].player.destinyUserInfo.iconPath,
allpveTotalDeathsFifthPlaceIcon = data.Response.allPvE.lbDeaths.entries[4].player.destinyUserInfo.iconPath;

$('#player-allpve-Total-Deaths-First-Place-Name').text(allpveTotalDeathsFirstPlaceName);
$('#player-allpve-Total-Deaths-First-Place-Stat').text(allpveTotalDeathsFirstPlaceStat);
$('#player-allpve-Total-Deaths-Second-Place-Name').text(allpveTotalDeathsSecondPlaceName);
$('#player-allpve-Total-Deaths-Second-Place-Stat').text(allpveTotalDeathsSecondPlaceStat);
$('#player-allpve-Total-Deaths-Third-Place-Name').text(allpveTotalDeathsThirdPlaceName);
$('#player-allpve-Total-Deaths-Third-Place-Stat').text(allpveTotalDeathsThirdPlaceStat);
$('#player-allpve-Total-Deaths-Fourth-Place-Name').text(allpveTotalDeathsFourthPlaceName);
$('#player-allpve-Total-Deaths-Fourth-Place-Stat').text(allpveTotalDeathsFourthPlaceStat);
$('#player-allpve-Total-Deaths-Fifth-Place-Name').text(allpveTotalDeathsFifthPlaceName);
$('#player-allpve-Total-Deaths-Fifth-Place-Stat').text(allpveTotalDeathsFifthPlaceStat);
$('.player-allpve-Total-Deaths-Fifth-Place-Icon').attr({
  'src': 'https://www.bungie.net' + allpveTotalDeathsFifthPlaceIcon});
$('.player-allpve-Total-Deaths-Fifth-Place-Icon').attr({
  'src': 'https://www.bungie.net' + allpveTotalDeathsFifthPlaceIcon});
$('.player-allpve-Total-Deaths-Fourth-Place-Icon').attr({
  'src': 'https://www.bungie.net' + allpveTotalDeathsFourthPlaceIcon});
$('.player-allpve-Total-Deaths-Third-Place-Icon').attr({
  'src': 'https://www.bungie.net' + allpveTotalDeathsThirdPlaceIcon});
$('.player-allpve-Total-Deaths-Second-Place-Icon').attr({
  'src': 'https://www.bungie.net' + allpveTotalDeathsSecondPlaceIcon});
$('.player-allpve-Total-Deaths-First-Place-Icon').attr({
  'src': 'https://www.bungie.net' + allpveTotalDeathsFirstPlaceIcon});


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
