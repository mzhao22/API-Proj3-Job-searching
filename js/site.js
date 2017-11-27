$(document).ready(function(){ //variables used in this script is protected from gloable
  var num=0;
  $('#job-form').on('submit', function(e) {
    var input = $('#job').val();

$.ajax({
      type: "GET",
      url: '!!!'+input,
      dataType: "html",
      success: function (results){
       var data = JSON.parse(results);
        parseData(data);
      }
      });
e.preventDefault();
});

$('#job-form').on('submit', function(e) {
  var input = $('#city').val();

$.ajax({
    type: "GET",
    url: '!!!'+input,
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
        $('#results').append("<li id="+"id" + x +">" + "job availability: "+arr.abilities[x].ability.name+ "</li>");
        }
        $('#results').append("<li id="+"id" + (x++) +">" + "job name: " + arr.name+ "</li>");
        $('#results').append("<li id="+"id" + (x++) +">" + "location is: " + arr.weight+ "</li>");

        for(var i = 0;i<arr.types.length;i++){
            $('#results').append("<li>" + "job type: " + arr.types[i].type.name+ "</li>");
        }

    }
});
