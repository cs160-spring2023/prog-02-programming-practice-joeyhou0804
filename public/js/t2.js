let interval;

$(document).ready(function(){
    interval = setInterval(function(){ 
        $(".shape-container").append("<div class='p2-circle bg-blue'></div>");  
    }, 1000);
    $("#stop").click(function() {
        clearInterval(interval);
    });
});