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
	       
	      

         

	        // Populate stats
          // pvp
	   
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

