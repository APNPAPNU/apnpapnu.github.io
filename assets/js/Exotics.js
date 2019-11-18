$(function() {
     
  var
  bungieId = checkParams('bungieId'),
  destinyId = checkParams('destinyId'),
  joined = checkParams('joined');
    
       if (bungieId && destinyId && joined) {
         $.ajax({
            url: "https://www.bungie.net/Platform/Destiny2/2/Account/4611686018429000034/Character/0/Stats/UniqueWeapons/",
          headers: {
              "X-API-Key": apiKey
            }, 
            success: function(data) {
             let
             NameT=JsonPath("$.Response..referenceId")
                  $('#player-NameT').text(NameT);
                
                 if (data.ErrorStatus === 'Success') {  

  
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
}});
