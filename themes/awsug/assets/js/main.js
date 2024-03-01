function mobileToggle() {
    var mobileMenu = document.getElementById("headernav-mobile-list");
    if (mobileMenu.style.display === "none") {
        mobileMenu.style.display = "grid"
    } else {
        mobileMenu.style.display = "none"
    }
}
