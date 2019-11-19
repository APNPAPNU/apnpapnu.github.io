$(function() {
    
  {
        $.ajax({
           url: "https://www.bungie.net/Platform/Destiny2/2/Account/4611686018429000034/Character/0/Stats/UniqueWeapons/",
         headers: {
             "X-API-Key": apiKey
           }, 
           success: function(data) {
            let
            NameT = jsonPath("$.Response..referenceId");
                 $('#player-NameT').text(NameT);
               
               console.log(NameT);
   
           },
           
        });
}});
