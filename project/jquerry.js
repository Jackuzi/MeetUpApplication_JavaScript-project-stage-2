$(document).ready(function() { getStorage() });




Spry.Utils.addLoadListener(function() {

$(function() {
	$( "#Datepicker1" ).datepicker(); 
});


});


$(document).ready(function() {
    var text_max = 500;
    $('#counter').html(text_max + ' characters remaining');

    $('#textarea').keyup(function() {
        var text_length = $('#textarea').val().length;
        var text_remaining = text_max - text_length;

        $('#counter').html(text_remaining + ' characters remaining');
    });
});

$(document).ready(function() {
    var text_max = 250;
    $('#subCount').html(text_max + ' characters of email remaining');

    $('#email').keyup(function() {
        var text_length = $('#email').val().length;
        var text_remaining = text_max - text_length;

        $('#subCount').html(text_remaining + ' characters of email remaining');
    });
});


