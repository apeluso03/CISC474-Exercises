$(document).ready(function(){
    console.log("ready!");

    $("#fname").click(function(){
        $(this).val("");
    });

    $("#lname").click(function(){
        $(this).val("");
    });

    $("#go").click(function(){
        console.log("Handler for 'click' called");
        var value = $("#fname").val() + " " + $("#lname").val();
        $("#jumbotron").text(value);
        $("#fname").val("");
        $("#lname").val("");
        return false;
    });
    return false;
});