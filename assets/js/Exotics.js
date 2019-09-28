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
     
     


AceofSpades= data.Response.weapons[?(@.referenceId == '347366834')].values.uniqueWeaponKills.basic.displayValue,
TheJadeRabbit= data.Response.weapons[?(@.referenceId == '460724140')].values.uniqueWeaponKills.basic.displayValue,
TrinityGhoul= data.Response.weapons[?(@.referenceId == '814876685')].values.uniqueWeaponKills.basic.displayValue,
SweetBusiness= data.Response.weapons[?(@.referenceId == '1345867570')].values.uniqueWeaponKills.basic.displayValue,
TheWardcliffCoil= data.Response.weapons[?(@.referenceId == '1508896098')].values.uniqueWeaponKills.basic.displayValue,
Wavesplitter= data.Response.weapons[?(@.referenceId == '1852863732')].values.uniqueWeaponKills.basic.displayValue,
TheQueenbreaker= data.Response.weapons[?(@.referenceId == '2044500762')].values.uniqueWeaponKills.basic.displayValue,
PrometheusLens= data.Response.weapons[?(@.referenceId == '2146650065')].values.uniqueWeaponKills.basic.displayValue,
TwoTailedFox= data.Response.weapons[?(@.referenceId == '2694576561')].values.uniqueWeaponKills.basic.displayValue,
TheJadeRabbit= data.Response.weapons[?(@.referenceId == '2896466320')].values.uniqueWeaponKills.basic.displayValue,
DARCI= data.Response.weapons[?(@.referenceId == '3141979346')].values.uniqueWeaponKills.basic.displayValue,
TheJadeRabbit= data.Response.weapons[?(@.referenceId == '2978016230')].values.uniqueWeaponKills.basic.displayValue,
TheJadeRabbit= data.Response.weapons[?(@.referenceId == '3229272315')].values.uniqueWeaponKills.basic.displayValue,
TheChaperone= data.Response.weapons[?(@.referenceId == '3413860062')].values.uniqueWeaponKills.basic.displayValue,
Lumina= data.Response.weapons[?(@.referenceId == '3512014804')].values.uniqueWeaponKills.basic.displayValue,
LegendofAcrius= data.Response.weapons[?(@.referenceId == '3580904580')].values.uniqueWeaponKills.basic.displayValue,
GravitonLance= data.Response.weapons[?(@.referenceId == '3628991658')].values.uniqueWeaponKills.basic.displayValue,
TheJadeRabbit= data.Response.weapons[?(@.referenceId == '3844694310')].values.uniqueWeaponKills.basic.displayValue,
SleeperSimulant= data.Response.weapons[?(@.referenceId == '4036115577')].values.uniqueWeaponKills.basic.displayValue,
SkyburnersOath= data.Response.weapons[?(@.referenceId == '4255268456')].values.uniqueWeaponKills.basic.displayValue,
Merciless= data.Response.weapons[?(@.referenceId == '4190156464')].values.uniqueWeaponKills.basic.displayValue,
Thorn= data.Response.weapons[?(@.referenceId == '3973202132')].values.uniqueWeaponKills.basic.displayValue,
LeMonarque= data.Response.weapons[?(@.referenceId == '3588934839')].values.uniqueWeaponKills.basic.displayValue,
BlackTalon= data.Response.weapons[?(@.referenceId == '3766045777')].values.uniqueWeaponKills.basic.displayValue,
TheProspector= data.Response.weapons[?(@.referenceId == '3549153979')].values.uniqueWeaponKills.basic.displayValue,
Crimson= data.Response.weapons[?(@.referenceId == '3437746471')].values.uniqueWeaponKills.basic.displayValue,
Borealis= data.Response.weapons[?(@.referenceId == '3141979347')].values.uniqueWeaponKills.basic.displayValue,
PolarisLance= data.Response.weapons[?(@.referenceId == '3413074534')].values.uniqueWeaponKills.basic.displayValue,
IzanagisBurden= data.Response.weapons[?(@.referenceId == '3211806999')].values.uniqueWeaponKills.basic.displayValue,
Tarrabah= data.Response.weapons[?(@.referenceId == '3110698812')].values.uniqueWeaponKills.basic.displayValue,
Sunshot= data.Response.weapons[?(@.referenceId == '2907129557')].values.uniqueWeaponKills.basic.displayValue,
Arbalest= data.Response.weapons[?(@.referenceId == '2130065553')].values.uniqueWeaponKills.basic.displayValue,
WhisperoftheWorm= data.Response.weapons[?(@.referenceId == '1891561814')].values.uniqueWeaponKills.basic.displayValue,
LegendofAcrius= data.Response.weapons[?(@.referenceId == '1744115122')].values.uniqueWeaponKills.basic.displayValue,
TheLastWord= data.Response.weapons[?(@.referenceId == '1364093401')].values.uniqueWeaponKills.basic.displayValue,
MIDAMultiTool= data.Response.weapons[?(@.referenceId == '1331482397')].values.uniqueWeaponKills.basic.displayValue,
WishEnder= data.Response.weapons[?(@.referenceId == '814876684')].values.uniqueWeaponKills.basic.displayValue,
Jötunn= data.Response.weapons[?(@.referenceId == '417164956')].values.uniqueWeaponKills.basic.displayValue,
Malfeasance= data.Response.weapons[?(@.referenceId == '204878059')].values.uniqueWeaponKills.basic.displayValue,
PrometheusLens= data.Response.weapons[?(@.referenceId == '19024058')].values.uniqueWeaponKills.basic.displayValue,
TheJadeRabbit= data.Response.weapons[?(@.referenceId == '546372301')].values.uniqueWeaponKills.basic.displayValue,
OutbreakPerfected = data.Response.weapons[?(@.referenceId == '400096939')].values.uniqueWeaponKills.basic.displayValue,
Truth = data.Response.weapons[?(@.referenceId == '1201830623')].values.uniqueWeaponKills.basic.displayValue,
Coldheart = data.Response.weapons[?(@.referenceId == '1345867571')].values.uniqueWeaponKills.basic.displayValue,
Cerberus = data.Response.weapons[?(@.referenceId == '1541131350')].values.uniqueWeaponKills.basic.displayValue,
WorldlineZero = data.Response.weapons[?(@.referenceId == '1864563948')].values.uniqueWeaponKills.basic.displayValue,
OneThousandVoices = data.Response.weapons[?(@.referenceId == '2069224589')].values.uniqueWeaponKills.basic.displayValue,
BadJuju = data.Response.weapons[?(@.referenceId == '2816212794')].values.uniqueWeaponKills.basic.displayValue,
Riskrunner = data.Response.weapons[?(@.referenceId == '3089417789')].values.uniqueWeaponKills.basic.displayValue,
Thunderlord = data.Response.weapons[?(@.referenceId == '3325463374')].values.uniqueWeaponKills.basic.displayValue,
Sturm = data.Response.weapons[?(@.referenceId == '2907129556')].values.uniqueWeaponKills.basic.displayValue,
LordofWolves = data.Response.weapons[?(@.referenceId == '3413860063')].values.uniqueWeaponKills.basic.displayValue,
FightingLion = data.Response.weapons[?(@.referenceId == '3549153978')].values.uniqueWeaponKills.basic.displayValue,
TractorCannon = data.Response.weapons[?(@.referenceId == '3580904581')].values.uniqueWeaponKills.basic.displayValue,
VigilanceWing = data.Response.weapons[?(@.referenceId == '3628991659')].values.uniqueWeaponKills.basic.displayValue;
      
                                $('#player-AceofSpades').text(AceofSpades);
       $('#player-TheJadeRabbit').text(TheJadeRabbit);
       $('#player-TrinityGhoul').text(TrinityGhoul);
       $('#player-SweetBusiness').text(SweetBusiness);
       $('#player-TheWardcliffCoil').text(TheWardcliffCoil);
       $('#player-Wavesplitter').text(Wavesplitter);
       $('#player-TheQueenbreaker').text(TheQueenbreaker);
       $('#player-PrometheusLens').text(PrometheusLens);
       $('#player-Two-TailedFox').text(TwoTailedFox);
       $('#player-TheJadeRabbit').text(TheJadeRabbit);
       $('#player-DARCI').text( DARCI);
       $('#player-TheChaperone').text(TheChaperone);
       $('#player-Lumina').text(Lumina);
       $('#player-LegendofAcrius').text(LegendofAcrius);
       $('#player-GravitonLance').text(GravitonLance);
       $('#player-SleeperSimulant').text(SleeperSimulant);
       $('#player-SkyburnersOath').text(SkyburnersOath);
       $('#player-Merciless').text(Merciless);
       $('#player-Thorn').text(Thorn);
       $('#player-LeMonarque').text(LeMonarque);
       $('#player-BlackTalon').text(BlackTalon);
       $('#player-TheProspector').text(TheProspector);
       $('#player-Crimson').text(Crimson);
       $('#player-Borealis').text(Borealis);
       $('#player-PolarisLance').text(PolarisLance);
       $('#player-IzanagisBurden').text(IzanagisBurden);
       $('#player-Sunshot').text(Sunshot);
       $('#player-Arbalest').text(Arbalest);
       $('#player-WhisperoftheWorm').text(WhisperoftheWorm);
       $('#player-LegendofAcrius').text(LegendofAcrius);
       $('#player-TheLastWord').text(TheLastWord);
       $('#player-MIDAMulti-Tool').text(MIDAMultiTool);
       $('#player-Wish-Ender').text(WishEnder);
       $('#player-Jötunn').text(Jötunn);
       $('#player-Malfeasance').text(Malfeasance);
       $('#player-PrometheusLens').text(PrometheusLens);
       $('#player-OutbreakPerfected').text(OutbreakPerfected);
       $('#player-Truth').text(Truth);
       $('#player-Coldheart').text(Coldheart);
       $('#player-Cerberus+').text(Cerberus);
       $('#player-WorldlineZero').text(WorldlineZero);
       $('#player-BadJuju').text(BadJuju);
       $('#player-Riskrunner').text(Riskrunner);
       $('#player-Thunderlord').text(Thunderlord);
       $('#player-Sturm').text(Sturm);
       $('#player-LordofWolves').text(LordofWolves);
       $('#player-FightingLion').text(FightingLion);
       $('#player-TractorCannon').text(TractorCannon);
       $('#player-VigilanceWing').text(VigilanceWing);
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
