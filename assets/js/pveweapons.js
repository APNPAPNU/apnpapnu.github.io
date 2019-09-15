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
  $("#payBtn").click(function() {
  location.href = 'https://www.d2checklist.com/home();
});
	if (bungieId && destinyId && joined) {
	  $.ajax({
		url: "https://www.bungie.net/Platform/Destiny2/2/Account/" + destinyId + "/Stats/?Groups=Weapons",
		headers: {
		  "X-API-Key": apiKey
		},
		success: function(data) {
				  if (data.ErrorStatus === 'Success') {
					  
			// pvp stats
			stats = data.Response.mergedAllCharacters.results.allPvE.allTime,
			pveFusionRifle = stats.weaponKillsFusionRifle.basic.displayValue,
			pveGrenade = stats.weaponKillsGrenade.basic.displayValue,
			pveGrenadeLauncher = stats.weaponKillsGrenadeLauncher.basic.displayValue,
			pveHandCannon = stats.weaponKillsHandCannon.basic.displayValue,
			pveTraceRifle = stats.weaponKillsTraceRifle.basic.displayValue,
			pveMachineGun = stats.weaponKillsMachineGun.basic.displayValue,
			pveMelee = stats.weaponKillsMelee.basic.displayValue,
			pvePulseRifle = stats.weaponKillsPulseRifle.basic.displayValue,
			pveRocketLauncher = stats.weaponKillsRocketLauncher.basic.displayValue,
			pveScoutRifle = stats.weaponKillsScoutRifle.basic.displayValue,
			pveShotgun = stats.weaponKillsShotgun.basic.displayValue,
			pveSniper = stats.weaponKillsSniper.basic.displayValue,
			pveSubmachingun = stats.weaponKillsSubmachinegun.basic.displayValue,
			pveSuper = stats.weaponKillsSuper.basic.displayValue,
			pveRelic = stats.weaponKillsRelic.basic.displayValue,
			pveSideArm = stats.weaponKillsSideArm.basic.displayValue,
			pveSword = stats.weaponKillsSword.basic.displayValue,
			pveAbility = stats.weaponKillsAbility.basic.displayValue,
			pveBeamRifle = stats.weaponKillsBeamRifle.basic.displayValue,
			pveBow = stats.weaponKillsBow.basic.displayValue;
			/////////
			
			$('#player-pve-fusion-rifle').text(pveFusionRifle);
			$('#player-pve-grenade').text(pveGrenade);
			$('#player-pve-grenade-launcher').text(pveGrenadeLauncher);
			$('#player-pve-hand-cannon').text(pveHandCannon);
			$('#player-pve-trace-rifle').text(pveTraceRifle);
			$('#player-pve-machinegun').text(pveMachineGun);
			$('#player-pve-melee').text(pveMelee);
			$('#player-pve-pulse-rifle').text(pvePulseRifle);
			$('#player-pve-rocket-launcher').text(pveRocketLauncher);
			$('#player-pve-scout-rifle').text(pveScoutRifle);
			$('#player-pve-shotgun').text(pveShotgun);
			$('#player-pve-sniper').text(pveSniper);
			$('#player-pve-submachinegun').text(pveSubmachingun);
			$('#player-pve-super').text(pveSuper);
			$('#player-pve-relic').text(pveRelic);
			$('#player-pve-sidearm').text(pveSideArm);
			$('#player-pve-sword').text(pveSword);
			$('#player-pve-ability').text(pveAbility);
			$('#player-pve-beam-rifle').text(pveBeamRifle);
			$('#player-pve-bow').text(pveBow);
			 
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
