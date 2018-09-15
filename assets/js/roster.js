---
---
  $.ajax({
  url: "https://www.bungie.net/platform/GroupV2/699392/Members/",
  headers: {
    "X-API-Key": "47b810e692d64237911c2cbe0d433cfe"
  }
}).done(function(json) {
  var members = json.Response.results;
  console.log('Member list:', members);
  listMembers(members);
});
