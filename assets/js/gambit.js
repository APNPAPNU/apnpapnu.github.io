$.ajax({
  url: "https://www.bungie.net/Platform/Destiny2/2/Account/4611686018429000034/Character/0/Stats/?groups=0,0&modes=63&periodType=0",
  headers: {
    "X-API-Key": "47b810e692d64237911c2cbe0d433cfe"
  }
}).done(function(json) {

});
$(function() {

  
    $.ajax({
      url: "https://www.bungie.net/Platform/Destiny2/2/Account/4611686018429000034/Character/0/Stats/?groups=0,0&modes=63&periodType=0",
      headers: {
        "X-API-Key": apiKey
      },
      success: function(data) {
				
          // pvp stats
	        stats = data.Response.pvecomp_gambit.allTime,
	        efficiency = stats.efficiency.basic.displayValue,
	        kd = stats.killsDeathsRatio.basic.displayValue,
	        kda = stats.killsDeathsAssists.basic.displayValue,
	        kills = stats.kills.basic.displayValue,
	        deaths = stats.deaths.basic.displayValue,
	        assists = stats.assists.basic.displayValue,
	        precisionKills = stats.precisionKills.basic.displayValue,
	       
	        mostKills = stats.bestSingleGameKills.basic.displayValue,
	        killSpree = stats.longestKillSpree.basic.displayValue,
	        mostPrecision = stats.mostPrecisionKills.basic.displayValue,
	        weapon = stats.weaponBestType.basic.displayValue,
          pvpClock = stats.secondsPlayed.basic.displayValue,
          pvpHours = calcHours(pvpClock),
          // patrol stats
          patrol = data.Response.patrol.allTime,
	  patrolKills = patrol.kills.basic.displayValue,
          patrolDeaths = patrol.deaths.basic.displayValue,
	  patrolClock = patrol.secondsPlayed.basic.displayValue,
          patrolHours = calcHours(patrolClock),
	  patrolWeapon = patrol.weaponBestType.basic.displayValue,
	  patrolHPE = patrol.heroicPublicEventsCompleted.basic.displayValue,
          // raid stats
          raid = data.Response.raid.allTime,
          raidClears = raid.activitiesCleared.basic.displayValue,
          raidKd = raid.killsDeathsRatio.basic.displayValue,
          raidKills = raid.kills.basic.displayValue,
          raidAvgKills = raid.kills.pga.displayValue,
          raidBestKills = raid.bestSingleGameKills.basic.displayValue,
          raidClock = raid.secondsPlayed.basic.displayValue,
          raidHours = calcHours(raidClock),
          // story stats
          story = data.Response.story.allTime,
          storyClock = story.secondsPlayed.basic.displayValue,
          storyHours = calcHours(storyClock),
          // strikes stats
          strikes = data.Response.allStrikes.allTime,
          strikesClears = strikes.activitiesCleared.basic.displayValue,
          strikesKd = strikes.killsDeathsRatio.basic.displayValue,
          strikesKills = strikes.kills.basic.displayValue,
          strikesAvgKills = strikes.kills.pga.displayValue,
          strikesBestKills = strikes.bestSingleGameKills.basic.displayValue,
          strikesClock = strikes.secondsPlayed.basic.displayValue,
          strikesHours = calcHours(strikesClock);

         

	        // Populate stats
          // pvp
	        $('#player-clock').text(totalHours + 'h');
	        $('#player-efficiency').text(efficiency);
	        $('#player-kd').text(kd);
	        $('#player-kda').text(kda);
	        $('#player-kills').text(kills);
	        $('#player-assists').text(assists);
	        $('#player-precision-kills').text(precisionKills);
	        $('#player-weapon').text(weapon);
	        $('#player-kill-spree').text(killSpree);
	        $('#player-most-kills').text(mostKills);
	        $('#player-most-precision').text(mostPrecision);
          // raid
          $('#player-raid-clears').text(raidClears);
          $('#player-raid-kd').text(raidKd);
          $('#player-raid-kills').text(raidKills);
          $('#player-raid-kills-pga').text(raidAvgKills);
          $('#player-raid-best-kills').text(raidBestKills);
          // strikes
          $('#player-strike-clears').text(strikesClears);
          $('#player-strike-kd').text(strikesKd);
          $('#player-strike-kills').text(strikesKills);
          $('#player-strike-kills-pga').text(strikesAvgKills);
          $('#player-strike-best-kills').text(strikesBestKills);
	  //patrol
	  $('#player-heroic-public-events').text(patrolHPE);
          $('#player-patrol-kills').text(patrolKills);
	  $('#player-patrol-deaths').text(patrolDeaths);
          $('#player-patrol-best-weapon').text(patrolWeapon);
	  $('#player-patrol-kills-pga').text(strikesAvgKills);
          			 else {
					alert('Uh oh, failed to load player stats! Looks like Bungie\'s doing server maintenance or having problems. Please check back again soon!');
				  console.log(data);
				}

      },
      error: function(data) {
				alert('Uh oh, failed to load player stats! Looks like Bungie\'s doing server maintenance or having problems. Please check back again soon!');
        console.log('Error loading player stats:', data);
      }
    });

