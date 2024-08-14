document.addEventListener("DOMContentLoaded", () => {
    const mobileMenu = document.querySelector(".mobile-menu-body");
    const mMenuToggle = document.getElementById("mobile-menu-btn");
    const ddIcon = document.querySelector("#mobile-menu-btn i");
    const header = document.querySelector("header");
    const videoImage = document.querySelector(".video-container img")
    const videoItem = document.querySelector(".video-container iframe")

    const playBtn = document.querySelector(".play-btn")
    let mMenuActive = false;
    // Toggle mobile menu 
    function toggleMobileMenu() {
        mMenuActive = !mMenuActive; // Toggle the state

        if (mMenuActive) {
            mobileMenu.classList.add("mm-active");
            header.style.backgroundColor = "#0000ff";
            ddIcon.classList.remove("fa-caret-down");
            ddIcon.classList.add("fa-caret-up");
            ddIcon.classList.add("i-active")
            mMenuToggle.classList.add("i-active")
            mMenuToggle.style.color = "#fff";
        } else {
            mobileMenu.classList.remove("mm-active");
            header.style.backgroundColor = "#fff";
            ddIcon.classList.remove("i-active")
            mMenuToggle.style.color = "#000";
            ddIcon.classList.remove("fa-caret-up");
            ddIcon.classList.add("fa-caret-down");
           
        }
    }

    //Video play event
    function playVideo () {
        videoImage.style.display = "none"
        videoItem.style.display = "block"
        playBtn.style.display = "none"
    
    }
    playBtn.addEventListener("click", playVideo);
    mMenuToggle.addEventListener("click", toggleMobileMenu);
});
