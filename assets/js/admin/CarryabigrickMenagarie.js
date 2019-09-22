$(function() {

	var
  
	  bungieId = checkParams('bungieId'),
	  destinyId = checkParams('destinyId'),
	  joined = checkParams('joined');
	 
  
	  $.ajax({
		url: "https://www.bungie.net/Platform/Destiny2/2/Account/4611686018428807356/Character/0/Stats/?modes=77&periodType=0",
		headers: {
		  "X-API-Key": "47b810e692d64237911c2cbe0d433cfe"
		},
		success: function(data) {
				  if (data.ErrorStatus === 'Success') {
          
menagariestats = data.Response.caluseum.allTime,
menagarieClears = menagariestats.activitiesCleared.basic.displayValue,
menagarieassists = menagariestats.assists.basic.displayValue,
menagariemostSingleGameKills= menagariestats.bestSingleGameKills.basic.displayValue,
menagariehighestScore= menagariestats.bestSingleGameScore.basic.displayValue,
menagarieKills= menagariestats.opponentsDefeated.basic.displayValue,
menagarieorbsGenerated = menagariestats.orbsDropped.basic.displayValue,
menagarieprecisionKills= menagariestats.precisionKills.basic.displayValue,
menagarierevivesPerformed = menagariestats.resurrectionsPerformed.basic.displayValue,
menagarierevivesRecieved = menagariestats.resurrectionsReceived.basic.displayValue,
menagarieaccidentalDeaths = menagariestats.suicides.basic.displayValue,
menagariebestWeapon = menagariestats.weaponBestType.basic.displayValue,
menagarieFusionRifle = menagariestats.weaponKillsFusionRifle.basic.displayValue,
menagarieGrenade = menagariestats.weaponKillsGrenade.basic.displayValue,
menagarieGrenadeLauncher = menagariestats.weaponKillsGrenadeLauncher.basic.displayValue,
menagarieHandCannon = menagariestats.weaponKillsHandCannon.basic.displayValue,
menagarieTraceRifle = menagariestats.weaponKillsTraceRifle.basic.displayValue,
menagarieMachineGun = menagariestats.weaponKillsMachineGun.basic.displayValue,
menagarieMelee = menagariestats.weaponKillsMelee.basic.displayValue,
menagariePulseRifle = menagariestats.weaponKillsPulseRifle.basic.displayValue,
menagarieRocketLauncher = menagariestats.weaponKillsRocketLauncher.basic.displayValue,
menagarieScoutRifle = menagariestats.weaponKillsScoutRifle.basic.displayValue,
menagarieShotgun = menagariestats.weaponKillsShotgun.basic.displayValue,
menagarieSniper = menagariestats.weaponKillsSniper.basic.displayValue,
menagarieSubmachingun = menagariestats.weaponKillsSubmachinegun.basic.displayValue,
menagarieSuper = menagariestats.weaponKillsSuper.basic.displayValue,
menagarieRelic = menagariestats.weaponKillsRelic.basic.displayValue,
menagarieSideArm = menagariestats.weaponKillsSideArm.basic.displayValue,
menagarieSword = menagariestats.weaponKillsSword.basic.displayValue,
menagarieAbility = menagariestats.weaponKillsAbility.basic.displayValue,
menagarieBeamRifle = menagariestats.weaponKillsBeamRifle.basic.displayValue,
menagarieAutoRifle = menagariestats.weaponKillsAutoRifle.basic.displayValue,
menagarieBow = menagariestats.weaponKillsBow.basic.displayValue;

$('#player-menagarie-Clears').text(menagarieClears);
$('#player-menagarie-assists').text(menagarieassists);
$('#player-menagarie-mostSingleGameKills').text(menagariemostSingleGameKills);
$('#player-menagarie-highestScore').text(menagariehighestScore);
$('#player-menagarie-Kills').text(menagarieKills);
$('#player-menagarie-orbsGenerated').text(menagarieorbsGenerated);
$('#player-menagarie-precisionKills').text(menagarieprecisionKills);
$('#player-menagarie-revivesPerformed').text(menagarierevivesPerformed);
$('#player-menagarie-revivesRecieved').text(menagarierevivesRecieved);
$('#player-menagarie-accidentalDeaths').text(menagarieaccidentalDeaths);
$('#player-menagarie-bestWeapon').text(menagariebestWeapon);
$('#player-menagarie-FusionRifle').text(menagarieFusionRifle);
$('#player-menagarie-Grenade').text(menagarieGrenade);
$('#player-menagarie-GrenadeLauncher').text(menagarieGrenadeLauncher);
$('#player-menagarie-HandCannon').text(menagarieHandCannon);
$('#player-menagarie-AutoRifle').text(menagarieAutoRifle);
$('#player-menagarie-TraceRifle').text(menagarieTraceRifle);
$('#player-menagarie-MachineGun').text(menagarieMachineGun);
$('#player-menagarie-Melee').text(menagarieMelee);
$('#player-menagarie-PulseRifle').text(menagariePulseRifle);
$('#player-menagarie-RocketLauncher').text(menagarieRocketLauncher);
$('#player-menagarie-ScoutRifle').text(menagarieScoutRifle);
$('#player-menagarie-Shotgun').text(menagarieShotgun);
$('#player-menagarie-Sniper').text(menagarieSniper);
$('#player-menagarie-Submachingun').text(menagarieSubmachingun);
$('#player-menagarie-Super').text(menagarieSuper);
$('#player-menagarie-Relic').text(menagarieRelic);
$('#player-menagarie-SideArm').text(menagarieSideArm);
$('#player-menagarie-Sword').text(menagarieSword);
$('#player-menagarie-Ability').text(menagarieAbility);
$('#player-menagarie-BeamRifle').text(menagarieBeamRifle);
$('#player-menagarie-Bow').text(menagarieBow);

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
});
