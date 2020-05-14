// Chosen CSS
var config = {
    ".chosen-select": {},
    ".chosen-select-deselect": {
        allow_single_deselect: true
    },
    ".chosen-select-no-single": {
        disable_search_threshold: 10
    },
    ".chosen-select-no-results": {
        no_results_text: "Oops, nothing found!"
    },
    ".chosen-select-width": {
        width: "95%"
    }
};

// JQUERY Capture the form inputs
$("#submit").on("click", (event) => {
    event.preventDefault();

    // Create an object for the user"s data--> there must be a better way to select the scores...
    var userData = {
        firstName: $("#firstName").val(),
        lastName: $("#lastName").val(),
        photo: $("#photo").val(),
        scores: [
            $("#instTypeb1").val(),
            $("#instTypeb2").val(),
            $("#instTypeb3").val(),
            $("#instTypeb4").val(),
            $("#instTypeb5").val(),
            $("#instTypeb6").val(),
            $("#instTypeb7").val(),
            $("#instTypeb8").val(),
            $("#instTypeb9").val(),
            $("#instTypeb10").val(),
            $("#instTypep1").val(),
            $("#instTypep2").val(),
            $("#instTypep3").val(),
            $("#instTypep4").val(),
            $("#instTypep5").val(),
            $("#instTypep6").val()
            $("#instTypep7").val()
            $("#instTypep8").val()
            $("#instTypep9").val()
            $("#instTypep10").val()
            $("#instTypep11").val()
            $("#instTypep12").val()
            $("#instTypep14").val()
            $("#instTypep15").val()
            $("#instTypep16").val()
            $("#instTypes1").val()
            $("#instTypes2").val()
            $("#instTypes3").val()
            $("#instTypes4").val()
            $("#instTypes5").val()
            $("#instTypes6").val()
            $("#instTypes7").val()
            $("#instTypes8").val()
            $("#instTypes9").val()
            $("#instTypes10").val()
            $("#instTypew1").val()
            $("#instTypew2").val()
            $("#instTypew3").val()
            $("#instTypew4").val()
            $("#instTypew5").val()
            $("#instTypew6").val()
            $("#instTypew7").val()
            $("#instTypew8").val()
            $("#instTypew9").val()
            $("#instTypew10").val()
            $("#instTypew11").val()
            $("#instTypek1").val()
            $("#instTypek2").val()
            $("#instTypek3").val()
            $("#instTypek4").val()
            $("#instTypek5").val()
            $("#instTypek6").val()
            $("#instTypek7").val()
            $("#instTypek8").val()
            $("#instTypev1").val()
            $("#instTypev2").val()
            $("#instTypev3").val()
            $("#instTypev4").val()
            $("#instTypev5").val()
            $("#instTypev6").val()
            $("#instTypev7").val()
            $("#instTypev8").val()
            $("#taste1").val()
            $("#taste2").val()
            $("#taste3").val()
            $("#taste4").val()
            $("#taste5").val()
        ]
    };

    // AJAX post the data to the friends API.
    $.post("/api/friends", userData, (data) => {

        // Grab the result from the AJAX post so that the best match's name and photo are displayed.
        $("#match-name").text(data.name);
        $("#match-img").attr("src", data.photo);

        // Show the modal with the best match
        $("#results-modal").modal("toggle");

    });

});