
gsap.from("header h1",{
    opacity:0,
    duration:1,
    y:50,
    delay:1,
    stagger:1

})

gsap.from("img ",{
    opacity:0,
    duration:1,
    y:50,
    delay:2,
    stagger:1

})

gsap.from("about, b ,p,h2",{
    opacity:0,
    duration:1,
    y:50,
    delay:3,
    stagger:1

})




gsap.from("ul",{
    opacity:0,
    duration:0.5,
    y:50,
    delay:1,
    stagger:1

})

gsap.from("a",{
    opacity:0,
    duration:0.5,
    y:50,
    delay:1,
    stagger:1

})







// Smooth Scroll for Navigation Links
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        // Get the target ID from href and scroll to the section
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 60, // Adjust scroll position for any fixed headers
                behavior: 'smooth' // Smooth scrolling effect
            });
        }
    });
});

// Simple Contact Form Validation
document.getElementById('contact-form').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form submission

    // Get form fields
    const name = this.querySelector('input[type="text"]').value.trim();
    const email = this.querySelector('input[type="email"]').value.trim();
    const message = this.querySelector('textarea').value.trim();

    // Basic validation: check if fields are not empty
    if (!name || !email || !message) {
        alert("Please fill in all fields.");
    } else {
        alert("Message sent successfully!");

        // Reset the form after successful submission
        this.reset();
    }
});

/*document.addEventListener('DOMContentLoaded', function() {
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "wordp726@gmail.com",
        Password : "Kumar@054",
        To : 'kc893825@gmail.com',
        From : document.getElementById("email"), // Corrected
        Subject : "new contact query",
        Body :" name: " + document.getElementById("name")

        + "<br> Email:" + document.getElementById("email")

        + "<br> Messege:" + document.getElementById("messege")

    }).then(
        message => alert("message sent succesfully")
    );
});*/

gsap.from("header h1",{
    opacity:0,
    duration:1,
    
    delay:1,
    stagger:1

})