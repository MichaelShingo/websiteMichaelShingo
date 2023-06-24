
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
copyrightText.innerHTML = `Copyright © ${currentYear}<br>Web design by Michael Shingo Crawford`;


//CONTACT----------------------------------

function sendEmail(){
    //reply address?
    //encryption? https://www.youtube.com/watch?v=sGQSz22U8VM, you need domain first https://smtpjs.com
    let formElement = document.getElementById("general-contact");
    let formMessage = document.getElementsByClassName("form-message")[0];
    let clientEmail = document.getElementById("email");
    let bodyString = `<b>Name:</b> ${document.getElementById("name").value}\n\n<br><br>
    <b>Email:</b> ${document.getElementById("email").value}\n\n<br><br>
    <b>Subject:</b> ${document.getElementById("subject").value}\n\n<br><br>
    <b>Message:</b><br> <span style="width: 50%;">${document.getElementById("message").value}</span>`;

    Email.send({
        // Host : "smtp.elasticemail.com", //port 2525
        // Username : "shingoalert@gmail.com",
        // Password : "07418A32D8DFA36AA7EB7C0C2685A659A6E9",
        SecureToken: "f1ec68e9-dad5-4214-b53f-0f869c937a3a",
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
    let formElement = document.getElementById("violinist-form");
    let clientName = document.getElementById("name").value;
    let playingLength = document.getElementById("playing-length").value;
    let formMessage = document.getElementsByClassName("form-message")[0];
    let clientEmail = document.getElementById("email").value;
    let settingRadios = document.getElementsByName('setting-radio');
    let location = document.getElementById('location').value;
    let eventDate = document.getElementById("date").value;
    let selectedSetting = 'None';
    let message = document.getElementById("message").value;
    let numMusicians = document.getElementById("number-musicians").value
    settingRadios.forEach((radio) => {
        if (radio.checked) {    
            selectedSetting = radio.value;
        }
    });

    const findRadios = document.getElementsByName('find-radio');
    let selectedFind = 'None';
    findRadios.forEach((radio) => {
        if (radio.checked) {
            console.log(radio.value)
            selectedFind = radio.value;
        }
    });

    let otherFind = 'N/A'
    if (selectedFind === 'Other') {
        otherFind = document.getElementById('other-source').value;
    }

    let bodyString = `<b>Name:</b> ${clientName}\n\n<br><br>
    <b>Email:</b> ${clientEmail}\n\n<br><br>
    <b>Location:</b> ${location}\n\n<br><br>
    <b>Setting:</b> ${selectedSetting}\n\n<br><br>
    <b>Event Date:</b> ${eventDate}\n\n<br><br>
    <b>Number of musicians:</b> ${numMusicians}\n\n<br><br>
    <b>Playing Length:</b> ${playingLength}\n\n<br><br>
    <b>Where did you find me?:</b> ${selectedFind}\n\n<br><br>
    <b>Other:</b> ${otherFind}\n\n<br><br>
    <b>Message:</b><br> <span style="width: 50%;">${message}</span>`;

    console.log('function runs');

    Email.send({
        SecureToken: "f1ec68e9-dad5-4214-b53f-0f869c937a3a",
        To : 'mcrawford5376@gmail.com',
        From : 'mcrawford5376@gmail.com',
        Subject : "Violinist Contact Form",
        Body : bodyString
    }).then(message => {
        // if (clientName === '' || location === '' || clientEmail === '' || selectedSetting == "None" || eventDate === '' || numMusicians === '' || playingLength === '' || 
        //     selectedFind === 'None') {
        //     formMessage.innerText = "Please fill out all required fields."
        //     formMessage.classList.add('error')
        // }
        if (message == 'OK'){
            formMessage.innerText = "Message sent successfully.";
            console.log('message sent successfully');
        } else {
            formMessage.innerText = "Message not sent."
            formMessage.classList.add('error')
        }
    });
}


function sendEmailLessons(){
    let formMessage = document.getElementsByClassName("form-message")[0];
    let subjectRadios = document.getElementsByName('subject-radio');
    let lessonClientName = document.getElementById("name").value;
    let selectedSubject = 'None';
    subjectRadios.forEach((radio) => {
        if (radio.checked) {    
            selectedSubject = radio.value;
        }
    });

    let selectedSkillLevel = 'None';
    let skillRadios = document.getElementsByName('skill-radio');
    skillRadios.forEach((radio) => {
        if (radio.checked) {
            selectedSkillLevel = radio.value;
        }
    });

    const findRadios = document.getElementsByName('find-radio');
    let selectedFind = 'None';
    findRadios.forEach((radio) => {
        if (radio.checked) {
            selectedFind = radio.value;
        }
    });

    let otherFind = 'N/A'
    if (selectedFind === 'Other') {
        otherFind = document.getElementById('other-source').value;
        console.log(otherFind);

    }

    let bodyString = `<b>Name:</b>${lessonClientName}\n\n<br><br>
    <b>Email:</b> ${document.getElementById("email").value}\n\n<br><br>
    <b>Subject:</b> ${selectedSubject}\n\n<br><br>
    <b>Skill level:</b> ${selectedSkillLevel}\n\n<br><br>
    <b>Where did you find me?:</b> ${selectedFind}\n\n<br><br>
    <b>Other:</b> ${otherFind}\n\n<br><br>
    <b>Message:</b><br> <span style="width: 50%;">${document.getElementById("lesson-goals").value}</span>`;

    Email.send({
        SecureToken: "f1ec68e9-dad5-4214-b53f-0f869c937a3a",
        To : 'mcrawford5376@gmail.com',
        From : 'mcrawford5376@gmail.com',
        Subject : `Lesson Request from ${clientName}`,
        Body : bodyString
    }).then(message => {
        if (message == 'OK'){
            formMessage.innerText = "Message sent successfully.";
            console.log('message sent successfully');
        } else {
            formMessage.innerText = "Message not sent."
            formMessage.classList.add('error')
        }
    });
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
let reviewList = []
if (page == 'violinist' || page == 'hire-a-violinist-in-netherlands' || page == 'wedding-violinist-in-the-netherlands'){
    reviewList = [
        {stars: 5, date: 'December 12, 2022', name: 'Gabrielle C.', title:'AMAZING!!! 5 STARS', review: 'Michael was prompt and professional from the beginning! He quickly responded to my inquiry and sent over a detailed contract that made us so comfortable in trusting him to be our violinist for our wedding day. The event was a surprise, and Michael did a great job keeping it that way for us! :) He played a range from Frank Sinatra, to a song we requested from a personal favorite video game!!! If you are considering live music for your event, definitely put Michael at the top of your list!!!'},
        {stars: 5, date: 'August 30, 2022', name: 'Brooke R.', title:'Absolutely delightful!', review: 'Michael did such an amazing job at our wedding and exceeded all expectations. So many guests were talking about the amazing music he played and it really brought our ceremony to the next level. Michael even came outside to play during our “bubble exit” and did such a wonderful job. Very talented!!'},
        {stars: 5, date: 'November 30, 2021', name: 'Becca H.', title:'Responsive, Talented, and Passionate', review: 'We knew after perusing his YouTube channel and speaking with him briefly via phone that Michael Shingo Crawford was the perfect musician for our wedding. He was responsive, incredibly talented, and clearly passionate about his work. Michael was generous and accommodating, learning new songs at our request for the processional and recessional and playing outdoors in chilly conditions. The violin/cello duo\'s elegant performance left an impression on our guests, heightening the emotions of our day in a beautiful way. We will be forever thankful.'},
        {stars: 5, date: 'April 15, 2021', name: 'Alison P.', title:'So Much Joy!!', review: 'I hired Michael to come to my parents\' house as a surprise and play their wedding song on their front lawn for their anniversary. I had also asked him to play a few songs that were not on his usual play list and he learned them in a couple of weeks time and was flawless!!! The surprise and the joy and the excitement that he provided for this experience was the best gift I have ever given anyone! Michael was responsive, prompt and flexible with a rain date. Just an overall amazing experience!'},
        {stars: 5, date: 'November 2, 2020', name: 'Dina N.', title:'Excellent professional, highly recommend', review: 'Michael arrived early with his cellist. They were friendly, polite and the hit of my dinner party. We had classical music lovers in attendance who were especially overjoyed. Michael played pieces that perfectly fit the vibe of my Victorian Halloween party. He even went over the top and took time to prepare a specially requested piece..'}
    ];
}
else if (page == 'violinistNL'){
    reviewList = [
        {stars: 5, date: '12 December 2022', name: 'Gabrielle C.', title:'VERBAZINGWEKKEND!!! 5 STERREN', review: 'Michael was vanaf het begin snel en professioneel! Hij reageerde snel op mijn vraag en stuurde een gedetailleerd contract dat ons zo comfortabel maakte om hem te vertrouwen als onze violist voor onze trouwdag. Het evenement was een verrassing en Michael heeft geweldig werk geleverd om dat voor ons zo te houden! :) Hij speelde een reeks van Frank Sinatra tot een nummer dat we hadden aangevraagd uit een persoonlijk favoriet videospel!!! Als je livemuziek overweegt voor je evenement, zet Michael dan zeker bovenaan je lijst!!!'},
        {stars: 5, date: '30 Augustus 2022', name: 'Brooke R.', title:'Absoluut heerlijk!', review: 'Michael heeft geweldig werk geleverd op onze bruiloft en heeft alle verwachtingen overtroffen. Zoveel gasten spraken over de geweldige muziek die hij speelde en het bracht onze ceremonie echt naar een hoger niveau. Michael kwam zelfs naar buiten om te spelen tijdens onze "bubble exit" en deed het geweldig. Zeer getalenteerd!!'},
        {stars: 5, date: '30 November 2021', name: 'Becca H.', title:'Responsief, getalenteerd en gepassioneerd', review: 'Nadat we zijn YouTube-kanaal hadden bekeken en kort met hem hadden gesproken via de telefoon, wisten we dat Michael Shingo Crawford de perfecte muzikant was voor onze bruiloft. Hij was responsief, ongelooflijk getalenteerd en duidelijk gepassioneerd over zijn werk. Michael was genereus en meegaand, leerde op ons verzoek nieuwe liedjes voor de processie en recessie en speelde buiten in koude omstandigheden. Het elegante optreden van het viool/cello-duo maakte indruk op onze gasten en verhoogde de emoties van onze dag op een prachtige manier. We zullen eeuwig dankbaar zijn.        '},
        {stars: 5, date: '15 April 2021', name: 'Alison P.', title:'Zoveel Vreugde!!', review: 'Ik huurde Michael in om als verrassing naar het huis van mijn ouders te komen en hun trouwlied op hun voortuin te spelen voor hun jubileum. Ik had hem ook gevraagd om een ​​paar nummers te spelen die niet op zijn gebruikelijke speellijst stonden en hij leerde ze in een paar weken tijd en was foutloos!!! De verrassing en de vreugde en de opwinding die hij voor deze ervaring zorgde, was het beste cadeau dat ik ooit aan iemand heb gegeven! Michael was responsief, snel en flexibel met een regendatum. Gewoon een algehele geweldige ervaring!        '},
        {stars: 5, date: '2 November 2020', name: 'Dina N.', title:'Uitstekende vakman, zeer aan te bevelen', review: 'Michael arriveerde vroeg met zijn cellist. Ze waren vriendelijk, beleefd en de hit van mijn etentje. We hadden liefhebbers van klassieke muziek die vooral dolgelukkig waren. Michael speelde stukken die perfect pasten bij de sfeer van mijn Victoriaanse Halloweenfeest. Hij ging zelfs over de top en nam de tijd om een ​​speciaal gevraagd stuk voor te bereiden. .        '}
    ];
}
else if (page == 'lessons') {
    reviewList = [
        {stars: 5, date: 'April 22, 2020', name: 'Sulara N.', title:'Music Theory, In Studio', review: 'Michael\'s unique way of approaching the methods of teaching complex thoery in a very simple manner, is marvelous !! He is kind and patient and has these rare qualities as a well deserved teacher. Michael is also a very respected and a well known amazing violinist and composer with a unique identity!! I believe the community is very fortunate to have such a wonderful teacher and musician of his caliber !!'},
        {stars: 5, date: 'April 22, 2020', name: 'Takashima K.', title:'Violin and Piano, In Studio', review: 'We took violin lessons with him(Mother and my son). He\’s knowledgeable,professional and friendly! I appreciated it that he gives us very practical advice until for next time. He\’s playing violin model for us,it\’s really gracious,you\’ll see!! Actually,he can speak Japanese,too! If there\’s parent who would want to communicate with teacher in Japanese,it would be really helpful for you!'},
        {stars: 5, date: 'April 23, 2020', name: 'Tanush T.', title:'Viola, In Studio/Online', review: 'Micheal is a fantastic teacher that manages to solve every question and problem I have about my instrument. His teaching technique breaks down complex things into easy-to-understand lessons that help give me and his other students great comprehension of the topics that we need to know to become better musicians. I sincerely cannot recommend him enough to beginning and intermediate musicians.'},
        {stars: 5, date: 'April 25, 2020', name: 'Akshay R.', title:'Violin, In Studio', review: 'Michael is very talented and he is a great instructor. He explains the techniques really well. Very professional and supportive. I highly recommend him!'},
        {stars: 5, date: 'April 28, 2020', name: 'Paige Q.', title:'Violin In Studio/Online', review: 'I have been a student of Michael’s for approximately 7 months. My only previous experience with violin had been one year in elementary school band class and 8 months with a private teacher. When my private teacher’s lesson schedule changed, I was introduced to Michael and was greatly impressed by his skill level and teaching style. I have learned so much more than I had expected in each lesson, like how to self-tune, use a metronome, shift, and various other techniques...'}
    ];
    
}

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


