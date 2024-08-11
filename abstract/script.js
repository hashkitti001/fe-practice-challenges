document.addEventListener("DOMContentLoaded", () => {
    const toggleBtn = document.querySelector("#toggleBtn");
    const menuOverlay = document.querySelector(".mobile-overlay");
    const helpForm = document.querySelector("#h-form");

    let menuActive = false;
    // Initial state
    if (menuActive) {
        toggleBtn.classList.remove("fa-bars");
        toggleBtn.classList.add("fa-close");
        menuOverlay.classList.remove("hidden");
    } else {
        toggleBtn.classList.add("fa-bars");
        toggleBtn.classList.remove("fa-close");
        menuOverlay.classList.add("hidden");
    }

    // Event listener to toggle menu state
    toggleBtn.addEventListener("click", () => {
        menuActive = !menuActive;

        if (menuActive) {
            toggleBtn.classList.remove("fa-bars");
            toggleBtn.classList.add("fa-times");
            menuOverlay.classList.remove("hidden");
        } else {
            toggleBtn.classList.add("fa-bars");
            toggleBtn.classList.remove("fa-times");
            menuOverlay.classList.add("hidden");
        }
    });

    // Handling form submit on Enter press event 
    helpForm.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.keyCode === 13) {
            e.preventDefault();
            helpForm.value = "";
        }
    })
})