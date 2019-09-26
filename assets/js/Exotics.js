    
  $(function() {

	var
  
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
		url: "https://www.bungie.net/Platform/Destiny2/2/Account/" + destinyId + "/Character/0/Stats/UniqueWeapons/",
        headers: {
            "X-API-Key": apiKey
          }, 
		success: function(data) {
				  if (data.ErrorStatus === 'Success') {  




Telesto = Response.weapons[0].values.uniqueWeaponKills.basic.displayValue,
TheHuckleberry = Response.weapons[1].values.uniqueWeaponKills.basic.displayValue,
RatKing = Response.weapons[2].values.uniqueWeaponKills.basic.displayValue,
Anarchy = Response.weapons[3].values.uniqueWeaponKills.basic.displayValue,
SUROSRegime = Response.weapons[4].values.uniqueWeaponKills.basic.displayValue,
Sunshot = Response.weapons[5].values.uniqueWeaponKills.basic.displayValue,
DARCI = Response.weapons[6].values.uniqueWeaponKills.basic.displayValue,
Borealis = Response.weapons[7].values.uniqueWeaponKills.basic.displayValue,
Thunderlord = Response.weapons[8].values.uniqueWeaponKills.basic.displayValue,
PolarisLance = Response.weapons[9].values.uniqueWeaponKills.basic.displayValue,
Crimson = Response.weapons[10].values.uniqueWeaponKills.basic.displayValue,
FightingLion = Response.weapons[11].values.uniqueWeaponKills.basic.displayValue,
TractorCannon = Response.weapons[12].values.uniqueWeaponKills.basic.displayValue,
LeMonarque = Response.weapons[13].values.uniqueWeaponKills.basic.displayValue,
GravitonLance = Response.weapons[14].values.uniqueWeaponKills.basic.displayValue,
VigilanceWing = Response.weapons[15].values.uniqueWeaponKills.basic.displayValue,
BlackTalon = Response.weapons[16].values.uniqueWeaponKills.basic.displayValue,
TheColony = Response.weapons[17].values.uniqueWeaponKills.basic.displayValue,
SleeperSimulant = Response.weapons[18].values.uniqueWeaponKills.basic.displayValue,
HardLight = Response.weapons[19].values.uniqueWeaponKills.basic.displayValue,
Merciless = Response.weapons[20].values.uniqueWeaponKills.basic.displayValue,
SkyburnersOath = Response.weapons[21].values.uniqueWeaponKills.basic.displayValue,
PrometheusLens = Response.weapons[22].values.uniqueWeaponKills.basic.displayValue,
Malfeasance = Response.weapons[23].values.uniqueWeaponKills.basic.displayValue,
OutbreakPerfected = Response.weapons[24].values.uniqueWeaponKills.basic.displayValue,
Jötunn = Response.weapons[25].values.uniqueWeaponKills.basic.displayValue,
WishEnder = Response.weapons[26].values.uniqueWeaponKills.basic.displayValue,
SweetBusiness = Response.weapons[27].values.uniqueWeaponKills.basic.displayValue,
Coldheart = Response.weapons[28].values.uniqueWeaponKills.basic.displayValue,
TheWardcliffCoil = Response.weapons[29].values.uniqueWeaponKills.basic.displayValue,
LegendofAcrius = Response.weapons[30].values.uniqueWeaponKills.basic.displayValue,
Wavesplitter = Response.weapons[31].values.uniqueWeaponKills.basic.displayValue,
WhisperoftheWorm = Response.weapons[32].values.uniqueWeaponKills.basic.displayValue,
Arbalest = Response.weapons[33].values.uniqueWeaponKills.basic.displayValue,
TwoTailedFox = Response.weapons[34].values.uniqueWeaponKills.basic.displayValue,
Sturm = Response.weapons[35].values.uniqueWeaponKills.basic.displayValue,
Riskrunner = Response.weapons[36].values.uniqueWeaponKills.basic.displayValue,
IzanagisBurden = Response.weapons[37].values.uniqueWeaponKills.basic.displayValue,
TheChaperone = Response.weapons[38].values.uniqueWeaponKills.basic.displayValue,
LordofWolves = Response.weapons[39].values.uniqueWeaponKills.basic.displayValue,
TheProspector = Response.weapons[40].values.uniqueWeaponKills.basic.displayValue,
Thorn = Response.weapons[41].values.uniqueWeaponKills.basic.displayValue,
TheLastWord = Response.weapons[42].values.uniqueWeaponKills.basic.displayValue,
Cerberus = Response.weapons[43].values.uniqueWeaponKills.basic.displayValue,
WorldlineZero = Response.weapons[44].values.uniqueWeaponKills.basic.displayValue,
TheQueenbreaker = Response.weapons[45].values.uniqueWeaponKills.basic.displayValue,
BadJuju = Response.weapons[46].values.uniqueWeaponKills.basic.displayValue,
Lumina = Response.weapons[47].values.uniqueWeaponKills.basic.displayValue,
LegendofAcrius = Response.weapons[48].values.uniqueWeaponKills.basic.displayValue,
TheJadeRabbit = Response.weapons[49].values.uniqueWeaponKills.basic.displayValue,
AceofSpades = Response.weapons[50].values.uniqueWeaponKills.basic.displayValue,
TrinityGhoul = Response.weapons[51].values.uniqueWeaponKills.basic.displayValue,
Truth = Response.weapons[52].values.uniqueWeaponKills.basic.displayValue,
MIDAMultiTool = Response.weapons[53].values.uniqueWeaponKills.basic.displayValue;
    
    
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
