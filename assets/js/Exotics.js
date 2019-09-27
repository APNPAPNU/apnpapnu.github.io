$(function() {
     var
    
     destinyId = checkParams('destinyId'),
     joined = checkParams('joined'),
       
          if (destinyId && joined) {
            $.ajax({
               url: "https://www.bungie.net/Platform/Destiny2/2/Account/" + destinyId + "/Character/0/Stats/UniqueWeapons/",
             headers: {
                 "X-API-Key": apiKey
               }, 
               success: function(data) {
                           if (data.ErrorStatus === 'Success') {  
     
     
      exotic = Response.weapons				    
      Telesto = exotic[0].values.uniqueWeaponKills.basic.displayValue,
      TheHuckleberry = exotic[1].values.uniqueWeaponKills.basic.displayValue,
      RatKing = exotic[2].values.uniqueWeaponKills.basic.displayValue,
      Anarchy = exotic[3].values.uniqueWeaponKills.basic.displayValue,
      SUROSRegime = exotic[4].values.uniqueWeaponKills.basic.displayValue,
      Sunshot = exotic[5].values.uniqueWeaponKills.basic.displayValue,
      DARCI = exotic[6].values.uniqueWeaponKills.basic.displayValue,
      Borealis = exotic[7].values.uniqueWeaponKills.basic.displayValue,
      Thunderlord = exotic[8].values.uniqueWeaponKills.basic.displayValue,
      PolarisLance = exotic[9].values.uniqueWeaponKills.basic.displayValue,
      Crimson = exotic[10].values.uniqueWeaponKills.basic.displayValue,
      FightingLion = exotic[11].values.uniqueWeaponKills.basic.displayValue,
      TractorCannon = exotic[12].values.uniqueWeaponKills.basic.displayValue,
      LeMonarque = exotic[13].values.uniqueWeaponKills.basic.displayValue,
      GravitonLance = exotic[14].values.uniqueWeaponKills.basic.displayValue,
      VigilanceWing = exotic[15].values.uniqueWeaponKills.basic.displayValue,
      BlackTalon = exotic[16].values.uniqueWeaponKills.basic.displayValue,
      TheColony = exotic[17].values.uniqueWeaponKills.basic.displayValue,
      SleeperSimulant = exotic[18].values.uniqueWeaponKills.basic.displayValue,
      HardLight = exotic[19].values.uniqueWeaponKills.basic.displayValue,
      Merciless = exotic[20].values.uniqueWeaponKills.basic.displayValue,
      SkyburnersOath = exotic[21].values.uniqueWeaponKills.basic.displayValue,
      PrometheusLens = exotic[22].values.uniqueWeaponKills.basic.displayValue,
      Malfeasance = exotic[23].values.uniqueWeaponKills.basic.displayValue,
      OutbreakPerfected = exotic[24].values.uniqueWeaponKills.basic.displayValue,
      Jötunn = exotic[25].values.uniqueWeaponKills.basic.displayValue,
      WishEnder = exotic[26].values.uniqueWeaponKills.basic.displayValue,
      SweetBusiness = exotic[27].values.uniqueWeaponKills.basic.displayValue,
      Coldheart = exotic[28].values.uniqueWeaponKills.basic.displayValue,
      TheWardcliffCoil = exotic[29].values.uniqueWeaponKills.basic.displayValue,
      LegendofAcrius = exotic[30].values.uniqueWeaponKills.basic.displayValue,
      Wavesplitter = exotic[31].values.uniqueWeaponKills.basic.displayValue,
      WhisperoftheWorm = exotic[32].values.uniqueWeaponKills.basic.displayValue,
      Arbalest = exotic[33].values.uniqueWeaponKills.basic.displayValue,
      TwoTailedFox = exotic[34].values.uniqueWeaponKills.basic.displayValue,
      Sturm = exotic[35].values.uniqueWeaponKills.basic.displayValue,
      Riskrunner = exotic[36].values.uniqueWeaponKills.basic.displayValue,
      IzanagisBurden = exotic[37].values.uniqueWeaponKills.basic.displayValue,
      TheChaperone = exotic[38].values.uniqueWeaponKills.basic.displayValue,
      LordofWolves = exotic[39].values.uniqueWeaponKills.basic.displayValue,
      TheProspector = exotic[40].values.uniqueWeaponKills.basic.displayValue,
      Thorn = exotic[41].values.uniqueWeaponKills.basic.displayValue,
      TheLastWord = exotic[42].values.uniqueWeaponKills.basic.displayValue,
      Cerberus = exotic[43].values.uniqueWeaponKills.basic.displayValue,
      WorldlineZero = exotic[44].values.uniqueWeaponKills.basic.displayValue,
      TheQueenbreaker = exotic[45].values.uniqueWeaponKills.basic.displayValue,
      BadJuju = exotic[46].values.uniqueWeaponKills.basic.displayValue,
      Lumina = exotic[47].values.uniqueWeaponKills.basic.displayValue,
      LegendofAcrius = exotic[48].values.uniqueWeaponKills.basic.displayValue,
      TheJadeRabbit = exotic[49].values.uniqueWeaponKills.basic.displayValue,
      AceofSpades = exotic[50].values.uniqueWeaponKills.basic.displayValue,
      TrinityGhoul = exotic[51].values.uniqueWeaponKills.basic.displayValue,
      Truth = exotic[52].values.uniqueWeaponKills.basic.displayValue,
      MIDAMultiTool = exotic[53].values.uniqueWeaponKills.basic.displayValue;
         
         
       $('#player-AceofSpades').text(AceofSpades);
       $('#player-TheJadeRabbit').text(TheJadeRabbit);
       $('#player-TrinityGhoul').text(TrinityGhoul);
       $('#player-SweetBusiness').text(SweetBusiness);
       $('#player-TheWardcliffCoil').text(TheWardcliffCoil);
       $('#player-Wavesplitter').text(Wavesplitter);
       $('#player-TheQueenbreaker').text(TheQueenbreaker);
       $('#player-PrometheusLens').text(PrometheusLens);
       $('#player-Two-TailedFox').text(Two-TailedFox);
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
       $('#player-MIDAMulti-Tool').text(MIDAMulti-Tool);
       $('#player-Wish-Ender').text(Wish-Ender);
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
