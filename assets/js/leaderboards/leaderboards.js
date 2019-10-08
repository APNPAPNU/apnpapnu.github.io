$(function() {
  
            $.ajax({
               url: "https://www.bungie.net/Platform/Destiny2/Stats/Leaderboards/Clans/699392/?&modes=5&maxtop=100",
             headers: {
                 "X-API-Key": "47b810e692d64237911c2cbe0d433cfe"
               }, 
               success: function(data) {
                           if (data.ErrorStatus === 'Success') {  


firstPlaceName = data.Response.allPvP.lbSingleGameKills.entries[0].player.destinyUserInfo.displayName,
firstPlaceStat = data.Response.allPvP.lbSingleGameKills.entries[0].value.basic.displayValue,
secondPlaceName = data.Response.allPvP.lbSingleGameKills.entries[1].player.destinyUserInfo.displayName,
secondPlaceStat = data.Response.allPvP.lbSingleGameKills.entries[1].value.basic.displayValue,
thirdPlaceName = data.Response.allPvP.lbSingleGameKills.entries[2].player.destinyUserInfo.displayName,
thirdPlaceStat = data.Response.allPvP.lbSingleGameKills.entries[2].value.basic.displayValue,
fourthPlaceName = data.Response.allPvP.lbSingleGameKills.entries[3].player.destinyUserInfo.displayName,
fourthPlaceStat = data.Response.allPvP.lbSingleGameKills.entries[3].value.basic.displayValue,
fifthPlaceName = data.Response.allPvP.lbSingleGameKills.entries[4].player.destinyUserInfo.displayName,
fifthPlaceStat = data.Response.allPvP.lbSingleGameKills.entries[4].value.basic.displayValue,
                             allpvpTotalKillsFirstPlaceName = data.Response.allPvP.lbKills.entries[0].player.destinyUserInfo.displayName,
                            allpvpTotalKillsFirstPlaceStat = data.Response.allPvP.lbKills.entries[0].value.basic.displayValue,
                            allpvpTotalKillsSecondPlaceName = data.Response.allPvP.lbKills.entries[1].player.destinyUserInfo.displayName,
                            allpvpTotalKillsSecondPlaceStat = data.Response.allPvP.lbKills.entries[1].value.basic.displayValue,
                            allpvpTotalKillsThirdPlaceName = data.Response.allPvP.lbKills.entries[2].player.destinyUserInfo.displayName,
                            allpvpTotalKillsThirdPlaceStat = data.Response.allPvP.lbKills.entries[2].value.basic.displayValue,
                            allpvpTotalKillsFourthPlaceName = data.Response.allPvP.lbKills.entries[3].player.destinyUserInfo.displayName,
                            allpvpTotalKillsFourthPlaceStat = data.Response.allPvP.lbKills.entries[3].value.basic.displayValue,
                            allpvpTotalKillsFifthPlaceName = data.Response.allPvP.lbKills.entries[4].player.destinyUserInfo.displayName,
                            allpvpTotalKillsFifthPlaceStat = data.Response.allPvP.lbKills.entries[4].value.basic.displayValue;
                            
                            $('#player-allpvp-Total-Kills-First-Place-Name').text(allpvpTotalKillsFirstPlaceName);
                            $('#player-allpvp-Total-Kills-First-Place-Stat').text(allpvpTotalKillsFirstPlaceStat);
                            $('#player-allpvp-Total-Kills-Second-Place-Name').text(allpvpTotalKillsSecondPlaceName);
                            $('#player-allpvp-Total-Kills-Second-Place-Stat').text(allpvpTotalKillsSecondPlaceStat);
                            $('#player-allpvp-Total-Kills-Third-Place-Name').text(allpvpTotalKillsThirdPlaceName);
                            $('#player-allpvp-Total-Kills-Third-Place-Stat').text(allpvpTotalKillsThirdPlaceStat);
                            $('#player-allpvp-Total-Kills-Fourth-Place-Name').text(allpvpTotalKillsFourthPlaceName);
                            $('#player-allpvp-Total-Kills-Fourth-Place-Stat').text(allpvpTotalKillsFourthPlaceStat);
                            $('#player-allpvp-Total-Kills-Fifth-Place-Name').text(allpvpTotalKillsFifthPlaceName);
                            $('#player-allpvp-Total-Kills-Fifth-Place-Stat').text(allpvpTotalKillsFifthPlaceStat);
  

$('#player-first-Place-Name').text(firstPlaceName);
$('#player-first-Place-Stat').text(firstPlaceStat);
$('#player-second-Place-Name').text(secondPlaceName);
$('#player-second-Place-Stat').text(secondPlaceStat);
$('#player-third-Place-Name').text(thirdPlaceName);
$('#player-third-Place-Stat').text(thirdPlaceStat);
$('#player-fourth-Place-Name').text(fourthPlaceName);
$('#player-fourth-Place-Stat').text(fourthPlaceStat);
$('#player-fifth-Place-Name').text(fifthPlaceName);
$('#player-fifth-Place-Stat').text(fifthPlaceStat);
          
     
     
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
