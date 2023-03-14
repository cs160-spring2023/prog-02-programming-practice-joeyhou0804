$(document).ready(function(){
    $("#drag-box").draggable({
        revert: 'invalid'
    });
    $("#origin-box").droppable({
        drop: function(event, ui) {
            $("#drag-box").css("background", "grey");
        },
    });
    $("#drop-box-2").droppable({
        drop: function(event, ui) {
            $("#drag-box").css("background", "darkred");
        },
        over: function(event, ui) {
            $("#drag-box").css("background", "red");
        },
        out: function(event, ui) {
            $("#drag-box").css("background", "grey");
        }
    });
    $("#drop-box-1").droppable({
        drop: function(event, ui) {
            $("#drag-box").css("background", "darkblue");
        },
        over: function(event, ui) {
            $("#drag-box").css("background", "blue");
        },
        out: function(event, ui) {
            $("#drag-box").css("background", "grey");
        }
    });
});