$(function() {
  
    $.ajax({
       url: "https://www.bungie.net/Platform/Destiny2/Stats/Leaderboards/Clans/699392/?&modes=5&maxtop=100",
     headers: {
         "X-API-Key": "47b810e692d64237911c2cbe0d433cfe"
       }, 
       success: function(data) {
                   if (data.ErrorStatus === 'Success') {  


allpvpLongestSingleLifeFirstPlaceName = data.Response.allPvP.lbLongestSingleLife.entries[0].player.destinyUserInfo.displayName,
allpvpLongestSingleLifeFirstPlaceStat = data.Response.allPvP.lbLongestSingleLife.entries[0].value.basic.displayValue,
allpvpLongestSingleLifeSecondPlaceName = data.Response.allPvP.lbLongestSingleLife.entries[1].player.destinyUserInfo.displayName,
allpvpLongestSingleLifeSecondPlaceStat = data.Response.allPvP.lbLongestSingleLife.entries[1].value.basic.displayValue,
allpvpLongestSingleLifeThirdPlaceName = data.Response.allPvP.lbLongestSingleLife.entries[2].player.destinyUserInfo.displayName,
allpvpLongestSingleLifeThirdPlaceStat = data.Response.allPvP.lbLongestSingleLife.entries[2].value.basic.displayValue,
allpvpLongestSingleLifeFourthPlaceName = data.Response.allPvP.lbLongestSingleLife.entries[3].player.destinyUserInfo.displayName,
allpvpLongestSingleLifeFourthPlaceStat = data.Response.allPvP.lbLongestSingleLife.entries[3].value.basic.displayValue,
allpvpLongestSingleLifeFifthPlaceName = data.Response.allPvP.lbLongestSingleLife.entries[4].player.destinyUserInfo.displayName,
allpvpLongestSingleLifeFifthPlaceStat = data.Response.allPvP.lbLongestSingleLife.entries[4].value.basic.displayValue,
allpvpLongestSingleLifeFirstPlaceIcon = data.Response.allPvP.lbLongestSingleLife.entries[0].player.destinyUserInfo.iconPath;
allpvpLongestSingleLifeSecondPlaceIcon = data.Response.allPvP.lbLongestSingleLife.entries[1].player.destinyUserInfo.iconPath,
allpvpLongestSingleLifeThirdPlaceIcon = data.Response.allPvP.lbLongestSingleLife.entries[2].player.destinyUserInfo.iconPath,
allpvpLongestSingleLifeFourthPlaceIcon = data.Response.allPvP.lbLongestSingleLife.entries[3].player.destinyUserInfo.iconPath,
allpvpLongestSingleLifeFifthPlaceIcon = data.Response.allPvP.lbLongestSingleLife.entries[4].player.destinyUserInfo.iconPath;

$('#player-allpvp-Longest-Single-Life-First-Place-Name').text(allpvpLongestSingleLifeFirstPlaceName);
$('#player-allpvp-Longest-Single-Life-First-Place-Stat').text(allpvpLongestSingleLifeFirstPlaceStat);
$('#player-allpvp-Longest-Single-Life-Second-Place-Name').text(allpvpLongestSingleLifeSecondPlaceName);
$('#player-allpvp-Longest-Single-Life-Second-Place-Stat').text(allpvpLongestSingleLifeSecondPlaceStat);
$('#player-allpvp-Longest-Single-Life-Third-Place-Name').text(allpvpLongestSingleLifeThirdPlaceName);
$('#player-allpvp-Longest-Single-Life-Third-Place-Stat').text(allpvpLongestSingleLifeThirdPlaceStat);
$('#player-allpvp-Longest-Single-Life-Fourth-Place-Name').text(allpvpLongestSingleLifeFourthPlaceName);
$('#player-allpvp-Longest-Single-Life-Fourth-Place-Stat').text(allpvpLongestSingleLifeFourthPlaceStat);
$('#player-allpvp-Longest-Single-Life-Fifth-Place-Name').text(allpvpLongestSingleLifeFifthPlaceName);
$('#player-allpvp-Longest-Single-Life-Fifth-Place-Stat').text(allpvpLongestSingleLifeFifthPlaceStat);
$('.player-allpvp-Longest-Single-Life-Fifth-Place-Icon').attr({
  'src': 'https://www.bungie.net' + allpvpLongestSingleLifeFifthPlaceIcon});
$('.player-allpvp-Longest-Single-Life-Fifth-Place-Icon').attr({
  'src': 'https://www.bungie.net' + allpvpLongestSingleLifeFifthPlaceIcon});
$('.player-allpvp-Longest-Single-Life-Fourth-Place-Icon').attr({
  'src': 'https://www.bungie.net' + allpvpLongestSingleLifeFourthPlaceIcon});
$('.player-allpvp-Longest-Single-Life-Third-Place-Icon').attr({
  'src': 'https://www.bungie.net' + allpvpLongestSingleLifeThirdPlaceIcon});
$('.player-allpvp-Longest-Single-Life-Second-Place-Icon').attr({
  'src': 'https://www.bungie.net' + allpvpLongestSingleLifeSecondPlaceIcon});
$('.player-allpvp-Longest-Single-Life-First-Place-Icon').attr({
  'src': 'https://www.bungie.net' + allpvpLongestSingleLifeFirstPlaceIcon});

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
