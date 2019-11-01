$(function () {
    $(".change-devoured").on("click", function (event) {
        var id = $(this).data("id");
        var newEat = {
            devoured: 1
        };

        // Send the PUT request.
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: newEat
        }).then(
            function () {
                console.log("Devored", newEat);
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });

    $(".create-form").on("submit", function (event) {

        event.preventDefault();

        var newBurger = {
            burger_name: $("#bun").val().trim(),
            devoured: 0
        };

        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(
            function () {
                console.log("Maked new burger");
                location.reload();
            }
        );
    });
});