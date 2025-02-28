
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

// WhatsApp Integration
function openWhatsApp() {
    const name = document.getElementById('name').value;
    const mobile = document.getElementById('mobile').value;
    const product = document.getElementById('product').value;

    if (!name || !mobile || !product) {
        alert("Please fill out all fields before proceeding.");
        return;
    }

    const message = `Name: ${name}%0AMobile: ${mobile}%0AProduct: ${product}`;
    const phoneNumber = "919361290188";
    const whatsappURL = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${message}`;
    window.open(whatsappURL, "_blank");
}
function openWhatsAppicon() {
    const name = document.getElementById('name').value;
    const mobile = document.getElementById('mobile').value;
    const product = document.getElementById('product').value;

    const message = `Name: ${name}%0AMobile: ${mobile}%0AProduct: ${product}`;
    const phoneNumber = "919361290188";
    const whatsappURL = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${message}`;
    window.open(whatsappURL, "_blank");
}

// Form Submission
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const mobile = document.getElementById('mobile').value;
    const product = document.getElementById('product').value;

    const emailSubject = "Product Inquiry";
    const emailBody = `Name: ${name}\nMobile: ${mobile}\nProduct: ${product}`;
    window.location.href = `mailto:vedhafabricsvbn@gmail.com?subject=${emailSubject}&body=${emailBody}`;

    // Hide the form and show the thank you message
    document.getElementById('contactForm').style.display = 'none';
    document.getElementById('thankYouMessage').style.display = 'block';
});
