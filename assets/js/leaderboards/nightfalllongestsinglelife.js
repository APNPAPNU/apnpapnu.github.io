$(function() {
  
    $.ajax({
       url: "https://www.bungie.net/Platform/Destiny2/Stats/Leaderboards/Clans/699392/?&modes=16&maxtop=100&components=medals",
     headers: {
         "X-API-Key": "47b810e692d64237911c2cbe0d433cfe"
       }, 
       success: function(data) {
                   if (data.ErrorStatus === 'Success') {  


nightfallLongestSingleLifeFirstPlaceName = data.Response.nightfall.lbLongestSingleLife.entries[0].player.destinyUserInfo.displayName,
nightfallLongestSingleLifeFirstPlaceStat = data.Response.nightfall.lbLongestSingleLife.entries[0].value.basic.displayValue,
nightfallLongestSingleLifeSecondPlaceName = data.Response.nightfall.lbLongestSingleLife.entries[1].player.destinyUserInfo.displayName,
nightfallLongestSingleLifeSecondPlaceStat = data.Response.nightfall.lbLongestSingleLife.entries[1].value.basic.displayValue,
nightfallLongestSingleLifeThirdPlaceName = data.Response.nightfall.lbLongestSingleLife.entries[2].player.destinyUserInfo.displayName,
nightfallLongestSingleLifeThirdPlaceStat = data.Response.nightfall.lbLongestSingleLife.entries[2].value.basic.displayValue,
nightfallLongestSingleLifeFourthPlaceName = data.Response.nightfall.lbLongestSingleLife.entries[3].player.destinyUserInfo.displayName,
nightfallLongestSingleLifeFourthPlaceStat = data.Response.nightfall.lbLongestSingleLife.entries[3].value.basic.displayValue,
nightfallLongestSingleLifeFifthPlaceName = data.Response.nightfall.lbLongestSingleLife.entries[4].player.destinyUserInfo.displayName,
nightfallLongestSingleLifeFifthPlaceStat = data.Response.nightfall.lbLongestSingleLife.entries[4].value.basic.displayValue,
nightfallLongestSingleLifeFirstPlaceIcon = data.Response.nightfall.lbLongestSingleLife.entries[0].player.destinyUserInfo.iconPath;
nightfallLongestSingleLifeSecondPlaceIcon = data.Response.nightfall.lbLongestSingleLife.entries[1].player.destinyUserInfo.iconPath,
nightfallLongestSingleLifeThirdPlaceIcon = data.Response.nightfall.lbLongestSingleLife.entries[2].player.destinyUserInfo.iconPath,
nightfallLongestSingleLifeFourthPlaceIcon = data.Response.nightfall.lbLongestSingleLife.entries[3].player.destinyUserInfo.iconPath,
nightfallLongestSingleLifeFifthPlaceIcon = data.Response.nightfall.lbLongestSingleLife.entries[4].player.destinyUserInfo.iconPath;

$('#player-nightfall-Longest-Single-Life-First-Place-Name').text(nightfallLongestSingleLifeFirstPlaceName);
$('#player-nightfall-Longest-Single-Life-First-Place-Stat').text(nightfallLongestSingleLifeFirstPlaceStat);
$('#player-nightfall-Longest-Single-Life-Second-Place-Name').text(nightfallLongestSingleLifeSecondPlaceName);
$('#player-nightfall-Longest-Single-Life-Second-Place-Stat').text(nightfallLongestSingleLifeSecondPlaceStat);
$('#player-nightfall-Longest-Single-Life-Third-Place-Name').text(nightfallLongestSingleLifeThirdPlaceName);
$('#player-nightfall-Longest-Single-Life-Third-Place-Stat').text(nightfallLongestSingleLifeThirdPlaceStat);
$('#player-nightfall-Longest-Single-Life-Fourth-Place-Name').text(nightfallLongestSingleLifeFourthPlaceName);
$('#player-nightfall-Longest-Single-Life-Fourth-Place-Stat').text(nightfallLongestSingleLifeFourthPlaceStat);
$('#player-nightfall-Longest-Single-Life-Fifth-Place-Name').text(nightfallLongestSingleLifeFifthPlaceName);
$('#player-nightfall-Longest-Single-Life-Fifth-Place-Stat').text(nightfallLongestSingleLifeFifthPlaceStat);
$('.player-nightfall-Longest-Single-Life-Fifth-Place-Icon').attr({
  'src': 'https://www.bungie.net' + nightfallLongestSingleLifeFifthPlaceIcon});
$('.player-nightfall-Longest-Single-Life-Fifth-Place-Icon').attr({
  'src': 'https://www.bungie.net' + nightfallLongestSingleLifeFifthPlaceIcon});
$('.player-nightfall-Longest-Single-Life-Fourth-Place-Icon').attr({
  'src': 'https://www.bungie.net' + nightfallLongestSingleLifeFourthPlaceIcon});
$('.player-nightfall-Longest-Single-Life-Third-Place-Icon').attr({
  'src': 'https://www.bungie.net' + nightfallLongestSingleLifeThirdPlaceIcon});
$('.player-nightfall-Longest-Single-Life-Second-Place-Icon').attr({
  'src': 'https://www.bungie.net' + nightfallLongestSingleLifeSecondPlaceIcon});
$('.player-nightfall-Longest-Single-Life-First-Place-Icon').attr({
  'src': 'https://www.bungie.net' + nightfallLongestSingleLifeFirstPlaceIcon});

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
