// Check If There is Loacl Storage Color Option
let mainColors = localStorage.getItem("color_option");

if (mainColors !== null) {

    document.documentElement.style.setProperty("--main-color", mainColors);

    // Remove Active Class From All colors List Item
    document.querySelectorAll(".colors-list li").forEach(element => {
        element.classList.remove("active");

        // Add Active Class On Element with Data-color  === Local Storage Item
        if (element.dataset.color === mainColors) {

            // Add Active Class
            element.classList.add("active")
        }
    });
}

// Random Background Option
let backgroundOption = true;

// Variable To Control The Background Interval
let backgroundInterval;

// Check If There is Local Storage Random Background Item
let backgroundLocalItem = localStorage.getItem("background_option");

// Check If random Background Local Storage Is Not Empty
if (backgroundLocalItem !== null) {
    if (backgroundLocalItem === "true") {

        backgroundOption = true;

    }else {

        backgroundOption = false;

    }

    // Remove Active Class From All Span

    document.querySelectorAll(".random-backgrounds span").forEach(element => {
        element.classList.remove("active")
    });

    if (backgroundLocalItem === "true") {
        document.querySelector(".random-backgrounds .yes").classList.add("active")
    }else{
        document.querySelector(".random-backgrounds .no").classList.add("active")

    }
}

// Toggle Spin Class On Icon 
document.querySelector(".toggle-settings .fa-cog").onclick = function () {
    
    // Toggle Class Fa-spin For Rotaion On Self
    this.classList.toggle("fa-spin")

    // Toggle Class Open On Main Settings Box
    document.querySelector(".settings-box").classList.toggle("open") 
}


// Switch Colors
const colorsLi = document.querySelectorAll(".colors-list li");

// Loop On All List Items
colorsLi.forEach(li => {
    
    // Click On Every List Items
    li.addEventListener("click", (e) => {

        // Set Color On Root
        document.documentElement.style.setProperty("--main-color", e.target.dataset.color);

        // Set Color On Local Storage
        localStorage.setItem("color_option", e.target.dataset.color);

        handleActive(e)
    })
})
// Switch Random Background Option
const randomBackEl = document.querySelectorAll(".random-backgrounds span");

// Loop On All Spans
randomBackEl.forEach(span => {
    
    // Click On Every Spans
    span.addEventListener("click", (e) => {


        handleActive(e);

        if (e.target.dataset.background === "yes") {

            backgroundOption = true;

            randomizeImgs();

            localStorage.setItem("background_option", true);

        }else {

            backgroundOption = false;

            clearInterval(backgroundInterval);

            localStorage.setItem("background_option", false);

        }
    })
})

// Select Landing Page Element
let landingPage = document.querySelector(".landing");

//Get Array Of Imgs
let imgsArray = ["photo1.jpg","photo2.jpg", "photo3.jpg", "photo4.jpg", "photo5.jpg","photo6.jpg", "photo7.jpg", "photo1.jpg"];


// Function To Randomize Imgs
function randomizeImgs() {
    if (backgroundOption === true) {

        backgroundInterval = setInterval(() => {
            // Get Random Number 
            let randomNumber = Math.floor(Math.random() * imgsArray.length);
        
            // Change Background Image Url 
            landingPage.style.backgroundImage = 'url("img/' + imgsArray[randomNumber] + '")';
        }, 2000)
    }
}

randomizeImgs();


// Select services Selector
let Ourservices = document.querySelector(".services");

window.onscroll = function () {
    
    
    // services Offset Top
    let servicesOffsetTop = Ourservices.offsetTop;

    // services Outer Height
    let servicesOuterHeight = Ourservices.offsetHeight;

    // Window Height
    let windowHeight = this.innerHeight;

    // window ScrollTop
    let windowScrollTop = this.pageYOffset;

    if (windowScrollTop > (servicesOffsetTop + servicesOuterHeight - windowHeight)) {

        let allservices = document.querySelectorAll(".skill-box .skill-progress span");

        allservices.forEach(skill => {

            skill.style.width = skill.dataset.progress;

        })
        
    }
    if (window.scrollY >= statsSection.offsetTop - 200) {
        if (!started) {
          nums.forEach((num) => startCount(num));
        }
        started = true;
      }
      
    }
   


// Create popup With The Image
let ourGallery = document.querySelectorAll(".gallery img");

ourGallery.forEach(img => {
    
    img.addEventListener("click", (e) => {
        

        // Create OverLay Element
        let overlay = document.createElement("div");
        
        // Add Class To Overlay
        overlay.className = "popup-overlay";

        // Append Overlay To The Body
        document.body.appendChild(overlay);

        // Create The Popup Box
        let popupBox = document.createElement("div");

        // Add Class To The Popup Box
        popupBox.className = "popup-box";

        if (img.alt !== null) {

            // Create Heading
            let imgHeading = document.createElement("h3")

            // Create Text For Heading
            let ImgText = document.createTextNode(img.alt);

            // Append The Text To The Heading
            imgHeading.appendChild(ImgText);

            // Append The Heading To the Popup Box
            popupBox.appendChild(imgHeading)
        }

        // Create The Image
        let popupImage = document.createElement("img");

        // Set Image Source
        popupImage.src = img.src;

        // Add Image To Popup Box
        popupBox.appendChild(popupImage);

        // Append The Popup Box To Body
        document.body.appendChild(popupBox);

        // Create The Close Span 
        let closeButton = document.createElement("span");

        // Create The Close Button Text
        let closeButtonText = document.createTextNode("X");

        // Append Text To The Close Button
        closeButton.appendChild(closeButtonText);

        // Add Class To The Close Buttton
        closeButton.className = "close-button";

        // Add Close Button To The Popup Box
        popupBox.appendChild(closeButton);

    })
});

// Close Popup 
document.addEventListener("click", (e) => {

    if (e.target.className == "close-button") {

        // Remove The Current Popup
        e.target.parentNode.remove();

        // Remove Overlay
        document.querySelector(".popup-overlay").remove();
    }
})

// Select All Bullets
const allBullets = document.querySelectorAll(".nav-bullets .bullet");


// Select All links
const allLinks = document.querySelectorAll(".links a");



function scrollToSomeWhere(element) {

    element.forEach(ele => {

        ele.addEventListener("click", (e) => {
    
            e.preventDefault()
    
            document.querySelector(e.target.dataset.section).scrollIntoView({
    
                behavior: "smooth"
            })
        })
    })
}

scrollToSomeWhere(allBullets);
scrollToSomeWhere(allLinks);

// Handle Active State 
function handleActive(ev) {

    // Remove Active Class From All Childrens
    ev.target.parentElement.querySelectorAll(".active").forEach(element => {
        element.classList.remove("active");
    });

    // Add Active Class On Self
    ev.target.classList.add("active");
}


let bulletsSpan = document.querySelectorAll(".bullets-option span");

let bulletsContainer = document.querySelector(".nav-bullets");

let bulletsLocaItem = localStorage.getItem(".bullets_option");

if (bulletsLocaItem !== null) {

    bulletsSpan.forEach(span => {

        span.classList.remove("active");

    });

    if (bulletsLocaItem === "block") {

        bulletsContainer.style.display = "block";

        document.querySelector(".bullets-option .yes").classList.add("active");
        
    }else {

        bulletsContainer.style.display = "none";

        document.querySelector(".bullets-option .no").classList.add("active");
    }

}

bulletsSpan.forEach(span => {

    span.addEventListener("click", (e) => {

        if (span.dataset.display === "show") {

            bulletsContainer.style.display = "block";

            localStorage.setItem(".bullets_option", "block");

        }else {

            bulletsContainer.style.display = "none";

            localStorage.setItem(".bullets_option", "none");
        }

        handleActive(e)

    })
});

// Rest Button 
document.querySelector(".rest-options").onclick = function () {

    // localStorage.clear();
    localStorage.removeItem("color_option");
    localStorage.removeItem("background_option");
    localStorage.removeItem("bullets_option");

    // Reload Window
    window.location.reload();
}

// Toggle Menu 
let toggleBtn = document.querySelector(".toggle-menu");
let tLinks = document.querySelector(".links");

toggleBtn.onclick = function (e) {

    // Stop Propagation
    e.stopPropagation();

    // Toggle Class "menu-active" On Button
    this.classList.toggle("menu-active");
    
    // Toggle Class "Open" On Links
    tLinks.classList.toggle("open");
}

// Click Anywhere Outside Menu And Toggle Button
// document.addEventListener("click", (e) => {

//     if (e.target !== toggleBtn && e.target !== tLinks) {

//         // Check If Menu Is Open
//         if (tLinks.classList.contains("open")) {

//             // Toggle Class "menu-active" On Button
//             toggleBtn.classList.toggle("menu-active");
            
//             // Toggle Class "Open" On Links
//             tLinks.classList.toggle("open");

//         }

//     }
// });

// Stop Propagation On Menu
// tLinks.onclick = function (e) {
//     e.stopPropagation();
// }

// Typewriter Effects with js

let i = 0,
text;

text = "copyright by mazraeat alabqar 2024"

function typing () {
  if (i<text.length) {
    document.getElementById("text").innerHTML += text.charAt(i);
    i++;
    setTimeout(typing,30)
  }
}
typing();



//Start section stats
let section = document.querySelector(".stats");

let nums = document.querySelectorAll(".stats .number");
let statsSection = document.querySelector(".stats");
let started = false; // Function Started ? No

function startCount(el) {
  let goal = el.dataset.goal;
  let count = setInterval(() => {
    el.textContent++;
    if (el.textContent == goal) {
      clearInterval(count);
    }
  }, 2000 / goal);
}

 // ButtonTop
 let mybutton = document.getElementById("myBtn");
     
 if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
   mybutton.style.display = "block";
 } else {
   mybutton.style.display = "none";
 }

 mybutton.onclick = function () {
     window.scrollTo({
       top: 0,
       behavior: "smooth",
     });
   };