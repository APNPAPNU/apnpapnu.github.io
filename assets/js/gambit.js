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
       var fstats = data.Response.data.characters[0].characterBase.characterId;
       var webLink = "braytech.org/2/4611686018429000034/"+ fstats + "/legend";
       $('#player-f-stats').text(fstats);
       $("#player-web-Link").attr("href", webLink);
       }
          '<div class="j-col j-col-3 member-button"><a class="button outline gold full-width">' + 'webLink' + '</a></div>'
});
});
