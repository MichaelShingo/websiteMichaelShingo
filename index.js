class MyGigReviews extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `Add your top 10 reviews here`
    }
}
customElements.define('my-gig-reviews', MyGigReviews);
class MyHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <nav class="navigation">
            <ul class="off-screen" id="menu-items">
                <li class="menu-item"><a href="index.html">Home</a></li>
                <li class="menu-item"><a href="biography.html">Bio</a></li>
                <li class="menu-item"><a href="portfolio.html">Portfolio</a></li>
                <li class="menu-item"><a href="violinist.html">Violinist</a></li>
                <li class="menu-item"><a href="lessons.html">Lessons</a></li>
                <li class="menu-item"><a href="blog.html">Blog</a></li>
                <li class="menu-item"><a href="contact.html">Contact</a></li>

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
        <header class="header">
                        
                    <div id="progress-container">
                        <div class="progress-bar" id="myBar"></div>
                    </div>

                    
                    <div class="header-logo" id="logo">
                        <div id="logo-box">
                            <div class="logo-bracket" id="left-bracket">{</div>
                            <div id="logo-strings">
                                <div class="logo-string" id="string-1"></div>
                                <div class="logo-string" id="string-2"></div>
                                <div class="logo-string" id="string-3"></div>
                                <div class="logo-string" id="string-"></div>
                            </div>
                            <div class="logo-bracket" id="right-bracket">}</div>
                        </div>
                    </div>

                    <h6 id="logo-name">
                        Michael<br>Shingo<br>Crawford
                    </h6>


                </header>
                <div class="heading-image">
                    <img src="./img/sheetMusic1cropped.jpg" alt="blank violin sheet music">
                </div>
        `
    }
}
customElements.define('my-header', MyHeader);


class MyFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <footer id="footer">
                <div class="copyright">
                    <p id="copyright"></p>
                </div>
                <div class="social-icons">
                    <a href="" class="fa-brands fa-youtube"></a>
                    <a href="" class="fa-brands fa-github"></a>
                    <a href="" class="fa-brands fa-linkedin"></a>
                    <a href="" class="fa-brands fa-facebook"></a>
                </div>
            </footer>
        `
    }
}
customElements.define('my-footer', MyFooter);

class MyStyles extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <link rel="stylesheet" href="styles/styles.css">
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Asap">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css" integrity="sha512-MV7K8+y+gLIBoVD59lQIYicR65iaqukzvf/nwasF0nqhPay5w/9lJmVM2hMDcnK1OnMGCdVK+iQrJ7lzPJQd1w==" crossorigin="anonymous" referrerpolicy="no-referrer" />
        `
    }
}
customElements.define('my-styles', MyStyles);



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


//document.body.appendChild(navTemplate.content);


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


//CONTACT----------------------------------

function sendEmail(){
    //reply address?
    //encryption? https://www.youtube.com/watch?v=sGQSz22U8VM, you need domain first https://smtpjs.com
    let formElement = document.getElementById("general-contact");
    let formMessage = document.getElementsByClassName("form-message")[0];
    let bodyString = `<b>Name:</b> ${document.getElementById("name").value}\n\n<br><br>
    <b>Email:</b> ${document.getElementById("email").value}\n\n<br><br>
    <b>Subject:</b> ${document.getElementById("subject").value}\n\n<br><br>
    <b>Message:</b><br> <span style="width: 50%;">${document.getElementById("message").value}</span>`;

    Email.send({
        Host : "smtp.elasticemail.com", //port 2525
        Username : "shingoalert@gmail.com",
        Password : "07418A32D8DFA36AA7EB7C0C2685A659A6E9",
        To : 'mcrawford5376@gmail.com',
        From : 'mcrawford5376@gmail.com',
        Subject : "General Contact Form Submission",
        Body : bodyString
    }).then(message => {
        if (message == 'OK'){
            formMessage.innerText = "Message sent successfully.";
        } else {
            formMessage.innerText = "Message not sent."
            formMessage.classList.add('error');
        }
    });
}




