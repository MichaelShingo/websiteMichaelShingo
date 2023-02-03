
class MyGigReviews extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <article class="reviews-container">
                    <div class="arrow-container">
                    <span class="review-arrow" id="left-arrow">
                        <i class="fa-regular fa-circle-left fa-2x"></i>
                    </span>
                    <span class="review-arrow">
                        <i class="fa-regular fa-circle-right fa-2x" id="right-arrow"></i>
                    </span>
                </div>
                        <span class="review-star" id="star1">
                            <i class="fa-solid fa-star"></i>
                        </span>
                        <span class="review-star" id="star2">
                            <i class="fa-solid fa-star"></i>
                        </span>
                        <span class="review-star" id="star3">
                            <i class="fa-solid fa-star"></i>
                        </span>
                        <span class="review-star" id="star4">
                            <i class="fa-solid fa-star"></i>
                        </span>
                        <span class="review-star" id="star5">
                            <i class="fa-solid fa-star"></i>
                        </span>
                        <p class="review-date small-p" id="review-date"></p>
                        <div class="name-container">
                            <div class="review-profile" id="review-profile">
                                <div class="review-text-container">
                                    <p class="profile-text" id="profile-text"></p>
                                </div>

                            </div>
                                <p class="review-name" id="review-name"></p>
                        </div>  
                        <h4 class="review-header" id="review-header"></h4>
                        <p class="review-text small-p" id="review-text"></p>
                        

                    </article>`
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

                    <a class="header-link" href="./index.html">
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
                    </a>
                    <a class="header-link" href="./index.html">
                        <h6 id="logo-name">
                            Michael<br>Shingo<br>Crawford
                        </h6>
                    </a>


                </header>
                <!--<div class="header-image">
                    <img src="/img/sheetMusic1cropped.jpg" alt="blank violin sheet music">
                </div>-->
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
                    <!--<p id="footer-sub-text"><b>{</b> Coded from scratch with HTML, CSS, and Javascript <b>}</p>-->
                </div>
            
                    
                </div>
                <div class="social-icons">
                    <a href="https://www.youtube.com/channel/UCb46nljnneXaQCa5wKYsbWA" class="fa-brands fa-youtube" target="_blank"></a>
                    <a href="https://github.com/MichaelShingo" class="fa-brands fa-github" target="_blank"></a>
                    <a href="https://www.linkedin.com/in/michael-shingo-crawford-44577283/" class="fa-brands fa-linkedin" target="_blank"></a>
                    <a href="https://www.facebook.com/MichaelShingo" class="fa-brands fa-facebook" target="_blank"></a>
                </div>
            </footer>
        `
    }
}
customElements.define('my-footer', MyFooter);

class EnsembleOptions extends HTMLElement {
    connectedCallback() {
        this.innerHTML =`
    <!--<div class="filler"></div>-->
    <section class="collapsible-items">
                        <div class="collapsible-title">
                            <h3>Solo Violin</h3>
                            <div class="icon-container">
                                <span class="plus-icon">
                                    <i class="far fa-plus-square fa-2x"></i> <!-- change to fa-minus-square on click-->
                                </span>
                            </div>
                        </div>
        
                        <div class="collapsible-content hide">
                            <p>Solo violin is a beautiful option for everything from the most intimate gatherings to larger weddings with over 100 people.
                                A versatile instrument that can play soaring melodies as well as harmonies at the same time.
                            </p>
                            <img src="img/churchWeddingSmall.jpg" alt="Violinist performs romantic songs at a wedding cocktail hour and reception in Amsterdam, Netherlands">
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/OfoqvqPQCaI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                        </div>
                    </section>

                    <section class="collapsible-items">
                        <div class="collapsible-title">
                            <h3>Violin and Cello Duo</h3>
                            <div class="icon-container">
                                <span class="plus-icon">
                                    <i class="far fa-plus-square fa-2x"></i>
                                </span>
                            </div>
                        </div>
        
                        <div class="collapsible-content hide">
                            <p>As members of the bowed string instrument family, the violin and cello complement each other perfectly in sound. With the violin taking
                                 the melody and the cello playing the bass line, this expressive and dynamic duo can perform just about any song.
                            </p>
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/l3sQeKjCjCo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                        </div>
                    </section>
        
                    <section class="collapsible-items">
                        <div class="collapsible-title">
                            <h3>Violin and Harp Duo</h3>
                            <div class="icon-container">
                                <span class="plus-icon">
                                    <i class="far fa-plus-square fa-2x"></i> <!-- change to fa-minus-square on click-->
                                </span>
                            </div>
                        </div>
        
                        <div class="collapsible-content hide">
                            <p>The harp brings a magical and mesmerizing quality to the music with its sweeping glissadi and sweet timbre. 
                                When combined with the expressive melodic qualities of the violin, the resulting ensemble is irresistible.
                            </p>
                            <img src="img/harp3Small.jpg" alt="harpist and violinist perform at a wedding in Amsterdam, Netherlands">
                            <iframe src="https://www.youtube.com/embed/dmoNcAsY17U" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>        
                        </div>
                    </section>

                    <section class="collapsible-items">
                        <div class="collapsible-title">
                            <h3>Violin and Piano Duo</h3>
                            <div class="icon-container">
                                <span class="plus-icon">
                                    <i class="far fa-plus-square fa-2x"></i> <!-- change to fa-minus-square on click-->
                                </span>
                            </div>
                        </div>
        
                        <div class="collapsible-content hide">
                            <p>A classic combination with a long history and expansive repertoire, the violin and piano duo often produces the most faithful
                                renditions of the original music, whether it be rock, pop, or classical. Thanks to the piano's orchestral-scale range and
                                ability to play multiple parts at the same time, this duo often captures all of the parts of the original song in spectacular fashion.
                            </p>
                            <img src="img/lanceWisemanRecitalSmall.jpg" alt="Violin and piano duo performing classical and romantic music at a recital and concert with reception.">
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/smSvZD7BCpg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                        </div>
                    </section>`
    }
}
customElements.define('my-ensemble-options', EnsembleOptions);

class MyStyles extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <link rel="stylesheet" href="styles/styles.css">
        <link rel="stylesheet" href="styles/stylesMedia.css">
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Nunito">
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
        Password : "",
        To : 'mcrawford5376@gmail.com',
        From : 'mcrawford5376@gmail.com',
        Subject : "General Contact Form Submission",
        Body : bodyString
    }).then(message => {
        if (message == 'OK'){
            formMessage.innerText = "Message sent successfully.";
        } else {
            formMessage.innerText = "Message not sent."
            formMessage.classList.add('error')
        }
    });
}

function sendEmailViolinist(){

}


//COLLAPSIBLE SECTIONS------------------------------------------------------------------------------------
let plusIcons = document.getElementsByClassName('far');
let collapsibleTitles = document.getElementsByClassName('collapsible-items');

let collapsibleContent = document.getElementsByClassName('collapsible-content');
for (let i = 0; i < plusIcons.length; i++) {
    let plusIcon = plusIcons[i];
    let currentContent = collapsibleContent[i];
    plusIcon.addEventListener('click', e => {
        minusIcons = document.getElementsByClassName('fa-minus-square');
        for (let j = 0; j < plusIcons.length; j++) {
            if (collapsibleContent[j] !== currentContent && !collapsibleContent[j].classList.contains('hide')) {
                collapsibleContent[j].classList.add('hide')
                plusIcons[j].classList.toggle('fa-minus-square')
                plusIcons[j].classList.toggle('fa-plus-square')
            }
        }
    

        //open the clicked one and change icon
        plusIcon.classList.toggle('fa-plus-square');
        plusIcon.classList.toggle('fa-minus-square');
        currentContent.classList.toggle('hide');
        plusIcon.parentElement.parentElement.parentElement.parentElement.previousElementSibling.scrollIntoView({behavior: "smooth"});

        
        
    })


    // let collapsibleTitle = collapsibleTitles[i];
    // collapsibleTitle.addEventListener('click', e => {
    //     for (let j = 0; j < plusIcons.length; j++) {
    //         if (collapsibleContent[j] !== currentContent && !collapsibleContent[j].classList.contains('hide')) {
    //             collapsibleContent[j].classList.add('hide')
    //             plusIcons[j].classList.toggle('fa-minus-square')
    //             plusIcons[j].classList.toggle('fa-plus-square')
    //         }
    //     }

    //     //open the clicked one and change icon
    //     plusIcon.classList.toggle('fa-plus-square');
    //     plusIcon.classList.toggle('fa-minus-square');
    //     currentContent.classList.toggle('hide');
    //     plusIcon.parentElement.parentElement.parentElement.parentElement.previousElementSibling.scrollIntoView({behavior: "smooth"});
        

    // })
}

//REVIEWS-----------------------------------------\
let path = window.location.pathname;
let page = path.split('/').pop();
console.log(page);
let reviewList = []
if (page == 'violinist.html'){
    reviewList = [
        {stars: 5, date: 'December 12, 2022', name: 'Gabrielle C.', title:'AMAZING!!! 5 STARS', review: 'Michael was prompt and professional from the beginning! He quickly responded to my inquiry and sent over a detailed contract that made us so comfortable in trusting him to be our violinist for our wedding day. The event was a surprise, and Michael did a great job keeping it that way for us! :) He played a range from Frank Sinatra, to a song we requested from a personal favorite video game!!! If you are considering live music for your event, definitely put Michael at the top of your list!!!'},
        {stars: 5, date: 'August 30, 2022', name: 'Brooke R.', title:'Absolutely delightful!', review: 'Michael did such an amazing job at our wedding and exceeded all expectations. So many guests were talking about the amazing music he played and it really brought our ceremony to the next level. Michael even came outside to play during our “bubble exit” and did such a wonderful job. Very talented!!'},
        {stars: 5, date: 'November 30, 2021', name: 'Becca H.', title:'Responsive, Talented, and Passionate', review: 'We knew after perusing his YouTube channel and speaking with him briefly via phone that Michael Shingo Crawford was the perfect musician for our wedding. He was responsive, incredibly talented, and clearly passionate about his work. Michael was generous and accommodating, learning new songs at our request for the processional and recessional and playing outdoors in chilly conditions. The violin/cello duo\'s elegant performance left an impression on our guests, heightening the emotions of our day in a beautiful way. We will be forever thankful.'},
        {stars: 5, date: 'April 15, 2021', name: 'Alison P.', title:'So Much Joy!!', review: 'I hired Michael to come to my parents\' house as a surprise and play their wedding song on their front lawn for their anniversary. I had also asked him to play a few songs that were not on his usual play list and he learned them in a couple of weeks time and was flawless!!! The surprise and the joy and the excitement that he provided for this experience was the best gift I have ever given anyone! Michael was responsive, prompt and flexible with a rain date. Just an overall amazing experience!'},
        {stars: 5, date: 'November 2, 2020', name: 'Dina N.', title:'Excellent professional, highly recommend', review: 'Michael arrived early with his cellist. They were friendly, polite and the hit of my dinner party. We had classical music lovers in attendance who were especially overjoyed. Michael played pieces that perfectly fit the vibe of my Victorian Halloween party. He even went over the top and took time to prepare a specially requested piece..'}
    ];
}
else if (page == 'lessons.html') {
    reviewList = [
        {stars: 5, date: 'April 22, 2020', name: 'Sulara N.', title:'Music Theory, In Studio', review: 'Michael\'s unique way of approaching the methods of teaching complex thoery in a very simple manner, is marvelous !! He is kind and patient and has these rare qualities as a well deserved teacher. Michael is also a very respected and a well known amazing violinist and composer with a unique identity!! I believe the community is very fortunate to have such a wonderful teacher and musician of his caliber !!'},
        {stars: 5, date: 'April 22, 2020', name: 'Takashima K.', title:'Violin and Piano, In Studio', review: 'We took violin lessons with him(Mother and my son). He\’s knowledgeable,professional and friendly! I appreciated it that he gives us very practical advice until for next time. He\’s playing violin model for us,it\’s really gracious,you\’ll see!! Actually,he can speak Japanese,too! If there\’s parent who would want to communicate with teacher in Japanese,it would be really helpful for you!'},
        {stars: 5, date: 'April 23, 2020', name: 'Tanush T.', title:'Viola, In Studio/Online', review: 'Micheal is a fantastic teacher that manages to solve every question and problem I have about my instrument. His teaching technique breaks down complex things into easy-to-understand lessons that help give me and his other students great comprehension of the topics that we need to know to become better musicians. I sincerely cannot recommend him enough to beginning and intermediate musicians.'},
        {stars: 5, date: 'April 25, 2020', name: 'Akshay R.', title:'Violin, In Studio', review: 'Michael is very talented and he is a great instructor. He explains the techniques really well. Very professional and supportive. I highly recommend him!'},
        {stars: 5, date: 'April 28, 2020', name: 'Paige Q.', title:'Violin In Studio/Online', review: 'I have been a student of Michael’s for approximately 7 months. My only previous experience with violin had been one year in elementary school band class and 8 months with a private teacher. When my private teacher’s lesson schedule changed, I was introduced to Michael and was greatly impressed by his skill level and teaching style. I have learned so much more than I had expected in each lesson, like how to self-tune, use a metronome, shift, and various other techniques...'}
    ];
    
}

console.log(reviewList)

const starsList = document.getElementsByClassName('review-star');
const reviewDate = document.getElementById('review-date');
const reviewName = document.getElementById('review-name');
const reviewHeader = document.getElementById('review-header');
const reviewText = document.getElementById('review-text');
const reviewProfile = document.getElementById('review-profile');
const leftArrow = document.getElementById('left-arrow');
const rightArrow = document.getElementById('right-arrow');
const profileText = document.getElementById('profile-text');

let clientName = reviewList[0]['name']
let initials = ''
for (let i in clientName){
    if (clientName[i] === clientName[i].toUpperCase() && clientName[i] !== '.' && clientName[i] !== ' ') {
        initials += clientName[i]
    }
}

//display first review
reviewDate.innerText = reviewList[0]['date'];
reviewName.innerText = clientName;
reviewHeader.innerText = reviewList[0]['title'];
reviewText.innerText = reviewList[0]['review'];
profileText.innerText = initials;

let i = 0;
rightArrow.addEventListener('click', e => {
    i++;
    if (i == 5){
        i = 0;
    }
    let clientName = reviewList[i]['name']
    let initials = ''
    for (let i in clientName){
        if (clientName[i] === clientName[i].toUpperCase() && clientName[i] !== '.' && clientName[i] !== ' ') {
            initials += clientName[i]
        }
    }
    reviewDate.innerText = reviewList[i]['date'];
    reviewName.innerText = reviewList[i]['name'];
    reviewHeader.innerText = reviewList[i]['title'];
    reviewText.innerText = reviewList[i]['review'];
    profileText.innerText = initials;

})
leftArrow.addEventListener('click', e => {
    i--;
    if (i == -1){
        i = 4;
    }
    let clientName = reviewList[i]['name']
    let initials = ''
    for (let i in clientName){
        if (clientName[i] === clientName[i].toUpperCase() && clientName[i] !== '.' && clientName[i] !== ' ') {
            initials += clientName[i]
        }
    }
    reviewDate.innerText = reviewList[i]['date'];
    reviewName.innerText = reviewList[i]['name'];
    reviewHeader.innerText = reviewList[i]['title'];
    reviewText.innerText = reviewList[i]['review'];
    profileText.innerText = initials;
})

//set onclick listeners to change reviews


