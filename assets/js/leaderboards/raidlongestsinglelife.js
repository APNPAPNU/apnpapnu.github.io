$(function() {
  
    $.ajax({
       url: "https://www.bungie.net/Platform/Destiny2/Stats/Leaderboards/Clans/699392/?&modes=4&maxtop=100&components=medals",
     headers: {
         "X-API-Key": "47b810e692d64237911c2cbe0d433cfe"
       }, 
       success: function(data) {
                   if (data.ErrorStatus === 'Success') {  


raidLongestSingleLifeFirstPlaceName = data.Response.raid.lbLongestSingleLife.entries[0].player.destinyUserInfo.displayName,
raidLongestSingleLifeFirstPlaceStat = data.Response.raid.lbLongestSingleLife.entries[0].value.basic.displayValue,
raidLongestSingleLifeSecondPlaceName = data.Response.raid.lbLongestSingleLife.entries[1].player.destinyUserInfo.displayName,
raidLongestSingleLifeSecondPlaceStat = data.Response.raid.lbLongestSingleLife.entries[1].value.basic.displayValue,
raidLongestSingleLifeThirdPlaceName = data.Response.raid.lbLongestSingleLife.entries[2].player.destinyUserInfo.displayName,
raidLongestSingleLifeThirdPlaceStat = data.Response.raid.lbLongestSingleLife.entries[2].value.basic.displayValue,
raidLongestSingleLifeFourthPlaceName = data.Response.raid.lbLongestSingleLife.entries[3].player.destinyUserInfo.displayName,
raidLongestSingleLifeFourthPlaceStat = data.Response.raid.lbLongestSingleLife.entries[3].value.basic.displayValue,
raidLongestSingleLifeFifthPlaceName = data.Response.raid.lbLongestSingleLife.entries[4].player.destinyUserInfo.displayName,
raidLongestSingleLifeFifthPlaceStat = data.Response.raid.lbLongestSingleLife.entries[4].value.basic.displayValue,
raidLongestSingleLifeFirstPlaceIcon = data.Response.raid.lbLongestSingleLife.entries[0].player.destinyUserInfo.iconPath;
raidLongestSingleLifeSecondPlaceIcon = data.Response.raid.lbLongestSingleLife.entries[1].player.destinyUserInfo.iconPath,
raidLongestSingleLifeThirdPlaceIcon = data.Response.raid.lbLongestSingleLife.entries[2].player.destinyUserInfo.iconPath,
raidLongestSingleLifeFourthPlaceIcon = data.Response.raid.lbLongestSingleLife.entries[3].player.destinyUserInfo.iconPath,
raidLongestSingleLifeFifthPlaceIcon = data.Response.raid.lbLongestSingleLife.entries[4].player.destinyUserInfo.iconPath;

$('#player-raid-Longest-Single-Life-First-Place-Name').text(raidLongestSingleLifeFirstPlaceName);
$('#player-raid-Longest-Single-Life-First-Place-Stat').text(raidLongestSingleLifeFirstPlaceStat);
$('#player-raid-Longest-Single-Life-Second-Place-Name').text(raidLongestSingleLifeSecondPlaceName);
$('#player-raid-Longest-Single-Life-Second-Place-Stat').text(raidLongestSingleLifeSecondPlaceStat);
$('#player-raid-Longest-Single-Life-Third-Place-Name').text(raidLongestSingleLifeThirdPlaceName);
$('#player-raid-Longest-Single-Life-Third-Place-Stat').text(raidLongestSingleLifeThirdPlaceStat);
$('#player-raid-Longest-Single-Life-Fourth-Place-Name').text(raidLongestSingleLifeFourthPlaceName);
$('#player-raid-Longest-Single-Life-Fourth-Place-Stat').text(raidLongestSingleLifeFourthPlaceStat);
$('#player-raid-Longest-Single-Life-Fifth-Place-Name').text(raidLongestSingleLifeFifthPlaceName);
$('#player-raid-Longest-Single-Life-Fifth-Place-Stat').text(raidLongestSingleLifeFifthPlaceStat);
$('.player-raid-Longest-Single-Life-Fifth-Place-Icon').attr({
  'src': 'https://www.bungie.net' + raidLongestSingleLifeFifthPlaceIcon});
$('.player-raid-Longest-Single-Life-Fifth-Place-Icon').attr({
  'src': 'https://www.bungie.net' + raidLongestSingleLifeFifthPlaceIcon});
$('.player-raid-Longest-Single-Life-Fourth-Place-Icon').attr({
  'src': 'https://www.bungie.net' + raidLongestSingleLifeFourthPlaceIcon});
$('.player-raid-Longest-Single-Life-Third-Place-Icon').attr({
  'src': 'https://www.bungie.net' + raidLongestSingleLifeThirdPlaceIcon});
$('.player-raid-Longest-Single-Life-Second-Place-Icon').attr({
  'src': 'https://www.bungie.net' + raidLongestSingleLifeSecondPlaceIcon});
$('.player-raid-Longest-Single-Life-First-Place-Icon').attr({
  'src': 'https://www.bungie.net' + raidLongestSingleLifeFirstPlaceIcon});

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
