$.ajax({
  url: "https://www.bungie.net/Platform/Destiny/2/Account/4611686018429000034/",
  headers: {
    "X-API-Key": "47b810e692d64237911c2cbe0d433cfe"
  }
}).done(function(json) {

});
   $.ajax({
      url: "https://www.bungie.net/Platform/Destiny/2/Account/4611686018429000034/",
      headers: {
        "X-API-Key": apiKey
      },
      success: function(data) {
				
          // Gambit stats
	      let
        fstats = data.Response.data.characters[0].characterBase.characterId;
    
          html( '<div class="j-col j-col-3 member-button"><a href="https://braytech.org/2/'+ 4611686018429000034 +'/'+ fstats +'/legend">In Depth Stats</a>' + '</a></div>'
      )
      
	    }
              
   });
	});
