$(function() {
     
     var
     bungieId = checkParams('bungieId'),
     destinyId = checkParams('destinyId'),
     joined = checkParams('joined');
       
          if (bungieId && destinyId && joined) {
            $.ajax({
               url: "https://www.bungie.net/Platform/Destiny2/2/Account/" + destinyId + "/Character/0/Stats/UniqueWeapons/",
             headers: {
                 "X-API-Key": apiKey
               }, 
               success: function(data) {
                           if (data.ErrorStatus === 'Success') {  
     
     
test = data.Response.characterActivities.data.*.currentActivityModeType;
     $(#test).text(test);
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
