const buttons = document.querySelectorAll(".details-button");
const details = document.querySelectorAll(".program-details");

buttons.forEach( function(button) {

    button.addEventListener("click", function() {
        
        // hide all details divs
        details.forEach(function(item) {
            item.hidden = true;
        });


        // find and show the relevane program details
        const target = button.dataset.target;
        document.getElementById(target).hidden = false;

    });

});

const form = document.querySelector("#regis-form");
const confirmation = document.querySelector("#confirm-message");


form.addEventListener("submit", function(event) {
    
    event.preventDefault();

    const name = document.querySelector("#regis-name").value;
    const program = document.querySelector("#regis-program").value;

    const message = "Thanks, " + name + ", for registering for " + program + "!";

    confirmation.textContent = message;

    confirmation.hidden = false;

});