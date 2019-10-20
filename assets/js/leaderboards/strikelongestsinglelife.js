$(function() {
  
    $.ajax({
       url: "https://www.bungie.net/Platform/Destiny2/Stats/Leaderboards/Clans/699392/?&modes=3&maxtop=100",
     headers: {
         "X-API-Key": "47b810e692d64237911c2cbe0d433cfe"
       }, 
       success: function(data) {
                   if (data.ErrorStatus === 'Success') {  


strikeLongestSingleLifeFirstPlaceName = data.Response.strike.lbLongestSingleLife.entries[0].player.destinyUserInfo.displayName,
strikeLongestSingleLifeFirstPlaceStat = data.Response.strike.lbLongestSingleLife.entries[0].value.basic.displayValue,
strikeLongestSingleLifeSecondPlaceName = data.Response.strike.lbLongestSingleLife.entries[1].player.destinyUserInfo.displayName,
strikeLongestSingleLifeSecondPlaceStat = data.Response.strike.lbLongestSingleLife.entries[1].value.basic.displayValue,
strikeLongestSingleLifeThirdPlaceName = data.Response.strike.lbLongestSingleLife.entries[2].player.destinyUserInfo.displayName,
strikeLongestSingleLifeThirdPlaceStat = data.Response.strike.lbLongestSingleLife.entries[2].value.basic.displayValue,
strikeLongestSingleLifeFourthPlaceName = data.Response.strike.lbLongestSingleLife.entries[3].player.destinyUserInfo.displayName,
strikeLongestSingleLifeFourthPlaceStat = data.Response.strike.lbLongestSingleLife.entries[3].value.basic.displayValue,
strikeLongestSingleLifeFifthPlaceName = data.Response.strike.lbLongestSingleLife.entries[4].player.destinyUserInfo.displayName,
strikeLongestSingleLifeFifthPlaceStat = data.Response.strike.lbLongestSingleLife.entries[4].value.basic.displayValue,
strikeLongestSingleLifeFirstPlaceIcon = data.Response.strike.lbLongestSingleLife.entries[0].player.destinyUserInfo.iconPath;
strikeLongestSingleLifeSecondPlaceIcon = data.Response.strike.lbLongestSingleLife.entries[1].player.destinyUserInfo.iconPath,
strikeLongestSingleLifeThirdPlaceIcon = data.Response.strike.lbLongestSingleLife.entries[2].player.destinyUserInfo.iconPath,
strikeLongestSingleLifeFourthPlaceIcon = data.Response.strike.lbLongestSingleLife.entries[3].player.destinyUserInfo.iconPath,
strikeLongestSingleLifeFifthPlaceIcon = data.Response.strike.lbLongestSingleLife.entries[4].player.destinyUserInfo.iconPath;

$('#player-strike-Longest-Single-Life-First-Place-Name').text(strikeLongestSingleLifeFirstPlaceName);
$('#player-strike-Longest-Single-Life-First-Place-Stat').text(strikeLongestSingleLifeFirstPlaceStat);
$('#player-strike-Longest-Single-Life-Second-Place-Name').text(strikeLongestSingleLifeSecondPlaceName);
$('#player-strike-Longest-Single-Life-Second-Place-Stat').text(strikeLongestSingleLifeSecondPlaceStat);
$('#player-strike-Longest-Single-Life-Third-Place-Name').text(strikeLongestSingleLifeThirdPlaceName);
$('#player-strike-Longest-Single-Life-Third-Place-Stat').text(strikeLongestSingleLifeThirdPlaceStat);
$('#player-strike-Longest-Single-Life-Fourth-Place-Name').text(strikeLongestSingleLifeFourthPlaceName);
$('#player-strike-Longest-Single-Life-Fourth-Place-Stat').text(strikeLongestSingleLifeFourthPlaceStat);
$('#player-strike-Longest-Single-Life-Fifth-Place-Name').text(strikeLongestSingleLifeFifthPlaceName);
$('#player-strike-Longest-Single-Life-Fifth-Place-Stat').text(strikeLongestSingleLifeFifthPlaceStat);
$('.player-strike-Longest-Single-Life-Fifth-Place-Icon').attr({
  'src': 'https://www.bungie.net' + strikeLongestSingleLifeFifthPlaceIcon});
$('.player-strike-Longest-Single-Life-Fifth-Place-Icon').attr({
  'src': 'https://www.bungie.net' + strikeLongestSingleLifeFifthPlaceIcon});
$('.player-strike-Longest-Single-Life-Fourth-Place-Icon').attr({
  'src': 'https://www.bungie.net' + strikeLongestSingleLifeFourthPlaceIcon});
$('.player-strike-Longest-Single-Life-Third-Place-Icon').attr({
  'src': 'https://www.bungie.net' + strikeLongestSingleLifeThirdPlaceIcon});
$('.player-strike-Longest-Single-Life-Second-Place-Icon').attr({
  'src': 'https://www.bungie.net' + strikeLongestSingleLifeSecondPlaceIcon});
$('.player-strike-Longest-Single-Life-First-Place-Icon').attr({
  'src': 'https://www.bungie.net' + strikeLongestSingleLifeFirstPlaceIcon});

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
