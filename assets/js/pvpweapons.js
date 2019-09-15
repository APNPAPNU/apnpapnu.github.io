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
		url: "https://www.bungie.net/Platform/Destiny2/2/Account/" + destinyId + "/Stats/?Groups=Weapons",
		headers: {
		  "X-API-Key": apiKey
		},
		success: function(data) {
				  if (data.ErrorStatus === 'Success') {
					  
			// pvp stats
			stats = data.Response.mergedAllCharacters.results.allpvp.allTime,
			pvpFusionRifle = stats.weaponKillsFusionRifle.basic.displayValue,
			pvpGrenade = stats.weaponKillsGrenade.basic.displayValue,
			pvpGrenadeLauncher = stats.weaponKillsGrenadeLauncher.basic.displayValue,
			pvpHandCannon = stats.weaponKillsHandCannon.basic.displayValue,
			pvpTraceRifle = stats.weaponKillsTraceRifle.basic.displayValue,
			pvpMachineGun = stats.weaponKillsMachineGun.basic.displayValue,
			pvpMelee = stats.weaponKillsMelee.basic.displayValue,
			pvpPulseRifle = stats.weaponKillsPulseRifle.basic.displayValue,
			pvpRocketLauncher = stats.weaponKillsRocketLauncher.basic.displayValue,
			pvpScoutRifle = stats.weaponKillsScoutRifle.basic.displayValue,
			pvpShotgun = stats.weaponKillsShotgun.basic.displayValue,
			pvpSniper = stats.weaponKillsSniper.basic.displayValue,
			pvpSubmachingun = stats.weaponKillsSubmachinegun.basic.displayValue,
			pvpSuper = stats.weaponKillsSuper.basic.displayValue,
			pvpRelic = stats.weaponKillsRelic.basic.displayValue,
			pvpSideArm = stats.weaponKillsSideArm.basic.displayValue,
			pvpSword = stats.weaponKillsSword.basic.displayValue,
			pvpAbility = stats.weaponKillsAbility.basic.displayValue,
			pvpBeamRifle = stats.weaponKillsBeamRifle.basic.displayValue,
			pvpBow = stats.weaponKillsBow.basic.displayValue,;
			/////////
			
			$('#player-pvp-fusion-rifle').text(pvpFusionRifle);
			$('#player-pvp-grenade').text(pvpGrenade);
			$('#player-pvp-grenade-launcher').text(pvpGrenadeLauncher);
			$('#player-pvp-hand-cannon').text(pvpHandCannon);
			$('#player-pvp-trace-rifle').text(pvpTraceRifle);
			$('#player-pvp-machinegun').text(pvpMachineGun);
			$('#player-pvp-melee').text(pvpMelee);
			$('#player-pvp-pulse-rifle').text(pvpPulseRifle);
			$('#player-pvp-rocket-launcher').text(pvpRocketLauncher);
			$('#player-pvp-scout-rifle').text(pvpScoutRifle);
			$('#player-pvp-shotgun').text(pvpShotgun);
			$('#player-pvp-sniper').text(pvpSniper);
			$('#player-pvp-submachinegun').text(pvpSubmachingun);
			$('#player-pvp-super').text(pvpSuper);
			$('#player-pvp-relic').text(pvpRelic);
			$('#player-pvp-sidearm').text(pvpSideArm);
			$('#player-pvp-sword').text(pvpSword);
			$('#player-pvp-ability').text(pvpAbility);
			$('#player-pvp-beam-rifle').text(pvpBeamRifle);
			$('#player-pvp-bow').text(pvpBow);
			 
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
