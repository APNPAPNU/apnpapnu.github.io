$.ajax({
  url: "http://www.bungie.net/Platform/Destiny/2/Account/4611686018441311466/",
  headers: {
    "X-API-Key": "47b810e692d64237911c2cbe0d433cfe"
  }
}).done(function(json) {

});
$(function() {

  
    $.ajax({
      url: "http://www.bungie.net/Platform/Destiny/2/Account/4611686018441311466/",
      headers: {
        "X-API-Key": apiKey
      },
      success: function(data) {
				
          // Gambit stats
	        fstats = data.Response.data.characters.characterBase.characterId,
	        gefficiency = fstats.efficiency.basic.displayValue,
	        gkd = gstats.killsDeathsRatio.basic.displayValue,
	        gkda = gstats.killsDeathsAssists.basic.displayValue,
	        gkills = gstats.kills.basic.displayValue,
	        gdeaths = gstats.deaths.basic.displayValue,
	        gassists = gstats.assists.basic.displayValue,
	        gprecisionKills = gstats.precisionKills.basic.displayValue,
		gprimevalKills = gstats.primevalKills.basic.displayValue,
	        gblockerKills = gstats.blockerKills.basic.displayValue,
	        gmobKills = gstats.mobKills.basic.displayValue,
	        ghighValueKills = gstats.highValueKills.basic.displayValue,
	        gmotesPickedUp = gstats.motesPickedUp.basic.displayValue,
	        gmotesDeposited = gstats.motesDeposited.basic.displayValue,
	        gprimevalDamage = gstats.primevalDamage.basic.displayValue,
	        gbestSingleGameKills = gstats.bestSingleGameKills.basic.displayValue,
	        gsmallBlockersSent = gstats.smallBlockersSent.basic.displayValue,
	        gmediumBlockersSent = gstats.mediumBlockersSent.basic.displayValue,
	        glargeBlockersSent = gstats.largeBlockersSent.basic.displayValue,
	        gbestSingleGameKills = gstats.bestSingleGameKills.basic.displayValue,
	        gkillsDeathsRatio = gstats.killsDeathsRatio.basic.displayValue,
	        gfastestCompletionMs = gstats.fastestCompletionMs.basic.displayValue,
	        gmotesDenied = gstats.motesDenied.basic.displayValue,
	        gmotesLost = gstats.motesLost.basic.displayValue,
	        gactivitiesWon = gstats.activitiesWon.basic.displayValue,
	        gactivitiesEntered = gstats.activitiesEntered.basic.displayValue,
	        gbestSingleGameKills = gstats.bestSingleGameKills.basic.displayValue,
	        ginvasions = gstats.invasions.basic.displayValue,
	        ginvasionKills = gstats.invasionKills.basic.displayValue,
	        gweaponBestType = gstats.weaponBestType.basic.displayValue,

                multiplier = 100,
                winlossratio = (activitiesWon / activitiesEntered * multiplier);

	        // Populate stats
          // pvp
	   
	        $('#player-f-stats').text(fstats);
	        $('#player-g-kd').text(gkd);
	        $('#player-g-kda').text(gkda);
	        $('#player-g-kills').text(gkills);
	        $('#player-g-assists').text(gassists);
	        $('#player-g-precision-kills').text(gprecisionKills);
	        $('#player-g-primeval-kills').text(gprimevalKills);
	        $('#player-g-best-single-game-kills').text(gbestSingleGameKills);
	        $('#player-g-blocker-kills').text(gblockerKills);
	        $('#player-g-mob-kills').text(gmobKills);
                $('#player-g-high-value-kills').text(ghighValueKills);
	        $('#player-g-motes-Picked-Up').text(gmotesPickedUp);
	        $('#player-g-motes-Deposited').text(gmotesDeposited);
	        $('#player-g-primeval-Damage').text(gprimevalDamage);
	        $('#player-g-best-Single-Game-Kills ').text(gbestSingleGameKills );
	        $('#player-g-precision-kills').text(gprecisionKills);
	        $('#player-g-weapon').text(gweapon);
	        $('#player-g-kill-spree').text(gkillSpree);
	        $('#player-g-most-kills').text(gmostKills);
	        $('#player-g-most-precision').text(gmostPrecision);
          	$('#player-g-efficiency').text(gefficiency);
	        $('#player-g-kd').text(gkd);
	        $('#player-g-kda').text(gkda);
	        $('#player-g-kills').text(gkills);
	        $('#player-g=assists').text(gassists);
	        $('#player-g-precision-kills').text(gprecisionKills);
	        $('#player-g-weapon').text(gweapon);
	        $('#player-g-kill-spree').text(gkillSpree);
	        $('#player-g-most-kills').text(gmostKills);
	        $('#player-g-most-precision').text(gmostPrecision);
                $('#player-g-efficiency').text(gefficiency);
	        $('#player-g-kd').text(gkd);
	        $('#player-g-kda').text(gkda);
	        $('#player-g-kills').text(gkills);
	        $('#player-g-assists').text(gassists);
	        $('#player-g-precision-kills').text(gprecisionKills);
	        $('#player-g-weapon').text(gweapon);
	        $('#player-g-kill-spree').text(gkillSpree);
	        $('#player-g-most-kills').text(gmostKills);
	        $('#player-g-most-precision').text(gmostPrecision);
          					

      },
      error: function(data) {
				alert('Uh oh, failed to load player stats! Looks like Bungie\'s doing server maintenance or having problems. Please check back again soon!');
        console.log('Error loading player stats:', data);
      }
    });
	});

