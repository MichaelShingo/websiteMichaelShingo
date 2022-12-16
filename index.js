const menuContainer = document.getElementById("menuContainer");
const hamburgerContainer = document.getElementById("hamburgerContainer");

hamburgerContainer.addEventListener("click", () => {
    if (menuContainer.classList.contains("menuOpen")) {
        
    }
    else{
        menuContainer.classList.toggle("menuOpen");
    }
});



