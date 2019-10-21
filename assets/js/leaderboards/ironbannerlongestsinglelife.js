$(function() {
  
    $.ajax({
       url: "https://www.bungie.net/Platform/Destiny2/Stats/Leaderboards/Clans/699392/?&modes=19&maxtop=100",
     headers: {
         "X-API-Key": "47b810e692d64237911c2cbe0d433cfe"
       }, 
       success: function(data) {
                   if (data.ErrorStatus === 'Success') {  


ironBannerLongestSingleLifeFirstPlaceName = data.Response.ironBanner.lbLongestSingleLife.entries[0].player.destinyUserInfo.displayName,
ironBannerLongestSingleLifeFirstPlaceStat = data.Response.ironBanner.lbLongestSingleLife.entries[0].value.basic.displayValue,
ironBannerLongestSingleLifeSecondPlaceName = data.Response.ironBanner.lbLongestSingleLife.entries[1].player.destinyUserInfo.displayName,
ironBannerLongestSingleLifeSecondPlaceStat = data.Response.ironBanner.lbLongestSingleLife.entries[1].value.basic.displayValue,
ironBannerLongestSingleLifeThirdPlaceName = data.Response.ironBanner.lbLongestSingleLife.entries[2].player.destinyUserInfo.displayName,
ironBannerLongestSingleLifeThirdPlaceStat = data.Response.ironBanner.lbLongestSingleLife.entries[2].value.basic.displayValue,
ironBannerLongestSingleLifeFourthPlaceName = data.Response.ironBanner.lbLongestSingleLife.entries[3].player.destinyUserInfo.displayName,
ironBannerLongestSingleLifeFourthPlaceStat = data.Response.ironBanner.lbLongestSingleLife.entries[3].value.basic.displayValue,
ironBannerLongestSingleLifeFifthPlaceName = data.Response.ironBanner.lbLongestSingleLife.entries[4].player.destinyUserInfo.displayName,
ironBannerLongestSingleLifeFifthPlaceStat = data.Response.ironBanner.lbLongestSingleLife.entries[4].value.basic.displayValue,
ironBannerLongestSingleLifeFirstPlaceIcon = data.Response.ironBanner.lbLongestSingleLife.entries[0].player.destinyUserInfo.iconPath;
ironBannerLongestSingleLifeSecondPlaceIcon = data.Response.ironBanner.lbLongestSingleLife.entries[1].player.destinyUserInfo.iconPath,
ironBannerLongestSingleLifeThirdPlaceIcon = data.Response.ironBanner.lbLongestSingleLife.entries[2].player.destinyUserInfo.iconPath,
ironBannerLongestSingleLifeFourthPlaceIcon = data.Response.ironBanner.lbLongestSingleLife.entries[3].player.destinyUserInfo.iconPath,
ironBannerLongestSingleLifeFifthPlaceIcon = data.Response.ironBanner.lbLongestSingleLife.entries[4].player.destinyUserInfo.iconPath;

$('#player-ironBanner-Longest-Single-Life-First-Place-Name').text(ironBannerLongestSingleLifeFirstPlaceName);
$('#player-ironBanner-Longest-Single-Life-First-Place-Stat').text(ironBannerLongestSingleLifeFirstPlaceStat);
$('#player-ironBanner-Longest-Single-Life-Second-Place-Name').text(ironBannerLongestSingleLifeSecondPlaceName);
$('#player-ironBanner-Longest-Single-Life-Second-Place-Stat').text(ironBannerLongestSingleLifeSecondPlaceStat);
$('#player-ironBanner-Longest-Single-Life-Third-Place-Name').text(ironBannerLongestSingleLifeThirdPlaceName);
$('#player-ironBanner-Longest-Single-Life-Third-Place-Stat').text(ironBannerLongestSingleLifeThirdPlaceStat);
$('#player-ironBanner-Longest-Single-Life-Fourth-Place-Name').text(ironBannerLongestSingleLifeFourthPlaceName);
$('#player-ironBanner-Longest-Single-Life-Fourth-Place-Stat').text(ironBannerLongestSingleLifeFourthPlaceStat);
$('#player-ironBanner-Longest-Single-Life-Fifth-Place-Name').text(ironBannerLongestSingleLifeFifthPlaceName);
$('#player-ironBanner-Longest-Single-Life-Fifth-Place-Stat').text(ironBannerLongestSingleLifeFifthPlaceStat);
$('.player-ironBanner-Longest-Single-Life-Fifth-Place-Icon').attr({
  'src': 'https://www.bungie.net' + ironBannerLongestSingleLifeFifthPlaceIcon});
$('.player-ironBanner-Longest-Single-Life-Fifth-Place-Icon').attr({
  'src': 'https://www.bungie.net' + ironBannerLongestSingleLifeFifthPlaceIcon});
$('.player-ironBanner-Longest-Single-Life-Fourth-Place-Icon').attr({
  'src': 'https://www.bungie.net' + ironBannerLongestSingleLifeFourthPlaceIcon});
$('.player-ironBanner-Longest-Single-Life-Third-Place-Icon').attr({
  'src': 'https://www.bungie.net' + ironBannerLongestSingleLifeThirdPlaceIcon});
$('.player-ironBanner-Longest-Single-Life-Second-Place-Icon').attr({
  'src': 'https://www.bungie.net' + ironBannerLongestSingleLifeSecondPlaceIcon});
$('.player-ironBanner-Longest-Single-Life-First-Place-Icon').attr({
  'src': 'https://www.bungie.net' + ironBannerLongestSingleLifeFirstPlaceIcon});

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
