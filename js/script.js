
var mode_or_theme = document.getElementById("mode-or-theme");

mode_or_theme.onclick = function () {
    document.body.classList.toggle("dark-theme");
    if (document.body.classList.contains("dark-theme")) {
        mode_or_theme.src = "Images/Sun.png";
    }
    else {
        mode_or_theme.src = "Images/Moon.png";
    }
}