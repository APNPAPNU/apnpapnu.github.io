---
---
$(function() {

  var
  {% include js/api.js %},
    bungieId = checkParams('bungieId'),
    destinyId = checkParams('destinyId'),
    joined = checkParams('joined'),
    checkName = function(name, list) {

      var m = false; // flag
      console.log('Checking list for ' + name + '...');

      // loop through clan usernames and check for a match
      $.each(list, function(i) {
        // make case insensitve
        if (name.toLowerCase() === list[i].toLowerCase()) {
          console.log('Confirmed: ' + list[i]);
          m = true;
        }
      });

      if (m) {
        return true;
      } else {
        return false;
      }

    };

  if (bungieId && destinyId && joined) {
    $.ajax({
      url: "https://www.bungie.net/Platform/Destiny2/2/Account/4611686018429000034/Character/0/Stats/?groups=0,0&modes=63&periodType=0",
      headers: {
        "X-API-Key": apiKey
      },
      success: function(data)
