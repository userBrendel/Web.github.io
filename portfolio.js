

///----- LOADER SCRIPT ------///
window.addEventListener("load", () => { // eventlistener that checks when the webpage load
  const loader = document.querySelector(".loader"); 
  document.body.style.overflow = "hidden"; // here i hide the scroll bar while loader is ongoing   
  const content = document.getElementById("content");  
  const delay = 4000; // making a variable that makes it 4sec delay to show class 'content'
  loader.classList.add("loader-hidden"); //The loader-hidden CSS would add in. This will make the loader gone
  
// This is to  delay before showing the content
setTimeout(() => {
  content.classList.remove("loader-hidden"); //put in the CSS class '.loader-hidden'
    document.body.style.overflow = ""; // After the loader is hidden it will restore scrolling
    }, delay);// the delay variable
  
loader.addEventListener("transitionend", () => { //eventlistener when it transition
    document.body.removeChild(document.querySelector(".loader")); // remove loader
    document.body.style.overflow = ""; //show content
  });
  
});

//--------------------- MAKING A CREATIVE CURSOR  -----------------/

document.addEventListener("mousemove", function(event) { // eventlistener 'mousemove'is typically use in this case
  const cursor = document.querySelector(".cursor"); // defining cursor
  // to be able to move
  cursor.style.left = event.clientX + "px";
  cursor.style.top = event.clientY + "px";
});


//-------------------- TYPE WRITER PLUGIN ----------//

// i got this from github
const typewriter = new Typewriter('.changetext', {
    strings: ['UserBrendel', 'a Coder', 'a Designer',], // i change the strings
    autoStart: true,
    loop: true,
});




///----- ACTIVE NAV ITEM -----///
//Here a create the script that triggers the active CSS class when the user is in that viewpoint
const sections = document.querySelectorAll('section');
const navItems = document.querySelectorAll('header nav a');

//-- a onscroll event // loop // collects data
window.onscroll = () => {
 sections.forEach(sec => {// for each section
  const top = window.scrollY; // This gets the scroll position 
  const offset = sec.offsetTop; //This gets the off set top
  const height = sec.offsetHeight; // This gets the height of the section
  const id = sec.getAttribute('id'); // This gets the id of the section // the id include the link within the page

  // checking the position
if (top >= offset && top < offset + height) {
    navItems.forEach(item => {
    item.classList.remove('active'); //remove the active when not in that section

  // checking if the menu item is matching with the sections href match the id
if (item.getAttribute('href').slice(1) === id) {
    item.classList.add('active'); //add when it matches the menu item
        }
      });
    }
  });
};

// When the item is press it should active
navItems.forEach(item => { // applies to all nav item
  item.addEventListener('click', (event) => { //when clicked//
  event.preventDefault(); //it will prevent showing the default link behavior
     
  //with that we also have to remove 'active' class
    // here i remove 'active' class from all menu bar items
navItems.forEach(navItem => {
navItem.classList.remove('active');
  });

  // and then, here I add 'active' class to the clicked menu bar item
item.classList.add('active');

    // When clicked it goes to the corresponding link or id
const targetId = item.getAttribute('href').slice(1);
const targetSection = document.getElementById(targetId);
    
targetSection.scrollIntoView({ behavior: 'smooth' }); // making the scroll smooth 
  });
});



//================== ANIMATION SCROLL ================//

//Similar to on scroll active menu bar on scroll 
//here i did it for simple animation  that will only trigger when user is in the viewpoint

window.addEventListener('scroll', function() { //eventlistener when scrolled
 var aboutContentElements = document.querySelectorAll('.about-content');

aboutContentElements.forEach(function(element) { //defining and getting data // this variable is to be use at if statement
 var position = element.getBoundingClientRect();
 var windowHeight = window.innerHeight;

 //if-else statement to trigger animation if use in that position. if else it will not execute

//The part where it will check if the content is visible portion of the viewpoint 
if (position.top < windowHeight * 0.5 && position.bottom >= 0) { // to calculate if user position
      element.classList.add('fade-in'); // if visible the CSS fade-in would show/add
    } 

else { 
      element.classList.remove('fade-in');// if not visible it will hide it / remove
    }
  });
});


//Another on scroll animation for my svg // in quite different way
window.addEventListener('scroll', function() {
 var container = document.querySelector('.container3'); // defining variables
 var path = container.querySelector('path');
 var pathTop = path.getBoundingClientRect().top; // defining this to calculate the top position of path
 var pathOffset = window.innerHeight * 0.8; // here i made a variable to show my desired position to trigger the animation

 //if-else 
 //here as the pattern i'm doing. I calculate the viewpoint with my variables
if (pathTop - pathOffset <= 0) {
    container.classList.add('svg-scroll'); // If visible - add
  } 
  
else {
    container.classList.remove('svg-scroll'); // If not - remove
  }
});


window.addEventListener('scroll', function() { //event listener when scrolled
 var aboutContentElements = document.querySelectorAll('.box1 h2');

aboutContentElements.forEach(function(element) {
  var position = element.getBoundingClientRect();
  var windowHeight = window.innerHeight;

//The part where it will check if the content is visible portion of the viewpoint 
if (position.top < windowHeight * 0.5 && position.bottom >= 0) {
      element.classList.add('fade-in'); // if visible the CSS fade-in would show/add
    } 

else {
      element.classList.remove('fade-in');// if not visible it will hide it / remove
    }
  });
});


/* =============== LIGHT AND DARK ===========*/

// Lastly, I decided to add a toggle button for light and dark theme

//Defining variable and getting it by id
var changeThemeBtnLight = document.getElementById('theme-change-light'); //for light button / moon button
var changeThemeBtnDark = document.getElementById('theme-change-dark'); // for dark button / sun button
var body = document.querySelector('body');

//Here im removing the dark theme in default
changeThemeBtnDark.style.display = 'none';

//Then i go on and add a eventlistener that when click
// it will change to dark mode and the light button would change
changeThemeBtnLight.addEventListener('click', function() { //when click
body.classList.add('dark-theme'); // it will add 'dark-theme' // dark-theme is from my CSS
  changeThemeBtnLight.style.display = 'none'; //i hide the light - theme button when click
  changeThemeBtnDark.style.display = 'block'; // and add the dark - theme button
});// in this way when the user is in dark mode,  they'll see a sun button which means pressing it would go back to light mode.


// Vice Verse
changeThemeBtnDark.addEventListener('click', function() {
body.classList.remove('dark-theme');
  changeThemeBtnDark.style.display = 'none'; //I replaced the variable
  changeThemeBtnLight.style.display = 'block';
});


/*=============================== TO LET USER SEND MSG ON MY EMAIL ====================*/


function sendEmail() { // to send the info at my email

//defining variable to be used 
 var name = document.getElementById('name').value; // getting variables in Ids
 var email = document.getElementById('email').value;
 var msg = document.getElementById('msg').value;
//A message that well show at my email
 var body = 'Name: ' + name + '<br/>' + 'Email: ' + email + '<br/>' + 'Subject: ' + msg + '<br/>' + 'Message: ' + msg + '<br/>' + 'Your message has been sent';

  //i got this online 
  // i used the variable that i make here
  Email.send({
    Host: "smtp.gmail.com",
    Username: "brixecanlas@gmail.com",
    Password: 'rvzhxtwsiroktshi',
    To: 'brixecanlas@gmail.com',
    From: email,
    Subject: "inqury mail",
    Body: body, 

    // a alert to tell the user that they have successfully sent a message
  }).then(function(message) {
    if (msg.trim() !== '' && email.trim() !== '' && name.trim() !== '') { //if the ids have a data
      alert('You have successfully sent a message');//show
    }
  });
}










