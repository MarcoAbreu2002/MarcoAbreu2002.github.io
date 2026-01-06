document.addEventListener('DOMContentLoaded', () => {
    
    // Typing Effect for the Hero Section
    const text = "init_security_protocol --user=Alex";
    const typingElement = document.getElementById('typing-effect');
    let index = 0;

    function typeWriter() {
        if (index < text.length) {
            typingElement.innerHTML += text.charAt(index);
            index++;
            setTimeout(typeWriter, 100); // Speed of typing
        }
    }

    // Start typing after a brief delay
    setTimeout(typeWriter, 500);

    // Smooth Scrolling for Navigation
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});