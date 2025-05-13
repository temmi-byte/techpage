document.addEventListener("DOMContentLoaded", function () {
    console.log("JavaScript is working!"); // Debugging test

    let dropdowns = document.querySelectorAll(".dropdown-toggle");

    dropdowns.forEach((dropdown) => {
        dropdown.addEventListener("click", function (e) {
            e.preventDefault(); // Prevent default link action

            let menu = this.nextElementSibling; // Get the dropdown menu

            // Close all dropdowns first
            document.querySelectorAll(".dropdown-menu").forEach((dropdown) => {
                if (dropdown !== menu) {
                    dropdown.classList.remove("show");
                }
            });

            menu.classList.toggle("show"); // Toggle 'show' class
        });
    });

    // Close dropdowns if user clicks outside
    document.addEventListener("click", function (event) {
        let isClickInside = event.target.closest(".dropdown");

        if (!isClickInside) {
            document.querySelectorAll(".dropdown-menu").forEach((dropdown) => {
                dropdown.classList.remove("show");
            });
        }
    });
});
function showContact() {
    alert("📞 Contact Temmi's Tech:\n📩 Email: falusipeace4@gmail.com\n📱 Phone: +234 802 771 5673");
}
function showProducts() {
    var section = document.getElementById("products-section");
    if (section.classList.contains("show")) {
        section.classList.remove("show");
        setTimeout(() => { section.style.display = "none"; }, 500); // Wait for animation before hiding
    } else {
        section.style.display = "block";
        setTimeout(() => { section.classList.add("show"); }, 10); // Slight delay for animation
    }
}
