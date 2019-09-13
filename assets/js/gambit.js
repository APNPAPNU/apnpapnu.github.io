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
		url: "https://www.bungie.net/Platform/Destiny2/2/Account/" + destinyId + "/Stats/?Groups=Medals&Groups=Weapons",
		headers: {
		  "X-API-Key": apiKey
		},
		success: function(data) {
				  if (data.ErrorStatus === 'Success') {
					  var
			
			  
			  
			},
			// pvp stats
			  stats = data.Response.mergedAllCharacters.results.allPve.allTime.weaponPrecisionKillsAutoRifle;
			  
			);
  
			  // Populate stats
			// pvp
			  $('#player-stats').text(stats);
			 
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
  
	if (bungieId && destinyId && joined){
	  $.ajax({ // get Bungie Profile
		url: "https://www.bungie.net/Platform/User/GetBungieNetUserById/" + bungieId + "/",
		headers: {
		  "X-API-Key": apiKey
		},
		success: function(data) {
				  if (data.ErrorStatus === 'Success') {
					  console.log('Player profile:', data);
					  var
					  response = data.Response,
					  about = response.about,
					  banner = response.profileThemeName,
					  blizzard = response.displayName,
					  icon = response.profilePicturePath,
					  name = response.displayname;
  
					  // Populate profile
					  $('.hero#player-hero').css({
						  'background-image': 'url("https://bungie.net/img/UserThemes/' + banner + '/header.jpg")'
					  })
					  $('#player-title').text(blizzard);
					  $('.player-icon').attr({
						  'src': 'https://www.bungie.net' + icon
					  });
					  $('#player-join-date').text(joined.replace(/-/g, '/'));
				  } else {
					  console.log('Error loading player profile:', data);
			  alert('Uh oh, failed to load player info! Looks like Bungie\'s doing server maintenance or having problems. Stats will be back up when Bungie\'s servers are. Please check back again soon!');
				  }
		},
		error: function(data) {
		  console.log('Error loading player profile:', data);
		  alert('Uh oh, looks like Bungie\'s doing server maintenance or having problems. Stats will be back up when Bungie\'s servers are. Please check back again soon!');
		}
	  });
	}
  
  });
  $.ajax({
	url: "https://www.bungie.net/Platform/Destiny2/2/Account/" + destinyId + "/Character/0/Stats/?groups=0,0&modes=63&periodType=0",
	headers: {
	  "X-API-Key": "47b810e692d64237911c2cbe0d433cfe"
	}
  }).done(function(json) {
  
  });
  $(function() {
  
	
	  $.ajax({
		url: "https://www.bungie.net/Platform/Destiny2/2/Account/" + destinyId + "/Character/0/Stats/?groups=0,0&modes=63&periodType=0",
		headers: {
		  "X-API-Key": apiKey
		},
		success: function(data) {
				  
			// Gambit stats
			  gstats = data.Response.pvecomp_gambit.allTime,
			  gefficiency = gstats.efficiency.basic.displayValue,
			  gkd = gstats.killsDeathsRatio.basic.displayValue,
			  gkda = gstats.killsDeathsAssists.basic.displayValue,
			  gkills = gstats.kills.basic.displayValue,
			  gdeaths = gstats.deaths.basic.displayValue,
			  gassists = gstats.assists.basic.displayValue,
			  gprecisionKills = gstats.precisionKills.basic.displayValue,
		  gprimevalKills = gstats.primevalKills.basic.displayValue,
			  gblockerKills = gstats.blockerKills.basic.displayValue,
			  gmobKills = gstats.mobKills.basic.displayValue,
			  ghighValueKills = gstats.highValueKills.basic.displayValue,
			  gmotesPickedUp = gstats.motesPickedUp.basic.displayValue,
			  gmotesDeposited = gstats.motesDeposited.basic.displayValue,
			  gprimevalDamage = gstats.primevalDamage.basic.displayValue,
			  gbestSingleGameKills = gstats.bestSingleGameKills.basic.displayValue,
			  gsmallBlockersSent = gstats.smallBlockersSent.basic.displayValue,
			  gmediumBlockersSent = gstats.mediumBlockersSent.basic.displayValue,
			  glargeBlockersSent = gstats.largeBlockersSent.basic.displayValue,
			  gbestSingleGameKills = gstats.bestSingleGameKills.basic.displayValue,
			  gkillsDeathsRatio = gstats.killsDeathsRatio.basic.displayValue,
			  gfastestCompletionMs = gstats.fastestCompletionMs.basic.displayValue,
			  gmotesDenied = gstats.motesDenied.basic.displayValue,
			  gmotesLost = gstats.motesLost.basic.displayValue,
			  gactivitiesWon = gstats.activitiesWon.basic.displayValue,
			  gactivitiesEntered = gstats.activitiesEntered.basic.displayValue,
			  gbestSingleGameKills = gstats.bestSingleGameKills.basic.displayValue,
			  ginvasions = gstats.invasions.basic.displayValue,
			  ginvasionKills = gstats.invasionKills.basic.displayValue,
			  gweaponBestType = gstats.weaponBestType.basic.displayValue,
  
				
			  // Populate stats
			// pvp
		 
			  $('#player-g-efficiency').text(gefficiency);
			  $('#player-g-kd').text(gkd);
			  $('#player-g-kda').text(gkda);
			  $('#player-g-kills').text(gkills);
			  $('#player-g-assists').text(gassists);
			  $('#player-g-precision-kills').text(gprecisionKills);
			  $('#player-g-primeval-kills').text(gprimevalKills);
			  $('#player-g-best-single-game-kills').text(gbestSingleGameKills);
			  $('#player-g-blocker-kills').text(gblockerKills);
			  $('#player-g-mob-kills').text(gmobKills);
				  $('#player-g-high-value-kills').text(ghighValueKills);
			  $('#player-g-motes-Picked-Up').text(gmotesPickedUp);
			  $('#player-g-motes-Deposited').text( gmotesDeposited);
			  $('#player-g-primeval-Damage ').text(gprimevalDamage );
			  $('#player-g-small-Blockers-Sent').text(gsmallBlockersSent);
			  $('#player-g-precision-kills').text(gprecisionKills);
			  $('#player-g-kills-Deaths-Ratio').text(gkillsDeathsRatio);
			  $('#player-g-medium-Blockers-Sent').text(gmediumBlockersSent);
			  $('#player-g-large-Blockers-Sent').text(glargeBlockersSent);
			  $('#player-g-fastest-Completion-Ms').text(gfastestCompletionMs);
				$('#player-g-motes-Denied').text(gmotesDenied);
			  $('#player-g-motes-Lost').text(gmotesLost);
			  $('#player-g-invasions').text(ginvasions);
			  $('#player-g-invasion-Kills').text(ginvasionKills);
			  $('#player-g-weapon-Best-Type').text(gweaponBestType);
			  $('#player-g-precision-kills').text(gprecisionKills);
			  $('#player-g-kill-spree').text(gkillSpree);
			  $('#player-g-most-kills').text(gmostKills);
			  $('#player-g-most-precision').text(gmostPrecision);
				  $('#player-g-efficiency').text(gefficiency);
			  $('#player-g-kd').text(gkd);
			  $('#player-g-kda').text(gkda);
		 
  
		},
		error: function(data) {
				  alert('Uh oh, failed to load player stats! Looks like Bungie\'s doing server maintenance or having problems. Please check back again soon!');
		  console.log('Error loading player stats:', data);
		}
	  });
	  });
		};
  $.ajax({
	url: "https://www.bungie.net/Platform/Destiny2/2/Account/" + destinyId + "/Character/0/Stats/?groups=0,0&modes=63&periodType=0",
	headers: {
	  "X-API-Key": "47b810e692d64237911c2cbe0d433cfe"
	}
  }).done(function(json) {
  
  });
  $(function() {
  
	
	  $.ajax({
		url: "https://www.bungie.net/Platform/Destiny2/2/Account/" + destinyId + "/Character/0/Stats/?groups=0,0&modes=75&periodType=0",
		headers: {
		  "X-API-Key": apiKey
		},
		success: function(data) {
				  
			// Gambit stats
			  gpstats = data.Response.pvecomp_mamba.allTime,
			  gpefficiency = gpstats.efficiency.basic.displayValue,
			  gpkd = gpstats.killsDeathsRatio.basic.displayValue,
			  gpkda = gpstats.killsDeathsAssists.basic.displayValue,
			  gpkills = gpstats.kills.basic.displayValue,
			  gpdeaths = gpstats.deaths.basic.displayValue,
			  gpassists = gpstats.assists.basic.displayValue,
			  gpprecisionKills = gpstats.precisionKills.basic.displayValue,
		      gpprimevalKills = gpstats.primevalKills.basic.displayValue,
			  gpblockerKills = gpstats.blockerKills.basic.displayValue,
			  gpmobKills = gpstats.mobKills.basic.displayValue,
			  gphighValueKills = gpstats.highValueKills.basic.displayValue,
			  gpmotesPickedUp = gpstats.motesPickedUp.basic.displayValue,
			  gpmotesDeposited = gpstats.motesDeposited.basic.displayValue,
			  gpprimevalDamage = gpstats.primevalDamage.basic.displayValue,
			  gpbestSingleGameKills = gpstats.bestSingleGameKills.basic.displayValue,
			  gpsmallBlockersSent = gpstats.smallBlockersSent.basic.displayValue,
			  gpmediumBlockersSent = gpstats.mediumBlockersSent.basic.displayValue,
			  gplargeBlockersSent = gpstats.largeBlockersSent.basic.displayValue,
			  gpbestSingleGameKills = gpstats.bestSingleGameKills.basic.displayValue,
			  gpkillsDeathsRatio = gpstats.killsDeathsRatio.basic.displayValue,
			  gpfastestCompletionMs = gpstats.fastestCompletionMs.basic.displayValue,
			  gpmotesDenied = gpstats.motesDenied.basic.displayValue,
			  gpmotesLost = gpstats.motesLost.basic.displayValue,
			  gpactivitiesWon = gpstats.activitiesWon.basic.displayValue,
			  gpactivitiesEntered = gpstats.activitiesEntered.basic.displayValue,
			  gpbestSingleGameKills = gpstats.bestSingleGameKills.basic.displayValue,
			  gpinvasions = gpstats.invasions.basic.displayValue,
			  gpinvasionKills = gpstats.invasionKills.basic.displayValue,
			  gpweaponBestType = gpstats.weaponBestType.basic.displayValue,
  
				
			  // Populate stats
			// pvp
		 
			  $('#player-g-p-efficiency').text(gpefficiency);
			  $('#player-g-p-kd').text(gpkd);
			  $('#player-g-p-kda').text(gpkda);
			  $('#player-g-p-kills').text(gpkills);
			  $('#player-g-p-assists').text(gpassists);
			  $('#player-g-p-precision-kills').text(gpprecisionKills);
			  $('#player-g-p-primeval-kills').text(gpprimevalKills);
			  $('#player-g-p-best-single-game-kills').text(gpbestSingleGameKills);
			  $('#player-g-p-blocker-kills').text(gpblockerKills);
			  $('#player-g-p-mob-kills').text(gpmobKills);
				  $('#player-g-p-high-value-kills').text(gphighValueKills);
			  $('#player-g-p-motes-Picked-Up').text(gpmotesPickedUp);
			  $('#player-g-p-motes-Deposited').text( gpmotesDeposited);
			  $('#player-g-p-primeval-Damage ').text(gpprimevalDamage );
			  $('#player-g-p-small-Blockers-Sent').text(gpsmallBlockersSent);
			  $('#player-g-p-precision-kills').text(gpprecisionKills);
			  $('#player-g-p-kills-Deaths-Ratio').text(gpkillsDeathsRatio);
			  $('#player-g-p-medium-Blockers-Sent').text(gpmediumBlockersSent);
			  $('#player-g-p-large-Blockers-Sent').text(gplargeBlockersSent);
			  $('#player-g-p-fastest-Completion-Ms').text(gpfastestCompletionMs);
				$('#player-g-p-motes-Denied').text(gpmotesDenied);
			  $('#player-g-p-motes-Lost').text(gpmotesLost);
			  $('#player-g-p-invasions').text(gpinvasions);
			  $('#player-g-p-invasion-Kills').text(gpinvasionKills);
			  $('#player-g-p-weapon-Best-Type').text(gpweaponBestType);
			  $('#player-g-p-precision-kills').text(gpprecisionKills);
			  $('#player-g-p-kill-spree').text(gpkillSpree);
			  $('#player-g-p-most-kills').text(gpmostKills);
			  $('#player-g-p-most-precision').text(gpmostPrecision);
				  $('#player-g-p-efficiency').text(gpefficiency);
			 
		 
  
		},
		error: function(data) {
				  alert('Uh oh, failed to load player stats! Looks like Bungie\'s doing server maintenance or having problems. Please check back again soon!');
		  console.log('Error loading player stats:', data);
		}
	  });
	})});
