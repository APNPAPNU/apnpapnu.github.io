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
     
     
exotic = data.Response.weapons,				    
AceofSpades= exotic[?(@.referenceId == '347366834')].values.uniqueWeaponKills.basic.displayValue,
TheJadeRabbit= exotic[?(@.referenceId == '460724140')].values.uniqueWeaponKills.basic.displayValue,
TrinityGhoul= exotic[?(@.referenceId == '814876685')].values.uniqueWeaponKills.basic.displayValue,
SweetBusiness= exotic[?(@.referenceId == '1345867570')].values.uniqueWeaponKills.basic.displayValue,
TheWardcliffCoil= exotic[?(@.referenceId == '1508896098')].values.uniqueWeaponKills.basic.displayValue,
Wavesplitter= exotic[?(@.referenceId == '1852863732')].values.uniqueWeaponKills.basic.displayValue,
TheQueenbreaker= exotic[?(@.referenceId == '2044500762')].values.uniqueWeaponKills.basic.displayValue,
PrometheusLens= exotic[?(@.referenceId == '2146650065')].values.uniqueWeaponKills.basic.displayValue,
TwoTailedFox= exotic[?(@.referenceId == '2694576561')].values.uniqueWeaponKills.basic.displayValue,
TheJadeRabbit= exotic[?(@.referenceId == '2896466320')].values.uniqueWeaponKills.basic.displayValue,
DARCI= exotic[?(@.referenceId == '3141979346')].values.uniqueWeaponKills.basic.displayValue,
TheJadeRabbit= exotic[?(@.referenceId == '2978016230')].values.uniqueWeaponKills.basic.displayValue,
TheJadeRabbit= exotic[?(@.referenceId == '3229272315')].values.uniqueWeaponKills.basic.displayValue,
TheChaperone= exotic[?(@.referenceId == '3413860062')].values.uniqueWeaponKills.basic.displayValue,
Lumina= exotic[?(@.referenceId == '3512014804')].values.uniqueWeaponKills.basic.displayValue,
LegendofAcrius= exotic[?(@.referenceId == '3580904580')].values.uniqueWeaponKills.basic.displayValue,
GravitonLance= exotic[?(@.referenceId == '3628991658')].values.uniqueWeaponKills.basic.displayValue,
TheJadeRabbit= exotic[?(@.referenceId == '3844694310')].values.uniqueWeaponKills.basic.displayValue,
SleeperSimulant= exotic[?(@.referenceId == '4036115577')].values.uniqueWeaponKills.basic.displayValue,
SkyburnersOath= exotic[?(@.referenceId == '4255268456')].values.uniqueWeaponKills.basic.displayValue,
Merciless= exotic[?(@.referenceId == '4190156464')].values.uniqueWeaponKills.basic.displayValue,
Thorn= exotic[?(@.referenceId == '3973202132')].values.uniqueWeaponKills.basic.displayValue,
LeMonarque= exotic[?(@.referenceId == '3588934839')].values.uniqueWeaponKills.basic.displayValue,
BlackTalon= exotic[?(@.referenceId == '3766045777')].values.uniqueWeaponKills.basic.displayValue,
TheProspector= exotic[?(@.referenceId == '3549153979')].values.uniqueWeaponKills.basic.displayValue,
Crimson= exotic[?(@.referenceId == '3437746471')].values.uniqueWeaponKills.basic.displayValue,
Borealis= exotic[?(@.referenceId == '3141979347')].values.uniqueWeaponKills.basic.displayValue,
PolarisLance= exotic[?(@.referenceId == '3413074534')].values.uniqueWeaponKills.basic.displayValue,
IzanagisBurden= exotic[?(@.referenceId == '3211806999')].values.uniqueWeaponKills.basic.displayValue,
Tarrabah= exotic[?(@.referenceId == '3110698812')].values.uniqueWeaponKills.basic.displayValue,
Sunshot= exotic[?(@.referenceId == '2907129557')].values.uniqueWeaponKills.basic.displayValue,
Arbalest= exotic[?(@.referenceId == '2130065553')].values.uniqueWeaponKills.basic.displayValue,
WhisperoftheWorm= exotic[?(@.referenceId == '1891561814')].values.uniqueWeaponKills.basic.displayValue,
LegendofAcrius= exotic[?(@.referenceId == '1744115122')].values.uniqueWeaponKills.basic.displayValue,
TheLastWord= exotic[?(@.referenceId == '1364093401')].values.uniqueWeaponKills.basic.displayValue,
MIDAMultiTool= exotic[?(@.referenceId == '1331482397')].values.uniqueWeaponKills.basic.displayValue,
WishEnder= exotic[?(@.referenceId == '814876684')].values.uniqueWeaponKills.basic.displayValue,
Jötunn= exotic[?(@.referenceId == '417164956')].values.uniqueWeaponKills.basic.displayValue,
Malfeasance= exotic[?(@.referenceId == '204878059')].values.uniqueWeaponKills.basic.displayValue,
PrometheusLens= exotic[?(@.referenceId == '19024058')].values.uniqueWeaponKills.basic.displayValue,
TheJadeRabbit= exotic[?(@.referenceId == '546372301')].values.uniqueWeaponKills.basic.displayValue,
OutbreakPerfected = exotic[?(@.referenceId == '400096939')].values.uniqueWeaponKills.basic.displayValue,
Truth = exotic[?(@.referenceId == '1201830623')].values.uniqueWeaponKills.basic.displayValue,
Coldheart = exotic[?(@.referenceId == '1345867571')].values.uniqueWeaponKills.basic.displayValue,
Cerberus = exotic[?(@.referenceId == '1541131350')].values.uniqueWeaponKills.basic.displayValue,
WorldlineZero = exotic[?(@.referenceId == '1864563948')].values.uniqueWeaponKills.basic.displayValue,
OneThousandVoices = exotic[?(@.referenceId == '2069224589')].values.uniqueWeaponKills.basic.displayValue,
BadJuju = exotic[?(@.referenceId == '2816212794')].values.uniqueWeaponKills.basic.displayValue,
Riskrunner = exotic[?(@.referenceId == '3089417789')].values.uniqueWeaponKills.basic.displayValue,
Thunderlord = exotic[?(@.referenceId == '3325463374')].values.uniqueWeaponKills.basic.displayValue,
Sturm = exotic[?(@.referenceId == '2907129556')].values.uniqueWeaponKills.basic.displayValue,
LordofWolves = exotic[?(@.referenceId == '3413860063')].values.uniqueWeaponKills.basic.displayValue,
FightingLion = exotic[?(@.referenceId == '3549153978')].values.uniqueWeaponKills.basic.displayValue,
TractorCannon = exotic[?(@.referenceId == '3580904581')].values.uniqueWeaponKills.basic.displayValue,
VigilanceWing = exotic[?(@.referenceId == '3628991659')].values.uniqueWeaponKills.basic.displayValue;
         
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
