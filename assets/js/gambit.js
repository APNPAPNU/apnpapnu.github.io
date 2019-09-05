$.ajax({
  url: "https://www.bungie.net/Platform/Destiny/2/Account/4611686018429000034/",
  headers: {
    "X-API-Key": "47b810e692d64237911c2cbe0d433cfe"
  }
}).done(function(json) {

});
$(function() {

  
    $.ajax({
      url: "https://www.bungie.net/Platform/Destiny/2/Account/4611686018429000034/",
      headers: {
        "X-API-Key": apiKey
      },
      success: function(data) {
				
          // Gambit stats
          let
	        fstats = data.Response.data.characters[0].characterBase.characterId,
                webLink = "https://braytech.org/2/4611686018429000034/' + fstats + '/legend";
	        // Populate stats
          // pvp
	   
	        $('#player-f-stats').text(fstats),
	        $('#player-web-Link').text(webLink);
          					

      },
      error: function(data) {
				alert('Uh oh, failed to load player stats! Looks like Bungie\'s doing server maintenance or having problems. Please check back again soon!');
        console.log('Error loading player stats:', data);
      }
    });
	});
