// ===========================
// Booking Form Validation
// ===========================

const bookingForm = document.querySelector("form");

bookingForm.addEventListener("submit", function(e){

    e.preventDefault();

    const name = document.querySelector('input[type="text"]').value.trim();

    const email = document.querySelector('input[type="email"]').value.trim();

    const phone = document.querySelector('input[type="tel"]').value.trim();

    const date = document.querySelector('input[type="date"]').value;

    const today = new Date().toISOString().split("T")[0];

    if(name === ""){

        alert("Please enter your name.");

        return;

    }

    if(!email.includes("@") || !email.includes(".")){

        alert("Please enter a valid email address.");

        return;

    }

    if(phone.length != 10 || isNaN(phone)){

        alert("Please enter a valid 10-digit phone number.");

        return;

    }

    if(date < today){

        alert("Please select a future event date.");

        return;

    }

    alert("🎉 Booking Submitted Successfully!\n\nThank you for choosing Tharunya Events.");

    bookingForm.reset();

});