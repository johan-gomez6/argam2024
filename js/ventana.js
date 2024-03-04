// JavaScript para mostrar y ocultar el modal
function closeModal() {
    var modal = document.getElementById("myModal");
    modal.style.display = "none";
}

var serviceLinks = document.querySelectorAll(".service-item");
serviceLinks.forEach(function(link) {
    link.addEventListener("click", function(event) {
        event.preventDefault();
        var modal = document.getElementById("myModal");
        modal.style.display = "block";
    });
});
