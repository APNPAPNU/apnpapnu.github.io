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
1508896098: 'TheWardcliffCoil',
1852863732: 'Wavesplitter',
2044500762: 'TheQueenbreaker',
2146650065: 'PrometheusLens',
2694576561: 'TwoTailedFox',
2896466320: 'TheJadeRabbit',
3141979346: 'DARCI',
2978016230: 'TheJadeRabbit',
3229272315: 'TheJadeRabbit',
3413860062: 'TheChaperone',
3512014804: 'Lumina',
3580904580: 'LegendofAcrius',
3628991658: 'GravitonLance',
3844694310: 'TheJadeRabbit',
4036115577: 'SleeperSimulant',
4255268456: 'SkyburnersOath',
4190156464: 'Merciless',
3973202132: 'Thorn',
3588934839: 'LeMonarque',
3766045777: 'BlackTalon',
3549153979: 'TheProspector',
3437746471: 'Crimson',
3141979347: 'Borealis',
3413074534: 'PolarisLance',
3211806999: 'IzanagisBurden',
3110698812: 'Tarrabah',
2907129557: 'Sunshot',
2130065553: 'Arbalest',
1891561814: 'WhisperoftheWorm',
1744115122: 'LegendofAcrius',
1364093401: 'TheLastWord',
1331482397: 'MIDAMultiTool',
814876684: 'WishEnder',
417164956: 'Jötunn',
204878059: 'Malfeasance',
19024058: 'PrometheusLens',
546372301: 'TheJadeRabbit',
400096939: 'OutbreakPerfected',
1201830623: 'Truth',
1345867571: 'Coldheart',
1541131350: 'Cerberus+1',
1864563948: 'WorldlineZero',
2069224589: 'OneThousandVoices',
2816212794: 'BadJuju',
3089417789: 'Riskrunner',
3325463374: 'Thunderlord',
2907129556: 'Sturm',
3413860063: 'LordofWolves',
3549153978: 'FightingLion',
3580904581: 'TractorCannon',
3628991659: 'VigilanceWing'}

     // for example, the first weapon referenceId is 3973202132 (Thorn)
var weaponId = response.weapons[0].referenceId
var weaponId2 = response.weapons[1].referenceId
var weaponName = names[weaponId]
var weaponName2 = names[weaponId2]
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
