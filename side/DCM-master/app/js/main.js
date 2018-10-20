$(function(){
	console.log('Ready');

	showPlaytime();
	showBody();
	showCharacters();

	var minutesPlayedTotalOne;
	var minutesPlayedTotalTwo;
	var minutesPlayedTotalThree;

	function showBody() {
		setTimeout(function(){
			$("body").css("opacity", "1");
		}, 1000);
	};

	function showPlaytime() {
		setTimeout(function() {
			$(".totalPlaytime").html("Temps de jeu total : " + Math.round((parseInt(minutesPlayedTotalOne) + parseInt(minutesPlayedTotalTwo) + parseInt(minutesPlayedTotalThree) ) / 60) + " heures");
		}, 2300);
	};

	function showCharacters() {
		setTimeout(function(){
				$(".characters").css("opacity", "1");
		}, 2500);
	};

	//GetBungieAccount
	$.ajax({
		url: "http://www.bungie.net/Platform/User/GetBungieAccount/5962930/254/",
		async: true,
  		crossDomain: true,
		methode: "GET",
		dataType: "json",
		headers: {
			"x-api-key": "f37abf77de544293b9c2e5837a863462"
	}
	}).done(function(e) {
		response = e.Response;

		displayName = e.Response.bungieNetUser.displayName;
		console.log("Display Name :", displayName);
		$(".displayName p").html(displayName);

		profilePicture = response.bungieNetUser.profilePicturePath;
		console.log("Profile Picture :", profilePicture);
		$(".profilePicture img").attr("src", "https://www.bungie.net" + profilePicture);

		platform = response.destinyMemberships[0].membershipType;
		console.log("Platform :", platform);
		if(platform == 1) {
			$(".playerPlatform").append("<img src='../img/xboxLogo.png'>");
		} else if(platform == 2) {
			$(".playerPlatform").append("<img src='../img/psLogo.jpg'>");
		} else if(platofrm == 4) {
			$(".playerPlatform").append("<img src='../img/battlenetLogo.jpg'>");
		}
	});

	//////////////////////////////
	//      GetCharacter I     //
	/////////////////////////////

	$.ajax({
		url: "https://www.bungie.net/Platform/Destiny2/2/Profile/4611686018433071573/Character/2305843009262706284?components=200,205&?definitions=true",
		async: true,
  		crossDomain: true,
		methode: "GET",
		dataType: "json",
		headers: {
			"x-api-key": "f37abf77de544293b9c2e5837a863462"
		}
	}).done(function(e){
		console.log("I", e.Response);

		baseLevel = e.Response.character.data.baseCharacterLevel;
		console.log("Base Level I :", baseLevel);
		$(".hunter .baseLevel").html(baseLevel);

		classType = e.Response.character.data.classType;
		console.log("Class Type :", classType);
		if(classType == 0) {
			$(".hunter .class").html("Titan");
		} else if(classType == 1) {
			$(".hunter .class").html("Chasseur");
		} else {
			$(".hunter .class").html("Arcaniste");
		};

		dateLastPlayed = e.Response.character.data.dateLastPlayed;
		console.log("Last Connection :", dateLastPlayed);
		$(".lastConnection").html("Dernière Connexion : " + dateLastPlayed);

		emblemBackgroundPath = e.Response.character.data.emblemBackgroundPath;
		console.log("Emblem Bckg Path :", emblemBackgroundPath);
		$(".hunter .emblem img").attr("src", "https://www.bungie.net" + emblemBackgroundPath);

		emblemPath = e.Response.character.data.emblemPath;
		console.log("Emblem Path :", emblemPath);

		emblemColor = {
			"red": e.Response.character.data.emblemColor.red,
			"green": e.Response.character.data.emblemColor.green,
			"blue": e.Response.character.data.emblemColor.blue,
			"alpha": e.Response.character.data.emblemColor.alpha
		}
		console.log("Emblem Color :", emblemColor.red, emblemColor.green, emblemColor.blue, emblemColor.alpha);

		genderType = e.Response.character.data.genderType;
		console.log("Gender type :", genderType);
		if(genderType == 0) {
			$(".hunter .gender").html("Homme");
		} else {
			$(".hunter .gender").html("Femme");
		};

		light = e.Response.character.data.light;
		console.log("Light :", light);
		$(".hunter .lightLevel").html(light);

		minutesPlayedTotalOne = e.Response.character.data.minutesPlayedTotal;
		console.log("Total Play Time :", Math.round(minutesPlayedTotalOne / 60) + " Hours");
		$(".hunter .playtime").html(Math.round(minutesPlayedTotalOne / 60) + " heures");

		raceType = e.Response.character.data.raceType;
		console.log("Race Type :", raceType);
		if(raceType == 0) {
			$(".hunter .race").html("Humain");
		} else if(raceType == 1) {
			$(".hunter .race").html("Eveillé");
		} else {
			$(".hunter .race").html("Exo");
		};

		///// Equipment /////

		equip = e.Response.equipment.data.items[0];
		console.log("XXXXXXX", equip);
	});

	//////////////////////////////
	//     GetCharacter II     //
	////////////////////////////

	$.ajax({
		url: "https://www.bungie.net/Platform/Destiny2/2/Profile/4611686018433071573/Character/2305843009270122834?components=200,205",
		async: true,
  		crossDomain: true,
		methode: "GET",
		dataType: "json",
		headers: {
			"x-api-key": "f37abf77de544293b9c2e5837a863462"
		}
	}).done(function(e){
		console.log("II", e.Response);

		baseLevel = e.Response.character.data.baseCharacterLevel;
		console.log("Base Level I :", baseLevel);
		$(".warlock .baseLevel").html(baseLevel);

		classType = e.Response.character.data.classType;
		console.log("Class Type :", classType);
		if(classType == 0) {
			$(".warlock .class").html("Titan");
		} else if(classType == 1) {
			$(".warlock .class").html("Chasseur");
		} else {
			$(".warlock .class").html("Arcaniste");
		};

		dateLastPlayed = e.Response.character.data.dateLastPlayed;
		console.log("Last Connection :", dateLastPlayed);

		emblemBackgroundPath = e.Response.character.data.emblemBackgroundPath;
		console.log("Emblem Bckg Path :", emblemBackgroundPath);
		$(".warlock .emblem img").attr("src", "https://www.bungie.net" + emblemBackgroundPath);

		emblemPath = e.Response.character.data.emblemPath;
		console.log("Emblem Path :", emblemPath);

		emblemColor = {
			"red": e.Response.character.data.emblemColor.red,
			"green": e.Response.character.data.emblemColor.green,
			"blue": e.Response.character.data.emblemColor.blue,
			"alpha": e.Response.character.data.emblemColor.alpha
		}
		console.log("Emblem Color :", emblemColor.red, emblemColor.green, emblemColor.blue, emblemColor.alpha);

		genderType = e.Response.character.data.genderType;
		console.log("Gender type :", genderType);
		if(genderType == 0) {
			$(".warlock .gender").html("Homme");
		} else {
			$(".warlock .gender").html("Femme");
		};

		light = e.Response.character.data.light;
		console.log("Light :", light);
		$(".warlock .lightLevel").html(light);

		minutesPlayedTotalTwo = e.Response.character.data.minutesPlayedTotal;
		console.log("Total Play Time :", Math.round(minutesPlayedTotalTwo / 60) + " Hours");
		$(".warlock .playtime").html(Math.round(minutesPlayedTotalTwo / 60) + " heures");

		raceType = e.Response.character.data.raceType;
		console.log("Race Type :", raceType);
		if(raceType == 0) {
			$(".warlock .race").html("Humain");
		} else if(raceType == 1) {
			$(".warlock .race").html("Eveillé");
		} else {
			$(".warlock .race").html("Exo");
		};
	});

	//////////////////////////////
	//    GetCharacter III     //
	////////////////////////////

	$.ajax({
		url: "https://www.bungie.net/Platform/Destiny2/2/Profile/4611686018433071573/Character/2305843009283578937?components=200,205",
		async: true,
  		crossDomain: true,
		methode: "GET",
		dataType: "json",
		headers: {
			"x-api-key": "f37abf77de544293b9c2e5837a863462"
		}
	}).done(function(e){
		console.log("III", e.Response);

		baseLevel = e.Response.character.data.baseCharacterLevel;
		console.log("Base Level I :", baseLevel);
		$(".titan .baseLevel").html(baseLevel);

		classType = e.Response.character.data.classType;
		console.log("Class Type :", classType);
		if(classType == 0) {
			$(".titan .class").html("Titan");
		} else if(classType == 1) {
			$(".titan .class").html("Chasseur");
		} else {
			$(".titan .class").html("Arcaniste");
		};

		dateLastPlayed = e.Response.character.data.dateLastPlayed;
		console.log("Last Connection :", dateLastPlayed);

		emblemBackgroundPath = e.Response.character.data.emblemBackgroundPath;
		console.log("Emblem Bckg Path :", emblemBackgroundPath);
		$(".titan .emblem img").attr("src", "https://www.bungie.net" + emblemBackgroundPath);

		emblemPath = e.Response.character.data.emblemPath;
		console.log("Emblem Path :", emblemPath);

		emblemColor = {
			"red": e.Response.character.data.emblemColor.red,
			"green": e.Response.character.data.emblemColor.green,
			"blue": e.Response.character.data.emblemColor.blue,
			"alpha": e.Response.character.data.emblemColor.alpha
		}
		console.log("Emblem Color :", emblemColor.red, emblemColor.green, emblemColor.blue, emblemColor.alpha);

		genderType = e.Response.character.data.genderType;
		console.log("Gender type :", genderType);
		if(genderType == 0) {
			$(".titan .gender").html("Homme");
		} else {
			$(".titan .gender").html("Femme");
		};

		light = e.Response.character.data.light;
		console.log("Light :", light);
		$(".titan .lightLevel").html(light);

		minutesPlayedTotalThree = e.Response.character.data.minutesPlayedTotal;
		console.log("Total Play Time :", Math.round(minutesPlayedTotalThree / 60) + " Hours");
		$(".titan .playtime").html(Math.round(minutesPlayedTotalThree / 60) + " heures");

		raceType = e.Response.character.data.raceType;
		console.log("Race Type :", raceType);
		if(raceType == 0) {
			$(".titan .emblem .race").html("Humain");
		} else if(raceType == 1) {
			$(".titan .race").html("Eveillé");
		} else {
			$(".titan .race").html("Exo");
		};
	});
});
