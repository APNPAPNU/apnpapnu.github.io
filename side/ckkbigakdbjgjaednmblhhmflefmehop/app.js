function bindEventHandlers() {
    document.getElementById("playlist_button").addEventListener("click", showPlaylistSelection), document.getElementById("date_button").addEventListener("click", showDateSelection), document.getElementById("search_bar").addEventListener("search", displayNameSubmitted), document.getElementById("submit_button").addEventListener("click", displayNameSubmitted);
    var e = document.getElementById("welcome_screen"),
        t = document.getElementById("welcome_fragment");
    document.getElementById("button_welcome_close").onclick = function() {
        t.style.display = "none", e.style.display = "none"
    }, window.onclick = function(t) {
        t.target == e && (e.style.display = "none")
    }
}

function showPlaylistSelection() {
    var e = document.getElementById("popup_playlist_selection"),
        t = document.getElementById("playlist_button_container");
    if (1 == t.childElementCount) {
        for (var a = 9; 34 >= a; a++)
            if ("Crucible" != lookupGameMode(a)) {
                var i = document.createElement("div");
                i.className = "playlist_button";
                var n = document.createElement("img");
                n.className = "playlist_icon", n.src = "assets/icons/playlists/" + a + ".png";
                var l = document.createElement("p");
                l.className = "playlist_label", l.textContent = lookupGameMode(a), i.onclick = function(t) {
                    return function() {
                        gameMode = t, document.getElementById("playlist_button_label").innerHTML = lookupGameMode(t).replace(/ /g, "&nbsp;") + "&nbsp;&#9662;", document.getElementById("playlist_icon").src = "assets/icons/playlists/" + t + ".png", e.style.display = "none", displayName && displayNameSubmitted()
                    }
                }(a), i.appendChild(n), i.appendChild(l), t.appendChild(i)
            }
        document.getElementById("default_playlist_button").onclick = function() {
            gameMode = "AllPvP", document.getElementById("playlist_button_label").innerHTML = "All&nbsp;Crucible&nbsp;&#9662;", document.getElementById("playlist_icon").src = "assets/icons/playlists/crucible.png", e.style.display = "none", displayName && displayNameSubmitted()
        }
    }
    document.getElementById("button_playlist_selector_close").onclick = function() {
        e.style.display = "none"
    }, window.onclick = function(t) {
        t.target == e && (e.style.display = "none")
    }, e.style.display = "block"
}

function showDateSelection() {
    var e = document.getElementById("popup_date_selection"),
        t = document.getElementById("date_selection");
    document.getElementById("date_selection_submit").onclick = function() {
        t.value ? (activityPeriod = new Date(t.value.replace("-", "/")), document.getElementById("date_button_label").innerHTML = activityPeriod.toLocaleDateString() + "&nbsp;&#9662;") : (activityPeriod = null, document.getElementById("date_button_label").innerHTML = "Date&nbsp;&#9662;"), e.style.display = "none", displayName && displayNameSubmitted()
    }, document.getElementById("date_selection_clear").onclick = function() {
        t.value = null, activityPeriod = null, document.getElementById("date_button_label").innerHTML = "Date&nbsp;&#9662;", e.style.display = "none", displayName && displayNameSubmitted()
    }, document.getElementById("button_date_selection_close").onclick = function() {
        t.value ? (activityPeriod = new Date(t.value.replace("-", "/")), document.getElementById("date_button_label").innerHTML = activityPeriod.toLocaleDateString() + "&nbsp;&#9662;") : (activityPeriod = null, document.getElementById("date_button_label").innerHTML = "Date&nbsp;&#9662;"), e.style.display = "none"
    }, window.onclick = function(a) {
        a.target == e && (t.value ? (activityPeriod = new Date(t.value.replace("-", "/")), document.getElementById("date_button_label").innerHTML = activityPeriod.toLocaleDateString() + "&nbsp;&#9662;") : (activityPeriod = null, document.getElementById("date_button_label").innerHTML = "Date&nbsp;&#9662;"), e.style.display = "none")
    }, e.style.display = "block", t.focus()
}

function displayNameSubmitted() {
    activityPage = 0, selectedActivity = 0, activities = [];
    var e = document.getElementById("search_bar").value;
    if (e = e.replace(/[^a-zA-Z0-9_\-]/g, "")) {
        "none" != document.getElementById("welcome_screen").style.display && (document.getElementById("welcome_fragment").style.display = "none", document.getElementById("welcome_screen").style.display = "none");
        for (var t = document.getElementsByClassName("fragment"), a = 0; a < t.length; a++) t[a].style.visibility = "hidden";
        document.getElementById("search_bar").removeEventListener("search", displayNameSubmitted), document.getElementById("popup_loading_screen").style.display = "block", document.getElementById("date_selection").value && (activityPeriod = new Date(document.getElementById("date_selection").value.replace("-", "/"))), e != displayName ? (displayName = e, guardianCharacterIds = [], gameCharacterIds = [], getMembershipId()) : getActivityHistory()
    }
}

function getMembershipId() {
    bungieRequest("/SearchDestinyPlayer/All/" + displayName, processMembershipId, null)
}

function processMembershipId(e) {
    try {
        if (e) {
            var t = JSON.parse(e);
            if (1 == t.ErrorCode && t.Response.length > 0)
                if (t.Response.length > 1) {
                    var a = document.getElementById("popup_console_selection");
                    document.getElementById("button_xbox").onclick = function() {
                        membershipType = 1;
                        for (var e = 0; e < t.Response.length; e++) 1 == t.Response[e].membershipType && (membershipId = t.Response[e].membershipId);
                        getCharacterSummary(), a.style.display = "none"
                    }, document.getElementById("button_ps").onclick = function() {
                        membershipType = 2;
                        for (var e = 0; e < t.Response.length; e++) 2 == t.Response[e].membershipType && (membershipId = t.Response[e].membershipId);
                        getCharacterSummary(), a.style.display = "none"
                    }, document.getElementById("button_console_selector_close").onclick = function() {
                        a.style.display = "none", document.getElementById("search_bar").addEventListener("search", displayNameSubmitted), document.getElementById("popup_loading_screen").style.display = "none"
                    }, window.onclick = function(e) {
                        e.target == a && (a.style.display = "none", document.getElementById("search_bar").addEventListener("search", displayNameSubmitted), document.getElementById("popup_loading_screen").style.display = "none")
                    }, a.style.display = "block"
                } else membershipType = t.Response[0].membershipType, membershipId = t.Response[0].membershipId, getCharacterSummary();
            else document.getElementById("search_bar").addEventListener("search", displayNameSubmitted), document.getElementById("popup_loading_screen").style.display = "none", showErrorScreen("No Guardians with this name found. Try another?")
        } else raiseGenericError()
    } catch (i) {
        raiseGenericError()
    }
}

function getCharacterSummary() {
    bungieRequest("/" + membershipType + "/Account/" + membershipId + "/Summary/", processCharacterSummary, null)
}

function processCharacterSummary(e) {
    try {
        if (e) {
            var t = JSON.parse(e);
            if (1 == t.ErrorCode && t.Response.data.characters.length > 0) {
                for (var a = t.Response.data.characters, i = 0; i < a.length; i++) guardianCharacterIds[guardianCharacterIds.length] = a[i].characterBase.characterId;
                createCharacterSelectorBar(a), getActivityHistory()
            } else showErrorScreen("This Guardian seems to be missing. Try another?")
        } else raiseGenericError()
    } catch (n) {
        raiseGenericError()
    }
}

function getActivityHistory() {
    try {
        activities = [], numHistoriesProcessed = 0;
        for (var e = 0; e < guardianCharacterIds.length; e++) bungieRequest("/Stats/ActivityHistory/" + membershipType + "/" + membershipId + "/" + guardianCharacterIds[e] + "/?mode=" + gameMode + "&count=20&page=" + activityPage, processActivityHistory, guardianCharacterIds[e])
    } catch (t) {
        raiseGenericError()
    }
}

function processActivityHistory(e, t) {
    try {
        if (e) {
            var a = JSON.parse(e),
                i = a.Response.data.activities;
            if (1 == a.ErrorCode && i) {
                for (var n = 0; n < i.length; n++) {
                    var l = i[n].activityDetails.instanceId,
                        r = i[n].period;
                    activities.push({
                        id: l,
                        date: new Date(r),
                        character: t
                    })
                }
                numHistoriesProcessed++
            } else numHistoriesProcessed++
        }
        if (numHistoriesProcessed == guardianCharacterIds.length)
            if (activities.length > 0) {
                if (activities.sort(function(e, t) {
                        return e.date < t.date ? 1 : e.date > t.date ? -1 : 0
                    }), activities = activities.slice(0, 20), activityPeriod) {
                    for (var s = !1, n = 0; n < activities.length; n++)
                        if (activities[n].date <= activityPeriod) {
                            s = !0, selectedActivity = n;
                            break
                        }
                    if (!s) return activityPage++, void getActivityHistory();
                    activityPeriod = null
                }
                selectedActivity > activities.length && (selectedActivity = activities.length - 1), getActivityDetails()
            } else showErrorScreen("No Crucible data found. Try another search.")
    } catch (o) {
        raiseGenericError()
    }
}

function getActivityDetails() {
    bungieRequest("/Stats/PostGameCarnageReport/" + activities[selectedActivity].id + "/", processActivityDetails)
}

function processActivityDetails(e) {
    var t;
    try {
        e && (t = JSON.parse(e)), t && 1 == t.ErrorCode && t.Response.data.entries.length > 0 ? (carnageReport = t.Response.data, getMapDetails()) : selectedActivity < activities.length - 1 ? (selectedActivity++, getActivityDetails()) : raiseGenericError()
    } catch (a) {
        selectedActivity < activities.length - 1 ? (selectedActivity++, getActivityDetails()) : raiseGenericError()
    }
}

function getMapDetails() {
    bungieRequest("/Manifest/Activity/" + carnageReport.activityDetails.referenceId + "/", processMapDetails)
}

function processMapDetails(e) {
    var t;
    try {
        e && (t = JSON.parse(e)), t && 1 == t.ErrorCode && t.Response.data.activity ? (mapDetails = t.Response.data.activity, populateView()) : selectedActivity < activities.length - 1 ? (selectedActivity++, getActivityDetails()) : raiseGenericError()
    } catch (a) {
        selectedActivity < activities.length - 1 ? (selectedActivity++, getActivityDetails()) : raiseGenericError()
    }
}

function bungieRequest(e, t, a) {
    e = "https://www.bungie.net/Platform/Destiny" + e;
    var i = {
            headerName: "X-API-KEY",
            headerValue: "47b810e692d64237911c2cbe0d433cfec"
        },
        n = [i];
    httpGetRequest(e, n, "text", t, a)
}

function bungieImageRequest(e, t, a) {
    e = "https://www.bungie.net" + e, httpGetRequest(e, null, "blob", t, a)
}

function httpsGetRequest(e, t, a, i, n) {
    try {
        var l = new XMLHttpRequest;
        if (l.onreadystatechange = function() {
                4 == l.readyState && (200 == l.status ? i(l.response, n) : showErrorScreen("Error connecting to bungie.net. Please try again later."))
            }, l.open("GET", e, !0), t)
            for (var r = 0; r < t.length; r++) l.setRequestHeader(t[r].headerName, t[r].headerValue);
        a && (l.responseType = a), l.send(null)
    } catch (s) {
        showErrorScreen("Error connecting to bungie.net. Please try again later.")
    }
}

function createCharacterSelectorBar(e) {
    try {
        for (var t = document.getElementById("fragment_character_selector_bar"); t.firstChild;) t.removeChild(t.firstChild);
        if (guardianCharacterIds.length > 1) {
            var a = createCharacterSelector(guardianCharacterIds, "/img/profile/avatars/shield1.jpg", "All");
            t.appendChild(a)
        }
        for (var i = 0; i < guardianCharacterIds.length; i++) {
            var n = createCharacterSelector([guardianCharacterIds[i]], e[i].emblemPath, getClassName(e[i].characterBase.classType) + " " + e[i].characterLevel);
            t.appendChild(n)
        }
        t.firstChild.style.background = "#566893"
    } catch (l) {
        raiseGenericError()
    }
}

function createCharacterSelector(e, t, a) {
    var i = document.createElement("div");
    i.className = "button_character_selector", i.associatedId = e, i.onclick = function() {
        for (var e = document.getElementsByClassName("button_character_selector"), t = 0; t < e.length; t++) e[t].style.backgroundColor = "#374158";
        this.style.backgroundColor = "#566893", guardianCharacterIds = this.associatedId, activityPage = 0, selectedActivity = 0, displayNameSubmitted(), document.getElementById("popup_loading_screen").style.display = "block"
    };
    var n = document.createElement("img");
    n.className = "selector_image", bungieImageRequest(t, function(e) {
        n.src = window.URL.createObjectURL(e)
    }, null);
    var l = document.createElement("h3");
    return l.className = "selector_label", l.textContent = a, i.appendChild(n), i.appendChild(l), i
}

function getClassName(e) {
    switch (e) {
        case 0:
            return "Titan";
        case 1:
            return "Hunter";
        case 2:
            return "Warlock"
    }
}

function populateView() {
    try {
        setUpDonationLink(), getCharacterIds(), getPlayerInfo(), updatePlayerBar(), createPlayerList(), updateStatsSummary(), updateMedalList(), updateWeaponsSummary(), updateMapBar();
        for (var e = document.getElementsByClassName("fragment"), t = 0; t < e.length; t++) e[t].style.visibility = "visible";
        document.getElementById("search_bar").addEventListener("search", displayNameSubmitted), document.getElementById("popup_loading_screen").style.display = "none"
    } catch (a) {
        raiseGenericError()
    }
}

function updateView() {
    try {
        getPlayerInfo(), updatePlayerBar(), updateStatsSummary(), updateMedalList(), updateWeaponsSummary()
    } catch (e) {
        raiseGenericError()
    }
}

function setUpDonationLink() {
    var e = document.getElementById("donation_button");
    e.onclick = function() {
        window.open("https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=55PS85CV45DAN&lc=AU&item_name=Destiny%20Carnage%20Report&currency_code=AUD&bn=PP%2dDonationsBF%3abtn_donate_SM%2egif%3aNonHosted", "_blank")
    }, e.style.visibility = "visible"
}

function getCharacterIds() {
    gameCharacterIds = [], selectedCharacterId = activities[selectedActivity].character, gameCharacterIds[0] = activities[selectedActivity].character, selectedCharacter = 0;
    for (var e = 0; e < carnageReport.entries.length; e++) {
        var t = carnageReport.entries[e].characterId;
        selectedCharacterId != t && (gameCharacterIds[gameCharacterIds.length] = t)
    }
}

function getPlayerInfo() {
    for (var e = 0; e < carnageReport.entries.length; e++) carnageReport.entries[e].characterId == selectedCharacterId && (playerInfo = carnageReport.entries[e])
}

function updatePlayerBar() {
    var e = document.getElementById("fragment_player_bar"),
        t = document.getElementById("player_bar");
    e.removeChild(t);
    var a = createPlayerBar(playerInfo, "top");
    a.id = "player_bar", e.appendChild(a), document.getElementById("player_bar_arrow_button_left").onclick = function() {
        selectedCharacter > 0 ? selectedCharacter-- : selectedCharacter = gameCharacterIds.length - 1, selectedCharacterId = gameCharacterIds[selectedCharacter], updateView()
    }, document.getElementById("player_bar_arrow_button_right").onclick = function() {
        selectedCharacter < gameCharacterIds.length - 1 ? selectedCharacter++ : selectedCharacter = 0, selectedCharacterId = gameCharacterIds[selectedCharacter], updateView()
    }, e.style.visibility = "visible"
}

function createPlayerBar(e, t) {
    var a = document.createElement("div");
    a.className = "player_bar_" + t, a.characterId = e.characterId;
    var i = document.createElement("div");
    i.className = "player_bar_" + t + "_name_class_emblem";
    var n = document.createElement("div");
    n.className = "player_bar_" + t + "_name_class";
    var l = document.createElement("h1");
    l.className = "player_bar_" + t + "_name", l.textContent = e.player.destinyUserInfo.displayName;
    var r = document.createElement("h2");
    r.className = "player_bar_" + t + "_class", r.textContent = e.player.characterClass + " " + e.player.characterLevel;
    var s = document.createElement("div");
    s.className = "player_bar_" + t + "_light";
    var o = document.createElement("img");
    o.className = "player_bar_" + t + "_light_icon", o.src = "assets/icons/light.png";
    var c = document.createElement("h1");
    c.className = "player_bar_" + t + "_light_level", c.textContent = e.player.lightLevel;
    var d = document.createElement("img");
    return d.className = "player_bar_" + t + "_emblem", d.onload = function() {
        var e = document.createElement("canvas");
        e.width = 96, e.height = 96;
        var t = e.getContext("2d");
        t.drawImage(this, 0, 0);
        var i = t.getImageData(1, 1, 1, 1).data;
        a.style.background = "-webkit-linear-gradient(left, rgba(" + i[0] + "," + i[1] + "," + i[2] + ",1), rgba(" + i[0] + "," + i[1] + "," + i[2] + ",1) 60%, black";
        var n = Math.sqrt(.241 * Math.pow(i[0], 2) + .691 * Math.pow(i[1], 2) + .068 * Math.pow(i[2], 2));
        n > 130 ? (l.style.color = "black", r.style.color = "black") : (l.style.color = "white", r.style.color = "white")
    }, bungieImageRequest(e.player.destinyUserInfo.iconPath, function(e) {
        d.src = window.URL.createObjectURL(e)
    }), n.appendChild(l), n.appendChild(r), s.appendChild(o), s.appendChild(c), i.appendChild(d), i.appendChild(n), a.appendChild(i), a.appendChild(s), a
}

function createPlayerList() {
    var e = (document.getElementById("fragment_player_list"), document.getElementById("alpha_list")),
        t = document.getElementById("bravo_list");
    for (t.style.display = "none", document.getElementById("bravo_list_header").style.display = "none", e.style.display = "none", document.getElementById("alpha_list_header").style.display = "none"; e.firstChild;) e.removeChild(e.firstChild);
    for (; t.firstChild;) t.removeChild(t.firstChild);
    for (var a = 0; a < gameCharacterIds.length; a++) {
        for (var i, n = 0; n < carnageReport.entries.length; n++) carnageReport.entries[n].characterId == gameCharacterIds[a] && (i = carnageReport.entries[n]);
        var l = createPlayerBar(i, "list"),
            r = function(e) {
                return function() {
                    selectedCharacterId = e, updateView()
                }
            }(gameCharacterIds[a]);
        l.onclick = r, i.values.team && "Alpha" == i.values.team.basic.displayValue || 0 == carnageReport.teams.length || carnageReport.teams.length > 2 ? (e.style.display = "block", document.getElementById("alpha_list_header").style.display = "flex", e.appendChild(l)) : (t.style.display = "block", document.getElementById("bravo_list_header").style.display = "flex", t.appendChild(l));
        for (var n = 0; n < carnageReport.teams.length; n++) "Alpha" == carnageReport.teams[n].teamName ? (document.getElementById("alpha_score").textContent = carnageReport.teams[n].score.basic.displayValue, document.getElementById("alpha_standing").textContent = carnageReport.teams[n].standing.basic.displayValue, "Victory" == carnageReport.teams[n].standing.basic.displayValue ? (document.getElementById("alpha_list_header").style.order = "0", document.getElementById("alpha_list").style.order = "1") : "Defeat" == carnageReport.teams[n].standing.basic.displayValue && (document.getElementById("alpha_list_header").style.order = "2", document.getElementById("alpha_list").style.order = "3")) : "Bravo" == carnageReport.teams[n].teamName && (document.getElementById("bravo_score").textContent = carnageReport.teams[n].score.basic.displayValue, document.getElementById("bravo_standing").textContent = carnageReport.teams[n].standing.basic.displayValue, "Victory" == carnageReport.teams[n].standing.basic.displayValue ? (document.getElementById("bravo_list_header").style.order = "0", document.getElementById("bravo_list").style.order = "1") : "Defeat" == carnageReport.teams[n].standing.basic.displayValue && (document.getElementById("bravo_list_header").style.order = "2", document.getElementById("bravo_list").style.order = "3"));
        (0 == carnageReport.teams.length || carnageReport.teams.length > 2) && (document.getElementById("alpha_list_header").style.display = "none", document.getElementById("bravo_list_header").style.display = "none")
    }
}

function updateStatsSummary() {
    for (var e = document.getElementById("fragment_stats_summary"), t = []; e.firstChild;) e.removeChild(e.firstChild);
    playerInfo.values.score && t.push({
        label: "Score",
        value: playerInfo.values.score.basic.displayValue
    }), playerInfo.extended.values.tagCaptures && t.push({
        label: "Crests Captured",
        value: playerInfo.extended.values.tagCaptures.basic.displayValue
    }), playerInfo.extended.values.recoveredTeammateTags && t.push({
        label: "Crests Denied",
        value: playerInfo.extended.values.recoveredTeammateTags.basic.displayValue
    }), playerInfo.extended.values.lostTagToOpponent && t.push({
        label: "Crests Lost",
        value: playerInfo.extended.values.lostTagToOpponent.basic.displayValue
    }), playerInfo.extended.values.tagsCapturedPerTagLost && t.push({
        label: "Crest Ratio",
        value: playerInfo.extended.values.tagsCapturedPerTagLost.basic.value.toFixed(2)
    }), playerInfo.values.kills && t.push({
        label: "Kills",
        value: playerInfo.values.kills.basic.displayValue
    }), playerInfo.values.deaths && t.push({
        label: "Deaths",
        value: playerInfo.values.deaths.basic.displayValue
    }), playerInfo.values.assists && t.push({
        label: "Assists",
        value: playerInfo.values.assists.basic.displayValue
    }), playerInfo.values.killsDeathsRatio && t.push({
        label: "KD Ratio",
        value: playerInfo.values.killsDeathsRatio.basic.displayValue
    }), playerInfo.values.killsDeathsAssists && t.push({
        label: "K+AD Ratio",
        value: playerInfo.values.killsDeathsAssists.basic.displayValue
    }), playerInfo.extended.values.resurrectionsPerformed && t.push({
        label: "Revives",
        value: playerInfo.extended.values.resurrectionsPerformed.basic.displayValue
    }), playerInfo.extended.values.longestKillSpree && t.push({
        label: "Best Spree",
        value: playerInfo.extended.values.longestKillSpree.basic.displayValue
    }), playerInfo.extended.values.longestSingleLife && t.push({
        label: "Longest Life",
        value: playerInfo.extended.values.longestSingleLife.basic.displayValue
    }), playerInfo.extended.values.orbsDropped && t.push({
        label: "Orbs Dropped",
        value: playerInfo.extended.values.orbsDropped.basic.displayValue
    }), playerInfo.extended.values.zonesCaptured && t.push({
        label: "Zones Captured",
        value: playerInfo.extended.values.zonesCaptured.basic.displayValue
    }), playerInfo.extended.values.suicides && t.push({
        label: "Suicides",
        value: playerInfo.extended.values.suicides.basic.displayValue
    }), playerInfo.extended.values.averageKillDistance && t.push({
        label: "Average Kill Distance",
        value: playerInfo.extended.values.averageKillDistance.basic.displayValue
    });
    for (var a = 0; a < t.length; a++) {
        var i = document.createElement("div");
        i.className = "stats_entry";
        var n = document.createElement("h3");
        n.className = "stats_label", n.textContent = t[a].label;
        var l = document.createElement("p");
        l.className = "stats_value", l.textContent = t[a].value, i.appendChild(n), i.appendChild(l), document.getElementById("fragment_stats_summary").appendChild(i)
    }
}

function updateMedalList() {
    for (var e = document.getElementById("fragment_medal_list"); e.firstChild;) e.removeChild(e.firstChild);
    medalCatalogue || createMedalCatalogue();
    for (var t in playerInfo.extended.values)
        if ("medals" == t.substring(0, 6)) {
            var a = t.substring(6, t.length).toLowerCase(),
                i = playerInfo.extended.values[t].basic.displayValue,
                n = document.createElement("div");
            n.className = "medal";
            var l = document.createElement("img");
            l.className = "medal_image", l.src = "/assets/icons/medals/" + a + ".png";
            var r = document.createElement("div");
            r.className = "medal_quantity", r.textContent = "x" + i;
            var s = document.createElement("div");
            s.className = "medal_summary";
            var o = document.createElement("h2");
            o.className = "medal_summary_title", o.textContent = medalCatalogue[a].title;
            var c = document.createElement("img");
            c.className = "medal_summary_image", c.src = "/assets/icons/medals/" + a + ".png";
            var d = document.createElement("p");
            d.className = "medal_summary_description", d.textContent = medalCatalogue[a].description, s.appendChild(o), s.appendChild(c), s.appendChild(d), n.appendChild(l), n.appendChild(r), n.appendChild(s), document.getElementById("fragment_medal_list").appendChild(n)
        }
}

function updateWeaponsSummary() {
    for (var e = document.getElementById("fragment_weapons_summary"); e.firstChild;) e.removeChild(e.firstChild);
    if (playerInfo.extended.weapons)
        for (var t = playerInfo.extended.weapons, a = 0; a < t.length; a++) {
            var i = document.createElement("div");
            i.className = "weapon_entry";
            var n = document.createElement("img");
            n.className = "weapon_icon";
            var l = document.createElement("h2");
            l.className = "weapon_name";
            var r = document.createElement("div");
            r.className = "weapon_kills_container";
            var s = document.createElement("h3");
            s.className = "weapon_kills_label", s.textContent = "Kills";
            var o = document.createElement("p");
            o.className = "weapon_kills", o.textContent = t[a].values.uniqueWeaponKills.basic.displayValue, r.appendChild(s), r.appendChild(o);
            var c = document.createElement("div");
            c.className = "weapon_precision_kills_container";
            var d = document.createElement("h3");
            d.className = "weapon_precision_kills_label", d.textContent = "Precision";
            var p = document.createElement("p");
            p.className = "weapon_precision_kills", p.textContent = t[a].values.uniqueWeaponPrecisionKills.basic.displayValue, c.appendChild(d), c.appendChild(p);
            var m = function(e, t, a) {
                return function(i) {
                    i = JSON.parse(i), i.Response.data && (i = i.Response.data, t.textContent = i.inventoryItem.itemName, bungieImageRequest(i.inventoryItem.icon, function(t) {
                        a.onload = function() {
                            var t = document.createElement("canvas");
                            t.width = 75, t.height = 75;
                            var a = t.getContext("2d");
                            a.drawImage(this, 0, 0);
                            var i = a.getImageData(1, 1, 1, 1).data;
                            e.style.background = "rgb(" + i[0] + "," + i[1] + "," + i[2] + ")";
                            var n = Math.sqrt(.241 * Math.pow(i[0], 2) + .691 * Math.pow(i[1], 2) + .068 * Math.pow(i[2], 2));
                            n > 130 ? (e.children[1].style.color = "black", e.children[2].children[0].style.color = "black", e.children[2].children[1].style.color = "black", e.children[3].children[0].style.color = "black", e.children[3].children[1].style.color = "black") : (e.children[1].style.color = "white", e.children[2].children[0].style.color = "white", e.children[2].children[1].style.color = "white", e.children[3].children[0].style.color = "white", e.children[3].children[1].style.color = "white")
                        }, t && (a.src = window.URL.createObjectURL(t))
                    }, null))
                }
            }(i, l, n);
            bungieRequest("/Manifest/6/" + t[a].referenceId, m, null), i.appendChild(n), i.appendChild(l), i.appendChild(r), i.appendChild(c), e.appendChild(i)
        }
    if (playerInfo.extended.values.weaponKillsMelee) {
        var u = document.createElement("div");
        u.className = "weapon_entry";
        var y = document.createElement("img");
        y.className = "weapon_icon", y.src = "/assets/icons/melee.png";
        var h = document.createElement("h2");
        h.className = "weapon_name", h.textContent = "Melee";
        var g = document.createElement("div");
        g.className = "weapon_kills_container";
        var v = document.createElement("h3");
        v.className = "weapon_kills_label", v.textContent = "Kills";
        var f = document.createElement("p");
        f.className = "weapon_kills", f.textContent = playerInfo.extended.values.weaponKillsMelee.basic.displayValue, g.appendChild(v), g.appendChild(f), u.appendChild(y), u.appendChild(h), u.appendChild(g), e.appendChild(u)
    }
    if (playerInfo.extended.values.weaponKillsGrenade) {
        var b = document.createElement("div");
        b.className = "weapon_entry";
        var _ = document.createElement("img");
        _.className = "weapon_icon", _.src = "/assets/icons/grenade.png";
        var I = document.createElement("h2");
        I.className = "weapon_name", I.textContent = "Grenade";
        var w = document.createElement("div");
        w.className = "weapon_kills_container";
        var C = document.createElement("h3");
        C.className = "weapon_kills_label", C.textContent = "Kills";
        var E = document.createElement("p");
        E.className = "weapon_kills", E.textContent = playerInfo.extended.values.weaponKillsGrenade.basic.displayValue, w.appendChild(C), w.appendChild(E), b.appendChild(_), b.appendChild(I), b.appendChild(w), e.appendChild(b)
    }
    if (playerInfo.extended.values.weaponKillsSuper) {
        var k = document.createElement("div");
        k.className = "weapon_entry";
        var B = document.createElement("img");
        B.className = "weapon_icon", B.src = "/assets/icons/super.png";
        var S = document.createElement("h2");
        S.className = "weapon_name", S.textContent = "Super";
        var R = document.createElement("div");
        R.className = "weapon_kills_container";
        var N = document.createElement("h3");
        N.className = "weapon_kills_label", N.textContent = "Kills";
        var A = document.createElement("p");
        A.className = "weapon_kills", A.textContent = playerInfo.extended.values.weaponKillsSuper.basic.displayValue, R.appendChild(N), R.appendChild(A), k.appendChild(B), k.appendChild(S), k.appendChild(R), e.appendChild(k)
    }
}

function updateMapBar() {
    var e = document.getElementById("map_name");
    e.textContent = mapDetails.activityName;
    var t = document.getElementById("map_location");
    t.textContent = mapDetails.activityDescription;
    var a = document.getElementById("game_type");
    a.textContent = lookupGameMode(carnageReport.activityDetails.mode);
    var i = document.getElementById("game_timestamp"),
        n = new Date(carnageReport.period);
    i.textContent = n.toDateString() + ", " + n.toLocaleTimeString();
    var l = document.getElementById("map_bar_image");
    bungieImageRequest(mapDetails.pgcrImage, function(e) {
        l.src = window.URL.createObjectURL(e)
    }), document.getElementById("map_bar_arrow_button_left").onclick = function() {
        selectedActivity > 0 ? (selectedActivity--, getActivityDetails(), document.getElementById("popup_loading_screen").style.display = "block") : activityPage > 0 && (activityPage--, selectedActivity = 19, getActivityHistory(), document.getElementById("popup_loading_screen").style.display = "block")
    }, document.getElementById("map_bar_arrow_button_double_left").onclick = function() {
        activityPage > 0 && (activityPage--, getActivityHistory(), document.getElementById("popup_loading_screen").style.display = "block")
    }, 0 == activityPage ? (document.getElementById("map_arrow_double_left_1").style["border-color"] = "grey", document.getElementById("map_arrow_double_left_2").style["border-color"] = "grey", document.getElementById("left_double_arrow_label").style.color = "grey", 0 == selectedActivity ? document.getElementById("map_arrow_left").style["border-color"] = "grey" : document.getElementById("map_arrow_left").style["border-color"] = "floralwhite") : (document.getElementById("map_arrow_left").style["border-color"] = "floralwhite", document.getElementById("map_arrow_double_left_1").style["border-color"] = "floralwhite", document.getElementById("map_arrow_double_left_2").style["border-color"] = "floralwhite", document.getElementById("left_double_arrow_label").style.color = "floralwhite"), document.getElementById("map_bar_arrow_button_right").onclick = function() {
        selectedActivity < activities.length - 1 ? (selectedActivity++, getActivityDetails()) : (activityPage++, selectedActivity = 0, getActivityHistory()), document.getElementById("popup_loading_screen").style.display = "block"
    }, document.getElementById("map_bar_arrow_button_double_right").onclick = function() {
        activityPage++, getActivityHistory(), document.getElementById("popup_loading_screen").style.display = "block"
    }
}

function lookupGameMode(e) {
    switch (e) {
        case 8:
            return "Crucible Introduction";
        case 9:
            return "Skirmish";
        case 10:
            return "Control";
        case 11:
            return "Salvage";
        case 12:
            return "Clash";
        case 13:
            return "Rumble";
        case 14:
            return "Trials Of Osiris";
        case 15:
            return "Doubles";
        case 19:
            return "Iron Banner";
        case 23:
            return "Elimination";
        case 24:
            return "Rift";
        case 26:
            return "Mayhem Clash";
        case 27:
            return "Mayhem Rumble";
        case 28:
            return "Zone Control";
        case 34:
            return "Supremacy";
        default:
            return "Crucible"
    }
}

function createMedalCatalogue() {
    medalCatalogue = {
        radianceshutdown: {
            title: "...And Stay Down!",
            description: "Defeat a Warlock within 3 seconds of their self-reviving with Radiance."
        },
        eliminationwipequick: {
            title: "Ace",
            description: "As a fireteam, defeat the enemy team in the first 30 seconds of a round."
        },
        activitycompletevictoryrumble: {
            title: "Alone at the Top",
            description: "Win a Rumble match."
        },
        buddyresurrectionspree: {
            title: "Angel of Light",
            description: "In a single life, revive 5 downed allies."
        },
        activitycompletevictoryeliminationshutout: {
            title: "Annihilation",
            description: "As a team, win an Elimination match without being wiped."
        },
        artifactkillspree: {
            title: "Armed and Dangerous",
            description: "Defeat 5 opposing Guardians in a single Armament run."
        },
        dominionzoneoffensekillspree: {
            title: "At Any Cost",
            description: "In a single life, kill 3 enemies while capturing a Control zone."
        },
        weaponautoriflekillspree: {
            title: "Automatic",
            description: "In a single life, defeat 5 opposing Guardians with an Auto Rifle."
        },
        avenger: {
            title: "Avenger",
            description: "Avenge a defeated teammate."
        },
        zonecapturedbinitial: {
            title: "B-Line",
            description: "In a Control match, capture Zone B first."
        },
        comebackkill: {
            title: "Back in Action",
            description: "Kill an enemy after 5 consecutive lives with no kills."
        },
        abilitywarddeflect: {
            title: "Blast Shield",
            description: "Block fatal damage within 2 seconds of casting Ward of Dawn."
        },
        killmulti4: {
            title: "Breaker",
            description: "Rapidly kill 4 enemies."
        },
        weaponshotgunkillspree: {
            title: "Buckshot Bruiser",
            description: "Kill 3 enemies with a Shotgun without switching weapons or reloading."
        },
        vehicleinterceptorkillsplatter: {
            title: "Bulldozer",
            description: "Run over an enemy with an Interceptor."
        },
        activitycompletevictoryeliminationperfect: {
            title: "Bulletproof",
            description: "As a team, win an Elimination match where no one on your team dies."
        },
        killheadshot: {
            title: "Bullseye",
            description: "In a single life, kill 3 enemies with headshots."
        },
        vehicleinterceptorkillspree: {
            title: "Chariot of Fire",
            description: "In a single life, kill 5 players while driving an Interceptor."
        },
        salvageprobeoffensekillmulti: {
            title: "Clean Sweep",
            description: "Rapidly kill 3 enemies near their own probe."
        },
        singularityrunnerdefensemulti: {
            title: "Clear a Path",
            description: "In a single Spark run, defeat 2 enemies who damage your team's Runner."
        },
        activitycompletevictoryextralastsecond: {
            title: "Clutch",
            description: "Win a match after trailing with 2 seconds remaining."
        },
        activitycompletevictorylastsecond: {
            title: "Comeback",
            description: "Win a match after trailing by 500 with 30 seconds remaining OR when the enemy was nearing victory."
        },
        abilityhavockillmulti: {
            title: "Cry Havoc",
            description: "Kill 3 enemies with a single Fist of Havoc."
        },
        weaponhandcannonheadshotspree: {
            title: "Dead Man's Hand",
            description: "In a single life, kill 3 opponents with Hand Cannon headshots."
        },
        activitycompletevictoryblowout: {
            title: "Decisive Victory",
            description: "In a match that reaches the score limit, double the opposing team's score."
        },
        dominionzonedefensekillspree: {
            title: "Defender",
            description: "In a single life, score 5 Zone Defense kills."
        },
        singularityflagholderkilledclose: {
            title: "Denied",
            description: "Defeat an enemy Spark Runner near the Rift."
        },
        salvageprobecanceled: {
            title: "Disruption",
            description: "In Salvage, neutralize the enemy probe."
        },
        dominationkill: {
            title: "Domination",
            description: "Kill an enemy while your team holds all 3 Control zones."
        },
        killmulti2: {
            title: "Double Down",
            description: "Rapidly kill 2 enemies."
        },
        killjoymega: {
            title: "End of the Line",
            description: "Stop an enemy on a 15+ kill streak."
        },
        killassistspreeffa: {
            title: "Enemy of My Enemy",
            description: "In a single life, catch 3 enemies in crossfire."
        },
        killjoy: {
            title: "Enforcer",
            description: "Shut down an enemy's kill streak."
        },
        vehiclepikekillspree: {
            title: "Fallen Angel",
            description: "In a single life, kill 5 enemies while driving the Pike."
        },
        weaponpulseriflekillspree: {
            title: "Finger on the Pulse",
            description: "In a single life, defeat 5 opposing Guardians with a Pulse Rifle."
        },
        firstblood: {
            title: "First Blood",
            description: "Score the first kill in a match."
        },
        eliminationlaststandrevive: {
            title: "From the Brink",
            description: "Revive an ally as the last Guardian standing on your team."
        },
        grenadekillstick: {
            title: "Get it Off!",
            description: "Kill an enemy by sticking them with a grenade."
        },
        vehiclefotcturretkillspree: {
            title: "Gunner",
            description: "In a single life, kill 5 players with a Turret."
        },
        abilityshadowstrikekillmulti: {
            title: "Gutted",
            description: "Kill 3 enemies in a single Arc Blade charge."
        },
        abilitythermalhammerkillmulti: {
            title: "Hammer and Tongs",
            description: "Defeat 3 opposing Guardians with a single Hammer of Sol activation."
        },
        dominionzonecapturedspree: {
            title: "Hat Trick",
            description: "In a single life, capture 3 Control zones."
        },
        hazardkill: {
            title: "Hazard Pay",
            description: "Kill an enemy with an exploding object."
        },
        activitycompletevictoryrumblesuddendeath: {
            title: "Heartbreaker",
            description: "Win a Rumble match in Overtime."
        },
        hunterkillinvisible: {
            title: "I See You",
            description: "Kill an invisible enemy."
        },
        salvageprobedefensekill: {
            title: "Im-probe-able",
            description: "Kill an enemy near the allied probe."
        },
        singularityflagholderkilledmulti: {
            title: "Immovable Object",
            description: "Defeat an opposing Spark Runner 3 times in a single match."
        },
        teamdominationhold1m: {
            title: "Lockdown",
            description: "As a team, hold all 3 Control zones for 60 seconds."
        },
        activitycompletelonewolf: {
            title: "Lone Wolf",
            description: "In a team game, finish first on your team with no assists."
        },
        weaponmachinegunkillspree: {
            title: "Machine Lord",
            description: "Kill 3 enemies with a Machine Gun without switching weapons or reloading."
        },
        activitycompletedeathless: {
            title: "Mark of the Unbroken",
            description: "Complete a match with a minimum of 15 kills without dying or being downed."
        },
        weaponsniperrifleheadshotspree: {
            title: "Marksman",
            description: "Kill 2 enemies with Sniper Rifle headshots without switching weapons or reloading."
        },
        weaponfusionriflekillspree: {
            title: "Master Blaster",
            description: "Kill 3 opponents with a Fusion Rifle without switching weapons or reloading."
        },
        buddyresurrectionmulti: {
            title: "Medic!",
            description: "Quickly revive 2 downed allies."
        },
        killspree1: {
            title: "Merciless",
            description: "In a single life, kill 5 enemies."
        },
        winningscore: {
            title: "Nail in the Coffin",
            description: "Score the winning points in a match."
        },
        closecalltalent: {
            title: "Narrow Escape",
            description: "Kill an enemy who nearly killed you."
        },
        eliminationlaststandkill: {
            title: "Never Say Die",
            description: "Kill an enemy as the last Guardian standing on your team."
        },
        vehiclesparrowkillsplatter: {
            title: "Never Speak of This Again",
            description: "Run over an enemy with a Sparrow."
        },
        activitycompletevictorymercy: {
            title: "No Mercy",
            description: "Win a match by invoking the mercy rule."
        },
        activitycompletecontrolmostcaptures: {
            title: "Objectively Correct",
            description: "In a Control match, capture the most zones."
        },
        activitycompletehighestscorelosing: {
            title: "On The Bright Side...",
            description: "Achieve the highest score in a match despite your team's loss."
        },
        rescue: {
            title: "Overwatch",
            description: "Defend an ally from enemy fire."
        },
        paybackkill: {
            title: "Payback",
            description: "Defeat the opposing Guardian who killed you last."
        },
        activitycompletesingularityperfectrunner: {
            title: "Perfect Runner",
            description: "Complete a Rift match with 2 or more carries and a 100% capture rate."
        },
        killspreenodamage: {
            title: "Phantom",
            description: "Defeat 7 opposing Guardians while taking no damage."
        },
        killpostmortem: {
            title: "Postmortem",
            description: "Kill one or more enemies after you have died."
        },
        killmulti6: {
            title: "Reaper",
            description: "Rapidly kill 6 enemies."
        },
        killspree3: {
            title: "Reign of Terror",
            description: "In a single life, kill 15 enemies."
        },
        killspree2: {
            title: "Relentless",
            description: "In a single life, kill 10 enemies."
        },
        salvagezonecapturedspree: {
            title: "Relic Hunter",
            description: "Help capture 3 Relic zones in a Salvage match."
        },
        activitycompletesalvagemostcancels: {
            title: "Saboteur",
            description: "In a Salvage match, neutralize the most probes."
        },
        salvageprobecompletespree: {
            title: "Salvage Crew",
            description: "As a team, salvage 3 relics in a match."
        },
        abilityradiancegrenadekillmulti: {
            title: "Scorched Earth",
            description: "Kill 3 enemies with grenades while Radiance is active."
        },
        weaponscoutriflekillspree: {
            title: "Scout's Honor",
            description: "In a single life, defeat 5 opposing Guardians with a Scout Rifle."
        },
        killmulti7: {
            title: "Seventh Column",
            description: "Defy probability by rapidly killing 7 enemies."
        },
        activitycompletesalvageshutout: {
            title: "Shutout",
            description: "As a team, stop your opponents from salvaging any Relics."
        },
        weaponsidearmkillspree: {
            title: "Sidekick",
            description: "In a single life, defeat 3 opposing Guardians with a Sidearm."
        },
        vehiclepikekillsplatter: {
            title: "Skewered",
            description: "Run over an enemy with a Pike."
        },
        killmulti5: {
            title: "Slayer",
            description: "Rapidly kill 5 enemies."
        },
        abilitynovabombkillmulti: {
            title: "Space Magic",
            description: "Kill 3 enemies with a single Nova Bomb."
        },
        weaponrocketlauncherkillspree: {
            title: "Splash Damage",
            description: "Kill 3 enemies with rockets in less than a second."
        },
        meleekillhunterthrowingknifeheadshot: {
            title: "Stick Around",
            description: "Fatally headshot an enemy with a Throwing Knife."
        },
        abilityarclightningkillmulti: {
            title: "Storm Bringer",
            description: "Defeat 3 opposing Guardians with a single Stormtrance activation."
        },
        teamkillspree: {
            title: "Strength of the Wolf",
            description: "As a team, kill 10 enemies with no one on your team dying."
        },
        activitycompletevictoryrumbleblowout: {
            title: "Sum of All Tears",
            description: "Win a Rumble match with a score greater than the sum of your enemies."
        },
        weaponswordkillspree: {
            title: "Sword at a Gun Fight",
            description: "Rapidly defeat 3 enemies with a Heavy Sword."
        },
        activitycompletehighestscorewinning: {
            title: "The Best...Around",
            description: "Achieve the highest score in a match while leading your team to victory."
        },
        activitycompletecycle: {
            title: "The Cycle",
            description: "Complete a round with at least a Primary, Special, Heavy, Grenade, Melee, and Super kill."
        },
        artifactheist: {
            title: "The Heist",
            description: "Take the Armament after defeating its previous carrier."
        },
        activitycompletevictoryelimination: {
            title: "Trial By Fire",
            description: "Win an Elimination match."
        },
        killmulti3: {
            title: "Triple Down",
            description: "Rapidly kill 3 enemies."
        },
        singularityflagcapturemulti: {
            title: "Unstoppable Force",
            description: "Capture the Spark 3 times in a single match."
        },
        killassistspree: {
            title: "Unsung Hero",
            description: "In a single life, assist your allies on 3 kills."
        },
        firstplacekillspree: {
            title: "Uprising",
            description: "In a single match, kill the leader 3 times."
        },
        activitycompletevictory: {
            title: "Victory",
            description: "Win a match."
        },
        abilityghostgunkillmulti: {
            title: "Way of the Gun",
            description: "Kill 3 enemies with a single Golden Gun charge."
        },
        killspreeabsurd: {
            title: "We Ran out of Medals",
            description: "Defeat 25 opposing Guardians without dying."
        },
        abilityvoidbowkillmulti: {
            title: "Wild Hunt",
            description: "Rapidly defeat 3 opposing Guardians with Shadowshot."
        },
        activitycompletevictoryrumblelastsecond: {
            title: "Won't Be Beat",
            description: "Win a Rumble match after trailing by 500 with 30 seconds remaining OR when an opponent was near the score limit."
        },
        eliminationwipesolo: {
            title: "Wrecking Ball",
            description: "Singlehandedly wipe the enemy team."
        },
        activitycompletevictorysuddendeath: {
            title: "Zero Hour",
            description: "Win a match in Overtime."
        }
    }
}

function raiseGenericError() {
    document.getElementById("search_bar").addEventListener("search", displayNameSubmitted), document.getElementById("popup_loading_screen").style.display = "none", showErrorScreen("Uh oh, something went wrong. Make sure you are connected to the internet and try searching again.")
}

function showErrorScreen(e) {
    var t = document.getElementById("popup_error_screen");
    document.getElementById("error_message").textContent = e, document.getElementById("error_image").src = "assets/icons/ghost.png", document.getElementById("button_error_close").onclick = function() {
        t.style.display = "none"
    }, window.onclick = function(e) {
        e.target == t && (t.style.display = "none")
    }, document.getElementById("search_bar").addEventListener("search", displayNameSubmitted), document.getElementById("popup_loading_screen").style.display = "none", t.style.display = "block"
}
var displayName, membershipId, membershipType, guardianCharacterIds, gameCharacterIds, selectedCharacterId, selectedCharacter, gameMode = "AllPvp",
    activityPeriod, numHistoriesProcessed = 0,
    activityPage = 0,
    activities, selectedActivity = 0,
    carnageReport, playerInfo, mapDetails, medalCatalogue;
document.onload = bindEventHandlers();
