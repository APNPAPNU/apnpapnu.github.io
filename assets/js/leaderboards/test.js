
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
		url: "https://www.bungie.net/Platform/Destiny2/2/Profile/4611686018428807356/?components=204",
		headers: {
		  "X-API-Key": "47b810e692d64237911c2cbe0d433cfe"
		},
		success: function(data) {
				  if (data.ErrorStatus === 'Success') {
          
car = data.Response.characterActivities.data[0].currentActivityModeType;
					  car1 = data.Response.characterActivities.data[1].currentActivityModeType;
					  car2 = data.Response.characterActivities.data[2].currentActivityModeType;
$('#car').text(car);
$('#car1').text(car1);
$('#car2').text(car2);

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
