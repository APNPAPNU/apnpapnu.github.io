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
                           if (data.ErrorStatus === 'Success') {  
     var names = {
    347366834: 'AceofSpades',
    460724140: 'TheJadeRabbit',
    814876685: 'TrinityGhoul',
    1345867570: 'SweetBusiness',
}
     // for example, the first weapon referenceId is 3973202132 (Thorn)
var weaponId = response.weapons[0].referenceId
var weaponId = response.weapons[1].referenceId
var weaponName = names[weaponId]
console.log(weaponName) // Thorn
     
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
