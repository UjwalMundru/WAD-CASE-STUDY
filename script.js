document.addEventListener("DOMContentLoaded", function () {
    // Function to remove all borders
    function removeAllBorders() {
        document.querySelectorAll(".cir_border").forEach((el) => {
            el.style.border = "none";
        });
    }

    if (window.screen.width <= 1130) {
        const elements = ["sec", "pri", "tri", "quad", "quint", "hex", "hept"];
        elements.forEach((id) => {
            document.getElementById(id)?.addEventListener("click", function () {
                removeAllBorders();
                this.style.border = "2px solid whitesmoke";
                this.style.borderRadius = "20px";
            });
        });
    }

    // Light/Dark Mode Toggle
    const checkbox = document.getElementById("checkbox");
    function checkDarkMode() {
        if (localStorage.getItem("tourism_website_darkmode") === "true") {
            document.body.classList.add("dark");
            checkbox.checked = true;
        }
    }
    checkDarkMode();

    checkbox.addEventListener("change", () => {
        document.body.classList.toggle("dark");
        localStorage.setItem("tourism_website_darkmode", document.body.classList.contains("dark"));
    });

    // Scroll to Top Button
    const mybutton = document.getElementById("upbtn");
    window.onscroll = function () {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            mybutton.style.display = "block";
        } else {
            mybutton.style.display = "none";
        }
    };
    mybutton?.addEventListener("click", function () {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });

    // Navbar Update While Scrolling
    function updateNav() {
        const sections = document.querySelectorAll("section");
        const navLinks = document.querySelectorAll(".nav-links li a");

        sections.forEach((section, index) => {
            const rect = section.getBoundingClientRect();
            const threshold = window.innerWidth <= 425 ? 1300 : window.innerWidth <= 768 ? 1250 : 1000;

            if (rect.top <= threshold) {
                navLinks.forEach((navLink) => navLink.classList.remove("active"));
                navLinks[index]?.classList.add("active");
            }
        });
    }
    window.addEventListener("scroll", updateNav);

    // About Section Mouseover Transition
    document.getElementById("about")?.addEventListener("mouseover", function () {
        document.getElementById("about-quad").style.top = "70%";
        document.getElementById("about-quad").style.opacity = "1";
    });

    // Input Change Toggle
    document.querySelectorAll("input").forEach((input) => {
        input.addEventListener("change", function () {
            document.body.classList.toggle("blue");
        });
    });
});
