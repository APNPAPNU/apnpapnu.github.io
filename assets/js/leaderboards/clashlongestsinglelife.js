$(function() {
  
    $.ajax({
       url: "https://www.bungie.net/Platform/Destiny2/Stats/Leaderboards/Clans/699392/?&modes=12&maxtop=100",
     headers: {
         "X-API-Key": "47b810e692d64237911c2cbe0d433cfe"
       }, 
       success: function(data) {
                   if (data.ErrorStatus === 'Success') {  


clashLongestSingleLifeFirstPlaceName = data.Response.clash.lbLongestSingleLife.entries[0].player.destinyUserInfo.displayName,
clashLongestSingleLifeFirstPlaceStat = data.Response.clash.lbLongestSingleLife.entries[0].value.basic.displayValue,
clashLongestSingleLifeSecondPlaceName = data.Response.clash.lbLongestSingleLife.entries[1].player.destinyUserInfo.displayName,
clashLongestSingleLifeSecondPlaceStat = data.Response.clash.lbLongestSingleLife.entries[1].value.basic.displayValue,
clashLongestSingleLifeThirdPlaceName = data.Response.clash.lbLongestSingleLife.entries[2].player.destinyUserInfo.displayName,
clashLongestSingleLifeThirdPlaceStat = data.Response.clash.lbLongestSingleLife.entries[2].value.basic.displayValue,
clashLongestSingleLifeFourthPlaceName = data.Response.clash.lbLongestSingleLife.entries[3].player.destinyUserInfo.displayName,
clashLongestSingleLifeFourthPlaceStat = data.Response.clash.lbLongestSingleLife.entries[3].value.basic.displayValue,
clashLongestSingleLifeFifthPlaceName = data.Response.clash.lbLongestSingleLife.entries[4].player.destinyUserInfo.displayName,
clashLongestSingleLifeFifthPlaceStat = data.Response.clash.lbLongestSingleLife.entries[4].value.basic.displayValue,
clashLongestSingleLifeFirstPlaceIcon = data.Response.clash.lbLongestSingleLife.entries[0].player.destinyUserInfo.iconPath;
clashLongestSingleLifeSecondPlaceIcon = data.Response.clash.lbLongestSingleLife.entries[1].player.destinyUserInfo.iconPath,
clashLongestSingleLifeThirdPlaceIcon = data.Response.clash.lbLongestSingleLife.entries[2].player.destinyUserInfo.iconPath,
clashLongestSingleLifeFourthPlaceIcon = data.Response.clash.lbLongestSingleLife.entries[3].player.destinyUserInfo.iconPath,
clashLongestSingleLifeFifthPlaceIcon = data.Response.clash.lbLongestSingleLife.entries[4].player.destinyUserInfo.iconPath;

$('#player-clash-Longest-Single-Life-First-Place-Name').text(clashLongestSingleLifeFirstPlaceName);
$('#player-clash-Longest-Single-Life-First-Place-Stat').text(clashLongestSingleLifeFirstPlaceStat);
$('#player-clash-Longest-Single-Life-Second-Place-Name').text(clashLongestSingleLifeSecondPlaceName);
$('#player-clash-Longest-Single-Life-Second-Place-Stat').text(clashLongestSingleLifeSecondPlaceStat);
$('#player-clash-Longest-Single-Life-Third-Place-Name').text(clashLongestSingleLifeThirdPlaceName);
$('#player-clash-Longest-Single-Life-Third-Place-Stat').text(clashLongestSingleLifeThirdPlaceStat);
$('#player-clash-Longest-Single-Life-Fourth-Place-Name').text(clashLongestSingleLifeFourthPlaceName);
$('#player-clash-Longest-Single-Life-Fourth-Place-Stat').text(clashLongestSingleLifeFourthPlaceStat);
$('#player-clash-Longest-Single-Life-Fifth-Place-Name').text(clashLongestSingleLifeFifthPlaceName);
$('#player-clash-Longest-Single-Life-Fifth-Place-Stat').text(clashLongestSingleLifeFifthPlaceStat);
$('.player-clash-Longest-Single-Life-Fifth-Place-Icon').attr({
  'src': 'https://www.bungie.net' + clashLongestSingleLifeFifthPlaceIcon});
$('.player-clash-Longest-Single-Life-Fifth-Place-Icon').attr({
  'src': 'https://www.bungie.net' + clashLongestSingleLifeFifthPlaceIcon});
$('.player-clash-Longest-Single-Life-Fourth-Place-Icon').attr({
  'src': 'https://www.bungie.net' + clashLongestSingleLifeFourthPlaceIcon});
$('.player-clash-Longest-Single-Life-Third-Place-Icon').attr({
  'src': 'https://www.bungie.net' + clashLongestSingleLifeThirdPlaceIcon});
$('.player-clash-Longest-Single-Life-Second-Place-Icon').attr({
  'src': 'https://www.bungie.net' + clashLongestSingleLifeSecondPlaceIcon});
$('.player-clash-Longest-Single-Life-First-Place-Icon').attr({
  'src': 'https://www.bungie.net' + clashLongestSingleLifeFirstPlaceIcon});

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
