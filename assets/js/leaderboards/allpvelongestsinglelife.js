$(function() {
  
    $.ajax({
       url: "https://www.bungie.net/Platform/Destiny2/Stats/Leaderboards/Clans/699392/?&modes=7&maxtop=100",
     headers: {
         "X-API-Key": "47b810e692d64237911c2cbe0d433cfe"
       }, 
       success: function(data) {
                   if (data.ErrorStatus === 'Success') {  

allpveLongestSingleLifeFirstPlaceName = data.Response.allPvE.lbLongestSingleLife.entries[0].player.destinyUserInfo.displayName,
allpveLongestSingleLifeFirstPlaceStat = data.Response.allPvE.lbLongestSingleLife.entries[0].value.basic.displayValue,
allpveLongestSingleLifeSecondPlaceName = data.Response.allPvE.lbLongestSingleLife.entries[1].player.destinyUserInfo.displayName,
allpveLongestSingleLifeSecondPlaceStat = data.Response.allPvE.lbLongestSingleLife.entries[1].value.basic.displayValue,
allpveLongestSingleLifeThirdPlaceName = data.Response.allPvE.lbLongestSingleLife.entries[2].player.destinyUserInfo.displayName,
allpveLongestSingleLifeThirdPlaceStat = data.Response.allPvE.lbLongestSingleLife.entries[2].value.basic.displayValue,
allpveLongestSingleLifeFourthPlaceName = data.Response.allPvE.lbLongestSingleLife.entries[3].player.destinyUserInfo.displayName,
allpveLongestSingleLifeFourthPlaceStat = data.Response.allPvE.lbLongestSingleLife.entries[3].value.basic.displayValue,
allpveLongestSingleLifeFifthPlaceName = data.Response.allPvE.lbLongestSingleLife.entries[4].player.destinyUserInfo.displayName,
allpveLongestSingleLifeFifthPlaceStat = data.Response.allPvE.lbLongestSingleLife.entries[4].value.basic.displayValue,
allpveLongestSingleLifeFirstPlaceIcon = data.Response.allPvE.lbLongestSingleLife.entries[0].player.destinyUserInfo.iconPath;
allpveLongestSingleLifeSecondPlaceIcon = data.Response.allPvE.lbLongestSingleLife.entries[1].player.destinyUserInfo.iconPath,
allpveLongestSingleLifeThirdPlaceIcon = data.Response.allPvE.lbLongestSingleLife.entries[2].player.destinyUserInfo.iconPath,
allpveLongestSingleLifeFourthPlaceIcon = data.Response.allPvE.lbLongestSingleLife.entries[3].player.destinyUserInfo.iconPath,
allpveLongestSingleLifeFifthPlaceIcon = data.Response.allPvE.lbLongestSingleLife.entries[4].player.destinyUserInfo.iconPath;

$('#player-allpve-Longest-Single-Life-First-Place-Name').text(allpveLongestSingleLifeFirstPlaceName);
$('#player-allpve-Longest-Single-Life-First-Place-Stat').text(allpveLongestSingleLifeFirstPlaceStat);
$('#player-allpve-Longest-Single-Life-Second-Place-Name').text(allpveLongestSingleLifeSecondPlaceName);
$('#player-allpve-Longest-Single-Life-Second-Place-Stat').text(allpveLongestSingleLifeSecondPlaceStat);
$('#player-allpve-Longest-Single-Life-Third-Place-Name').text(allpveLongestSingleLifeThirdPlaceName);
$('#player-allpve-Longest-Single-Life-Third-Place-Stat').text(allpveLongestSingleLifeThirdPlaceStat);
$('#player-allpve-Longest-Single-Life-Fourth-Place-Name').text(allpveLongestSingleLifeFourthPlaceName);
$('#player-allpve-Longest-Single-Life-Fourth-Place-Stat').text(allpveLongestSingleLifeFourthPlaceStat);
$('#player-allpve-Longest-Single-Life-Fifth-Place-Name').text(allpveLongestSingleLifeFifthPlaceName);
$('#player-allpve-Longest-Single-Life-Fifth-Place-Stat').text(allpveLongestSingleLifeFifthPlaceStat);
$('.player-allpve-Longest-Single-Life-Fifth-Place-Icon').attr({
  'src': 'https://www.bungie.net' + allpveLongestSingleLifeFifthPlaceIcon});
$('.player-allpve-Longest-Single-Life-Fifth-Place-Icon').attr({
  'src': 'https://www.bungie.net' + allpveLongestSingleLifeFifthPlaceIcon});
$('.player-allpve-Longest-Single-Life-Fourth-Place-Icon').attr({
  'src': 'https://www.bungie.net' + allpveLongestSingleLifeFourthPlaceIcon});
$('.player-allpve-Longest-Single-Life-Third-Place-Icon').attr({
  'src': 'https://www.bungie.net' + allpveLongestSingleLifeThirdPlaceIcon});
$('.player-allpve-Longest-Single-Life-Second-Place-Icon').attr({
  'src': 'https://www.bungie.net' + allpveLongestSingleLifeSecondPlaceIcon});
$('.player-allpve-Longest-Single-Life-First-Place-Icon').attr({
  'src': 'https://www.bungie.net' + allpveLongestSingleLifeFirstPlaceIcon});

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
