$(function() {
  
    $.ajax({
       url: "https://www.bungie.net/Platform/Destiny2/Stats/Leaderboards/Clans/699392/?&modes=5&maxtop=100",
     headers: {
         "X-API-Key": "47b810e692d64237911c2cbe0d433cfe"
       }, 
       success: function(data) {
                   if (data.ErrorStatus === 'Success') {  


       
allpvpTotalDeathsFirstPlaceName = data.Response.allPvP.lbDeaths.entries[0].player.destinyUserInfo.displayName,
allpvpTotalDeathsFirstPlaceStat = data.Response.allPvP.lbDeaths.entries[0].value.basic.displayValue,
allpvpTotalDeathsSecondPlaceName = data.Response.allPvP.lbDeaths.entries[1].player.destinyUserInfo.displayName,
allpvpTotalDeathsSecondPlaceStat = data.Response.allPvP.lbDeaths.entries[1].value.basic.displayValue,
allpvpTotalDeathsThirdPlaceName = data.Response.allPvP.lbDeaths.entries[2].player.destinyUserInfo.displayName,
allpvpTotalDeathsThirdPlaceStat = data.Response.allPvP.lbDeaths.entries[2].value.basic.displayValue,
allpvpTotalDeathsFourthPlaceName = data.Response.allPvP.lbDeaths.entries[3].player.destinyUserInfo.displayName,
allpvpTotalDeathsFourthPlaceStat = data.Response.allPvP.lbDeaths.entries[3].value.basic.displayValue,
allpvpTotalDeathsFifthPlaceName = data.Response.allPvP.lbDeaths.entries[4].player.destinyUserInfo.displayName,
allpvpTotalDeathsFifthPlaceStat = data.Response.allPvP.lbDeaths.entries[4].value.basic.displayValue;

$('#player-allpvp-Total-Deaths-First-Place-Name').text(allpvpTotalDeathsFirstPlaceName);
$('#player-allpvp-Total-Deaths-First-Place-Stat').text(allpvpTotalDeathsFirstPlaceStat);
$('#player-allpvp-Total-Deaths-Second-Place-Name').text(allpvpTotalDeathsSecondPlaceName);
$('#player-allpvp-Total-Deaths-Second-Place-Stat').text(allpvpTotalDeathsSecondPlaceStat);
$('#player-allpvp-Total-Deaths-Third-Place-Name').text(allpvpTotalDeathsThirdPlaceName);
$('#player-allpvp-Total-Deaths-Third-Place-Stat').text(allpvpTotalDeathsThirdPlaceStat);
$('#player-allpvp-Total-Deaths-Fourth-Place-Name').text(allpvpTotalDeathsFourthPlaceName);
$('#player-allpvp-Total-Deaths-Fourth-Place-Stat').text(allpvpTotalDeathsFourthPlaceStat);
$('#player-allpvp-Total-Deaths-Fifth-Place-Name').text(allpvpTotalDeathsFifthPlaceName);
$('#player-allpvp-Total-Deaths-Fifth-Place-Stat').text(allpvpTotalDeathsFifthPlaceStat);



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
