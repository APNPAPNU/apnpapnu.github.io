$(function() {
  
    $.ajax({
       url: "https://www.bungie.net/Platform/Destiny2/Stats/Leaderboards/Clans/699392/?&modes=5&maxtop=100",
     headers: {
         "X-API-Key": "47b810e692d64237911c2cbe0d433cfe"
       }, 
       success: function(data) {
                   if (data.ErrorStatus === 'Success') {  

allpvpTotalLongestSingleLifeFirstPlaceName = data.Response.allPvP.lbLongestSingleLife.entries[0].player.destinyUserInfo.displayName,
allpvpTotalLongestSingleLifeFirstPlaceStat = data.Response.allPvP.lbLongestSingleLife.entries[0].value.basic.displayValue,
allpvpTotalLongestSingleLifeSecondPlaceName = data.Response.allPvP.lbLongestSingleLife.entries[1].player.destinyUserInfo.displayName,
allpvpTotalLongestSingleLifeSecondPlaceStat = data.Response.allPvP.lbLongestSingleLife.entries[1].value.basic.displayValue,
allpvpTotalLongestSingleLifeThirdPlaceName = data.Response.allPvP.lbLongestSingleLife.entries[2].player.destinyUserInfo.displayName,
allpvpTotalLongestSingleLifeThirdPlaceStat = data.Response.allPvP.lbLongestSingleLife.entries[2].value.basic.displayValue,
allpvpTotalLongestSingleLifeFourthPlaceName = data.Response.allPvP.lbLongestSingleLife.entries[3].player.destinyUserInfo.displayName,
allpvpTotalLongestSingleLifeFourthPlaceStat = data.Response.allPvP.lbLongestSingleLife.entries[3].value.basic.displayValue,
allpvpTotalLongestSingleLifeFifthPlaceName = data.Response.allPvP.lbLongestSingleLife.entries[4].player.destinyUserInfo.displayName,
allpvpTotalLongestSingleLifeFifthPlaceStat = data.Response.allPvP.lbLongestSingleLife.entries[4].value.basic.displayValue;

$('#player-allpvp-Total-Longest-Single-Life-First-Place-Name').text(allpvpTotalLongestSingleLifeFirstPlaceName);
$('#player-allpvp-Total-Longest-Single-Life-First-Place-Stat').text(allpvpTotalLongestSingleLifeFirstPlaceStat);
$('#player-allpvp-Total-Longest-Single-Life-Second-Place-Name').text(allpvpTotalLongestSingleLifeSecondPlaceName);
$('#player-allpvp-Total-Longest-Single-Life-Second-Place-Stat').text(allpvpTotalLongestSingleLifeSecondPlaceStat);
$('#player-allpvp-Total-Longest-Single-Life-Third-Place-Name').text(allpvpTotalLongestSingleLifeThirdPlaceName);
$('#player-allpvp-Total-Longest-Single-Life-Third-Place-Stat').text(allpvpTotalLongestSingleLifeThirdPlaceStat);
$('#player-allpvp-Total-Longest-Single-Life-Fourth-Place-Name').text(allpvpTotalLongestSingleLifeFourthPlaceName);
$('#player-allpvp-Total-Longest-Single-Life-Fourth-Place-Stat').text(allpvpTotalLongestSingleLifeFourthPlaceStat);
$('#player-allpvp-Total-Longest-Single-Life-Fifth-Place-Name').text(allpvpTotalLongestSingleLifeFifthPlaceName);
$('#player-allpvp-Total-Longest-Single-Life-Fifth-Place-Stat').text(allpvpTotalLongestSingleLifeFifthPlaceStat);


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
