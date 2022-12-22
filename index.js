


//Scroll progress bar
const menuContainer = document.getElementById("menuContainer");
const scrollProgress = document.getElementById("scrollProgress");
window.onscroll = function() {scrollBarAnimation()};

function scrollBarAnimation() {
    let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let scrolled = (winScroll / height) * 100;
    document.getElementById("myBar").style.width = scrolled + "%";
}



//Logo and menu scroll animation
const logoName = document.getElementById("logo-name");
const logoBox = document.getElementById("logo-box");
function changeHeader(){
    this.scrollY > 150 ? logoName.classList.add("hide-logo-name") : logoName.classList.remove("hide-logo-name");
    this.scrollY > 150 && this.scrollY < 350 ? logoBox.classList.add("change-logo-box") : logoBox.classList.remove("change-logo-box");
}

window.addEventListener("scroll", changeHeader, false);



//Hamburger menu
const hamburgerLines = document.getElementsByClassName("hamburgerLine");
const hamburgerContainer = document.getElementById("hamburgerContainer");
const menuItems = document.getElementById("menu-items");
const navTemplate = document.createElement('nav-template');
navTemplate.content = `<template id="nav-template">
<nav class="navigation">
    <ul class="off-screen" id="menu-items">
        <li class="menu-item"><a href="">Home</a></li>
        <li class="menu-item"><a href="">Bio</a></li>
        <li class="menu-item"><a href="">Portfolio</a></li>
        <li class="menu-item"><a href="">Violinist</a></li>
        <li class="menu-item"><a href="">Lessons</a></li>
        <li class="menu-item"><a href="">Blog</a></li>
        <li class="menu-item"><a href="">Contact</a></li>

    </ul>

    <div class="menuContainer" id="menuContainer">

        <div class="hamburgerContainer" id="hamburgerContainer">
            <div class="hamburgerLine" id="line1"></div>
            <div class="hamburgerLine" id="line2"></div>
            <div class="hamburgerLine" id="line3"></div>
            <div class="hamburgerLine" id="line4"></div>  
            <div class="hamburgerLine" id="line5"></div> 
        </div>
    </div>
</nav> 
</template>
`;
console.log(navTemplate.content);
console.log(typeof document.body);
console.log(document.body);

document.body.appendChild(navTemplate.content);


hamburgerContainer.addEventListener("click", () => {
    menuContainer.classList.toggle("menuOpen");
    menuItems.classList.toggle("menu-items");
    let i = 0;
    for (let line of hamburgerLines){
        if (i === 0){
            line.classList.toggle("hamburger-x-top");
        }
        else if (i  === 4){
            line.classList.toggle("hamburger-x-bottom");
        }
        else{
            line.classList.toggle("invisible");
        }
        line.classList.toggle("hamburgerClose");
        i++;
    }
    
});


//footer date
const copyrightText = document.getElementById("copyright");
let currentYear = new Date().getFullYear();
copyrightText.innerHTML = `Copyright © ${currentYear}<br>Web design by Michael Shingo Crawford.`;




