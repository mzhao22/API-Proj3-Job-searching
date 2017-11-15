$(document).ready(function(){ //variables used in this script is protected from gloable
  var num=0;
  $('#poke-form').on('submit', function(e) {
    var input = $('#poke').val();

$.ajax({
      type: "GET",
      url: 'https://pokeapi.co/api/v2/pokemon/'+input,
      dataType: "html",
      success: function (results){
       var data = JSON.parse(results);
        parseData(data);
      }
      });
e.preventDefault();
});

    function parseData(arr) {
        $('#results').empty();
        $('#results').css('floate', 'left');
        $('#results').css('height', '29.125em');
        $('#results').css('overflow-y', 'auto');
        $('#results').css('color', 'white');
        var x;
        for(x=0; x < arr.abilities.length; x++){
        $('#results').append("<li id="+"id" + x +">" + "pokemon ability: "+arr.abilities[x].ability.name+ "</li>");
        }
        $('#results').append("<li id="+"id" + (x++) +">" + "Pokemon name: " + arr.name+ "</li>");
        $('#results').append("<li id="+"id" + (x++) +">" + "Weight is: " + arr.weight+ "</li>");
        $('#results').append("<li id="+"id" + (x++) +">" + "Height is: " + arr.height+ "</li>");
        $('#results').append("<li id="+"id" + (x++) +">" +"Pokemon species: "+ arr.species.name+ "</li>");

        for(var i = 0;i<arr.types.length;i++){
            $('#results').append("<li>" + "Pokemon type: " + arr.types[i].type.name+ "</li>");
        }

    }
});
