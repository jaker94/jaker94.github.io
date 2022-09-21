//template_ezrf6j9
//service_5gg2gw9
// hwFZxrP-CJNPfG8Hh

let isModalOpen = false;
let contrastToggle = false;

function toggleContrast() {
    
    contrastToggle = !contrastToggle;
    if(contrastToggle === true) {
        document.body.classList += " dark-theme"
        
    }
    else {
        document.body.classList.remove("dark-theme")
    }
}

function contact(event) {
    event.preventDefault();
    const loading = document.querySelector('.modal__overlay--loading');
    const success = document.querySelector('.modal__overlay--success');
    loading.classList += " modal__overlay--visible";

     emailjs
         .sendForm(
             'service_5gg2gw9',
             'template_ezrf6j9',
             event.target,
             'hwFZxrP-CJNPfG8Hh'
         ).then(() => {
            loading.classList.remove("modal__overlay--visible");
            success.classList += " modal__overlay--visible"
         }).catch(() => {
            loading.classList.remove("modal__overlay--visible");
            alert(
                "The email service is temporarily unavailable. Please contact me directly at jacobregisterfese@gmail.com"
            )
         })
}


function toggleModal() {
    if(isModalOpen) {
        isModalOpen = false;
        return document.body.classList.remove("modal--open");
    }
    isModalOpen = true;
    document.body.classList += " modal--open"
}