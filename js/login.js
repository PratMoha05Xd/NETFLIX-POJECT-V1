var email = document.getElementById("email");
var passowrd = document.getElementById("password");

// on login clicked
document.querySelector("form").addEventListener("submit", function (event) {
    event.preventDefault();
    if (email.value === "admin" && passowrd.value === "admin") {
        window.location.href = "animation.html";
        return;
    }
    alert(" passowrd or email incorrect!\n The correct one is admin admin");
});
