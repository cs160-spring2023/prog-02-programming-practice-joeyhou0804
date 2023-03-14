$(document).ready(function(){
    $(".bg-purple").on("click", function(event){
        $(".bg-purple").hide("slow", function() {});
    });
    $(".bg-green").on("click", function(event){
        $(".bg-green").hide("slow", function() {});
        $(".bg-blue").hide("slow", function() {});
    });
    $(".bg-orange.p2-border").on("click", function(event){
        $(".bg-orange.p2-border").hide("slow", function() {});
    });
    $("#gradient-circle").hover(function() {
        $("#gradient-circle").hide("slow", function() {});
    });
});