/**
 * Created by aaronsawyer on 4/24/15.
 */
var i = 0;




$(document).ready(function(){

    $.get("kudos.txt", function(data) {
        var string = data.split("\n");

        $("button").click(function(){

            for(i = 0;i < string.length; i++) {

                $("#container").append("<div class='data'><p>"+ string[i] +"</p></div>").hide().fadeIn(600);
            }
            $(".data").on("click", "p", function(){

                $(this).parent();
            });
        });
    });
});




