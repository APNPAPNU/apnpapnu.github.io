$(function() {
  
    $.ajax({
       url: "https://www.bungie.net/Platform/Destiny2/Stats/Leaderboards/Clans/699392/?&modes=19&maxtop=100",
     headers: {
         "X-API-Key": "47b810e692d64237911c2cbe0d433cfe"
       }, 
       success: function(data) {
                   if (data.ErrorStatus === 'Success') {  


ironBannerTotalDeathsFirstPlaceName = data.Response.ironBanner.lbDeaths.entries[0].player.destinyUserInfo.displayName,
ironBannerTotalDeathsFirstPlaceStat = data.Response.ironBanner.lbDeaths.entries[0].value.basic.displayValue,
ironBannerTotalDeathsSecondPlaceName = data.Response.ironBanner.lbDeaths.entries[1].player.destinyUserInfo.displayName,
ironBannerTotalDeathsSecondPlaceStat = data.Response.ironBanner.lbDeaths.entries[1].value.basic.displayValue,
ironBannerTotalDeathsThirdPlaceName = data.Response.ironBanner.lbDeaths.entries[2].player.destinyUserInfo.displayName,
ironBannerTotalDeathsThirdPlaceStat = data.Response.ironBanner.lbDeaths.entries[2].value.basic.displayValue,
ironBannerTotalDeathsFourthPlaceName = data.Response.ironBanner.lbDeaths.entries[3].player.destinyUserInfo.displayName,
ironBannerTotalDeathsFourthPlaceStat = data.Response.ironBanner.lbDeaths.entries[3].value.basic.displayValue,
ironBannerTotalDeathsFifthPlaceName = data.Response.ironBanner.lbDeaths.entries[4].player.destinyUserInfo.displayName,
ironBannerTotalDeathsFifthPlaceStat = data.Response.ironBanner.lbDeaths.entries[4].value.basic.displayValue,
ironBannerTotalDeathsFirstPlaceIcon = data.Response.ironBanner.lbDeaths.entries[0].player.destinyUserInfo.iconPath;
ironBannerTotalDeathsSecondPlaceIcon = data.Response.ironBanner.lbDeaths.entries[1].player.destinyUserInfo.iconPath,
ironBannerTotalDeathsThirdPlaceIcon = data.Response.ironBanner.lbDeaths.entries[2].player.destinyUserInfo.iconPath,
ironBannerTotalDeathsFourthPlaceIcon = data.Response.ironBanner.lbDeaths.entries[3].player.destinyUserInfo.iconPath,
ironBannerTotalDeathsFifthPlaceIcon = data.Response.ironBanner.lbDeaths.entries[4].player.destinyUserInfo.iconPath;

$('#player-ironBanner-Total-Deaths-First-Place-Name').text(ironBannerTotalDeathsFirstPlaceName);
$('#player-ironBanner-Total-Deaths-First-Place-Stat').text(ironBannerTotalDeathsFirstPlaceStat);
$('#player-ironBanner-Total-Deaths-Second-Place-Name').text(ironBannerTotalDeathsSecondPlaceName);
$('#player-ironBanner-Total-Deaths-Second-Place-Stat').text(ironBannerTotalDeathsSecondPlaceStat);
$('#player-ironBanner-Total-Deaths-Third-Place-Name').text(ironBannerTotalDeathsThirdPlaceName);
$('#player-ironBanner-Total-Deaths-Third-Place-Stat').text(ironBannerTotalDeathsThirdPlaceStat);
$('#player-ironBanner-Total-Deaths-Fourth-Place-Name').text(ironBannerTotalDeathsFourthPlaceName);
$('#player-ironBanner-Total-Deaths-Fourth-Place-Stat').text(ironBannerTotalDeathsFourthPlaceStat);
$('#player-ironBanner-Total-Deaths-Fifth-Place-Name').text(ironBannerTotalDeathsFifthPlaceName);
$('#player-ironBanner-Total-Deaths-Fifth-Place-Stat').text(ironBannerTotalDeathsFifthPlaceStat);
$('.player-ironBanner-Total-Deaths-Fifth-Place-Icon').attr({
  'src': 'https://www.bungie.net' + ironBannerTotalDeathsFifthPlaceIcon});
$('.player-ironBanner-Total-Deaths-Fifth-Place-Icon').attr({
  'src': 'https://www.bungie.net' + ironBannerTotalDeathsFifthPlaceIcon});
$('.player-ironBanner-Total-Deaths-Fourth-Place-Icon').attr({
  'src': 'https://www.bungie.net' + ironBannerTotalDeathsFourthPlaceIcon});
$('.player-ironBanner-Total-Deaths-Third-Place-Icon').attr({
  'src': 'https://www.bungie.net' + ironBannerTotalDeathsThirdPlaceIcon});
$('.player-ironBanner-Total-Deaths-Second-Place-Icon').attr({
  'src': 'https://www.bungie.net' + ironBannerTotalDeathsSecondPlaceIcon});
$('.player-ironBanner-Total-Deaths-First-Place-Icon').attr({
  'src': 'https://www.bungie.net' + ironBannerTotalDeathsFirstPlaceIcon});


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
