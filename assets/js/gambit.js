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
				
          // Gambit stats
	        stats = data.Response.pvecomp_gambit.allTime,
	        efficiency = stats.efficiency.basic.displayValue,
	        kd = stats.killsDeathsRatio.basic.displayValue,
	        kda = stats.killsDeathsAssists.basic.displayValue,
	        kills = stats.kills.basic.displayValue,
	        deaths = stats.deaths.basic.displayValue,
	        assists = stats.assists.basic.displayValue,
	        precisionKills = stats.precisionKills.basic.displayValue,
		primevalKills = stats.primevalKills.basic.displayValue,
	        blockerKills = stats.blockerKills.basic.displayValue,
	        mobKills = stats.mobKills.basic.displayValue,
	        highValueKills = stats.highValueKills.basic.displayValue,
	        motesPickedUp = stats.motesPickedUp.basic.displayValue,
	        motesDeposited = stats.motesDeposited.basic.displayValue,
	        primevalDamage = stats.primevalDamage.basic.displayValue,
	        bestSingleGameKills = stats.bestSingleGameKills.basic.displayValue,
	        smallBlockersSent = stats.smallBlockersSent.basic.displayValue,
	        mediumBlockersSens = stats.mediumBlockersSen.basic.displayValue,
	        largeBlockersSen = stats.largeBlockersSen.basic.displayValue,
	        bestSingleGameKills = stats.bestSingleGameKills.basic.displayValue,
	        killsDeathsRatio = stats.killsDeathsRatio.basic.displayValue,
	        fastestCompletionMs = stats.fastestCompletionMs.basic.displayValue,
	        motesDenied = stats.motesDenied.basic.displayValue,
	        motesLost = stats.motesLost.basic.displayValue,
	        activitiesWon = stats.activitiesWon.basic.displayValue,
	        activitiesEntered = stats.activitiesEntered.basic.displayValue,
	        bestSingleGameKills = stats.bestSingleGameKills.basic.displayValue,
	        invasions = stats.invasions.basic.displayValue,
	        invasionKills = stats.invasionKills.basic.displayValue,
	        weaponBestType = stats.weaponBestType.basic.displayValue,
	      
                multiplier = 100,
                winlossratio = (activitiesWon / activitiesEntered * multiplier);

	        // Populate stats
          // pvp
	   
	        $('#player-efficiency').text(efficiency);
	        $('#player-kd').text(kd);
	        $('#player-kda').text(kda);
	        $('#player-kills').text(kills);
	        $('#player-assists').text(assists);
	        $('#player-precision-kills').text(precisionKills);
	        $('#player-primeval-kills').text(primevalKills);
	        $('#player-best-single-game-kills').text(bestSingleGameKills);
	        $('#player-blocker-kills').text(blockerKills);
	        $('#player-mob-kills').text(mobKills);
                $('#player-high-value-kills').text(highValueKills);
	        $('#player-kd').text(kd);
	        $('#player-kda').text(kda);
	        $('#player-kills').text(kills);
	        $('#player-assists').text(assists);
	        $('#player-precision-kills').text(precisionKills);
	        $('#player-weapon').text(weapon);
	        $('#player-kill-spree').text(killSpree);
	        $('#player-most-kills').text(mostKills);
	        $('#player-most-precision').text(mostPrecision);
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
          					

      },
      error: function(data) {
				alert('Uh oh, failed to load player stats! Looks like Bungie\'s doing server maintenance or having problems. Please check back again soon!');
        console.log('Error loading player stats:', data);
      }
    });
	});

