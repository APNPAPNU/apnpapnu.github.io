$(function() {
  
    $.ajax({
       url: "https://www.bungie.net/Platform/Destiny2/Stats/Leaderboards/Clans/699392/?&modes=10&maxtop=100",
     headers: {
         "X-API-Key": "47b810e692d64237911c2cbe0d433cfe"
       }, 
       success: function(data) {
                   if (data.ErrorStatus === 'Success') {  


controlLongestSingleLifeFirstPlaceName = data.Response.control.lbLongestSingleLife.entries[0].player.destinyUserInfo.displayName,
controlLongestSingleLifeFirstPlaceStat = data.Response.control.lbLongestSingleLife.entries[0].value.basic.displayValue,
controlLongestSingleLifeSecondPlaceName = data.Response.control.lbLongestSingleLife.entries[1].player.destinyUserInfo.displayName,
controlLongestSingleLifeSecondPlaceStat = data.Response.control.lbLongestSingleLife.entries[1].value.basic.displayValue,
controlLongestSingleLifeThirdPlaceName = data.Response.control.lbLongestSingleLife.entries[2].player.destinyUserInfo.displayName,
controlLongestSingleLifeThirdPlaceStat = data.Response.control.lbLongestSingleLife.entries[2].value.basic.displayValue,
controlLongestSingleLifeFourthPlaceName = data.Response.control.lbLongestSingleLife.entries[3].player.destinyUserInfo.displayName,
controlLongestSingleLifeFourthPlaceStat = data.Response.control.lbLongestSingleLife.entries[3].value.basic.displayValue,
controlLongestSingleLifeFifthPlaceName = data.Response.control.lbLongestSingleLife.entries[4].player.destinyUserInfo.displayName,
controlLongestSingleLifeFifthPlaceStat = data.Response.control.lbLongestSingleLife.entries[4].value.basic.displayValue,
controlLongestSingleLifeFirstPlaceIcon = data.Response.control.lbLongestSingleLife.entries[0].player.destinyUserInfo.iconPath;
controlLongestSingleLifeSecondPlaceIcon = data.Response.control.lbLongestSingleLife.entries[1].player.destinyUserInfo.iconPath,
controlLongestSingleLifeThirdPlaceIcon = data.Response.control.lbLongestSingleLife.entries[2].player.destinyUserInfo.iconPath,
controlLongestSingleLifeFourthPlaceIcon = data.Response.control.lbLongestSingleLife.entries[3].player.destinyUserInfo.iconPath,
controlLongestSingleLifeFifthPlaceIcon = data.Response.control.lbLongestSingleLife.entries[4].player.destinyUserInfo.iconPath;

$('#player-control-Longest-Single-Life-First-Place-Name').text(controlLongestSingleLifeFirstPlaceName);
$('#player-control-Longest-Single-Life-First-Place-Stat').text(controlLongestSingleLifeFirstPlaceStat);
$('#player-control-Longest-Single-Life-Second-Place-Name').text(controlLongestSingleLifeSecondPlaceName);
$('#player-control-Longest-Single-Life-Second-Place-Stat').text(controlLongestSingleLifeSecondPlaceStat);
$('#player-control-Longest-Single-Life-Third-Place-Name').text(controlLongestSingleLifeThirdPlaceName);
$('#player-control-Longest-Single-Life-Third-Place-Stat').text(controlLongestSingleLifeThirdPlaceStat);
$('#player-control-Longest-Single-Life-Fourth-Place-Name').text(controlLongestSingleLifeFourthPlaceName);
$('#player-control-Longest-Single-Life-Fourth-Place-Stat').text(controlLongestSingleLifeFourthPlaceStat);
$('#player-control-Longest-Single-Life-Fifth-Place-Name').text(controlLongestSingleLifeFifthPlaceName);
$('#player-control-Longest-Single-Life-Fifth-Place-Stat').text(controlLongestSingleLifeFifthPlaceStat);
$('.player-control-Longest-Single-Life-Fifth-Place-Icon').attr({
  'src': 'https://www.bungie.net' + controlLongestSingleLifeFifthPlaceIcon});
$('.player-control-Longest-Single-Life-Fifth-Place-Icon').attr({
  'src': 'https://www.bungie.net' + controlLongestSingleLifeFifthPlaceIcon});
$('.player-control-Longest-Single-Life-Fourth-Place-Icon').attr({
  'src': 'https://www.bungie.net' + controlLongestSingleLifeFourthPlaceIcon});
$('.player-control-Longest-Single-Life-Third-Place-Icon').attr({
  'src': 'https://www.bungie.net' + controlLongestSingleLifeThirdPlaceIcon});
$('.player-control-Longest-Single-Life-Second-Place-Icon').attr({
  'src': 'https://www.bungie.net' + controlLongestSingleLifeSecondPlaceIcon});
$('.player-control-Longest-Single-Life-First-Place-Icon').attr({
  'src': 'https://www.bungie.net' + controlLongestSingleLifeFirstPlaceIcon});

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
