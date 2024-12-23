

const tabs=document.querySelectorAll('[data-target]');
tabContents=document.querySelectorAll('[data-content]');

tabs.forEach((tab)=>{
tab.addEventListener('click',()=>{
const target=document.querySelector(tab.dataset.target);
// console.log(target);

tabContents.forEach((tabContent)=>{
    tabContent.classList.remove('tab_active')
})
target.classList.add('tab_active');

tabs.forEach((tab)=>{
    tab.classList.remove('tab_active')
});
tab.classList.add('tab_active');
});
});

// contact Form
const contactForm=document.getElementById('contact-form');
const contactName=document.getElementById('contact-name');
const contactEmail=document.getElementById('contact-email');
const contactMessage=document.getElementById('contact-message');
const contactSubject=document.getElementById('contact-subject');
const errorMessage=document.getElementById('error-message');

const sendEmail=(e)=>{
e.preventDefault();

if(contactName.value===''||
    contactEmail.value===''||
    contactMessage.value===''||
    contactSubject.value===''
)
{
    errorMessage.textContent='Write all the input Fields';
    }
else{
    emailjs.sendForm(
// serviceid templateid #Myformid publickey
'service_0cfsmsm',
'template_511vjbn',
'#contact-form',
'v26BdIM0NLPILgZ-1'    
    )
    .then(()=>{
    errorMessage.classList.add('color-first')
    errorMessage.textContent="message Sent"

    setTimeout(() => {
    errorMessage.textContent='';
    }, 5000);
    },
    (error)=>{
alert('Oops Something went Worng,',error);
    })
    //clear the form
    contactName.value='';
    contactEmail.value='';
    contactMessage.value='';
    contactSubject.value='';
}
};
contactForm.addEventListener('submit',sendEmail)


// Change Background Header
function scrollHeader(){
    const header=document.getElementById('header');
    if(this.scrollY>=80) header.classList.add('scroll-header');
    else header.classList.remove('scroll-header');
}
window.addEventListener('scroll',scrollHeader);

// scroll up

function scrollUp(){
    const scrollUp=document.getElementById('scroll-up');
    //              viewport
    if(this.scrollY>=350) scrollUp.classList.add('show-scroll');
    else scrollUp.classList.remove('show-scroll');
}
window.addEventListener('scroll',scrollUp);


// Show Menu For responsive websites

const navMenu=document.getElementById('nav-menu');
navToggle=document.getElementById('nav-toggle');
navClose=document.getElementById('nav-close');

if(navToggle){
    navToggle.addEventListener('click',()=>{
        navMenu.classList.add('show-menu');
    })
}
if(navClose){
    navClose.addEventListener('click',()=>{
        navMenu.classList.remove('show-menu');
    })
}
// when we click on each nav link,we should remove the show menu class
const navLink=document.querySelectorAll('.nav_link');

function linkAction(){
    const navMenu=document.getElementById('nav-menu');
    navMenu.classList.remove('show-menu');
}
navLink.forEach((n)=>n.addEventListener('click',linkAction))
