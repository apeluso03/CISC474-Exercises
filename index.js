$(document).ready(function(){
    console.log("ready!");
});


$("#fname").change(function(){
    $(this).val("");
});

$("#lname").change(function(){
    $(this).val("");
});

$("#go").on("click", function(){
    console.log("Handler for 'click' called");
    var value = $("#fname").val() + $("#lname").val();
    $("#jumbotron").text(value);
    return false;
});