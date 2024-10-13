// random text code for who I am
var typed = new Typed(".multiple-text", {
    strings: ["Frontend Developer", "Youtuber", "Programming Trainer"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

//for responsive menu 
function toggleMenu() {
    const menuToggle = document.querySelector('.menuToggle');
    const navigation = document.querySelector('.navBar');
    menuToggle.classList.toggle('active');
    navigation.classList.toggle('active');
};

//when page will scrolled then header will get class name = 'sticky'
window.addEventListener("scroll", function () {
    const header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 0);
});

//dark light theme change
const icon = document.querySelector('.sun-moon');
icon.onclick = () => {
    document.body.classList.toggle('dark');
    if (icon.classList.contains("bxs-sun")) {
        icon.classList.remove('bxs-sun');
        icon.classList.add('bxs-moon');
    }else {
        icon.classList.remove('bxs-moon');
        icon.classList.add('bxs-sun');
    }
}

//skill section with DOM
const skilsArr = ["HTML", "CSS", "Bootsrap", "Tailwind CSS", "Javascript", "React", "nodeJS", "Express","Responsive Design", "Github", "Flutter"];
const skillsIcons = ["<i class='bx bxl-html5'></i>", "<i class='bx bxl-css3' ></i>", "<i class='bx bxl-bootstrap' ></i>", "<i class='bx bxl-tailwind-css' ></i>", "<i class='bx bxl-javascript' ></i>", "<i class='bx bxl-react' ></i>", "<i class='bx bxl-nodejs'></i>" , "<i class='bx bx-leaf'></i>" ,"<i class='bx bx-devices' ></i>", "<i class='bx bxl-github'></i>", "<i class='bx bxl-flutter'></i>"];
const skillsColors = ["Tomato", "DodgerBlue", "SlateBlue", "rgb(15, 184, 240);", "rgb(228, 175, 0)", "rgb(15, 184, 240)" ,"#6cc24a", "gray" ,"Violet", "#6cc644","rgb(15, 184, 240)"];

const skillsDiv = document.querySelector(".skillsContent");
skilsArr.map((val, index) => {
    skillsDiv.innerHTML += `<div class="skillItem" style="--j:${0+index}; background-color: ${skillsColors[index]};">
    ${skillsIcons[index]}
    <p>${val}</p></div>`
});

//portfolio section with DOM
const portfolioImgs = ["./assets/portfolio1.png", "./assets/portfolio2.png", "./assets/portfolio3.png", "./assets/portfolio4.png", "./assets/portfolio5.png", "./assets/portfolio6.png", "./assets/flutter1.png", "./assets/flutter2.png"];
const portfolioHeadings = ["SEO Company Website", "Travel Company Website", "Fruit Shop Website", "Food website", "Restaurant Website", "Link Monitoring App using nodeJS","E-Commerce Android App using Flutter", "News Android App using Flutter"];
const portfolioDetails = ["This is fully responsive SEO Company Website using HTML5, TailwindCSS and a little bit javascript",
    "Fully responsive travel website using HTML, CSS and Javascript",
    "Fruit Shop Website using ReactJS, TailwindCSS, Framer Motions & React Icons",
    "Fully responsive food website using HTML, CSS and Javascript",
    "This is a restaurant web app using reactJS and tailwindCSS. Its is fully responsive website.",
    "This app is to monitor any website if the website is up or down on basis of given response code using core nodeJS",
    "This is an ecommerce app using flutter and firebase database for android.",
    "This is a simple news app using flutter for android"
]
const portfolioLinks = ['https://mdimranhossain05.github.io/SEO-Company-Website/',
    'https://mdimranhossain05.github.io/travel_website/',
    'https://fruitshop12.netlify.app/',
    'https://mdimranhossain05.github.io/food_website/',
    'https://restaurant2323.netlify.app/',
    'https://github.com/Mdimranhossain05/URL-up-down-monitoring-app-using-nodeJS/',
    'https://github.com/Mdimranhossain05/E-Commerce-App-In-Flutter-With-Firebase',
    'https://github.com/Mdimranhossain05/News-App-UI-in-Flutter/tree/master'
]

const portfolioContent = document.querySelector(".portfolio-content");
portfolioImgs.map((val,index) => {
    portfolioContent.innerHTML += `<div onclick="window.open('${portfolioLinks[index]}')" class="portfolioImg" style="--k:${0+index};};"><img src=${val} alt="" >
    <div class="portfolio-desc">
        <h5>${portfolioHeadings[index]}</h5>
        <p>${portfolioDetails[index]}</P>
        </div>
        </div>`
});

//intersection animation
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting && entry.target.classList.contains('about-image-img')) {
            entry.target.classList.add('img-scroll-anim');
        }
        if (entry.isIntersecting && entry.target.classList.contains('about-content-p')) {
            entry.target.classList.add('about-content-anim');
        }
        if (entry.isIntersecting && entry.target.classList.contains('about-heading')) {
            entry.target.classList.add('about-content-h-anim');
        }
        if (entry.isIntersecting && entry.target.classList.contains('skills-heading')) {
            entry.target.classList.add('about-content-h-anim');
        }
        if (entry.isIntersecting && entry.target.classList.contains('skillItem')) {
            entry.target.classList.add('skillItem-anim');
        }
        if (entry.isIntersecting && entry.target.classList.contains('portfolio-heading')) {
            entry.target.classList.add('about-content-h-anim');
        }
        if (entry.isIntersecting && entry.target.classList.contains('portfolioImg')) {
            entry.target.classList.add('portfolioItem-anim');
        }
        if (entry.isIntersecting && entry.target.classList.contains('contact-heading')) {
            entry.target.classList.add('about-content-h-anim');
        }
        if (entry.isIntersecting && entry.target.classList.contains('contact-details')) {
            entry.target.classList.add('contact-details-anim');
        }
        if (entry.isIntersecting && entry.target.classList.contains('contact-form')) {
            entry.target.classList.add('contact-form-anim');
        }
        if (entry.isIntersecting && entry.target.classList.contains('footer')) {
            entry.target.classList.add('footer-anim');
        }
    });
});
const animImg = document.querySelector('.about-image-img');
const animP = document.querySelector(".about-content-p");
const animH = this.document.querySelector('.about-heading');
const aboutHeading = document.querySelector('.skills-heading');
const skillItems = document.querySelectorAll('.skillItem');
const portfolioHeading = document.querySelector('.portfolio-heading');
const portfolioItems = document.querySelectorAll('.portfolioImg');
const contactHeading = document.querySelector('.contact-heading');
const contactDetails = document.querySelector('.contact-details');
const contactForm = document.querySelector('.contact-form');
const footer = document.querySelector('.footer');

observer.observe(animImg);
observer.observe(animP);
observer.observe(animH);
observer.observe(aboutHeading);
skillItems.forEach((el) => observer.observe(el));
observer.observe(portfolioHeading);
portfolioItems.forEach((el) => observer.observe(el));
observer.observe(contactHeading);
observer.observe(contactDetails);
observer.observe(contactForm);
observer.observe(footer);



//w: 1360, h: 768
