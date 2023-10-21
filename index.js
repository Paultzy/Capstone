let navbar = document.querySelector('.navbar');
document.querySelector('#menu-bar').onclick=() =>{
    navbar.classList.toggle('active');
}

let search = document.querySelector('.search');
document.querySelector('#search').onclick=() =>{
    search.classList.toggle('active');
}

var swiper = new Swiper(".product-row", {
    spaceBetween: 30,
    loop:true,
    centeredSlides:true,
    autoplay:{
        delay:9500,
        disableOnInteraction:false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    },
  });
var swiper = new Swiper(".blogs-row", {
    spaceBetween: 30,
    loop:true,
    centeredSlides:true,
    autoplay:{
        delay:9500,
        disableOnInteraction:false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation:{
        nextE1 :".swiper-button-next",
        prevE1 :".swiper-button-prev",
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 1,
      },
      1024: {
        slidesPerView: 1,
      },
    },
  });

  var swiper = new Swiper(".review-row", {
    spaceBetween: 30,
    loop:true,
    centeredSlides:true,
    autoplay:{
        delay:9500,
        disableOnInteraction:false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    },
  });

  const fileInput = document.getElementById("fileInput");
const imagePreview = document.getElementById("preview");

fileInput.addEventListener("change", function () {
    const file = fileInput.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function (e) {
            imagePreview.src = e.target.result;
        };
        reader.readAsDataURL(file);
    } else {
        imagePreview.src = "images/user3.png"; 
    }
});

const signBTN = document.getElementById("signupbutton");
const enterLogin = document.getElementById("loginform");
const enterSignup = document.getElementById("signupform");

signBTN.addEventListener('click', () => {
    $('#wrapper-modals').modal('hide'); // Hide the login modal
    $('#wrapper-modal').modal('show'); // Show the signup modal
});

enterLogin.addEventListener('click', () => {
    $('#wrapper-modal').modal('hide'); // Hide the signup modal
    $('#wrapper-modals').modal('show'); // Show the login modal
});

enterSignup.addEventListener('click', () => {
    $('#wrapper-modals').modal('hide'); // Hide the login modal
    $('#wrapper-modal').modal('show'); // Show the signup modal
});

  const inputBox = document.querySelector(".input-field");
  const submitBTN = document.querySelector(".signupbutton");
  const loginBTn = document.querySelector(".loginBtn");
  const changeDiv = document.querySelector(".singupBtn"); 

  loginBTn.onsubmit = (e) => {
    e.preventDefault();
  }
  
  submitBTN.onsubmit = (e) => {
    e.preventDefault();
  }

  submitBTN.addEventListener("click", function() {
    // Get input values
    const fname = document.getElementById("fname").value;
    const lname = document.getElementById("lname").value;
    const fileInput = document.getElementById("fileInput").files[0];
    const email = document.getElementById("email").value;
    const pass = document.getElementById("pass").value;

    const fileName = fileInput ? fileInput.name : '';
  
    // Create a FormData object to send files
    const formData = new FormData();
    formData.append('file', fileName);
    formData.append('fname', fname);
    formData.append('lname', lname);
    formData.append('email', email);
    formData.append('password', pass);
  
    const formDataJSON = JSON.stringify(Object.fromEntries(formData));
    console.log(formDataJSON);
    $('#wrapper-modal').modal('hide'); // Hide the signup modal
    $('#wrapper-modals').modal('show'); // Show the login modal
  }); 

  loginBTn.addEventListener('click', function() {
    let email = document.getElementById("email").value;
    let password = document.getElementById("pass").value;
    const SBTN = document.getElementById("signupbutton");

    const log_data = new FormData();
    log_data.append('email', email);
    log_data.append('password', password);

    changeDiv.innerHTML = '';

    let profile = document.createElement("div");
    profile.classList.add("profileDiv");

    let profImg = document.createElement("img");
    profImg.src = 'images/user3.png'

    profile.appendChild(profImg);
    changeDiv.appendChild(profile);
    changeDiv.replaceChild(SBTN, SBTN.childNodes[0]); 

    const loginFormData = JSON.stringify(Object.fromEntries(log_data))
    console.log(loginFormData);
    $('#wrapper-modals').modal('hide'); // Show the login modal
  })
  