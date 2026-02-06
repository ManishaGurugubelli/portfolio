// Video hover functionality
const video1 = document.getElementById('projectVideo1');
const video2 = document.getElementById('projectVideo2');
const video3 = document.getElementById('projectVideo3');

// Sidebar elements
const sideBar = document.querySelector('.sidebar');
const menu = document.querySelector('.menu-icon');
const closeIcon = document.querySelector('.close-icon');
const hoverSign = document.querySelector('.hover-sign');

const videoList = [video1, video2, video3];

videoList.forEach(function(video) {
    if (video) {
        video.addEventListener("mouseover", function() {
            video.play();
            if (hoverSign) hoverSign.classList.add("active");
        });
        
        video.addEventListener("mouseout", function() {
            video.pause();
            if (hoverSign) hoverSign.classList.remove("active");
        });
    }
});

// Sidebar functionality
menu.addEventListener("click", function() {
    sideBar.classList.remove("close-sidebar");
    sideBar.classList.add("open-sidebar");
});

closeIcon.addEventListener("click", function() {
    sideBar.classList.remove("open-sidebar");
    sideBar.classList.add("close-sidebar");
});

// Close sidebar when clicking on links
const sidebarLinks = document.querySelectorAll('.sidebar a');
sidebarLinks.forEach(link => {
    link.addEventListener('click', () => {
        sideBar.classList.remove("open-sidebar");
        sideBar.classList.add("close-sidebar");
    });
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 70,
                behavior: 'smooth'
            });
        }
    });
});

// Form submission (basic)
function sendMessage() {
    const name = document.querySelector('input[type="text"]').value;
    const email = document.querySelector('input[type="email"]').value;
    const message = document.querySelector('.input-message').value;
    
    if (name && email && message) {
        alert(`Thank you, ${name}! Your message has been sent. I'll get back to you soon at ${email}.`);
        
        // Clear form
        document.querySelector('input[type="text"]').value = '';
        document.querySelector('input[type="email"]').value = '';
        document.querySelector('.input-message').value = '';
    } else {
        alert('Please fill in all fields before sending.');
    }
}

// Auto-play videos on scroll into view
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.5
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && entry.target.tagName === 'VIDEO') {
            entry.target.play();
        }
    });
}, observerOptions);

// Observe all videos
document.querySelectorAll('video').forEach(video => {
    observer.observe(video);
});