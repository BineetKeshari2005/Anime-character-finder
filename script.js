

document.addEventListener("DOMContentLoaded", function() {
    const loginButton = document.querySelector(".navigation .login");
    const popupWrapper = document.querySelector(".wrapper");
    const closeButton = document.querySelector(".icon-close");

    
    loginButton.addEventListener("click", function() {
        popupWrapper.classList.add("active-popup");
    });

  
    closeButton.addEventListener("click", function() {
        popupWrapper.classList.remove("active-popup");
    });

});

