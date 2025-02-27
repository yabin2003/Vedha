// Navbar Toggle for Mobile
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Smooth Scrolling for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Form Submission
function sendEmailAndWhatsApp(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const mobile = document.getElementById('mobile').value;
    const product = document.getElementById('product').value;

    const emailSubject = "Product Inquiry";
    const emailBody = `Name: ${name}\nMobile: ${mobile}\nProduct: ${product}`;
    window.location.href = `mailto:nagulanuc@gmail.com?subject=${emailSubject}&body=${emailBody}`;
}

// WhatsApp Integration
function openWhatsApp() {
    const name = document.getElementById('name').value;
    const mobile = document.getElementById('mobile').value;
    const product = document.getElementById('product').value;

    const message = `Name: ${name}%0AMobile: ${mobile}%0AProduct: ${product}`;
    const phoneNumber = "919361290188";
    const whatsappURL = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${message}`;
    window.open(whatsappURL, "_blank");
}