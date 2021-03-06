$(function () {
    $(".change-devoured").on("click", function (event) {
        var id = $(this).data("id");
        var newEat = {
            devoured: 1
        };

        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: newEat
        }).then(function () {
            location.reload();
        });
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
        }).then(function () {
            console.log("Maked new burger");
            location.reload();
        });
    });

    $(".delete").on("click", function (event) {

        event.preventDefault();

        var id = $(this).attr("data-id");

        $.ajax("/api/burgers/" + id, {
            type: "DELETE"
        }).then(function () {
            location.reload();
        });
    });
});