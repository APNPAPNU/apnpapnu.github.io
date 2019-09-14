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
			stats = data.Response.mergedAllCharacters.results.allPvE.allTime,
			pveAutoRifle = stats.weaponKillsAutoRifle.basic.value,
		        pveSword = stats.weaponKillsSword.basic.value,
		        pvesideArm = stats.weaponKillsSideArm.basic.value,
	                pverocketLauncher = stats.weaponKillsRocketLauncher.basic.value,
		        pveMelee = stats.weaponKillsMelee.basic.value,
		        pvepulseRifle = stats.weaponKillsPulseRifle.basic.value,
			pveBow = stats.weaponKillsBow.basic.value,
		        pveShotgun = stats.weaponKillsShotgun.basic.value,
		        pveSniper = stats.weaponKillsSniper.basic.value;
			                   $('#player-pve-sword').text(autoRifle);
					   $('#player-pve-auto-rifle').text(pveAutoRifle);
					   $('#player-pve-sword').text(autoRifle);
					   $('#player-pve-sword').text(autoRifle);
					   $('#player-pve-sword').text(autoRifle);
					   $('#player-pve-sword').text(autoRifle);
					   $('#player-pve-sword').text(autoRifle);
			 
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
