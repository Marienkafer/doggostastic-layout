$(document).ready(function(){
    $("#add-bttn").click(function(){
        $("#add-form").show('fast');
    });
});

$(document).ready(function(){
    $("#submit-bttn").click(function(){
        $("#add-form").hide('fast');
    });
});

$(document).ready(function(){
var x = $(".doggo-item:visible").length;
$("#count").append(x);
});