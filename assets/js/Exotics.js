    
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





Telesto = data.Response.weapons[0].values.uniqueWeaponKills.basic.displayValue,
TheHuckleberry = data.Response.weapons[1].values.uniqueWeaponKills.basic.displayValue,
RatKing = data.Response.weapons[2].values.uniqueWeaponKills.basic.displayValue,
Anarchy = data.Response.weapons[3].values.uniqueWeaponKills.basic.displayValue,
SUROSRegime = data.Response.weapons[4].values.uniqueWeaponKills.basic.displayValue,
Sunshot = data.Response.weapons[5].values.uniqueWeaponKills.basic.displayValue,
DARCI = data.Response.weapons[6].values.uniqueWeaponKills.basic.displayValue,
Borealis = data.Response.weapons[7].values.uniqueWeaponKills.basic.displayValue,
Thunderlord = data.Response.weapons[8].values.uniqueWeaponKills.basic.displayValue,
PolarisLance = data.Response.weapons[9].values.uniqueWeaponKills.basic.displayValue,
Crimson = data.Response.weapons[10].values.uniqueWeaponKills.basic.displayValue,
FightingLion = data.Response.weapons[11].values.uniqueWeaponKills.basic.displayValue,
TractorCannon = data.Response.weapons[12].values.uniqueWeaponKills.basic.displayValue,
LeMonarque = data.Response.weapons[13].values.uniqueWeaponKills.basic.displayValue,
GravitonLance = data.Response.weapons[14].values.uniqueWeaponKills.basic.displayValue,
VigilanceWing = data.Response.weapons[15].values.uniqueWeaponKills.basic.displayValue,
BlackTalon = data.Response.weapons[16].values.uniqueWeaponKills.basic.displayValue,
TheColony = data.Response.weapons[17].values.uniqueWeaponKills.basic.displayValue,
SleeperSimulant = data.Response.weapons[18].values.uniqueWeaponKills.basic.displayValue,
HardLight = data.Response.weapons[19].values.uniqueWeaponKills.basic.displayValue,
Merciless = data.Response.weapons[20].values.uniqueWeaponKills.basic.displayValue,
SkyburnersOath = data.Response.weapons[21].values.uniqueWeaponKills.basic.displayValue,
PrometheusLens = data.Response.weapons[22].values.uniqueWeaponKills.basic.displayValue,
Malfeasance = data.Response.weapons[23].values.uniqueWeaponKills.basic.displayValue,
OutbreakPerfected = data.Response.weapons[24].values.uniqueWeaponKills.basic.displayValue,
Jötunn = data.Response.weapons[25].values.uniqueWeaponKills.basic.displayValue,
WishEnder = data.Response.weapons[26].values.uniqueWeaponKills.basic.displayValue,
SweetBusiness = data.Response.weapons[27].values.uniqueWeaponKills.basic.displayValue,
Coldheart = data.Response.weapons[28].values.uniqueWeaponKills.basic.displayValue,
TheWardcliffCoil = data.Response.weapons[29].values.uniqueWeaponKills.basic.displayValue,
LegendofAcrius = data.Response.weapons[30].values.uniqueWeaponKills.basic.displayValue,
Wavesplitter = data.Response.weapons[31].values.uniqueWeaponKills.basic.displayValue,
WhisperoftheWorm = data.Response.weapons[32].values.uniqueWeaponKills.basic.displayValue,
Arbalest = data.Response.weapons[33].values.uniqueWeaponKills.basic.displayValue,
TwoTailedFox = data.Response.weapons[34].values.uniqueWeaponKills.basic.displayValue,
Sturm = data.Response.weapons[35].values.uniqueWeaponKills.basic.displayValue,
Riskrunner = data.Response.weapons[36].values.uniqueWeaponKills.basic.displayValue,
IzanagisBurden = data.Response.weapons[37].values.uniqueWeaponKills.basic.displayValue,
TheChaperone = data.Response.weapons[38].values.uniqueWeaponKills.basic.displayValue,
LordofWolves = data.Response.weapons[39].values.uniqueWeaponKills.basic.displayValue,
TheProspector = data.Response.weapons[40].values.uniqueWeaponKills.basic.displayValue,
Thorn = data.Response.weapons[41].values.uniqueWeaponKills.basic.displayValue,
TheLastWord = data.Response.weapons[42].values.uniqueWeaponKills.basic.displayValue,
Cerberus = data.Response.weapons[43].values.uniqueWeaponKills.basic.displayValue,
WorldlineZero = data.Response.weapons[44].values.uniqueWeaponKills.basic.displayValue,
TheQueenbreaker = data.Response.weapons[45].values.uniqueWeaponKills.basic.displayValue,
BadJuju = data.Response.weapons[46].values.uniqueWeaponKills.basic.displayValue,
Lumina = data.Response.weapons[47].values.uniqueWeaponKills.basic.displayValue,
LegendofAcrius = data.Response.weapons[48].values.uniqueWeaponKills.basic.displayValue,
TheJadeRabbit = data.Response.weapons[49].values.uniqueWeaponKills.basic.displayValue,
AceofSpades = data.Response.weapons[50].values.uniqueWeaponKills.basic.displayValue,
TrinityGhoul = data.Response.weapons[51].values.uniqueWeaponKills.basic.displayValue,
Truth = data.Response.weapons[52].values.uniqueWeaponKills.basic.displayValue,
MIDAMultiTool = data.Response.weapons[53].values.uniqueWeaponKills.basic.displayValue;
    
    
    
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
