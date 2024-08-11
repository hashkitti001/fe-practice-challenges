document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll("section");
    const header = document.querySelector("header")
    const updateBackgroundColor = () => {
        const scrollPosition = window.scrollY;

        sections.forEach((section) => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;

            if (scrollPosition >= (sectionTop - sectionHeight / 2) && scrollPosition < (sectionTop + sectionHeight / 2)) {
                const newColor = window.getComputedStyle(section).backgroundColor;
                document.body.style.backgroundColor = newColor;
                header.style.backgroundColor = newColor
                console.log(`Changing background to: ${newColor}`);
            }
        });
    };

    window.addEventListener("scroll", updateBackgroundColor);
    updateBackgroundColor(); // Initial call to set the background color on load
});
