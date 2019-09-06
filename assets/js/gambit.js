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
        $(document).ready(function(){
  var fstats = data.Response.data.characters[0].characterBase.characterId;
  var webLink = "braytech.org/2/4611686018429000034/"+ fstats + "/legend";
  $('#player-f-stats').text(fstats);
  $("newButton").click(function(){
    $("#player-web-Link").attr("href", webLink);
  });
}
      });
      });
