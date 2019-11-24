$(function() {
    
  {
        $.ajax({
           url: "https://www.bungie.net/Platform/Destiny2/2/Account/4611686018429000034/Character/0/Stats/UniqueWeapons/",
         headers: {
             "X-API-Key": apiKey
           }, 
           success: function(data) {
            var referenceText = `347366834 AceofSpades
460724140   TheJadeRabbit
814876685   TrinityGhoul
1345867570  SweetBusiness`;

// Just in case of an accidental whitespace character
referenceText = referenceText.trim();

// split this text into an array of lines (\r\n are newline characters)
var items = reference.split(/[\r\n]/g);
var names = {};
// for each line in the array
items.forEach(function(item) {
    /*
        So this is RegExp. Since the amount of space characters between
        the name of the weapon and the ID varies, we use a regex which basically
        says that "Just find as many spaces as possible, and
        split the line into segments there
    */
    var data = item.split(/\s+/);
    // the data array looks something like this ['347366834', 'AceofSpades']
    var weaponId = data[0];
    var weaponName = data[1];

    // store the weapon name
    names[weaponId] = weaponName
});

console.log(names);
   
           },
           
        });
}});
